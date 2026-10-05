-- hero_stats: allow authenticated users to INSERT (needed for upsert) and DELETE
-- The admin panel uses upsert({ id: 1, ... }) which PostgREST sends as
-- INSERT ... ON CONFLICT (id) DO UPDATE, so an INSERT policy is required.

ALTER TABLE hero_stats ENABLE ROW LEVEL SECURITY;

-- Ensure the single row the admin panel upserts always exists
INSERT INTO hero_stats (id, years_experience, publications_count, awards_honors)
VALUES (1, '20+', '50+', '15+')
ON CONFLICT (id) DO NOTHING;

SELECT setval(
    pg_get_serial_sequence('hero_stats', 'id'),
    greatest(coalesce((SELECT max(id) FROM hero_stats), 1), 1)
);

-- INSERT: WITH CHECK gates the new row
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON hero_stats;
CREATE POLICY "Enable insert for authenticated users" ON hero_stats
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- UPDATE: USING selects rows, WITH CHECK validates the new values
DROP POLICY IF EXISTS "Enable update for authenticated users" ON hero_stats;
CREATE POLICY "Enable update for authenticated users" ON hero_stats
    FOR UPDATE USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Enable delete for authenticated users" ON hero_stats;
CREATE POLICY "Enable delete for authenticated users" ON hero_stats
    FOR DELETE USING (auth.role() = 'authenticated');
