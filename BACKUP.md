# Database Backup System

This document describes the automated backup system for the Event Logistics Management database.

## Backup Schedule

The system implements a multi-tiered backup strategy:

1. **Daily Backups**
   - Schedule: Every day at midnight (0 0 * * *)
   - Retention: 7 days
   - Purpose: Provides recent recovery points for quick restoration

2. **Weekly Backups**
   - Schedule: Every Sunday at midnight (0 0 * * 0)
   - Retention: 30 days
   - Purpose: Offers weekly recovery points for the past month

3. **Monthly Backups**
   - Schedule: First day of each month at midnight (0 0 1 * *)
   - Retention: 90 days
   - Purpose: Maintains long-term recovery points

## Implementation

The backup system is implemented as a Windows service using:
- Node.js for the backup manager
- node-cron for scheduling
- node-windows for Windows service integration
- Appwrite CLI for database operations

### Files
- `backup-manager.js`: Core backup logic and scheduling
- `install-backup-service.ps1`: PowerShell script to install the Windows service

## Installation

1. Ensure Node.js is installed on the system
2. Run PowerShell as Administrator
3. Navigate to the project directory
4. Execute the installation script:
   ```powershell
   .\install-backup-service.ps1
   ```

## Verification

After installation:
1. Open Windows Services (services.msc)
2. Look for "Appwrite Backup Manager"
3. Verify the service is running
4. Check logs in the Windows Event Viewer

## Backup Location

Backups are stored in the Appwrite Cloud infrastructure with the following retention policies:
- Daily backups: 7 days
- Weekly backups: 30 days
- Monthly backups: 90 days

## Recovery Process

To restore from a backup:
1. Log in to the Appwrite Console
2. Navigate to Databases > event_logistics_db
3. Select the "Backups" tab
4. Choose the desired backup point
5. Click "Restore"

## Monitoring

The backup service logs all operations to the Windows Event Log:
- Successful backups
- Failed backup attempts
- Cleanup operations
- Service status changes

## Troubleshooting

If backups are not running:
1. Check the service status in Windows Services
2. Review Event Viewer logs for errors
3. Verify Appwrite CLI authentication
4. Ensure network connectivity to Appwrite Cloud

For any issues:
1. Stop the service
2. Check the logs
3. Resolve any identified issues
4. Restart the service

## Security

The backup system uses:
- Appwrite API key with limited permissions
- Windows service running under a dedicated service account
- Encrypted backup storage in Appwrite Cloud
