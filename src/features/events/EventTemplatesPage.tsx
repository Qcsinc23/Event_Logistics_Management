import { Box, Typography, Paper, Grid, Card, CardContent, CardActions, Button, TextField, InputAdornment, Chip } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface EventTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  capacity: number;
  resources: string[];
  tasks: string[];
  budget: number;
  lastUsed: string;
  timesUsed: number;
}

const mockTemplates: EventTemplate[] = [
  {
    id: '1',
    name: 'Tech Conference',
    category: 'Conference',
    description: 'Template for large tech conferences with multiple tracks',
    duration: '2 days',
    capacity: 500,
    resources: ['Main Hall', 'Breakout Rooms', 'AV Equipment', 'Catering'],
    tasks: ['Venue Setup', 'Speaker Coordination', 'Registration', 'Marketing'],
    budget: 50000,
    lastUsed: '2024-02-15',
    timesUsed: 5
  },
  {
    id: '2',
    name: 'Product Launch',
    category: 'Corporate',
    description: 'Template for product launch events',
    duration: '4 hours',
    capacity: 200,
    resources: ['Auditorium', 'Demo Area', 'Press Room'],
    tasks: ['Media Invites', 'Product Demo', 'Press Kit'],
    budget: 25000,
    lastUsed: '2024-03-01',
    timesUsed: 3
  },
  {
    id: '3',
    name: 'Workshop',
    category: 'Training',
    description: 'Template for hands-on training workshops',
    duration: '1 day',
    capacity: 50,
    resources: ['Training Room', 'Workstations', 'Materials'],
    tasks: ['Material Prep', 'Setup', 'Evaluation'],
    budget: 5000,
    lastUsed: '2024-03-10',
    timesUsed: 8
  }
];

const EventTemplatesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [templates] = useState<EventTemplate[]>(mockTemplates);

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUseTemplate = (templateId: string) => {
    navigate('/events/new', { state: { templateId } });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Event Templates
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Standardize your event planning with reusable templates
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/events/templates/new')}
        >
          Create Template
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search templates..."
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
          {filteredTemplates.map((template) => (
            <Grid item xs={12} md={6} key={template.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6">{template.name}</Typography>
                    <Chip label={template.category} color="primary" size="small" />
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {template.description}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Duration
                      </Typography>
                      <Typography variant="body1">
                        {template.duration}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Capacity
                      </Typography>
                      <Typography variant="body1">
                        {template.capacity} attendees
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        Resources
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                        {template.resources.map((resource, index) => (
                          <Chip key={index} label={resource} size="small" />
                        ))}
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        Tasks
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                        {template.tasks.map((task, index) => (
                          <Chip key={index} label={task} size="small" />
                        ))}
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Budget
                      </Typography>
                      <Typography variant="body1">
                        ${template.budget.toLocaleString()}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Times Used
                      </Typography>
                      <Typography variant="body1">
                        {template.timesUsed} events
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', gap: 1 }}>
                  <Button
                    size="small"
                    startIcon={<ContentCopyIcon />}
                    onClick={() => handleUseTemplate(template.id)}
                  >
                    Use Template
                  </Button>
                  <Button
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => navigate(`/events/templates/${template.id}/edit`)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => {/* TODO: Implement delete */}}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default EventTemplatesPage;
