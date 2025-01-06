import { ID, Query } from 'appwrite';
import { databases } from '../config/appwrite';

// Database configuration
const DATABASE_ID = 'event_logistics_db';
const COLLECTIONS = {
  EVENTS: 'events'
} as const;

export interface Event {
  id: string;
  name: string;
  description: string | null;
  start_date: string;
  end_date: string;
  venue_id: string | null;
  status: 'draft' | 'planned' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export const getEvents = async () => {
  const data = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.EVENTS,
    [
      Query.orderAsc('start_date')
    ]
  );
  return data.documents.map(doc => ({
    id: doc.$id,
    name: doc.name,
    description: doc.description,
    start_date: doc.start_date,
    end_date: doc.end_date,
    venue_id: doc.venue_id,
    status: doc.status as Event['status'],
    created_at: doc.$createdAt,
    updated_at: doc.$updatedAt
  }));
};

export const getEvent = async (id: string) => {
  const data = await databases.getDocument(
    DATABASE_ID,
    COLLECTIONS.EVENTS,
    id
  );
  return {
    id: data.$id,
    name: data.name,
    description: data.description,
    start_date: data.start_date,
    end_date: data.end_date,
    venue_id: data.venue_id,
    status: data.status as Event['status'],
    created_at: data.$createdAt,
    updated_at: data.$updatedAt
  };
};

export const createEvent = async (event: Omit<Event, 'id' | 'created_at' | 'updated_at'>) => {
  const data = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.EVENTS,
    ID.unique(),
    {
      ...event,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  );
  return {
    id: data.$id,
    name: data.name,
    description: data.description,
    start_date: data.start_date,
    end_date: data.end_date,
    venue_id: data.venue_id,
    status: data.status as Event['status'],
    created_at: data.$createdAt,
    updated_at: data.$updatedAt
  };
};

export const updateEvent = async (id: string, event: Partial<Event>) => {
  const data = await databases.updateDocument(
    DATABASE_ID,
    COLLECTIONS.EVENTS,
    id,
    {
      ...event,
      updated_at: new Date().toISOString()
    }
  );
  return {
    id: data.$id,
    name: data.name,
    description: data.description,
    start_date: data.start_date,
    end_date: data.end_date,
    venue_id: data.venue_id,
    status: data.status as Event['status'],
    created_at: data.$createdAt,
    updated_at: data.$updatedAt
  };
};

export const deleteEvent = async (id: string) => {
  await databases.deleteDocument(
    DATABASE_ID,
    COLLECTIONS.EVENTS,
    id
  );
};
