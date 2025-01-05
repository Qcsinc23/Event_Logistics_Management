-- Create error logging table
CREATE TABLE IF NOT EXISTS public.error_logs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  error_time timestamptz DEFAULT now(),
  operation text,
  error_message text,
  details jsonb
);

-- Grant access to service role
GRANT ALL ON public.error_logs TO service_role;
