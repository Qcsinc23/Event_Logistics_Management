import React from 'react';
import { databaseService, COLLECTIONS } from '../../services';
import type { Venue } from '../../types/models';

export const Venues: React.FC = () => {
    const [venues, setVenues] = React.useState<Venue[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        const fetchVenues = async () => {
            try {
                const response = await databaseService.list<Venue>(COLLECTIONS.VENUES);
                setVenues(response.documents);
            } catch (err: any) {
                setError(err.message || 'Failed to load venues');
            } finally {
                setLoading(false);
            }
        };

        fetchVenues();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="venues-container">
            <div className="venues-header">
                <h1>Venues</h1>
                <button className="create-button">Add Venue</button>
            </div>

            {venues.length === 0 ? (
                <p>No venues available</p>
            ) : (
                <div className="venues-grid">
                    {venues.map((venue) => (
                        <div key={venue.$id} className="venue-card">
                            <h3>{venue.name}</h3>
                            <p>{venue.address}</p>
                            <div className="venue-details">
                                <p>
                                    <strong>Capacity:</strong> {venue.capacity}
                                </p>
                                <p>
                                    <strong>Facilities:</strong>{' '}
                                    {venue.facilities.join(', ')}
                                </p>
                            </div>
                            <div className="venue-contact">
                                <p>
                                    <strong>Contact:</strong>{' '}
                                    {venue.contactInfo.name}
                                </p>
                                <p>{venue.contactInfo.email}</p>
                                <p>{venue.contactInfo.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
