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

function getClientIp(req: VercelRequest) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string') return forwarded.split(',')[0]?.trim() || ''
  if (Array.isArray(forwarded)) return forwarded[0]?.split(',')[0]?.trim() || ''

  const realIp = req.headers['x-real-ip']
  if (typeof realIp === 'string') return realIp
  if (Array.isArray(realIp)) return realIp[0] || ''

  return ''
}

function isLocalIp(ip: string) {
  return !ip || ip === '127.0.0.1' || ip === '::1' || ip.startsWith('10.') || ip.startsWith('192.168.')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false })
  }

  try {
    const ip = getClientIp(req)
    let countryCode = 'XX'
    let countryName = 'Unknown'

    if (!isLocalIp(ip)) {
      try {
        const geoRes = await fetch(`https://ipwho.is/${ip}`)
        const geo = await geoRes.json()
        if (geo?.success !== false) {
          countryCode = geo.country_code || 'XX'
          countryName = geo.country || 'Unknown'
        }
      } catch {
        // Keep the visit count even when geolocation is unavailable.
      }
    }

    const { error } = await supabaseAdmin.rpc('increment_visit', {
      p_country_code: countryCode,
      p_country_name: countryName,
    })

    if (error) throw error

    res.status(200).json({ ok: true, country: countryCode })
  } catch (error) {
    console.error('track visit error:', error)
    res.status(200).json({ ok: false })
  }
}
