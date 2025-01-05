import { Box, Typography, Paper, Grid, Button, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import EventIcon from '@mui/icons-material/Event';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Event {
  id: string;
  name: string;
  time: string;
  venue: string;
  attendees: number;
}

interface DayEvents {
  date: string;
  events: Event[];
}

// Mock data for calendar events
const mockCalendarData: DayEvents[] = [
  {
    date: '2024-03-15',
    events: [
      { id: '1', name: 'Tech Conference', time: '09:00', venue: 'Grand Hall', attendees: 200 },
      { id: '2', name: 'Workshop', time: '14:00', venue: 'Room A', attendees: 50 }
    ]
  },
  {
    date: '2024-03-16',
    events: [
      { id: '3', name: 'Product Launch', time: '10:00', venue: 'Main Stage', attendees: 150 }
    ]
  },
  {
    date: '2024-03-17',
    events: [
      { id: '4', name: 'Team Building', time: '11:00', venue: 'Recreation Center', attendees: 30 },
      { id: '5', name: 'Networking Event', time: '17:00', venue: 'Lounge', attendees: 75 }
    ]
  }
];

const CalendarPage = () => {
  const [currentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getEventsForDate = (date: Date): Event[] => {
    const dateStr = date.toISOString().split('T')[0];
    const dayEvents = mockCalendarData.find(d => d.date === dateStr);
    return dayEvents?.events || [];
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Calendar
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<NavigateBeforeIcon />}
            onClick={() => {/* TODO: Implement previous month */}}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            endIcon={<NavigateNextIcon />}
            onClick={() => {/* TODO: Implement next month */}}
          >
            Next
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </Typography>
            <Grid container sx={{ mt: 2 }}>
              {weekDays.map(day => (
                <Grid item xs={12/7} key={day} sx={{ textAlign: 'center', fontWeight: 'bold', p: 1 }}>
                  {day}
                </Grid>
              ))}
              {days.map((day, index) => (
                <Grid item xs={12/7} key={index}>
                  <Box
                    sx={{
                      p: 1,
                      minHeight: 80,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: day && day.toDateString() === selectedDate.toDateString() ? 'action.selected' : 'background.paper',
                      cursor: day ? 'pointer' : 'default',
                      '&:hover': day ? { backgroundColor: 'action.hover' } : {}
                    }}
                    onClick={() => day && setSelectedDate(day)}
                  >
                    {day && (
                      <>
                        <Typography>{day.getDate()}</Typography>
                        {getEventsForDate(day).length > 0 && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <EventIcon color="primary" sx={{ fontSize: 16 }} />
                            <Typography variant="caption">
                              {getEventsForDate(day).length} events
                            </Typography>
                          </Box>
                        )}
                      </>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Events for {selectedDate.toLocaleDateString()}
            </Typography>
            {getEventsForDate(selectedDate).length === 0 ? (
              <Typography color="text.secondary">No events scheduled</Typography>
            ) : (
              getEventsForDate(selectedDate).map(event => (
                <Card key={event.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle1">{event.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Time: {event.time}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Venue: {event.venue}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Attendees: {event.attendees}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CalendarPage;
