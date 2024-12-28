import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services';

export const Register: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await authService.createAccount(
                formData.email,
                formData.password,
                formData.name
            );
            navigate('/login');
        } catch (err: any) {
            setError(err.message || 'Failed to register');
        }
    };

    return (
        <div className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#1a1a1a' }}>
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ color: '#1a1a1a', marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.75rem' }}>Register</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" style={{ color: '#1a1a1a' }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
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
                            autoComplete="new-password"
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
                        <label htmlFor="confirmPassword" style={{ color: '#1a1a1a' }}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            autoComplete="new-password"
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
                        Register
                    </button>
                </form>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>
                        Already have an account? Login here
                    </Link>
                </div>
            </div>
        </div>
    );
};
