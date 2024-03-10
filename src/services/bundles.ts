import { supabase } from '../utils/supabase/client';
import { InventoryBundle } from '../features/inventory/types/inventory';

export interface BundleItem {
  id: string;
  bundleId: string;
  itemId?: string;
  nestedBundleId?: string;
  quantity: number;
}

export interface BundlePricing {
  id: string;
  bundleId: string;
  discountType: 'percentage' | 'fixed_amount';
  discountValue: number;
  minQuantity: number;
  startDate?: Date;
  endDate?: Date;
}

export interface CreateBundleInput {
  name: string;
  description?: string;
  imageUrl?: string;
  isPublic?: boolean;
  items: {
    itemId?: string;
    nestedBundleId?: string;
    quantity: number;
  }[];
  tags?: string[];
  pricing?: Omit<BundlePricing, 'id' | 'bundleId'>;
}

interface BundleItemDB {
  id: string;
  item_id?: string;
  nested_bundle_id?: string;
  quantity: number;
}

interface ItemAvailability {
  itemId?: string;
  required: number;
  available: number;
  isAvailable: boolean;
}

interface BundleAvailability {
  bundleId: string;
  isAvailable: boolean;
  items: (ItemAvailability | BundleAvailability)[];
}

class BundleService {
  async createBundle(input: CreateBundleInput) {
    try {
      // Validate required fields
      if (!input.name?.trim()) {
        throw new Error('Bundle name is required');
      }

      if (!input.items?.length) {
        throw new Error('Bundle must contain at least one item');
      }

      // Validate items
      const invalidItems = input.items.filter(item => !item.itemId && !item.nestedBundleId);
      if (invalidItems.length > 0) {
        throw new Error('Each bundle item must be either an inventory item or a nested bundle');
      }

      // Get current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;
      if (!user) throw new Error('Not authenticated');

      // Create bundle
      const { data: bundle, error: bundleError } = await supabase
        .from('inventory_bundles')
        .insert({
          name: input.name.trim(),
          description: input.description?.trim(),
          image_url: input.imageUrl?.trim(),
          is_public: input.isPublic,
          created_by: user.id
        })
        .select()
        .single();

      if (bundleError) {
        console.error('Error creating bundle:', bundleError);
        throw bundleError;
      }

      if (!bundle) {
        throw new Error('Failed to create bundle');
      }

      // Add bundle items
      if (input.items.length > 0) {
        const { error: itemsError } = await supabase
          .from('bundle_items')
          .insert(
            input.items.map(item => ({
              bundle_id: bundle.id,
              item_id: item.itemId,
              nested_bundle_id: item.nestedBundleId,
              quantity: Math.max(1, Math.round(item.quantity)) // Ensure positive integer
            }))
          );

        if (itemsError) {
          console.error('Error adding bundle items:', itemsError);
          // Cleanup: delete the bundle since items failed
          await this.deleteBundle(bundle.id).catch(console.error);
          throw itemsError;
        }
      }

      // Add tags
      if (input.tags?.length) {
        const validTags = input.tags
          .map(tag => tag?.trim())
          .filter((tag): tag is string => !!tag);

        if (validTags.length > 0) {
          const { error: tagsError } = await supabase
            .from('bundle_tags')
            .insert(
              validTags.map(tag => ({
                bundle_id: bundle.id,
                tag
              }))
            );

          if (tagsError) {
            console.error('Error adding bundle tags:', tagsError);
            // Continue even if tags fail
          }
        }
      }

      // Add pricing if provided
      if (input.pricing) {
        const { error: pricingError } = await supabase
          .from('bundle_pricing')
          .insert({
            bundle_id: bundle.id,
            discount_type: input.pricing.discountType,
            discount_value: Math.max(0, input.pricing.discountValue), // Ensure non-negative
            min_quantity: Math.max(1, Math.round(input.pricing.minQuantity)), // Ensure positive integer
            start_date: input.pricing.startDate,
            end_date: input.pricing.endDate
          });

        if (pricingError) {
          console.error('Error adding bundle pricing:', pricingError);
          // Continue even if pricing fails
        }
      }

      // Get the complete bundle with all relations
      return this.getBundle(bundle.id);
    } catch (error) {
      console.error('Error in createBundle:', error);
      throw error;
    }
  }

  async getBundles(filters?: {
    search?: string;
    tags?: string[];
    isPublic?: boolean;
  }) {
    try {
      // Get current user
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError) throw authError;
      if (!user) throw new Error('Not authenticated');

      // Build query
      let query = supabase
        .from('inventory_bundles')
        .select(`
          *,
          bundle_items!inner (
            id,
            item_id,
            nested_bundle_id,
            quantity,
            inventory_items (
              id,
              name,
              available_quantity
            )
          ),
          bundle_tags (
            tag
          ),
          bundle_pricing (
            id,
            discount_type,
            discount_value,
            min_quantity,
            start_date,
            end_date
          )
        `);

      // Add filter for user's own bundles or public bundles
      query = query.or(`is_public.eq.true,created_by.eq.${user.id}`);

      // Apply search filter
      if (filters?.search) {
        const sanitizedSearch = filters.search.trim().replace(/[%_]/g, '\\$&');
        query = query.ilike('name', `%${sanitizedSearch}%`);
      }

      // Apply tag filter
      if (filters?.tags?.length) {
        const validTags = filters.tags
          .map(tag => tag?.trim())
          .filter((tag): tag is string => !!tag);
        if (validTags.length) {
          query = query.in('bundle_tags.tag', validTags);
        }
      }

      // Apply public/private filter
      if (filters?.isPublic !== undefined) {
        query = query.eq('is_public', filters.isPublic);
      }

      // Execute query
      const { data, error } = await query;
      if (error) {
        console.error('Error in getBundles:', error);
        throw error;
      }

      interface BundleItemWithInventory extends BundleItemDB {
        inventory_items?: {
          id: string;
          name: string;
          available_quantity: number;
        } | null;
      }

      // Process and return results
      return (data || []).map(bundle => ({
        ...bundle,
        bundle_items: bundle.bundle_items?.map((item: BundleItemWithInventory) => ({
          ...item,
          inventory_items: item.inventory_items ? {
            ...item.inventory_items,
            // Ensure available_quantity is a number
            available_quantity: Number(item.inventory_items.available_quantity) || 0
          } : null
        }))
      }));
    } catch (error) {
      console.error('Error in getBundles:', error);
      throw error;
    }
  }

  async getBundle(id: string) {
    try {
      const { data, error } = await supabase
        .from('inventory_bundles')
        .select(`
          *,
          bundle_items (
            id,
            item_id,
            nested_bundle_id,
            quantity
          ),
          bundle_tags (
            tag
          ),
          bundle_pricing (
            *
          )
        `)
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          throw new Error('Bundle not found');
        }
        throw error;
      }

      if (!data) {
        throw new Error('Bundle not found');
      }

      return data;
    } catch (error) {
      console.error('Error in getBundle:', error);
      throw error;
    }
  }

  async updateBundle(id: string, input: Partial<CreateBundleInput>) {
    try {
      // Start a Supabase transaction
      const { data: bundle, error: bundleError } = await supabase.rpc('update_bundle', {
        p_bundle_id: id,
        p_name: input.name,
        p_description: input.description,
        p_image_url: input.imageUrl,
        p_is_public: input.isPublic,
        p_items: input.items ? JSON.stringify(input.items.map(item => ({
          item_id: item.itemId,
          nested_bundle_id: item.nestedBundleId,
          quantity: item.quantity
        }))) : null,
        p_tags: input.tags ? JSON.stringify(input.tags) : null,
        p_pricing: input.pricing ? JSON.stringify({
          discount_type: input.pricing.discountType,
          discount_value: input.pricing.discountValue,
          min_quantity: input.pricing.minQuantity,
          start_date: input.pricing.startDate,
          end_date: input.pricing.endDate
        }) : null
      });

      if (bundleError) {
        console.error('Error updating bundle:', {
          error: bundleError,
          bundleId: id,
          input
        });
        throw bundleError;
      }

      return this.getBundle(id);
    } catch (error) {
      console.error('Error in updateBundle:', error);
      throw error;
    }
  }

  async deleteBundle(id: string) {
    try {
      // Check if bundle exists and user has permission
      const bundle = await this.getBundle(id);
      if (!bundle) {
        throw new Error('Bundle not found');
      }

      // Delete bundle (cascade will handle related records)
      const { error } = await supabase
        .from('inventory_bundles')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting bundle:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error in deleteBundle:', error);
      throw error;
    }
  }

  async checkBundleAvailability(bundleId: string, quantity: number = 1): Promise<BundleAvailability> {
    try {
      if (!bundleId) {
        throw new Error('Bundle ID is required');
      }

      // Ensure quantity is a positive integer
      const validQuantity = Math.max(1, Math.round(quantity));

      const bundle = await this.getBundle(bundleId);
      const items = bundle.bundle_items as BundleItemDB[];

      if (!items?.length) {
        throw new Error('Bundle has no items');
      }

      const availability: (ItemAvailability | BundleAvailability)[] = await Promise.all(
        items.map(async (item: BundleItemDB) => {
          try {
            if (item.nested_bundle_id) {
              return this.checkBundleAvailability(
                item.nested_bundle_id,
                item.quantity * validQuantity
              );
            }

            if (!item.item_id) {
              throw new Error('Invalid item reference');
            }

            const { data, error } = await supabase
              .from('inventory_items')
              .select('available_quantity')
              .eq('id', item.item_id)
              .single();

            if (error) {
              console.error('Error checking item availability:', error);
              throw error;
            }

            return {
              itemId: item.item_id,
              required: item.quantity * validQuantity,
              available: data?.available_quantity || 0,
              isAvailable: (data?.available_quantity || 0) >= item.quantity * validQuantity
            };
          } catch (error) {
            console.error('Error checking item/nested bundle availability:', error);
            throw error;
          }
        })
      );

      return {
        bundleId,
        isAvailable: availability.every((a: ItemAvailability | BundleAvailability) => a.isAvailable),
        items: availability
      };
    } catch (error) {
      console.error('Error in checkBundleAvailability:', error);
      throw error;
    }
  }
}

export const bundleService = new BundleService();
