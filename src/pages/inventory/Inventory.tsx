import React, { useState, useEffect } from 'react';
import { Query } from 'appwrite';
import { databaseService, COLLECTIONS } from '../../services';
import type { InventoryItem, Event } from '../../types/models';

export const Inventory: React.FC = () => {
    const [items, setItems] = useState<InventoryItem[]>([]);
    const [events, setEvents] = useState<{ [key: string]: Event }>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('all'); // all, available, assigned
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                let queries: string[] = [];

                // Apply filters
                if (filter === 'available') {
                    queries.push(Query.greaterThan('available', 0));
                } else if (filter === 'assigned') {
                    queries.push(Query.equal('available', 0));
                }

                // Apply search
                if (searchTerm) {
                    queries.push(Query.search('name', searchTerm));
                }

                const response = await databaseService.list<InventoryItem>(
                    COLLECTIONS.INVENTORY,
                    queries
                );
                setItems(response.documents);

                // Fetch associated events for assigned items
                const eventIds = response.documents
                    .flatMap(item => item.assignedEvents || []);
                
                if (eventIds.length > 0) {
                    const eventData: { [key: string]: Event } = {};
                    await Promise.all(
                        [...new Set(eventIds)].map(async (eventId) => {
                            const event = await databaseService.get<Event>(
                                COLLECTIONS.EVENTS,
                                eventId
                            );
                            eventData[eventId] = event;
                        })
                    );
                    setEvents(eventData);
                }
            } catch (err: any) {
                setError(err.message || 'Failed to load inventory');
            } finally {
                setLoading(false);
            }
        };

        fetchInventory();
    }, [filter, searchTerm]);

    const handleQuantityUpdate = async (
        itemId: string,
        field: 'quantity' | 'available',
        value: number
    ) => {
        try {
            await databaseService.update<InventoryItem>(
                COLLECTIONS.INVENTORY,
                itemId,
                { [field]: value }
            );
            
            // Update local state
            setItems(prev =>
                prev.map(item =>
                    item.$id === itemId
                        ? { ...item, [field]: value }
                        : item
                )
            );
        } catch (err: any) {
            setError(err.message || 'Failed to update quantity');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="inventory-container">
            <div className="inventory-header">
                <h1>Inventory</h1>
                <button className="create-button">Add Item</button>
            </div>

            <div className="inventory-controls">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="filters">
                    <button
                        className={filter === 'all' ? 'active' : ''}
                        onClick={() => setFilter('all')}
                    >
                        All Items
                    </button>
                    <button
                        className={filter === 'available' ? 'active' : ''}
                        onClick={() => setFilter('available')}
                    >
                        Available
                    </button>
                    <button
                        className={filter === 'assigned' ? 'active' : ''}
                        onClick={() => setFilter('assigned')}
                    >
                        Assigned
                    </button>
                </div>
            </div>

            {items.length === 0 ? (
                <p>No items found</p>
            ) : (
                <div className="inventory-grid">
                    {items.map((item) => (
                        <div key={item.$id} className="inventory-card">
                            <div className="item-header">
                                <h3>{item.name}</h3>
                                <span className="category">{item.category}</span>
                            </div>

                            <div className="item-quantities">
                                <div className="quantity-control">
                                    <label>Total Quantity:</label>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min={0}
                                        onChange={(e) =>
                                            handleQuantityUpdate(
                                                item.$id,
                                                'quantity',
                                                parseInt(e.target.value)
                                            )
                                        }
                                    />
                                </div>
                                <div className="quantity-control">
                                    <label>Available:</label>
                                    <input
                                        type="number"
                                        value={item.available}
                                        min={0}
                                        max={item.quantity}
                                        onChange={(e) =>
                                            handleQuantityUpdate(
                                                item.$id,
                                                'available',
                                                parseInt(e.target.value)
                                            )
                                        }
                                    />
                                </div>
                            </div>

                            <div className="item-details">
                                <p>
                                    <strong>Location:</strong> {item.location}
                                </p>
                                <p>
                                    <strong>Unit:</strong> {item.unit}
                                </p>
                                <p>
                                    <strong>Last Checked:</strong>{' '}
                                    {new Date(item.lastChecked).toLocaleDateString()}
                                </p>
                            </div>

                            {item.assignedEvents && item.assignedEvents.length > 0 && (
                                <div className="assigned-events">
                                    <h4>Assigned to Events:</h4>
                                    <ul>
                                        {item.assignedEvents.map((eventId) => (
                                            <li key={eventId}>
                                                {events[eventId]?.title || 'Loading...'}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
