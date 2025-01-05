import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Autocomplete,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryManager from './components/CategoryManager';
import ItemTrackingManager from './components/ItemTrackingManager';
import StorageInstructionsManager from './components/StorageInstructionsManager';
import {
  InventoryItem,
  Category,
  BatchInfo,
  SerialNumberInfo,
  StorageInstruction,
  ComplianceInfo,
} from './types/inventory';

// Mock categories - in a real app, these would come from an API or database
const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Audio Equipment',
    attributes: [
      { id: '1', name: 'Power Rating', type: 'number', required: true },
      { id: '2', name: 'Frequency Response', type: 'text', required: false },
    ],
  },
  {
    id: '2',
    name: 'Lighting',
    attributes: [
      { id: '3', name: 'Wattage', type: 'number', required: true },
      { id: '4', name: 'Color Temperature', type: 'text', required: true },
    ],
  },
];

const locations = ['Warehouse A', 'Warehouse B', 'Storage Room 1', 'Storage Room 2'];
const units = ['pieces', 'sets', 'boxes', 'pairs', 'meters', 'kilograms'];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`inventory-tabpanel-${index}`}
      aria-labelledby={`inventory-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const NewInventoryItemPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [categories] = useState<Category[]>(mockCategories);

  const [formData, setFormData] = useState<Partial<InventoryItem>>({
    name: '',
    sku: '',
    categoryId: '',
    description: '',
    trackingMethod: 'none',
    totalQuantity: 0,
    availableQuantity: 0,
    reservedQuantity: 0,
    minQuantity: 0,
    reorderPoint: 0,
    unit: '',
    defaultLocation: '',
    storageInstructions: [],
    customAttributes: [],
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    lastInventoryCount: new Date().toISOString(),
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
    // TODO: Implement item creation with new data structure
    console.log('Creating item:', formData);
    navigate('/inventory');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Add New Inventory Item
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Add a new item to inventory tracking
        </Typography>
      </Box>

      <Paper>
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Basic Information" />
          <Tab label="Categories & Attributes" />
          <Tab label="Tracking" />
          <Tab label="Storage & Compliance" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          <form onSubmit={handleSubmit}>
            <TabPanel value={activeTab} index={0}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Item Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="SKU"
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Tracking Method</InputLabel>
                    <Select
                      value={formData.trackingMethod || 'none'}
                      name="trackingMethod"
                      label="Tracking Method"
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        trackingMethod: e.target.value as 'batch' | 'serial' | 'none'
                      }))}
                    >
                      <MenuItem value="none">None</MenuItem>
                      <MenuItem value="batch">Batch Tracking</MenuItem>
                      <MenuItem value="serial">Serial Number Tracking</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    options={units}
                    value={formData.unit}
                    onChange={(_, newValue) => {
                      setFormData(prev => ({
                        ...prev,
                        unit: newValue || ''
                      }));
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Unit"
                        required
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Total Quantity"
                    name="totalQuantity"
                    value={formData.totalQuantity}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Minimum Quantity"
                    name="minQuantity"
                    value={formData.minQuantity}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Reorder Point"
                    name="reorderPoint"
                    value={formData.reorderPoint}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    options={locations}
                    value={formData.defaultLocation}
                    onChange={(_, newValue) => {
                      setFormData(prev => ({
                        ...prev,
                        defaultLocation: newValue || ''
                      }));
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Default Location"
                        required
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={activeTab} index={1}>
              <CategoryManager
                categories={categories}
                onCategoryChange={(newCategories) => {
                  // In a real app, this would update the backend
                  console.log('Categories updated:', newCategories);
                }}
              />
            </TabPanel>

            <TabPanel value={activeTab} index={2}>
              <ItemTrackingManager
                itemId={formData.id || 'new'}
                trackingMethod={formData.trackingMethod || 'none'}
                batches={formData.batches}
                serialNumbers={formData.serialNumbers}
                onBatchesChange={(batches) => {
                  setFormData(prev => ({
                    ...prev,
                    batches
                  }));
                }}
                onSerialNumbersChange={(serialNumbers) => {
                  setFormData(prev => ({
                    ...prev,
                    serialNumbers
                  }));
                }}
              />
            </TabPanel>

            <TabPanel value={activeTab} index={3}>
              <StorageInstructionsManager
                itemId={formData.id || 'new'}
                categories={categories}
                storageInstructions={formData.storageInstructions || []}
                complianceInfo={formData.compliance}
                onStorageInstructionsChange={(instructions) => {
                  setFormData(prev => ({
                    ...prev,
                    storageInstructions: instructions
                  }));
                }}
                onComplianceInfoChange={(info) => {
                  setFormData(prev => ({
                    ...prev,
                    compliance: info
                  }));
                }}
              />
            </TabPanel>

            <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                onClick={() => navigate('/inventory')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Add Item
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default NewInventoryItemPage;
