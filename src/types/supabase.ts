export interface Database {
  public: {
    Tables: {
      inventory_items: {
        Row: {
          id: string;
          name: string;
          barcode: string;
          description?: string;
          category_id: string;
          quantity: number;
          last_scanned?: string;
          last_known_location?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          barcode: string;
          description?: string;
          category_id: string;
          quantity: number;
          last_scanned?: string;
          last_known_location?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          barcode?: string;
          description?: string;
          category_id?: string;
          quantity?: number;
          last_scanned?: string;
          last_known_location?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      inventory_categories: {
        Row: {
          id: string;
          name: string;
          description?: string;
          parent_id?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string;
          parent_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          parent_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
