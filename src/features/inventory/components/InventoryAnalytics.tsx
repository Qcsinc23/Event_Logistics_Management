import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  CircularProgress,
  Alert,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  InventoryUsageStats,
  InventoryForecast,
  AnalyticsFilters,
  ForecastParameters,
} from '../types/condition-reports';
import {
  getInventoryUsageStats,
  getInventoryForecasts,
} from '../../../services/condition-reports';

interface InventoryAnalyticsProps {
  itemId: string;
}

interface ChartData {
  date: string;
  actual: number;
  predicted?: number;
  confidence?: [number, number]; // [lower bound, upper bound]
}

const InventoryAnalytics: React.FC<InventoryAnalyticsProps> = ({ itemId }) => {
  const [startDate, setStartDate] = useState<Date>(
    new Date(new Date().setMonth(new Date().getMonth() - 3))
  );
  const [endDate, setEndDate] = useState<Date>(
    new Date(new Date().setMonth(new Date().getMonth() + 3))
  );
  const [usageStats, setUsageStats] = useState<InventoryUsageStats[]>([]);
  const [forecasts, setForecasts] = useState<InventoryForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [usageData, forecastData] = await Promise.all([
          getInventoryUsageStats({
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            itemIds: [itemId],
          }),
          getInventoryForecasts({
            itemId,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
          }),
        ]);

        setUsageStats(usageData);
        setForecasts(forecastData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load analytics data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId, startDate, endDate]);

  const prepareChartData = (): ChartData[] => {
    const data: ChartData[] = [];

    // Add historical data
    usageStats.forEach((stat) => {
      data.push({
        date: new Date(stat.date).toLocaleDateString(),
        actual: stat.times_reserved,
      });
    });

    // Add forecast data
    forecasts.forEach((forecast) => {
      const existingData = data.find(
        (d) => d.date === new Date(forecast.forecast_date).toLocaleDateString()
      );

      if (existingData) {
        existingData.predicted = forecast.predicted_demand;
        existingData.confidence = [
          forecast.predicted_demand * (1 - forecast.confidence_level / 100),
          forecast.predicted_demand * (1 + forecast.confidence_level / 100),
        ];
      } else {
        data.push({
          date: new Date(forecast.forecast_date).toLocaleDateString(),
          actual: 0,
          predicted: forecast.predicted_demand,
          confidence: [
            forecast.predicted_demand * (1 - forecast.confidence_level / 100),
            forecast.predicted_demand * (1 + forecast.confidence_level / 100),
          ],
        });
      }
    });

    return data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const calculateMetrics = () => {
    if (usageStats.length === 0) return null;

    const totalReservations = usageStats.reduce((sum, stat) => sum + stat.times_reserved, 0);
    const totalDamaged = usageStats.reduce((sum, stat) => sum + stat.times_returned_damaged, 0);
    const averageReservations = totalReservations / usageStats.length;
    const damageRate = (totalDamaged / totalReservations) * 100;

    return {
      totalReservations,
      averageReservations,
      damageRate,
      totalRevenue: usageStats.reduce((sum, stat) => sum + stat.revenue_generated, 0),
    };
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        {error}
      </Alert>
    );
  }

  const metrics = calculateMetrics();
  const chartData = prepareChartData();

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Inventory Analytics
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newValue: Date | null) => newValue && setStartDate(newValue)}
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(newValue: Date | null) => newValue && setEndDate(newValue)}
                sx={{ width: '100%' }}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>

        {metrics && (
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Total Reservations
                  </Typography>
                  <Typography variant="h4">
                    {metrics.totalReservations}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Average Reservations
                  </Typography>
                  <Typography variant="h4">
                    {metrics.averageReservations.toFixed(1)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Damage Rate
                  </Typography>
                  <Typography variant="h4">
                    {metrics.damageRate.toFixed(1)}%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Total Revenue
                  </Typography>
                  <Typography variant="h4">
                    ${metrics.totalRevenue.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        <Box sx={{ height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#8884d8"
                name="Actual Usage"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="#82ca9d"
                name="Predicted Usage"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Box>
  );
};

export default InventoryAnalytics;
