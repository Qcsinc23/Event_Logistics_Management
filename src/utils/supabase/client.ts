import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    debug: true
  },
  db: {
    schema: 'public'
  }
});

// Add auth state change listener
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth event:', event);
  if (event === 'SIGNED_IN') {
    console.log('User signed in:', session?.user);
  } else if (event === 'SIGNED_OUT') {
    console.log('User signed out');
  } else if (event === 'USER_UPDATED') {
    console.log('User updated:', session?.user);
  }
});

// Types for better type inference
export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string;
          name: string;
          parent_id: string | null;
          description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          parent_id?: string | null;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          parent_id?: string | null;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      category_attributes: {
        Row: {
          id: string;
          category_id: string;
          name: string;
          type: 'text' | 'number' | 'boolean' | 'date';
          required: boolean;
          options: string[] | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          category_id: string;
          name: string;
          type: 'text' | 'number' | 'boolean' | 'date';
          required?: boolean;
          options?: string[] | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          category_id?: string;
          name?: string;
          type?: 'text' | 'number' | 'boolean' | 'date';
          required?: boolean;
          options?: string[] | null;
          created_at?: string;
        };
      };
      inventory_items: {
        Row: {
          id: string;
          name: string;
          sku: string;
          category_id: string | null;
          description: string | null;
          tracking_method: 'batch' | 'serial' | 'none';
          total_quantity: number;
          available_quantity: number;
          reserved_quantity: number;
          min_quantity: number;
          reorder_point: number;
          unit: string;
          default_location: string | null;
          weight: number | null;
          dimensions: {
            length: number;
            width: number;
            height: number;
            unit: 'cm' | 'in';
          } | null;
          status: 'active' | 'discontinued' | 'pending';
          created_at: string;
          updated_at: string;
          last_inventory_count: string;
        };
        Insert: {
          id?: string;
          name: string;
          sku: string;
          category_id?: string | null;
          description?: string | null;
          tracking_method?: 'batch' | 'serial' | 'none';
          total_quantity: number;
          available_quantity: number;
          reserved_quantity: number;
          min_quantity: number;
          reorder_point: number;
          unit: string;
          default_location?: string | null;
          weight?: number | null;
          dimensions?: {
            length: number;
            width: number;
            height: number;
            unit: 'cm' | 'in';
          } | null;
          status?: 'active' | 'discontinued' | 'pending';
          created_at?: string;
          updated_at?: string;
          last_inventory_count?: string;
        };
        Update: Partial<Database['public']['Tables']['inventory_items']['Insert']>;
      };
      // Add other table definitions as needed
    };
  };
};

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
export type Insertable<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert'];
export type Updatable<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update'];
