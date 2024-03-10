-- Insert sample categories
insert into inventory_categories (id, name, attributes) values
  ('c0a80121-1234-5678-90ab-000000000001'::uuid, 'Audio Equipment', '{"power_requirements": "text", "frequency_range": "text"}'),
  ('c0a80121-1234-5678-90ab-000000000002'::uuid, 'Microphones', '{"type": "text", "pattern": "text", "connector": "text"}'),
  ('c0a80121-1234-5678-90ab-000000000003'::uuid, 'Lighting', '{"wattage": "number", "beam_angle": "number", "color_temp": "number"}'),
  ('c0a80121-1234-5678-90ab-000000000004'::uuid, 'Stage Equipment', '{"size": "text", "weight_capacity": "number", "material": "text"}');

-- Set up category hierarchy
update inventory_categories 
set parent_id = 'c0a80121-1234-5678-90ab-000000000001'::uuid
where id = 'c0a80121-1234-5678-90ab-000000000002'::uuid;

-- Insert sample inventory items
insert into inventory_items (
  id, name, description, sku, category_id, 
  available_quantity, reserved_quantity, min_quantity,
  tracking_method, storage_requirements, unit
) values
  (
    'c0a80121-1234-5678-90ab-000000000005'::uuid,
    'Shure SM58 Microphone',
    'Professional vocal microphone',
    'MIC-SM58-001',
    'c0a80121-1234-5678-90ab-000000000002'::uuid,
    10, 2, 5,
    'serial',
    '{"temperature": "15-30C", "humidity": "45-85%"}',
    'unit'
  ),
  (
    'c0a80121-1234-5678-90ab-000000000006'::uuid,
    'LED Par Can',
    'RGB LED stage light',
    'LIGHT-PAR-001',
    'c0a80121-1234-5678-90ab-000000000003'::uuid,
    20, 5, 10,
    'batch',
    '{"temperature": "10-35C", "dust_protection": "required"}',
    'unit'
  );

-- Insert storage instructions
insert into storage_instructions (
  item_id, priority, storage_location, storage_conditions, handling_requirements, compliance_info
) values
  (
    'c0a80121-1234-5678-90ab-000000000005'::uuid,
    'medium',
    'Climate-controlled Storage Room A',
    '{"temperature": "15-30C", "humidity": "45-85%"}',
    'Handle with care, avoid dropping',
    '{"temperature_range": "15-30C", "humidity_range": "45-85%"}'
  ),
  (
    'c0a80121-1234-5678-90ab-000000000006'::uuid,
    'low',
    'Main Storage Area B',
    '{"stacking": "max 4 units", "environment": "dry area"}',
    'Keep away from water',
    '{"stacking_limit": 4, "water_protection": "required"}'
  );

-- Insert serial numbers for microphone
insert into serial_numbers (
  item_id, serial_number, status, current_location
) values
  (
    'c0a80121-1234-5678-90ab-000000000005'::uuid,
    'SM58-2024-001',
    'available',
    'Main Storage A1'
  ),
  (
    'c0a80121-1234-5678-90ab-000000000005'::uuid,
    'SM58-2024-002',
    'in_use',
    'Stage 1'
  );

-- Insert batch records for LED lights
insert into batch_records (
  item_id, batch_number, manufacture_date,
  quantity, status
) values
  (
    'c0a80121-1234-5678-90ab-000000000006'::uuid,
    'LED-2024-001',
    '2024-01-15',
    10,
    'active'
  );

-- Insert sample condition reports
insert into condition_reports (
  item_id, event_id, reported_by, condition,
  notes, reported_at
) values
  (
    'c0a80121-1234-5678-90ab-000000000005'::uuid,
    'c0a80121-1234-5678-90ab-000000000007'::uuid,
    'c0a80121-1234-5678-90ab-000000000008'::uuid,
    'good',
    'Regular maintenance check - all functions normal',
    now()
  ),
  (
    'c0a80121-1234-5678-90ab-000000000006'::uuid,
    'c0a80121-1234-5678-90ab-000000000007'::uuid,
    'c0a80121-1234-5678-90ab-000000000008'::uuid,
    'requires_cleaning',
    'Dust accumulation on lens, needs cleaning',
    now()
  );

-- Insert sample usage stats
insert into inventory_usage_stats (
  item_id, date, times_reserved,
  times_checked_out, times_returned_damaged,
  revenue_generated
) values
  (
    'c0a80121-1234-5678-90ab-000000000005'::uuid,
    current_date - interval '7 days',
    5, 5, 0, 250.00
  ),
  (
    'c0a80121-1234-5678-90ab-000000000005'::uuid,
    current_date,
    3, 2, 0, 150.00
  ),
  (
    'c0a80121-1234-5678-90ab-000000000006'::uuid,
    current_date - interval '7 days',
    8, 8, 1, 400.00
  ),
  (
    'c0a80121-1234-5678-90ab-000000000006'::uuid,
    current_date,
    4, 4, 0, 200.00
  );

-- Insert sample forecasts
insert into inventory_forecasts (
  item_id, forecast_date, predicted_demand,
  confidence_level, factors
) values
  (
    'c0a80121-1234-5678-90ab-000000000005'::uuid,
    current_date + interval '7 days',
    7,
    85.5,
    '{"seasonality": 1.2, "trend": 0.8, "events": [{"type": "concert", "impact": 1.5}]}'
  ),
  (
    'c0a80121-1234-5678-90ab-000000000006'::uuid,
    current_date + interval '7 days',
    12,
    90.0,
    '{"seasonality": 1.1, "trend": 1.2, "events": [{"type": "concert", "impact": 2.0}]}'
  );
