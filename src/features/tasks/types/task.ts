export interface Task {
    $id: string;
    title: string;
    description: string;
    event_id: string;
    assignee_id?: string;
    due_date?: string;
    priority: 'low' | 'medium' | 'high';
    status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
    created_at: string;
    updated_at: string;
}