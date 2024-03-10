import { Box, Typography, Paper, Grid, Button, TextField, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  categories: string[];
  status: 'Active' | 'Inactive' | 'Under Review';
  rating: number;
  lastOrder: string;
  totalOrders: number;
  totalSpent: number;
}

const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Tech Equipment Co.',
    contactPerson: 'John Smith',
    email: 'john@techequip.com',
    phone: '(555) 123-4567',
    address: '123 Tech Ave, City',
    categories: ['AV Equipment', 'Lighting'],
    status: 'Active',
    rating: 4.5,
    lastOrder: '2024-03-01',
    totalOrders: 25,
    totalSpent: 75000
  },
  {
    id: '2',
    name: 'Event Furniture Ltd',
    contactPerson: 'Sarah Johnson',
    email: 'sarah@eventfurniture.com',
    phone: '(555) 234-5678',
    address: '456 Event St, City',
    categories: ['Furniture', 'Decor'],
    status: 'Active',
    rating: 4.8,
    lastOrder: '2024-02-28',
    totalOrders: 15,
    totalSpent: 45000
  },
  {
    id: '3',
    name: 'Sound Systems Inc',
    contactPerson: 'Mike Wilson',
    email: 'mike@soundsys.com',
    phone: '(555) 345-6789',
    address: '789 Audio Rd, City',
    categories: ['Audio Equipment', 'Speakers'],
    status: 'Under Review',
    rating: 3.5,
    lastOrder: '2024-01-15',
    totalOrders: 8,
    totalSpent: 25000
  }
];

const SuppliersPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [suppliers] = useState<Supplier[]>(mockSuppliers);

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'error';
      case 'Under Review':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'success';
    if (rating >= 3.5) return 'warning';
    return 'error';
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Suppliers
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Manage equipment and service suppliers
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/inventory/suppliers/new')}
        >
          Add Supplier
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <LocalShippingIcon color="primary" />
                <Typography variant="h6">Total Suppliers</Typography>
              </Box>
              <Typography variant="h4">{suppliers.length}</Typography>
              <Typography variant="body2" color="text.secondary">
                Active partnerships
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <InventoryIcon color="primary" />
                <Typography variant="h6">Categories</Typography>
              </Box>
              <Typography variant="h4">8</Typography>
              <Typography variant="body2" color="text.secondary">
                Supply categories
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <AttachMoneyIcon color="primary" />
                <Typography variant="h6">Total Spent</Typography>
              </Box>
              <Typography variant="h4">
                ${suppliers.reduce((sum, s) => sum + s.totalSpent, 0).toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lifetime spending
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <AccessTimeIcon color="primary" />
                <Typography variant="h6">Orders</Typography>
              </Box>
              <Typography variant="h4">
                {suppliers.reduce((sum, s) => sum + s.totalOrders, 0)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total orders placed
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search suppliers..."
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
                <TableCell>Supplier Name</TableCell>
                <TableCell>Categories</TableCell>
                <TableCell>Contact Person</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Last Order</TableCell>
                <TableCell align="right">Total Orders</TableCell>
                <TableCell align="right">Total Spent</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSuppliers.map((supplier) => (
                <TableRow key={supplier.id} hover>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {supplier.categories.map((category, index) => (
                        <Chip key={index} label={category} size="small" />
                      ))}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="body2">{supplier.contactPerson}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {supplier.email}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={supplier.status}
                      color={getStatusColor(supplier.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={supplier.rating.toFixed(1)}
                      color={getRatingColor(supplier.rating)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{new Date(supplier.lastOrder).toLocaleDateString()}</TableCell>
                  <TableCell align="right">{supplier.totalOrders}</TableCell>
                  <TableCell align="right">${supplier.totalSpent.toLocaleString()}</TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      onClick={() => navigate(`/inventory/suppliers/${supplier.id}`)}
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
    </Box>
  );
};

export default SuppliersPage;
