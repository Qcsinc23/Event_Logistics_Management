import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authService } from '../services';
export const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const user = await authService.getCurrentUser();
                setIsAuthenticated(!!user);
            }
            catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);
    if (isAuthenticated === null) {
        // Show loading state while checking authentication
        return _jsx("div", { children: "Loading..." });
    }
    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
    }
    return _jsx(_Fragment, { children: children });
};
