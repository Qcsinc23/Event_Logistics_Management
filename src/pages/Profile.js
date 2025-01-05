import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { authService, databaseService, storageService } from '../services';
export const Profile = () => {
    const [user, setUser] = useState(null);
    const [assignedTasks, setAssignedTasks] = useState([]);
    const [userEvents, setUserEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Fetch user profile
                const userData = await authService.getCurrentUser();
                if (!userData) {
                    throw new Error('User not found');
                }
                setUser(userData);
                setFormData(prev => ({ ...prev, name: userData.name }));
                // Fetch assigned tasks
                const tasksResponse = await databaseService.getAssignedTasks(userData.$id);
                setAssignedTasks(tasksResponse.documents);
                // Fetch user's events
                const eventsResponse = await databaseService.getEventsByOrganizer(userData.$id);
                setUserEvents(eventsResponse.documents);
            }
            catch (err) {
                setError(err.message || 'Failed to load profile data');
            }
            finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        if (!user)
            return;
        try {
            // Update name if changed
            if (formData.name !== user.name) {
                await authService.updateName(formData.name);
            }
            // Update password if provided
            if (formData.newPassword) {
                if (formData.newPassword !== formData.confirmPassword) {
                    throw new Error('New passwords do not match');
                }
                await authService.updatePassword(formData.newPassword, formData.currentPassword);
            }
            setIsEditing(false);
            // Refresh user data
            const updatedUser = await authService.getCurrentUser();
            setUser(updatedUser);
        }
        catch (err) {
            setError(err.message || 'Failed to update profile');
        }
    };
    const handleAvatarUpload = async (file) => {
        if (!user)
            return;
        try {
            const result = await storageService.uploadUserAvatar(file, user.$id);
            // Update avatar through preferences
            await authService.updatePreferences({ avatarUrl: result.$id });
            // Refresh user data
            const updatedUser = await authService.getCurrentUser();
            setUser(updatedUser);
        }
        catch (err) {
            setError(err.message || 'Failed to upload avatar');
        }
    };
    if (loading) {
        return _jsx("div", { children: "Loading..." });
    }
    if (error) {
        return _jsx("div", { className: "error-message", children: error });
    }
    if (!user) {
        return _jsx("div", { children: "User not found" });
    }
    return (_jsxs("div", { className: "profile-container", children: [_jsxs("div", { className: "profile-header", children: [_jsxs("div", { className: "avatar-section", children: [user.avatarUrl ? (_jsx("img", { src: storageService.getFilePreview('user_avatars', user.avatarUrl).toString(), alt: "Profile", className: "avatar" })) : (_jsx("div", { className: "avatar-placeholder", children: user.name.charAt(0).toUpperCase() })), _jsx("input", { type: "file", accept: "image/*", onChange: (e) => {
                                    const file = e.target.files?.[0];
                                    if (file)
                                        handleAvatarUpload(file);
                                } })] }), _jsx("h1", { children: user.name }), _jsx("p", { children: user.email }), _jsx("span", { className: "role-badge", children: user.role })] }), _jsxs("div", { className: "profile-content", children: [_jsxs("section", { className: "profile-section", children: [_jsx("h2", { children: "Profile Information" }), isEditing ? (_jsxs("form", { onSubmit: handleProfileUpdate, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "name", children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleInputChange, required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "currentPassword", children: "Current Password" }), _jsx("input", { type: "password", id: "currentPassword", name: "currentPassword", value: formData.currentPassword, onChange: handleInputChange })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "newPassword", children: "New Password" }), _jsx("input", { type: "password", id: "newPassword", name: "newPassword", value: formData.newPassword, onChange: handleInputChange })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "confirmPassword", children: "Confirm New Password" }), _jsx("input", { type: "password", id: "confirmPassword", name: "confirmPassword", value: formData.confirmPassword, onChange: handleInputChange })] }), _jsxs("div", { className: "form-actions", children: [_jsx("button", { type: "submit", children: "Save Changes" }), _jsx("button", { type: "button", onClick: () => setIsEditing(false), children: "Cancel" })] })] })) : (_jsx("button", { onClick: () => setIsEditing(true), children: "Edit Profile" }))] }), _jsxs("section", { className: "profile-section", children: [_jsx("h2", { children: "Assigned Tasks" }), assignedTasks.length === 0 ? (_jsx("p", { children: "No tasks assigned" })) : (_jsx("ul", { className: "tasks-list", children: assignedTasks.map((task) => (_jsxs("li", { children: [_jsx("h3", { children: task.title }), _jsx("p", { children: task.description }), _jsxs("div", { className: "task-meta", children: [_jsx("span", { className: `priority priority-${task.priority}`, children: task.priority }), _jsx("span", { className: `status status-${task.status}`, children: task.status })] })] }, task.$id))) }))] }), _jsxs("section", { className: "profile-section", children: [_jsx("h2", { children: "Your Events" }), userEvents.length === 0 ? (_jsx("p", { children: "No events created" })) : (_jsx("ul", { className: "events-list", children: userEvents.map((event) => (_jsxs("li", { children: [_jsx("h3", { children: event.title }), _jsxs("p", { children: [new Date(event.startDate).toLocaleDateString(), " -", ' ', new Date(event.endDate).toLocaleDateString()] }), _jsx("span", { className: `status status-${event.status}`, children: event.status })] }, event.$id))) }))] })] })] }));
};
