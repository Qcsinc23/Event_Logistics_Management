// OAuth Configuration Verification Script
const { Client, Account } = require('node-appwrite');
require('dotenv').config();

async function verifyOAuthConfig() {
    console.log('Verifying OAuth Configuration...\n');

    // 1. Check environment variables
    console.log('1. Checking environment variables:');
    const endpoint = process.env.VITE_APPWRITE_ENDPOINT;
    const projectId = process.env.VITE_APPWRITE_PROJECT_ID;

    if (!endpoint || !projectId) {
        console.error('❌ Missing required environment variables!');
        console.log('Required variables:');
        console.log('- VITE_APPWRITE_ENDPOINT');
        console.log('- VITE_APPWRITE_PROJECT_ID');
        process.exit(1);
    }

    console.log('✅ Environment variables present\n');

    // 2. Initialize Appwrite client
    console.log('2. Initializing Appwrite client:');
    const client = new Client()
        .setEndpoint(endpoint)
        .setProject(projectId);
    
    const account = new Account(client);

    // 3. Get OAuth2 providers
    console.log('3. Checking OAuth providers configuration:');
    try {
        const session = await account.createOAuth2Session(
            'google',
            'http://localhost:3000/auth/callback',
            'http://localhost:3000/auth/failure',
            ['profile', 'email']
        );
        console.log('✅ OAuth2 configuration is valid');
    } catch (error) {
        console.error('❌ OAuth2 configuration error:', error.message);
        console.log('\nPossible issues:');
        console.log('1. Google OAuth provider not enabled in Appwrite Console');
        console.log('2. Invalid Client ID or Client Secret in Appwrite Console');
        console.log('3. Incorrect redirect URIs in Google Cloud Console');
        console.log('\nPlease follow the setup steps in OAUTH_SETUP.md to resolve these issues.');
    }
}

verifyOAuthConfig().catch(console.error);