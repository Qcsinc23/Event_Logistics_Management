import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, Result } from '@zxing/library';
import { Box, Button, Paper, Typography, Stack, keyframes } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CameraAlt as CameraIcon, QrCodeScanner as ScannerIcon } from '@mui/icons-material';
import LoadingState from './LoadingState';

interface BarcodeScannerProps {
  onScan: (result: string) => void;
  onError?: (error: Error) => void;
}

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

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

export const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onScan, onError }) => {
  const theme = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [status, setStatus] = useState<string>('Initializing...');
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const initializeScanner = async () => {
    try {
      setStatus('Requesting camera access...');
      setIsLoading(true);
      setError(null);

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 },
          aspectRatio: { ideal: 1.7777777778 }
        }
      });

      setStream(mediaStream);
      setHasPermission(true);
      setStatus('Camera access granted');

      if (!videoRef.current) {
        throw new Error('Video element not found');
      }

      videoRef.current.srcObject = mediaStream;
      setStatus('Starting video feed...');

      await new Promise<void>((resolve) => {
        if (!videoRef.current) return;
        videoRef.current.onloadedmetadata = () => {
          resolve();
        };
      });

      await videoRef.current.play();
      setStatus('Video feed active');

      setStatus('Initializing barcode scanner...');
      const codeReader = new BrowserMultiFormatReader();
      codeReaderRef.current = codeReader;

      const devices = await codeReader.listVideoInputDevices();
      console.log('Available devices:', devices);

      const selectedDevice = devices.length > 0 ? devices[0].deviceId : '';

      try {
        await codeReader.decodeOnceFromVideoDevice(selectedDevice, videoRef.current);
      } catch (decodeErr) {
        console.log('Initial decode attempt failed, continuing with continuous scan');
      }

      codeReader.decodeFromVideoDevice(
        selectedDevice,
        videoRef.current,
        (result: Result | null, err?: Error) => {
          if (result) {
            console.log('Barcode detected:', result.getText());
            playSuccessSound();
            onScan(result.getText());
          }
          if (err && !err.message.includes('No MultiFormat Readers were able to detect')) {
            console.error('Scan error:', err);
            playErrorSound();
            if (onError) onError(err);
          }
        }
      );

      setStatus('Scanner ready');
      setIsLoading(false);
    } catch (err) {
      console.error('Scanner initialization error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize camera';
      
      if (err instanceof DOMException && err.name === 'NotAllowedError') {
        setHasPermission(false);
        setError('Camera access denied. Please enable camera access in your browser settings.');
      } else {
        setError(errorMessage);
      }
      
      setStatus('Error: ' + errorMessage);
      if (onError) {
        onError(err instanceof Error ? err : new Error(errorMessage));
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkPermission = async () => {
      try {
        const result = await navigator.permissions.query({ name: 'camera' as PermissionName });
        setHasPermission(result.state === 'granted');
        
        result.addEventListener('change', () => {
          setHasPermission(result.state === 'granted');
          if (result.state === 'granted') {
            initializeScanner();
          }
        });

        if (result.state === 'granted') {
          initializeScanner();
        }
      } catch (err) {
        console.log('Permission query not supported, trying direct initialization');
        initializeScanner();
      }
    };

    checkPermission();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (codeReaderRef.current) {
        codeReaderRef.current.reset();
      }
    };
  }, []);

  if (hasPermission === false) {
    return (
      <Paper 
        sx={{ 
          p: 4,
          textAlign: 'center',
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.contrastText,
          borderRadius: 2,
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Box
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
              animation: `${glowAnimation} 2s infinite`,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                animation: `${pulseAnimation} 2s infinite`
              }
            }}
          >
            <CameraIcon 
              sx={{ 
                fontSize: 64, 
                color: 'white',
                animation: `${pulseAnimation} 2s infinite`
              }} 
            />
          </Box>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Camera Access Required
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 400, mx: 'auto' }}>
            To scan inventory items, we need access to your device's camera. 
            Click the button below and allow camera access when prompted.
          </Typography>
          <Button 
            variant="contained"
            size="large"
            onClick={initializeScanner}
            startIcon={<CameraIcon />}
            sx={{ 
              mt: 2,
              py: 1.5,
              px: 4,
              backgroundColor: 'white',
              color: theme.palette.warning.main,
              '&:hover': {
                backgroundColor: theme.palette.grey[100]
              },
              boxShadow: theme.shadows[3]
            }}
          >
            Enable Camera
          </Button>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mt: 2 }}>
            Your camera will only be used while you're on this page
          </Typography>
        </Stack>
      </Paper>
    );
  }

  if (isLoading) {
    return <LoadingState status={status} />;
  }

  if (error) {
    return (
      <Paper 
        sx={{ 
          p: 4,
          textAlign: 'center',
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.contrastText,
          borderRadius: 2,
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Box
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2
            }}
          >
            <ScannerIcon sx={{ fontSize: 64, color: 'white' }} />
          </Box>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Scanner Error
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 400, mx: 'auto' }}>
            {error}
          </Typography>
          <Button 
            variant="contained"
            size="large"
            onClick={initializeScanner}
            startIcon={<ScannerIcon />}
            sx={{ 
              mt: 2,
              py: 1.5,
              px: 4,
              backgroundColor: 'white',
              color: theme.palette.error.main,
              '&:hover': {
                backgroundColor: theme.palette.grey[100]
              },
              boxShadow: theme.shadows[3]
            }}
          >
            Try Again
          </Button>
        </Stack>
      </Paper>
    );
  }

  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingTop: '75%', // 4:3 Aspect Ratio
          overflow: 'hidden',
          borderRadius: 2,
          boxShadow: 3,
          '& video': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }}
      >
        <video 
          ref={videoRef}
          playsInline
          autoPlay
          muted
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '40%',
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: 2,
            boxShadow: `0 0 0 9999px rgba(0, 0, 0, 0.5)`,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '2px',
              backgroundColor: theme.palette.primary.main,
              animation: 'scan 2s linear infinite'
            }
          }}
        />
      </Box>
      <Paper 
        elevation={2} 
        sx={{ 
          mt: 2, 
          p: 2, 
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          textAlign: 'center'
        }}
      >
        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
          Position the barcode within the highlighted area
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Hold your device steady for best results
        </Typography>
      </Paper>
      <style>
        {`
          @keyframes scan {
            0% {
              transform: translateY(-50%);
            }
            50% {
              transform: translateY(100%);
            }
            100% {
              transform: translateY(-50%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default BarcodeScanner;
