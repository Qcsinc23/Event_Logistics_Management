import { useState } from 'react';
import { account } from '../../config/appwrite';
import { ID } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Create user account
      await account.create(
        ID.unique(),
        email,
        password,
        name
      );

      // Create session (login)
      await account.createSession(email, password);

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
      />

      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        fullWidth
      >
        {loading ? 'Signing up...' : 'Sign Up'}
      </Button>

      <Button
        variant="text"
        onClick={() => navigate('/login')}
        fullWidth
      >
        Already have an account? Log in
      </Button>
    </Box>
  );
};

export default SignupPage;
