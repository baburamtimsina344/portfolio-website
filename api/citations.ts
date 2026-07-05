// api/citations.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const orcid = '0009-0001-9593-4222'
    const url = `https://api.openalex.org/authors/https://orcid.org/${orcid}`

    const response = await fetch(url)
    if (!response.ok) throw new Error(`OpenAlex responded ${response.status}`)
    const data = await response.json()
    res.status(200).json({
      worksCount: data.works_count || 0,
      citedByCount: data.cited_by_count || 0,
      hIndex: data.summary_stats?.h_index || 0,
      i10Index: data.summary_stats?.i10_index || 0,
    })
  } catch (error) {
    console.error('OpenAlex API error:', error)
    res.status(200).json({ worksCount: 0, citedByCount: 0, hIndex: 0, i10Index: 0 })
  }
}