#!/bin/bash

# Install Appwrite CLI
npm install -g appwrite-cli

# Login to Appwrite - this will prompt for login
appwrite client --endpoint "${APPWRITE_ENDPOINT}"
appwrite client --projectId "${APPWRITE_PROJECT_ID}"
appwrite client --key "${APPWRITE_API_KEY}"

# Create database
appwrite databases create --databaseId 'event_logistics_db' --name 'Event Logistics Database'

# Create collections
# Events Collection
appwrite databases createCollection \
    --databaseId 'event_logistics_db' \
    --collectionId 'events' \
    --name 'Events' \
    --permissions 'read("team:organizers")' 'write("team:organizers")'

# Add attributes for Events
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'events' --key 'title' --size 256 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'events' --key 'description' --size 2048 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'events' --key 'startDate' --size 64 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'events' --key 'endDate' --size 64 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'events' --key 'venue' --size 256 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'events' --key 'organizerId' --size 256 --required true
appwrite databases createEnumAttribute --databaseId 'event_logistics_db' --collectionId 'events' --key 'status' --elements 'draft,published,cancelled,completed' --required true
appwrite databases createIntegerAttribute --databaseId 'event_logistics_db' --collectionId 'events' --key 'capacity' --required true
appwrite databases createFloatAttribute --databaseId 'event_logistics_db' --collectionId 'events' --key 'budget' --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'events' --key 'tasks' --size 256 --array true --required false

# Venues Collection
appwrite databases createCollection \
    --databaseId 'event_logistics_db' \
    --collectionId 'venues' \
    --name 'Venues' \
    --permissions 'read("team:organizers")' 'write("team:organizers")'

# Add attributes for Venues
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'venues' --key 'name' --size 256 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'venues' --key 'address' --size 1024 --required true
appwrite databases createIntegerAttribute --databaseId 'event_logistics_db' --collectionId 'venues' --key 'capacity' --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'venues' --key 'facilities' --size 256 --array true --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'venues' --key 'contactInfo.name' --size 256 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'venues' --key 'contactInfo.phone' --size 64 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'venues' --key 'contactInfo.email' --size 256 --required true

# Tasks Collection
appwrite databases createCollection \
    --databaseId 'event_logistics_db' \
    --collectionId 'tasks' \
    --name 'Tasks' \
    --permissions 'read("team:organizers")' 'write("team:organizers")'

# Add attributes for Tasks
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'tasks' --key 'eventId' --size 256 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'tasks' --key 'title' --size 256 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'tasks' --key 'description' --size 2048 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'tasks' --key 'assignedTo' --size 256 --array true --required true
appwrite databases createEnumAttribute --databaseId 'event_logistics_db' --collectionId 'tasks' --key 'status' --elements 'pending,in-progress,completed,cancelled' --required true
appwrite databases createEnumAttribute --databaseId 'event_logistics_db' --collectionId 'tasks' --key 'priority' --elements 'low,medium,high' --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'tasks' --key 'dueDate' --size 64 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'tasks' --key 'completedAt' --size 64 --required false

# Inventory Collection
appwrite databases createCollection \
    --databaseId 'event_logistics_db' \
    --collectionId 'inventory' \
    --name 'Inventory' \
    --permissions 'read("team:organizers")' 'write("team:organizers")'

# Add attributes for Inventory
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'inventory' --key 'name' --size 256 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'inventory' --key 'category' --size 256 --required true
appwrite databases createIntegerAttribute --databaseId 'event_logistics_db' --collectionId 'inventory' --key 'quantity' --required true
appwrite databases createIntegerAttribute --databaseId 'event_logistics_db' --collectionId 'inventory' --key 'available' --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'inventory' --key 'unit' --size 64 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'inventory' --key 'location' --size 256 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'inventory' --key 'lastChecked' --size 64 --required true
appwrite databases createStringAttribute --databaseId 'event_logistics_db' --collectionId 'inventory' --key 'assignedEvents' --size 256 --array true --required false

# Create indexes
# Events indexes
appwrite databases createIndex --databaseId 'event_logistics_db' --collectionId 'events' --key 'organizer_index' --type 'key' --attributes 'organizerId'
appwrite databases createIndex --databaseId 'event_logistics_db' --collectionId 'events' --key 'date_index' --type 'key' --attributes 'startDate,endDate'

# Tasks indexes
appwrite databases createIndex --databaseId 'event_logistics_db' --collectionId 'tasks' --key 'event_index' --type 'key' --attributes 'eventId'
appwrite databases createIndex --databaseId 'event_logistics_db' --collectionId 'tasks' --key 'assigned_index' --type 'key' --attributes 'assignedTo'

# Create storage buckets
appwrite storage createBucket --bucketId 'event_documents' --name 'Event Documents' --permissions 'read("team:organizers")' 'write("team:organizers")'
appwrite storage createBucket --bucketId 'user_avatars' --name 'User Avatars' --permissions 'read("team:organizers")' 'write("team:organizers")'

echo "Appwrite setup completed successfully!"
