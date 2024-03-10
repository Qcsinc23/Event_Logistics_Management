-- Enable RLS on all bundle-related tables
ALTER TABLE inventory_bundles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bundle_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE bundle_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE bundle_pricing ENABLE ROW LEVEL SECURITY;

-- Add missing foreign key constraint
ALTER TABLE bundle_items 
ADD CONSTRAINT fk_bundle_items_inventory 
FOREIGN KEY (item_id) 
REFERENCES inventory_items(id) ON DELETE CASCADE;

-- Create RLS policies for inventory_bundles
CREATE POLICY "Allow authenticated read access" ON inventory_bundles
    FOR SELECT USING (
        auth.role() = 'authenticated' AND 
        (is_public = true OR created_by = auth.uid())
    );

CREATE POLICY "Allow users to create bundles" ON inventory_bundles
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow users to update own bundles" ON inventory_bundles
    FOR UPDATE USING (created_by = auth.uid());

CREATE POLICY "Allow users to delete own bundles" ON inventory_bundles
    FOR DELETE USING (created_by = auth.uid());

-- Create RLS policies for bundle_items
CREATE POLICY "Allow bundle item read access" ON bundle_items
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_items.bundle_id 
            AND (b.is_public = true OR b.created_by = auth.uid())
        )
    );

CREATE POLICY "Allow bundle item modifications" ON bundle_items
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_items.bundle_id 
            AND b.created_by = auth.uid()
        )
    );

-- Create RLS policies for bundle_tags
CREATE POLICY "Allow bundle tags read access" ON bundle_tags
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_tags.bundle_id 
            AND (b.is_public = true OR b.created_by = auth.uid())
        )
    );

CREATE POLICY "Allow bundle tags modifications" ON bundle_tags
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_tags.bundle_id 
            AND b.created_by = auth.uid()
        )
    );

-- Create RLS policies for bundle_pricing
CREATE POLICY "Allow bundle pricing read access" ON bundle_pricing
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_pricing.bundle_id 
            AND (b.is_public = true OR b.created_by = auth.uid())
        )
    );

CREATE POLICY "Allow bundle pricing modifications" ON bundle_pricing
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_pricing.bundle_id 
            AND b.created_by = auth.uid()
        )
    );

-- Enable realtime subscriptions for collaborative features
ALTER PUBLICATION supabase_realtime ADD TABLE inventory_bundles;
ALTER PUBLICATION supabase_realtime ADD TABLE bundle_items;
ALTER PUBLICATION supabase_realtime ADD TABLE bundle_tags;
ALTER PUBLICATION supabase_realtime ADD TABLE bundle_pricing;

-- Add composite index for performance on common queries
CREATE INDEX idx_bundles_public_created ON inventory_bundles(is_public, created_by);
CREATE INDEX idx_bundle_pricing_active ON bundle_pricing(bundle_id, start_date, end_date);
