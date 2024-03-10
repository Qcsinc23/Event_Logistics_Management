import { Box, Typography, Paper, Grid, TextField, Button, Autocomplete, Chip } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SupplierForm {
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  categories: string[];
  website: string;
  paymentTerms: string;
  notes: string;
}

const categories = [
  'AV Equipment',
  'Lighting',
  'Sound Equipment',
  'Furniture',
  'Decor',
  'Stage Equipment',
  'Office Supplies',
  'Catering Equipment',
  'Security Equipment',
  'Other'
];

const paymentTerms = [
  'Net 30',
  'Net 45',
  'Net 60',
  'Due on Receipt',
  'Custom'
];

const NewSupplierPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SupplierForm>({
    name: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    categories: [],
    website: '',
    paymentTerms: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement supplier creation
    console.log('Creating supplier:', formData);
    navigate('/inventory/suppliers');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Add New Supplier
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Register a new equipment or service supplier
        </Typography>
      </Box>

      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                helperText="Enter the supplier's company name"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Person"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                helperText="Primary contact name"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                helperText="Business email address"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                helperText="Business phone number"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                helperText="Company website URL"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                multiline
                rows={2}
                helperText="Business address"
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                multiple
                options={categories}
                value={formData.categories}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    categories: newValue
                  }));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Supply Categories"
                    required
                    helperText="Select all applicable categories"
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

            <Grid item xs={12} sm={6}>
              <Autocomplete
                options={paymentTerms}
                value={formData.paymentTerms}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    paymentTerms: newValue || ''
                  }));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Payment Terms"
                    required
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Additional Notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                multiline
                rows={4}
                helperText="Any additional information about the supplier"
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/inventory/suppliers')}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Add Supplier
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default NewSupplierPage;
