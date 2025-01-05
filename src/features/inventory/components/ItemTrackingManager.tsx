import { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Tabs,
  Tab,
  Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { BatchInfo, SerialNumberInfo, MaintenanceRecord } from '../types/inventory';

interface ItemTrackingManagerProps {
  itemId: string;
  trackingMethod: 'batch' | 'serial' | 'none';
  batches?: BatchInfo[];
  serialNumbers?: SerialNumberInfo[];
  onBatchesChange: (batches: BatchInfo[]) => void;
  onSerialNumbersChange: (serialNumbers: SerialNumberInfo[]) => void;
}

const ItemTrackingManager = ({
  itemId,
  trackingMethod,
  batches = [],
  serialNumbers = [],
  onBatchesChange,
  onSerialNumbersChange,
}: ItemTrackingManagerProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [batchDialogOpen, setBatchDialogOpen] = useState(false);
  const [serialDialogOpen, setSerialDialogOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<BatchInfo | null>(null);
  const [selectedSerial, setSelectedSerial] = useState<SerialNumberInfo | null>(null);

  const [batchForm, setBatchForm] = useState<Partial<BatchInfo>>({
    batchNumber: '',
    manufacturingDate: '',
    expirationDate: '',
    supplier: '',
    quantity: 0,
    notes: '',
    location: '',
  });

  const [serialForm, setSerialForm] = useState<Partial<SerialNumberInfo>>({
    serialNumber: '',
    status: 'available',
    location: '',
    condition: 'new',
    maintenanceHistory: [],
    assignmentHistory: [],
  });

  const handleBatchSave = () => {
    if (!batchForm.batchNumber || !batchForm.supplier || !batchForm.quantity) return;

    const newBatch: BatchInfo = {
      batchNumber: batchForm.batchNumber,
      manufacturingDate: batchForm.manufacturingDate,
      expirationDate: batchForm.expirationDate,
      supplier: batchForm.supplier,
      quantity: batchForm.quantity || 0,
      notes: batchForm.notes,
      location: batchForm.location || '',
    };

    if (selectedBatch) {
      onBatchesChange(
        batches.map(batch =>
          batch.batchNumber === selectedBatch.batchNumber ? newBatch : batch
        )
      );
    } else {
      onBatchesChange([...batches, newBatch]);
    }

    setBatchDialogOpen(false);
    setSelectedBatch(null);
    setBatchForm({
      batchNumber: '',
      manufacturingDate: '',
      expirationDate: '',
      supplier: '',
      quantity: 0,
      notes: '',
      location: '',
    });
  };

  const handleSerialSave = () => {
    if (!serialForm.serialNumber || !serialForm.location) return;

    const newSerial: SerialNumberInfo = {
      serialNumber: serialForm.serialNumber,
      status: serialForm.status || 'available',
      location: serialForm.location,
      condition: serialForm.condition || 'new',
      maintenanceHistory: serialForm.maintenanceHistory || [],
      assignmentHistory: serialForm.assignmentHistory || [],
    };

    if (selectedSerial) {
      onSerialNumbersChange(
        serialNumbers.map(serial =>
          serial.serialNumber === selectedSerial.serialNumber ? newSerial : serial
        )
      );
    } else {
      onSerialNumbersChange([...serialNumbers, newSerial]);
    }

    setSerialDialogOpen(false);
    setSelectedSerial(null);
    setSerialForm({
      serialNumber: '',
      status: 'available',
      location: '',
      condition: 'new',
      maintenanceHistory: [],
      assignmentHistory: [],
    });
  };

  return (
    <Box>
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        sx={{ mb: 2 }}
      >
        <Tab label="Batch Tracking" disabled={trackingMethod !== 'batch'} />
        <Tab label="Serial Number Tracking" disabled={trackingMethod !== 'serial'} />
      </Tabs>

      {activeTab === 0 && trackingMethod === 'batch' && (
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6">Batch Management</Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setBatchDialogOpen(true)}
            >
              Add Batch
            </Button>
          </Box>

          <List>
            {batches.map((batch) => (
              <ListItem key={batch.batchNumber}>
                <ListItemText
                  primary={`Batch ${batch.batchNumber}`}
                  secondary={
                    <Typography variant="body2" component="span">
                      Quantity: {batch.quantity} | Location: {batch.location}
                      {batch.expirationDate && 
                        ` | Expires: ${new Date(batch.expirationDate).toLocaleDateString()}`}
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => {
                      setSelectedBatch(batch);
                      setBatchForm(batch);
                      setBatchDialogOpen(true);
                    }}
                    sx={{ mr: 1 }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => {
                      onBatchesChange(
                        batches.filter(b => b.batchNumber !== batch.batchNumber)
                      );
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {activeTab === 1 && trackingMethod === 'serial' && (
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6">Serial Number Management</Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setSerialDialogOpen(true)}
            >
              Add Serial Number
            </Button>
          </Box>

          <List>
            {serialNumbers.map((serial) => (
              <ListItem key={serial.serialNumber}>
                <ListItemText
                  primary={`S/N: ${serial.serialNumber}`}
                  secondary={
                    <Typography variant="body2" component="span">
                      Status: {serial.status} | Condition: {serial.condition} |
                      Location: {serial.location}
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => {
                      setSelectedSerial(serial);
                      setSerialForm(serial);
                      setSerialDialogOpen(true);
                    }}
                    sx={{ mr: 1 }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => {
                      onSerialNumbersChange(
                        serialNumbers.filter(s => s.serialNumber !== serial.serialNumber)
                      );
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* Batch Dialog */}
      <Dialog open={batchDialogOpen} onClose={() => setBatchDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedBatch ? 'Edit Batch' : 'Add New Batch'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Batch Number"
                value={batchForm.batchNumber}
                onChange={(e) => setBatchForm(prev => ({ ...prev, batchNumber: e.target.value }))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Supplier"
                value={batchForm.supplier}
                onChange={(e) => setBatchForm(prev => ({ ...prev, supplier: e.target.value }))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Manufacturing Date"
                value={batchForm.manufacturingDate}
                onChange={(e) => setBatchForm(prev => ({ ...prev, manufacturingDate: e.target.value }))}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Expiration Date"
                value={batchForm.expirationDate}
                onChange={(e) => setBatchForm(prev => ({ ...prev, expirationDate: e.target.value }))}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Quantity"
                value={batchForm.quantity}
                onChange={(e) => setBatchForm(prev => ({ ...prev, quantity: Number(e.target.value) }))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Location"
                value={batchForm.location}
                onChange={(e) => setBatchForm(prev => ({ ...prev, location: e.target.value }))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Notes"
                value={batchForm.notes}
                onChange={(e) => setBatchForm(prev => ({ ...prev, notes: e.target.value }))}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBatchDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleBatchSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Serial Number Dialog */}
      <Dialog open={serialDialogOpen} onClose={() => setSerialDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedSerial ? 'Edit Serial Number' : 'Add New Serial Number'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Serial Number"
                value={serialForm.serialNumber}
                onChange={(e) => setSerialForm(prev => ({ ...prev, serialNumber: e.target.value }))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={serialForm.status || 'available'}
                  onChange={(e) => setSerialForm(prev => ({ 
                    ...prev, 
                    status: e.target.value as SerialNumberInfo['status']
                  }))}
                  label="Status"
                >
                  <MenuItem value="available">Available</MenuItem>
                  <MenuItem value="reserved">Reserved</MenuItem>
                  <MenuItem value="in-use">In Use</MenuItem>
                  <MenuItem value="maintenance">Maintenance</MenuItem>
                  <MenuItem value="retired">Retired</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Condition</InputLabel>
                <Select
                  value={serialForm.condition || 'new'}
                  onChange={(e) => setSerialForm(prev => ({ 
                    ...prev, 
                    condition: e.target.value as SerialNumberInfo['condition']
                  }))}
                  label="Condition"
                >
                  <MenuItem value="new">New</MenuItem>
                  <MenuItem value="good">Good</MenuItem>
                  <MenuItem value="fair">Fair</MenuItem>
                  <MenuItem value="poor">Poor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Location"
                value={serialForm.location}
                onChange={(e) => setSerialForm(prev => ({ ...prev, location: e.target.value }))}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSerialDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSerialSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ItemTrackingManager;
