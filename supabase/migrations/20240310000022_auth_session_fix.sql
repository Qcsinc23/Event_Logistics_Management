-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Create session management table
CREATE TABLE IF NOT EXISTS auth.sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  last_refresh_at timestamptz,
  refresh_token text,
  token_lock boolean DEFAULT false,
  UNIQUE(user_id)
);

-- Create function to manage session locks
CREATE OR REPLACE FUNCTION auth.manage_session_lock(
  p_user_id uuid,
  p_acquire boolean
)
RETURNS boolean
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  v_success boolean;
BEGIN
  IF p_acquire THEN
    UPDATE auth.sessions
    SET token_lock = true,
        updated_at = CURRENT_TIMESTAMP
    WHERE user_id = p_user_id
    AND token_lock = false;
    
    GET DIAGNOSTICS v_success = ROW_COUNT;
    RETURN v_success > 0;
  ELSE
    UPDATE auth.sessions
    SET token_lock = false,
        updated_at = CURRENT_TIMESTAMP
    WHERE user_id = p_user_id;
    
    RETURN true;
  END IF;
END;
$$;

-- Create function to handle new user creation with session management
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

  -- Initialize session
  INSERT INTO auth.sessions (
    user_id,
    created_at,
    updated_at,
    token_lock
  ) VALUES (
    NEW.id,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    false
  );

  RETURN NEW;
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
  RETURN NEW;
END;
$$;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
  BEFORE INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA auth TO service_role;
GRANT ALL ON auth.sessions TO service_role;
GRANT EXECUTE ON FUNCTION auth.manage_session_lock TO service_role;
GRANT EXECUTE ON FUNCTION public.handle_new_user TO service_role;

-- Create function to clean up expired locks
CREATE OR REPLACE FUNCTION auth.cleanup_session_locks()
RETURNS void
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE auth.sessions
  SET token_lock = false
  WHERE token_lock = true
  AND updated_at < (CURRENT_TIMESTAMP - interval '5 minutes');
END;
$$;

-- Ensure RLS is properly configured
ALTER TABLE auth.sessions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for sessions
CREATE POLICY "Users can only access their own sessions"
ON auth.sessions
FOR ALL
USING (auth.uid() = user_id);

-- Grant necessary permissions to the sessions table
GRANT SELECT, UPDATE ON auth.sessions TO authenticated;
