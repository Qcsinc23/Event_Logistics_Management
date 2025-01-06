import React from 'react';
import { authService } from './services/auth.service';
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

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/auth/callback" element={
                    <React.Fragment>
                        {(() => {
                            // Log the URL for debugging
                            console.log('OAuth callback URL:', window.location.href);
                            console.log('OAuth callback hash:', window.location.hash);
                            
                            // Handle the callback
                            authService.handleOAuthCallback().catch(error => {
                                console.error('OAuth callback handling failed:', error);
                                window.location.href = '/login';
                            });
                            
                            // Show loading state
                            return <div>Processing login...</div>;
                        })()}
                    </React.Fragment>
                } />
                <Route path="/auth/failure" element={<Navigate to="/login" replace />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                
                <Route path="/events" element={
                    <ProtectedRoute>
                        <Events />
                    </ProtectedRoute>
                } />
                
                <Route path="/events/:id" element={
                    <ProtectedRoute>
                        <EventDetails />
                    </ProtectedRoute>
                } />
                
                <Route path="/venues" element={
                    <ProtectedRoute>
                        <Venues />
                    </ProtectedRoute>
                } />
                
                <Route path="/tasks" element={
                    <ProtectedRoute>
                        <Tasks />
                    </ProtectedRoute>
                } />
                
                <Route path="/inventory" element={
                    <ProtectedRoute>
                        <Inventory />
                    </ProtectedRoute>
                } />
                
                <Route path="/profile" element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                } />

                {/* Redirect root to register page */}
                <Route path="/" element={<Navigate to="/register" replace />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
