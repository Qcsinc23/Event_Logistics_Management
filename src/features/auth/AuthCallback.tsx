import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../../config/appwrite';
import { Box, CircularProgress, Typography } from '@mui/material';

export const AuthCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get current session
        const session = await account.getSession('current');
        if (!session) {
          throw new Error('No session found');
        }

        // Get user
        const user = await account.get();
        if (!user) {
          throw new Error('No user found');
        }

        // Redirect to dashboard
        navigate('/dashboard');
      } catch (err: any) {
        console.error('Auth callback error:', err);
        setError(err.message || 'Authentication failed');
        
        // Sign out and redirect to login on error
        try {
          await account.deleteSession('current');
        } catch (signOutErr) {
          console.error('Sign out error:', signOutErr);
        }
        navigate('/login');
      }
    };

    handleCallback();
  }, [navigate]);

  if (error) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography color="error" variant="h6">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <CircularProgress />
      <Typography sx={{ mt: 2 }}>
        Completing authentication...
      </Typography>
    </Box>
  );
};

export default AuthCallback;
