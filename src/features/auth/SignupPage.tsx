import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';
import api from '../../services/api';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      console.log('Starting signup process...');
      
      try {
        // Try to get the user's session first
        const { data: sessionData } = await api.auth.getSession();
        if (sessionData?.session) {
          console.log('User already has a session');
          throw new Error('User already registered');
        }
      } catch (sessionError) {
        // Ignore session errors as we expect no session for new users
        console.log('No existing session found');
      }
      
      console.log('Proceeding with signup...');
      const { data, error } = await api.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
          data: {
            email,
            created_at: new Date().toISOString()
          }
        }
      });
      
      if (error) {
        console.error('Signup error details:', {
          message: error.message,
          status: error.status,
          name: error.name
        });
        throw error;
      }
      
      if (!data.user) {
        console.error('No user data in response');
        throw new Error('Signup failed - no user data returned');
      }
      
      console.log('Signup successful:', {
        id: data.user.id,
        email: data.user.email,
        created_at: data.user.created_at
      });
      if (data.user) navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
      if (error instanceof Error) {
        if (error.message.includes('User already registered')) {
          setError('This email is already registered. Please log in.');
        } else if (error.message.includes('password')) {
          setError('Password must be at least 6 characters');
        } else if (error.message.includes('network')) {
          setError('Network error. Please check your internet connection and try again.');
        } else if (error.message.includes('database') || error.message.includes('db')) {
          setError('Unable to create account at this time. Please try again in a few minutes.');
        } else {
          setError('Signup failed. Please try again or contact support if the problem persists.');
        }
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSignup}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
        >
          Sign Up
        </Button>
        <Button
          onClick={() => navigate('/login')}
          fullWidth
          sx={{ mt: 1 }}
        >
          Already have an account? Login
        </Button>
      </form>
    </Box>
  );
};

export default SignupPage;
