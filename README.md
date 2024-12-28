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

## Automated Appwrite Setup

You can use the provided setup script to automatically configure Appwrite:

1. Install Appwrite CLI:
```bash
npm install -g appwrite-cli
```

2. Login and configure CLI:
```bash
appwrite client --endpoint "https://cloud.appwrite.io/v1"
appwrite client --project-id "your_project_id"
appwrite client --key "your_api_key"
```

3. Run the setup script:
```bash
chmod +x setup-appwrite.sh  # On Unix-based systems
./setup-appwrite.sh
```

The script will create:
- Database (event_logistics_db)
- Collections (events, venues, tasks, inventory)
- Storage buckets (event_documents, user_avatars)
- Teams (organizers, staff)
- Password reset function

## Deployment

### Netlify Deployment

1. Create netlify.toml in the project root:
```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Configure Environment Variables in Netlify:
- APPWRITE_ENDPOINT
- APPWRITE_PROJECT_ID
- APPWRITE_API_KEY

3. Deploy to Netlify:
- Connect your GitHub repository
- Configure build settings:
  - Build command: npm run build
  - Publish directory: build

4. Update Appwrite Settings:
- Set password reset URL to your Netlify domain
- Configure OAuth redirect URLs if using OAuth providers
- Update team invitation URLs

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

## Post-Deployment Configuration

1. Appwrite Console Settings:
- Configure collection attributes and indexes
- Set up team permissions
- Enable required authentication methods
- Configure storage bucket permissions

2. Environment Variables:
- Verify all environment variables are set
- Test authentication flows
- Confirm file upload functionality

3. Security Checks:
- Test password reset flow
- Verify team permissions
- Check file access controls

## Troubleshooting

1. Authentication Issues:
- Verify environment variables
- Check OAuth configuration
- Confirm password reset URLs

2. Database Access:
- Verify collection permissions
- Check team memberships
- Confirm API key permissions

3. File Storage:
- Check bucket permissions
- Verify file size limits
- Confirm supported file types

4. Team Management:
- Verify team creation
- Check membership roles
- Test invitation flows

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
