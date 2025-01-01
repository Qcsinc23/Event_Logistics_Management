import React, { useState, useCallback } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
  Paper,
  IconButton,
  Grid,
  Alert,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  ConditionStatus,
  MediaType,
  CreateConditionReportRequest,
} from '../types/condition-reports';
import { createConditionReport } from '../../../services/condition-reports';

interface ConditionReportFormProps {
  itemId: string;
  eventId: string;
  onSubmit: () => void;
  onCancel: () => void;
}

interface MediaFile {
  file: File;
  type: MediaType;
  preview: string;
  annotations?: {
    notes?: string;
    markups?: {
      type: 'text' | 'arrow' | 'circle';
      position: { x: number; y: number };
      content?: string;
    }[];
  };
}

const ConditionReportForm: React.FC<ConditionReportFormProps> = ({
  itemId,
  eventId,
  onSubmit,
  onCancel,
}) => {
  const [condition, setCondition] = useState<ConditionStatus>('good');
  const [notes, setNotes] = useState('');
  const [media, setMedia] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newMedia = acceptedFiles.map(file => ({
      file,
      type: file.type.startsWith('image/') ? 'image' : 'video' as MediaType,
      preview: URL.createObjectURL(file),
      annotations: {},
    }));
    setMedia(prev => [...prev, ...newMedia]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
      'video/*': [],
    },
    maxSize: 10485760, // 10MB
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const request: CreateConditionReportRequest = {
        item_id: itemId,
        event_id: eventId,
        condition,
        notes,
        media: media.map(m => ({
          file: m.file,
          type: m.type,
          annotations: m.annotations,
        })),
      };

      await createConditionReport(request);
      onSubmit();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit report');
    } finally {
      setLoading(false);
    }
  };

  const removeMedia = (index: number) => {
    setMedia(prev => {
      const newMedia = [...prev];
      URL.revokeObjectURL(newMedia[index].preview);
      newMedia.splice(index, 1);
      return newMedia;
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Condition Report
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Condition</InputLabel>
              <Select
                value={condition}
                onChange={(e) => setCondition(e.target.value as ConditionStatus)}
                label="Condition"
                required
              >
                <MenuItem value="good">Good</MenuItem>
                <MenuItem value="damaged">Damaged</MenuItem>
                <MenuItem value="requires_cleaning">Requires Cleaning</MenuItem>
                <MenuItem value="requires_maintenance">Requires Maintenance</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter any additional notes about the condition..."
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Media
            </Typography>
            <Box
              {...getRootProps()}
              sx={{
                border: '2px dashed',
                borderColor: isDragActive ? 'primary.main' : 'grey.300',
                borderRadius: 1,
                p: 3,
                textAlign: 'center',
                cursor: 'pointer',
                mb: 2,
              }}
            >
              <input {...getInputProps()} />
              <PhotoCamera sx={{ fontSize: 40, color: 'grey.500', mb: 1 }} />
              <Typography>
                {isDragActive
                  ? 'Drop the files here...'
                  : 'Drag & drop photos/videos here, or click to select'}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Maximum file size: 10MB
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {media.map((file, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    sx={{
                      position: 'relative',
                      paddingTop: '75%', // 4:3 Aspect Ratio
                      overflow: 'hidden',
                    }}
                  >
                    {file.type === 'image' ? (
                      <img
                        src={file.preview}
                        alt={`Upload preview ${index + 1}`}
                        style={{
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    ) : (
                      <video
                        src={file.preview}
                        style={{
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    )}
                    <IconButton
                      size="small"
                      onClick={() => removeMedia(index)}
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        bgcolor: 'background.paper',
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button onClick={onCancel}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Report'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ConditionReportForm;
