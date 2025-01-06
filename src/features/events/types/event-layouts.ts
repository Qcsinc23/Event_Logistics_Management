export interface EventLayout {
  id: string;
  event_id: string;
  name: string;
  layout_data: {
    elements: {
      id: string;
      type: 'table' | 'stage' | 'booth' | 'entrance' | 'exit' | 'wall' | 'custom';
      position: { x: number; y: number };
      dimensions: { width: number; height: number };
      rotation?: number;
      properties?: Record<string, any>;
    }[];
    dimensions: {
      width: number;
      height: number;
    };
    grid?: {
      enabled: boolean;
      size: number;
    };
  };
  version: number;
  created_at: string;
  updated_at: string;
}
