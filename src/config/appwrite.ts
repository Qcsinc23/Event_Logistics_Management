import { Client, Account, Databases, Storage, Teams, ID } from 'appwrite';
import { COLLECTIONS, DATABASE_ID, STORAGE_BUCKETS } from './constants';

class AppwriteService {
    private static instance: AppwriteService;
    private client: Client;
    private _account: Account;
    private _databases: Databases;
    private _storage: Storage;
    private _teams: Teams;
    private initialized: boolean = false;

    private constructor() {
        this.client = new Client();
        this._account = new Account(this.client);
        this._databases = new Databases(this.client);
        this._storage = new Storage(this.client);
        this._teams = new Teams(this.client);
    }

    public static getInstance(): AppwriteService {
        if (!AppwriteService.instance) {
            AppwriteService.instance = new AppwriteService();
        }
        return AppwriteService.instance;
    }

    public initialize() {
        if (this.initialized) return;

        const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
        const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

        if (!endpoint || !projectId) {
            throw new Error(
                'Missing required environment variables for Appwrite configuration. ' +
                'Please ensure VITE_APPWRITE_ENDPOINT and VITE_APPWRITE_PROJECT_ID are set in your .env file.'
            );
        }

        try {
            this.client
                .setEndpoint(endpoint)
                .setProject(projectId);
            
            this.initialized = true;
        } catch (error) {
            console.error('Failed to initialize Appwrite client:', error);
            throw new Error('Failed to initialize Appwrite client');
        }
    }

    public get account(): Account {
        this.ensureInitialized();
        return this._account;
    }

    public get databases(): Databases {
        this.ensureInitialized();
        return this._databases;
    }

    public get storage(): Storage {
        this.ensureInitialized();
        return this._storage;
    }

    public get teams(): Teams {
        this.ensureInitialized();
        return this._teams;
    }

    private ensureInitialized() {
        if (!this.initialized) {
            this.initialize();
        }
    }
}

// Initialize the service
const appwriteService = AppwriteService.getInstance();
appwriteService.initialize();

// Export the service instances
export const client = appwriteService['client'];
export const account = appwriteService.account;
export const databases = appwriteService.databases;
export const storage = appwriteService.storage;
export const teams = appwriteService.teams;
export { ID };
