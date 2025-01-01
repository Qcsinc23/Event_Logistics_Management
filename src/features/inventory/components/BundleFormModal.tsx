import React, { useState, useEffect } from 'react';
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
  initialData?: Partial<CreateBundleInput>;
}

export const BundleFormModal: React.FC<BundleFormModalProps> = ({
  open,
  onClose,
  onSuccess,
  initialData,
}) => {
  const [formData, setFormData] = useState<CreateBundleInput>({
    name: initialData?.name || '',
    description: initialData?.description || '',
    imageUrl: initialData?.imageUrl || '',
    isPublic: initialData?.isPublic || false,
    items: initialData?.items || [],
    tags: initialData?.tags || [],
    pricing: initialData?.pricing || undefined,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availableItems, setAvailableItems] = useState<InventoryItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<string>('');
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

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
      if (initialData?.name) {
        await bundleService.updateBundle(initialData.name, formData);
      } else {
        await bundleService.createBundle(formData);
      }
      onSuccess();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to save bundle');
      console.error('Error saving bundle:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddItem = () => {
    if (!selectedItemId) return;
    setFormData(prev => ({
      ...prev,
      items: [
        ...prev.items,
        {
          itemId: selectedItemId,
          quantity: selectedQuantity,
        },
      ],
    }));
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
                onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                inputProps={{ min: 1 }}
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
