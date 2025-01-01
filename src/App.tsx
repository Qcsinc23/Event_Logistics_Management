import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import NavBar from './components/NavBar';
import DashboardPage from './features/dashboard/DashboardPage';
import EventsPage from './features/events/EventsPage';
import NotFoundPage from './features/not-found/NotFoundPage';

// Lazy load pages
const NewEventPage = lazy(() => import('./features/events/NewEventPage'));
const EventDetailsPage = lazy(() => import('./features/events/EventDetailsPage'));
const AttendeesPage = lazy(() => import('./features/attendees/AttendeesPage'));
const NewAttendeePage = lazy(() => import('./features/attendees/NewAttendeePage'));
const VenuesPage = lazy(() => import('./features/venues/VenuesPage'));
const NewVenuePage = lazy(() => import('./features/venues/NewVenuePage'));
const CalendarPage = lazy(() => import('./features/calendar/CalendarPage'));

// ERP Features
const InventoryPage = lazy(() => import('./features/inventory/InventoryPage'));
const NewInventoryItemPage = lazy(() => import('./features/inventory/NewInventoryItemPage'));
const EquipmentMaintenancePage = lazy(() => import('./features/inventory/EquipmentMaintenancePage'));
const SuppliersPage = lazy(() => import('./features/inventory/SuppliersPage'));
const NewSupplierPage = lazy(() => import('./features/inventory/NewSupplierPage'));
const ReservationPage = lazy(() => import('./features/inventory/ReservationPage'));
const ReservationCartPage = lazy(() => import('./features/inventory/ReservationCartPage'));
const NewMaintenancePage = lazy(() => import('./features/inventory/NewMaintenancePage'));
const FinancePage = lazy(() => import('./features/finance/FinancePage'));
const NewTransactionPage = lazy(() => import('./features/finance/NewTransactionPage'));
const ReportsPage = lazy(() => import('./features/reports/ReportsPage'));

// Event Features
const EventTemplatesPage = lazy(() => import('./features/events/EventTemplatesPage'));
const NewEventTemplatePage = lazy(() => import('./features/events/NewEventTemplatePage'));
const EditEventTemplatePage = lazy(() => import('./features/events/EditEventTemplatePage'));
const EventLayoutWrapper = lazy(() => import('./features/events/layout/EventLayoutWrapper'));

// Warehouse Features
const ScanPage = lazy(() => import('./features/warehouse/pages/ScanPage'));

// Styles
import './styles/global.css';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box className="container">
          <Suspense fallback={
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          }>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/new" element={<NewEventPage />} />
              <Route path="/events/:id" element={<EventDetailsPage />} />
              <Route path="/attendees" element={<AttendeesPage />} />
              <Route path="/attendees/new" element={<NewAttendeePage />} />
              <Route path="/venues" element={<VenuesPage />} />
              <Route path="/venues/new" element={<NewVenuePage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              {/* Inventory Management */}
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/inventory/new" element={<NewInventoryItemPage />} />
              <Route path="/inventory/maintenance" element={<EquipmentMaintenancePage />} />
              <Route path="/inventory/maintenance/new" element={<NewMaintenancePage />} />
              <Route path="/inventory/suppliers" element={<SuppliersPage />} />
              <Route path="/inventory/suppliers/new" element={<NewSupplierPage />} />
              <Route path="/inventory/reserve" element={<ReservationPage />} />
              <Route path="/inventory/cart" element={<ReservationCartPage />} />
              
              {/* Event Features */}
              <Route path="/events/templates" element={<EventTemplatesPage />} />
              <Route path="/events/templates/new" element={<NewEventTemplatePage />} />
              <Route path="/events/templates/:id/edit" element={<EditEventTemplatePage />} />
              <Route path="/events/:eventId/layout" element={<EventLayoutWrapper />} />
              <Route path="/events/:eventId/layout/:layoutId" element={<EventLayoutWrapper />} />

              {/* Finance & Reports */}
              <Route path="/finance" element={<FinancePage />} />
              <Route path="/finance/new" element={<NewTransactionPage />} />
              <Route path="/reports" element={<ReportsPage />} />

              {/* Warehouse Features */}
              <Route path="/warehouse/scan" element={<ScanPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
