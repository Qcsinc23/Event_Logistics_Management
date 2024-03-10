-- Add created_by column to events table
ALTER TABLE events
ADD COLUMN IF NOT EXISTS created_by uuid REFERENCES auth.users(id);

-- Update events policies to include created_by checks
DROP POLICY IF EXISTS "Allow authenticated read access" ON events;
DROP POLICY IF EXISTS "Allow admin full access" ON events;

CREATE POLICY "Allow authenticated read access" ON events
  FOR SELECT USING (
    auth.role() = 'authenticated' AND (
      created_by = auth.uid() OR
      auth.jwt() ->> 'role' = 'admin'
    )
  );

CREATE POLICY "Allow admin full access" ON events
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Allow users to manage own events" ON events
  FOR ALL USING (created_by = auth.uid());

-- Add index for created_by column
CREATE INDEX IF NOT EXISTS events_created_by_idx ON events(created_by);
