import { supabase } from '../utils/supabase/client';
import { jsPDF } from 'jspdf';

export interface LayoutObject {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

export interface EventLayout {
  id: string;
  event_id: string;
  name: string;
  objects: LayoutObject[];
  background_image_url?: string;
  created_at?: string;
  updated_at?: string;
  version: number;
}

export const createEventLayout = async (layout: Omit<EventLayout, 'id' | 'created_at' | 'updated_at' | 'version'>) => {
  const { data, error } = await supabase
    .from('event_layouts')
    .insert([{ ...layout, version: 1 }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateEventLayout = async (id: string, layout: Partial<EventLayout>) => {
  const { data: currentLayout } = await supabase
    .from('event_layouts')
    .select('version')
    .eq('id', id)
    .single();

  const { data, error } = await supabase
    .from('event_layouts')
    .update({ ...layout, version: (currentLayout?.version || 0) + 1 })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getEventLayout = async (id: string) => {
  const { data, error } = await supabase
    .from('event_layouts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const getEventLayouts = async (eventId: string) => {
  const { data, error } = await supabase
    .from('event_layouts')
    .select('*')
    .eq('event_id', eventId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const deleteEventLayout = async (id: string) => {
  const { error } = await supabase
    .from('event_layouts')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// Helper function to export layout as PNG
export const exportLayoutAsPng = async (stage: any): Promise<string> => {
  return new Promise((resolve) => {
    const dataURL = stage.toDataURL();
    resolve(dataURL);
  });
};

// Helper function to export layout as PDF
export const exportLayoutAsPdf = async (stage: any): Promise<Blob> => {
  const dataUrl = await exportLayoutAsPng(stage);
  
  // Create PDF using dataUrl
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [stage.width(), stage.height()]
  });
  
  pdf.addImage(dataUrl, 'PNG', 0, 0, stage.width(), stage.height());
  
  return pdf.output('blob');
};
