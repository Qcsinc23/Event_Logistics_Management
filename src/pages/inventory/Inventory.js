import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Query } from 'appwrite';
import { databaseService, COLLECTIONS } from '../../services';
export const Inventory = () => {
    const [items, setItems] = useState([]);
    const [events, setEvents] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('all'); // all, available, assigned
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const fetchInventory = async () => {
            try {
                let queries = [];
                // Apply filters
                if (filter === 'available') {
                    queries.push(Query.greaterThan('available', 0));
                }
                else if (filter === 'assigned') {
                    queries.push(Query.equal('available', 0));
                }
                // Apply search
                if (searchTerm) {
                    queries.push(Query.search('name', searchTerm));
                }
                const response = await databaseService.list(COLLECTIONS.INVENTORY, queries);
                setItems(response.documents);
                // Fetch associated events for assigned items
                const eventIds = response.documents
                    .flatMap(item => item.assignedEvents || []);
                if (eventIds.length > 0) {
                    const eventData = {};
                    await Promise.all([...new Set(eventIds)].map(async (eventId) => {
                        const event = await databaseService.get(COLLECTIONS.EVENTS, eventId);
                        eventData[eventId] = event;
                    }));
                    setEvents(eventData);
                }
            }
            catch (err) {
                setError(err.message || 'Failed to load inventory');
            }
            finally {
                setLoading(false);
            }
        };
        fetchInventory();
    }, [filter, searchTerm]);
    const handleQuantityUpdate = async (itemId, field, value) => {
        try {
            await databaseService.update(COLLECTIONS.INVENTORY, itemId, { [field]: value });
            // Update local state
            setItems(prev => prev.map(item => item.$id === itemId
                ? { ...item, [field]: value }
                : item));
        }
        catch (err) {
            setError(err.message || 'Failed to update quantity');
        }
    };
    if (loading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsx("div", { className: "error-message", children: error });
    return (_jsxs("div", { className: "inventory-container", children: [_jsxs("div", { className: "inventory-header", children: [_jsx("h1", { children: "Inventory" }), _jsx("button", { className: "create-button", children: "Add Item" })] }), _jsxs("div", { className: "inventory-controls", children: [_jsx("div", { className: "search-box", children: _jsx("input", { type: "text", placeholder: "Search items...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }) }), _jsxs("div", { className: "filters", children: [_jsx("button", { className: filter === 'all' ? 'active' : '', onClick: () => setFilter('all'), children: "All Items" }), _jsx("button", { className: filter === 'available' ? 'active' : '', onClick: () => setFilter('available'), children: "Available" }), _jsx("button", { className: filter === 'assigned' ? 'active' : '', onClick: () => setFilter('assigned'), children: "Assigned" })] })] }), items.length === 0 ? (_jsx("p", { children: "No items found" })) : (_jsx("div", { className: "inventory-grid", children: items.map((item) => (_jsxs("div", { className: "inventory-card", children: [_jsxs("div", { className: "item-header", children: [_jsx("h3", { children: item.name }), _jsx("span", { className: "category", children: item.category })] }), _jsxs("div", { className: "item-quantities", children: [_jsxs("div", { className: "quantity-control", children: [_jsx("label", { children: "Total Quantity:" }), _jsx("input", { type: "number", value: item.quantity, min: 0, onChange: (e) => handleQuantityUpdate(item.$id, 'quantity', parseInt(e.target.value)) })] }), _jsxs("div", { className: "quantity-control", children: [_jsx("label", { children: "Available:" }), _jsx("input", { type: "number", value: item.available, min: 0, max: item.quantity, onChange: (e) => handleQuantityUpdate(item.$id, 'available', parseInt(e.target.value)) })] })] }), _jsxs("div", { className: "item-details", children: [_jsxs("p", { children: [_jsx("strong", { children: "Location:" }), " ", item.location] }), _jsxs("p", { children: [_jsx("strong", { children: "Unit:" }), " ", item.unit] }), _jsxs("p", { children: [_jsx("strong", { children: "Last Checked:" }), ' ', new Date(item.lastChecked).toLocaleDateString()] })] }), item.assignedEvents && item.assignedEvents.length > 0 && (_jsxs("div", { className: "assigned-events", children: [_jsx("h4", { children: "Assigned to Events:" }), _jsx("ul", { children: item.assignedEvents.map((eventId) => (_jsx("li", { children: events[eventId]?.title || 'Loading...' }, eventId))) })] }))] }, item.$id))) }))] }));
};
