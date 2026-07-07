import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const [{ data: totals, error: totalsErr }, { data: countries, error: countriesErr }] =
      await Promise.all([
        supabaseAdmin.from("visitor_totals").select("total_count").eq("id", 1).single(),
        supabaseAdmin
          .from("country_visits")
          .select("*")
          .order("visit_count", { ascending: false }),
      ]);

    if (totalsErr) throw totalsErr;
    if (countriesErr) throw countriesErr;

    return NextResponse.json({
      total: totals?.total_count ?? 10000,
      countries: countries ?? [],
    });
  } catch (err) {
    console.error("visitor-stats error:", err);
    return NextResponse.json(
      { total: 10000, countries: [] },
      { status: 500 }
    );
  }
}
