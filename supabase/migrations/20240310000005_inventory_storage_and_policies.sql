-- Create storage bucket for condition report media
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

-- Create storage policies for media bucket
create policy "Media is publicly accessible"
  on storage.objects for select
  using ( bucket_id = 'media' );

create policy "Authenticated users can upload media"
  on storage.objects for insert
  with check (
    bucket_id = 'media'
    and auth.role() = 'authenticated'
  );

create policy "Users can update their own media"
  on storage.objects for update
  using (
    bucket_id = 'media'
    and auth.uid() = owner
  );

-- Add RLS policies for inventory items with category support
create policy "Items are viewable by authenticated users"
  on inventory_items for select
  using (auth.role() = 'authenticated');

create policy "Admins can insert items"
  on inventory_items for insert
  with check (auth.jwt() ->> 'role' = 'admin');

create policy "Admins can update items"
  on inventory_items for update
  using (auth.jwt() ->> 'role' = 'admin');

-- Add RLS policies for categories
create policy "Categories are viewable by authenticated users"
  on inventory_categories for select
  using (auth.role() = 'authenticated');

create policy "Admins can manage categories"
  on inventory_categories for all
  using (auth.jwt() ->> 'role' = 'admin');

-- Add RLS policies for storage instructions
create policy "Storage instructions are viewable by authenticated users"
  on storage_instructions for select
  using (auth.role() = 'authenticated');

create policy "Admins can manage storage instructions"
  on storage_instructions for all
  using (auth.jwt() ->> 'role' = 'admin');

-- Add RLS policies for batch tracking
create policy "Batch records are viewable by authenticated users"
  on batch_records for select
  using (auth.role() = 'authenticated');

create policy "Staff can create batch records"
  on batch_records for insert
  with check (
    auth.role() = 'authenticated'
    and (
      auth.jwt() ->> 'role' = 'admin'
      or auth.jwt() ->> 'role' = 'staff'
    )
  );

-- Add RLS policies for serial number tracking
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

-- Add RLS policies for condition reports
create policy "Condition reports are viewable by authenticated users"
  on condition_reports for select
  using (auth.role() = 'authenticated');

create policy "Staff can create condition reports"
  on condition_reports for insert
  with check (
    auth.role() = 'authenticated'
    and (
      auth.jwt() ->> 'role' = 'admin'
      or auth.jwt() ->> 'role' = 'staff'
    )
  );

-- Add RLS policies for analytics
create policy "Analytics are viewable by authenticated users"
  on inventory_usage_stats for select
  using (auth.role() = 'authenticated');

create policy "System can update analytics"
  on inventory_usage_stats for all
  using (auth.jwt() ->> 'role' = 'service_role');

-- Add RLS policies for forecasts
create policy "Forecasts are viewable by authenticated users"
  on inventory_forecasts for select
  using (auth.role() = 'authenticated');

create policy "System can update forecasts"
  on inventory_forecasts for all
  using (auth.jwt() ->> 'role' = 'service_role');

-- Add indexes for performance
create index if not exists inventory_items_category_id_idx
  on inventory_items(category_id);

create index if not exists condition_reports_item_id_reported_at_idx
  on condition_reports(item_id, reported_at);

create index if not exists inventory_usage_stats_item_id_date_idx
  on inventory_usage_stats(item_id, date);

create index if not exists inventory_forecasts_item_id_date_idx
  on inventory_forecasts(item_id, forecast_date);

create index if not exists batch_records_item_id_idx
  on batch_records(item_id);

create index if not exists serial_numbers_item_id_idx
  on serial_numbers(item_id);

-- Add functions for analytics
create or replace function update_usage_stats()
returns trigger as $$
begin
  insert into inventory_usage_stats (
    item_id,
    date,
    times_reserved,
    times_checked_out,
    times_returned_damaged
  )
  values (
    NEW.item_id,
    current_date,
    1,
    0,
    0
  )
  on conflict (item_id, date)
  do update set
    times_reserved = inventory_usage_stats.times_reserved + 1,
    updated_at = now();
  return NEW;
end;
$$ language plpgsql security definer;

-- Add triggers for analytics
create trigger on_reservation_created
  after insert on assignment_records
  for each row
  execute function update_usage_stats();

-- Add function for condition report notifications
create or replace function notify_maintenance_team()
returns trigger as $$
begin
  if NEW.condition in ('damaged', 'requires_maintenance') then
    perform pg_notify(
      'maintenance_alerts',
      json_build_object(
        'item_id', NEW.item_id,
        'condition', NEW.condition,
        'notes', NEW.notes,
        'reported_at', NEW.reported_at
      )::text
    );
  end if;
  return NEW;
end;
$$ language plpgsql security definer;

-- Add trigger for maintenance notifications
create trigger on_condition_report_created
  after insert on condition_reports
  for each row
  execute function notify_maintenance_team();
