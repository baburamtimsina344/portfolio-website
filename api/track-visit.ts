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

const COUNTRY_NAMES = new Intl.DisplayNames(['en'], { type: 'region' })

function getHeaderValue(value: string | string[] | undefined) {
  if (typeof value === 'string') return value.trim()
  if (Array.isArray(value)) return value[0]?.trim() || ''
  return ''
}

function normalizeCountryCode(value: string) {
  const countryCode = value.trim().toUpperCase()
  return /^[A-Z]{2}$/.test(countryCode) && countryCode !== 'XX' ? countryCode : 'XX'
}

function countryNameFromCode(countryCode: string) {
  return COUNTRY_NAMES.of(countryCode) || 'Unknown'
}

function getClientIp(req: VercelRequest) {
  const forwarded = getHeaderValue(req.headers['x-forwarded-for'])
  if (forwarded) return forwarded.split(',')[0]?.trim() || ''

  const realIp = getHeaderValue(req.headers['x-real-ip'])
  if (realIp) return realIp

  return ''
}

function isLocalIp(ip: string) {
  return (
    !ip ||
    ip === '127.0.0.1' ||
    ip === '::1' ||
    ip.startsWith('10.') ||
    ip.startsWith('192.168.') ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(ip)
  )
}

function getCountryFromHeaders(req: VercelRequest) {
  const countryCode = normalizeCountryCode(
    getHeaderValue(req.headers['x-vercel-ip-country']) ||
      getHeaderValue(req.headers['cf-ipcountry']) ||
      getHeaderValue(req.headers['x-country-code'])
  )

  if (countryCode === 'XX') return null

  return {
    countryCode,
    countryName: countryNameFromCode(countryCode),
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false })
  }

  try {
    const ip = getClientIp(req)
    const headerCountry = getCountryFromHeaders(req)
    let countryCode = headerCountry?.countryCode ?? 'XX'
    let countryName = headerCountry?.countryName ?? 'Unknown'

    if (countryCode === 'XX' && !isLocalIp(ip)) {
      try {
        const geoRes = await fetch(`https://ipwho.is/${ip}`)
        const geo = await geoRes.json()
        if (geo?.success !== false) {
          countryCode = normalizeCountryCode(geo.country_code || 'XX')
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
