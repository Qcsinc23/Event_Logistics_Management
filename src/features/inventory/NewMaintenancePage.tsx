import { Box, Typography, Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MaintenanceFormData {
  equipmentId: string;
  equipmentName: string;
  type: 'Routine' | 'Repair' | 'Inspection';
  scheduledDate: string;
  assignedTo: string;
  notes: string;
  estimatedCost: string;
}

const NewMaintenancePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<MaintenanceFormData>({
    equipmentId: '',
    equipmentName: '',
    type: 'Routine',
    scheduledDate: '',
    assignedTo: '',
    notes: '',
    estimatedCost: ''
  });

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as string]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to save maintenance schedule
    console.log('Maintenance scheduled:', formData);
    navigate('/inventory/maintenance');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Schedule Maintenance
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Schedule new maintenance task for equipment
      </Typography>

      <Paper sx={{ p: 3, mt: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Equipment ID"
                name="equipmentId"
                value={formData.equipmentId}
                onChange={handleTextFieldChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Equipment Name"
                name="equipmentName"
                value={formData.equipmentName}
                onChange={handleTextFieldChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Maintenance Type</InputLabel>
                <Select
                  name="type"
                  value={formData.type}
                  label="Maintenance Type"
                  onChange={handleSelectChange}
                >
                  <MenuItem value="Routine">Routine</MenuItem>
                  <MenuItem value="Repair">Repair</MenuItem>
                  <MenuItem value="Inspection">Inspection</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Scheduled Date"
                name="scheduledDate"
                type="date"
                value={formData.scheduledDate}
                onChange={handleTextFieldChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Assigned To"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleTextFieldChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Estimated Cost"
                name="estimatedCost"
                type="number"
                value={formData.estimatedCost}
                onChange={handleTextFieldChange}
                InputProps={{
                  startAdornment: '$'
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Notes"
                name="notes"
                value={formData.notes}
                onChange={handleTextFieldChange}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/inventory/maintenance')}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                >
                  Schedule Maintenance
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default NewMaintenancePage;
