import React, { useEffect } from 'react';
import {
  Box, 
  Typography, 
  CircularProgress, 
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Tooltip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useEventStore from '../../store/store';

function EventList() {
  const { events, loading, error } = useEventStore();
  const navigate = useNavigate();

  // Fetch events when component mounts
  useEffect(() => {
    useEventStore.getState().fetchEvents();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={2}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft':
        return 'default';
      case 'planned':
        return 'info';
      case 'confirmed':
        return 'success';
      case 'in-progress':
        return 'primary';
      case 'completed':
        return 'success';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'background.default' }}>
            <TableCell>Event Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="center">Attendees</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id} hover>
              <TableCell>{event.name}</TableCell>
              <TableCell>{new Date(event.start_date).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(event.start_date).toLocaleTimeString()}</TableCell>
              <TableCell>{event.venue_id || 'TBD'}</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell>
                <Chip 
                  label={event.status} 
                  color={getStatusColor(event.status) as any}
                  size="small"
                />
              </TableCell>
              <TableCell align="center">
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                  <Tooltip title="View Details">
                    <IconButton 
                      size="small"
                      onClick={() => navigate(`/events/${event.id}`)}
                    >
                      <VisibilityIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit Event">
                    <IconButton 
                      size="small"
                      onClick={() => navigate(`/events/${event.id}/edit`)}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Event">
                    <IconButton 
                      size="small"
                      color="error"
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this event?')) {
                          useEventStore.getState().deleteEvent(event.id);
                        }
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EventList;
