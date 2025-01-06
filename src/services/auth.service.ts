import { ID, Account, Models } from 'appwrite';
import { account, client } from '../config/appwrite';

// Get Appwrite endpoint and project ID from client config
const APPWRITE_ENDPOINT = client.config.endpoint;
const APPWRITE_PROJECT_ID = client.config.project;

export class AuthService {
    private async retryWithBackoff<T>(operation: () => Promise<T>, maxRetries: number = 3): Promise<T> {
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                return await operation();
            } catch (error: any) {
                if (error.type === 'general_rate_limit_exceeded' && attempt < maxRetries - 1) {
                    // Calculate delay with exponential backoff: 2^attempt * 1000ms (1s, 2s, 4s)
                    const delay = Math.min(Math.pow(2, attempt) * 1000, 4000);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    continue;
                }
                throw error;
            }
        }
        throw new Error('Max retries exceeded');
    }

    async createAccount(email: string, password: string, name: string) {
        try {
            // Create a valid user ID from email
            let userId = email
                .split('@')[0] // Take part before @
                .replace(/[^a-zA-Z0-9\.\-_]/g, '_') // Keep letters, numbers, periods, hyphens, underscores
                .replace(/^[^a-zA-Z0-9]+/, 'u'); // Replace leading special chars with 'u'

            // Limit to 36 chars
            userId = userId.slice(0, 36);

            // Validate final userId
            if (!/^[a-zA-Z0-9][a-zA-Z0-9\.\-_]{0,35}$/.test(userId)) {
                userId = 'u' + userId.replace(/[^a-zA-Z0-9\.\-_]/g, '_').slice(0, 35);
            }

            const user = await this.retryWithBackoff(async () => {
                const createdUser = await account.create(userId, email, password, name);
                await this.login(email, password);
                return createdUser;
            });
            
            return user;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async login(email: string, password: string) {
        try {
            return await this.retryWithBackoff(() => account.createSession(email, password));
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async loginWithGoogle() {
        try {
            return await this.retryWithBackoff(() => {
                const successUrl = 'http://localhost:3000/auth/callback';
                const failureUrl = 'http://localhost:3000/auth/failure';
                
                try {
                    // Use string literal for provider as per Appwrite SDK
                    return (account.createOAuth2Session as Function)(
                        'google',
                        successUrl,
                        failureUrl
                    );
                } catch (error: any) {
                    console.error('OAuth Session Error:', error);
                    if (error.message?.includes('storage')) {
                        // Handle storage context error by using window.location
                        window.location.href = `${APPWRITE_ENDPOINT}/account/sessions/oauth2/google?project=${APPWRITE_PROJECT_ID}&success=${encodeURIComponent(successUrl)}&failure=${encodeURIComponent(failureUrl)}`;
                        return;
                    }
                    throw error;
                }
            });
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async logout() {
        try {
            return await this.retryWithBackoff(() => account.deleteSession('current'));
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.retryWithBackoff(() => account.get());
        } catch (error) {
            this.handleError(error);
            return null;
        }
    }

    async resetPassword(email: string) {
        try {
            return await this.retryWithBackoff(() =>
                account.createRecovery(email, 'http://localhost:5173/reset-password')
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async updateName(name: string) {
        try {
            return await this.retryWithBackoff(() => account.updateName(name));
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async updatePassword(password: string, oldPassword: string) {
        try {
            return await this.retryWithBackoff(() =>
                account.updatePassword(password, oldPassword)
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async updatePreferences(prefs: object) {
        try {
            return await this.retryWithBackoff(() => account.updatePrefs(prefs));
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
