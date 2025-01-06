// Database configuration
export const DATABASE_ID = 'event_logistics_db';

// Collection IDs
export type CollectionName = 
  | 'events'
  | 'categories'
  | 'category_attributes'
  | 'inventory_items'
  | 'custom_attributes'
  | 'batches'
  | 'serial_numbers'
  | 'maintenance_records'
  | 'assignment_records'
  | 'storage_instructions'
  | 'compliance_info'
  | 'condition_reports'
  | 'condition_report_media'
  | 'inventory_usage_stats'
  | 'inventory_forecasts'
  | 'collaboration_comments'
  | 'event_layouts'
  | 'inventory_bundles'
  | 'bundle_items'
  | 'bundle_tags'
  | 'bundle_pricing'
  | 'event_tasks'
  | 'event_documents'
  | 'event_team_members';

export const COLLECTIONS = {
  EVENTS: 'events' as CollectionName,
  CATEGORIES: 'categories' as CollectionName,
  CATEGORY_ATTRIBUTES: 'category_attributes' as CollectionName,
  INVENTORY_ITEMS: 'inventory_items' as CollectionName,
  CUSTOM_ATTRIBUTES: 'custom_attributes' as CollectionName,
  BATCHES: 'batches' as CollectionName,
  SERIAL_NUMBERS: 'serial_numbers' as CollectionName,
  MAINTENANCE_RECORDS: 'maintenance_records' as CollectionName,
  ASSIGNMENT_RECORDS: 'assignment_records' as CollectionName,
  STORAGE_INSTRUCTIONS: 'storage_instructions' as CollectionName,
  COMPLIANCE_INFO: 'compliance_info' as CollectionName,
  CONDITION_REPORTS: 'condition_reports' as CollectionName,
  CONDITION_REPORT_MEDIA: 'condition_report_media' as CollectionName,
  INVENTORY_USAGE_STATS: 'inventory_usage_stats' as CollectionName,
  INVENTORY_FORECASTS: 'inventory_forecasts' as CollectionName,
  COLLABORATION_COMMENTS: 'collaboration_comments' as CollectionName,
  EVENT_LAYOUTS: 'event_layouts' as CollectionName,
  INVENTORY_BUNDLES: 'inventory_bundles' as CollectionName,
  BUNDLE_ITEMS: 'bundle_items' as CollectionName,
  BUNDLE_TAGS: 'bundle_tags' as CollectionName,
  BUNDLE_PRICING: 'bundle_pricing' as CollectionName,
  EVENT_TASKS: 'event_tasks' as CollectionName,
  EVENT_DOCUMENTS: 'event_documents' as CollectionName,
  EVENT_TEAM_MEMBERS: 'event_team_members' as CollectionName
};

// Storage bucket IDs
export const STORAGE_BUCKETS = {
  MEDIA: 'media',
  EVENT_DOCUMENTS: 'event_documents'
};
