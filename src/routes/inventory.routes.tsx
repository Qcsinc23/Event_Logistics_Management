import React, { useEffect, useState, Component, ErrorInfo } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { supabase } from '../utils/supabase/client';
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import InventoryPage from '../features/inventory/InventoryPage';
import InventoryDetailsPage from '../features/inventory/pages/InventoryDetailsPage';
import NewInventoryItemPage from '../features/inventory/NewInventoryItemPage';
import ReservationPage from '../features/inventory/ReservationPage';
import ReservationCartPage from '../features/inventory/ReservationCartPage';
import EquipmentMaintenancePage from '../features/inventory/EquipmentMaintenancePage';
import SuppliersPage from '../features/inventory/SuppliersPage';
import NewSupplierPage from '../features/inventory/NewSupplierPage';
import NewMaintenancePage from '../features/inventory/NewMaintenancePage';
import BundlesPage from '../features/inventory/BundlesPage';

// Error boundary component
class ErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error in inventory routes:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p={3} textAlign="center">
          <Typography variant="h6" color="error" gutterBottom>
            Something went wrong loading the inventory section.
          </Typography>
          <Button
            variant="contained"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

const InventoryRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setIsAuthenticated(!!user);
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <ErrorBoundary>
      <Routes>
      <Route path="/" element={<InventoryPage />} />
      <Route path="/new" element={<NewInventoryItemPage />} />
      <Route path="/bundles" element={<BundlesPage />} />
      <Route path="/reserve" element={<ReservationPage />} />
      <Route path="/cart" element={<ReservationCartPage />} />
      <Route path="/maintenance" element={<EquipmentMaintenancePage />} />
      <Route path="/maintenance/new" element={<NewMaintenancePage />} />
      <Route path="/suppliers" element={<SuppliersPage />} />
      <Route path="/suppliers/new" element={<NewSupplierPage />} />
      <Route path="/:id" element={<InventoryDetailsPage />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default InventoryRoutes;
