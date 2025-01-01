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
  Chip,
  Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningIcon from '@mui/icons-material/Warning';
import { StorageInstruction, ComplianceInfo, Category } from '../types/inventory';

interface StorageInstructionsManagerProps {
  itemId: string;
  categories: Category[];
  storageInstructions: StorageInstruction[];
  complianceInfo?: ComplianceInfo;
  onStorageInstructionsChange: (instructions: StorageInstruction[]) => void;
  onComplianceInfoChange: (info: ComplianceInfo | undefined) => void;
}

const StorageInstructionsManager = ({
  itemId,
  categories,
  storageInstructions,
  complianceInfo,
  onStorageInstructionsChange,
  onComplianceInfoChange,
}: StorageInstructionsManagerProps) => {
  const [instructionDialogOpen, setInstructionDialogOpen] = useState(false);
  const [complianceDialogOpen, setComplianceDialogOpen] = useState(false);
  const [selectedInstruction, setSelectedInstruction] = useState<StorageInstruction | null>(null);

  const [instructionForm, setInstructionForm] = useState<Partial<StorageInstruction>>({
    type: 'storage',
    instruction: '',
    priority: 'low',
    applicableCategories: [],
  });

  const [complianceForm, setComplianceForm] = useState<Partial<ComplianceInfo>>(
    complianceInfo || {
      type: 'other',
      certifications: [],
      handlingRequirements: [],
    }
  );

  const handleInstructionSave = () => {
    if (!instructionForm.instruction || !instructionForm.type) return;

    const newInstruction: StorageInstruction = {
      id: selectedInstruction?.id || Math.random().toString(36).substr(2, 9),
      type: instructionForm.type as 'storage' | 'handling' | 'safety',
      instruction: instructionForm.instruction,
      priority: instructionForm.priority as 'low' | 'medium' | 'high',
      applicableCategories: instructionForm.applicableCategories || [],
    };

    if (selectedInstruction) {
      onStorageInstructionsChange(
        storageInstructions.map(inst =>
          inst.id === selectedInstruction.id ? newInstruction : inst
        )
      );
    } else {
      onStorageInstructionsChange([...storageInstructions, newInstruction]);
    }

    setInstructionDialogOpen(false);
    setSelectedInstruction(null);
    setInstructionForm({
      type: 'storage',
      instruction: '',
      priority: 'low',
      applicableCategories: [],
    });
  };

  const handleComplianceSave = () => {
    if (!complianceForm.type) return;

    const newCompliance: ComplianceInfo = {
      type: complianceForm.type as 'hazardous' | 'fragile' | 'temperature-sensitive' | 'other',
      certifications: complianceForm.certifications || [],
      handlingRequirements: complianceForm.handlingRequirements || [],
      expirationDate: complianceForm.expirationDate,
    };

    onComplianceInfoChange(newCompliance);
    setComplianceDialogOpen(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6">Storage & Handling Instructions</Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setInstructionDialogOpen(true)}
            >
              Add Instruction
            </Button>
          </Box>

          <List>
            {storageInstructions.map((instruction) => (
              <ListItem key={instruction.id}>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography>{instruction.instruction}</Typography>
                      <Chip
                        size="small"
                        label={instruction.priority}
                        color={getPriorityColor(instruction.priority) as any}
                      />
                    </Box>
                  }
                  secondary={`Type: ${instruction.type}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => {
                      setSelectedInstruction(instruction);
                      setInstructionForm(instruction);
                      setInstructionDialogOpen(true);
                    }}
                    sx={{ mr: 1 }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => {
                      onStorageInstructionsChange(
                        storageInstructions.filter(inst => inst.id !== instruction.id)
                      );
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">Compliance Information</Typography>
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                onClick={() => setComplianceDialogOpen(true)}
              >
                {complianceInfo ? 'Edit' : 'Add'}
              </Button>
            </Box>

            {complianceInfo ? (
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Type: {complianceInfo.type}
                </Typography>
                {complianceInfo.certifications.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Certifications:
                    </Typography>
                    {complianceInfo.certifications.map((cert, index) => (
                      <Chip key={index} label={cert} size="small" sx={{ mr: 1, mb: 1 }} />
                    ))}
                  </Box>
                )}
                {complianceInfo.handlingRequirements.length > 0 && (
                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Handling Requirements:
                    </Typography>
                    {complianceInfo.handlingRequirements.map((req, index) => (
                      <Typography key={index} variant="body2">
                        • {req}
                      </Typography>
                    ))}
                  </Box>
                )}
                {complianceInfo.expirationDate && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Expires: {new Date(complianceInfo.expirationDate).toLocaleDateString()}
                  </Typography>
                )}
              </Box>
            ) : (
              <Typography color="text.secondary">
                No compliance information added
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Storage Instruction Dialog */}
      <Dialog open={instructionDialogOpen} onClose={() => setInstructionDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedInstruction ? 'Edit Instruction' : 'Add New Instruction'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={instructionForm.type || 'storage'}
                  onChange={(e) => setInstructionForm(prev => ({
                    ...prev,
                    type: e.target.value as StorageInstruction['type']
                  }))}
                  label="Type"
                >
                  <MenuItem value="storage">Storage</MenuItem>
                  <MenuItem value="handling">Handling</MenuItem>
                  <MenuItem value="safety">Safety</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select
                  value={instructionForm.priority || 'low'}
                  onChange={(e) => setInstructionForm(prev => ({
                    ...prev,
                    priority: e.target.value as StorageInstruction['priority']
                  }))}
                  label="Priority"
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Instruction"
                value={instructionForm.instruction}
                onChange={(e) => setInstructionForm(prev => ({
                  ...prev,
                  instruction: e.target.value
                }))}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Applicable Categories</InputLabel>
                <Select
                  multiple
                  value={instructionForm.applicableCategories || []}
                  onChange={(e) => setInstructionForm(prev => ({
                    ...prev,
                    applicableCategories: typeof e.target.value === 'string'
                      ? e.target.value.split(',')
                      : e.target.value
                  }))}
                  label="Applicable Categories"
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((categoryId) => {
                        const category = categories.find(c => c.id === categoryId);
                        return category ? (
                          <Chip key={categoryId} label={category.name} size="small" />
                        ) : null;
                      })}
                    </Box>
                  )}
                >
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setInstructionDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleInstructionSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Compliance Dialog */}
      <Dialog open={complianceDialogOpen} onClose={() => setComplianceDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {complianceInfo ? 'Edit Compliance Information' : 'Add Compliance Information'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={complianceForm.type || 'other'}
                  onChange={(e) => setComplianceForm(prev => ({
                    ...prev,
                    type: e.target.value as ComplianceInfo['type']
                  }))}
                  label="Type"
                >
                  <MenuItem value="hazardous">Hazardous</MenuItem>
                  <MenuItem value="fragile">Fragile</MenuItem>
                  <MenuItem value="temperature-sensitive">Temperature Sensitive</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Expiration Date"
                value={complianceForm.expirationDate || ''}
                onChange={(e) => setComplianceForm(prev => ({
                  ...prev,
                  expirationDate: e.target.value
                }))}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Certifications (comma-separated)"
                value={complianceForm.certifications?.join(', ') || ''}
                onChange={(e) => setComplianceForm(prev => ({
                  ...prev,
                  certifications: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                }))}
                helperText="Enter certifications separated by commas"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Handling Requirements (one per line)"
                value={complianceForm.handlingRequirements?.join('\n') || ''}
                onChange={(e) => setComplianceForm(prev => ({
                  ...prev,
                  handlingRequirements: e.target.value.split('\n').map(s => s.trim()).filter(Boolean)
                }))}
                helperText="Enter each handling requirement on a new line"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setComplianceDialogOpen(false)}>Cancel</Button>
          {complianceInfo && (
            <Button
              onClick={() => {
                onComplianceInfoChange(undefined);
                setComplianceDialogOpen(false);
              }}
              color="error"
            >
              Remove
            </Button>
          )}
          <Button onClick={handleComplianceSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StorageInstructionsManager;
