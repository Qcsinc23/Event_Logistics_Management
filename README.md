# Event Logistics Management

## Deployment

This project is configured for automatic deployment through Netlify's GitHub integration. The deployment process:

1. Automatically triggers when changes are pushed to the main/master branch
2. Builds the project using the settings in `netlify.toml`
3. Deploys to Netlify's CDN
4. Handles all routing configurations for the SPA

Required environment variables in Netlify:
- `VITE_APPWRITE_ENDPOINT`: Your Appwrite endpoint URL
- `VITE_APPWRITE_PROJECT_ID`: Your Appwrite project ID

The GitHub Actions workflow:
- Runs on pushes to main/master branch
- Verifies the build process
- Ensures all tests pass
- Does not handle deployment (managed by Netlify)

A React-based event logistics management system built with Vite, TypeScript, and Appwrite.

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id_here
```

3. Run the development server:
```bash
npm run dev
```

## Environment Variables

The following environment variables are required:

| Variable Name              | Description                          | Example Value                          |
|----------------------------|--------------------------------------|----------------------------------------|
| VITE_APPWRITE_ENDPOINT      | Appwrite server endpoint             | https://cloud.appwrite.io/v1           |
| VITE_APPWRITE_PROJECT_ID    | Appwrite project ID                  | your_project_id_here                   |

## Netlify Deployment

### Prerequisites

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Create a Netlify account and connect it to your repository

### Environment Variables

Set the following environment variables in Netlify's deployment settings:

- `VITE_APPWRITE_ENDPOINT`: https://cloud.appwrite.io/v1
- `VITE_APPWRITE_PROJECT_ID`: Your Appwrite project ID

### Build Settings

The repository includes a `netlify.toml` file that configures:
- Build command: `npm run build`
- Publish directory: `dist`
- Node.js version: 18
- SPA routing

### OAuth Configuration

1. In Google Cloud Console:
   - Add `https://cloud.appwrite.io` to Authorized JavaScript origins
   - Add `https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google` to Authorized redirect URIs
   - Add your Netlify domain (e.g., `https://eventlogistics.netlify.app`) to Authorized JavaScript origins

2. In Appwrite Console:
   - Configure Google OAuth provider with your Client ID and Client Secret
   - Ensure the platform settings include your Netlify domain

### Deployment Steps

1. Connect your repository to Netlify
2. Configure environment variables in Netlify's deployment settings
3. Deploy your site
4. Add your Netlify domain to Appwrite's platforms list
5. Update Google OAuth configuration with your Netlify domain

## Features

- User authentication (Email/Password and Google OAuth)
- Event management
- Venue management
- Task tracking
- Inventory management
- Team collaboration

## Tech Stack

- React 19
- TypeScript
- Vite 6
- React Router DOM 7
- Appwrite 16.1

## Running Tests

To run the test suite, use the following command:
```bash
npm test
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeatureName`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeatureName`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Screenshots

![Dashboard](public/screenshots/dashboard.png)
![Events](public/screenshots/events.png)
![Tasks](public/screenshots/tasks.png)
