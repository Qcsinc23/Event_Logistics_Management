import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabase/client';

interface Profile {
  id: string;
  role: string;
}

interface Session {
  user_id: string;
  updated_at: string;
  token_lock: boolean;
}

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        
        if (authError) throw authError;
        if (!user) throw new Error('No user found');

        // Get or create session
        const { error: sessionError } = await supabase
          .from('sessions')
          .upsert({
            user_id: user.id,
            updated_at: new Date().toISOString(),
            token_lock: false
          } as Session);

        if (sessionError) {
          console.error('Session error:', sessionError);
          // Continue anyway as this is not critical
        }

        // Get user profile
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();

        if (profileError) throw profileError;
        if (!profile) throw new Error('No profile found');

        // Set up session refresh interval
        const refreshInterval = setInterval(async () => {
          try {
            // Try to acquire lock
            const { data: lockData, error: lockError } = await supabase.rpc(
              'manage_session_lock',
              {
                p_user_id: user.id,
                p_acquire: true
              }
            );

            if (lockError) throw lockError;
            if (!lockData) return; // Failed to acquire lock, skip refresh

            // Refresh session
            const { error: refreshError } = await supabase.auth.refreshSession();
            if (refreshError) throw refreshError;

            // Release lock
            await supabase.rpc('manage_session_lock', {
              p_user_id: user.id,
              p_acquire: false
            });
          } catch (error) {
            console.error('Session refresh error:', error);
          }
        }, 30000); // Every 30 seconds

        // Redirect based on role
        if (profile.role === 'admin') {
          navigate('/dashboard');
        } else {
          navigate('/');
        }

        // Clean up interval on unmount
        return () => clearInterval(refreshInterval);
      } catch (error) {
        console.error('Auth callback error:', error);
        // Sign out on error
        await supabase.auth.signOut();
        navigate('/login');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Authenticating...</h2>
        <p>Please wait while we complete the authentication process.</p>
      </div>
    </div>
  );
}
