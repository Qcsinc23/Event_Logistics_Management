import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services';

export const OAuthCallback: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const user = await authService.getCurrentUser();
                if (user) {
                    navigate('/dashboard');
                } else {
                    navigate('/login');
                }
            } catch (error) {
                console.error('OAuth callback error:', error);
                navigate('/login');
            }
        };

        checkAuthStatus();
    }, [navigate]);

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '100vh',
            background: '#1a1a1a',
            color: '#fff'
        }}>
            <div>Processing authentication...</div>
        </div>
    );
};