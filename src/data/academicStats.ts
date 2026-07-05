// src/data/academicStats.ts
//
// Manually maintained academic metrics.
// Update these numbers whenever you check your actual profiles —
// no database, no API calls, no scraping. Just edit and redeploy.
//
// Google Scholar profile:
// https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ
//
// ResearchGate profile:
// https://www.researchgate.net/profile/Baburam-Timsina-3

export const academicStats = {
  googleScholar: {
    citations: 71,
    hIndex: 6,
    i10Index: 2,
  },
  researchGate: {
    publications: 21,
    reads: 23746,
    citations: 36,
  },
  lastUpdated: '2026-07-05', // update this date whenever you change the numbers above
}