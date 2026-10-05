-- Create hero stats table
CREATE TABLE IF NOT EXISTS hero_stats (
    id SERIAL PRIMARY KEY,
    years_experience TEXT DEFAULT '20+',
    publications_count TEXT DEFAULT '50+',
    awards_honors TEXT DEFAULT '15+',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert initial data
INSERT INTO hero_stats (years_experience, publications_count, awards_honors)
VALUES ('20+', '50+', '15+')
ON CONFLICT DO NOTHING;

-- Extend publications table with additional fields
ALTER TABLE publications 
ADD COLUMN IF NOT EXISTS abstract TEXT,
ADD COLUMN IF NOT EXISTS keywords TEXT,
ADD COLUMN IF NOT EXISTS volume TEXT,
ADD COLUMN IF NOT EXISTS issue TEXT,
ADD COLUMN IF NOT EXISTS pages TEXT,
ADD COLUMN IF NOT EXISTS publisher TEXT,
ADD COLUMN IF NOT EXISTS citation TEXT,
ADD COLUMN IF NOT EXISTS download_url TEXT,
ADD COLUMN IF NOT EXISTS google_scholar_url TEXT,
ADD COLUMN IF NOT EXISTS researchgate_url TEXT,
ADD COLUMN IF NOT EXISTS related_research TEXT;

-- Enable RLS for hero_stats
ALTER TABLE hero_stats ENABLE ROW LEVEL SECURITY;

-- Allow public read access to hero_stats
CREATE POLICY "Enable read access for all users" ON hero_stats
    FOR SELECT USING (true);

-- Allow authenticated users to update hero_stats
CREATE POLICY "Enable update for authenticated users" ON hero_stats
    FOR UPDATE USING (auth.role() = 'authenticated');
