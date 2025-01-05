import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { databaseService, COLLECTIONS } from '../services';
export const Dashboard = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [recentTasks, setRecentTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                // Fetch upcoming events
                const eventsResponse = await databaseService.getUpcomingEvents();
                setUpcomingEvents(eventsResponse.documents);
                // Fetch recent tasks
                const tasksResponse = await databaseService.list(COLLECTIONS.TASKS, [], 5 // Limit to 5 recent tasks
                );
                setRecentTasks(tasksResponse.documents);
            }
            catch (err) {
                setError(err.message || 'Failed to load dashboard data');
            }
            finally {
                setLoading(false);
            }
        };
        fetchDashboardData();
    }, []);
    if (loading) {
        return _jsx("div", { children: "Loading..." });
    }
    if (error) {
        return _jsx("div", { className: "error-message", children: error });
    }
    return (_jsxs("div", { className: "dashboard-container", children: [_jsx("h1", { children: "Dashboard" }), _jsxs("div", { className: "quick-actions", children: [_jsx(Link, { to: "/events/new", className: "action-button", children: "Create Event" }), _jsx(Link, { to: "/tasks/new", className: "action-button", children: "Add Task" }), _jsx(Link, { to: "/inventory", className: "action-button", children: "Manage Inventory" })] }), _jsxs("div", { className: "dashboard-grid", children: [_jsxs("section", { className: "upcoming-events", children: [_jsx("h2", { children: "Upcoming Events" }), upcomingEvents.length === 0 ? (_jsx("p", { children: "No upcoming events" })) : (_jsx("ul", { className: "events-list", children: upcomingEvents.map((event) => (_jsx("li", { children: _jsxs(Link, { to: `/events/${event.$id}`, children: [_jsx("h3", { children: event.title }), _jsx("p", { children: new Date(event.startDate).toLocaleDateString() }), _jsx("span", { className: `status status-${event.status}`, children: event.status })] }) }, event.$id))) }))] }), _jsxs("section", { className: "recent-tasks", children: [_jsx("h2", { children: "Recent Tasks" }), recentTasks.length === 0 ? (_jsx("p", { children: "No recent tasks" })) : (_jsx("ul", { className: "tasks-list", children: recentTasks.map((task) => (_jsx("li", { children: _jsxs(Link, { to: `/tasks/${task.$id}`, children: [_jsx("h3", { children: task.title }), _jsxs("p", { children: ["Due: ", new Date(task.dueDate).toLocaleDateString()] }), _jsx("span", { className: `priority priority-${task.priority}`, children: task.priority }), _jsx("span", { className: `status status-${task.status}`, children: task.status })] }) }, task.$id))) }))] })] })] }));
};
