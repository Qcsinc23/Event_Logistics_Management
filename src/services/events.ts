import { ID, Query } from 'appwrite';
import { databases } from '../config/appwrite';
import { DATABASE_ID } from '../config/constants';

const COLLECTIONS = {
  EVENTS: 'events'
};

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
  return data.documents;
};

export const getEvent = async (id: string) => {
  const data = await databases.getDocument(
    DATABASE_ID,
    COLLECTIONS.EVENTS,
    id
  );
  return data;
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
  return data;
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
  return data;
};

export const deleteEvent = async (id: string) => {
  await databases.deleteDocument(
    DATABASE_ID,
    COLLECTIONS.EVENTS,
    id
  );
};
