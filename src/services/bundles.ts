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
    const { data: bundle, error: bundleError } = await supabase
      .from('inventory_bundles')
      .insert({
        name: input.name,
        description: input.description,
        image_url: input.imageUrl,
        is_public: input.isPublic
      })
      .select()
      .single();

    if (bundleError) throw bundleError;

    // Add bundle items
    if (input.items.length > 0) {
      const { error: itemsError } = await supabase
        .from('bundle_items')
        .insert(
          input.items.map((item: CreateBundleInput['items'][0]) => ({
            bundle_id: bundle.id,
            item_id: item.itemId,
            nested_bundle_id: item.nestedBundleId,
            quantity: item.quantity
          }))
        );

      if (itemsError) throw itemsError;
    }

    // Add tags
    if (input.tags && input.tags.length > 0) {
      const { error: tagsError } = await supabase
        .from('bundle_tags')
        .insert(
          input.tags.map((tag: string) => ({
            bundle_id: bundle.id,
            tag
          }))
        );

      if (tagsError) throw tagsError;
    }

    // Add pricing if provided
    if (input.pricing) {
      const { error: pricingError } = await supabase
        .from('bundle_pricing')
        .insert({
          bundle_id: bundle.id,
          discount_type: input.pricing.discountType,
          discount_value: input.pricing.discountValue,
          min_quantity: input.pricing.minQuantity,
          start_date: input.pricing.startDate,
          end_date: input.pricing.endDate
        });

      if (pricingError) throw pricingError;
    }

    return bundle;
  }

  async getBundles(filters?: {
    search?: string;
    tags?: string[];
    isPublic?: boolean;
  }) {
    let query = supabase
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
      `);

    if (filters?.search) {
      query = query.ilike('name', `%${filters.search}%`);
    }

    if (filters?.tags) {
      query = query.in('bundle_tags.tag', filters.tags);
    }

    if (filters?.isPublic !== undefined) {
      query = query.eq('is_public', filters.isPublic);
    }

    const { data, error } = await query;
    if (error) throw error;

    return data;
  }

  async getBundle(id: string) {
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

    if (error) throw error;
    return data;
  }

  async updateBundle(id: string, input: Partial<CreateBundleInput>) {
    const updates: Record<string, any> = {};
    
    if (input.name) updates.name = input.name;
    if (input.description !== undefined) updates.description = input.description;
    if (input.imageUrl !== undefined) updates.image_url = input.imageUrl;
    if (input.isPublic !== undefined) updates.is_public = input.isPublic;

    const { error: bundleError } = await supabase
      .from('inventory_bundles')
      .update(updates)
      .eq('id', id);

    if (bundleError) throw bundleError;

    // Update items if provided
    if (input.items) {
      // Delete existing items
      await supabase
        .from('bundle_items')
        .delete()
        .eq('bundle_id', id);

      // Insert new items
      const { error: itemsError } = await supabase
        .from('bundle_items')
        .insert(
          input.items.map((item: CreateBundleInput['items'][0]) => ({
            bundle_id: id,
            item_id: item.itemId,
            nested_bundle_id: item.nestedBundleId,
            quantity: item.quantity
          }))
        );

      if (itemsError) throw itemsError;
    }

    // Update tags if provided
    if (input.tags) {
      await supabase
        .from('bundle_tags')
        .delete()
        .eq('bundle_id', id);

      if (input.tags.length > 0) {
        const { error: tagsError } = await supabase
          .from('bundle_tags')
          .insert(
            input.tags.map((tag: string) => ({
              bundle_id: id,
              tag
            }))
          );

        if (tagsError) throw tagsError;
      }
    }

    // Update pricing if provided
    if (input.pricing) {
      await supabase
        .from('bundle_pricing')
        .delete()
        .eq('bundle_id', id);

      const { error: pricingError } = await supabase
        .from('bundle_pricing')
        .insert({
          bundle_id: id,
          discount_type: input.pricing.discountType,
          discount_value: input.pricing.discountValue,
          min_quantity: input.pricing.minQuantity,
          start_date: input.pricing.startDate,
          end_date: input.pricing.endDate
        });

      if (pricingError) throw pricingError;
    }

    return this.getBundle(id);
  }

  async deleteBundle(id: string) {
    const { error } = await supabase
      .from('inventory_bundles')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }

  async checkBundleAvailability(bundleId: string, quantity: number = 1): Promise<BundleAvailability> {
    const bundle = await this.getBundle(bundleId);
    const items = bundle.bundle_items as BundleItemDB[];

    const availability: (ItemAvailability | BundleAvailability)[] = await Promise.all(
      items.map(async (item: BundleItemDB) => {
        if (item.nested_bundle_id) {
          return this.checkBundleAvailability(
            item.nested_bundle_id,
            item.quantity * quantity
          );
        }

        const { data } = await supabase
          .from('inventory_items')
          .select('available_quantity')
          .eq('id', item.item_id)
          .single();

        return {
          itemId: item.item_id,
          required: item.quantity * quantity,
          available: data?.available_quantity || 0,
          isAvailable: (data?.available_quantity || 0) >= item.quantity * quantity
        };
      })
    );

    return {
      bundleId,
      isAvailable: availability.every((a: ItemAvailability | BundleAvailability) => a.isAvailable),
      items: availability
    };
  }
}

export const bundleService = new BundleService();
