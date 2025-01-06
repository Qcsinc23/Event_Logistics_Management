import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

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
                </div>
            </nav>

            <main className="main-content">
                <div className="content-wrapper">{children}</div>
            </main>
        </div>
    );
};
