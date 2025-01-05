import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'appwrite';
import { databaseService, COLLECTIONS } from '../../services';
export const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('all'); // all, upcoming, past
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                let query = [];
                const now = new Date().toISOString();
                switch (filter) {
                    case 'upcoming':
                        query = [Query.greaterThanEqual('startDate', now)];
                        break;
                    case 'past':
                        query = [Query.lessThan('endDate', now)];
                        break;
                }
                const response = await databaseService.list(COLLECTIONS.EVENTS, query);
                setEvents(response.documents);
            }
            catch (err) {
                setError(err.message || 'Failed to load events');
            }
            finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, [filter]);
    if (loading) {
        return _jsx("div", { children: "Loading..." });
    }
    if (error) {
        return _jsx("div", { className: "error-message", children: error });
    }
    return (_jsxs("div", { className: "events-container", children: [_jsxs("div", { className: "events-header", children: [_jsx("h1", { children: "Events" }), _jsx(Link, { to: "/events/new", className: "create-button", children: "Create Event" })] }), _jsxs("div", { className: "filters", children: [_jsx("button", { className: filter === 'all' ? 'active' : '', onClick: () => setFilter('all'), children: "All Events" }), _jsx("button", { className: filter === 'upcoming' ? 'active' : '', onClick: () => setFilter('upcoming'), children: "Upcoming" }), _jsx("button", { className: filter === 'past' ? 'active' : '', onClick: () => setFilter('past'), children: "Past" })] }), events.length === 0 ? (_jsx("p", { children: "No events found" })) : (_jsx("div", { className: "events-grid", children: events.map((event) => (_jsx("div", { className: "event-card", children: _jsxs(Link, { to: `/events/${event.$id}`, children: [_jsx("h3", { children: event.title }), _jsxs("div", { className: "event-details", children: [_jsxs("p", { children: [_jsx("strong", { children: "Start:" }), ' ', new Date(event.startDate).toLocaleDateString()] }), _jsxs("p", { children: [_jsx("strong", { children: "End:" }), ' ', new Date(event.endDate).toLocaleDateString()] }), _jsxs("p", { children: [_jsx("strong", { children: "Venue:" }), " ", event.venue] }), _jsxs("p", { children: [_jsx("strong", { children: "Capacity:" }), " ", event.capacity] })] }), _jsx("div", { className: "event-status", children: _jsx("span", { className: `status status-${event.status}`, children: event.status }) })] }) }, event.$id))) }))] }));
};
