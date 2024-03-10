-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Create a more robust function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  default_role text := 'admin';  -- Set first user as admin
  user_count int;
BEGIN
  -- Count existing users to determine if this is the first user
  SELECT COUNT(*) INTO user_count FROM auth.users;
  
  -- Initialize metadata if null
  IF NEW.raw_user_meta_data IS NULL THEN
    NEW.raw_user_meta_data := '{}'::jsonb;
  END IF;

  -- Set role based on user count
  IF user_count > 0 THEN
    default_role := 'user';
  END IF;

  -- Set metadata with proper role
  NEW.raw_user_meta_data := NEW.raw_user_meta_data || jsonb_build_object(
    'full_name', COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', 'Unknown User'),
    'created_at', CURRENT_TIMESTAMP,
    'role', COALESCE(NEW.raw_user_meta_data->>'role', default_role)
  );

  -- Set role in auth.users
  NEW.role := COALESCE(NEW.raw_user_meta_data->>'role', default_role);

  -- Create profile
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    created_at,
    updated_at
  ) VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  );

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'Error in handle_new_user: %', SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate the trigger
CREATE TRIGGER on_auth_user_created
  BEFORE INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Ensure RLS is enabled
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Update RLS policies
DROP POLICY IF EXISTS "Allow users to view own profile" ON public.profiles;
CREATE POLICY "Allow users to view own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = id);

DROP POLICY IF EXISTS "Allow users to update own profile" ON public.profiles;
CREATE POLICY "Allow users to update own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Grant necessary permissions
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT ON public.profiles TO anon;

-- Add indexes
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);
