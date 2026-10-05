-- Ensure hero_stats has at least one row with proper ID
INSERT INTO hero_stats (id, years_experience, publications_count, awards_honors)
VALUES (1, '20+', '50+', '15+')
ON CONFLICT (id) DO UPDATE SET
  years_experience = EXCLUDED.years_experience,
  publications_count = EXCLUDED.publications_count,
  awards_honors = EXCLUDED.awards_honors;
