-- Create academic_stats table
CREATE TABLE IF NOT EXISTS academic_stats (
    id SERIAL PRIMARY KEY,
    google_scholar_citations INT DEFAULT 0,
    google_scholar_h_index INT DEFAULT 0,
    google_scholar_i10_index INT DEFAULT 0,
    researchgate_publications INT DEFAULT 0,
    researchgate_reads INT DEFAULT 0,
    researchgate_citations INT DEFAULT 0,
    last_updated TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create publications table
CREATE TABLE IF NOT EXISTS publications (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    authors TEXT NOT NULL,
    journal TEXT NOT NULL,
    year INT NOT NULL,
    open_access BOOLEAN DEFAULT FALSE,
    citations INT DEFAULT 0,
    doi TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert initial data for academic_stats
INSERT INTO academic_stats (
    google_scholar_citations,
    google_scholar_h_index,
    google_scholar_i10_index,
    researchgate_publications,
    researchgate_reads,
    researchgate_citations
) VALUES (
    71,
    6,
    2,
    21,
    23746,
    36
) ON CONFLICT DO NOTHING;

-- Insert initial publications data
INSERT INTO publications (id, title, authors, journal, year, open_access, citations, doi) VALUES
('pub-1', 'Study on Job Satisfaction among the Employees of Nepal Rastra Bank (NRB)', 'P. Koirala, B. Timsina, D. Koirala, M.S. Kamalaveni', 'Social Science Research Network (SSRN) / ResearchGate', 2024, true, 21, '21.389653784'),
('pub-2', 'Ergonomic practices and banking employee performance: A sequential explanatory approach', 'S. Karmacharya, U. Bhattarai, B. Timsina, N. Shrestha, S. Tamang', 'American Journal of STEM Education', 2025, true, 10, '10.32674/ajse.v6i1'),
('pub-3', 'Unlocking stability: Mitigating job-hopping among millennials in the information technology sector', 'A. Shakya, U. Bhattarai, B. Timsina', 'American Journal of STEM Education', 2025, true, 8, '10.32674/xvsrs280'),
('pub-4', 'Navigating cultural contexts: How multinational corporations shape CSR strategies in Nepal', 'A. Sthapit, U. Bhattarai, B. Timsina, M. Kayestha', 'American Journal of STEM Education', 2025, false, 7, '10.32674/ajse.v12i2'),
('pub-5', 'Charismatic and transactional leadership and employee engagement: Moderating effect of level of education', 'P. Koirala, S. Balami, K. Munankarmi, D. Koirala, J. Chudal, B. Timsina', 'International Journal of Management and Social Sciences', 2024, false, 6, '10.5281/zenodo.1024'),
('pub-6', 'Digital transformation as a catalyst for enhancing business agility in the service sector: The mediating roles of business performance and competitive advantage', 'U. Bhattarai, A. Sthapit, B. Timsina, O. Gurung', 'American Journal of STEM Education', 2026, true, 1, '10.32674/ajse.v19i1'),
('pub-7', 'Mandated Corporate Social Responsibility in Nepalese Commercial Banks: A Qualitative Perspective', 'B. Aryal, RK. Danuwar, B. Timsina', 'Nepalese Journal of Insurance and Social Security', 2024, true, 2, '10.3126/njiss.v8i1'),
('pub-8', 'Contemporary Policy Frameworks and Future Directions in Nepal''s Higher Education', 'B. Timsina, U. Bhattarai, P. Koirala', 'Kriti Publication Monograph Series', 2025, true, 1, '978-9937-730-56-3'),
('pub-9', 'The Timeless Strategist: Reinterpreting Kautilya''s Arthashastra for Ethical Leadership, Governance, and Strategy in Modern Business', 'B. Timsina, U. Bhattarai, U. DC', 'Journal of Business and Social Sciences Research', 2025, false, 0, '10.3126/jbssr.v10i2'),
('pub-10', 'Cognitive dissonance in university choice among graduate students', 'J. Luintel, B. Timsina', 'Journal of Society and Management Studies', 2025, false, 0, '10.3126/jsms.v3i1')
ON CONFLICT DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE academic_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;

-- Allow public read access to academic_stats
CREATE POLICY "Enable read access for all users" ON academic_stats
    FOR SELECT USING (true);

-- Allow authenticated users to update academic_stats
CREATE POLICY "Enable update for authenticated users" ON academic_stats
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow public read access to publications
CREATE POLICY "Enable read access for all users" ON publications
    FOR SELECT USING (true);

-- Allow authenticated users to insert, update, delete publications
CREATE POLICY "Enable all operations for authenticated users" ON publications
    FOR ALL USING (auth.role() = 'authenticated');
