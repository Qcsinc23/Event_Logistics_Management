export interface CategoryAttribute {
  id: string;
  name: string;
  type: 'text' | 'number' | 'boolean' | 'date';
  required: boolean;
  options?: string[]; // For predefined values
}

export interface Category {
  id: string;
  name: string;
  parentId?: string; // For hierarchy
  attributes: CategoryAttribute[];
  description?: string;
}

export interface StorageInstruction {
  id: string;
  type: 'storage' | 'handling' | 'safety';
  instruction: string;
  priority: 'low' | 'medium' | 'high';
  applicableCategories: string[]; // Category IDs
}

export interface BatchInfo {
  batchNumber: string;
  manufacturingDate?: string;
  expirationDate?: string;
  supplier: string;
  quantity: number;
  notes?: string;
  location: string;
}

export interface SerialNumberInfo {
  serialNumber: string;
  status: 'available' | 'reserved' | 'in-use' | 'maintenance' | 'retired';
  location: string;
  condition: 'new' | 'good' | 'fair' | 'poor';
  maintenanceHistory: MaintenanceRecord[];
  assignmentHistory: AssignmentRecord[];
}

export interface MaintenanceRecord {
  id: string;
  date: string;
  type: 'routine' | 'repair' | 'inspection';
  description: string;
  technician: string;
  cost?: number;
  nextMaintenanceDate?: string;
}

export interface AssignmentRecord {
  id: string;
  eventId: string;
  startDate: string;
  endDate: string;
  assignedBy: string;
  returnCondition?: string;
  notes?: string;
}

export interface CustomAttribute {
  attributeId: string;
  value: string | number | boolean | Date;
}

export interface ComplianceInfo {
  type: 'hazardous' | 'fragile' | 'temperature-sensitive' | 'other';
  certifications: string[];
  handlingRequirements: string[];
  expirationDate?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  categoryId: string;
  description: string;
  
  // Physical attributes
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: 'cm' | 'in';
  };
  
  // Tracking
  trackingMethod: 'batch' | 'serial' | 'none';
  batches?: BatchInfo[];
  serialNumbers?: SerialNumberInfo[];
  
  // Stock management
  totalQuantity: number;
  availableQuantity: number;
  reservedQuantity: number;
  minQuantity: number;
  reorderPoint: number;
  unit: string;
  
  // Location and storage
  defaultLocation: string;
  storageInstructions: StorageInstruction[];
  
  // Additional information
  customAttributes: CustomAttribute[];
  compliance?: ComplianceInfo;
  
  // Metadata
  createdAt: string;
  updatedAt: string;
  lastInventoryCount: string;
  status: 'active' | 'discontinued' | 'pending';
}

export interface InventoryBundle {
  id: string;
  name: string;
  description: string;
  items: {
    itemId: string;
    quantity: number;
  }[];
  tags: string[];
  createdBy: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

// For inventory forecasting
export interface InventoryForecast {
  itemId: string;
  period: string;
  predictedDemand: number;
  confidenceLevel: number;
  factors: {
    seasonality: number;
    trend: number;
    events: {
      eventType: string;
      impact: number;
    }[];
  };
}
