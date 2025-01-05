-- Drop and recreate storage_instructions table
drop table if exists storage_instructions;

create table if not exists storage_instructions (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  storage_location text,
  storage_conditions jsonb default '{}'::jsonb,
  handling_requirements text,
  compliance_info jsonb default '{}'::jsonb,
  priority text check (priority in ('low', 'medium', 'high')) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS policies
alter table storage_instructions enable row level security;

create policy "Storage instructions are viewable by authenticated users"
  on storage_instructions for select
  using (auth.role() = 'authenticated');

create policy "Staff can manage storage instructions"
  on storage_instructions for all
  using (
    auth.role() = 'authenticated'
    and (
      auth.jwt() ->> 'role' = 'admin'
      or auth.jwt() ->> 'role' = 'staff'
    )
  );

-- Create index
create index if not exists storage_instructions_item_id_idx
  on storage_instructions(item_id);
