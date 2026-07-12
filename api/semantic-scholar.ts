import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const authorId = '2326887337';
    const url = `https://api.semanticscholar.org/graph/v1/author/${authorId}?fields=publications,citationCount,hIndex`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Semantic Scholar responded with ${response.status}`);
    }

    const data = await response.json();

    // 👇 Log the full response for debugging
    console.log('Semantic Scholar response:', JSON.stringify(data, null, 2));

    res.status(200).json({
      publications: data.publications?.length || 0,
      citations: data.citationCount || 0,
      hIndex: data.hIndex || 0,
      highlyInfluentialCitations: 0,
    });
  } catch (error) {
    console.error('Semantic Scholar API error:', error);
    res.status(200).json({
      publications: 0,
      citations: 0,
      hIndex: 0,
      highlyInfluentialCitations: 0,
    });
  }
}