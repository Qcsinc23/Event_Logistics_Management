import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Divider,
  IconButton,
  InputAdornment,
  Alert,
  Link as MuiLink,
  useTheme
} from '@mui/material';
import { Google as GoogleIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services';

export const LoginPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await authService.login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authService.loginWithGoogle();
    } catch (err: any) {
      setError(err.message || 'Failed to login with Google. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
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
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.01)'
            }
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 700,
              color: 'primary.main',
              textAlign: 'center',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Event Logistics Manager
          </Typography>

          {error && (
            <Alert 
              severity="error" 
              sx={{ 
                width: '100%', 
                mb: 3,
                borderRadius: 2
              }}
            >
              {error}
            </Alert>
          )}

          <Box 
            component="form" 
            onSubmit={handleLogin} 
            sx={{ 
              width: '100%',
              '& .MuiTextField-root': {
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)'
                }
              }
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{
                        color: 'primary.main'
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isLoading}
              sx={{
                mb: 3,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 4px 6px rgba(255, 111, 60, 0.2)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(255, 111, 60, 0.3)'
                }
              }}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>

            <Divider 
              sx={{ 
                mb: 3,
                '&::before, &::after': {
                  borderColor: 'primary.light'
                }
              }}
            >
              OR
            </Divider>

            <Button
              fullWidth
              variant="outlined"
              size="large"
              onClick={handleGoogleLogin}
              startIcon={<GoogleIcon />}
              sx={{
                mb: 3,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                borderColor: 'primary.main',
                color: 'primary.main',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  borderColor: 'primary.main',
                  backgroundColor: 'primary.main',
                  color: 'white'
                }
              }}
            >
              Continue with Google
            </Button>

            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                variant="body2" 
                sx={{
                  color: 'text.secondary',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Don't have an account?{' '}
                <MuiLink 
                  component={Link} 
                  to="/signup" 
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease-in-out',
                    '&:hover': {
                      color: 'primary.dark'
                    }
                  }}
                >
                  Sign up
                </MuiLink>
              </Typography>
              <MuiLink
                component={Link}
                to="/forgot-password"
                sx={{
                  mt: 1,
                  display: 'inline-block',
                  color: 'text.secondary',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-1px)'
                  }
                }}
              >
                Forgot password?
              </MuiLink>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
