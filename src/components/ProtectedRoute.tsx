import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authService } from '../services';
import { CircularProgress, Box, Typography, Container, Paper } from '@mui/material';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const user = await authService.getCurrentUser();
                setIsAuthenticated(!!user);
            } catch (error) {
                console.error('Auth check failed:', error);
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (isLoading) {
        return (
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #ff6f3c 0%, #ff9a7b 100%)',
                    py: 4
                }}
            >
                <Container maxWidth="sm">
                    <Paper
                        elevation={12}
                        sx={{
                            p: { xs: 3, sm: 6 },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: 3,
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(255, 255, 255, 0.95)',
                        }}
                    >
                        <CircularProgress 
                            size={48} 
                            sx={{ 
                                color: 'primary.main',
                                mb: 3
                            }} 
                        />
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                fontFamily: 'Poppins, sans-serif',
                                textAlign: 'center',
                                color: 'text.primary'
                            }}
                        >
                            Verifying your session...
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                mt: 2,
                                textAlign: 'center',
                                color: 'text.secondary'
                            }}
                        >
                            Please wait while we check your credentials
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};
