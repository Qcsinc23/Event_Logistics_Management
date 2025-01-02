-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();
DROP FUNCTION IF EXISTS public.is_first_user();

-- Create a simpler profiles table
DROP TABLE IF EXISTS public.profiles;
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  full_name text,
  role text DEFAULT 'user',
  created_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  CONSTRAINT valid_role CHECK (role IN ('user', 'admin', 'staff'))
);

-- Create error logging table
CREATE TABLE IF NOT EXISTS public.error_logs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  error_time timestamptz DEFAULT now(),
  operation text,
  error_message text,
  details jsonb
);

-- Create a function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
DECLARE
  default_role text;
  user_count int;
BEGIN
  BEGIN
    -- Count existing users (excluding the new one)
    SELECT COUNT(*) INTO user_count FROM auth.users WHERE id != NEW.id;
    
    -- Set role based on user count
    IF user_count = 0 THEN
      default_role := 'admin';
    ELSE
      default_role := 'user';
    END IF;

    -- Update the user's metadata and role
    UPDATE auth.users
    SET 
      raw_user_meta_data = COALESCE(raw_user_meta_data, '{}'::jsonb) || 
        jsonb_build_object(
          'full_name', COALESCE(raw_user_meta_data->>'full_name', raw_user_meta_data->>'name', 'Unknown User'),
          'role', default_role,
          'created_at', CURRENT_TIMESTAMP
        ),
      role = default_role
    WHERE id = NEW.id;

    -- Create profile
    INSERT INTO public.profiles (
      id,
      email,
      full_name,
      role,
      created_at,
      updated_at
    ) VALUES (
      NEW.id,
      NEW.email,
      COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', 'Unknown User'),
      default_role,
      CURRENT_TIMESTAMP,
      CURRENT_TIMESTAMP
    );

  EXCEPTION WHEN OTHERS THEN
    -- Log the error
    INSERT INTO public.error_logs (operation, error_message, details)
    VALUES (
      'handle_new_user',
      SQLERRM,
      jsonb_build_object(
        'user_id', NEW.id,
        'email', NEW.email,
        'metadata', NEW.raw_user_meta_data,
        'error_detail', SQLSTATE
      )
    );
    RAISE EXCEPTION 'Error in handle_new_user: %', SQLERRM;
  END;

  RETURN NEW;
END;
$$;

-- Create the trigger to run AFTER INSERT
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Ensure RLS is enabled
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Update RLS policies
DROP POLICY IF EXISTS "Allow users to view own profile" ON public.profiles;
CREATE POLICY "Allow users to view own profile"
ON public.profiles FOR SELECT
USING (
  auth.uid() = id 
  OR 
  EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.uid() = auth.users.id
    AND auth.users.role = 'admin'
  )
);

DROP POLICY IF EXISTS "Allow users to update own profile" ON public.profiles;
CREATE POLICY "Allow users to update own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Ensure updated_at trigger exists
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Recreate updated_at trigger
DROP TRIGGER IF EXISTS set_profiles_updated_at ON public.profiles;
CREATE TRIGGER set_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

-- Add indexes
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);
CREATE INDEX IF NOT EXISTS profiles_role_idx ON public.profiles(role);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON public.profiles TO postgres, service_role;
GRANT SELECT ON public.profiles TO anon;
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.error_logs TO postgres, service_role;

-- Grant execute permission on functions
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO service_role;
GRANT EXECUTE ON FUNCTION public.set_updated_at() TO service_role;

-- Temporarily disable RLS for initial setup
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;
-- Re-enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
