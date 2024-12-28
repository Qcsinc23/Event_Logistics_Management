import { Client, Account, Databases, Storage, Teams } from 'appwrite';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

if (!process.env.APPWRITE_ENDPOINT || !process.env.APPWRITE_PROJECT_ID || !process.env.APPWRITE_API_KEY) {
    throw new Error('Missing required environment variables for Appwrite configuration');
}

export const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

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
