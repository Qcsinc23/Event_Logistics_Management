export type ConditionStatus = 'good' | 'damaged' | 'requires_cleaning' | 'requires_maintenance';
export type MediaType = 'image' | 'video';

export interface ConditionReport {
  id: string;
  item_id: string;
  event_id: string;
  reported_by: string;
  condition: ConditionStatus;
  notes?: string;
  reported_at: string;
  created_at: string;
  updated_at: string;
  media?: ConditionReportMedia[];
}

export interface ConditionReportMedia {
  id: string;
  report_id: string;
  storage_path: string;
  media_type: MediaType;
  annotations?: {
    notes?: string;
    markups?: {
      type: 'text' | 'arrow' | 'circle';
      position: { x: number; y: number };
      content?: string;
    }[];
  };
  created_at: string;
}

export interface InventoryUsageStats {
  id: string;
  item_id: string;
  date: string;
  times_reserved: number;
  times_checked_out: number;
  times_returned_damaged: number;
  total_rental_duration: string;
  revenue_generated: number;
  created_at: string;
  updated_at: string;
}

export interface InventoryForecast {
  id: string;
  item_id: string;
  forecast_date: string;
  predicted_demand: number;
  confidence_level: number;
  factors: {
    seasonality: number;
    trend: number;
    events: {
      type: string;
      impact: number;
    }[];
  };
  created_at: string;
  updated_at: string;
}

export interface CollaborationComment {
  id: string;
  event_id: string;
  user_id: string;
  parent_id?: string;
  content: string;
  mentioned_users: string[];
  created_at: string;
  updated_at: string;
}

export interface EventChange {
  id: string;
  event_id: string;
  user_id: string;
  change_type: 'created' | 'updated' | 'deleted';
  changed_fields: Record<string, any>;
  previous_values?: Record<string, any>;
  new_values?: Record<string, any>;
  created_at: string;
}

// Request types
export interface CreateConditionReportRequest {
  item_id: string;
  event_id: string;
  condition: ConditionStatus;
  notes?: string;
  media?: {
    file: File;
    type: MediaType;
    annotations?: ConditionReportMedia['annotations'];
  }[];
}

export interface UpdateConditionReportRequest {
  condition?: ConditionStatus;
  notes?: string;
  media?: {
    id?: string; // Existing media ID if updating
    file?: File; // New file if adding/updating
    type: MediaType;
    annotations?: ConditionReportMedia['annotations'];
  }[];
}

// Response types
export interface ConditionReportResponse {
  report: ConditionReport;
  media: ConditionReportMedia[];
}

export interface InventoryAnalyticsResponse {
  usage: InventoryUsageStats[];
  forecasts: InventoryForecast[];
}

// Analytics filter types
export interface AnalyticsFilters {
  startDate?: string;
  endDate?: string;
  itemIds?: string[];
  categories?: string[];
  metrics?: ('usage' | 'damage' | 'revenue')[];
}

// Forecast parameters
export interface ForecastParameters {
  itemId: string;
  startDate: string;
  endDate: string;
  includeSeasonality?: boolean;
  includeEvents?: boolean;
}
