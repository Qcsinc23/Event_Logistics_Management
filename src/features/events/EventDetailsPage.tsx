import { Box, Typography, Paper, Grid, Button, Chip, Divider } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: number;
  organizer: string;
  contactEmail: string;
  contactPhone: string;
  attendees: number;
  status: string;
}

const EventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockEvent: Event = {
      id: id || '1',
      name: 'Tech Conference 2024',
      date: '2024-03-15',
      time: '09:00',
      location: 'Convention Center',
      description: 'Join us for an exciting tech conference featuring industry leaders and innovative discussions.',
      capacity: 500,
      organizer: 'Tech Events Inc.',
      contactEmail: 'contact@techevents.com',
      contactPhone: '(555) 123-4567',
      attendees: 250,
      status: 'Upcoming'
    };

    setEvent(mockEvent);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Loading event details...</Typography>
      </Box>
    );
  }

  if (!event) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Event not found</Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/events')}
          sx={{ mt: 2 }}
        >
          Back to Events
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            {event.name}
          </Typography>
          <Chip 
            label={event.status}
            color="primary"
            size="small"
          />
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => navigate(`/events/${id}/edit`)}
          >
            Edit Event
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => {/* TODO: Implement delete */}}
          >
            Delete Event
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Event Details
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EventIcon color="primary" />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Date
                    </Typography>
                    <Typography>
                      {new Date(event.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EventIcon color="primary" />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Time
                    </Typography>
                    <Typography>
                      {event.time}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon color="primary" />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography>
                      {event.location}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              Description
            </Typography>
            <Typography>
              {event.description}
            </Typography>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Attendance
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <PeopleIcon color="primary" />
              <Typography>
                {event.attendees} / {event.capacity} attendees
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={() => {/* TODO: Implement registration */}}
            >
              Register Attendee
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Organizer Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PersonIcon color="primary" />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Organizer
                  </Typography>
                  <Typography>
                    {event.organizer}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography>
                    {event.contactEmail}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon color="primary" />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Phone
                  </Typography>
                  <Typography>
                    {event.contactPhone}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventDetailsPage;
