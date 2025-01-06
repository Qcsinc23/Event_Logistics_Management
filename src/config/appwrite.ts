import { Client, Account, Databases, Storage, Teams } from 'appwrite';

// Get environment variables
const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT ?? '';
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID ?? '';

// Initialize client for web platform
const client = new Client();

// Set up client configuration
client
    .setEndpoint(endpoint)
    .setProject(projectId);

// Validate configuration
if (!endpoint || !projectId) {
    throw new Error('Missing required environment variables for Appwrite configuration');
}

export { client };

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const teams = new Teams(client);

// Database and collection IDs - to be created in Appwrite Console
export const DATABASE_ID = 'event_logistics_db';
export const COLLECTIONS = {
    USERS: 'users',
    EVENTS: 'events',
    VENUES: 'venues',
    TASKS: 'tasks',
    INVENTORY: 'inventory'
};

// Storage bucket IDs - to be created in Appwrite Console
export const STORAGE_BUCKETS = {
    EVENT_DOCUMENTS: 'event_documents',
    USER_AVATARS: 'user_avatars'
};
