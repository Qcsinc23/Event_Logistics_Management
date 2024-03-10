-- Create inventory categories table
create table if not exists inventory_categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  parent_id uuid references inventory_categories(id),
  attributes jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create storage instructions table
create table if not exists storage_instructions (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  priority text check (priority in ('low', 'medium', 'high')) not null,
  instructions text not null,
  handling_requirements text,
  compliance_info jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create batch records table
create table if not exists batch_records (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  batch_number text not null,
  manufacture_date date,
  expiry_date date,
  quantity integer not null,
  status text check (status in ('active', 'depleted', 'expired', 'recalled')) not null,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(item_id, batch_number)
);

-- Create serial numbers table
create table if not exists serial_numbers (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  serial_number text not null,
  status text check (status in ('available', 'reserved', 'in_use', 'maintenance', 'retired')) not null,
  current_location text,
  maintenance_history jsonb default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(item_id, serial_number)
);

-- Add category_id to inventory_items if it doesn't exist
do $$
begin
  if not exists (
    select 1
    from information_schema.columns
    where table_name = 'inventory_items'
    and column_name = 'category_id'
  ) then
    alter table inventory_items
    add column category_id uuid references inventory_categories(id);
  end if;
end $$;

-- Add storage_requirements to inventory_items if it doesn't exist
do $$
begin
  if not exists (
    select 1
    from information_schema.columns
    where table_name = 'inventory_items'
    and column_name = 'storage_requirements'
  ) then
    alter table inventory_items
    add column storage_requirements jsonb default '{}'::jsonb;
  end if;
end $$;

-- Add tracking_method to inventory_items if it doesn't exist
do $$
begin
  if not exists (
    select 1
    from information_schema.columns
    where table_name = 'inventory_items'
    and column_name = 'tracking_method'
  ) then
    alter table inventory_items
    add column tracking_method text check (tracking_method in ('none', 'batch', 'serial')) default 'none';
  end if;
end $$;

-- Create indexes
create index if not exists inventory_categories_parent_id_idx
  on inventory_categories(parent_id);

create index if not exists storage_instructions_item_id_idx
  on storage_instructions(item_id);

create index if not exists batch_records_item_id_batch_number_idx
  on batch_records(item_id, batch_number);

create index if not exists serial_numbers_item_id_serial_number_idx
  on serial_numbers(item_id, serial_number);

-- Add RLS policies
alter table inventory_categories enable row level security;
alter table storage_instructions enable row level security;
alter table batch_records enable row level security;
alter table serial_numbers enable row level security;

-- Add category hierarchy path function
create or replace function get_category_path(category_id uuid)
returns text[] as $$
declare
  path text[];
  current_id uuid := category_id;
  current_name text;
  depth int := 0;
  max_depth constant int := 10;
begin
  while current_id is not null and depth < max_depth loop
    select name, parent_id
    into current_name, current_id
    from inventory_categories
    where id = current_id;
    
    if current_name is null then
      exit;
    end if;
    
    path := array_prepend(current_name, path);
    depth := depth + 1;
  end loop;
  
  return path;
end;
$$ language plpgsql stable;

-- Add function to check for circular references in category hierarchy
create or replace function check_category_circular_reference()
returns trigger as $$
declare
  current_parent_id uuid := NEW.parent_id;
  depth int := 0;
  max_depth constant int := 10;
begin
  -- Check for self-reference
  if NEW.id = NEW.parent_id then
    raise exception 'Category cannot reference itself as parent';
  end if;
  
  -- Check for circular reference in hierarchy
  while current_parent_id is not null and depth < max_depth loop
    if current_parent_id = NEW.id then
      raise exception 'Circular reference detected in category hierarchy';
    end if;
    
    select parent_id into current_parent_id
    from inventory_categories
    where id = current_parent_id;
    
    depth := depth + 1;
  end loop;
  
  return NEW;
end;
$$ language plpgsql;

-- Add trigger to prevent circular references
create trigger prevent_category_circular_reference
  before insert or update on inventory_categories
  for each row
  execute function check_category_circular_reference();
