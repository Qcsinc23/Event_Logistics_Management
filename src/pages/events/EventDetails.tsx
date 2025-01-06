import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { storage, databases, client } from '../../services';
import { Query } from 'appwrite';
import { COLLECTIONS, DATABASE_ID, STORAGE_BUCKETS } from '../../config/constants';
import { Event } from '../../features/events/types/event';
import { Task } from '../../features/tasks/types/task';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
  Alert,
  Paper
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  CloudUpload as CloudUploadIcon
} from '@mui/icons-material';

export const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [documents, setDocuments] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [teamEmail, setTeamEmail] = useState('');
  const [teamRole, setTeamRole] = useState<'admin' | 'member'>('member');

  useEffect(() => {
    const fetchEventDetails = async () => {
      if (!id) return;

      try {
        // Fetch event details
        const eventData = await databases.getDocument(
          DATABASE_ID,
          COLLECTIONS.EVENTS,
          id
        );
        setEvent(eventData as Event);

        // Fetch associated tasks
        const tasksResponse = await databases.listDocuments(
          DATABASE_ID,
          COLLECTIONS.TASKS,
          [Query.equal('event_id', id)]
        );
        setTasks(tasksResponse.documents as Task[]);

        // Fetch documents
        const docsResponse = await storage.listFiles(
          STORAGE_BUCKETS.EVENT_DOCUMENTS,
          [Query.equal('event_id', id)]
        );
        setDocuments(docsResponse.files);

        // Subscribe to real-time updates
        const unsubscribe = client.subscribe(
          `databases.${DATABASE_ID}.collections.${COLLECTIONS.EVENTS}.documents.${id}`,
          (response: {
            events: string[];
            payload: Event;
          }) => {
            if (response.events.includes('databases.*.collections.*.documents.*.update')) {
              setEvent(response.payload);
            }
          }
        );

        return () => {
          unsubscribe();
        };
      } catch (err: any) {
        setError(err.message || 'Failed to load event details');
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  const handleStatusUpdate = async (newStatus: Event['status']) => {
    if (!event || !id) return;

    try {
      await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.EVENTS,
        id,
        { status: newStatus }
      );
    } catch (err: any) {
      setError(err.message || 'Failed to update event status');
    }
  };

  const handleDocumentUpload = async (file: File) => {
    if (!id) return;

    try {
      setUploading(true);
      const response = await storage.createFile(
        STORAGE_BUCKETS.EVENT_DOCUMENTS,
        'unique()',
        file
      );

      // Create metadata document linking file to event
      await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.EVENT_DOCUMENTS,
        'unique()',
        {
          event_id: id,
          file_id: response.$id,
          name: file.name,
          size: file.size,
          type: file.type
        }
      );

      // Refresh documents list
      const docsResponse = await storage.listFiles(
        STORAGE_BUCKETS.EVENT_DOCUMENTS,
        [Query.equal('event_id', id)]
      );
      setDocuments(docsResponse.files);
    } catch (err: any) {
      setError(err.message || 'Failed to upload document');
    } finally {
      setUploading(false);
    }
  };

  const handleAddTeamMember = async () => {
    if (!event || !id || !teamEmail) return;

    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.EVENT_TEAM_MEMBERS,
        'unique()',
        {
          event_id: id,
          email: teamEmail,
          role: teamRole
        }
      );
      setTeamEmail('');
    } catch (err: any) {
      setError(err.message || 'Failed to add team member');
    }
  };

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

  if (!event) {
    return (
      <Container maxWidth="lg">
        <Alert severity="info" sx={{ mt: 2 }}>Event not found</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h4" component="h1">
                {event.name}
              </Typography>
              <Box>
                <Select
                  size="small"
                  value={event.status}
                  onChange={(e) => handleStatusUpdate(e.target.value as Event['status'])}
                  sx={{ mr: 2 }}
                >
                  <MenuItem value="draft">Draft</MenuItem>
                  <MenuItem value="planned">Planned</MenuItem>
                  <MenuItem value="confirmed">Confirmed</MenuItem>
                  <MenuItem value="in-progress">In Progress</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                  <MenuItem value="cancelled">Cancelled</MenuItem>
                </Select>
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={() => navigate(`/events/${id}/edit`)}
                >
                  Edit Event
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Event Details</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography><strong>Description:</strong> {event.description}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography><strong>Start Date:</strong> {new Date(event.start_date).toLocaleString()}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography><strong>End Date:</strong> {new Date(event.end_date).toLocaleString()}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography><strong>Venue:</strong> {event.venue_id}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6">Tasks</Typography>
                  <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={() => navigate(`/tasks/new?eventId=${id}`)}
                  >
                    Add Task
                  </Button>
                </Box>
                {tasks.length === 0 ? (
                  <Typography color="textSecondary">No tasks assigned</Typography>
                ) : (
                  <Grid container spacing={2}>
                    {tasks.map((task) => (
                      <Grid item xs={12} key={task.$id}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                          <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle1">{task.title}</Typography>
                            <Chip
                              label={task.status}
                              color={task.status === 'completed' ? 'success' : 'default'}
                            />
                          </Box>
                          <Typography color="textSecondary">{task.description}</Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6">Documents</Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<CloudUploadIcon />}
                    disabled={uploading}
                  >
                    Upload Document
                    <input
                      type="file"
                      hidden
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleDocumentUpload(file);
                      }}
                    />
                  </Button>
                </Box>
                {uploading && <CircularProgress size={24} sx={{ mb: 2 }} />}
                {documents.length === 0 ? (
                  <Typography color="textSecondary">No documents uploaded</Typography>
                ) : (
                  <Grid container spacing={2}>
                    {documents.map((doc) => (
                      <Grid item xs={12} sm={6} md={4} key={doc.$id}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                          <Typography variant="subtitle2">{doc.name}</Typography>
                          <Button
                            size="small"
                            href={storage.getFileView(STORAGE_BUCKETS.EVENT_DOCUMENTS, doc.$id)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View
                          </Button>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Team Management</Typography>
                <Box display="flex" gap={2} alignItems="center">
                  <TextField
                    size="small"
                    label="Email Address"
                    value={teamEmail}
                    onChange={(e) => setTeamEmail(e.target.value)}
                    sx={{ flexGrow: 1 }}
                  />
                  <Select
                    size="small"
                    value={teamRole}
                    onChange={(e) => setTeamRole(e.target.value as 'admin' | 'member')}
                    sx={{ width: 120 }}
                  >
                    <MenuItem value="member">Member</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                  </Select>
                  <Button
                    variant="contained"
                    onClick={handleAddTeamMember}
                    disabled={!teamEmail}
                  >
                    Add Member
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
