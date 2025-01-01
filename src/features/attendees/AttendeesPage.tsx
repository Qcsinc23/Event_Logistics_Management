import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

interface Attendee {
  id: string;
  name: string;
  email: string;
  events: number;
  lastAttended: string;
}

const mockAttendees: Attendee[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', events: 3, lastAttended: '2024-03-01' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', events: 5, lastAttended: '2024-03-10' },
  { id: '3', name: 'Bob Wilson', email: 'bob@example.com', events: 2, lastAttended: '2024-02-28' },
];

const AttendeesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [attendees] = useState<Attendee[]>(mockAttendees);

  const filteredAttendees = attendees.filter(attendee =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Attendees
        </Typography>
        <Button
          variant="contained"
          startIcon={<PersonAddIcon />}
          onClick={() => navigate('/attendees/new')}
        >
          Add Attendee
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search attendees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="center">Events Attended</TableCell>
                <TableCell>Last Attended</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAttendees.map((attendee) => (
                <TableRow key={attendee.id}>
                  <TableCell>{attendee.name}</TableCell>
                  <TableCell>{attendee.email}</TableCell>
                  <TableCell align="center">{attendee.events}</TableCell>
                  <TableCell>{new Date(attendee.lastAttended).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      onClick={() => {/* TODO: Implement view details */}}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          Showing {filteredAttendees.length} of {attendees.length} attendees
        </Typography>
      </Box>
    </Box>
  );
};

export default AttendeesPage;
