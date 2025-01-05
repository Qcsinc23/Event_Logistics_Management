import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services';

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await authService.login(formData.email, formData.password);
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.message || 'Failed to login');
        }
    };

    return (
        <div className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#1a1a1a' }}>
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ color: '#1a1a1a', marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.75rem' }}>Login</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" style={{ color: '#1a1a1a' }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="username"
                            style={{ 
                                backgroundColor: '#f5f5f5',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                padding: '12px',
                                fontSize: '1rem',
                                width: '100%',
                                marginTop: '0.5rem'
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={{ color: '#1a1a1a' }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            autoComplete="current-password"
                            style={{ 
                                backgroundColor: '#f5f5f5',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                padding: '12px',
                                fontSize: '1rem',
                                width: '100%',
                                marginTop: '0.5rem'
                            }}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="action-button"
                        style={{ 
                            width: '100%',
                            marginTop: '1rem',
                            padding: '12px',
                            fontSize: '1rem',
                            fontWeight: '500'
                        }}
                    >
                        Login
                    </button>
                </form>
                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
                        <div style={{ flex: 1, height: '1px', background: '#ddd' }} />
                        <span style={{ padding: '0 1rem', color: '#666', fontSize: '0.9rem' }}>OR</span>
                        <div style={{ flex: 1, height: '1px', background: '#ddd' }} />
                    </div>
                    <button
                        onClick={async () => {
                            try {
                                await authService.loginWithGoogle();
                                // Navigation will happen automatically after successful OAuth
                            } catch (err: any) {
                                setError(err.message || 'Failed to login with Google');
                            }
                        }}
                        type="button"
                        style={{
                            width: '100%',
                            padding: '12px',
                            fontSize: '1rem',
                            fontWeight: '500',
                            backgroundColor: '#fff',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            marginBottom: '1rem'
                        }}
                    >
                        <img
                            src="https://www.google.com/favicon.ico"
                            alt="Google"
                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                        />
                        Continue with Google
                    </button>
                    <Link to="/register" style={{ color: '#007bff', textDecoration: 'none' }}>
                        Don't have an account? Register here
                    </Link>
                </div>
            </div>
        </div>
    );
};
