import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ProofDetailsModal from "./pages/ProofDetailsModal";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import EventsDetails from "./pages/EventsDetails";
import CreateNewEvent from "./pages/CreateNewEvent";
import EventsList from "./pages/EventsList";
import RoutePlanning from "./pages/RoutePlanning";
import VehicleManagement from "./pages/VehicleManagement";
import EventCalendar from "./pages/EventCalendar";
import TaskAssignment from "./pages/TaskAssignment";
import LogisticsOverview from "./pages/LogisticsOverview";
import AddAlertModal from "./pages/AddAlertModal";
import InventoryDetails from "./pages/InventoryDetails";
import InventoryAlertsNotificatio from "./pages/InventoryAlertsNotificatio";
import AddInventory from "./pages/AddInventory";
import LiveTrackingMap from "./pages/LiveTrackingMap";
import VehicleDetailsModal from "./pages/VehicleDetailsModal";
import DeliveryDetailsModal from "./pages/DeliveryDetailsModal";
import ProofOfDelivery from "./pages/ProofOfDelivery";
import StatusUpdates from "./pages/StatusUpdates";
import AddProofOfDelivery from "./pages/AddProofOfDelivery";
import Reports from "./pages/Reports";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/events-details":
        title = "";
        metaDescription = "";
        break;
      case "/create-new-event":
        title = "";
        metaDescription = "";
        break;
      case "/events-list":
        title = "";
        metaDescription = "";
        break;
      case "/route-planning":
        title = "";
        metaDescription = "";
        break;
      case "/vehicle-management":
        title = "";
        metaDescription = "";
        break;
      case "/event-calendar":
        title = "";
        metaDescription = "";
        break;
      case "/task-assignment":
        title = "";
        metaDescription = "";
        break;
      case "/logistics-overview":
        title = "";
        metaDescription = "";
        break;
      case "/add-alert-modal":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-details":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-alerts-notifications":
        title = "";
        metaDescription = "";
        break;
      case "/add-inventory":
        title = "";
        metaDescription = "";
        break;
      case "/live-tracking-map":
        title = "";
        metaDescription = "";
        break;
      case "/vehicle-details-modal":
        title = "";
        metaDescription = "";
        break;
      case "/delivery-details-modal":
        title = "";
        metaDescription = "";
        break;
      case "/proof-of-delivery":
        title = "";
        metaDescription = "";
        break;
      case "/status-updates":
        title = "";
        metaDescription = "";
        break;
      case "/add-proof-of-delivery":
        title = "";
        metaDescription = "";
        break;
      case "/reports":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-up" replace />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/events-details" element={<EventsDetails />} />
      <Route path="/create-new-event" element={<CreateNewEvent />} />
      <Route path="/events-list" element={<EventsList />} />
      <Route path="/route-planning" element={<RoutePlanning />} />
      <Route path="/vehicle-management" element={<VehicleManagement />} />
      <Route path="/event-calendar" element={<EventCalendar />} />
      <Route path="/task-assignment" element={<TaskAssignment />} />
      <Route path="/logistics-overview" element={<LogisticsOverview />} />
      <Route path="/add-alert-modal" element={<AddAlertModal />} />
      <Route path="/inventory-details" element={<InventoryDetails />} />
      <Route
        path="/inventory-alerts-notifications"
        element={<InventoryAlertsNotificatio />}
      />
      <Route path="/add-inventory" element={<AddInventory />} />
      <Route path="/live-tracking-map" element={<LiveTrackingMap />} />
      <Route path="/vehicle-details-modal" element={<VehicleDetailsModal />} />
      <Route
        path="/delivery-details-modal"
        element={<DeliveryDetailsModal />}
      />
      <Route path="/proof-of-delivery" element={<ProofOfDelivery />} />
      <Route path="/status-updates" element={<StatusUpdates />} />
      <Route path="/add-proof-of-delivery" element={<AddProofOfDelivery />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}
export default App;
