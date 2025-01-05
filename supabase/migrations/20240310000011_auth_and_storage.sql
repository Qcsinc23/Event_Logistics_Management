-- Create custom roles enum if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
    CREATE TYPE user_role AS ENUM ('admin', 'user');
  END IF;
END $$;

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

-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add indexes
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);

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
);

CREATE POLICY "Allow users to upload bundle images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'bundle-images'
  AND auth.role() = 'authenticated'
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

-- Create the set_updated_at function if it doesn't exist
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at trigger to profiles
DROP TRIGGER IF EXISTS set_profiles_updated_at ON public.profiles;
CREATE TRIGGER set_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();
