import { ID } from 'appwrite';
import { account } from '../config/appwrite';

export class AuthService {
    async createAccount(email: string, password: string, name: string) {
        try {
            const user = await account.create(
                ID.unique(),
                email,
                password,
                name
            );
            await this.login(email, password);
            return user;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async login(email: string, password: string) {
        try {
            return await account.createSession(email, password);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async logout() {
        try {
            return await account.deleteSession('current');
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await account.get();
        } catch (error) {
            this.handleError(error);
            return null;
        }
    }

    async resetPassword(email: string) {
        try {
            return await account.createRecovery(email, 'http://localhost:5173/reset-password');
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async updateName(name: string) {
        try {
            return await account.updateName(name);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async updatePassword(password: string, oldPassword: string) {
        try {
            return await account.updatePassword(password, oldPassword);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async updatePreferences(prefs: object) {
        try {
            return await account.updatePrefs(prefs);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    private handleError(error: any) {
        console.error('Auth Error:', error);
        
        // Map Appwrite error codes to user-friendly messages
        const errorMessages: { [key: string]: string } = {
            'user_already_exists': 'An account with this email already exists',
            'invalid_credentials': 'Invalid email or password',
            'general_rate_limit_exceeded': 'Too many attempts. Please try again later',
            'user_not_found': 'User not found',
            'password_mismatch': 'Current password is incorrect'
        };

        const message = errorMessages[error.type] || 'An unexpected error occurred';
        // You can implement custom error handling/logging here
        
        return {
            message,
            code: error.code,
            type: error.type
        };
    }
}

export const authService = new AuthService();
