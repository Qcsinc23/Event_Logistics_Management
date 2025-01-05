import { Box, Typography, Paper, Grid, Card, CardContent, CardMedia, CardActions, Button, TextField, InputAdornment, Chip, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DateRangeIcon from '@mui/icons-material/DateRange';

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  quantity: number;
  available: number;
  price: number;
  tags: string[];
}

const mockInventory: InventoryItem[] = [
  {
    id: '1',
    name: 'Round Table (60")',
    category: 'Furniture',
    description: '60-inch round banquet table, seats 8-10 people comfortably',
    image: '/images/round-table.jpg',
    quantity: 50,
    available: 35,
    price: 25,
    tags: ['table', 'banquet', 'seating']
  },
  {
    id: '2',
    name: 'Chiavari Chair',
    category: 'Furniture',
    description: 'Classic wooden Chiavari chair with cushion',
    image: '/images/chiavari-chair.jpg',
    quantity: 400,
    available: 250,
    price: 8,
    tags: ['chair', 'seating', 'elegant']
  },
  {
    id: '3',
    name: 'Professional PA System',
    category: 'Audio Equipment',
    description: 'Complete PA system with speakers, mixer, and microphones',
    image: '/images/pa-system.jpg',
    quantity: 5,
    available: 3,
    price: 250,
    tags: ['audio', 'sound', 'professional']
  }
];

interface CartItem extends InventoryItem {
  reservedQuantity: number;
}

const ReservationPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState<InventoryItem[]>(mockInventory);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedDates, setSelectedDates] = useState({
    start: '',
    end: ''
  });
  const [isDateDialogOpen, setIsDateDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAddToCart = (item: InventoryItem) => {
    setSelectedItem(item);
    setIsDateDialogOpen(true);
  };

  const handleConfirmReservation = (quantity: number) => {
    if (selectedItem) {
      const existingItem = cart.find(i => i.id === selectedItem.id);
      
      if (existingItem) {
        setCart(cart.map(item =>
          item.id === selectedItem.id
            ? { ...item, reservedQuantity: item.reservedQuantity + quantity }
            : item
        ));
      } else {
        setCart([...cart, { ...selectedItem, reservedQuantity: quantity }]);
      }
    }
    setIsDateDialogOpen(false);
    setSelectedItem(null);
  };

  const getAvailabilityColor = (available: number, total: number) => {
    const ratio = available / total;
    if (ratio > 0.5) return 'success';
    if (ratio > 0.2) return 'warning';
    return 'error';
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Equipment Reservation
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Browse and reserve equipment for your event
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={() => navigate('/inventory/cart')}
        >
          Cart ({cart.reduce((sum, item) => sum + item.reservedQuantity, 0)})
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Filters
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Event Dates"
                type="date"
                value={selectedDates.start}
                onChange={(e) => setSelectedDates({ ...selectedDates, start: e.target.value })}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
              <TextField
                label="Return Date"
                type="date"
                value={selectedDates.end}
                onChange={(e) => setSelectedDates({ ...selectedDates, end: e.target.value })}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 3 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search equipment..."
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
              {filteredItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt={item.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {item.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" color="primary">
                          ${item.price}/day
                        </Typography>
                        <Chip
                          label={`${item.available} available`}
                          color={getAvailabilityColor(item.available, item.quantity)}
                          size="small"
                        />
                      </Box>
                      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                        {item.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={() => handleAddToCart(item)}
                        disabled={item.available === 0}
                      >
                        Reserve
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={isDateDialogOpen} onClose={() => setIsDateDialogOpen(false)}>
        <DialogTitle>Reserve {selectedItem?.name}</DialogTitle>
        <DialogContent>
          <Box sx={{ p: 2 }}>
            <TextField
              fullWidth
              label="Quantity"
              type="number"
              defaultValue={1}
              inputProps={{ min: 1, max: selectedItem?.available }}
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" color="text.secondary">
              {selectedItem?.available} units available for your selected dates
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDateDialogOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => handleConfirmReservation(1)}
          >
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReservationPage;
