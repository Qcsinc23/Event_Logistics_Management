import { supabase } from '../utils/supabase/client';
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

// Categories
export const createCategory = async (category: Omit<Category, 'id'>) => {
  const { data, error } = await supabase
    .from('categories')
    .insert([category])
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateCategory = async (id: string, category: Partial<Category>) => {
  const { data, error } = await supabase
    .from('categories')
    .update(category)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select(`
      *,
      attributes:category_attributes(*)
    `)
    .order('name');
  if (error) throw error;
  return data;
};

// Category Attributes
export const createCategoryAttribute = async (attribute: Omit<CategoryAttribute, 'id'>) => {
  const { data, error } = await supabase
    .from('category_attributes')
    .insert([attribute])
    .select()
    .single();
  if (error) throw error;
  return data;
};

// Inventory Items
export const createInventoryItem = async (
  item: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt' | 'lastInventoryCount'>,
  customAttributes: Omit<CustomAttribute, 'id'>[],
  storageInstructions: Omit<StorageInstruction, 'id'>[],
  complianceInfo?: Omit<ComplianceInfo, 'id'>
) => {
  const { data: itemData, error: itemError } = await supabase
    .from('inventory_items')
    .insert([item])
    .select()
    .single();
  
  if (itemError) throw itemError;

  // Insert custom attributes
  if (customAttributes.length > 0) {
    const { error: attrError } = await supabase
      .from('custom_attributes')
      .insert(
        customAttributes.map(attr => ({
          ...attr,
          item_id: itemData.id
        }))
      );
    if (attrError) throw attrError;
  }

  // Insert storage instructions
  if (storageInstructions.length > 0) {
    const { error: instrError } = await supabase
      .from('storage_instructions')
      .insert(
        storageInstructions.map(instr => ({
          ...instr,
          item_id: itemData.id
        }))
      );
    if (instrError) throw instrError;
  }

  // Insert compliance info if provided
  if (complianceInfo) {
    const { error: compError } = await supabase
      .from('compliance_info')
      .insert([{ ...complianceInfo, item_id: itemData.id }]);
    if (compError) throw compError;
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
  const { data: itemData, error: itemError } = await supabase
    .from('inventory_items')
    .update(item)
    .eq('id', id)
    .select()
    .single();
  
  if (itemError) throw itemError;

  // Update custom attributes if provided
  if (customAttributes) {
    // Delete existing attributes
    await supabase
      .from('custom_attributes')
      .delete()
      .eq('item_id', id);

    // Insert new attributes
    if (customAttributes.length > 0) {
      const { error: attrError } = await supabase
        .from('custom_attributes')
        .insert(
          customAttributes.map(attr => ({
            ...attr,
            item_id: id
          }))
        );
      if (attrError) throw attrError;
    }
  }

  // Update storage instructions if provided
  if (storageInstructions) {
    // Delete existing instructions
    await supabase
      .from('storage_instructions')
      .delete()
      .eq('item_id', id);

    // Insert new instructions
    if (storageInstructions.length > 0) {
      const { error: instrError } = await supabase
        .from('storage_instructions')
        .insert(
          storageInstructions.map(instr => ({
            ...instr,
            item_id: id
          }))
        );
      if (instrError) throw instrError;
    }
  }

  // Update compliance info if provided
  if (complianceInfo !== undefined) {
    // Delete existing compliance info
    await supabase
      .from('compliance_info')
      .delete()
      .eq('item_id', id);

    // Insert new compliance info if not null
    if (complianceInfo) {
      const { error: compError } = await supabase
        .from('compliance_info')
        .insert([{ ...complianceInfo, item_id: id }]);
      if (compError) throw compError;
    }
  }

  return itemData;
};

export const getInventoryItem = async (id: string) => {
  const { data, error } = await supabase
    .from('inventory_items')
    .select(`
      *,
      category:categories(*),
      custom_attributes(*),
      batches(*),
      serial_numbers(
        *,
        maintenance_records(*),
        assignment_records(*)
      ),
      storage_instructions(*),
      compliance_info(*)
    `)
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
};

export const getInventoryItems = async () => {
  const { data, error } = await supabase
    .from('inventory_items')
    .select(`
      *,
      category:categories(*)
    `)
    .order('name');
  
  if (error) throw error;
  return data;
};

// Batch Management
export const createBatch = async (batch: Omit<BatchInfo, 'id'>) => {
  const { data, error } = await supabase
    .from('batches')
    .insert([batch])
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateBatch = async (itemId: string, batchNumber: string, batch: Partial<BatchInfo>) => {
  const { data, error } = await supabase
    .from('batches')
    .update(batch)
    .match({ item_id: itemId, batch_number: batchNumber })
    .select()
    .single();
  if (error) throw error;
  return data;
};

// Serial Number Management
export const createSerialNumber = async (
  serialNumber: Omit<SerialNumberInfo, 'id' | 'maintenanceHistory' | 'assignmentHistory'>
) => {
  const { data, error } = await supabase
    .from('serial_numbers')
    .insert([serialNumber])
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateSerialNumber = async (
  itemId: string,
  serialNumber: string,
  update: Partial<SerialNumberInfo>
) => {
  const { data, error } = await supabase
    .from('serial_numbers')
    .update(update)
    .match({ item_id: itemId, serial_number: serialNumber })
    .select()
    .single();
  if (error) throw error;
  return data;
};

// Maintenance Records
export const addMaintenanceRecord = async (record: Omit<MaintenanceRecord, 'id'>) => {
  const { data, error } = await supabase
    .from('maintenance_records')
    .insert([record])
    .select()
    .single();
  if (error) throw error;
  return data;
};

// Assignment Records
export const addAssignmentRecord = async (record: Omit<AssignmentRecord, 'id'>) => {
  const { data, error } = await supabase
    .from('assignment_records')
    .insert([record])
    .select()
    .single();
  if (error) throw error;
  return data;
};

// Storage Instructions
export const updateStorageInstructions = async (
  itemId: string,
  instructions: Omit<StorageInstruction, 'id'>[]
) => {
  // Delete existing instructions
  await supabase
    .from('storage_instructions')
    .delete()
    .eq('item_id', itemId);

  // Insert new instructions
  if (instructions.length > 0) {
    const { error } = await supabase
      .from('storage_instructions')
      .insert(
        instructions.map(instr => ({
          ...instr,
          item_id: itemId
        }))
      );
    if (error) throw error;
  }
};

// Compliance Info
export const updateComplianceInfo = async (
  itemId: string,
  info: Omit<ComplianceInfo, 'id'> | null
) => {
  // Delete existing compliance info
  await supabase
    .from('compliance_info')
    .delete()
    .eq('item_id', itemId);

  // Insert new compliance info if provided
  if (info) {
    const { error } = await supabase
      .from('compliance_info')
      .insert([{ ...info, item_id: itemId }]);
    if (error) throw error;
  }
};
