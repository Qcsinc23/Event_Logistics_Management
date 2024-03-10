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
    FOR UPDATE USING (created_by = auth.uid())
    WITH CHECK (auth.role() = 'authenticated');

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

CREATE POLICY "Allow bundle item insert" ON bundle_items
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_id 
            AND b.created_by = auth.uid()
        )
    );

CREATE POLICY "Allow bundle item update" ON bundle_items
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_id 
            AND b.created_by = auth.uid()
        )
    );

CREATE POLICY "Allow bundle item delete" ON bundle_items
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_id 
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

CREATE POLICY "Allow bundle tags insert" ON bundle_tags
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_id 
            AND b.created_by = auth.uid()
        )
    );

CREATE POLICY "Allow bundle tags update" ON bundle_tags
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_id 
            AND b.created_by = auth.uid()
        )
    );

CREATE POLICY "Allow bundle tags delete" ON bundle_tags
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_id 
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

CREATE POLICY "Allow bundle pricing insert" ON bundle_pricing
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_id 
            AND b.created_by = auth.uid()
        )
    );

CREATE POLICY "Allow bundle pricing update" ON bundle_pricing
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_id 
            AND b.created_by = auth.uid()
        )
    );

CREATE POLICY "Allow bundle pricing delete" ON bundle_pricing
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM inventory_bundles b 
            WHERE b.id = bundle_id 
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

-- Create stored procedure for atomic bundle updates
CREATE OR REPLACE FUNCTION update_bundle(
  p_bundle_id UUID,
  p_name TEXT DEFAULT NULL,
  p_description TEXT DEFAULT NULL,
  p_image_url TEXT DEFAULT NULL,
  p_is_public BOOLEAN DEFAULT NULL,
  p_items JSONB DEFAULT NULL,
  p_tags JSONB DEFAULT NULL,
  p_pricing JSONB DEFAULT NULL
) RETURNS VOID AS $$
DECLARE
  v_bundle_exists BOOLEAN;
  v_user_id UUID;
BEGIN
  -- Get current user ID
  v_user_id := auth.uid();
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Check if bundle exists and belongs to user
  SELECT EXISTS (
    SELECT 1 FROM inventory_bundles 
    WHERE id = p_bundle_id AND created_by = v_user_id
  ) INTO v_bundle_exists;

  IF NOT v_bundle_exists THEN
    RAISE EXCEPTION 'Bundle not found or access denied';
  END IF;

  -- Validate items if provided
  IF p_items IS NOT NULL THEN
    -- Check for valid item references
    IF EXISTS (
      SELECT 1
      FROM jsonb_array_elements(p_items) AS item
      LEFT JOIN inventory_items ON (item->>'item_id')::UUID = inventory_items.id
      LEFT JOIN inventory_bundles ON (item->>'nested_bundle_id')::UUID = inventory_bundles.id
      WHERE 
        (item->>'item_id' IS NOT NULL AND inventory_items.id IS NULL) OR
        (item->>'nested_bundle_id' IS NOT NULL AND inventory_bundles.id IS NULL)
    ) THEN
      RAISE EXCEPTION 'Invalid item or nested bundle reference';
    END IF;

    -- Check for circular references
    IF EXISTS (
      WITH RECURSIVE bundle_tree AS (
        -- Base case: direct nested bundles
        SELECT 
          p_bundle_id AS root_id,
          (item->>'nested_bundle_id')::UUID AS bundle_id,
          1 AS level
        FROM jsonb_array_elements(p_items) AS item
        WHERE item->>'nested_bundle_id' IS NOT NULL
        
        UNION ALL
        
        -- Recursive case: nested bundles of nested bundles
        SELECT
          bt.root_id,
          bi.nested_bundle_id,
          bt.level + 1
        FROM bundle_tree bt
        JOIN bundle_items bi ON bi.bundle_id = bt.bundle_id
        WHERE bi.nested_bundle_id IS NOT NULL
      )
      SELECT 1 FROM bundle_tree WHERE bundle_id = root_id
    ) THEN
      RAISE EXCEPTION 'Circular bundle reference detected';
    END IF;
  END IF;
  -- Update bundle details
  UPDATE inventory_bundles
  SET
    name = COALESCE(p_name, name),
    description = COALESCE(p_description, description),
    image_url = COALESCE(p_image_url, image_url),
    is_public = COALESCE(p_is_public, is_public),
    updated_at = NOW()
  WHERE id = p_bundle_id AND created_by = auth.uid();

  -- Update items if provided
  IF p_items IS NOT NULL THEN
    -- Delete existing items
    DELETE FROM bundle_items WHERE bundle_id = p_bundle_id;
    
    -- Insert new items
    IF jsonb_array_length(p_items) > 0 THEN
      INSERT INTO bundle_items (bundle_id, item_id, nested_bundle_id, quantity)
      SELECT 
        p_bundle_id,
        (item->>'item_id')::UUID,
        (item->>'nested_bundle_id')::UUID,
        (item->>'quantity')::INTEGER
      FROM jsonb_array_elements(p_items) AS item;
    END IF;
  END IF;

  -- Update tags if provided
  IF p_tags IS NOT NULL THEN
    -- Delete existing tags
    DELETE FROM bundle_tags WHERE bundle_id = p_bundle_id;
    
    -- Insert new tags
    IF jsonb_array_length(p_tags) > 0 THEN
      INSERT INTO bundle_tags (bundle_id, tag)
      SELECT p_bundle_id, tag::TEXT
      FROM jsonb_array_elements_text(p_tags) AS tag;
    END IF;
  END IF;

  -- Update pricing if provided
  IF p_pricing IS NOT NULL THEN
    -- Delete existing pricing
    DELETE FROM bundle_pricing WHERE bundle_id = p_bundle_id;
    
    -- Insert new pricing
    INSERT INTO bundle_pricing (
      bundle_id,
      discount_type,
      discount_value,
      min_quantity,
      start_date,
      end_date
    )
    VALUES (
      p_bundle_id,
      p_pricing->>'discount_type',
      (p_pricing->>'discount_value')::DECIMAL,
      (p_pricing->>'min_quantity')::INTEGER,
      (p_pricing->>'start_date')::TIMESTAMP WITH TIME ZONE,
      (p_pricing->>'end_date')::TIMESTAMP WITH TIME ZONE
    );
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION update_bundle TO authenticated;
