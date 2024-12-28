import { Models } from 'appwrite';

export interface User extends Models.User<Models.Preferences> {
    role: 'admin' | 'organizer' | 'staff';
    avatarUrl?: string;
}

export interface Event extends Models.Document {
    $id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    venue: string;
    organizerId: string;
    status: 'draft' | 'published' | 'cancelled' | 'completed';
    capacity: number;
    budget: number;
    tasks?: string[];
}

export interface Venue extends Models.Document {
    $id: string;
    name: string;
    address: string;
    capacity: number;
    facilities: string[];
    availability: {
        startDate: string;
        endDate: string;
    }[];
    contactInfo: {
        name: string;
        phone: string;
        email: string;
    };
}

export interface Task extends Models.Document {
    $id: string;
    eventId: string;
    title: string;
    description: string;
    assignedTo: string[];
    status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
    completedAt?: string;
}

export interface InventoryItem extends Models.Document {
    $id: string;
    name: string;
    category: string;
    quantity: number;
    available: number;
    unit: string;
    location: string;
    lastChecked: string;
    assignedEvents?: string[];
}

export type CollectionModel = User | Event | Venue | Task | InventoryItem;
