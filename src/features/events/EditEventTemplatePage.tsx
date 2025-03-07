import { Box, Typography, Paper, Grid, TextField, Button, Autocomplete, Chip, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface TemplateForm {
  name: string;
  category: string;
  description: string;
  duration: string;
  capacity: string;
  resources: string[];
  tasks: string[];
  budget: string;
}

const categories = [
  'Conference',
  'Workshop',
  'Seminar',
  'Corporate',
  'Social',
  'Exhibition',
  'Concert',
  'Other'
];

const resourceOptions = [
  'Main Hall',
  'Breakout Rooms',
  'AV Equipment',
  'Catering',
  'Stage',
  'Lighting',
  'Sound System',
  'Furniture',
  'Security',
  'Staff'
];

const taskOptions = [
  'Venue Setup',
  'Registration',
  'Marketing',
  'Speaker Coordination',
  'Catering Management',
  'Technical Setup',
  'Security Planning',
  'Attendee Communication',
  'Post-event Survey',
  'Cleanup'
];

// Mock template data - replace with API call
const mockTemplate = {
  id: '1',
  name: 'Tech Conference',
  category: 'Conference',
  description: 'Template for large tech conferences with multiple tracks',
  duration: '2 days',
  capacity: '500',
  resources: ['Main Hall', 'Breakout Rooms', 'AV Equipment', 'Catering'],
  tasks: ['Venue Setup', 'Speaker Coordination', 'Registration', 'Marketing'],
  budget: '50000'
};

const EditEventTemplatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<TemplateForm>({
    name: '',
    category: '',
    description: '',
    duration: '',
    capacity: '',
    resources: [],
    tasks: [],
    budget: ''
  });

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchTemplate = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setFormData(mockTemplate);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching template:', error);
        // Handle error appropriately
        navigate('/events/templates');
      }
    };

    fetchTemplate();
  }, [id, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement template update
    console.log('Updating template:', formData);
    navigate('/events/templates');
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Edit Event Template
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Modify the template settings
        </Typography>
      </Box>

      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Template Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                helperText="Give your template a descriptive name"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Autocomplete
                options={categories}
                value={formData.category}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    category: newValue || ''
                  }));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Category"
                    required
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                helperText="e.g., 2 days, 4 hours"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                required
                helperText="Describe the purpose and scope of this template"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Capacity"
                name="capacity"
                type="number"
                value={formData.capacity}
                onChange={handleChange}
                required
                helperText="Expected number of attendees"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Budget"
                name="budget"
                type="number"
                value={formData.budget}
                onChange={handleChange}
                required
                helperText="Estimated budget for this event type"
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                multiple
                options={resourceOptions}
                value={formData.resources}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    resources: newValue
                  }));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Required Resources"
                    helperText="Select all resources needed for this event type"
                  />
                )}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      label={option}
                      {...getTagProps({ index })}
                      key={option}
                    />
                  ))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                multiple
                options={taskOptions}
                value={formData.tasks}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    tasks: newValue
                  }));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Standard Tasks"
                    helperText="Define standard tasks for this event type"
                  />
                )}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      label={option}
                      {...getTagProps({ index })}
                      key={option}
                    />
                  ))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/events/templates')}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Save Changes
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default EditEventTemplatePage;
