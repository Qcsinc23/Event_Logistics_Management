import { ID, Query } from 'appwrite';
import { client, databases } from '../config/appwrite';
import { DATABASE_ID, COLLECTIONS } from '../config/appwrite';
export class DatabaseService {
    async create(collectionId, data, permissions = []) {
        try {
            return await databases.createDocument(DATABASE_ID, collectionId, ID.unique(), data, permissions);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async get(collectionId, documentId) {
        try {
            return await databases.getDocument(DATABASE_ID, collectionId, documentId);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async list(collectionId, queries = [], limit = 20) {
        try {
            return await databases.listDocuments(DATABASE_ID, collectionId, [
                Query.limit(limit),
                ...queries
            ]);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async update(collectionId, documentId, data) {
        try {
            return await databases.updateDocument(DATABASE_ID, collectionId, documentId, data);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async delete(collectionId, documentId) {
        try {
            await databases.deleteDocument(DATABASE_ID, collectionId, documentId);
            return true;
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    // Collection-specific query methods
    async getEventsByOrganizer(organizerId) {
        return this.list(COLLECTIONS.EVENTS, [
            Query.equal('organizerId', organizerId)
        ]);
    }
    async getUpcomingEvents() {
        return this.list(COLLECTIONS.EVENTS, [
            Query.greaterThan('startDate', new Date().toISOString()),
            Query.orderAsc('startDate')
        ]);
    }
    async getTasksByEvent(eventId) {
        return this.list(COLLECTIONS.TASKS, [
            Query.equal('eventId', eventId),
            Query.orderAsc('dueDate')
        ]);
    }
    async getAssignedTasks(userId) {
        return this.list(COLLECTIONS.TASKS, [
            Query.search('assignedTo', userId)
        ]);
    }
    async getAvailableVenues(startDate, endDate) {
        return this.list(COLLECTIONS.VENUES, [
            Query.greaterThan('availability.endDate', startDate),
            Query.lessThan('availability.startDate', endDate)
        ]);
    }
    // Real-time subscriptions
    subscribeToCollection(collectionId, callback) {
        try {
            return client.subscribe(`databases.${DATABASE_ID}.collections.${collectionId}.documents`, callback);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    subscribeToDocument(collectionId, documentId, callback) {
        try {
            return client.subscribe(`databases.${DATABASE_ID}.collections.${collectionId}.documents.${documentId}`, callback);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    handleError(error) {
        console.error('Database Error:', error);
        const errorMessages = {
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
