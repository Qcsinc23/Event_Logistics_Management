import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../services';
export const Layout = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogout = async () => {
        try {
            await authService.logout();
            navigate('/login');
        }
        catch (error) {
            console.error('Logout failed:', error);
        }
    };
    // Don't show navigation on auth pages
    if (location.pathname === '/login' || location.pathname === '/register') {
        return _jsx(_Fragment, { children: children });
    }
    return (_jsxs("div", { className: "app-layout", children: [_jsxs("nav", { className: "sidebar", children: [_jsx("div", { className: "logo", children: _jsx(Link, { to: "/dashboard", children: "Event Logistics" }) }), _jsxs("ul", { className: "nav-links", children: [_jsx("li", { children: _jsx(Link, { to: "/dashboard", className: location.pathname === '/dashboard' ? 'active' : '', children: "Dashboard" }) }), _jsx("li", { children: _jsx(Link, { to: "/events", className: location.pathname.startsWith('/events') ? 'active' : '', children: "Events" }) }), _jsx("li", { children: _jsx(Link, { to: "/tasks", className: location.pathname.startsWith('/tasks') ? 'active' : '', children: "Tasks" }) }), _jsx("li", { children: _jsx(Link, { to: "/venues", className: location.pathname.startsWith('/venues') ? 'active' : '', children: "Venues" }) }), _jsx("li", { children: _jsx(Link, { to: "/inventory", className: location.pathname.startsWith('/inventory') ? 'active' : '', children: "Inventory" }) })] }), _jsxs("div", { className: "user-section", children: [_jsx(Link, { to: "/profile", className: "profile-link", children: "Profile" }), _jsx("button", { onClick: handleLogout, className: "logout-button", children: "Logout" })] })] }), _jsx("main", { className: "main-content", children: _jsx("div", { className: "content-wrapper", children: children }) })] }));
};
