import React, { useEffect, useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { databases } from '../services';
import { COLLECTIONS, DATABASE_ID } from '../config/constants';
import { Query } from 'appwrite';
import { Event } from '../features/events/types/event';
import { Task } from '../features/tasks/types/task';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
  Alert
} from '@mui/material';
import {
  Add as AddIcon,
  Event as EventIcon,
  Assignment as TaskIcon,
  Inventory as InventoryIcon
} from '@mui/icons-material';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [recentTasks, setRecentTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    totalEvents: 0,
    upcomingEvents: 0,
    completedTasks: 0,
    pendingTasks: 0
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch upcoming events
        const eventsResponse = await databases.listDocuments(
          DATABASE_ID,
          COLLECTIONS.EVENTS,
          [
            Query.greaterThan('start_date', new Date().toISOString()),
            Query.orderAsc('start_date'),
            Query.limit(5)
          ]
        );
        setUpcomingEvents(eventsResponse.documents.map(doc => ({
          $id: doc.$id,
          name: doc.name,
          description: doc.description,
          start_date: doc.start_date,
          end_date: doc.end_date,
          venue_id: doc.venue_id,
          status: doc.status,
          created_at: doc.$createdAt,
          updated_at: doc.$updatedAt
        } as Event)));

        // Fetch recent tasks
        const tasksResponse = await databases.listDocuments(
          DATABASE_ID,
          COLLECTIONS.EVENT_TASKS,
          [
            Query.orderDesc('created_at'),
            Query.limit(5)
          ]
        );
        setRecentTasks(tasksResponse.documents.map(doc => ({
          $id: doc.$id,
          title: doc.title,
          description: doc.description,
          event_id: doc.event_id,
          assignee_id: doc.assignee_id,
          due_date: doc.due_date,
          priority: doc.priority,
          status: doc.status,
          created_at: doc.$createdAt,
          updated_at: doc.$updatedAt
        } as Task)));

        // Fetch statistics
        const [allEvents, allTasks] = await Promise.all([
          databases.listDocuments(DATABASE_ID, COLLECTIONS.EVENTS, []),
          databases.listDocuments(DATABASE_ID, COLLECTIONS.EVENT_TASKS, [])
        ]);

        setStats({
          totalEvents: allEvents.total,
          upcomingEvents: allEvents.documents.filter(
            doc => new Date(doc.start_date) > new Date()
          ).length,
          completedTasks: allTasks.documents.filter(
            doc => doc.status === 'completed'
          ).length,
          pendingTasks: allTasks.documents.filter(
            doc => doc.status !== 'completed'
          ).length
        });
      } catch (err: any) {
        setError(err.message || 'Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg">
        <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4" component="h1">
            Dashboard
          </Typography>
          <Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate('/events/new')}
              sx={{ mr: 2 }}
            >
              Create Event
            </Button>
            <Button
              variant="outlined"
              startIcon={<TaskIcon />}
              onClick={() => navigate('/tasks/new')}
            >
              Add Task
            </Button>
          </Box>
        </Box>

        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <EventIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4">{stats.totalEvents}</Typography>
              <Typography color="textSecondary">Total Events</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <EventIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4">{stats.upcomingEvents}</Typography>
              <Typography color="textSecondary">Upcoming Events</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <TaskIcon color="success" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4">{stats.completedTasks}</Typography>
              <Typography color="textSecondary">Completed Tasks</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <TaskIcon color="warning" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4">{stats.pendingTasks}</Typography>
              <Typography color="textSecondary">Pending Tasks</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6">Upcoming Events</Typography>
                  <Button
                    component={RouterLink}
                    to="/events"
                    size="small"
                  >
                    View All
                  </Button>
                </Box>
                {upcomingEvents.length === 0 ? (
                  <Typography color="textSecondary">No upcoming events</Typography>
                ) : (
                  <Box>
                    {upcomingEvents.map((event) => (
                      <Paper
                        key={event.$id}
                        sx={{ p: 2, mb: 2, '&:last-child': { mb: 0 } }}
                        variant="outlined"
                      >
                        <Link
                          component={RouterLink}
                          to={`/events/${event.$id}`}
                          underline="none"
                          color="inherit"
                        >
                          <Typography variant="subtitle1" fontWeight={500}>
                            {event.name}
                          </Typography>
                          <Typography color="textSecondary" fontSize={14}>
                            {new Date(event.start_date).toLocaleDateString()}
                          </Typography>
                          <Box mt={1}>
                            <Chip
                              label={event.status}
                              size="small"
                              color={
                                event.status === 'completed' ? 'success' :
                                event.status === 'cancelled' ? 'error' :
                                event.status === 'in-progress' ? 'warning' : 'default'
                              }
                            />
                          </Box>
                        </Link>
                      </Paper>
                    ))}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6">Recent Tasks</Typography>
                  <Button
                    component={RouterLink}
                    to="/tasks"
                    size="small"
                  >
                    View All
                  </Button>
                </Box>
                {recentTasks.length === 0 ? (
                  <Typography color="textSecondary">No recent tasks</Typography>
                ) : (
                  <Box>
                    {recentTasks.map((task) => (
                      <Paper
                        key={task.$id}
                        sx={{ p: 2, mb: 2, '&:last-child': { mb: 0 } }}
                        variant="outlined"
                      >
                        <Link
                          component={RouterLink}
                          to={`/tasks/${task.$id}`}
                          underline="none"
                          color="inherit"
                        >
                          <Typography variant="subtitle1" fontWeight={500}>
                            {task.title}
                          </Typography>
                          <Typography color="textSecondary" fontSize={14}>
                            Due: {task.due_date ? new Date(task.due_date).toLocaleDateString() : 'No due date'}
                          </Typography>
                          <Box mt={1} display="flex" gap={1}>
                            <Chip
                              label={task.priority}
                              size="small"
                              color={
                                task.priority === 'high' ? 'error' :
                                task.priority === 'medium' ? 'warning' : 'default'
                              }
                            />
                            <Chip
                              label={task.status}
                              size="small"
                              color={
                                task.status === 'completed' ? 'success' :
                                task.status === 'in-progress' ? 'warning' : 'default'
                              }
                            />
                          </Box>
                        </Link>
                      </Paper>
                    ))}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
