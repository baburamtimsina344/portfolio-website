import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || 'https://etcmysdhiieegwdwrkxd.supabase.co'
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0Y215c2RoaWllZWd3ZHdya3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyNjgwMDEsImV4cCI6MjA5ODg0NDAwMX0.nH0f0HU1n2YHq9IY5YKby1pBE7rjYfvAcLKhjbjBEmE'

const supabaseAdmin = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
})

const DEFAULT_TOTAL = 50000

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')

  try {
    const [{ data: totals, error: totalsErr }, { data: countries, error: countriesErr }] =
      await Promise.all([
        supabaseAdmin.from('visitor_totals').select('total_count').eq('id', 1).single(),
        supabaseAdmin
          .from('country_visits')
          .select('country_code,country_name,visit_count')
          .order('visit_count', { ascending: false }),
      ])

    if (totalsErr) throw totalsErr
    if (countriesErr) throw countriesErr

    res.status(200).json({
      total: Number(totals?.total_count ?? DEFAULT_TOTAL),
      countries: countries ?? [],
    })
  } catch (error) {
    console.error('visitor stats error:', error)
    res.status(200).json({ total: DEFAULT_TOTAL, countries: [] })
  }
}
