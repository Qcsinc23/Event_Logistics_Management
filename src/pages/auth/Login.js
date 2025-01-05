import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services';
export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.login(formData.email, formData.password);
            navigate('/dashboard');
        }
        catch (err) {
            setError(err.message || 'Failed to login');
        }
    };
    return (_jsx("div", { className: "main-content", style: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#1a1a1a' }, children: _jsxs("div", { style: { background: '#fff', padding: '2rem', borderRadius: '8px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }, children: [_jsx("h2", { style: { color: '#1a1a1a', marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.75rem' }, children: "Login" }), error && _jsx("div", { className: "error-message", children: error }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", style: { color: '#1a1a1a' }, children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, autoComplete: "username", style: {
                                        backgroundColor: '#f5f5f5',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        padding: '12px',
                                        fontSize: '1rem',
                                        width: '100%',
                                        marginTop: '0.5rem'
                                    } })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "password", style: { color: '#1a1a1a' }, children: "Password" }), _jsx("input", { type: "password", id: "password", name: "password", value: formData.password, onChange: handleChange, required: true, autoComplete: "current-password", style: {
                                        backgroundColor: '#f5f5f5',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        padding: '12px',
                                        fontSize: '1rem',
                                        width: '100%',
                                        marginTop: '0.5rem'
                                    } })] }), _jsx("button", { type: "submit", className: "action-button", style: {
                                width: '100%',
                                marginTop: '1rem',
                                padding: '12px',
                                fontSize: '1rem',
                                fontWeight: '500'
                            }, children: "Login" })] }), _jsxs("div", { style: { marginTop: '1.5rem', textAlign: 'center' }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', margin: '1rem 0' }, children: [_jsx("div", { style: { flex: 1, height: '1px', background: '#ddd' } }), _jsx("span", { style: { padding: '0 1rem', color: '#666', fontSize: '0.9rem' }, children: "OR" }), _jsx("div", { style: { flex: 1, height: '1px', background: '#ddd' } })] }), _jsxs("button", { onClick: async () => {
                                try {
                                    await authService.loginWithGoogle();
                                    // Navigation will happen automatically after successful OAuth
                                }
                                catch (err) {
                                    setError(err.message || 'Failed to login with Google');
                                }
                            }, type: "button", style: {
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
                            }, children: [_jsx("img", { src: "https://www.google.com/favicon.ico", alt: "Google", style: { width: '20px', height: '20px', marginRight: '10px' } }), "Continue with Google"] }), _jsx(Link, { to: "/register", style: { color: '#007bff', textDecoration: 'none' }, children: "Don't have an account? Register here" })] })] }) }));
};
