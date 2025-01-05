import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { databaseService, COLLECTIONS } from '../../services';
export const Venues = () => {
    const [venues, setVenues] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');
    React.useEffect(() => {
        const fetchVenues = async () => {
            try {
                const response = await databaseService.list(COLLECTIONS.VENUES);
                setVenues(response.documents);
            }
            catch (err) {
                setError(err.message || 'Failed to load venues');
            }
            finally {
                setLoading(false);
            }
        };
        fetchVenues();
    }, []);
    if (loading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsx("div", { className: "error-message", children: error });
    return (_jsxs("div", { className: "venues-container", children: [_jsxs("div", { className: "venues-header", children: [_jsx("h1", { children: "Venues" }), _jsx("button", { className: "create-button", children: "Add Venue" })] }), venues.length === 0 ? (_jsx("p", { children: "No venues available" })) : (_jsx("div", { className: "venues-grid", children: venues.map((venue) => (_jsxs("div", { className: "venue-card", children: [_jsx("h3", { children: venue.name }), _jsx("p", { children: venue.address }), _jsxs("div", { className: "venue-details", children: [_jsxs("p", { children: [_jsx("strong", { children: "Capacity:" }), " ", venue.capacity] }), _jsxs("p", { children: [_jsx("strong", { children: "Facilities:" }), ' ', venue.facilities.join(', ')] })] }), _jsxs("div", { className: "venue-contact", children: [_jsxs("p", { children: [_jsx("strong", { children: "Contact:" }), ' ', venue.contactInfo.name] }), _jsx("p", { children: venue.contactInfo.email }), _jsx("p", { children: venue.contactInfo.phone })] })] }, venue.$id))) }))] }));
};
