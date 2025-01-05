import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Button,
  Alert,
  CircularProgress,
  Dialog,
  Grid,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ConditionReportForm from '../components/ConditionReportForm';
import ConditionHistoryViewer from '../components/ConditionHistoryViewer';
import StorageInstructionsManager from '../components/StorageInstructionsManager';
import InventoryAnalytics from '../components/InventoryAnalytics';
import { InventoryItem } from '../types/inventory';
import { getInventoryItem } from '../../../services/inventory';

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

const InventoryDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">
          Item ID is required
        </Alert>
      </Box>
    );
  }
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [item, setItem] = useState<InventoryItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reportDialogOpen, setReportDialogOpen] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      if (!id) return;

      try {
        const data = await getInventoryItem(id);
        setItem(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load item details');
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !item) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">
          {error || 'Item not found'}
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/inventory')}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          {item.name}
        </Typography>
        <Button
          variant="contained"
          onClick={() => setReportDialogOpen(true)}
        >
          New Condition Report
        </Button>
      </Box>

      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Overview" />
          <Tab label="Condition History" />
          <Tab label="Storage & Handling" />
          <Tab label="Analytics" />
        </Tabs>

        <TabPanel value={activeTab} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Item Details
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  SKU
                </Typography>
                <Typography>{item.sku}</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Category
                </Typography>
                <Typography>{item.categoryId}</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Description
                </Typography>
                <Typography>{item.description}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Inventory Status
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Available Quantity
                </Typography>
                <Typography>{item.availableQuantity} {item.unit}</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Reserved Quantity
                </Typography>
                <Typography>{item.reservedQuantity} {item.unit}</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Minimum Quantity
                </Typography>
                <Typography>{item.minQuantity} {item.unit}</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Location
                </Typography>
                <Typography>{item.defaultLocation}</Typography>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={activeTab} index={1}>
          <ConditionHistoryViewer itemId={id!} />
        </TabPanel>

        <TabPanel value={activeTab} index={2}>
          <StorageInstructionsManager
            itemId={id!}
            categories={[]} // Pass actual categories
            storageInstructions={item.storageInstructions || []}
            complianceInfo={item.compliance}
            onStorageInstructionsChange={() => {}} // Implement handlers
            onComplianceInfoChange={() => {}}
          />
        </TabPanel>

        <TabPanel value={activeTab} index={3}>
          <InventoryAnalytics itemId={id!} />
        </TabPanel>
      </Paper>

      <Dialog
        open={reportDialogOpen}
        onClose={() => setReportDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <ConditionReportForm
          itemId={id!}
          eventId="current" // Pass actual event ID if applicable
          onSubmit={() => {
            setReportDialogOpen(false);
            // Refresh condition history
            setActiveTab(1);
          }}
          onCancel={() => setReportDialogOpen(false)}
        />
      </Dialog>
    </Box>
  );
};

export default InventoryDetailsPage;
