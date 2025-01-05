-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();
DROP FUNCTION IF EXISTS public.create_profile(uuid, text, text, text);

-- Create error logging table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.error_logs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  error_time timestamptz DEFAULT now(),
  operation text,
  error_message text,
  details jsonb
);

-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  full_name text,
  role text DEFAULT 'user',
  created_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  CONSTRAINT valid_role CHECK (role IN ('user', 'admin', 'staff'))
);

-- Function to create profile
CREATE OR REPLACE FUNCTION public.create_profile(
  user_id uuid,
  user_email text,
  user_full_name text,
  user_role text
)
RETURNS void
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    role,
    created_at,
    updated_at
  ) VALUES (
    user_id,
    user_email,
    user_full_name,
    user_role,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  );
EXCEPTION WHEN OTHERS THEN
  INSERT INTO public.error_logs (operation, error_message, details)
  VALUES (
    'create_profile',
    SQLERRM,
    jsonb_build_object(
      'user_id', user_id,
      'email', user_email,
      'full_name', user_full_name,
      'role', user_role,
      'error_detail', SQLSTATE
    )
  );
  RAISE EXCEPTION 'Error in create_profile: %', SQLERRM;
END;
$$;

-- Function to handle new user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  default_role text;
  user_count int;
  user_full_name text;
BEGIN
  -- Count existing users (excluding the new one)
  SELECT COUNT(*) INTO user_count FROM auth.users WHERE id != NEW.id;
  
  -- Set role based on user count
  IF user_count = 0 THEN
    default_role := 'admin';
  ELSE
    default_role := 'user';
  END IF;

  -- Get full name from metadata
  user_full_name := COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', 'Unknown User');

  -- Set metadata and role in NEW record
  NEW.raw_user_meta_data := COALESCE(NEW.raw_user_meta_data, '{}'::jsonb) || 
    jsonb_build_object(
      'full_name', user_full_name,
      'role', default_role,
      'created_at', CURRENT_TIMESTAMP
    );
  NEW.role := default_role;

  -- Create profile using separate function
  BEGIN
    PERFORM public.create_profile(
      NEW.id,
      NEW.email,
      user_full_name,
      default_role
    );
  EXCEPTION WHEN OTHERS THEN
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
  END;

  RETURN NEW;
END;
$$;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
  BEFORE INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Ensure RLS is enabled
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.error_logs ENABLE ROW LEVEL SECURITY;

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

-- Allow admins to view error logs
DROP POLICY IF EXISTS "Allow admins to view error logs" ON public.error_logs;
CREATE POLICY "Allow admins to view error logs"
ON public.error_logs FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.uid() = auth.users.id
    AND auth.users.role = 'admin'
  )
);

-- Add indexes
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);
CREATE INDEX IF NOT EXISTS profiles_role_idx ON public.profiles(role);
CREATE INDEX IF NOT EXISTS error_logs_operation_idx ON public.error_logs(operation);
CREATE INDEX IF NOT EXISTS error_logs_error_time_idx ON public.error_logs(error_time);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON public.profiles TO postgres, service_role;
GRANT ALL ON public.error_logs TO postgres, service_role;
GRANT SELECT ON public.profiles TO anon;
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT ON public.error_logs TO authenticated;

-- Grant execute permission on functions
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO service_role;
GRANT EXECUTE ON FUNCTION public.create_profile(uuid, text, text, text) TO service_role;
