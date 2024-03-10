-- Create bundles table
CREATE TABLE inventory_bundles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_url TEXT,
    created_by UUID REFERENCES auth.users(id),
    is_public BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create bundle items table for both individual items and nested bundles
CREATE TABLE bundle_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    bundle_id UUID REFERENCES inventory_bundles(id) ON DELETE CASCADE,
    item_id UUID, -- References inventory_items
    nested_bundle_id UUID REFERENCES inventory_bundles(id),
    quantity INTEGER NOT NULL,
    CONSTRAINT item_or_bundle CHECK (
        (item_id IS NOT NULL AND nested_bundle_id IS NULL) OR
        (item_id IS NULL AND nested_bundle_id IS NOT NULL)
    )
);

-- Create bundle tags table
CREATE TABLE bundle_tags (
    bundle_id UUID REFERENCES inventory_bundles(id) ON DELETE CASCADE,
    tag VARCHAR(50),
    PRIMARY KEY (bundle_id, tag)
);

-- Create bundle pricing table
CREATE TABLE bundle_pricing (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    bundle_id UUID REFERENCES inventory_bundles(id) ON DELETE CASCADE,
    discount_type VARCHAR(20) CHECK (discount_type IN ('percentage', 'fixed_amount')),
    discount_value DECIMAL(10, 2) NOT NULL,
    min_quantity INTEGER DEFAULT 1,
    start_date TIMESTAMPTZ,
    end_date TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for better query performance
CREATE INDEX idx_bundle_items_bundle_id ON bundle_items(bundle_id);
CREATE INDEX idx_bundle_items_item_id ON bundle_items(item_id);
CREATE INDEX idx_bundle_tags_bundle_id ON bundle_tags(bundle_id);
CREATE INDEX idx_bundle_pricing_bundle_id ON bundle_pricing(bundle_id);

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_bundle_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_bundle_timestamp
    BEFORE UPDATE ON inventory_bundles
    FOR EACH ROW
    EXECUTE FUNCTION update_bundle_timestamp();
