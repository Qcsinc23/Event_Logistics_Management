# Requires -RunAsAdministrator

$serviceName = "AppwriteBackupManager"
$displayName = "Appwrite Backup Manager"
$description = "Manages automated backups for Event Logistics Management database"
$scriptPath = Join-Path $PSScriptRoot "backup-manager.js"

# Check if Node.js is installed
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error "Node.js is not installed. Please install Node.js first."
    exit 1
}

# Install node-windows globally if not already installed
if (-not (Get-Command nw -ErrorAction SilentlyContinue)) {
    Write-Host "Installing node-windows..."
    npm install -g node-windows
}

# Create the service installation script
$serviceScript = @"
const Service = require('node-windows').Service;
const path = require('path');

const svc = new Service({
    name: '$serviceName',
    description: '$description',
    script: path.join(process.cwd(), 'backup-manager.js'),
    nodeOptions: [],
    wait: 2,
    grow: .5,
    maxRestarts: 3
});

svc.on('install', () => {
    console.log('Service installed successfully');
    svc.start();
});

svc.on('start', () => {
    console.log('Service started');
});

svc.on('error', (err) => {
    console.error('Service error:', err);
});

svc.install();
"@

# Save the service installation script
$serviceInstallerPath = Join-Path $PSScriptRoot "install-service.js"
$serviceScript | Out-File -FilePath $serviceInstallerPath -Encoding UTF8

# Install required dependencies
Write-Host "Installing dependencies..."
npm install node-windows

# Install and start the service
Write-Host "Installing the service..."
node $serviceInstallerPath

Write-Host "Service installation complete. Check Windows Services to verify the service is running."
