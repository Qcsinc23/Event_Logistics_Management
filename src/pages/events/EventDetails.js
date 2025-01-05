import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { databaseService, storageService, teamsService, COLLECTIONS } from '../../services';
export const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        const fetchEventDetails = async () => {
            if (!id)
                return;
            try {
                // Fetch event details
                const eventData = await databaseService.get(COLLECTIONS.EVENTS, id);
                setEvent(eventData);
                // Fetch associated tasks
                const tasksResponse = await databaseService.getTasksByEvent(id);
                setTasks(tasksResponse.documents);
                // Subscribe to real-time updates
                const unsubscribe = databaseService.subscribeToDocument(COLLECTIONS.EVENTS, id, (response) => {
                    if (response.events.includes('databases.*.collections.*.documents.*.update')) {
                        setEvent(response.payload);
                    }
                });
                return () => {
                    unsubscribe();
                };
            }
            catch (err) {
                setError(err.message || 'Failed to load event details');
            }
            finally {
                setLoading(false);
            }
        };
        fetchEventDetails();
    }, [id]);
    const handleStatusUpdate = async (newStatus) => {
        if (!event || !id)
            return;
        try {
            await databaseService.update(COLLECTIONS.EVENTS, id, { status: newStatus });
        }
        catch (err) {
            setError(err.message || 'Failed to update event status');
        }
    };
    const handleDocumentUpload = async (file) => {
        if (!id)
            return;
        try {
            await storageService.uploadEventDocument(file, id);
        }
        catch (err) {
            setError(err.message || 'Failed to upload document');
        }
    };
    const handleAddTeamMember = async (email, role = 'member') => {
        if (!event || !id)
            return;
        try {
            const team = await teamsService.createEventTeam(id, `Event ${event.title} Team`);
            await teamsService.addEventTeamMember(team.$id, email, role);
        }
        catch (err) {
            setError(err.message || 'Failed to add team member');
        }
    };
    if (loading) {
        return _jsx("div", { children: "Loading..." });
    }
    if (error) {
        return _jsx("div", { className: "error-message", children: error });
    }
    if (!event) {
        return _jsx("div", { children: "Event not found" });
    }
    return (_jsxs("div", { className: "event-details-container", children: [_jsxs("div", { className: "event-header", children: [_jsx("h1", { children: event.title }), _jsxs("div", { className: "event-actions", children: [_jsxs("select", { value: event.status, onChange: (e) => handleStatusUpdate(e.target.value), children: [_jsx("option", { value: "draft", children: "Draft" }), _jsx("option", { value: "published", children: "Published" }), _jsx("option", { value: "cancelled", children: "Cancelled" }), _jsx("option", { value: "completed", children: "Completed" })] }), _jsx("button", { onClick: () => navigate(`/events/${id}/edit`), children: "Edit Event" })] })] }), _jsxs("div", { className: "event-info", children: [_jsxs("div", { className: "info-section", children: [_jsx("h2", { children: "Event Details" }), _jsxs("p", { children: [_jsx("strong", { children: "Description:" }), " ", event.description] }), _jsxs("p", { children: [_jsx("strong", { children: "Start Date:" }), " ", new Date(event.startDate).toLocaleString()] }), _jsxs("p", { children: [_jsx("strong", { children: "End Date:" }), " ", new Date(event.endDate).toLocaleString()] }), _jsxs("p", { children: [_jsx("strong", { children: "Venue:" }), " ", event.venue] }), _jsxs("p", { children: [_jsx("strong", { children: "Capacity:" }), " ", event.capacity] }), _jsxs("p", { children: [_jsx("strong", { children: "Budget:" }), " $", event.budget] })] }), _jsxs("div", { className: "tasks-section", children: [_jsx("h2", { children: "Tasks" }), tasks.length === 0 ? (_jsx("p", { children: "No tasks assigned" })) : (_jsx("ul", { className: "tasks-list", children: tasks.map((task) => (_jsxs("li", { children: [_jsx("h3", { children: task.title }), _jsx("p", { children: task.description }), _jsxs("div", { className: "task-meta", children: [_jsx("span", { className: `priority priority-${task.priority}`, children: task.priority }), _jsx("span", { className: `status status-${task.status}`, children: task.status })] })] }, task.$id))) })), _jsx("button", { onClick: () => navigate(`/tasks/new?eventId=${id}`), children: "Add Task" })] }), _jsxs("div", { className: "documents-section", children: [_jsx("h2", { children: "Documents" }), _jsx("input", { type: "file", onChange: (e) => {
                                    const file = e.target.files?.[0];
                                    if (file)
                                        handleDocumentUpload(file);
                                } }), documents.length === 0 ? (_jsx("p", { children: "No documents uploaded" })) : (_jsx("ul", { className: "documents-list", children: documents.map((doc) => (_jsx("li", { children: _jsx("a", { href: doc.url, target: "_blank", rel: "noopener noreferrer", children: doc.name }) }, doc.$id))) }))] }), _jsxs("div", { className: "team-section", children: [_jsx("h2", { children: "Team Management" }), _jsxs("div", { className: "add-member", children: [_jsx("input", { type: "email", placeholder: "Enter email address", onKeyPress: (e) => {
                                            if (e.key === 'Enter') {
                                                const input = e.target;
                                                handleAddTeamMember(input.value);
                                                input.value = '';
                                            }
                                        } }), _jsxs("select", { onChange: (e) => e.target.value, children: [_jsx("option", { value: "member", children: "Member" }), _jsx("option", { value: "admin", children: "Admin" })] })] })] })] })] }));
};
