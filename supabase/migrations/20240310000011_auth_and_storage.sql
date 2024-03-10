-- Create custom roles enum
CREATE TYPE user_role AS ENUM ('admin', 'user');

-- Add role column to auth.users
ALTER TABLE auth.users 
ADD COLUMN IF NOT EXISTS role user_role DEFAULT 'user';

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION auth.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM auth.users
    WHERE id = auth.uid()
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Set default role for new users
  NEW.role := 'user';
  
  -- Create a profile entry
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  BEFORE INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Create storage buckets if they don't exist
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('event-layouts', 'event-layouts', false),
  ('inventory-images', 'inventory-images', false),
  ('bundle-images', 'bundle-images', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for event layouts
CREATE POLICY "Allow authenticated users to view event layout images"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'event-layouts' 
  AND auth.role() = 'authenticated'
  AND EXISTS (
    SELECT 1 FROM event_layouts el
    WHERE storage.filename(name) = el.background_image_url
    AND (
      EXISTS (
        SELECT 1 FROM events e
        WHERE e.id = el.event_id
        AND (auth.is_admin() OR e.created_by = auth.uid())
      )
    )
  )
);

CREATE POLICY "Allow users to upload event layout images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'event-layouts'
  AND auth.role() = 'authenticated'
);

-- Storage policies for inventory images
CREATE POLICY "Allow authenticated to view inventory images"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'inventory-images'
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Allow users to upload inventory images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'inventory-images'
  AND auth.role() = 'authenticated'
);

-- Storage policies for bundle images
CREATE POLICY "Allow authenticated to view bundle images"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'bundle-images'
  AND auth.role() = 'authenticated'
  AND EXISTS (
    SELECT 1 FROM inventory_bundles b
    WHERE storage.filename(name) = b.image_url
    AND (b.is_public OR b.created_by = auth.uid())
  )
);

CREATE POLICY "Allow users to upload bundle images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'bundle-images'
  AND auth.role() = 'authenticated'
);

-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Allow users to view own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Allow users to update own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = id);

-- Add updated_at trigger to profiles
CREATE TRIGGER set_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

-- Add indexes
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);

-- Configure auth settings
SELECT auth.set_config(
  'security_settings',
  JSONB_BUILD_OBJECT(
    'SECURITY_EMAIL_DOMAINS_ALLOWED', '{}',  -- Allow all email domains
    'SECURITY_REFRESH_TOKEN_REUSE_INTERVAL', 10,  -- 10 seconds
    'SECURITY_PASSWORD_MIN_LENGTH', 8,
    'SECURITY_PASSWORD_REQUIRE_LOWERCASE', true,
    'SECURITY_PASSWORD_REQUIRE_UPPERCASE', true,
    'SECURITY_PASSWORD_REQUIRE_SPECIAL_CHARACTER', true,
    'SECURITY_PASSWORD_REQUIRE_NUMBER', true,
    'SECURITY_MANUAL_LINKING_ENABLED', false,
    'SECURITY_EMAIL_CHANGE_CONFIRM', true
  )
);
