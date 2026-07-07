import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "";

    let countryCode = "XX";
    let countryName = "Unknown";

    // Skip geolocation for localhost/private IPs during local dev
    if (ip && ip !== "127.0.0.1" && ip !== "::1") {
      try {
        // ipwho.is — free, no API key required
        const geoRes = await fetch(`https://ipwho.is/${ip}`);
        const geo = await geoRes.json();
        if (geo?.success !== false) {
          countryCode = geo.country_code || "XX";
          countryName = geo.country || "Unknown";
        }
      } catch {
        // geolocation failed — still count the visit as "Unknown"
      }
    }

    const { error } = await supabaseAdmin.rpc("increment_visit", {
      p_country_code: countryCode,
      p_country_name: countryName,
    });

    if (error) throw error;

    return NextResponse.json({ ok: true, country: countryCode });
  } catch (err) {
    console.error("track-visit error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
