import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'appwrite';
import { databaseService, COLLECTIONS } from '../../services';
import type { Event } from '../../types/models';

export const Events: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('all'); // all, upcoming, past

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                let query: string[] = [];
                const now = new Date().toISOString();

                switch (filter) {
                    case 'upcoming':
                        query = [Query.greaterThanEqual('startDate', now)];
                        break;
                    case 'past':
                        query = [Query.lessThan('endDate', now)];
                        break;
                }

                const response = await databaseService.list(
                    COLLECTIONS.EVENTS,
                    query
                );
                setEvents(response.documents as Event[]);
            } catch (err: any) {
                setError(err.message || 'Failed to load events');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [filter]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="events-container">
            <div className="events-header">
                <h1>Events</h1>
                <Link to="/events/new" className="create-button">
                    Create Event
                </Link>
            </div>

            <div className="filters">
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                >
                    All Events
                </button>
                <button
                    className={filter === 'upcoming' ? 'active' : ''}
                    onClick={() => setFilter('upcoming')}
                >
                    Upcoming
                </button>
                <button
                    className={filter === 'past' ? 'active' : ''}
                    onClick={() => setFilter('past')}
                >
                    Past
                </button>
            </div>

            {events.length === 0 ? (
                <p>No events found</p>
            ) : (
                <div className="events-grid">
                    {events.map((event) => (
                        <div key={event.$id} className="event-card">
                            <Link to={`/events/${event.$id}`}>
                                <h3>{event.title}</h3>
                                <div className="event-details">
                                    <p>
                                        <strong>Start:</strong>{' '}
                                        {new Date(event.startDate).toLocaleDateString()}
                                    </p>
                                    <p>
                                        <strong>End:</strong>{' '}
                                        {new Date(event.endDate).toLocaleDateString()}
                                    </p>
                                    <p>
                                        <strong>Venue:</strong> {event.venue}
                                    </p>
                                    <p>
                                        <strong>Capacity:</strong> {event.capacity}
                                    </p>
                                </div>
                                <div className="event-status">
                                    <span className={`status status-${event.status}`}>
                                        {event.status}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
