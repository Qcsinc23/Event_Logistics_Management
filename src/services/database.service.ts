import { ID, Query, Models } from 'appwrite';
import { client, databases } from '../config/appwrite';
import { DATABASE_ID, COLLECTIONS } from '../config/appwrite';
import { Event, Task, Venue, InventoryItem, User } from '../types/models';

// Type for database documents (excluding User which comes from account service)
type DatabaseModel = Event | Task | Venue | InventoryItem;

export class DatabaseService {
    async create<T extends DatabaseModel>(
        collectionId: string,
        data: Omit<T, keyof Models.Document>,
        permissions: string[] = []
    ) {
        try {
            return await databases.createDocument<T>(
                DATABASE_ID,
                collectionId,
                ID.unique(),
                data,
                permissions
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async get<T extends DatabaseModel>(collectionId: string, documentId: string) {
        try {
            return await databases.getDocument<T>(
                DATABASE_ID,
                collectionId,
                documentId
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async list<T extends DatabaseModel>(
        collectionId: string,
        queries: string[] = [],
        limit: number = 20
    ) {
        try {
            return await databases.listDocuments<T>(
                DATABASE_ID,
                collectionId,
                [
                    Query.limit(limit),
                    ...queries
                ]
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async update<T extends DatabaseModel>(
        collectionId: string,
        documentId: string,
        data: Partial<T>
    ) {
        try {
            return await databases.updateDocument<T>(
                DATABASE_ID,
                collectionId,
                documentId,
                data
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async delete(collectionId: string, documentId: string) {
        try {
            await databases.deleteDocument(
                DATABASE_ID,
                collectionId,
                documentId
            );
            return true;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    // Collection-specific query methods
    async getEventsByOrganizer(organizerId: string) {
        return this.list<Event>(COLLECTIONS.EVENTS, [
            Query.equal('organizerId', organizerId)
        ]);
    }

    async getUpcomingEvents() {
        return this.list<Event>(COLLECTIONS.EVENTS, [
            Query.greaterThan('startDate', new Date().toISOString()),
            Query.orderAsc('startDate')
        ]);
    }

    async getTasksByEvent(eventId: string) {
        return this.list<Task>(COLLECTIONS.TASKS, [
            Query.equal('eventId', eventId),
            Query.orderAsc('dueDate')
        ]);
    }

    async getAssignedTasks(userId: string) {
        return this.list<Task>(COLLECTIONS.TASKS, [
            Query.search('assignedTo', userId)
        ]);
    }

    async getAvailableVenues(startDate: string, endDate: string) {
        return this.list<Venue>(COLLECTIONS.VENUES, [
            Query.greaterThan('availability.endDate', startDate),
            Query.lessThan('availability.startDate', endDate)
        ]);
    }

    // Real-time subscriptions
    subscribeToCollection(collectionId: string, callback: (payload: any) => void) {
        try {
            return client.subscribe(
                `databases.${DATABASE_ID}.collections.${collectionId}.documents`,
                callback
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    subscribeToDocument(
        collectionId: string,
        documentId: string,
        callback: (payload: any) => void
    ) {
        try {
            return client.subscribe(
                `databases.${DATABASE_ID}.collections.${collectionId}.documents.${documentId}`,
                callback
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    private handleError(error: any) {
        console.error('Database Error:', error);

        const errorMessages: { [key: string]: string } = {
            'document_not_found': 'The requested document was not found',
            'permission_denied': 'You do not have permission to perform this action',
            'database_not_found': 'Database not found',
            'collection_not_found': 'Collection not found'
        };

        const message = errorMessages[error.type] || 'An unexpected database error occurred';

        return {
            message,
            code: error.code,
            type: error.type
        };
    }
}

export const databaseService = new DatabaseService();
