import React, { useState, useEffect } from 'react';
import { client } from '../../config/appwrite';
import { InventoryItem as ServiceInventoryItem } from '../../features/inventory/types/inventory';
import { getInventoryItems } from '../../services/inventory';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const InventoryPage = () => {
  const [items, setItems] = useState<ServiceInventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadInventory = async () => {
      try {
        const inventoryItems = await getInventoryItems();
        setItems(inventoryItems);
      } catch (err) {
        console.error('Error loading inventory:', err);
        setError('Failed to load inventory items');
      } finally {
        setLoading(false);
      }
    };

    loadInventory();

    // Subscribe to realtime updates
    const unsubscribe = client.subscribe(['databases.*.collections.inventory_items.documents'], 
      response => {
        // Handle different types of events
        if (response.events.includes('databases.*.collections.inventory_items.documents.*.create')) {
          const newItem = response.payload;
          setItems(prev => [...prev, newItem]);
        } else if (response.events.includes('databases.*.collections.inventory_items.documents.*.update')) {
          const updatedItem = response.payload;
          setItems(prev => prev.map(item => 
            item.id === updatedItem.$id ? { ...item, ...updatedItem } : item
          ));
        } else if (response.events.includes('databases.*.collections.inventory_items.documents.*.delete')) {
          const deletedItem = response.payload;
          setItems(prev => prev.filter(item => item.id !== deletedItem.$id));
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Inventory
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate('/inventory/new')}
        >
          Add Item
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="right">Available</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                hover
                onClick={() => navigate(`/inventory/${item.id}`)}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.categoryId}</TableCell>
                <TableCell align="right">{item.availableQuantity}</TableCell>
                <TableCell align="right">{item.totalQuantity}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InventoryPage;
