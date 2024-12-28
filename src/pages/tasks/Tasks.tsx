import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'appwrite';
import { databaseService, COLLECTIONS } from '../../services';
import type { Task, Event } from '../../types/models';

export const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [events, setEvents] = useState<{ [key: string]: Event }>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState<Task['status']>('pending');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                // Fetch tasks with filter
                const response = await databaseService.list<Task>(
                    COLLECTIONS.TASKS,
                    filter ? [Query.equal('status', filter)] : []
                );
                setTasks(response.documents);

                // Fetch associated events
                const eventIds = [...new Set(response.documents.map(task => task.eventId))];
                const eventData: { [key: string]: Event } = {};

                await Promise.all(
                    eventIds.map(async (eventId) => {
                        const event = await databaseService.get<Event>(
                            COLLECTIONS.EVENTS,
                            eventId
                        );
                        eventData[eventId] = event;
                    })
                );

                setEvents(eventData);
            } catch (err: any) {
                setError(err.message || 'Failed to load tasks');
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, [filter]);

    const handleStatusUpdate = async (taskId: string, newStatus: Task['status']) => {
        try {
            await databaseService.update<Task>(
                COLLECTIONS.TASKS,
                taskId,
                { status: newStatus }
            );
            
            // Update local state
            setTasks(prev => 
                prev.map(task => 
                    task.$id === taskId 
                        ? { ...task, status: newStatus }
                        : task
                )
            );
        } catch (err: any) {
            setError(err.message || 'Failed to update task status');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="tasks-container">
            <div className="tasks-header">
                <h1>Tasks</h1>
                <Link to="/tasks/new" className="create-button">
                    Create Task
                </Link>
            </div>

            <div className="tasks-filters">
                <button
                    className={filter === 'pending' ? 'active' : ''}
                    onClick={() => setFilter('pending')}
                >
                    Pending
                </button>
                <button
                    className={filter === 'in-progress' ? 'active' : ''}
                    onClick={() => setFilter('in-progress')}
                >
                    In Progress
                </button>
                <button
                    className={filter === 'completed' ? 'active' : ''}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
                <button
                    className={!filter ? 'active' : ''}
                    onClick={() => setFilter('' as Task['status'])}
                >
                    All
                </button>
            </div>

            {tasks.length === 0 ? (
                <p>No tasks found</p>
            ) : (
                <div className="tasks-list">
                    {tasks.map((task) => (
                        <div key={task.$id} className="task-card">
                            <div className="task-header">
                                <h3>{task.title}</h3>
                                <span className={`priority priority-${task.priority}`}>
                                    {task.priority}
                                </span>
                            </div>

                            <p>{task.description}</p>

                            <div className="task-meta">
                                <div className="event-info">
                                    <strong>Event:</strong>{' '}
                                    {events[task.eventId]?.title || 'Loading...'}
                                </div>
                                <div className="due-date">
                                    <strong>Due:</strong>{' '}
                                    {new Date(task.dueDate).toLocaleDateString()}
                                </div>
                            </div>

                            <div className="task-actions">
                                <select
                                    value={task.status}
                                    onChange={(e) => 
                                        handleStatusUpdate(
                                            task.$id,
                                            e.target.value as Task['status']
                                        )
                                    }
                                    className={`status-select status-${task.status}`}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>

                                <Link
                                    to={`/tasks/${task.$id}`}
                                    className="view-details"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
