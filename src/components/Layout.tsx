import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../services';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = async () => {
        try {
            await authService.logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    // Don't show navigation on auth pages
    if (location.pathname === '/login' || location.pathname === '/register') {
        return <>{children}</>;
    }

    return (
        <div className="app-layout">
            <nav className="sidebar">
                <div className="logo">
                    <Link to="/dashboard">Event Logistics</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link
                            to="/dashboard"
                            className={location.pathname === '/dashboard' ? 'active' : ''}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/events"
                            className={location.pathname.startsWith('/events') ? 'active' : ''}
                        >
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tasks"
                            className={location.pathname.startsWith('/tasks') ? 'active' : ''}
                        >
                            Tasks
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/venues"
                            className={location.pathname.startsWith('/venues') ? 'active' : ''}
                        >
                            Venues
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/inventory"
                            className={location.pathname.startsWith('/inventory') ? 'active' : ''}
                        >
                            Inventory
                        </Link>
                    </li>
                </ul>
                <div className="user-section">
                    <Link to="/profile" className="profile-link">
                        Profile
                    </Link>
                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                </div>
            </nav>

            <main className="main-content">
                <div className="content-wrapper">{children}</div>
            </main>
        </div>
    );
};
