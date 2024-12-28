import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import EventsDetails from "./pages/EventsDetails";
import CreateNewEvent from "./pages/CreateNewEvent";
import EventsList from "./pages/EventsList";

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
      <Route path="/" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/events-details" element={<EventsDetails />} />
      <Route path="/create-new-event" element={<CreateNewEvent />} />
      <Route path="/events-list" element={<EventsList />} />
    </Routes>
  );
}
export default App;
