-- Create set_updated_at function if it doesn't exist
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create event_layouts table
create table if not exists event_layouts (
  id uuid default uuid_generate_v4() primary key,
  event_id uuid not null references events(id) on delete cascade,
  name text not null,
  objects jsonb not null default '[]',
  background_image_url text,
  version integer not null default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS policy
alter table event_layouts enable row level security;

-- Create policies
create policy "Allow authenticated read access" on event_layouts
  for select using (auth.role() = 'authenticated');

create policy "Allow admin full access" on event_layouts
  for all using (auth.jwt() ->> 'role' = 'admin');

-- Create indexes
create index if not exists event_layouts_event_id_idx on event_layouts(event_id);
create index if not exists event_layouts_version_idx on event_layouts(version);

-- Add trigger for updated_at
create trigger set_updated_at
  before update on event_layouts
  for each row
  execute function public.set_updated_at();

-- Add realtime replication for collaboration
alter publication supabase_realtime add table event_layouts;
