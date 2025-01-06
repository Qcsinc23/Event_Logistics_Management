import { ID, Account, Models } from 'appwrite';
import { account, client } from '../config/appwrite';

// Get Appwrite endpoint and project ID from client config
const APPWRITE_ENDPOINT = client.config.endpoint;
const APPWRITE_PROJECT_ID = client.config.project;

export class AuthService {
    async createAccount(email: string, password: string, name: string) {
        try {
            const user = await account.create(ID.unique(), email, password, name);
            await this.login(email, password);
            return user;
        } catch (error: any) {
            throw this.handleError(error);
        }
    }

    async login(email: string, password: string) {
        try {
            const session = await account.createSession(email, password);
            return session;
        } catch (error: any) {
            throw this.handleError(error);
        }
    }

    async loginWithGoogle() {
        try {
            const redirectUrl = `${window.location.origin}/auth/callback`;
            const failureUrl = `${window.location.origin}/auth/failure`;
            
            // Construct OAuth URL manually as before
            const oauthUrl = `${APPWRITE_ENDPOINT}/account/sessions/oauth2/google?project=${APPWRITE_PROJECT_ID}&success=${encodeURIComponent(redirectUrl)}&failure=${encodeURIComponent(failureUrl)}`;
            window.location.href = oauthUrl;
            
            return new Promise(() => {});
        } catch (error: any) {
            throw this.handleError(error);
        }
    }

    async handleOAuthCallback() {
        try {
            const session = await account.getSession('current');
            if (session) {
                window.location.href = '/dashboard';
                return;
            }
        } catch (error) {
            console.error('OAuth callback error:', error);
            window.location.href = '/login';
        }
    }

    async logout() {
        try {
            await account.deleteSession('current');
        } catch (error: any) {
            throw this.handleError(error);
        }
    }

    async getCurrentUser() {
        try {
            const user = await account.get();
            return user;
        } catch (error: any) {
            return null;
        }
    }

    async resetPassword(email: string) {
        try {
            await account.createRecovery(
                email,
                `${window.location.origin}/reset-password`
            );
        } catch (error: any) {
            throw this.handleError(error);
        }
    }

    async updateName(name: string) {
        try {
            return await account.updateName(name);
        } catch (error: any) {
            throw this.handleError(error);
        }
    }

    async updatePassword(password: string, oldPassword: string) {
        try {
            return await account.updatePassword(password, oldPassword);
        } catch (error: any) {
            throw this.handleError(error);
        }
    }

    async updatePreferences(prefs: object) {
        try {
            return await account.updatePrefs(prefs);
        } catch (error: any) {
            throw this.handleError(error);
        }
    }

    private handleError(error: any) {
        console.error('Auth Error:', error);
        
        const errorMessages: { [key: string]: string } = {
            'user_already_exists': 'An account with this email already exists',
            'user_invalid_credentials': 'Invalid email or password',
            'general_rate_limit_exceeded': 'Too many attempts. Please try again later',
            'user_not_found': 'User not found',
            'password_mismatch': 'Current password is incorrect',
            'general_argument_invalid': 'Invalid input provided'
        };

        const message = errorMessages[error.type] || error.message || 'An unexpected error occurred';
        
        return {
            message,
            code: error.code,
            type: error.type
        };
    }
}

export const authService = new AuthService();
