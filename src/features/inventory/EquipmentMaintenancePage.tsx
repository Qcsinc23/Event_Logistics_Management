import { Box, Typography, Paper, Grid, Button, TextField, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import BuildIcon from '@mui/icons-material/Build';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';

interface MaintenanceRecord {
  id: string;
  equipmentId: string;
  equipmentName: string;
  type: 'Routine' | 'Repair' | 'Inspection';
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Overdue';
  lastMaintenance: string;
  nextDue: string;
  assignedTo: string;
  notes: string;
  cost: number;
}

const mockRecords: MaintenanceRecord[] = [
  {
    id: '1',
    equipmentId: 'AV001',
    equipmentName: 'Projector System',
    type: 'Routine',
    status: 'Scheduled',
    lastMaintenance: '2024-02-15',
    nextDue: '2024-03-15',
    assignedTo: 'Tech Team',
    notes: 'Monthly cleaning and calibration',
    cost: 150
  },
  {
    id: '2',
    equipmentId: 'AV002',
    equipmentName: 'Sound System',
    type: 'Repair',
    status: 'In Progress',
    lastMaintenance: '2024-03-01',
    nextDue: '2024-03-05',
    assignedTo: 'Audio Team',
    notes: 'Replace faulty speaker',
    cost: 500
  },
  {
    id: '3',
    equipmentId: 'FUR001',
    equipmentName: 'Stage Equipment',
    type: 'Inspection',
    status: 'Overdue',
    lastMaintenance: '2024-01-10',
    nextDue: '2024-03-01',
    assignedTo: 'Stage Team',
    notes: 'Safety inspection required',
    cost: 0
  }
];

const EquipmentMaintenancePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [records] = useState<MaintenanceRecord[]>(mockRecords);

  const filteredRecords = records.filter(record =>
    record.equipmentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.equipmentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'info';
      case 'Scheduled':
        return 'warning';
      case 'Overdue':
        return 'error';
      default:
        return 'default';
    }
  };

  const getMaintenanceTypeColor = (type: string) => {
    switch (type) {
      case 'Routine':
        return 'primary';
      case 'Repair':
        return 'error';
      case 'Inspection':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getUpcomingMaintenance = () => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    
    return records.filter(record => {
      const dueDate = new Date(record.nextDue);
      return dueDate >= today && dueDate <= nextWeek;
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Equipment Maintenance
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Track and manage equipment maintenance schedules
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/inventory/maintenance/new')}
        >
          Schedule Maintenance
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <BuildIcon color="primary" />
                <Typography variant="h6">Total Equipment</Typography>
              </Box>
              <Typography variant="h4">24</Typography>
              <Typography variant="body2" color="text.secondary">
                Under maintenance tracking
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <WarningIcon color="error" />
                <Typography variant="h6">Overdue</Typography>
              </Box>
              <Typography variant="h4">3</Typography>
              <Typography variant="body2" color="text.secondary">
                Require immediate attention
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <ScheduleIcon color="warning" />
                <Typography variant="h6">Upcoming</Typography>
              </Box>
              <Typography variant="h4">{getUpcomingMaintenance().length}</Typography>
              <Typography variant="body2" color="text.secondary">
                Due in next 7 days
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <CheckCircleIcon color="success" />
                <Typography variant="h6">Completed</Typography>
              </Box>
              <Typography variant="h4">18</Typography>
              <Typography variant="body2" color="text.secondary">
                This month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search maintenance records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Equipment ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Last Maintenance</TableCell>
                <TableCell>Next Due</TableCell>
                <TableCell>Assigned To</TableCell>
                <TableCell align="right">Cost</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRecords.map((record) => (
                <TableRow key={record.id} hover>
                  <TableCell>{record.equipmentId}</TableCell>
                  <TableCell>{record.equipmentName}</TableCell>
                  <TableCell>
                    <Chip
                      label={record.type}
                      color={getMaintenanceTypeColor(record.type)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={record.status}
                      color={getStatusColor(record.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{new Date(record.lastMaintenance).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(record.nextDue).toLocaleDateString()}</TableCell>
                  <TableCell>{record.assignedTo}</TableCell>
                  <TableCell align="right">${record.cost.toLocaleString()}</TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      onClick={() => navigate(`/inventory/maintenance/${record.id}`)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default EquipmentMaintenancePage;
