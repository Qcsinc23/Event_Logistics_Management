const { Client, Databases } = require('node-appwrite');
const { exec } = require('child_process');
const cron = require('node-cron');

// Initialize Appwrite Client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67704838003d3092b954')
    .setKey('standard_cc603dc56cb3eaf4edde1a1edf9b30e3f267aa0dc329d437d34dfb1e6c0867e9a41bf9eb9f1209e272c415a06d6ba0e7c4bfef495ad7b414fb0e4af6ca900bed956631ff45a4dbbfd816ad1e720c5151f2d893cdc59111b3839b98b9c0bd957b425fe3755bae3bf0a27c9a752dc64d0a14394a13e5c78248b32527d978875530');

const databases = new Databases(client);

// Backup Configuration
const backupConfigs = [
    {
        name: 'Daily Backup',
        schedule: '0 0 * * *', // Every day at midnight
        retention: 7, // Keep for 7 days
        command: 'appwrite databases backup event_logistics_db'
    },
    {
        name: 'Weekly Backup',
        schedule: '0 0 * * 0', // Every Sunday at midnight
        retention: 30, // Keep for 30 days
        command: 'appwrite databases backup event_logistics_db'
    },
    {
        name: 'Monthly Backup',
        schedule: '0 0 1 * *', // First day of each month at midnight
        retention: 90, // Keep for 90 days
        command: 'appwrite databases backup event_logistics_db'
    }
];

// Schedule backups
backupConfigs.forEach(config => {
    cron.schedule(config.schedule, () => {
        console.log(`Starting ${config.name}...`);
        exec(config.command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error in ${config.name}:`, error);
                return;
            }
            console.log(`${config.name} completed successfully`);
            
            // Clean up old backups based on retention policy
            cleanupOldBackups(config.retention);
        });
    });
});

// Function to clean up old backups
async function cleanupOldBackups(retentionDays) {
    try {
        const backups = await databases.listBackups('event_logistics_db');
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - retentionDays);

        backups.forEach(backup => {
            const backupDate = new Date(backup.$createdAt);
            if (backupDate < cutoffDate) {
                databases.deleteBackup('event_logistics_db', backup.$id)
                    .then(() => console.log(`Deleted old backup: ${backup.$id}`))
                    .catch(err => console.error(`Error deleting backup ${backup.$id}:`, err));
            }
        });
    } catch (error) {
        console.error('Error cleaning up old backups:', error);
    }
}

console.log('Backup manager started with the following schedule:');
backupConfigs.forEach(config => {
    console.log(`- ${config.name}: ${config.schedule} (${config.retention} days retention)`);
});
