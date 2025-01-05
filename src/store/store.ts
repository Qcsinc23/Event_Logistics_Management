import { create } from 'zustand';
import * as eventService from '../services/events';
import type { Event } from '../services/events';

interface EventStore {
  events: Event[];
  loading: boolean;
  error: string | null;
  fetchEvents: () => Promise<void>;
  addEvent: (event: Omit<Event, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  updateEvent: (id: string, event: Partial<Event>) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
}

const useEventStore = create<EventStore>((set) => ({
  events: [],
  loading: false,
  error: null,
  
  fetchEvents: async () => {
    set({ loading: true, error: null });
    try {
      const data = await eventService.getEvents();
      set({ events: data, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch events', 
        loading: false 
      });
    }
  },

  addEvent: async (event) => {
    set({ loading: true, error: null });
    try {
      const data = await eventService.createEvent(event);
      set((state) => ({
        events: [...state.events, data],
        loading: false,
      }));
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to add event', 
        loading: false 
      });
    }
  },

  updateEvent: async (id, event) => {
    set({ loading: true, error: null });
    try {
      const data = await eventService.updateEvent(id, event);
      set((state) => ({
        events: state.events.map((e) =>
          e.id === id ? data : e
        ),
        loading: false,
      }));
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to update event', 
        loading: false 
      });
    }
  },

  deleteEvent: async (id) => {
    set({ loading: true, error: null });
    try {
      await eventService.deleteEvent(id);
      set((state) => ({
        events: state.events.filter((e) => e.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to delete event', 
        loading: false 
      });
    }
  },
}));

export default useEventStore;
