import { Box, Typography, Paper, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventIcon from '@mui/icons-material/Event';

interface CartItem {
  id: string;
  name: string;
  price: number;
  reservedQuantity: number;
  available: number;
}

// Mock cart data - replace with actual state management
const mockCart: CartItem[] = [
  {
    id: '1',
    name: 'Round Table (60")',
    price: 25,
    reservedQuantity: 10,
    available: 35
  },
  {
    id: '2',
    name: 'Chiavari Chair',
    price: 8,
    reservedQuantity: 80,
    available: 250
  }
];

const ReservationCartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(mockCart);
  const [eventDetails, setEventDetails] = useState({
    name: '',
    date: '',
    returnDate: '',
    notes: ''
  });

  const handleQuantityChange = (itemId: string, change: number) => {
    setCart(cart.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(1, Math.min(item.available, item.reservedQuantity + change));
        return { ...item, reservedQuantity: newQuantity };
      }
      return item;
    }));
  };

  const handleRemoveItem = (itemId: string) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.reservedQuantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = subtotal * 0.1; // 10% tax
    const deposit = subtotal * 0.2; // 20% deposit
    return {
      subtotal,
      tax,
      deposit,
      total: subtotal + tax
    };
  };

  const handleSubmit = () => {
    // TODO: Implement reservation submission
    console.log('Submitting reservation:', {
      items: cart,
      eventDetails,
      totals: calculateTotal()
    });
    navigate('/inventory/reservation/confirmation');
  };

  const totals = calculateTotal();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Reservation Cart
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Reserved Items
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Price/Day</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="center">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                          <IconButton
                            size="small"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography>
                            {item.reservedQuantity}
                          </Typography>
                          <IconButton
                            size="small"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        ${(item.price * item.reservedQuantity).toFixed(2)}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          color="error"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Event Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Event Name"
                  value={eventDetails.name}
                  onChange={(e) => setEventDetails({ ...eventDetails, name: e.target.value })}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Event Date"
                  type="date"
                  value={eventDetails.date}
                  onChange={(e) => setEventDetails({ ...eventDetails, date: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Return Date"
                  type="date"
                  value={eventDetails.returnDate}
                  onChange={(e) => setEventDetails({ ...eventDetails, returnDate: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Additional Notes"
                  multiline
                  rows={4}
                  value={eventDetails.notes}
                  onChange={(e) => setEventDetails({ ...eventDetails, notes: e.target.value })}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            
            <Box sx={{ my: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Subtotal</Typography>
                <Typography>${totals.subtotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Tax (10%)</Typography>
                <Typography>${totals.tax.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography>Required Deposit (20%)</Typography>
                <Typography>${totals.deposit.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">${totals.total.toFixed(2)}</Typography>
              </Box>
            </Box>

            <Alert severity="info" sx={{ mb: 2 }}>
              A {(totals.deposit / totals.subtotal * 100).toFixed(0)}% deposit (${totals.deposit.toFixed(2)}) is required to confirm your reservation.
            </Alert>

            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleSubmit}
              startIcon={<ShoppingCartIcon />}
            >
              Complete Reservation
            </Button>
            
            <Button
              fullWidth
              variant="outlined"
              size="large"
              onClick={() => navigate('/inventory/reserve')}
              startIcon={<EventIcon />}
              sx={{ mt: 2 }}
            >
              Continue Shopping
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReservationCartPage;
