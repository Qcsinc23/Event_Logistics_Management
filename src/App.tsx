import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardPage from './features/dashboard/DashboardPage';
import EventsPage from './features/events/EventsPage';
import NotFoundPage from './features/not-found/NotFoundPage';
import LoginPage from './features/auth/LoginPage';

// Auth Pages
const SignupPage = lazy(() => import('./features/auth/SignupPage'));

// Lazy load pages
const NewEventPage = lazy(() => import('./features/events/NewEventPage'));
const EventDetailsPage = lazy(() => import('./features/events/EventDetailsPage'));
const AttendeesPage = lazy(() => import('./features/attendees/AttendeesPage'));
const NewAttendeePage = lazy(() => import('./features/attendees/NewAttendeePage'));
const VenuesPage = lazy(() => import('./features/venues/VenuesPage'));
const NewVenuePage = lazy(() => import('./features/venues/NewVenuePage'));
const CalendarPage = lazy(() => import('./features/calendar/CalendarPage'));

// ERP Features
const InventoryRoutes = lazy(() => import('./routes/inventory.routes'));
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
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
              <Route path="/events" element={<ProtectedRoute><EventsPage /></ProtectedRoute>} />
              <Route path="/events/new" element={<ProtectedRoute><NewEventPage /></ProtectedRoute>} />
              <Route path="/events/:id" element={<ProtectedRoute><EventDetailsPage /></ProtectedRoute>} />
              <Route path="/attendees" element={<ProtectedRoute><AttendeesPage /></ProtectedRoute>} />
              <Route path="/attendees/new" element={<ProtectedRoute><NewAttendeePage /></ProtectedRoute>} />
              <Route path="/venues" element={<ProtectedRoute><VenuesPage /></ProtectedRoute>} />
              <Route path="/venues/new" element={<ProtectedRoute><NewVenuePage /></ProtectedRoute>} />
              <Route path="/calendar" element={<ProtectedRoute><CalendarPage /></ProtectedRoute>} />
              
              {/* Inventory Management */}
              <Route path="/inventory/*" element={<ProtectedRoute><InventoryRoutes /></ProtectedRoute>} />
              
              {/* Event Features */}
              <Route path="/events/templates" element={<ProtectedRoute><EventTemplatesPage /></ProtectedRoute>} />
              <Route path="/events/templates/new" element={<ProtectedRoute><NewEventTemplatePage /></ProtectedRoute>} />
              <Route path="/events/templates/:id/edit" element={<ProtectedRoute><EditEventTemplatePage /></ProtectedRoute>} />
              <Route path="/events/:eventId/layout" element={<ProtectedRoute><EventLayoutWrapper /></ProtectedRoute>} />
              <Route path="/events/:eventId/layout/:layoutId" element={<ProtectedRoute><EventLayoutWrapper /></ProtectedRoute>} />

              {/* Finance & Reports */}
              <Route path="/finance" element={<ProtectedRoute><FinancePage /></ProtectedRoute>} />
              <Route path="/finance/new" element={<ProtectedRoute><NewTransactionPage /></ProtectedRoute>} />
              <Route path="/reports" element={<ProtectedRoute><ReportsPage /></ProtectedRoute>} />

              {/* Warehouse Features */}
              <Route path="/warehouse/scan" element={<ProtectedRoute><ScanPage /></ProtectedRoute>} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
