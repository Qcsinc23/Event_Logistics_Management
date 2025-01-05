-- Create events table
create table if not exists events (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null,
  venue_id uuid,
  status text check (status in ('draft', 'planned', 'confirmed', 'in-progress', 'completed', 'cancelled')) default 'draft',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS policy
alter table events enable row level security;

-- Create policies
create policy "Allow authenticated read access" on events
  for select using (auth.role() = 'authenticated');

create policy "Allow admin full access" on events
  for all using (auth.jwt() ->> 'role' = 'admin');

-- Create indexes
create index if not exists events_start_date_idx on events(start_date);
create index if not exists events_end_date_idx on events(end_date);
create index if not exists events_status_idx on events(status);
