import { Box, Typography, Paper, Grid, Button, TextField, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WarningIcon from '@mui/icons-material/Warning';
import InventoryIcon from '@mui/icons-material/Inventory';
import { getInventoryItems } from '../../services/inventory';
import { supabase } from '../../utils/supabase/client';
import { InventoryItem as ServiceInventoryItem } from '../../features/inventory/types/inventory';

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  minQuantity: number;
  unit: string;
  location: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  lastUpdated: string;
}

const InventoryPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const data = await getInventoryItems();
        setInventory(data.map((item: ServiceInventoryItem) => ({
          id: item.id,
          name: item.name,
          category: item.categoryId || 'Uncategorized',
          quantity: item.availableQuantity,
          minQuantity: item.minQuantity,
          unit: item.unit,
          location: item.defaultLocation || 'Unknown',
          status: item.availableQuantity === 0 
            ? 'Out of Stock' 
            : item.availableQuantity <= item.minQuantity 
              ? 'Low Stock' 
              : 'In Stock',
          lastUpdated: item.updatedAt
        })));
      } catch (error) {
        console.error('Error fetching inventory:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();

    // Set up real-time subscription
    const subscription = supabase
      .channel('inventory-changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'inventory_items'
      }, async () => {
        const updatedData = await getInventoryItems();
        setInventory(updatedData.map((item: ServiceInventoryItem) => ({
          id: item.id,
          name: item.name,
          category: item.categoryId || 'Uncategorized',
          quantity: item.availableQuantity,
          minQuantity: item.minQuantity,
          unit: item.unit,
          location: item.defaultLocation || 'Unknown',
          status: item.availableQuantity === 0 
            ? 'Out of Stock' 
            : item.availableQuantity <= item.minQuantity 
              ? 'Low Stock' 
              : 'In Stock',
          lastUpdated: item.updatedAt
        })));
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Low Stock':
        return 'warning';
      case 'Out of Stock':
        return 'error';
      default:
        return 'default';
    }
  };

  const getLowStockItems = () => {
    return inventory.filter(item => item.status === 'Low Stock' || item.status === 'Out of Stock');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Inventory Management
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Manage event supplies and equipment
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<InventoryIcon />}
            onClick={() => navigate('/inventory/bundles')}
          >
            Manage Bundles
          </Button>
          <Button
            variant="outlined"
            startIcon={<ShoppingCartIcon />}
            onClick={() => navigate('/inventory/reserve')}
          >
            Reserve Equipment
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/inventory/new')}
          >
            Add Item
          </Button>
        </Box>
      </Box>

      {getLowStockItems().length > 0 && (
        <Paper sx={{ p: 2, mb: 3, backgroundColor: 'warning.light' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WarningIcon color="warning" />
            <Typography>
              {getLowStockItems().length} items need attention
            </Typography>
          </Box>
        </Paper>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search inventory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell>Unit</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Last Updated</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredInventory.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell align="right">
                        {item.quantity}
                        {item.quantity <= item.minQuantity && (
                          <Typography variant="caption" color="error" sx={{ ml: 1 }}>
                            (Min: {item.minQuantity})
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell>
                        <Chip
                          label={item.status}
                          color={getStatusColor(item.status) as any}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        {new Date(item.lastUpdated).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          size="small"
                          onClick={() => navigate(`/inventory/${item.id}`)}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InventoryPage;
