-- Create condition_reports table
create table if not exists condition_reports (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  event_id uuid references events(id) on delete cascade not null,
  reported_by uuid references auth.users(id) not null,
  condition text check (condition in ('good', 'damaged', 'requires_cleaning', 'requires_maintenance')) not null,
  notes text,
  reported_at timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create condition_report_media table for photos/videos
create table if not exists condition_report_media (
  id uuid default uuid_generate_v4() primary key,
  report_id uuid references condition_reports(id) on delete cascade not null,
  storage_path text not null,
  media_type text check (media_type in ('image', 'video')) not null,
  annotations jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create inventory_usage_stats table for analytics
create table if not exists inventory_usage_stats (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  date date not null,
  times_reserved integer default 0,
  times_checked_out integer default 0,
  times_returned_damaged integer default 0,
  total_rental_duration interval default '0'::interval,
  revenue_generated numeric(10,2) default 0.00,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(item_id, date)
);

-- Create inventory_forecasts table
create table if not exists inventory_forecasts (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references inventory_items(id) on delete cascade not null,
  forecast_date date not null,
  predicted_demand integer not null,
  confidence_level numeric(5,2) not null,
  factors jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(item_id, forecast_date)
);

-- Create collaboration_comments table
create table if not exists collaboration_comments (
  id uuid default uuid_generate_v4() primary key,
  event_id uuid references events(id) on delete cascade not null,
  user_id uuid references auth.users(id) not null,
  parent_id uuid references collaboration_comments(id),
  content text not null,
  mentioned_users uuid[] default array[]::uuid[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create event_changes_log table for version control
create table if not exists event_changes_log (
  id uuid default uuid_generate_v4() primary key,
  event_id uuid references events(id) on delete cascade not null,
  user_id uuid references auth.users(id) not null,
  change_type text check (change_type in ('created', 'updated', 'deleted')) not null,
  changed_fields jsonb not null,
  previous_values jsonb,
  new_values jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS policies
alter table condition_reports enable row level security;
alter table condition_report_media enable row level security;
alter table inventory_usage_stats enable row level security;
alter table inventory_forecasts enable row level security;
alter table collaboration_comments enable row level security;
alter table event_changes_log enable row level security;

-- Create policies for authenticated users
create policy "Allow authenticated read access" on condition_reports
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on condition_report_media
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on inventory_usage_stats
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on inventory_forecasts
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on collaboration_comments
  for select using (auth.role() = 'authenticated');
create policy "Allow authenticated read access" on event_changes_log
  for select using (auth.role() = 'authenticated');

-- Create policies for admin users
create policy "Allow admin full access" on condition_reports
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on condition_report_media
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on inventory_usage_stats
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on inventory_forecasts
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on collaboration_comments
  for all using (auth.jwt() ->> 'role' = 'admin');
create policy "Allow admin full access" on event_changes_log
  for all using (auth.jwt() ->> 'role' = 'admin');

-- Create indexes for better query performance
create index if not exists condition_reports_item_id_idx on condition_reports(item_id);
create index if not exists condition_reports_event_id_idx on condition_reports(event_id);
create index if not exists condition_reports_reported_by_idx on condition_reports(reported_by);
create index if not exists condition_report_media_report_id_idx on condition_report_media(report_id);
create index if not exists inventory_usage_stats_item_id_date_idx on inventory_usage_stats(item_id, date);
create index if not exists inventory_forecasts_item_id_date_idx on inventory_forecasts(item_id, forecast_date);
create index if not exists collaboration_comments_event_id_idx on collaboration_comments(event_id);
create index if not exists collaboration_comments_user_id_idx on collaboration_comments(user_id);
create index if not exists event_changes_log_event_id_idx on event_changes_log(event_id);
create index if not exists event_changes_log_user_id_idx on event_changes_log(user_id);

-- Create functions for analytics
create or replace function update_inventory_usage_stats()
returns trigger as $$
begin
  insert into inventory_usage_stats (item_id, date)
  values (NEW.item_id, current_date)
  on conflict (item_id, date) do update
  set times_reserved = inventory_usage_stats.times_reserved + 1,
      updated_at = now();
  return NEW;
end;
$$ language plpgsql;

-- Create triggers for analytics
create trigger after_reservation_insert
  after insert on assignment_records
  for each row
  execute function update_inventory_usage_stats();
