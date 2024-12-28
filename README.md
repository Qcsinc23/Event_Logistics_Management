# Event Logistics Management - Appwrite Integration

This project integrates Appwrite backend services into the Event Logistics Management application, providing secure authentication, database management, file storage, and team collaboration features.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure Appwrite:
- Create an Appwrite project in the [Appwrite Console](https://cloud.appwrite.io)
- Set up the following in your Appwrite project:
  - Database with collections: users, events, venues, tasks, inventory
  - Storage buckets: event_documents, user_avatars
  - Authentication methods (email/password)
  - Team functionality enabled

3. Environment Setup:
- Copy `.env.example` to `.env`
- Update the following variables in `.env`:
  ```
  APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
  APPWRITE_PROJECT_ID=your_project_id
  APPWRITE_API_KEY=your_api_key
  ```
- Get your Project ID and API Key from the Appwrite Console
- Never commit the `.env` file to version control

## Project Structure

```
src/
├── config/
│   └── appwrite.ts         # Appwrite configuration and constants
├── services/
│   ├── auth.service.ts     # Authentication and user management
│   ├── database.service.ts # Database operations and queries
│   ├── storage.service.ts  # File storage and management
│   ├── teams.service.ts    # Team and membership management
│   └── index.ts           # Service exports and documentation
└── types/
    └── models.ts          # TypeScript interfaces for collections
```

## Database Collections

### Users Collection
- User profiles and authentication data
- Fields: name, email, role, avatarUrl

### Events Collection
- Event details and management
- Fields: title, description, startDate, endDate, venue, organizerId, status, capacity, budget, tasks

### Venues Collection
- Venue information and availability
- Fields: name, address, capacity, facilities, availability, contactInfo

### Tasks Collection
- Event-related tasks and assignments
- Fields: eventId, title, description, assignedTo, status, priority, dueDate, completedAt

### Inventory Collection
- Equipment and resource management
- Fields: name, category, quantity, available, unit, location, lastChecked, assignedEvents

## Service Usage

### Authentication
```typescript
import { authService } from './services';

// User registration
await authService.createAccount(email, password, name);

// User login
await authService.login(email, password);

// Get current user
const user = await authService.getCurrentUser();
```

### Database Operations
```typescript
import { databaseService, COLLECTIONS } from './services';

// Create new event
await databaseService.create(COLLECTIONS.EVENTS, eventData);

// Get upcoming events
const events = await databaseService.getUpcomingEvents();

// Update event
await databaseService.update(COLLECTIONS.EVENTS, eventId, updateData);

// Real-time updates
databaseService.subscribeToCollection(COLLECTIONS.EVENTS, (payload) => {
    console.log('Event updated:', payload);
});
```

### File Storage
```typescript
import { storageService } from './services';

// Upload event document
await storageService.uploadEventDocument(file, eventId);

// Get file preview
const previewUrl = storageService.getFilePreview(bucketId, fileId);

// Delete file
await storageService.deleteFile(bucketId, fileId);
```

### Team Management
```typescript
import { teamsService } from './services';

// Create event team
const team = await teamsService.createEventTeam(eventId, 'Event Staff');

// Add team member
await teamsService.addEventTeamMember(teamId, 'staff@example.com', 'member');

// List team members
const members = await teamsService.listMemberships(teamId);
```

## Security Considerations

1. Authentication
- Secure password requirements
- Session management
- Password reset functionality

2. Authorization
- Role-based access control
- Team-based permissions
- Document-level security

3. Data Validation
- Input validation
- Type checking
- Error handling

4. File Security
- Secure file uploads
- Access control for files
- File type restrictions

## Error Handling

All services include comprehensive error handling:
- User-friendly error messages
- Error type mapping
- Consistent error structure
- Logging for debugging

## Development Guidelines

1. Type Safety
- Use TypeScript interfaces for all data models
- Maintain strict type checking
- Document type definitions

2. Error Handling
- Always use try-catch blocks
- Map error types to user-friendly messages
- Log errors for debugging

3. Security
- Validate all inputs
- Use proper permission settings
- Follow security best practices

4. Testing
- Test all API endpoints
- Verify error handling
- Check security measures

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
