-- Drop and recreate serial_numbers table
drop table if exists serial_numbers cascade;

create table if not exists serial_numbers (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  serial_number text not null,
  status text check (status in ('available', 'reserved', 'in_use', 'maintenance', 'retired')) not null,
  current_location text,
  last_checked timestamp with time zone,
  maintenance_history jsonb default '[]'::jsonb,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(item_id, serial_number)
);

-- Add RLS policies
alter table serial_numbers enable row level security;

create policy "Serial numbers are viewable by authenticated users"
  on serial_numbers for select
  using (auth.role() = 'authenticated');

create policy "Staff can manage serial numbers"
  on serial_numbers for all
  using (
    auth.role() = 'authenticated'
    and (
      auth.jwt() ->> 'role' = 'admin'
      or auth.jwt() ->> 'role' = 'staff'
    )
  );

-- Create index
create index if not exists serial_numbers_item_id_serial_number_idx
  on serial_numbers(item_id, serial_number);

create index if not exists serial_numbers_status_idx
  on serial_numbers(status);
