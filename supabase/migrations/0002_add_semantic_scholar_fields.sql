
-- Add Semantic Scholar fields to academic_stats
ALTER TABLE academic_stats
ADD COLUMN IF NOT EXISTS semantic_scholar_publications INT DEFAULT 0,
ADD COLUMN IF NOT EXISTS semantic_scholar_h_index INT DEFAULT 0,
ADD COLUMN IF NOT EXISTS semantic_scholar_citations INT DEFAULT 0,
ADD COLUMN IF NOT EXISTS semantic_scholar_highly_influential_citations INT DEFAULT 0;

-- Update initial data to include Semantic Scholar fields (with sample values)
UPDATE academic_stats
SET 
    semantic_scholar_publications = 21,
    semantic_scholar_h_index = 6,
    semantic_scholar_citations = 71,
    semantic_scholar_highly_influential_citations = 1
WHERE id = 1;

