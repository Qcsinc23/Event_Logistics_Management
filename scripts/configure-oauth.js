const { Client, Teams, Account } = require('node-appwrite');
require('dotenv').config();

// Initialize Appwrite client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67704838003d3092b954')
    .setKey('standard_491f4b92fdc34bc046c98a4c9f9f38b2655c900680bf1058afbcc8b7d206cda31d56e4cb3950af0a2ac3628bb6816a96188d1dfc6b4dab5a26564be84a050281b4badde584139a26311e01d78922466d4520fcecac44767f81e78ab1e2bba0725b8394dbdfc772d2fe8b549bbb2913b223786d0b90657baf90478cf016cb2ba2');

async function configureOAuth() {
    try {
        console.log('Starting OAuth configuration...');

        // Get current project settings
        console.log('Fetching current project configuration...');
        const response = await client.call('get', 'https://cloud.appwrite.io/v1/projects/67704838003d3092b954');
        console.log('Current project settings:', JSON.stringify(response, null, 2));

        // List available OAuth providers
        console.log('\nFetching OAuth providers...');
        const oauthResponse = await client.call('get', 'https://cloud.appwrite.io/v1/projects/67704838003d3092b954/oauth2');
        console.log('OAuth providers:', JSON.stringify(oauthResponse, null, 2));

        // List platforms
        console.log('\nFetching platforms...');
        const platformsResponse = await client.call('get', 'https://cloud.appwrite.io/v1/projects/67704838003d3092b954/platforms');
        console.log('Platforms:', JSON.stringify(platformsResponse, null, 2));

        console.log('\n🔍 Configuration Analysis Complete');
        console.log('\nCurrent Status:');
        console.log('1. Project ID: 67704838003d3092b954');
        console.log('2. Endpoint: https://cloud.appwrite.io/v1');
        console.log('3. Available OAuth Providers:', oauthResponse?.providers || 'Unable to fetch');
        console.log('4. Configured Platforms:', platformsResponse?.total || 'Unable to fetch');

    } catch (error) {
        if (error.code === 401) {
            console.error('\n❌ Authentication Error:', error.message);
            console.log('\nAPI Key Permissions:');
            console.log('Current API key appears to have limited permissions.');
            console.log('Required permissions for full configuration:');
            console.log('- projects.read');
            console.log('- projects.write');
            console.log('- teams.write');
            console.log('\nPlease update the API key in Appwrite Console with these permissions.');
        } else {
            console.error('\n❌ Error:', error);
        }
        process.exit(1);
    }
}

configureOAuth().catch(console.error);