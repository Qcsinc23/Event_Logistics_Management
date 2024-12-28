import { ID } from 'appwrite';
import { storage, STORAGE_BUCKETS } from '../config/appwrite';

export class StorageService {
    async uploadFile(
        bucketId: string,
        file: File,
        permissions: string[] = []
    ) {
        try {
            return await storage.createFile(
                bucketId,
                ID.unique(),
                file,
                permissions
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async deleteFile(bucketId: string, fileId: string) {
        try {
            await storage.deleteFile(bucketId, fileId);
            return true;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async getFile(bucketId: string, fileId: string) {
        try {
            return await storage.getFile(bucketId, fileId);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    getFilePreview(bucketId: string, fileId: string, width?: number, height?: number) {
        try {
            return storage.getFilePreview(
                bucketId,
                fileId,
                width,
                height
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async getFileDownload(bucketId: string, fileId: string) {
        try {
            return storage.getFileDownload(bucketId, fileId);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    // Utility methods for specific buckets
    async uploadEventDocument(file: File, eventId: string) {
        const permissions = [`event:${eventId}`]; // Example permission
        return this.uploadFile(STORAGE_BUCKETS.EVENT_DOCUMENTS, file, permissions);
    }

    async uploadUserAvatar(file: File, userId: string) {
        const permissions = [`user:${userId}`]; // Example permission
        return this.uploadFile(STORAGE_BUCKETS.USER_AVATARS, file, permissions);
    }

    private handleError(error: any) {
        console.error('Storage Error:', error);

        const errorMessages: { [key: string]: string } = {
            'file_not_found': 'The requested file was not found',
            'file_already_exists': 'A file with this name already exists',
            'file_size_exceeded': 'The file size exceeds the maximum limit',
            'permission_denied': 'You do not have permission to perform this action',
            'storage_bucket_not_found': 'Storage bucket not found'
        };

        const message = errorMessages[error.type] || 'An unexpected storage error occurred';

        return {
            message,
            code: error.code,
            type: error.type
        };
    }
}

export const storageService = new StorageService();
