import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { databases } from '../../../config/appwrite';
import { DATABASE_ID, COLLECTIONS } from '../../../config/constants';
import { Query } from 'appwrite';
import BarcodeScanner from '../components/BarcodeScanner';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
} from '@mui/material';

interface ScannedItem {
  id: string;
  name: string;
  sku: string;
  location: string;
  timestamp: string;
}

export const ScanPage = () => {
  const theme = useTheme();
  const [scannedItems, setScannedItems] = useState<ScannedItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async (barcode: string) => {
    if (isProcessing) return;
    setIsProcessing(true);
    setError(null);

    try {
      // Query the inventory item
      const items = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.INVENTORY_ITEMS,
        [Query.equal('sku', barcode)]
      );

      if (items.documents.length === 0) {
        throw new Error('Item not found');
      }

      const inventoryItem = items.documents[0];

      // Update the item's last scanned timestamp and location
      await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.INVENTORY_ITEMS,
        inventoryItem.$id,
        {
          last_scanned: new Date().toISOString(),
          location: 'Scanning Station' // This could be dynamic based on the scanner's location
        }
      );

      // Add to scanned items list
      setScannedItems(prev => [{
        id: inventoryItem.$id,
        name: inventoryItem.name,
        sku: inventoryItem.sku,
        location: 'Scanning Station',
        timestamp: new Date().toISOString()
      }, ...prev]);

    } catch (err: any) {
      console.error('Scan error:', err);
      setError(err.message || 'Failed to process scan');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Scan Items
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Paper sx={{ p: 2, mb: 3 }}>
        <BarcodeScanner onScan={handleScan} disabled={isProcessing} />
        {isProcessing && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircularProgress size={24} />
          </Box>
        )}
      </Paper>

      <Typography variant="h6" gutterBottom>
        Recently Scanned Items
      </Typography>

      <List>
        {scannedItems.map((item, index) => (
          <ListItem
            key={`${item.id}-${index}`}
            divider={index !== scannedItems.length - 1}
          >
            <ListItemText
              primary={item.name}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    SKU: {item.sku}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2">
                    Location: {item.location}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2">
                    Scanned: {new Date(item.timestamp).toLocaleString()}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ScanPage;
