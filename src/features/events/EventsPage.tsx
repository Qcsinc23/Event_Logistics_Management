import { Box, Typography, Button, Paper, Breadcrumbs, Link } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import GridViewIcon from '@mui/icons-material/GridView';
import useEventStore from '../../store/store';
import EventList from './EventList';

function EventsPage() {
  const { fetchEvents } = useEventStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <Box sx={{ p: 3 }}>
      {/* Breadcrumb and Title Section */}
      <Box sx={{ mb: 3 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Link color="inherit" href="/">
            Dashboard
          </Link>
          <Link color="inherit" href="/events">
            Events
          </Link>
          <Typography color="text.primary">Event List</Typography>
        </Breadcrumbs>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="h1">
            Event Management
          </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<GridViewIcon />}
            onClick={() => navigate('/events/layout')}
          >
            Layout Tool
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/events/new')}
          >
            Create Event
          </Button>
        </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ mb: 3, color: 'text.secondary' }}>
          Efficiently manage and track all your events
        </Typography>
        <EventList />
      </Paper>
    </Box>
  );
}

export default EventsPage;
