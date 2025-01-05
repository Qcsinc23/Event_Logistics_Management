import { Box, Typography, Paper, Grid, TextField, Button, Autocomplete, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TransactionForm {
  date: string;
  description: string;
  category: string;
  type: 'Income' | 'Expense';
  amount: string;
  event: string;
  paymentMethod: string;
  status: 'Pending' | 'Completed' | 'Cancelled';
  notes: string;
}

const categories = {
  Income: [
    'Ticket Sales',
    'Sponsorship',
    'Merchandise',
    'Concessions',
    'Registration Fees',
    'Other Income'
  ],
  Expense: [
    'Venue Rental',
    'Equipment Rental',
    'Catering',
    'Marketing',
    'Staff',
    'Insurance',
    'Security',
    'Transportation',
    'Other Expense'
  ]
};

const paymentMethods = [
  'Cash',
  'Credit Card',
  'Bank Transfer',
  'Check',
  'PayPal',
  'Other'
];

const events = [
  'Tech Conference 2024',
  'Product Launch Event',
  'Annual Gala',
  'Workshop Series',
  'Team Building Event'
];

const NewTransactionPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TransactionForm>({
    date: new Date().toISOString().split('T')[0],
    description: '',
    category: '',
    type: 'Income',
    amount: '',
    event: '',
    paymentMethod: '',
    status: 'Pending',
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
    // TODO: Implement transaction creation
    console.log('Creating transaction:', formData);
    navigate('/finance');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Add New Transaction
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Record a new financial transaction
        </Typography>
      </Box>

      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Transaction Type</InputLabel>
                <Select
                  value={formData.type}
                  label="Transaction Type"
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    type: e.target.value as 'Income' | 'Expense',
                    category: '' // Reset category when type changes
                  }))}
                >
                  <MenuItem value="Income">Income</MenuItem>
                  <MenuItem value="Expense">Expense</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                helperText="Brief description of the transaction"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Autocomplete
                options={categories[formData.type]}
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
                label="Amount"
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Autocomplete
                options={events}
                value={formData.event}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    event: newValue || ''
                  }));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Related Event"
                    required
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Autocomplete
                options={paymentMethods}
                value={formData.paymentMethod}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    paymentMethod: newValue || ''
                  }));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Payment Method"
                    required
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Status</InputLabel>
                <Select
                  value={formData.status}
                  label="Status"
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    status: e.target.value as 'Pending' | 'Completed' | 'Cancelled'
                  }))}
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>
              </FormControl>
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
                helperText="Any additional information about the transaction"
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/finance')}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Add Transaction
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default NewTransactionPage;
