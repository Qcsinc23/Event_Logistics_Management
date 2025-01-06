import { ID, Query } from 'appwrite';
import { databases } from '../config/appwrite';
import { DATABASE_ID, COLLECTIONS } from '../config/constants';
import { jsPDF } from 'jspdf';
import Konva from 'konva';
import { EventLayout } from '../features/events/types/event-layouts';

// Helper function to map Appwrite document to EventLayout
const mapToEventLayout = (doc: any): EventLayout => ({
  id: doc.$id,
  event_id: doc.event_id,
  name: doc.name,
  layout_data: doc.layout_data,
  version: doc.version,
  created_at: doc.$createdAt,
  updated_at: doc.$updatedAt
});

export const createEventLayout = async (layout: Omit<EventLayout, 'id' | 'created_at' | 'updated_at' | 'version'>) => {
  const doc = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.EVENT_LAYOUTS,
    ID.unique(),
    {
      ...layout,
      version: 1
    }
  );

  return mapToEventLayout(doc);
};

export const updateEventLayout = async (id: string, layout: Partial<EventLayout>) => {
  // Get current version
  const currentLayout = await databases.getDocument(
    DATABASE_ID,
    COLLECTIONS.EVENT_LAYOUTS,
    id
  );

  const doc = await databases.updateDocument(
    DATABASE_ID,
    COLLECTIONS.EVENT_LAYOUTS,
    id,
    {
      ...layout,
      version: (currentLayout.version || 0) + 1,
      updated_at: new Date().toISOString()
    }
  );

  return mapToEventLayout(doc);
};

export const getEventLayout = async (id: string) => {
  const doc = await databases.getDocument(
    DATABASE_ID,
    COLLECTIONS.EVENT_LAYOUTS,
    id
  );

  return mapToEventLayout(doc);
};

export const getEventLayouts = async (eventId: string) => {
  const response = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.EVENT_LAYOUTS,
    [
      Query.equal('event_id', eventId),
      Query.orderDesc('version')
    ]
  );

  return response.documents.map(mapToEventLayout);
};

export const deleteEventLayout = async (id: string) => {
  await databases.deleteDocument(
    DATABASE_ID,
    COLLECTIONS.EVENT_LAYOUTS,
    id
  );
};

export const exportLayoutAsPng = async (stage: Konva.Stage): Promise<string> => {
  return stage.toDataURL({ pixelRatio: 2 });
};

export const exportLayoutAsPdf = async (stage: Konva.Stage): Promise<Blob> => {
  const dataUrl = stage.toDataURL({ pixelRatio: 2 });
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [stage.width(), stage.height()]
  });

  pdf.addImage(dataUrl, 'PNG', 0, 0, stage.width(), stage.height());
  return new Blob([pdf.output('blob')], { type: 'application/pdf' });
};
