import React from 'react';
import { Box, CircularProgress, Paper, Typography, LinearProgress, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  CameraAlt as CameraIcon,
  Videocam as VideocamIcon,
  QrCodeScanner as ScannerIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

interface LoadingStateProps {
  status: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ status }) => {
  const theme = useTheme();

  const getStatusIcon = () => {
    switch (status.toLowerCase()) {
      case 'requesting camera access...':
        return <CameraIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />;
      case 'camera access granted':
        return <CheckCircleIcon sx={{ fontSize: 40, color: theme.palette.success.main }} />;
      case 'starting video feed...':
        return <VideocamIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />;
      case 'initializing barcode scanner...':
        return <ScannerIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />;
      case 'scanner ready':
        return <CheckCircleIcon sx={{ fontSize: 40, color: theme.palette.success.main }} />;
      default:
        return <CameraIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />;
    }
  };

  const getStatusProgress = () => {
    switch (status.toLowerCase()) {
      case 'requesting camera access...':
        return 25;
      case 'camera access granted':
        return 50;
      case 'starting video feed...':
        return 75;
      case 'initializing barcode scanner...':
        return 90;
      case 'scanner ready':
        return 100;
      default:
        return 0;
    }
  };

  const getStatusColor = () => {
    const progress = getStatusProgress();
    if (progress === 100) return theme.palette.success.main;
    if (progress >= 75) return theme.palette.info.main;
    if (progress >= 50) return theme.palette.primary.main;
    return theme.palette.primary.main;
  };

  return (
    <Paper 
      sx={{ 
        p: 4, 
        textAlign: 'center', 
        borderRadius: 2, 
        maxWidth: '600px', 
        margin: '0 auto',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3]
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            backgroundColor: theme.palette.grey[100],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {getStatusIcon()}
          <CircularProgress
            variant="determinate"
            value={getStatusProgress()}
            size={120}
            thickness={4}
            sx={{
              position: 'absolute',
              color: getStatusColor(),
              '& .MuiCircularProgress-circle': {
                strokeLinecap: 'round',
              },
            }}
          />
        </Box>

        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
            {status}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress 
                variant="determinate" 
                value={getStatusProgress()}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: theme.palette.grey[200],
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 4,
                    backgroundColor: getStatusColor(),
                  }
                }}
              />
            </Box>
            <Box sx={{ minWidth: 45 }}>
              <Typography variant="body2" color="text.secondary">
                {`${getStatusProgress()}%`}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Stack spacing={1} sx={{ width: '100%', maxWidth: 400 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircleIcon 
              sx={{ 
                color: getStatusProgress() >= 25 ? theme.palette.success.main : theme.palette.grey[400],
                fontSize: 20 
              }} 
            />
            <Typography 
              variant="body2" 
              color={getStatusProgress() >= 25 ? 'text.primary' : 'text.secondary'}
            >
              Requesting camera access
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircleIcon 
              sx={{ 
                color: getStatusProgress() >= 50 ? theme.palette.success.main : theme.palette.grey[400],
                fontSize: 20 
              }} 
            />
            <Typography 
              variant="body2" 
              color={getStatusProgress() >= 50 ? 'text.primary' : 'text.secondary'}
            >
              Camera access granted
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircleIcon 
              sx={{ 
                color: getStatusProgress() >= 75 ? theme.palette.success.main : theme.palette.grey[400],
                fontSize: 20 
              }} 
            />
            <Typography 
              variant="body2" 
              color={getStatusProgress() >= 75 ? 'text.primary' : 'text.secondary'}
            >
              Starting video feed
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircleIcon 
              sx={{ 
                color: getStatusProgress() >= 90 ? theme.palette.success.main : theme.palette.grey[400],
                fontSize: 20 
              }} 
            />
            <Typography 
              variant="body2" 
              color={getStatusProgress() >= 90 ? 'text.primary' : 'text.secondary'}
            >
              Initializing barcode scanner
            </Typography>
          </Box>
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Please wait while we initialize the camera and barcode scanner...
        </Typography>
      </Stack>
    </Paper>
  );
};

export default LoadingState;
