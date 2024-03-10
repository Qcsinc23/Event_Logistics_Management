-- Create categories table with hierarchical structure
create table if not exists categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  parent_id uuid references categories(id),
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create category_attributes table
create table if not exists category_attributes (
  id uuid default uuid_generate_v4() primary key,
  category_id uuid references categories(id) on delete cascade not null,
  name text not null,
  type text not null check (type in ('text', 'number', 'boolean', 'date')),
  required boolean default false,
  options text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create inventory_items table with enhanced fields
create table if not exists inventory_items (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  sku text unique not null,
  category_id uuid references categories(id),
  description text,
  tracking_method text check (tracking_method in ('batch', 'serial', 'none')) default 'none',
  total_quantity integer not null default 0,
  available_quantity integer not null default 0,
  reserved_quantity integer not null default 0,
  min_quantity integer not null default 0,
  reorder_point integer not null default 0,
  unit text not null,
  default_location text,
  weight numeric,
  dimensions jsonb, -- {length, width, height, unit}
  status text check (status in ('active', 'discontinued', 'pending')) default 'active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  last_inventory_count timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create custom_attributes table for dynamic attributes
create table if not exists custom_attributes (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  attribute_id uuid references category_attributes(id) on delete cascade not null,
  value text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create batches table for batch tracking
create table if not exists batches (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  batch_number text not null,
  manufacturing_date date,
  expiration_date date,
  supplier text not null,
  quantity integer not null,
  notes text,
  location text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(item_id, batch_number)
);

-- Create serial_numbers table for serial number tracking
create table if not exists serial_numbers (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  serial_number text not null,
  status text check (status in ('available', 'reserved', 'in-use', 'maintenance', 'retired')) default 'available',
  location text not null,
  condition text check (condition in ('new', 'good', 'fair', 'poor')) default 'new',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(item_id, serial_number)
);

-- Create maintenance_records table
create table if not exists maintenance_records (
  id uuid default uuid_generate_v4() primary key,
  serial_number_id uuid references serial_numbers(id) on delete cascade not null,
  maintenance_date timestamp with time zone not null,
  maintenance_type text check (maintenance_type in ('routine', 'repair', 'inspection')) not null,
  description text not null,
  technician text not null,
  cost numeric,
  next_maintenance_date timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create assignment_records table
create table if not exists assignment_records (
  id uuid default uuid_generate_v4() primary key,
  serial_number_id uuid references serial_numbers(id) on delete cascade not null,
  event_id uuid references events(id) on delete cascade not null,
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null,
  assigned_by text not null,
  return_condition text,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create storage_instructions table
create table if not exists storage_instructions (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  instruction_type text check (instruction_type in ('storage', 'handling', 'safety')) not null,
  instruction text not null,
  priority text check (priority in ('low', 'medium', 'high')) default 'low',
  applicable_categories uuid[] not null default array[]::uuid[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create compliance_info table
create table if not exists compliance_info (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  compliance_type text check (compliance_type in ('hazardous', 'fragile', 'temperature-sensitive', 'other')) not null,
  certifications text[] not null default array[]::text[],
  handling_requirements text[] not null default array[]::text[],
  expiration_date date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS policies
alter table categories enable row level security;
alter table category_attributes enable row level security;
alter table inventory_items enable row level security;
alter table custom_attributes enable row level security;
alter table batches enable row level security;
alter table serial_numbers enable row level security;
alter table maintenance_records enable row level security;
alter table assignment_records enable row level security;
alter table storage_instructions enable row level security;
alter table compliance_info enable row level security;

-- Create policies for authenticated users
create policy "Allow authenticated read access" on categories
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on category_attributes
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on inventory_items
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on custom_attributes
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on batches
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on serial_numbers
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on maintenance_records
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on assignment_records
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on storage_instructions
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on compliance_info
  for select using (auth.role() = 'authenticated');

-- Create policies for admin users
create policy "Allow admin full access" on categories
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on category_attributes
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on inventory_items
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on custom_attributes
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on batches
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on serial_numbers
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on maintenance_records
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on assignment_records
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on storage_instructions
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on compliance_info
  for all using (auth.jwt() ->> 'role' = 'admin');

-- Create indexes for better query performance
create index if not exists categories_parent_id_idx on categories(parent_id);
create index if not exists category_attributes_category_id_idx on category_attributes(category_id);
create index if not exists inventory_items_category_id_idx on inventory_items(category_id);
create index if not exists inventory_items_sku_idx on inventory_items(sku);
create index if not exists custom_attributes_item_id_idx on custom_attributes(item_id);
create index if not exists custom_attributes_attribute_id_idx on custom_attributes(attribute_id);
create index if not exists batches_item_id_idx on batches(item_id);
create index if not exists serial_numbers_item_id_idx on serial_numbers(item_id);
create index if not exists maintenance_records_serial_number_id_idx on maintenance_records(serial_number_id);
create index if not exists assignment_records_serial_number_id_idx on assignment_records(serial_number_id);
create index if not exists assignment_records_event_id_idx on assignment_records(event_id);
create index if not exists storage_instructions_item_id_idx on storage_instructions(item_id);
create index if not exists compliance_info_item_id_idx on compliance_info(item_id);
