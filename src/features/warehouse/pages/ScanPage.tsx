import React, { useState, useCallback, useEffect } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Alert,
  Snackbar,
  useTheme,
  CircularProgress
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import BarcodeScanner from '../components/BarcodeScanner';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import type { Database } from '../../../types/supabase';

interface ScannedItem {
  id: string;
  timestamp: number;
  code: string;
  status: 'pending' | 'success' | 'error';
  message?: string;
}

// Create beep sound using Web Audio API
const createBeepSound = (frequency: number, duration: number) => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;

  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.01);
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);

  return new Promise<void>(resolve => {
    setTimeout(resolve, duration * 1000);
  });
};

const playSuccessSound = () => createBeepSound(1000, 0.1);
const playErrorSound = () => createBeepSound(200, 0.3);

const ScanPage: React.FC = () => {
  const theme = useTheme();
  const supabase = useSupabaseClient<Database>();
  const [scannedItems, setScannedItems] = useState<ScannedItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSecureContext, setIsSecureContext] = useState(false);
  const [notification, setNotification] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info' | 'warning';
  }>({
    open: false,
    message: '',
    severity: 'info'
  });

  // Check if we're in a secure context (needed for camera access)
  useEffect(() => {
    const secure = window.isSecureContext;
    setIsSecureContext(secure);
    
    if (!secure) {
      setNotification({
        open: true,
        message: 'Camera access requires a secure (HTTPS) connection.',
        severity: 'warning'
      });
    }
  }, []);

  const handleScan = useCallback(async (result: string) => {
    if (isProcessing) return; // Prevent multiple scans while processing

    setIsProcessing(true);
    const newItem: ScannedItem = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      code: result,
      status: 'pending'
    };

    setScannedItems(prev => [newItem, ...prev]);

    try {
      // Query the inventory item
      const { data: inventoryItem, error: queryError } = await supabase
        .from('inventory_items')
        .select('*')
        .eq('barcode', result)
        .single();

      if (queryError) throw queryError;

      if (!inventoryItem) {
        throw new Error('Item not found in inventory');
      }

      // Update the item's last scanned timestamp and location
      const { error: updateError } = await supabase
        .from('inventory_items')
        .update({
          last_scanned: new Date().toISOString(),
          last_known_location: 'warehouse' // This could be made dynamic based on user's location
        })
        .eq('id', inventoryItem.id);

      if (updateError) throw updateError;

      // Play success sound and update UI
      await playSuccessSound();

      // Update scanned item status
      setScannedItems(prev =>
        prev.map(item =>
          item.id === newItem.id
            ? {
                ...item,
                status: 'success',
                message: `Found: ${inventoryItem.name}`
              }
            : item
        )
      );

      setNotification({
        open: true,
        message: `Successfully scanned: ${inventoryItem.name}`,
        severity: 'success'
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to process item';
      
      // Play error sound and update UI
      await playErrorSound();
      
      setScannedItems(prev =>
        prev.map(item =>
          item.id === newItem.id
            ? {
                ...item,
                status: 'error',
                message: errorMessage
              }
            : item
        )
      );

      setNotification({
        open: true,
        message: errorMessage,
        severity: 'error'
      });
    } finally {
      setIsProcessing(false);
    }
  }, [supabase, isProcessing]);

  const handleError = useCallback((error: Error) => {
    console.error('Scanner error:', error);
    setNotification({
      open: true,
      message: `Scanner error: ${error.message}`,
      severity: 'error'
    });
  }, []);

  const handleRemoveItem = useCallback((id: string) => {
    setScannedItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const handleCloseNotification = useCallback(() => {
    setNotification(prev => ({ ...prev, open: false }));
  }, []);

  if (!isSecureContext) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          <Typography variant="h6">Secure Connection Required</Typography>
          <Typography>
            Camera access requires a secure (HTTPS) connection. Please access this page using HTTPS.
          </Typography>
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Scan Inventory Items
      </Typography>
      
      <Paper elevation={3} sx={{ mb: 4, p: 3 }}>
        <BarcodeScanner onScan={handleScan} onError={handleError} />
      </Paper>

      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Recent Scans
        </Typography>
        
        {scannedItems.length === 0 ? (
          <Typography color="textSecondary" align="center" sx={{ py: 4 }}>
            No items scanned yet
          </Typography>
        ) : (
          <List>
            {scannedItems.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                sx={{
                  bgcolor: item.status === 'error'
                    ? theme.palette.error.light
                    : item.status === 'success'
                    ? theme.palette.success.light
                    : 'inherit',
                  borderRadius: 1,
                  mb: 1
                }}
              >
                <ListItemText
                  primary={item.code}
                  secondary={
                    <React.Fragment>
                      {item.status === 'pending' && <CircularProgress size={12} sx={{ mr: 1 }} />}
                      {item.message || 'Processing...'}
                      <br />
                      {new Date(item.timestamp).toLocaleTimeString()}
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ScanPage;
