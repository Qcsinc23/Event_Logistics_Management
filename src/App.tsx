import React from 'react';
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

                {/* Redirect root to dashboard if authenticated, otherwise to login */}
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
