/**
 * Appwrite Integration Services
 * 
 * This module exports all services needed for Appwrite integration in the Event Logistics Management application.
 * Each service handles specific functionality and includes proper error handling and type safety.
 */

export { authService } from './auth.service';
export { databaseService } from './database.service';
export { storageService } from './storage.service';
export { teamsService } from './teams.service';

// Re-export types
export * from '../types/models';

// Configuration
export {
    DATABASE_ID,
    COLLECTIONS,
    STORAGE_BUCKETS
} from '../config/appwrite';

/**
 * Service Usage Examples:
 * 
 * Authentication:
 * ```typescript
 * // User registration
 * await authService.createAccount(email, password, name);
 * 
 * // User login
 * await authService.login(email, password);
 * ```
 * 
 * Database Operations:
 * ```typescript
 * // Create an event
 * await databaseService.create(COLLECTIONS.EVENTS, eventData);
 * 
 * // Get upcoming events
 * await databaseService.getUpcomingEvents();
 * ```
 * 
 * File Storage:
 * ```typescript
 * // Upload event document
 * await storageService.uploadEventDocument(file, eventId);
 * 
 * // Get file preview
 * storageService.getFilePreview(bucketId, fileId);
 * ```
 * 
 * Team Management:
 * ```typescript
 * // Create event team
 * await teamsService.createEventTeam(eventId, teamName);
 * 
 * // Add team member
 * await teamsService.addEventTeamMember(teamId, memberEmail);
 * ```
 */
