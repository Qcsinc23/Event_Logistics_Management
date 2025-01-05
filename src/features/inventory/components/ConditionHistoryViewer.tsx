import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Chip, Grid, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  CheckCircle as GoodIcon,
  Warning as DamagedIcon,
  CleaningServices as CleaningIcon,
  Build as MaintenanceIcon,
  ZoomIn as ZoomIcon,
} from '@mui/icons-material';
import { ConditionReport, ConditionReportMedia } from '../types/condition-reports';
import { getItemConditionHistory } from '../../../services/condition-reports';

interface ConditionHistoryViewerProps {
  itemId: string;
}

const getStatusIcon = (condition: string) => {
  switch (condition) {
    case 'good':
      return <GoodIcon color="success" />;
    case 'damaged':
      return <DamagedIcon color="error" />;
    case 'requires_cleaning':
      return <CleaningIcon color="warning" />;
    case 'requires_maintenance':
      return <MaintenanceIcon color="warning" />;
    default:
      return null;
  }
};

const getStatusColor = (condition: string) => {
  switch (condition) {
    case 'good':
      return 'success';
    case 'damaged':
      return 'error';
    case 'requires_cleaning':
    case 'requires_maintenance':
      return 'warning';
    default:
      return 'default';
  }
};

const ConditionHistoryViewer: React.FC<ConditionHistoryViewerProps> = ({ itemId }) => {
  const [reports, setReports] = useState<ConditionReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<ConditionReportMedia | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getItemConditionHistory(itemId);
        setReports(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load condition history');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [itemId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <Typography>Loading history...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Condition History
      </Typography>

      {reports.length === 0 ? (
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography color="text.secondary">
            No condition reports available
          </Typography>
        </Paper>
      ) : (
        <Timeline>
          {reports.map((report) => (
            <TimelineItem key={report.id}>
              <TimelineOppositeContent color="text.secondary">
                {new Date(report.reported_at).toLocaleString()}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot sx={{ p: 0 }}>
                  {getStatusIcon(report.condition)}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent>
                <Paper sx={{ p: 2 }}>
                  <Box sx={{ mb: 1 }}>
                    <Chip
                      label={report.condition.replace('_', ' ')}
                      color={getStatusColor(report.condition) as any}
                      size="small"
                      sx={{ textTransform: 'capitalize' }}
                    />
                  </Box>

                  {report.notes && (
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {report.notes}
                    </Typography>
                  )}

                  {report.media && report.media.length > 0 && (
                    <Grid container spacing={1}>
                      {report.media.map((media) => (
                        <Grid item key={media.id} xs={6} sm={4} md={3}>
                          <Paper
                            sx={{
                              position: 'relative',
                              paddingTop: '75%',
                              overflow: 'hidden',
                              cursor: 'pointer',
                            }}
                            onClick={() => setSelectedMedia(media)}
                          >
                            {media.media_type === 'image' ? (
                              <img
                                src={media.storage_path}
                                alt="Condition report"
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
                                src={media.storage_path}
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
                              sx={{
                                position: 'absolute',
                                bottom: 4,
                                right: 4,
                                bgcolor: 'background.paper',
                              }}
                            >
                              <ZoomIcon />
                            </IconButton>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}

      <Dialog
        open={!!selectedMedia}
        onClose={() => setSelectedMedia(null)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>
          Media Details
          {selectedMedia?.annotations?.notes && (
            <Typography variant="body2" color="text.secondary">
              {selectedMedia.annotations.notes}
            </Typography>
          )}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {selectedMedia?.media_type === 'image' ? (
              <img
                src={selectedMedia.storage_path}
                alt="Condition report"
                style={{ maxWidth: '100%', maxHeight: '80vh' }}
              />
            ) : (
              <video
                src={selectedMedia?.storage_path}
                controls
                style={{ maxWidth: '100%', maxHeight: '80vh' }}
              />
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ConditionHistoryViewer;
