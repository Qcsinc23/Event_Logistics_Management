import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box className="container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        py: 8,
      }}
    >
      <Typography variant="h1" sx={{ mb: 3, fontSize: '8rem', fontWeight: 700 }}>
        404
      </Typography>
      <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 500 }}>
        Page Not Found
      </Typography>
      <Typography variant="h5" component="p" sx={{ mb: 4, color: 'text.secondary' }}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button variant="contained" size="large" onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Box>
  );
}

export default NotFoundPage;
