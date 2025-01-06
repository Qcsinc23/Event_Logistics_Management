import { ID, Query } from 'appwrite';
import { databases } from '../config/appwrite';
import {
  Category,
  CategoryAttribute,
  InventoryItem,
  BatchInfo,
  SerialNumberInfo,
  MaintenanceRecord,
  AssignmentRecord,
  StorageInstruction,
  ComplianceInfo,
  CustomAttribute,
} from '../features/inventory/types/inventory';

import { DATABASE_ID, COLLECTIONS } from '../config/constants';

// Categories
export const createCategory = async (category: Omit<Category, 'id'>) => {
  const data = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.CATEGORIES,
    ID.unique(),
    category
  );
  return data;
};

export const updateCategory = async (id: string, category: Partial<Category>) => {
  const data = await databases.updateDocument(
    DATABASE_ID,
    COLLECTIONS.CATEGORIES,
    id,
    category
  );
  return data;
};

export const getCategories = async () => {
  const data = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.CATEGORIES,
    [
      Query.orderAsc('name')
    ]
  );
  return data.documents;
};

// Category Attributes
export const createCategoryAttribute = async (attribute: Omit<CategoryAttribute, 'id'>) => {
  const data = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.CATEGORY_ATTRIBUTES,
    ID.unique(),
    attribute
  );
  return data;
};

// Inventory Items
export const createInventoryItem = async (
  item: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt' | 'lastInventoryCount'>,
  customAttributes: Omit<CustomAttribute, 'id'>[],
  storageInstructions: Omit<StorageInstruction, 'id'>[],
  complianceInfo?: Omit<ComplianceInfo, 'id'>
) => {
  // Create main inventory item
  const itemData = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.INVENTORY_ITEMS,
    ID.unique(),
    item
  );

  // Create custom attributes
  if (customAttributes.length > 0) {
    await Promise.all(customAttributes.map(attr =>
      databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.CUSTOM_ATTRIBUTES,
        ID.unique(),
        { ...attr, item_id: itemData.$id }
      )
    ));
  }

  // Create storage instructions
  if (storageInstructions.length > 0) {
    await Promise.all(storageInstructions.map(instr =>
      databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.STORAGE_INSTRUCTIONS,
        ID.unique(),
        { ...instr, item_id: itemData.$id }
      )
    ));
  }

  // Create compliance info if provided
  if (complianceInfo) {
    await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.COMPLIANCE_INFO,
      ID.unique(),
      { ...complianceInfo, item_id: itemData.$id }
    );
  }

  return itemData;
};

export const updateInventoryItem = async (
  id: string,
  item: Partial<InventoryItem>,
  customAttributes?: Omit<CustomAttribute, 'id'>[],
  storageInstructions?: Omit<StorageInstruction, 'id'>[],
  complianceInfo?: Omit<ComplianceInfo, 'id'>
) => {
  // Update main inventory item
  const itemData = await databases.updateDocument(
    DATABASE_ID,
    COLLECTIONS.INVENTORY_ITEMS,
    id,
    item
  );

  // Update custom attributes if provided
  if (customAttributes !== undefined) {
    // Delete existing attributes
    const existingAttrs = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.CUSTOM_ATTRIBUTES,
      [Query.equal('item_id', id)]
    );
    await Promise.all(existingAttrs.documents.map(attr =>
      databases.deleteDocument(DATABASE_ID, COLLECTIONS.CUSTOM_ATTRIBUTES, attr.$id)
    ));

    // Create new attributes
    if (customAttributes.length > 0) {
      await Promise.all(customAttributes.map(attr =>
        databases.createDocument(
          DATABASE_ID,
          COLLECTIONS.CUSTOM_ATTRIBUTES,
          ID.unique(),
          { ...attr, item_id: id }
        )
      ));
    }
  }

  // Update storage instructions if provided
  if (storageInstructions !== undefined) {
    // Delete existing instructions
    const existingInstr = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.STORAGE_INSTRUCTIONS,
      [Query.equal('item_id', id)]
    );
    await Promise.all(existingInstr.documents.map(instr =>
      databases.deleteDocument(DATABASE_ID, COLLECTIONS.STORAGE_INSTRUCTIONS, instr.$id)
    ));

    // Create new instructions
    if (storageInstructions.length > 0) {
      await Promise.all(storageInstructions.map(instr =>
        databases.createDocument(
          DATABASE_ID,
          COLLECTIONS.STORAGE_INSTRUCTIONS,
          ID.unique(),
          { ...instr, item_id: id }
        )
      ));
    }
  }

  // Update compliance info if provided
  if (complianceInfo !== undefined) {
    // Delete existing compliance info
    const existingComp = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.COMPLIANCE_INFO,
      [Query.equal('item_id', id)]
    );
    await Promise.all(existingComp.documents.map(comp =>
      databases.deleteDocument(DATABASE_ID, COLLECTIONS.COMPLIANCE_INFO, comp.$id)
    ));

    // Create new compliance info if not null
    if (complianceInfo) {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.COMPLIANCE_INFO,
        ID.unique(),
        { ...complianceInfo, item_id: id }
      );
    }
  }

  return itemData;
};

export const getInventoryItem = async (id: string) => {
  const [item, customAttrs, batches, serialNumbers, storageInstr, complianceInfo] = await Promise.all([
    databases.getDocument(DATABASE_ID, COLLECTIONS.INVENTORY_ITEMS, id),
    databases.listDocuments(DATABASE_ID, COLLECTIONS.CUSTOM_ATTRIBUTES, [Query.equal('item_id', id)]),
    databases.listDocuments(DATABASE_ID, COLLECTIONS.BATCHES, [Query.equal('item_id', id)]),
    databases.listDocuments(DATABASE_ID, COLLECTIONS.SERIAL_NUMBERS, [Query.equal('item_id', id)]),
    databases.listDocuments(DATABASE_ID, COLLECTIONS.STORAGE_INSTRUCTIONS, [Query.equal('item_id', id)]),
    databases.listDocuments(DATABASE_ID, COLLECTIONS.COMPLIANCE_INFO, [Query.equal('item_id', id)])
  ]);

  // Get maintenance and assignment records for each serial number
  const serialNumbersWithHistory = await Promise.all(
    serialNumbers.documents.map(async (sn) => {
      const [maintenance, assignments] = await Promise.all([
        databases.listDocuments(DATABASE_ID, COLLECTIONS.MAINTENANCE_RECORDS, [Query.equal('serial_number_id', sn.$id)]),
        databases.listDocuments(DATABASE_ID, COLLECTIONS.ASSIGNMENT_RECORDS, [Query.equal('serial_number_id', sn.$id)])
      ]);
      return {
        ...sn,
        maintenance_records: maintenance.documents,
        assignment_records: assignments.documents
      };
    })
  );

  return {
    ...item,
    custom_attributes: customAttrs.documents,
    batches: batches.documents,
    serial_numbers: serialNumbersWithHistory,
    storage_instructions: storageInstr.documents,
    compliance_info: complianceInfo.documents[0] || null
  };
};

export const getInventoryItems = async () => {
  const data = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.INVENTORY_ITEMS,
    [Query.orderAsc('name')]
  );
  return data.documents;
};

// Batch Management
export const createBatch = async (batch: Omit<BatchInfo, 'id'>) => {
  const data = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.BATCHES,
    ID.unique(),
    batch
  );
  return data;
};

export const updateBatch = async (id: string, batch: Partial<BatchInfo>) => {
  const data = await databases.updateDocument(
    DATABASE_ID,
    COLLECTIONS.BATCHES,
    id,
    batch
  );
  return data;
};

// Serial Number Management
export const createSerialNumber = async (
  serialNumber: Omit<SerialNumberInfo, 'id' | 'maintenanceHistory' | 'assignmentHistory'>
) => {
  const data = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.SERIAL_NUMBERS,
    ID.unique(),
    serialNumber
  );
  return data;
};

export const updateSerialNumber = async (id: string, update: Partial<SerialNumberInfo>) => {
  const data = await databases.updateDocument(
    DATABASE_ID,
    COLLECTIONS.SERIAL_NUMBERS,
    id,
    update
  );
  return data;
};

// Maintenance Records
export const addMaintenanceRecord = async (record: Omit<MaintenanceRecord, 'id'>) => {
  const data = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.MAINTENANCE_RECORDS,
    ID.unique(),
    record
  );
  return data;
};

// Assignment Records
export const addAssignmentRecord = async (record: Omit<AssignmentRecord, 'id'>) => {
  const data = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.ASSIGNMENT_RECORDS,
    ID.unique(),
    record
  );
  return data;
};

// Storage Instructions
export const updateStorageInstructions = async (
  itemId: string,
  instructions: Omit<StorageInstruction, 'id'>[]
) => {
  // Delete existing instructions
  const existingInstr = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.STORAGE_INSTRUCTIONS,
    [Query.equal('item_id', itemId)]
  );
  await Promise.all(existingInstr.documents.map(instr =>
    databases.deleteDocument(DATABASE_ID, COLLECTIONS.STORAGE_INSTRUCTIONS, instr.$id)
  ));

  // Create new instructions
  if (instructions.length > 0) {
    await Promise.all(instructions.map(instr =>
      databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.STORAGE_INSTRUCTIONS,
        ID.unique(),
        { ...instr, item_id: itemId }
      )
    ));
  }
};

// Compliance Info
export const updateComplianceInfo = async (
  itemId: string,
  info: Omit<ComplianceInfo, 'id'> | null
) => {
  // Delete existing compliance info
  const existingComp = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.COMPLIANCE_INFO,
    [Query.equal('item_id', itemId)]
  );
  await Promise.all(existingComp.documents.map(comp =>
    databases.deleteDocument(DATABASE_ID, COLLECTIONS.COMPLIANCE_INFO, comp.$id)
  ));

  // Create new compliance info if provided
  if (info) {
    await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.COMPLIANCE_INFO,
      ID.unique(),
      { ...info, item_id: itemId }
    );
  }
};
