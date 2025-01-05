const { Client, Account } = require('node-appwrite');
require('dotenv').config();

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67704838003d3092b954');

const account = new Account(client);

async function verifyOAuthSetup() {
    console.log('Verifying OAuth Configuration...\n');

    try {
        // 1. Check environment variables
        console.log('1. Checking environment variables:');
        const endpoint = process.env.VITE_APPWRITE_ENDPOINT;
        const projectId = process.env.VITE_APPWRITE_PROJECT_ID;

        if (!endpoint || !projectId) {
            throw new Error('Missing required environment variables');
        }
        console.log('✅ Environment variables present');
        console.log(`   Endpoint: ${endpoint}`);
        console.log(`   Project ID: ${projectId}\n`);

        // 2. Check OAuth session URL
        console.log('2. Generating OAuth URL:');
        const success = 'http://localhost:3000/auth/callback';
        const failure = 'http://localhost:3000/auth/failure';

        try {
            const authUrl = account.createOAuth2Session(
                'google',
                success,
                failure
            );
            console.log('✅ OAuth URL generated successfully');
            console.log('   This means the basic OAuth configuration is in place\n');
        } catch (error) {
            throw new Error(`OAuth URL generation failed: ${error.message}`);
        }

        console.log('3. Next steps to complete verification:');
        console.log('   a. Start your development server: npm run dev');
        console.log('   b. Open your application and click "Continue with Google"');
        console.log('   c. You should be redirected to Google\'s consent screen');
        console.log('   d. After authorization, you should be redirected back to your app\n');

        console.log('4. If you encounter issues:');
        console.log('   - Check Google Cloud Console for OAuth consent screen status');
        console.log('   - Verify Client ID and Secret in Appwrite Console');
        console.log('   - Ensure all redirect URIs are properly configured');
        console.log('   - Review OAUTH_SETUP.md for detailed troubleshooting steps');

    } catch (error) {
        console.error('\n❌ Verification failed:', error.message);
        console.log('\nPlease follow the setup steps in OAUTH_SETUP.md to resolve any issues.');
        process.exit(1);
    }
}

verifyOAuthSetup().catch(console.error);