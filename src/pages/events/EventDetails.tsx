import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { databaseService, storageService, teamsService, COLLECTIONS } from '../../services';
import type { Event, Task } from '../../types/models';

export const EventDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [event, setEvent] = useState<Event | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [documents, setDocuments] = useState<any[]>([]);

    useEffect(() => {
        const fetchEventDetails = async () => {
            if (!id) return;

            try {
                // Fetch event details
                const eventData = await databaseService.get<Event>(
                    COLLECTIONS.EVENTS,
                    id
                );
                setEvent(eventData);

                // Fetch associated tasks
                const tasksResponse = await databaseService.getTasksByEvent(id);
                setTasks(tasksResponse.documents as Task[]);

                // Subscribe to real-time updates
                const unsubscribe = databaseService.subscribeToDocument(
                    COLLECTIONS.EVENTS,
                    id,
                    (response) => {
                        if (response.events.includes('databases.*.collections.*.documents.*.update')) {
                            setEvent(response.payload as Event);
                        }
                    }
                );

                return () => {
                    unsubscribe();
                };
            } catch (err: any) {
                setError(err.message || 'Failed to load event details');
            } finally {
                setLoading(false);
            }
        };

        fetchEventDetails();
    }, [id]);

    const handleStatusUpdate = async (newStatus: Event['status']) => {
        if (!event || !id) return;

        try {
            await databaseService.update<Event>(
                COLLECTIONS.EVENTS,
                id,
                { status: newStatus }
            );
        } catch (err: any) {
            setError(err.message || 'Failed to update event status');
        }
    };

    const handleDocumentUpload = async (file: File) => {
        if (!id) return;

        try {
            await storageService.uploadEventDocument(file, id);
        } catch (err: any) {
            setError(err.message || 'Failed to upload document');
        }
    };

    const handleAddTeamMember = async (email: string, role: 'admin' | 'member' = 'member') => {
        if (!event || !id) return;

        try {
            const team = await teamsService.createEventTeam(id, `Event ${event.title} Team`);
            await teamsService.addEventTeamMember(team.$id, email, role);
        } catch (err: any) {
            setError(err.message || 'Failed to add team member');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className="event-details-container">
            <div className="event-header">
                <h1>{event.title}</h1>
                <div className="event-actions">
                    <select
                        value={event.status}
                        onChange={(e) => handleStatusUpdate(e.target.value as Event['status'])}
                    >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button onClick={() => navigate(`/events/${id}/edit`)}>
                        Edit Event
                    </button>
                </div>
            </div>

            <div className="event-info">
                <div className="info-section">
                    <h2>Event Details</h2>
                    <p><strong>Description:</strong> {event.description}</p>
                    <p><strong>Start Date:</strong> {new Date(event.startDate).toLocaleString()}</p>
                    <p><strong>End Date:</strong> {new Date(event.endDate).toLocaleString()}</p>
                    <p><strong>Venue:</strong> {event.venue}</p>
                    <p><strong>Capacity:</strong> {event.capacity}</p>
                    <p><strong>Budget:</strong> ${event.budget}</p>
                </div>

                <div className="tasks-section">
                    <h2>Tasks</h2>
                    {tasks.length === 0 ? (
                        <p>No tasks assigned</p>
                    ) : (
                        <ul className="tasks-list">
                            {tasks.map((task) => (
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
                    <button onClick={() => navigate(`/tasks/new?eventId=${id}`)}>
                        Add Task
                    </button>
                </div>

                <div className="documents-section">
                    <h2>Documents</h2>
                    <input
                        type="file"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleDocumentUpload(file);
                        }}
                    />
                    {documents.length === 0 ? (
                        <p>No documents uploaded</p>
                    ) : (
                        <ul className="documents-list">
                            {documents.map((doc) => (
                                <li key={doc.$id}>
                                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                        {doc.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="team-section">
                    <h2>Team Management</h2>
                    <div className="add-member">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    const input = e.target as HTMLInputElement;
                                    handleAddTeamMember(input.value);
                                    input.value = '';
                                }
                            }}
                        />
                        <select onChange={(e) => e.target.value}>
                            <option value="member">Member</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};
