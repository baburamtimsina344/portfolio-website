-- ============================================================================
--  Consolidated, IDEMPOTENT migration for Supabase project
--  etcmysdhiieegwdwrkxd
--
--  Source files (merged):
--    supabase/migrations/0001_create_tables.sql
--    supabase/migrations/0002_add_semantic_scholar_fields.sql
--    supabase/migrations/0003_add_hero_stats_and_extend_publications.sql
--    supabase/migrations/0004_fix_hero_stats_insert.sql
--    supabase/migrations/0005_hero_stats_rls_policies.sql
--    supabase/migrations/0006_visitor_baseline.sql
--
--  HOW TO APPLY
--    Supabase Dashboard -> SQL Editor -> New query -> paste -> Run
--
--  Safe to run multiple times: every statement is guarded with
--  IF NOT EXISTS / DROP POLICY IF EXISTS / conditional DO blocks, and the
--  whole thing runs in a single transaction (all-or-nothing).
-- ============================================================================

begin;

-- ────────────────────────────────────────────────────────────────────────────
-- 1. academic_stats
-- ────────────────────────────────────────────────────────────────────────────
create table if not exists academic_stats (
    id SERIAL PRIMARY KEY,
    google_scholar_citations INT DEFAULT 0,
    google_scholar_h_index INT DEFAULT 0,
    google_scholar_i10_index INT DEFAULT 0,
    researchgate_publications NUMERIC(10,2) DEFAULT 0,
    researchgate_reads INT DEFAULT 0,
    researchgate_citations INT DEFAULT 0,
    last_updated TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

alter table academic_stats enable row level security;

drop policy if exists "Enable read access for all users" on academic_stats;
create policy "Enable read access for all users" on academic_stats
    for select using (true);

drop policy if exists "Enable update for authenticated users" on academic_stats;
create policy "Enable update for authenticated users" on academic_stats
    for update using (auth.role() = 'authenticated');

-- seed row id = 1 only when missing (avoids duplicate rows on re-run)
insert into academic_stats (
    id,
    google_scholar_citations,
    google_scholar_h_index,
    google_scholar_i10_index,
    researchgate_publications,
    researchgate_reads,
    researchgate_citations
)
select 1, 71, 6, 2, 21, 23746, 36
where not exists (select 1 from academic_stats where id = 1);

-- keep the SERIAL sequence ahead of the seeded row
select setval(
    pg_get_serial_sequence('academic_stats', 'id'),
    greatest(coalesce((select max(id) from academic_stats), 1), 1)
);

-- ────────────────────────────────────────────────────────────────────────────
-- 2. publications (+ extended columns from migration 0003)
-- ────────────────────────────────────────────────────────────────────────────
create table if not exists publications (
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

alter table publications
    add column if not exists abstract TEXT,
    add column if not exists keywords TEXT,
    add column if not exists volume TEXT,
    add column if not exists issue TEXT,
    add column if not exists pages TEXT,
    add column if not exists publisher TEXT,
    add column if not exists citation TEXT,
    add column if not exists download_url TEXT,
    add column if not exists google_scholar_url TEXT,
    add column if not exists researchgate_url TEXT,
    add column if not exists related_research TEXT;

alter table publications enable row level security;

drop policy if exists "Enable read access for all users" on publications;
create policy "Enable read access for all users" on publications
    for select using (true);

drop policy if exists "Enable all operations for authenticated users" on publications;
create policy "Enable all operations for authenticated users" on publications
    for all using (auth.role() = 'authenticated');

-- ────────────────────────────────────────────────────────────────────────────
-- 3. Semantic Scholar fields on academic_stats (migration 0002)
-- ────────────────────────────────────────────────────────────────────────────
alter table academic_stats
    add column if not exists semantic_scholar_publications INT DEFAULT 0,
    add column if not exists semantic_scholar_h_index INT DEFAULT 0,
    add column if not exists semantic_scholar_citations INT DEFAULT 0,
    add column if not exists semantic_scholar_highly_influential_citations INT DEFAULT 0;

update academic_stats
set
    semantic_scholar_publications = 21,
    semantic_scholar_h_index = 6,
    semantic_scholar_citations = 71,
    semantic_scholar_highly_influential_citations = 1
where id = 1;

-- ────────────────────────────────────────────────────────────────────────────
-- 4. hero_stats (migrations 0003 + 0004 + 0005)
-- ────────────────────────────────────────────────────────────────────────────
create table if not exists hero_stats (
    id SERIAL PRIMARY KEY,
    years_experience TEXT DEFAULT '20+',
    publications_count TEXT DEFAULT '50+',
    awards_honors TEXT DEFAULT '15+',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

alter table hero_stats enable row level security;

drop policy if exists "Enable read access for all users" on hero_stats;
create policy "Enable read access for all users" on hero_stats
    for select using (true);

-- upsert() in the admin panel issues INSERT ... ON CONFLICT DO UPDATE,
-- so INSERT (and DELETE) policies are required alongside UPDATE
drop policy if exists "Enable insert for authenticated users" on hero_stats;
create policy "Enable insert for authenticated users" on hero_stats
    for insert with check (auth.role() = 'authenticated');

drop policy if exists "Enable update for authenticated users" on hero_stats;
create policy "Enable update for authenticated users" on hero_stats
    for update using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

drop policy if exists "Enable delete for authenticated users" on hero_stats;
create policy "Enable delete for authenticated users" on hero_stats
    for delete using (auth.role() = 'authenticated');

insert into hero_stats (id, years_experience, publications_count, awards_honors)
values (1, '20+', '50+', '15+')
on conflict (id) do update set
    years_experience = excluded.years_experience,
    publications_count = excluded.publications_count,
    awards_honors = excluded.awards_honors,
    updated_at = now();

select setval(
    pg_get_serial_sequence('hero_stats', 'id'),
    greatest(coalesce((select max(id) from hero_stats), 1), 1)
);

-- ────────────────────────────────────────────────────────────────────────────
-- 5. Seed publications (only rows that do not exist yet)
-- ────────────────────────────────────────────────────────────────────────────
insert into publications (id, title, authors, journal, year, open_access, citations, doi) values
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
on conflict (id) do nothing;

-- ────────────────────────────────────────────────────────────────────────────
-- 6. Visitor analytics: visitor_totals + country_visits
-- ────────────────────────────────────────────────────────────────────────────
create table if not exists visitor_totals (
  id int primary key default 1,
  total_count bigint not null default 50000,
  updated_at timestamptz not null default now()
);

-- baseline of 50,000; tracked visits accumulate on top. greatest() keeps re-runs safe
insert into visitor_totals (id, total_count)
values (1, 50000)
on conflict (id) do update set
  total_count = greatest(visitor_totals.total_count, 50000),
  updated_at = now();

create table if not exists country_visits (
  country_code text primary key,
  country_name text not null,
  visit_count bigint not null default 0,
  last_visit_at timestamptz not null default now()
);

-- atomic increment used by api/track-visit.ts
create or replace function increment_visit(p_country_code text, p_country_name text)
returns void as $$
begin
  update visitor_totals
  set total_count = total_count + 1, updated_at = now()
  where id = 1;

  insert into country_visits (country_code, country_name, visit_count, last_visit_at)
  values (p_country_code, p_country_name, 1, now())
  on conflict (country_code)
  do update set
    visit_count = country_visits.visit_count + 1,
    last_visit_at = now(),
    country_name = excluded.country_name;
end;
$$ language plpgsql security definer set search_path = public;

grant execute on function increment_visit(text, text) to anon, authenticated;

alter table visitor_totals enable row level security;
alter table country_visits enable row level security;

drop policy if exists "Public read access - totals" on visitor_totals;
create policy "Public read access - totals"
  on visitor_totals for select using (true);

drop policy if exists "Public read access - countries" on country_visits;
create policy "Public read access - countries"
  on country_visits for select using (true);

-- index used by the VisitorMap "top countries" ordering
create index if not exists country_visits_visit_count_idx
  on country_visits (visit_count desc);

-- ────────────────────────────────────────────────────────────────────────────
-- 7. Realtime — add tables to supabase_realtime only if not already members
-- ────────────────────────────────────────────────────────────────────────────
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime'
        and schemaname = 'public'
        and tablename = 'visitor_totals'
    ) then
      execute 'alter publication supabase_realtime add table public.visitor_totals';
    end if;

    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime'
        and schemaname = 'public'
        and tablename = 'country_visits'
    ) then
      execute 'alter publication supabase_realtime add table public.country_visits';
    end if;
  end if;
end $$;

commit;

-- ============================================================================
--  VERIFICATION — run these after the migration to confirm the state
-- ============================================================================

-- tables that now exist
select table_name
from information_schema.tables
where table_schema = 'public'
order by table_name;

-- row counts per table
select 'academic_stats' as table_name, count(*) from academic_stats
union all select 'publications',    count(*) from publications
union all select 'hero_stats',      count(*) from hero_stats
union all select 'visitor_totals',  count(*) from visitor_totals
union all select 'country_visits',  count(*) from country_visits
order by table_name;

-- RLS policies in place
select tablename, policyname, cmd
from pg_policies
where schemaname = 'public'
order by tablename, policyname;

-- realtime-enabled tables (what VisitorMap subscribes to)
select schemaname, tablename
from pg_publication_tables
where pubname = 'supabase_realtime'
order by tablename;

-- live visitor totals
select * from visitor_totals;

-- top countries
select country_code, country_name, visit_count, last_visit_at
from country_visits
order by visit_count desc
limit 15;