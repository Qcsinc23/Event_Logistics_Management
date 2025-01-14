import { Client, Account, Databases, Storage, Teams } from 'appwrite';
if (!__APPWRITE_ENDPOINT__ || !__APPWRITE_PROJECT_ID__) {
    throw new Error('Missing required environment variables for Appwrite configuration');
}
export const client = new Client()
    .setEndpoint(__APPWRITE_ENDPOINT__)
    .setProject(__APPWRITE_PROJECT_ID__);
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
