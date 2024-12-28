import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AddInventory from "./pages/AddInventory";
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
      <Route path="/" element={<AddInventory />} />
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
    </Routes>
  );
}
export default App;