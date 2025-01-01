import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InventoryPage from '../features/inventory/InventoryPage';
import InventoryDetailsPage from '../features/inventory/pages/InventoryDetailsPage';
import NewInventoryItemPage from '../features/inventory/NewInventoryItemPage';
import ReservationPage from '../features/inventory/ReservationPage';
import ReservationCartPage from '../features/inventory/ReservationCartPage';
import EquipmentMaintenancePage from '../features/inventory/EquipmentMaintenancePage';
import SuppliersPage from '../features/inventory/SuppliersPage';
import NewSupplierPage from '../features/inventory/NewSupplierPage';
import NewMaintenancePage from '../features/inventory/NewMaintenancePage';
import { BundlesPage } from '../features/inventory/BundlesPage';

const InventoryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InventoryPage />} />
      <Route path="/:id" element={<InventoryDetailsPage />} />
      <Route path="/new" element={<NewInventoryItemPage />} />
      <Route path="/bundles" element={<BundlesPage />} />
      <Route path="/reserve" element={<ReservationPage />} />
      <Route path="/cart" element={<ReservationCartPage />} />
      <Route path="/maintenance" element={<EquipmentMaintenancePage />} />
      <Route path="/maintenance/new" element={<NewMaintenancePage />} />
      <Route path="/suppliers" element={<SuppliersPage />} />
      <Route path="/suppliers/new" element={<NewSupplierPage />} />
    </Routes>
  );
};

export default InventoryRoutes;
