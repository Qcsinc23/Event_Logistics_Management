import React, { useState, useEffect } from 'react';
import { supabase } from '../../../utils/supabase/client';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  Switch,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Select,
  MenuItem,
  Typography,
  Stack,
  Alert,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { bundleService, CreateBundleInput } from '../../../services/bundles';
import { InventoryItem } from '../../../features/inventory/types/inventory';
import { getInventoryItems } from '../../../services/inventory';

interface BundleFormModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialData?: Partial<CreateBundleInput> & { id?: string };
}

export const BundleFormModal: React.FC<BundleFormModalProps> = ({
  open,
  onClose,
  onSuccess,
  initialData,
}) => {
  const [formData, setFormData] = useState<CreateBundleInput>({
    name: '',
    description: '',
    imageUrl: '',
    isPublic: false,
    items: [],
    tags: [],
    pricing: undefined,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        description: initialData.description || '',
        imageUrl: initialData.imageUrl || '',
        isPublic: initialData.isPublic || false,
        items: initialData.items || [],
        tags: initialData.tags || [],
        pricing: initialData.pricing || undefined,
      });
    } else {
      setFormData({
        name: '',
        description: '',
        imageUrl: '',
        isPublic: false,
        items: [],
        tags: [],
        pricing: undefined,
      });
    }
  }, [initialData]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availableItems, setAvailableItems] = useState<InventoryItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<string>('');
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  // Reset form when modal is closed
  useEffect(() => {
    if (!open) {
      setFormData({
        name: '',
        description: '',
        imageUrl: '',
        isPublic: false,
        items: [],
        tags: [],
        pricing: undefined,
      });
      setError(null);
      setSelectedItemId('');
      setSelectedQuantity(1);
    }
  }, [open]);

  useEffect(() => {
    const loadItems = async () => {
      if (open) {
        setIsLoading(true);
        setError(null);
        try {
          const items = await getInventoryItems();
          setAvailableItems(items);
        } catch (err) {
          setError('Failed to load inventory items');
          console.error('Error loading inventory items:', err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadItems();
  }, [open]);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError(null);

      // Check authentication first
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError) throw authError;
      if (!user) throw new Error('Please sign in to manage bundles');

      // Validate required fields
      if (!formData.name.trim()) {
        throw new Error('Bundle name is required');
      }

      if (formData.items.length === 0) {
        throw new Error('Bundle must contain at least one item');
      }

      // Validate items
      const invalidItems = formData.items.filter(item => !item.itemId && !item.nestedBundleId);
      if (invalidItems.length > 0) {
        throw new Error('Each bundle item must be either an inventory item or a nested bundle');
      }

      if (initialData?.id) {
        await bundleService.updateBundle(initialData.id, {
          name: formData.name,
          description: formData.description,
          imageUrl: formData.imageUrl,
          isPublic: formData.isPublic,
          items: formData.items,
          tags: formData.tags,
          pricing: formData.pricing,
        });
      } else {
        await bundleService.createBundle(formData);
      }
      onSuccess();
    } catch (error) {
      let errorMessage = 'Failed to save bundle';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'object' && error !== null) {
        // Handle Supabase error object
        const supabaseError = error as { message?: string; details?: string; hint?: string };
        errorMessage = supabaseError.message || supabaseError.details || supabaseError.hint || errorMessage;
      }
      setError(errorMessage);
      console.error('Error saving bundle:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddItem = () => {
    if (!selectedItemId) return;

    // Check if item already exists in bundle
    const existingItemIndex = formData.items.findIndex(item => item.itemId === selectedItemId);
    
    if (existingItemIndex !== -1) {
      // Update quantity of existing item
      setFormData(prev => ({
        ...prev,
        items: prev.items.map((item, index) => 
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + selectedQuantity }
            : item
        ),
      }));
    } else {
      // Add new item
      setFormData(prev => ({
        ...prev,
        items: [
          ...prev.items,
          {
            itemId: selectedItemId,
            quantity: Math.max(1, Math.round(selectedQuantity)), // Ensure positive integer
          },
        ],
      }));
    }

    // Reset selection
    setSelectedItemId('');
    setSelectedQuantity(1);
  };

  const handleRemoveItem = (index: number) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const getItemName = (itemId: string) => {
    const item = availableItems.find(i => i.id === itemId);
    return item ? item.name : itemId;
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {initialData ? 'Edit Bundle' : 'Create New Bundle'}
      </DialogTitle>
      <DialogContent>
        <Stack spacing={3} sx={{ mt: 2 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            required
            fullWidth
            label="Bundle Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            multiline
            rows={3}
          />

          <TextField
            fullWidth
            label="Image URL"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />

          <FormControlLabel
            control={
              <Switch
                checked={formData.isPublic}
                onChange={(e) =>
                  setFormData(prev => ({
                    ...prev,
                    isPublic: e.target.checked,
                  }))
                }
              />
            }
            label="Make Public"
          />

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Items
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell width="50px"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formData.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{getItemName(item.itemId!)}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={() => handleRemoveItem(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <FormControl fullWidth>
                <Select
                  value={selectedItemId}
                  onChange={(e) => setSelectedItemId(e.target.value)}
                  displayEmpty
                  disabled={isLoading}
                >
                  <MenuItem value="" disabled>
                    {isLoading ? 'Loading items...' : 'Select item'}
                  </MenuItem>
                  {availableItems.map(item => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                type="number"
                label="Quantity"
                value={selectedQuantity}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (!isNaN(value) && value >= 1) {
                    setSelectedQuantity(Math.floor(value)); // Ensure integer
                  }
                }}
                onBlur={() => {
                  // Ensure minimum value on blur
                  if (selectedQuantity < 1) {
                    setSelectedQuantity(1);
                  }
                }}
                error={selectedQuantity < 1}
                helperText={selectedQuantity < 1 ? "Quantity must be at least 1" : ""}
                inputProps={{ 
                  min: 1,
                  step: 1,
                  pattern: "\\d*" // Only allow digits
                }}
                sx={{ width: 100 }}
              />
              <Button
                variant="contained"
                onClick={handleAddItem}
                disabled={!selectedItemId || isLoading}
              >
                Add
              </Button>
            </Stack>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={isSubmitting || !formData.name}
        >
          {isSubmitting ? 'Saving...' : initialData ? 'Update' : 'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
