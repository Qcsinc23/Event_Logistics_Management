import { Box, Typography, Grid, Paper, Button, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  // Mock data - replace with real data later
  const stats = {
    totalEvents: 12,
    upcomingEvents: 5,
    totalAttendees: 250,
    activeVenues: 8
  };

  const recentEvents = [
    { id: 1, name: 'Tech Conference 2024', date: '2024-03-15', attendees: 120 },
    { id: 2, name: 'Product Launch', date: '2024-03-20', attendees: 75 },
    { id: 3, name: 'Team Building Workshop', date: '2024-03-25', attendees: 30 }
  ];

  return (
    <Box sx={{ p: 3, backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">
          Dashboard
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/events/new')}
        >
          Create Event
        </Button>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <EventIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h5">{stats.totalEvents}</Typography>
            <Typography color="textSecondary">Total Events</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <EventIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h5">{stats.upcomingEvents}</Typography>
            <Typography color="textSecondary">Upcoming Events</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <PeopleIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h5">{stats.totalAttendees}</Typography>
            <Typography color="textSecondary">Total Attendees</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <LocationOnIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h5">{stats.activeVenues}</Typography>
            <Typography color="textSecondary">Active Venues</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Events */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Recent Events
        </Typography>
        <List>
          {recentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'action.hover',
                  cursor: 'pointer'
                }
              }}
              onClick={() => navigate(`/events/${event.id}`)}
            >
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText
                primary={event.name}
                secondary={`Date: ${event.date} | Attendees: ${event.attendees}`}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 2, textAlign: 'right' }}>
          <Button
            color="primary"
            onClick={() => navigate('/events')}
          >
            View All Events
          </Button>
        </Box>
      </Paper>

      {/* Quick Actions */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => navigate('/events/new')}
            >
              New Event
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<PeopleIcon />}
              onClick={() => navigate('/attendees')}
            >
              Manage Attendees
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<LocationOnIcon />}
              onClick={() => navigate('/venues')}
            >
              Manage Venues
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<EventIcon />}
              onClick={() => navigate('/calendar')}
            >
              View Calendar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default DashboardPage;
