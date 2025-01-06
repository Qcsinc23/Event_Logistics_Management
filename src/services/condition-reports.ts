import { ID, Query, Models } from 'appwrite';
import { databases, storage } from '../config/appwrite';
import { DATABASE_ID, COLLECTIONS, STORAGE_BUCKETS } from '../config/constants';
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
  ConditionStatus,
} from '../features/inventory/types/condition-reports';

// Helper function to upload media files
const uploadMedia = async (file: File, reportId: string): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${reportId}/${Math.random().toString(36).substring(7)}.${fileExt}`;
  const filePath = `condition-reports/${fileName}`;

  const uploadedFile = await storage.createFile(
    STORAGE_BUCKETS.MEDIA,
    ID.unique(),
    file
  );

  const fileUrl = storage.getFileView(
    STORAGE_BUCKETS.MEDIA,
    uploadedFile.$id
  ).toString();

  return fileUrl;
};

// Helper function to map Appwrite document to ConditionReport
const mapToConditionReport = (doc: Models.Document): ConditionReport => ({
  id: doc.$id,
  item_id: doc.item_id,
  event_id: doc.event_id,
  reported_by: doc.reported_by,
  condition: doc.condition as ConditionStatus,
  notes: doc.notes,
  reported_at: doc.reported_at,
  created_at: doc.$createdAt,
  updated_at: doc.$updatedAt,
  media: doc.media || []
});

// Helper function to map Appwrite document to ConditionReportMedia
const mapToConditionReportMedia = (doc: Models.Document): ConditionReportMedia => ({
  id: doc.$id,
  report_id: doc.report_id,
  storage_path: doc.storage_path,
  media_type: doc.media_type,
  annotations: doc.annotations,
  created_at: doc.$createdAt
});

// Helper function to map Appwrite document to InventoryUsageStats
const mapToInventoryUsageStats = (doc: Models.Document): InventoryUsageStats => ({
  id: doc.$id,
  item_id: doc.item_id,
  date: doc.date,
  times_reserved: doc.times_reserved,
  times_checked_out: doc.times_checked_out,
  times_returned_damaged: doc.times_returned_damaged,
  total_rental_duration: doc.total_rental_duration,
  revenue_generated: doc.revenue_generated,
  created_at: doc.$createdAt,
  updated_at: doc.$updatedAt
});

// Helper function to map Appwrite document to InventoryForecast
const mapToInventoryForecast = (doc: Models.Document): InventoryForecast => ({
  id: doc.$id,
  item_id: doc.item_id,
  forecast_date: doc.forecast_date,
  predicted_demand: doc.predicted_demand,
  confidence_level: doc.confidence_level,
  factors: doc.factors,
  created_at: doc.$createdAt,
  updated_at: doc.$updatedAt
});

// Create a new condition report
export const createConditionReport = async (
  request: CreateConditionReportRequest
): Promise<ConditionReportResponse> => {
  const report = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.CONDITION_REPORTS,
    ID.unique(),
    {
      item_id: request.item_id,
      event_id: request.event_id,
      condition: request.condition,
      notes: request.notes,
      reported_at: new Date().toISOString()
    }
  );

  const media: ConditionReportMedia[] = [];

  if (request.media && request.media.length > 0) {
    for (const mediaItem of request.media) {
      const storagePath = await uploadMedia(mediaItem.file, report.$id);

      const mediaDoc = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.CONDITION_REPORT_MEDIA,
        ID.unique(),
        {
          report_id: report.$id,
          storage_path: storagePath,
          media_type: mediaItem.type,
          annotations: mediaItem.annotations,
        }
      );

      media.push(mapToConditionReportMedia(mediaDoc));
    }
  }

  return {
    report: mapToConditionReport(report),
    media
  };
};

// Get a condition report by ID
export const getConditionReport = async (id: string): Promise<ConditionReportResponse> => {
  const report = await databases.getDocument(
    DATABASE_ID,
    COLLECTIONS.CONDITION_REPORTS,
    id
  );

  const mediaList = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.CONDITION_REPORT_MEDIA,
    [Query.equal('report_id', id)]
  );

  return {
    report: mapToConditionReport(report),
    media: mediaList.documents.map(mapToConditionReportMedia)
  };
};

// Update a condition report
export const updateConditionReport = async (
  id: string,
  request: UpdateConditionReportRequest
): Promise<ConditionReportResponse> => {
  const report = await databases.updateDocument(
    DATABASE_ID,
    COLLECTIONS.CONDITION_REPORTS,
    id,
    {
      condition: request.condition,
      notes: request.notes,
      updated_at: new Date().toISOString(),
    }
  );

  if (request.media) {
    for (const mediaItem of request.media) {
      if (mediaItem.id) {
        // Update existing media
        await databases.updateDocument(
          DATABASE_ID,
          COLLECTIONS.CONDITION_REPORT_MEDIA,
          mediaItem.id,
          {
            annotations: mediaItem.annotations,
          }
        );
      } else if (mediaItem.file) {
        // Add new media
        const storagePath = await uploadMedia(mediaItem.file, id);

        await databases.createDocument(
          DATABASE_ID,
          COLLECTIONS.CONDITION_REPORT_MEDIA,
          ID.unique(),
          {
            report_id: id,
            storage_path: storagePath,
            media_type: mediaItem.type,
            annotations: mediaItem.annotations,
          }
        );
      }
    }
  }

  return getConditionReport(id);
};

// Get inventory usage statistics
export const getInventoryUsageStats = async (
  filters: AnalyticsFilters
): Promise<InventoryUsageStats[]> => {
  const queries = [];

  if (filters.startDate) {
    queries.push(Query.greaterThanEqual('date', filters.startDate));
  }
  if (filters.endDate) {
    queries.push(Query.lessThanEqual('date', filters.endDate));
  }
  if (filters.itemIds && filters.itemIds.length > 0) {
    queries.push(Query.equal('item_id', filters.itemIds[0]));
  }
  queries.push(Query.orderAsc('date'));

  const data = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.INVENTORY_USAGE_STATS,
    queries
  );

  const stats = data.documents.map(mapToInventoryUsageStats);

  // Filter for multiple itemIds if needed
  if (filters.itemIds && filters.itemIds.length > 1) {
    return stats.filter(stat => filters.itemIds?.includes(stat.item_id));
  }

  return stats;
};

// Get inventory forecasts
export const getInventoryForecasts = async (
  params: ForecastParameters
): Promise<InventoryForecast[]> => {
  const data = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.INVENTORY_FORECASTS,
    [
      Query.equal('item_id', params.itemId),
      Query.greaterThanEqual('forecast_date', params.startDate),
      Query.lessThanEqual('forecast_date', params.endDate),
      Query.orderAsc('forecast_date')
    ]
  );

  return data.documents.map(mapToInventoryForecast);
};

// Get item condition history
export const getItemConditionHistory = async (itemId: string) => {
  const reports = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.CONDITION_REPORTS,
    [
      Query.equal('item_id', itemId),
      Query.orderDesc('reported_at')
    ]
  );

  const reportsWithMedia = await Promise.all(
    reports.documents.map(async (report) => {
      const media = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.CONDITION_REPORT_MEDIA,
        [Query.equal('report_id', report.$id)]
      );
      
      const conditionReport = mapToConditionReport(report);
      conditionReport.media = media.documents.map(mapToConditionReportMedia);
      
      return conditionReport;
    })
  );

  return reportsWithMedia;
};

// Get maintenance alerts
export const getMaintenanceAlerts = async () => {
  const reports = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.CONDITION_REPORTS,
    [
      Query.equal('condition', ['damaged', 'requires_maintenance']),
      Query.orderDesc('reported_at')
    ]
  );

  const reportsWithItems = await Promise.all(
    reports.documents.map(async (report) => {
      const item = await databases.getDocument(
        DATABASE_ID,
        COLLECTIONS.INVENTORY_ITEMS,
        report.item_id
      );
      
      const conditionReport = mapToConditionReport(report);
      return {
        ...conditionReport,
        item: { name: item.name }
      };
    })
  );

  return reportsWithItems;
};

// Add collaboration comment
export const addComment = async (
  eventId: string,
  content: string,
  parentId?: string,
  mentionedUsers: string[] = []
) => {
  const comment = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.COLLABORATION_COMMENTS,
    ID.unique(),
    {
      event_id: eventId,
      parent_id: parentId,
      content,
      mentioned_users: mentionedUsers,
      created_at: new Date().toISOString()
    }
  );

  return comment;
};

// Get event comments
export const getEventComments = async (eventId: string) => {
  const comments = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.COLLABORATION_COMMENTS,
    [
      Query.equal('event_id', eventId),
      Query.orderAsc('created_at')
    ]
  );

  const commentsWithUsers = await Promise.all(
    comments.documents.map(async (comment) => {
      const user = await databases.getDocument(
        DATABASE_ID,
        'users',
        comment.user_id
      );
      return {
        ...comment,
        id: comment.$id,
        user: {
          name: user.name,
          avatar_url: user.avatar_url
        }
      };
    })
  );

  return commentsWithUsers;
};
