import { Box, Typography, Paper, Grid, Card, CardContent, CardActions, Button, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';

interface Venue {
  id: string;
  name: string;
  address: string;
  capacity: number;
  upcomingEvents: number;
  totalEvents: number;
}

const mockVenues: Venue[] = [
  {
    id: '1',
    name: 'Grand Convention Center',
    address: '123 Main St, City',
    capacity: 1000,
    upcomingEvents: 3,
    totalEvents: 15
  },
  {
    id: '2',
    name: 'Tech Hub',
    address: '456 Innovation Ave',
    capacity: 300,
    upcomingEvents: 2,
    totalEvents: 8
  },
  {
    id: '3',
    name: 'Community Hall',
    address: '789 Community Rd',
    capacity: 500,
    upcomingEvents: 1,
    totalEvents: 12
  }
];

const VenuesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [venues] = useState<Venue[]>(mockVenues);

  const filteredVenues = venues.filter(venue =>
    venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Venues
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/venues/new')}
        >
          Add Venue
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search venues..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />

        <Grid container spacing={3}>
          {filteredVenues.map((venue) => (
            <Grid item xs={12} sm={6} md={4} key={venue.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {venue.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <LocationOnIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      {venue.address}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <PeopleIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      Capacity: {venue.capacity}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EventIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      {venue.upcomingEvents} upcoming / {venue.totalEvents} total events
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => {/* TODO: Implement view details */}}>
                    View Details
                  </Button>
                  <Button size="small" onClick={() => {/* TODO: Implement edit */}}>
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          Showing {filteredVenues.length} of {venues.length} venues
        </Typography>
      </Box>
    </Box>
  );
};

export default VenuesPage;
