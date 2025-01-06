import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import './styles/app.css';
import { Dashboard } from './pages/Dashboard';
import { Events } from './pages/events/Events';
import { EventDetails } from './pages/events/EventDetails';
import { Venues } from './pages/venues/Venues';
import { Tasks } from './pages/tasks/Tasks';
import { Inventory } from './pages/inventory/Inventory';
import { Profile } from './pages/Profile';
import { LoginPage } from './features/auth/LoginPage';
import { SignupPage } from './features/auth/SignupPage';
import { AuthCallback } from './features/auth/AuthCallback';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/auth/callback" element={<AuthCallback />} />

                {/* Protected Routes */}
                <Route path="/" element={
                    <ProtectedRoute>
                        <Layout>
                            <Navigate to="/dashboard" replace />
                        </Layout>
                    </ProtectedRoute>
                } />
                
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Layout>
                            <Dashboard />
                        </Layout>
                    </ProtectedRoute>
                } />
                
                <Route path="/events" element={
                    <ProtectedRoute>
                        <Layout>
                            <Events />
                        </Layout>
                    </ProtectedRoute>
                } />
                
                <Route path="/events/:id" element={
                    <ProtectedRoute>
                        <Layout>
                            <EventDetails />
                        </Layout>
                    </ProtectedRoute>
                } />
                
                <Route path="/venues" element={
                    <ProtectedRoute>
                        <Layout>
                            <Venues />
                        </Layout>
                    </ProtectedRoute>
                } />
                
                <Route path="/tasks" element={
                    <ProtectedRoute>
                        <Layout>
                            <Tasks />
                        </Layout>
                    </ProtectedRoute>
                } />
                
                <Route path="/inventory" element={
                    <ProtectedRoute>
                        <Layout>
                            <Inventory />
                        </Layout>
                    </ProtectedRoute>
                } />
                
                <Route path="/profile" element={
                    <ProtectedRoute>
                        <Layout>
                            <Profile />
                        </Layout>
                    </ProtectedRoute>
                } />

                {/* Catch all route */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
