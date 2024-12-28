import React, { useEffect, useState } from 'react';
import { authService, databaseService, storageService, COLLECTIONS } from '../services';
import type { User, Task, Event } from '../types/models';

export const Profile: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [assignedTasks, setAssignedTasks] = useState<Task[]>([]);
    const [userEvents, setUserEvents] = useState<Event[]>([]);
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
                setUser(userData as User);
                setFormData(prev => ({ ...prev, name: userData.name }));

                // Fetch assigned tasks
                const tasksResponse = await databaseService.getAssignedTasks(userData.$id);
                setAssignedTasks(tasksResponse.documents as Task[]);

                // Fetch user's events
                const eventsResponse = await databaseService.getEventsByOrganizer(userData.$id);
                setUserEvents(eventsResponse.documents as Event[]);
            } catch (err: any) {
                setError(err.message || 'Failed to load profile data');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleProfileUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

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
                await authService.updatePassword(
                    formData.newPassword,
                    formData.currentPassword
                );
            }

            setIsEditing(false);
            // Refresh user data
            const updatedUser = await authService.getCurrentUser();
            setUser(updatedUser as User);
        } catch (err: any) {
            setError(err.message || 'Failed to update profile');
        }
    };

    const handleAvatarUpload = async (file: File) => {
        if (!user) return;

        try {
            const result = await storageService.uploadUserAvatar(file, user.$id);
            // Update avatar through preferences
            await authService.updatePreferences({ avatarUrl: result.$id });
            // Refresh user data
            const updatedUser = await authService.getCurrentUser();
            setUser(updatedUser as User);
        } catch (err: any) {
            setError(err.message || 'Failed to upload avatar');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="avatar-section">
                    {user.avatarUrl ? (
                        <img
                            src={storageService.getFilePreview(
                                'user_avatars',
                                user.avatarUrl
                            ).toString()}
                            alt="Profile"
                            className="avatar"
                        />
                    ) : (
                        <div className="avatar-placeholder">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleAvatarUpload(file);
                        }}
                    />
                </div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <span className="role-badge">{user.role}</span>
            </div>

            <div className="profile-content">
                <section className="profile-section">
                    <h2>Profile Information</h2>
                    {isEditing ? (
                        <form onSubmit={handleProfileUpdate}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="currentPassword">Current Password</label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newPassword">New Password</label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm New Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-actions">
                                <button type="submit">Save Changes</button>
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <button onClick={() => setIsEditing(true)}>
                            Edit Profile
                        </button>
                    )}
                </section>

                <section className="profile-section">
                    <h2>Assigned Tasks</h2>
                    {assignedTasks.length === 0 ? (
                        <p>No tasks assigned</p>
                    ) : (
                        <ul className="tasks-list">
                            {assignedTasks.map((task) => (
                                <li key={task.$id}>
                                    <h3>{task.title}</h3>
                                    <p>{task.description}</p>
                                    <div className="task-meta">
                                        <span className={`priority priority-${task.priority}`}>
                                            {task.priority}
                                        </span>
                                        <span className={`status status-${task.status}`}>
                                            {task.status}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>

                <section className="profile-section">
                    <h2>Your Events</h2>
                    {userEvents.length === 0 ? (
                        <p>No events created</p>
                    ) : (
                        <ul className="events-list">
                            {userEvents.map((event) => (
                                <li key={event.$id}>
                                    <h3>{event.title}</h3>
                                    <p>
                                        {new Date(event.startDate).toLocaleDateString()} -{' '}
                                        {new Date(event.endDate).toLocaleDateString()}
                                    </p>
                                    <span className={`status status-${event.status}`}>
                                        {event.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </div>
    );
};
