-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Create function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  error_info jsonb;
BEGIN
  BEGIN
    -- Set default role
    NEW.role := 'user';
    NEW.aud := 'authenticated';

    -- Initialize metadata if null
    IF NEW.raw_user_meta_data IS NULL THEN
      NEW.raw_user_meta_data := '{}'::jsonb;
    END IF;

    -- Update metadata
    NEW.raw_user_meta_data := NEW.raw_user_meta_data || 
      jsonb_build_object(
        'role', 'user',
        'created_at', CURRENT_TIMESTAMP
      );

    RETURN NEW;
  EXCEPTION WHEN OTHERS THEN
    error_info := jsonb_build_object(
      'error', SQLERRM,
      'email', NEW.email,
      'role', NEW.role,
      'aud', NEW.aud,
      'metadata', NEW.raw_user_meta_data
    );
    
    INSERT INTO public.error_logs (operation, error_message, details)
    VALUES ('create_user', SQLERRM, error_info);
    
    RAISE;
  END;
END;
$$;

-- Set ownership and permissions
ALTER FUNCTION public.handle_new_user() OWNER TO postgres;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO postgres;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO service_role;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO authenticated;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO anon;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
  BEFORE INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Grant necessary permissions
GRANT ALL ON auth.users TO postgres;
GRANT ALL ON auth.users TO service_role;
GRANT ALL ON auth.users TO authenticated;
GRANT ALL ON auth.users TO anon;

-- Grant permissions on error_logs
GRANT ALL ON public.error_logs TO postgres;
GRANT ALL ON public.error_logs TO service_role;
GRANT ALL ON public.error_logs TO authenticated;
GRANT ALL ON public.error_logs TO anon;
