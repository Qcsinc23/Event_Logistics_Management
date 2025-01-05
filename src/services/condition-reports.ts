import { supabase } from '../utils/supabase/client';
import type {
  ConditionReport,
  ConditionReportMedia,
  CreateConditionReportRequest,
  UpdateConditionReportRequest,
  ConditionReportResponse,
  InventoryUsageStats,
  InventoryForecast,
  AnalyticsFilters,
  ForecastParameters,
} from '../features/inventory/types/condition-reports';

// Helper function to upload media files
const uploadMedia = async (file: File, reportId: string): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${reportId}/${Math.random().toString(36).substring(7)}.${fileExt}`;
  const filePath = `condition-reports/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('media')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from('media')
    .getPublicUrl(filePath);

  return publicUrl;
};

// Create a new condition report
export const createConditionReport = async (
  request: CreateConditionReportRequest
): Promise<ConditionReportResponse> => {
  const { data: report, error: reportError } = await supabase
    .from('condition_reports')
    .insert([{
      item_id: request.item_id,
      event_id: request.event_id,
      condition: request.condition,
      notes: request.notes,
      reported_by: (await supabase.auth.getUser()).data.user?.id,
    }])
    .select()
    .single();

  if (reportError) throw reportError;

  const media: ConditionReportMedia[] = [];

  if (request.media && request.media.length > 0) {
    for (const mediaItem of request.media) {
      const storagePath = await uploadMedia(mediaItem.file, report.id);

      const { data: mediaData, error: mediaError } = await supabase
        .from('condition_report_media')
        .insert([{
          report_id: report.id,
          storage_path: storagePath,
          media_type: mediaItem.type,
          annotations: mediaItem.annotations,
        }])
        .select()
        .single();

      if (mediaError) throw mediaError;
      media.push(mediaData);
    }
  }

  return { report, media };
};

// Get a condition report by ID
export const getConditionReport = async (id: string): Promise<ConditionReportResponse> => {
  const { data: report, error: reportError } = await supabase
    .from('condition_reports')
    .select(`
      *,
      media:condition_report_media(*)
    `)
    .eq('id', id)
    .single();

  if (reportError) throw reportError;
  return { report, media: report.media || [] };
};

// Update a condition report
export const updateConditionReport = async (
  id: string,
  request: UpdateConditionReportRequest
): Promise<ConditionReportResponse> => {
  const { data: report, error: reportError } = await supabase
    .from('condition_reports')
    .update({
      condition: request.condition,
      notes: request.notes,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (reportError) throw reportError;

  if (request.media) {
    for (const mediaItem of request.media) {
      if (mediaItem.id) {
        // Update existing media
        const { error: mediaError } = await supabase
          .from('condition_report_media')
          .update({
            annotations: mediaItem.annotations,
          })
          .eq('id', mediaItem.id);

        if (mediaError) throw mediaError;
      } else if (mediaItem.file) {
        // Add new media
        const storagePath = await uploadMedia(mediaItem.file, id);

        const { error: mediaError } = await supabase
          .from('condition_report_media')
          .insert([{
            report_id: id,
            storage_path: storagePath,
            media_type: mediaItem.type,
            annotations: mediaItem.annotations,
          }]);

        if (mediaError) throw mediaError;
      }
    }
  }

  return getConditionReport(id);
};

// Get inventory usage statistics
export const getInventoryUsageStats = async (
  filters: AnalyticsFilters
): Promise<InventoryUsageStats[]> => {
  let query = supabase
    .from('inventory_usage_stats')
    .select('*');

  if (filters.startDate) {
    query = query.gte('date', filters.startDate);
  }
  if (filters.endDate) {
    query = query.lte('date', filters.endDate);
  }
  if (filters.itemIds?.length) {
    query = query.in('item_id', filters.itemIds);
  }

  const { data, error } = await query.order('date', { ascending: true });
  if (error) throw error;
  return data;
};

// Get inventory forecasts
export const getInventoryForecasts = async (
  params: ForecastParameters
): Promise<InventoryForecast[]> => {
  const { data, error } = await supabase
    .from('inventory_forecasts')
    .select('*')
    .eq('item_id', params.itemId)
    .gte('forecast_date', params.startDate)
    .lte('forecast_date', params.endDate)
    .order('forecast_date', { ascending: true });

  if (error) throw error;
  return data;
};

// Get item condition history
export const getItemConditionHistory = async (itemId: string) => {
  const { data, error } = await supabase
    .from('condition_reports')
    .select(`
      *,
      media:condition_report_media(*)
    `)
    .eq('item_id', itemId)
    .order('reported_at', { ascending: false });

  if (error) throw error;
  return data;
};

// Get maintenance alerts
export const getMaintenanceAlerts = async () => {
  const { data, error } = await supabase
    .from('condition_reports')
    .select(`
      *,
      item:inventory_items(name)
    `)
    .in('condition', ['damaged', 'requires_maintenance'])
    .order('reported_at', { ascending: false });

  if (error) throw error;
  return data;
};

// Add collaboration comment
export const addComment = async (
  eventId: string,
  content: string,
  parentId?: string,
  mentionedUsers: string[] = []
) => {
  const { data, error } = await supabase
    .from('collaboration_comments')
    .insert([{
      event_id: eventId,
      user_id: (await supabase.auth.getUser()).data.user?.id,
      parent_id: parentId,
      content,
      mentioned_users: mentionedUsers,
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Get event comments
export const getEventComments = async (eventId: string) => {
  const { data, error } = await supabase
    .from('collaboration_comments')
    .select(`
      *,
      user:users(name, avatar_url)
    `)
    .eq('event_id', eventId)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data;
};
