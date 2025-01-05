import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Layout } from './components/Layout';
import './styles/app.css';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Dashboard } from './pages/Dashboard';
import { Events } from './pages/events/Events';
import { EventDetails } from './pages/events/EventDetails';
import { Venues } from './pages/venues/Venues';
import { Tasks } from './pages/tasks/Tasks';
import { Inventory } from './pages/inventory/Inventory';
import { Profile } from './pages/Profile';
const App = () => {
    return (_jsx(Router, { children: _jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(ProtectedRoute, { children: _jsx(Dashboard, {}) }) }), _jsx(Route, { path: "/events", element: _jsx(ProtectedRoute, { children: _jsx(Events, {}) }) }), _jsx(Route, { path: "/events/:id", element: _jsx(ProtectedRoute, { children: _jsx(EventDetails, {}) }) }), _jsx(Route, { path: "/venues", element: _jsx(ProtectedRoute, { children: _jsx(Venues, {}) }) }), _jsx(Route, { path: "/tasks", element: _jsx(ProtectedRoute, { children: _jsx(Tasks, {}) }) }), _jsx(Route, { path: "/inventory", element: _jsx(ProtectedRoute, { children: _jsx(Inventory, {}) }) }), _jsx(Route, { path: "/profile", element: _jsx(ProtectedRoute, { children: _jsx(Profile, {}) }) }), _jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/register", replace: true }) })] }) }) }));
};
export default App;
