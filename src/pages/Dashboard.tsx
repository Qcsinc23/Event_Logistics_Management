import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { databaseService, COLLECTIONS } from '../services';
import type { Event, Task } from '../types/models';

export const Dashboard: React.FC = () => {
    const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
    const [recentTasks, setRecentTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                // Fetch upcoming events
                const eventsResponse = await databaseService.getUpcomingEvents();
                setUpcomingEvents(eventsResponse.documents as Event[]);

                // Fetch recent tasks
                const tasksResponse = await databaseService.list(
                    COLLECTIONS.TASKS,
                    [],
                    5 // Limit to 5 recent tasks
                );
                setRecentTasks(tasksResponse.documents as Task[]);
            } catch (err: any) {
                setError(err.message || 'Failed to load dashboard data');
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            
            <div className="quick-actions">
                <Link to="/events/new" className="action-button">
                    Create Event
                </Link>
                <Link to="/tasks/new" className="action-button">
                    Add Task
                </Link>
                <Link to="/inventory" className="action-button">
                    Manage Inventory
                </Link>
            </div>

            <div className="dashboard-grid">
                <section className="upcoming-events">
                    <h2>Upcoming Events</h2>
                    {upcomingEvents.length === 0 ? (
                        <p>No upcoming events</p>
                    ) : (
                        <ul className="events-list">
                            {upcomingEvents.map((event) => (
                                <li key={event.$id}>
                                    <Link to={`/events/${event.$id}`}>
                                        <h3>{event.title}</h3>
                                        <p>{new Date(event.startDate).toLocaleDateString()}</p>
                                        <span className={`status status-${event.status}`}>
                                            {event.status}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>

                <section className="recent-tasks">
                    <h2>Recent Tasks</h2>
                    {recentTasks.length === 0 ? (
                        <p>No recent tasks</p>
                    ) : (
                        <ul className="tasks-list">
                            {recentTasks.map((task) => (
                                <li key={task.$id}>
                                    <Link to={`/tasks/${task.$id}`}>
                                        <h3>{task.title}</h3>
                                        <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                                        <span className={`priority priority-${task.priority}`}>
                                            {task.priority}
                                        </span>
                                        <span className={`status status-${task.status}`}>
                                            {task.status}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </div>
    );
};
