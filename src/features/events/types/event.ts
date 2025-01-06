export interface Event {
    $id: string;
    name: string;
    description: string | null;
    start_date: string;
    end_date: string;
    venue_id: string | null;
    status: 'draft' | 'planned' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
    created_at: string;
    updated_at: string;
}