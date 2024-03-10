import { Box, Typography } from '@mui/material';

function HomePage() {
  return (
    <Box className="container" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 500 }}>
        Welcome to Event Logistics Management
      </Typography>
      <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4, color: 'text.secondary' }}>
        Streamline your event planning with our comprehensive logistics platform
      </Typography>
      <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' } }}>
        <Box sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>Event Planning</Typography>
          <Typography variant="body1">
            Organize and manage all aspects of your events in one place.
          </Typography>
        </Box>
        <Box sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>Real-time Tracking</Typography>
          <Typography variant="body1">
            Monitor event progress and logistics in real-time.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
