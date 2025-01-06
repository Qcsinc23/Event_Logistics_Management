import React, { useState, useEffect } from 'react';
import { client } from '../../config/appwrite';
import { Models } from 'appwrite';

interface InventoryDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  name: string;
  sku: string;
  category_id: string;
  description: string;
  total_quantity: number;
  available_quantity: number;
  reserved_quantity: number;
  min_quantity: number;
  reorder_point: number;
  unit: string;
  default_location: string;
  status: 'active' | 'discontinued' | 'pending';
  last_inventory_count: string;
  tracking_method: 'none' | 'batch' | 'serial';
}

const isInventoryDocument = (doc: unknown): doc is InventoryDocument => {
  if (!doc || typeof doc !== 'object') return false;
  const d = doc as Record<string, unknown>;
  return (
    typeof d.$id === 'string' &&
    typeof d.name === 'string' &&
    typeof d.sku === 'string' &&
    typeof d.category_id === 'string' &&
    typeof d.description === 'string' &&
    typeof d.total_quantity === 'number' &&
    typeof d.available_quantity === 'number' &&
    typeof d.reserved_quantity === 'number' &&
    typeof d.min_quantity === 'number' &&
    typeof d.reorder_point === 'number' &&
    typeof d.unit === 'string' &&
    typeof d.default_location === 'string' &&
    typeof d.status === 'string' &&
    typeof d.last_inventory_count === 'string' &&
    typeof d.tracking_method === 'string'
  );
};
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
        // Map Appwrite documents to InventoryItem type
        setItems(inventoryItems.map(doc => ({
          id: doc.$id,
          name: doc.name,
          sku: doc.sku,
          categoryId: doc.category_id,
          description: doc.description,
          totalQuantity: doc.total_quantity,
          availableQuantity: doc.available_quantity,
          reservedQuantity: doc.reserved_quantity,
          minQuantity: doc.min_quantity,
          reorderPoint: doc.reorder_point,
          unit: doc.unit,
          defaultLocation: doc.default_location,
          status: doc.status as 'active' | 'discontinued' | 'pending',
          createdAt: doc.$createdAt,
          updatedAt: doc.$updatedAt,
          lastInventoryCount: doc.last_inventory_count,
          trackingMethod: doc.tracking_method as 'none' | 'batch' | 'serial',
          storageInstructions: [],
          customAttributes: [],
        })));
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
          if (!isInventoryDocument(newItem)) return;
          // Map new item to InventoryItem type
          const mappedItem: ServiceInventoryItem = {
            id: newItem.$id,
            name: newItem.name,
            sku: newItem.sku,
            categoryId: newItem.category_id,
            description: newItem.description,
            totalQuantity: newItem.total_quantity,
            availableQuantity: newItem.available_quantity,
            reservedQuantity: newItem.reserved_quantity,
            minQuantity: newItem.min_quantity,
            reorderPoint: newItem.reorder_point,
            unit: newItem.unit,
            defaultLocation: newItem.default_location,
            status: newItem.status,
            createdAt: newItem.$createdAt,
            updatedAt: newItem.$updatedAt,
            lastInventoryCount: newItem.last_inventory_count,
            trackingMethod: newItem.tracking_method,
            storageInstructions: [],
            customAttributes: [],
          };
          setItems(prev => [...prev, mappedItem]);
        } else if (response.events.includes('databases.*.collections.inventory_items.documents.*.update')) {
          const updatedItem = response.payload;
          if (!isInventoryDocument(updatedItem)) return;
          setItems(prev => prev.map(item => 
            item.id === updatedItem.$id ? {
              ...item,
              name: updatedItem.name,
              sku: updatedItem.sku,
              categoryId: updatedItem.category_id,
              description: updatedItem.description,
              totalQuantity: updatedItem.total_quantity,
              availableQuantity: updatedItem.available_quantity,
              reservedQuantity: updatedItem.reserved_quantity,
              minQuantity: updatedItem.min_quantity,
              reorderPoint: updatedItem.reorder_point,
              unit: updatedItem.unit,
              defaultLocation: updatedItem.default_location,
              status: updatedItem.status as 'active' | 'discontinued' | 'pending',
              updatedAt: updatedItem.$updatedAt,
              lastInventoryCount: updatedItem.last_inventory_count,
              trackingMethod: updatedItem.tracking_method as 'none' | 'batch' | 'serial',
            } : item
          ));
        } else if (response.events.includes('databases.*.collections.inventory_items.documents.*.delete')) {
          const deletedItem = response.payload;
          if (!isInventoryDocument(deletedItem)) return;
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
