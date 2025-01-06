import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services';
import { Box, CircularProgress, Typography, Container, Paper } from '@mui/material';

export const AuthCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Check URL hash for OAuth response
        if (window.location.hash) {
          const params = new URLSearchParams(window.location.hash.substring(1));
          const userId = params.get('userId');
          const secret = params.get('secret');

          if (userId && secret) {
            // Create session with OAuth credentials
            await authService.handleOAuthCallback();
            return;
          }
        }

        // If no hash parameters, try to get current session
        const user = await authService.getCurrentUser();
        if (user) {
          navigate('/dashboard');
          return;
        }

        throw new Error('Authentication failed');
      } catch (err: any) {
        console.error('Auth callback error:', err);
        setError(err.message || 'Authentication failed');
        
        // Clean up on error
        try {
          await authService.logout();
        } catch (signOutErr) {
          console.error('Sign out error:', signOutErr);
        }
        
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } finally {
        setIsLoading(false);
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #ff6f3c 0%, #ff9a7b 100%)',
        py: 4
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={12}
          sx={{
            p: { xs: 3, sm: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.95)',
          }}
        >
          {isLoading ? (
            <>
              <CircularProgress size={48} sx={{ color: 'primary.main', mb: 3 }} />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif',
                  textAlign: 'center',
                  color: 'text.primary'
                }}
              >
                Completing authentication...
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  mt: 2,
                  textAlign: 'center',
                  color: 'text.secondary'
                }}
              >
                Please wait while we verify your credentials
              </Typography>
            </>
          ) : error ? (
            <>
              <Typography 
                color="error" 
                variant="h6" 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif',
                  textAlign: 'center',
                  mb: 2
                }}
              >
                {error}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  textAlign: 'center',
                  color: 'text.secondary'
                }}
              >
                Redirecting you back to login...
              </Typography>
            </>
          ) : null}
        </Paper>
      </Container>
    </Box>
  );
};

export default AuthCallback;
