const axios = require('axios');

const PROJECT_ID = '67704838003d3092b954';
const ENDPOINT = 'https://cloud.appwrite.io/v1';

// Get API key from environment or command line
const API_KEY = process.env.APPWRITE_API_KEY;

if (!API_KEY) {
    console.error('Please set APPWRITE_API_KEY environment variable');
    process.exit(1);
}

const platforms = [
    {
        name: 'Event Logistics HTTPS',
        hostname: 'eventlogistics.netlify.app',
        type: 'web'
    },
    {
        name: 'Event Logistics HTTP',
        hostname: 'eventlogistics.netlify.app',
        type: 'web'
    },
    {
        name: 'Event Logistics Preview HTTPS',
        hostname: '*.eventlogistics.netlify.app',
        type: 'web'
    },
    {
        name: 'Event Logistics Preview HTTP',
        hostname: '*.eventlogistics.netlify.app',
        type: 'web'
    }
];

async function addPlatform(platform) {
    try {
        const response = await axios.post(
            `${ENDPOINT}/projects/${PROJECT_ID}/platforms`,
            platform,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Appwrite-Key': API_KEY,
                    'X-Appwrite-Project': PROJECT_ID
                }
            }
        );
        console.log(`Added platform: ${platform.name}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Error adding platform ${platform.name}:`, error.response.data);
        } else {
            console.error(`Error adding platform ${platform.name}:`, error.message);
        }
    }
}

async function addAllPlatforms() {
    for (const platform of platforms) {
        await addPlatform(platform);
    }
}

addAllPlatforms().catch(console.error);