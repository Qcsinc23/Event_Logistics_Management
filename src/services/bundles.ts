import { ID, Query, Models } from 'appwrite';
import { databases } from '../config/appwrite';
import { DATABASE_ID, COLLECTIONS } from '../config/constants';
import { InventoryBundle } from '../features/inventory/types/inventory';

// Helper function to map Appwrite document to InventoryBundle
const mapToInventoryBundle = async (doc: Models.Document): Promise<InventoryBundle> => {
  // Get bundle items
  const bundleItems = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.BUNDLE_ITEMS,
    [Query.equal('bundle_id', doc.$id)]
  );

  // Get bundle tags
  const bundleTags = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.BUNDLE_TAGS,
    [Query.equal('bundle_id', doc.$id)]
  );

  return {
    id: doc.$id,
    name: doc.name,
    description: doc.description,
    items: bundleItems.documents.map(item => ({
      itemId: item.item_id,
      quantity: item.quantity
    })),
    tags: bundleTags.documents.map(tag => tag.tag),
    createdBy: doc.created_by,
    isPublic: doc.is_public,
    createdAt: doc.$createdAt,
    updatedAt: doc.$updatedAt
  };
};

export interface CreateBundleInput {
  name: string;
  description: string;
  items: { itemId: string; quantity: number }[];
  tags: string[];
  isPublic: boolean;
  pricing?: {
    basePrice: number;
    discountType?: 'percentage' | 'fixed';
    discountValue?: number;
  };
}

export const createBundle = async (input: CreateBundleInput) => {
  // Create the main bundle document
  const bundle = await databases.createDocument(
    DATABASE_ID,
    COLLECTIONS.INVENTORY_BUNDLES,
    ID.unique(),
    {
      name: input.name,
      description: input.description,
      is_public: input.isPublic,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  );

  // Create bundle items
  if (input.items.length > 0) {
    await Promise.all(input.items.map(item =>
      databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.BUNDLE_ITEMS,
        ID.unique(),
        {
          bundle_id: bundle.$id,
          item_id: item.itemId,
          quantity: item.quantity
        }
      )
    ));
  }

  // Create bundle tags
  if (input.tags.length > 0) {
    await Promise.all(input.tags.map(tag =>
      databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.BUNDLE_TAGS,
        ID.unique(),
        {
          bundle_id: bundle.$id,
          tag: tag
        }
      )
    ));
  }

  // Create bundle pricing if provided
  if (input.pricing) {
    await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.BUNDLE_PRICING,
      ID.unique(),
      {
        bundle_id: bundle.$id,
        base_price: input.pricing.basePrice,
        discount_type: input.pricing.discountType,
        discount_value: input.pricing.discountValue
      }
    );
  }

  return mapToInventoryBundle(bundle);
};

export const getBundle = async (id: string) => {
  const bundle = await databases.getDocument(
    DATABASE_ID,
    COLLECTIONS.INVENTORY_BUNDLES,
    id
  );

  return mapToInventoryBundle(bundle);
};

export const listBundles = async (filters?: { isPublic?: boolean; tags?: string[] }) => {
  const queries = [];

  if (filters?.isPublic !== undefined) {
    queries.push(Query.equal('is_public', filters.isPublic));
  }

  const bundles = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.INVENTORY_BUNDLES,
    queries
  );

  const mappedBundles = await Promise.all(
    bundles.documents.map(mapToInventoryBundle)
  );

  // Filter by tags if specified
  if (filters?.tags && filters.tags.length > 0) {
    return mappedBundles.filter(bundle =>
      filters.tags!.some(tag => bundle.tags.includes(tag))
    );
  }

  return mappedBundles;
};

interface UpdateBundleInput {
  name?: string;
  description?: string;
  items?: { itemId: string; quantity: number }[];
  tags?: string[];
  isPublic?: boolean;
  pricing?: {
    basePrice: number;
    discountType?: 'percentage' | 'fixed';
    discountValue?: number;
  };
}

export const updateBundle = async (id: string, input: UpdateBundleInput) => {
  // Update main bundle document
  const updateData: any = {
    updated_at: new Date().toISOString()
  };

  if (input.name !== undefined) updateData.name = input.name;
  if (input.description !== undefined) updateData.description = input.description;
  if (input.isPublic !== undefined) updateData.is_public = input.isPublic;

  const bundle = await databases.updateDocument(
    DATABASE_ID,
    COLLECTIONS.INVENTORY_BUNDLES,
    id,
    updateData
  );

  // Update items if provided
  if (input.items) {
    // Delete existing items
    const existingItems = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.BUNDLE_ITEMS,
      [Query.equal('bundle_id', id)]
    );
    await Promise.all(existingItems.documents.map(item =>
      databases.deleteDocument(DATABASE_ID, COLLECTIONS.BUNDLE_ITEMS, item.$id)
    ));

    // Create new items
    await Promise.all(input.items.map(item =>
      databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.BUNDLE_ITEMS,
        ID.unique(),
        {
          bundle_id: id,
          item_id: item.itemId,
          quantity: item.quantity
        }
      )
    ));
  }

  // Update tags if provided
  if (input.tags) {
    // Delete existing tags
    const existingTags = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.BUNDLE_TAGS,
      [Query.equal('bundle_id', id)]
    );
    await Promise.all(existingTags.documents.map(tag =>
      databases.deleteDocument(DATABASE_ID, COLLECTIONS.BUNDLE_TAGS, tag.$id)
    ));

    // Create new tags
    await Promise.all(input.tags.map(tag =>
      databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.BUNDLE_TAGS,
        ID.unique(),
        {
          bundle_id: id,
          tag: tag
        }
      )
    ));
  }

  // Update pricing if provided
  if (input.pricing) {
    // Delete existing pricing
    const existingPricing = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.BUNDLE_PRICING,
      [Query.equal('bundle_id', id)]
    );
    await Promise.all(existingPricing.documents.map(pricing =>
      databases.deleteDocument(DATABASE_ID, COLLECTIONS.BUNDLE_PRICING, pricing.$id)
    ));

    // Create new pricing
    await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.BUNDLE_PRICING,
      ID.unique(),
      {
        bundle_id: id,
        base_price: input.pricing.basePrice,
        discount_type: input.pricing.discountType,
        discount_value: input.pricing.discountValue
      }
    );
  }

  return mapToInventoryBundle(bundle);
};

export const deleteBundle = async (id: string) => {
  // Delete related records first
  const [items, tags, pricing] = await Promise.all([
    databases.listDocuments(DATABASE_ID, COLLECTIONS.BUNDLE_ITEMS, [Query.equal('bundle_id', id)]),
    databases.listDocuments(DATABASE_ID, COLLECTIONS.BUNDLE_TAGS, [Query.equal('bundle_id', id)]),
    databases.listDocuments(DATABASE_ID, COLLECTIONS.BUNDLE_PRICING, [Query.equal('bundle_id', id)])
  ]);

  await Promise.all([
    ...items.documents.map(item => databases.deleteDocument(DATABASE_ID, COLLECTIONS.BUNDLE_ITEMS, item.$id)),
    ...tags.documents.map(tag => databases.deleteDocument(DATABASE_ID, COLLECTIONS.BUNDLE_TAGS, tag.$id)),
    ...pricing.documents.map(price => databases.deleteDocument(DATABASE_ID, COLLECTIONS.BUNDLE_PRICING, price.$id))
  ]);

  // Delete the main bundle document
  await databases.deleteDocument(
    DATABASE_ID,
    COLLECTIONS.INVENTORY_BUNDLES,
    id
  );
};

// Export bundleService object with all methods
export const bundleService = {
  createBundle,
  getBundle,
  listBundles,
  updateBundle,
  deleteBundle
};
