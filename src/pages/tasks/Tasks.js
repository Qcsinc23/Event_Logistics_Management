import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'appwrite';
import { databaseService, COLLECTIONS } from '../../services';
export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [events, setEvents] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('pending');
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                // Fetch tasks with filter
                const response = await databaseService.list(COLLECTIONS.TASKS, filter ? [Query.equal('status', filter)] : []);
                setTasks(response.documents);
                // Fetch associated events
                const eventIds = [...new Set(response.documents.map(task => task.eventId))];
                const eventData = {};
                await Promise.all(eventIds.map(async (eventId) => {
                    const event = await databaseService.get(COLLECTIONS.EVENTS, eventId);
                    eventData[eventId] = event;
                }));
                setEvents(eventData);
            }
            catch (err) {
                setError(err.message || 'Failed to load tasks');
            }
            finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, [filter]);
    const handleStatusUpdate = async (taskId, newStatus) => {
        try {
            await databaseService.update(COLLECTIONS.TASKS, taskId, { status: newStatus });
            // Update local state
            setTasks(prev => prev.map(task => task.$id === taskId
                ? { ...task, status: newStatus }
                : task));
        }
        catch (err) {
            setError(err.message || 'Failed to update task status');
        }
    };
    if (loading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsx("div", { className: "error-message", children: error });
    return (_jsxs("div", { className: "tasks-container", children: [_jsxs("div", { className: "tasks-header", children: [_jsx("h1", { children: "Tasks" }), _jsx(Link, { to: "/tasks/new", className: "create-button", children: "Create Task" })] }), _jsxs("div", { className: "tasks-filters", children: [_jsx("button", { className: filter === 'pending' ? 'active' : '', onClick: () => setFilter('pending'), children: "Pending" }), _jsx("button", { className: filter === 'in-progress' ? 'active' : '', onClick: () => setFilter('in-progress'), children: "In Progress" }), _jsx("button", { className: filter === 'completed' ? 'active' : '', onClick: () => setFilter('completed'), children: "Completed" }), _jsx("button", { className: !filter ? 'active' : '', onClick: () => setFilter(''), children: "All" })] }), tasks.length === 0 ? (_jsx("p", { children: "No tasks found" })) : (_jsx("div", { className: "tasks-list", children: tasks.map((task) => (_jsxs("div", { className: "task-card", children: [_jsxs("div", { className: "task-header", children: [_jsx("h3", { children: task.title }), _jsx("span", { className: `priority priority-${task.priority}`, children: task.priority })] }), _jsx("p", { children: task.description }), _jsxs("div", { className: "task-meta", children: [_jsxs("div", { className: "event-info", children: [_jsx("strong", { children: "Event:" }), ' ', events[task.eventId]?.title || 'Loading...'] }), _jsxs("div", { className: "due-date", children: [_jsx("strong", { children: "Due:" }), ' ', new Date(task.dueDate).toLocaleDateString()] })] }), _jsxs("div", { className: "task-actions", children: [_jsxs("select", { value: task.status, onChange: (e) => handleStatusUpdate(task.$id, e.target.value), className: `status-select status-${task.status}`, children: [_jsx("option", { value: "pending", children: "Pending" }), _jsx("option", { value: "in-progress", children: "In Progress" }), _jsx("option", { value: "completed", children: "Completed" }), _jsx("option", { value: "cancelled", children: "Cancelled" })] }), _jsx(Link, { to: `/tasks/${task.$id}`, className: "view-details", children: "View Details" })] })] }, task.$id))) }))] }));
};
