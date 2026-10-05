// "use client";

// import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import type { ReactNode } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import type { Variants } from "framer-motion";
// import { AlertCircle, BarChart3, Globe2, Layers, MapPin, Radio, Sparkles, TrendingUp, Zap } from "lucide-react";
// import type { LucideIcon } from "lucide-react";
// import { ComposableMap, Geographies, Geography, Graticule, Marker } from "react-simple-maps";
// import { useTrackVisit } from "../hooks/useTrackVisit";
// import { useAnimatedNumber } from "../hooks/useAnimatedNumber";
// import { supabase } from "../lib/supabase";

// const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
// const POLL_INTERVAL_MS = 15_000;
// const RELATIVE_TIME_TICK_MS = 30_000;
// const STARTING_TOTAL = 0;

// /**
//  * Visits accumulated before live tracking was wired up. Seeded into the
//  * headline counter so the "Total Visits" figure reflects the full lifetime
//  * audience (50,000 baseline + everything Supabase has recorded since).
//  */
// const BASELINE_VISITS = 50_000;

// /**
//  * Flip to false to render the section from local demo data without any
//  * network traffic (useful for offline design work).
//  */
// const USE_REAL_DATA = true;

// const BRAND = {
//   green: "#0F7A5A",
//   greenBright: "#13A677",
//   mint: "#3FE0A2",
//   navy: "#0B2545",
//   slate: "#4A5A6A",
//   mist: "#F8F9FA",
// } as const;

// const OCEAN_IDLE = "#12314A";
// const OCEAN_IDLE_STROKE = "#1D4A69";
// /** Land ramp: low traffic → mid → hotspot. */
// const LAND_RAMP = ["#0E5A73", "#0F8F73", "#3FE0A2"];

// type CountryVisit = {
//   country_code: string;
//   country_name: string;
//   visit_count: number;
// };

// type Stats = {
//   total: number;
//   countries: CountryVisit[];
// };

// type StatsFetchResult = {
//   total: number | null;
//   updatedAt: string | null;
//   countries: CountryVisit[] | null;
// };

// type MetricCardProps = {
//   label: string;
//   value: string;
//   detail: ReactNode;
//   icon: LucideIcon;
//   isLoading?: boolean;
//   index: number;
//   isPrimary?: boolean;
//   accent?: ReactNode;
// };

// const DEMO_COUNTRIES: CountryVisit[] = [
//   { country_code: "US", country_name: "United States", visit_count: 3500 },
//   { country_code: "IN", country_name: "India", visit_count: 2200 },
//   { country_code: "GB", country_name: "United Kingdom", visit_count: 1800 },
//   { country_code: "CA", country_name: "Canada", visit_count: 1200 },
//   { country_code: "DE", country_name: "Germany", visit_count: 1000 },
//   { country_code: "AU", country_name: "Australia", visit_count: 800 },
// ];

// const CENTROIDS: Record<string, [number, number]> = {
//   US: [-98.5, 39.8], GB: [-2, 54], IN: [79, 22], NP: [84, 28], CN: [104, 35],
//   DE: [10, 51], FR: [2, 47], BR: [-53, -10], AU: [134, -25], JP: [138, 38],
//   CA: [-106, 56], RU: [90, 61], ZA: [24, -29], NG: [8, 9], MX: [-102, 23],
//   ES: [-4, 40], IT: [12, 42], KR: [127, 36], ID: [113, -2], PK: [69, 30],
//   BD: [90, 24], SG: [103.8, 1.35], AE: [54, 24], SA: [45, 24], EG: [30, 26],
//   NL: [5.75, 52.1], SE: [15, 62], CH: [8, 47], PH: [122, 13], VN: [108, 16],
//   TH: [101, 15], MY: [112, 2.5], NZ: [174, -41], AR: [-64, -34], KE: [38, 1],
//   PT: [-8, 39], GR: [22, 39], IE: [-8, 53], AT: [14, 47],
//   BE: [4.5, 50.8], DK: [9, 56], FI: [26, 64], NO: [8, 62], PL: [19, 52],
//   CZ: [15, 49.8], HU: [20, 47], RO: [25, 46], BG: [25, 42.5], RS: [21, 44],
//   UA: [31, 49], KZ: [66, 48], UZ: [64, 41], TR: [35, 39], IQ: [44, 33],
//   QA: [51, 25], KW: [47.5, 29], OM: [57, 21], JO: [36, 31],
//   LB: [35.8, 33.9], SY: [38, 35], GE: [44, 42], AM: [45, 40],
//   MA: [-6, 32], DZ: [2, 28], TN: [9, 34], LY: [17, 27], ET: [40, 9],
//   GH: [-1, 8], CI: [-5, 8], SN: [-14, 14], CM: [12, 6], AO: [18, -12],
//   ZM: [28, -14], ZW: [30, -19], MZ: [35, -18], TZ: [35, -6], UG: [32, 1],
//   AF: [66, 34], LK: [81, 7], MM: [96, 21], KH: [105, 12], LA: [103, 18],
//   KP: [127, 40], TW: [121, 24], HK: [114, 22], CL: [-71, -33], CO: [-74, 4],
//   PE: [-76, -10], VE: [-66, 6], EC: [-78, -2], BO: [-64, -17],
//   PY: [-58, -23], UY: [-56, -33], GT: [-90, 15], CR: [-84, 10], PA: [-80, 9],
//   JM: [-77, 18], TT: [-61, 11], MU: [57, -20], MG: [47, -19], BW: [25, -22],
//   NA: [18, -22], CV: [-24, 16], GL: [-42, 72], IS: [-19, 65], LT: [24, 56],
//   LV: [25, 57], EE: [26, 59], SI: [15, 46], AL: [20, 41], MK: [22, 42],
//   ME: [19, 43], CY: [33, 35], MT: [14, 35.9], LU: [6, 49.8], BA: [18, 44],
//   CD: [23, -3], CG: [15, -1], ML: [-4, 17], NE: [9, 17], SD: [30, 15],
//   SO: [46, 5], MW: [34, -13], FJ: [178, -18], PG: [145, -6], NC: [165, -21],
// };

// /** ISO 3166-1 numeric (world-atlas ids) → ISO 3166-1 alpha-2, for choropleth matching. */
// const ISO_NUMERIC: Record<string, string> = {
//   "004": "AF", "008": "AL", "012": "DZ", "024": "AO", "032": "AR", "036": "AU",
//   "040": "AT", "044": "BS", "048": "BH", "050": "BD", "051": "AM", "056": "BE",
//   "068": "BO", "070": "BA", "072": "BW", "076": "BR", "100": "BG", "104": "MM",
//   "108": "BI", "112": "BY", "116": "KH", "120": "CM", "124": "CA", "140": "CF",
//   "144": "LK", "148": "TD", "152": "CL", "156": "CN", "158": "TW", "170": "CO",
//   "178": "CG", "180": "CD", "188": "CR", "191": "HR", "192": "CU", "196": "CY",
//   "203": "CZ", "204": "BJ", "208": "DK", "214": "DO", "218": "EC", "222": "SV",
//   "226": "GQ", "231": "ET", "232": "ER", "233": "EE", "242": "FJ", "246": "FI",
//   "250": "FR", "262": "DJ", "266": "GA", "268": "GE", "270": "GM", "275": "PS",
//   "288": "GH", "300": "GR", "320": "GT", "324": "GN", "328": "GY", "332": "HT",
//   "340": "HN", "348": "HU", "352": "IS", "356": "IN", "360": "ID", "364": "IR",
//   "368": "IQ", "372": "IE", "376": "IL", "380": "IT", "384": "CI", "388": "JM",
//   "392": "JP", "398": "KZ", "400": "JO", "404": "KE", "408": "KP", "410": "KR",
//   "414": "KW", "417": "KG", "418": "LA", "422": "LB", "428": "LV", "430": "LR",
//   "434": "LY", "440": "LT", "442": "LU", "446": "MO", "450": "MG", "454": "MW",
//   "458": "MY", "462": "MV", "466": "ML", "470": "MT", "478": "MR", "480": "MU",
//   "484": "MX", "496": "MN", "498": "MD", "499": "ME", "500": "MZ", "504": "MA",
//   "508": "MZ", "512": "OM", "516": "NA", "524": "NP", "528": "NL", "540": "NC",
//   "554": "NZ", "558": "NI", "562": "NE", "566": "NG", "578": "NO", "586": "PK",
//   "591": "PA", "598": "PG", "600": "PY", "604": "PE", "608": "PH", "616": "PL",
//   "620": "PT", "624": "GW", "626": "TL", "628": "GQ", "630": "PR", "634": "QA",
//   "642": "RO", "643": "RU", "646": "RW", "682": "SA", "686": "SN", "688": "RS",
//   "694": "SL", "702": "SG", "703": "SK", "704": "VN", "705": "SI", "706": "SO",
//   "710": "ZA", "716": "ZW", "724": "ES", "728": "SS", "729": "SD", "740": "SR",
//   "748": "SZ", "752": "SE", "756": "CH", "760": "SY", "762": "TJ", "764": "TH",
//   "768": "TG", "780": "TT", "788": "TN", "792": "TR", "795": "TM", "800": "UG",
//   "804": "UA", "807": "MK", "818": "EG", "826": "GB", "834": "TZ", "840": "US",
//   "858": "UY", "860": "UZ", "862": "VE", "887": "YE", "894": "ZM",
// };

// const motionEase = "easeOut" as const;

// const containerVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: motionEase } },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 16 },
//   visible: (index = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, delay: index * 0.08, ease: motionEase },
//   }),
// };

// // ─── Formatting helpers ───────────────────────────────────────────────────

// function toText(value: unknown): string {
//   if (value === null || value === undefined) return "";
//   return String(value);
// }

// function toVisitCount(value: number | string | null | undefined) {
//   const count = Number(value ?? 0);
//   return Number.isFinite(count) ? count : 0;
// }

// function formatNumber(value: number) {
//   return Math.max(0, Math.floor(value)).toLocaleString("en-US");
// }

// /** Ordered largest → smallest so tier promotion is a simple index decrement. */
// const COMPACT_TIERS = [
//   { threshold: 1e12, suffix: "T" },
//   { threshold: 1e9, suffix: "B" },
//   { threshold: 1e6, suffix: "M" },
//   { threshold: 1e3, suffix: "K" },
// ];

// /**
//  * YouTube-style abbreviated counter: exact below 10,000, then rounded to the
//  * nearest tenth for the 10K–99K band and to the nearest whole unit above it —
//  * 10,000 → "10.0K", 12,400 → "12.4K", 12,500 → "12.5K", 4.2M → "4.2M".
//  */
// function formatCompactCount(value: number): string {
//   const count = Math.max(0, Math.floor(value));
//   if (!Number.isFinite(count)) return "0";
//   if (count < 10_000) return formatNumber(count);

//   let index = COMPACT_TIERS.findIndex((tier) => count >= tier.threshold);
//   if (index === -1) return formatNumber(count);

//   const render = (tierIndex: number) => {
//     const tier = COMPACT_TIERS[tierIndex];
//     const scaled = count / tier.threshold;
//     return { tier, scaled, decimals: scaled >= 100 ? 0 : 1 };
//   };

//   let { tier, scaled, decimals } = render(index);

//   // 999,950 would round up to "1000K" — promote it to the next unit instead.
//   if (Number(scaled.toFixed(decimals)) >= 1000 && index > 0) {
//     index -= 1;
//     ({ tier, scaled, decimals } = render(index));
//   }

//   let rendered = scaled.toFixed(decimals);
//   // 99,950 → "100.0K" reads badly; collapse it to "100K".
//   if (Number(rendered) >= 100) rendered = String(Math.round(scaled));

//   return `${rendered}${tier.suffix}`;
// }

// function hexToRgb(hex: string): [number, number, number] {
//   const normalized = hex.replace("#", "");
//   const full =
//     normalized.length === 3
//       ? normalized
//           .split("")
//           .map((char) => char + char)
//           .join("")
//       : normalized;
//   return [
//     parseInt(full.slice(0, 2), 16),
//     parseInt(full.slice(2, 4), 16),
//     parseInt(full.slice(4, 6), 16),
//   ];
// }

// /** Samples the colour ramp so hotter countries glow brighter. */
// function mixColors(ramp: readonly string[], amount: number): string {
//   const clamped = Math.max(0, Math.min(1, amount));
//   const scaled = clamped * (ramp.length - 1);
//   const index = Math.min(ramp.length - 2, Math.floor(scaled));
//   const local = scaled - index;
//   const from = hexToRgb(ramp[index]);
//   const to = hexToRgb(ramp[index + 1]);
//   const channel = (position: number) =>
//     Math.round(from[position] + (to[position] - from[position]) * local);
//   return `rgb(${channel(0)}, ${channel(1)}, ${channel(2)})`;
// }

// function isoFromGeoId(id: string | number | undefined): string | null {
//   if (id === undefined || id === null) return null;
//   const digits = toText(id).replace(/\D/g, "");
//   if (!digits) return null;
//   return ISO_NUMERIC[digits.padStart(3, "0")] ?? null;
// }

// function geoName(properties: unknown): string {
//   if (properties && typeof properties === "object") {
//     const name = (properties as { name?: unknown }).name;
//     if (typeof name === "string" && name.length > 0) return name;
//   }
//   return "Unknown region";
// }

// // ─── Data layer ───────────────────────────────────────────────────────────

// async function fetchStatsFromSupabase(): Promise<StatsFetchResult> {
//   const [totalsResult, countriesResult] = await Promise.all([
//     supabase
//       .from("visitor_totals")
//       .select("total_count,updated_at")
//       .eq("id", 1)
//       .maybeSingle(),
//     supabase
//       .from("country_visits")
//       .select("country_code,country_name,visit_count,last_visit_at")
//       .order("visit_count", { ascending: false }),
//   ]);

//   const rows = Array.isArray(countriesResult.data) ? countriesResult.data : null;
//   const updatedAt = totalsResult.data?.updated_at;

//   return {
//     total: totalsResult.data ? toVisitCount(totalsResult.data.total_count) : null,
//     updatedAt: typeof updatedAt === "string" ? updatedAt : null,
//     countries: rows
//       ? rows
//           .map((row) => ({
//             country_code: toText(row.country_code).toUpperCase(),
//             country_name: toText(row.country_name) || "Unknown",
//             visit_count: toVisitCount(row.visit_count),
//           }))
//           .filter(
//             (country) =>
//               /^[A-Z]{2}$/.test(country.country_code) && country.visit_count > 0,
//           )
//       : null,
//   };
// }

// // ─── Presentational pieces ────────────────────────────────────────────────

// function MetricCard({
//   label,
//   value,
//   detail,
//   icon: Icon,
//   isLoading,
//   index,
//   isPrimary,
//   accent,
// }: MetricCardProps) {
//   return (
//     <motion.div
//       variants={cardVariants}
//       custom={index}
//       whileHover={{ y: -4, transition: { duration: 0.2 } }}
//       className={`group relative h-full overflow-hidden rounded-2xl border ${
//         isPrimary
//           ? "border-[#0F7A5A]/30 bg-gradient-to-br from-[#0F7A5A]/8 via-white to-[#F4F8F6] shadow-lg shadow-[#0F7A5A]/12"
//           : "border-[#0B2545]/8 bg-white shadow-sm"
//       } p-6 transition-all duration-300 ${
//         isPrimary
//           ? "hover:border-[#0F7A5A]/45 hover:shadow-xl hover:shadow-[#0F7A5A]/18"
//           : "hover:border-[#0F7A5A]/25 hover:shadow-md"
//       }`}
//     >
//       <div
//         className={`absolute inset-x-0 top-0 bg-gradient-to-r from-[#0F7A5A]/0 via-[#0F7A5A]/45 to-[#0F7A5A]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
//           isPrimary ? "h-1.5" : "h-1"
//         }`}
//         aria-hidden="true"
//       />
//       <div className="flex items-start justify-between gap-4">
//         <div className="min-w-0 flex-1">
//           <p
//             className={`text-[11px] font-bold uppercase tracking-[0.16em] ${
//               isPrimary ? "text-[#0F7A5A]" : "text-[#4A5A6A]/70"
//             }`}
//           >
//             {label}
//           </p>
//           {isLoading ? (
//             <div
//               className={`mt-4 h-10 w-32 animate-pulse rounded-lg ${
//                 isPrimary ? "bg-[#0F7A5A]/15" : "bg-[#0B2545]/8"
//               }`}
//             />
//           ) : (
//             <div className="mt-2.5 flex flex-wrap items-baseline gap-2">
//               <p
//                 className={`font-extrabold leading-none tracking-tight text-[#0B2545] ${
//                   isPrimary ? "text-5xl sm:text-6xl" : "text-3xl"
//                 }`}
//               >
//                 {value}
//               </p>
//               {accent}
//             </div>
//           )}
//         </div>
//         <div
//           className={`flex shrink-0 items-center justify-center rounded-xl border ${
//             isPrimary
//               ? "h-16 w-16 border-[#0F7A5A]/25 bg-gradient-to-br from-[#0F7A5A]/20 to-[#0F7A5A]/8 text-[#0F7A5A]"
//               : "h-12 w-12 border-[#0F7A5A]/15 bg-gradient-to-br from-[#0F7A5A]/12 to-[#0F7A5A]/4 text-[#0F7A5A]"
//           } transition-transform duration-300 group-hover:scale-110`}
//         >
//           <Icon className={isPrimary ? "h-8 w-8" : "h-6 w-6"} aria-hidden />
//         </div>
//       </div>
//       <p
//         className={`mt-4 text-sm leading-relaxed ${
//           isPrimary ? "font-medium text-[#4A5A6A]" : "text-[#4A5A6A]"
//         }`}
//       >
//         {detail}
//       </p>
//     </motion.div>
//   );
// }

// function LegendGradient() {
//   return (
//     <div className="flex items-center gap-2">
//       <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
//         Low
//       </span>
//       <span
//         aria-hidden="true"
//         className="h-2 w-24 rounded-full"
//         style={{
//           background: `linear-gradient(to right, ${LAND_RAMP[0]}, ${LAND_RAMP[1]}, ${LAND_RAMP[2]})`,
//           boxShadow: "0 0 14px rgba(63, 224, 162, 0.35)",
//         }}
//       />
//       <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
//         High
//       </span>
//     </div>
//   );
// }

// function PulseDot({ className = "" }: { className?: string }) {
//   return (
//     <span className={`relative flex h-2.5 w-2.5 ${className}`} aria-hidden="true">
//       <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3FE0A2] opacity-70" />
//       <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#3FE0A2]" />
//     </span>
//   );
// }

// // ─── Section ──────────────────────────────────────────────────────────────

// export function VisitorMap() {
//   useTrackVisit();

//   const [stats, setStats] = useState<Stats>({
//     total: STARTING_TOTAL,
//     countries: DEMO_COUNTRIES,
//   });
//   const [loaded, setLoaded] = useState(false);
//   const [hasError, setHasError] = useState(false);
//   const [lastUpdated, setLastUpdated] = useState<Date | null>(new Date());
//   const [delta, setDelta] = useState(0);
//   const [hovered, setHovered] = useState<CountryVisit | null>(null);
//   const [clockTick, setClockTick] = useState(0);

//   const previousTotalRef = useRef(STARTING_TOTAL);
//   const mapFrameRef = useRef<HTMLDivElement | null>(null);
//   const [mapSize, setMapSize] = useState({ width: 880, height: 452 });

//   const applyResult = useCallback((result: StatsFetchResult) => {
//     const countries = result.countries && result.countries.length > 0
//       ? result.countries
//       : DEMO_COUNTRIES;

//     setStats({
//       total: result.total && result.total > 0 ? result.total : STARTING_TOTAL,
//       countries,
//     });
//     setLastUpdated(result.updatedAt ? new Date(result.updatedAt) : new Date());
//     setHasError(false);
//     setLoaded(true);
//   }, []);

//   const refreshStats = useCallback(async () => {
//     if (!USE_REAL_DATA) {
//       setStats({ total: STARTING_TOTAL, countries: DEMO_COUNTRIES });
//       setHasError(false);
//       setLoaded(true);
//       return;
//     }

//     try {
//       applyResult(await fetchStatsFromSupabase());
//     } catch {
//       setHasError(true);
//       setLoaded(true);
//     }
//   }, [applyResult]);

//   // Initial load + realtime subscriptions + lightweight polling so the
//   // counter visibly ticks upward between live events.
//   useEffect(() => {
//     let mounted = true;
//     let totalsChannel: ReturnType<typeof supabase.channel> | null = null;
//     let countriesChannel: ReturnType<typeof supabase.channel> | null = null;

//     void refreshStats();

//     if (USE_REAL_DATA) {
//       try {
//         totalsChannel = supabase
//           .channel("visitor-totals-changes")
//           .on(
//             "postgres_changes",
//             { event: "*", schema: "public", table: "visitor_totals" },
//             (payload: { new?: { total_count?: number } }) => {
//               if (!mounted) return;
//               const newTotal = toVisitCount(payload.new?.total_count);
//               if (newTotal > 0) {
//                 setStats((prev) => ({ ...prev, total: newTotal }));
//                 setLastUpdated(new Date());
//               }
//             },
//           )
//           .subscribe();

//         countriesChannel = supabase
//           .channel("country-visits-changes")
//           .on(
//             "postgres_changes",
//             { event: "*", schema: "public", table: "country_visits" },
//             () => {
//               if (!mounted) return;
//               void refreshStats();
//             },
//           )
//           .subscribe();
//       } catch {
//         // Realtime is best-effort; polling still keeps the numbers fresh.
//       }
//     }

//     const pollId = window.setInterval(() => {
//       if (document.visibilityState !== "visible") return;
//       void refreshStats();
//     }, POLL_INTERVAL_MS);

//     const clockId = window.setInterval(
//       () => setClockTick((tick) => tick + 1),
//       RELATIVE_TIME_TICK_MS,
//     );

//     return () => {
//       mounted = false;
//       window.clearInterval(pollId);
//       window.clearInterval(clockId);
//       if (totalsChannel) supabase.removeChannel(totalsChannel);
//       if (countriesChannel) supabase.removeChannel(countriesChannel);
//     };
//   }, [refreshStats]);

//   // Responsive map frame — the projection is rebuilt at the measured size so
//   // the world never gets squashed or letterboxed.
//   useEffect(() => {
//     const element = mapFrameRef.current;
//     if (!element) return;

//     const update = () => {
//       const width = Math.max(320, Math.round(element.clientWidth));
//       // d3's geoEqualEarth renders the world at 5.4133 × scale wide and
//       // 0.487 × that tall, so this keeps every coastline inside the frame.
//       const height = Math.max(300, Math.min(520, Math.round(width * 0.49)));
//       setMapSize((prev) =>
//         prev.width === width && prev.height === height ? prev : { width, height },
//       );
//     };

//     update();

//     if (typeof ResizeObserver === "undefined") return;
//     const observer = new ResizeObserver(update);
//     observer.observe(element);
//     return () => observer.disconnect();
//   }, []);

//   // Flash a "+n" badge whenever the running total grows.
//   useEffect(() => {
//     const previous = previousTotalRef.current;
//     previousTotalRef.current = stats.total;

//     if (!loaded || stats.total <= previous) return;

//     setDelta(stats.total - previous);
//     const hideId = window.setTimeout(() => setDelta(0), 3200);
//     return () => window.clearTimeout(hideId);
//   }, [stats.total, loaded]);

//   const maxCount = useMemo(
//     () => Math.max(1, ...stats.countries.map((country) => country.visit_count)),
//     [stats.countries],
//   );

//   const intensityByIso = useMemo(() => {
//     const map = new Map<string, { count: number; ratio: number }>();
//     for (const country of stats.countries) {
//       map.set(country.country_code, {
//         count: country.visit_count,
//         ratio: Math.max(0.08, Math.min(1, country.visit_count / maxCount)),
//       });
//     }
//     return map;
//   }, [stats.countries, maxCount]);

//   const mappedCountries = useMemo(
//     () => stats.countries.filter((country) => Boolean(CENTROIDS[country.country_code])),
//     [stats.countries],
//   );

//   const topCountries = useMemo(
//     () => [...stats.countries].sort((a, b) => b.visit_count - a.visit_count).slice(0, 6),
//     [stats.countries],
//   );

//   const topCountry = topCountries[0];
//   const mappedVisitCount = mappedCountries.reduce((sum, country) => sum + country.visit_count, 0);
//   const coveragePercent =
//     stats.total > 0 ? Math.min(100, Math.round((mappedVisitCount / stats.total) * 100)) : 0;

//   // Headline lifetime figure: seeded baseline plus every live tracked visit.
//   const lifetimeTotal = BASELINE_VISITS + stats.total;

//   const animatedTotal = useAnimatedNumber(lifetimeTotal, 1600);
//   const animatedCountries = useAnimatedNumber(stats.countries.length, 1400);
//   const animatedCoverage = useAnimatedNumber(coveragePercent, 1400);

//   const formatLastUpdated = () => {
//     if (!lastUpdated) return "Just now";
//     const diff = Math.floor((Date.now() - lastUpdated.getTime()) / 1000);
//     if (diff < 60) return "Just now";
//     if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
//     if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
//     return lastUpdated.toLocaleDateString();
//   };

//   // Re-evaluated on the interval tick so the relative label stays honest.
//   const lastUpdatedLabel = useMemo(formatLastUpdated, [lastUpdated, clockTick]);

//   const metrics: MetricCardProps[] = [
//     {
//       label: "Total Visits",
//       value: formatCompactCount(animatedTotal),
//       detail: (
//         <>
//           {formatNumber(lifetimeTotal)} tracked all-time
//           <span className="mx-1.5 text-[#0F7A5A]/40">•</span>
//           live updates
//         </>
//       ),
//       icon: Zap,
//       isPrimary: true,
//       index: 0,
//       accent: (
//         <AnimatePresence>
//           {delta > 0 && (
//             <motion.span
//               key={delta}
//               initial={{ opacity: 0, y: 6, scale: 0.85 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -6, scale: 0.9 }}
//               transition={{ duration: 0.25, ease: motionEase }}
//               className="inline-flex items-center gap-1 rounded-full bg-[#0F7A5A]/12 px-2.5 py-1 text-xs font-bold text-[#0F7A5A]"
//             >
//               <TrendingUp className="h-3 w-3" aria-hidden />
//               +{formatNumber(delta)}
//             </motion.span>
//           )}
//         </AnimatePresence>
//       ),
//     },
//     {
//       label: "Countries Reached",
//       value: formatNumber(animatedCountries),
//       detail: "Countries and regions with recorded visitors",
//       icon: Globe2,
//       index: 1,
//     },
//     {
//       label: "Top Region",
//       value: topCountry ? topCountry.country_name : "—",
//       detail: topCountry
//         ? `${formatCompactCount(topCountry.visit_count)} visits · ${Math.round(
//             (topCountry.visit_count / Math.max(1, stats.total)) * 100,
//           )}% of traffic`
//         : "Waiting for the first visit",
//       icon: MapPin,
//       index: 2,
//     },
    
//   ];

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F6FAF8]/70 to-white py-20 lg:py-32">
//       <div
//         className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0F7A5A]/15 to-transparent"
//         aria-hidden="true"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(15,122,90,0.10)_0%,transparent_70%)]" />
//         <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(11,37,69,0.08)_0%,transparent_70%)]" />
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle, rgba(11,37,69,0.10) 1px, transparent 1px)",
//             backgroundSize: "44px 44px",
//             maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 72%)",
//             WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 72%)",
//           }}
//         />
//       </div>

//       <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//         >
//           {/* ── Header ─────────────────────────────────────── */}
//           <div className="mb-12 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4 }}
//               className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#0F7A5A]/20 bg-white/90 px-4 py-2 shadow-sm backdrop-blur"
//             >
//               <PulseDot />
//               <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0F7A5A]">
//                 Live Global Analytics
//               </span>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#0B2545] sm:text-5xl">
//                 Global{" "}
//                 <span className="bg-gradient-to-r from-[#0F7A5A] to-[#13A677] bg-clip-text text-transparent">
//                   Visitor Analytics
//                 </span>
//               </h2>
//               <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#4A5A6A] sm:text-lg">
//                 Real-time insight into where the audience comes from — every visit is
//                 geolocated and streamed straight to this map.
//               </p>
//             </motion.div>
//           </div>

//           {/* ── Metrics ─────────────────────────────────────── */}
//           <motion.div
//             className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.15 }}
//             variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
//           >
//             {metrics.map((metric) => (
//               <div
//                 key={metric.label}
//                 className={metric.isPrimary ? "sm:col-span-2" : ""}
//               >
//                 <MetricCard {...metric} isLoading={!loaded} />
//               </div>
//             ))}
//           </motion.div>

//           {/* ── Globe + Leaderboard ─────────────────────────── */}
//           <div className="grid gap-5 lg:grid-cols-12">
//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.15 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="relative overflow-hidden rounded-3xl border border-[#0B2545]/15 bg-[#04121F] shadow-2xl shadow-[#0B2545]/25 lg:col-span-12"
//             >
//               {/* Panel header */}
//               <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-white/[0.03] px-6 py-5">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3FE0A2]/25 bg-[#3FE0A2]/10 text-[#3FE0A2]">
//                     <Globe2 className="h-5 w-5" aria-hidden />
//                   </div>
//                   <div>
//                     <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#3FE0A2]">
//                       Audience Map
//                     </h3>
//                     <p className="mt-0.5 text-sm font-medium text-white/90">
//                       Global Visitor Footprint
//                     </p>
//                   </div>
//                 </div>
//                 <LegendGradient />
//               </div>

//               {/* Map canvas */}
//               <div
//                 ref={mapFrameRef}
//                 className="relative overflow-hidden"
//                 style={{
//                   background:
//                     "radial-gradient(ellipse 78% 70% at 50% 42%, #0E3E63 0%, #08243A 55%, #030B16 100%)",
//                 }}
//               >
//                 <ComposableMap
//                   width={mapSize.width}
//                   height={mapSize.height}
//                   projectionConfig={{ scale: Math.round(mapSize.width * 0.181) }}
//                   style={{ width: "100%", height: "auto", display: "block" }}
//                 >
//                   <defs>
//                     <filter id="vm-land-glow" x="-30%" y="-30%" width="160%" height="160%">
//                       <feGaussianBlur stdDeviation="2.6" result="blur" />
//                       <feMerge>
//                         <feMergeNode in="blur" />
//                         <feMergeNode in="SourceGraphic" />
//                       </feMerge>
//                     </filter>
//                     <radialGradient id="vm-marker-core">
//                       <stop offset="0%" stopColor="#EAFFF7" />
//                       <stop offset="100%" stopColor={BRAND.mint} />
//                     </radialGradient>
//                   </defs>

//                   <Graticule
//                     fill="none"
//                     stroke="rgba(125,211,252,0.10)"
//                     strokeWidth={0.4}
//                   />

//                   <Geographies geography={GEO_URL}>
//                     {({ geographies }) =>
//                       geographies.map((geo) => {
//                         const iso = isoFromGeoId(geo.id);
//                         const entry = iso ? intensityByIso.get(iso) : undefined;
//                         const hasData = Boolean(entry);
//                         const ratio = entry?.ratio ?? 0;
//                         const label = geoName(geo.properties);

//                         return (
//                           <Geography
//                             key={geo.rsmKey}
//                             geography={geo}
//                             className="vm-land"
//                             fill={hasData ? mixColors(LAND_RAMP, ratio) : OCEAN_IDLE}
//                             stroke={hasData ? "rgba(190, 255, 226, 0.55)" : OCEAN_IDLE_STROKE}
//                             strokeWidth={hasData ? 0.6 : 0.45}
//                             filter={hasData && ratio > 0.4 ? "url(#vm-land-glow)" : undefined}
//                             onMouseEnter={() => {
//                               if (!entry) return;
//                               setHovered({
//                                 country_code: iso ?? "",
//                                 country_name: label,
//                                 visit_count: entry.count,
//                               });
//                             }}
//                             onMouseLeave={() => setHovered(null)}
//                             style={{
//                               default: { outline: "none" },
//                               hover: {
//                                 outline: "none",
//                                 fill: hasData
//                                   ? mixColors(LAND_RAMP, Math.min(1, ratio + 0.2))
//                                   : "#1B4A69",
//                               },
//                               pressed: { outline: "none" },
//                             }}
//                           >
//                             <title>
//                               {hasData
//                                 ? `${label} · ${formatNumber(entry?.count ?? 0)} visits`
//                                 : label}
//                             </title>
//                           </Geography>
//                         );
//                       })
//                     }
//                   </Geographies>

//                   {mappedCountries.map((country, index) => {
//                     const coords = CENTROIDS[country.country_code];
//                     const ratio = Math.min(1, country.visit_count / maxCount);
//                     const radius = 3 + Math.pow(ratio, 0.7) * 11;
//                     const color = mixColors(LAND_RAMP, Math.max(0.3, ratio));
//                     const isHotspot = index < 10;

//                     return (
//                       <Marker
//                         key={country.country_code}
//                         coordinates={coords}
//                         className="vm-marker"
//                         onMouseEnter={() => setHovered(country)}
//                         onMouseLeave={() => setHovered(null)}
//                       >
//                         {isHotspot && (
//                           <motion.circle
//                             r={radius}
//                             fill="none"
//                             stroke={color}
//                             strokeWidth={1.1}
//                             initial={{ r: radius, opacity: 0.6 }}
//                             animate={{ r: radius * 3.2, opacity: 0 }}
//                             transition={{
//                               duration: 2.8,
//                               repeat: Infinity,
//                               ease: "easeOut",
//                               delay: (index % 10) * 0.26,
//                             }}
//                           />
//                         )}
//                         <circle
//                           r={radius}
//                           fill={color}
//                           fillOpacity={0.18}
//                           stroke={color}
//                           strokeWidth={1.3}
//                           strokeOpacity={0.9}
//                         />
//                         <circle r={1.8 + ratio * 1.8} fill="url(#vm-marker-core)" />
//                         <circle
//                           r={radius + 4}
//                           fill="none"
//                           stroke="#EAFFF7"
//                           strokeOpacity={0.18}
//                           strokeWidth={0.7}
//                         />
//                         <title>{`${country.country_name} · ${formatCompactCount(
//                           country.visit_count,
//                         )} visits`}</title>
//                       </Marker>
//                     );
//                   })}
//                 </ComposableMap>

//                 {/* Atmosphere vignette */}
//                 <div
//                   aria-hidden="true"
//                   className="pointer-events-none absolute inset-0"
//                   style={{
//                     background:
//                       "radial-gradient(ellipse 72% 66% at 50% 46%, transparent 55%, rgba(2,8,16,0.55) 100%)",
//                   }}
//                 />

//                 {/* Hover readout */}
//                 <div className="pointer-events-none absolute inset-x-4 bottom-4 flex justify-start">
//                   <AnimatePresence mode="wait">
//                     {hovered ? (
//                       <motion.div
//                         key={hovered.country_code}
//                         initial={{ opacity: 0, y: 8 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 8 }}
//                         transition={{ duration: 0.2, ease: motionEase }}
//                         className="pointer-events-auto flex items-center gap-3 rounded-xl border border-[#3FE0A2]/25 bg-[#04121F]/90 px-4 py-2.5 shadow-xl shadow-black/40 backdrop-blur"
//                       >
//                         <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3FE0A2]/15 text-[#3FE0A2]">
//                           <MapPin className="h-4 w-4" aria-hidden />
//                         </span>
//                         <div className="leading-tight">
//                           <p className="text-sm font-semibold text-white">{hovered.country_name}</p>
//                           <p className="text-xs text-[#3FE0A2]">
//                             {formatCompactCount(hovered.visit_count)} visits ·{" "}
//                             {stats.total > 0
//                               ? Math.round((hovered.visit_count / stats.total) * 100)
//                               : 0}
//                             % of total
//                           </p>
//                         </div>
//                       </motion.div>
//                     ) : (
//                       <motion.div
//                         key="hint"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.2 }}
//                         className="rounded-xl border border-white/10 bg-[#04121F]/80 px-4 py-2.5 text-xs font-medium text-white/60 backdrop-blur"
//                       >
//                         Hover any country or beacon for live numbers
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Loading / error state */}
//                 {(!loaded || hasError || mappedCountries.length === 0) && (
//                   <div className="absolute inset-x-4 top-4 rounded-xl border border-[#3FE0A2]/20 bg-[#04121F]/92 px-4 py-3 shadow-lg backdrop-blur">
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#3FE0A2]/12 text-[#3FE0A2]">
//                         {hasError ? (
//                           <AlertCircle className="h-4 w-4" aria-hidden="true" />
//                         ) : (
//                           <BarChart3 className="h-4 w-4" aria-hidden="true" />
//                         )}
//                       </div>
//                       <p className="text-sm font-medium text-white/85">
//                         {!loaded
//                           ? "Streaming visitor data…"
//                           : hasError
//                             ? "Live feed unavailable — showing the last known snapshot"
//                             : "Visitor locations appear here as soon as data is recorded"}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Panel footer */}
//               <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.03] px-6 py-4">
//                 <p className="flex items-center gap-2 text-sm text-white/60">
//                   <Radio className="h-3.5 w-3.5 text-[#3FE0A2]" aria-hidden="true" />
//                   <span className="font-semibold text-white/85">Last updated:</span>{" "}
//                   {lastUpdatedLabel}
//                 </p>
//                 <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
//                   {mappedCountries.length} beacons plotted
//                 </p>
//               </div>

//               <style>{`
//                 .vm-land { transition: fill 420ms ease, stroke 420ms ease, opacity 420ms ease; }
//                 .vm-marker { cursor: pointer; }
//                 .vm-marker circle { transition: r 420ms ease; }
//               `}</style>
//             </motion.div>

//             {/* Leaderboard */}
//             {/* <motion.aside
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.15 }}
//               transition={{ duration: 0.5, delay: 0.18 }}
//               className="flex flex-col gap-5 lg:col-span-4"
//             >
//               <div className="flex-1 rounded-3xl border border-[#0B2545]/8 bg-white p-6 shadow-sm">
//                 <div className="mb-5 flex items-center justify-between gap-3">
//                   <div>
//                     <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0F7A5A]">
//                       Top Regions
//                     </h3>
//                     <p className="mt-1 text-base font-semibold text-[#0B2545]">
//                       Where visitors come from
//                     </p>
//                   </div>
//                   <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0F7A5A]/15 bg-[#0F7A5A]/8 text-[#0F7A5A]">
//                     <Globe2 className="h-5 w-5" aria-hidden />
//                   </span>
//                 </div>

//                 <ul className="flex flex-col gap-4">
//                   {topCountries.length === 0 ? (
//                   <li className="rounded-2xl border border-dashed border-[#0B2545]/10 px-4 py-6 text-center text-sm text-[#4A5A6A]">
//                     Regions will appear here as soon as visits are recorded.
//                   </li>
//                 ) : (
//                   topCountries.map((country, index) => {
//                     const percent = Math.max(
//                       3,
//                       Math.round((country.visit_count / maxCount) * 100),
//                     );
//                     const share =
//                       stats.total > 0
//                         ? Math.round((country.visit_count / stats.total) * 100)
//                         : 0;

//                     return (
//                       <li key={country.country_code}>
//                         <div className="mb-1.5 flex items-baseline justify-between gap-3">
//                           <span className="flex min-w-0 items-center gap-2.5">
//                             <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#0F7A5A]/8 text-[11px] font-bold text-[#0F7A5A]">
//                               {index + 1}
//                             </span>
//                             <span className="truncate text-sm font-semibold text-[#0B2545]">
//                               {country.country_name}
//                             </span>
//                           </span>
//                           <span className="shrink-0 text-xs font-bold text-[#0F7A5A]">
//                             {formatCompactCount(country.visit_count)}
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#0B2545]/6">
//                             <motion.div
//                               initial={{ width: 0 }}
//                               whileInView={{ width: `${percent}%` }}
//                               viewport={{ once: true }}
//                               transition={{
//                                 duration: 0.9,
//                                 delay: 0.15 + index * 0.07,
//                                 ease: motionEase,
//                               }}
//                               className="h-full rounded-full"
//                               style={{
//                                 background: `linear-gradient(to right, ${LAND_RAMP[1]}, ${LAND_RAMP[2]})`,
//                               }}
//                             />
//                           </div>
//                           <span className="w-9 shrink-0 text-right text-[11px] font-semibold text-[#4A5A6A]/70">
//                             {share}%
//                           </span>
//                         </div>
//                       </li>
//                     );
//                   })
//                 )}
//                 </ul>
//               </div>

//               <div className="rounded-3xl border border-[#0F7A5A]/12 bg-gradient-to-br from-[#0F7A5A]/6 via-white to-white p-6 shadow-sm">
//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#0F7A5A]/20 bg-[#0F7A5A]/12 text-[#0F7A5A]">
//                     <Sparkles className="h-5 w-5" aria-hidden />
//                   </span>
//                   <div className="min-w-0">
//                     <p className="text-sm font-bold text-[#0B2545]">
//                       {formatCompactCount(lifetimeTotal)} lifetime visits
//                     </p>
//                     <p className="mt-1 text-sm leading-relaxed text-[#4A5A6A]">
//                       Readers from {formatNumber(stats.countries.length)} countries and
//                       territories have landed on this portfolio.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.aside> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { AlertCircle, BarChart3, Globe2, MapPin, Radio, TrendingUp, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ComposableMap, Geographies, Geography, Graticule, Marker } from "react-simple-maps";
import { useTrackVisit } from "../hooks/useTrackVisit";
import { useAnimatedNumber } from "../hooks/useAnimatedNumber";
import { supabase } from "../lib/supabase";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const POLL_INTERVAL_MS = 15_000;
const RELATIVE_TIME_TICK_MS = 30_000;
const STARTING_TOTAL = 0;
const BASELINE_VISITS = 50_000;
const USE_REAL_DATA = true;

const BRAND = {
  green: "#0F7A5A",
  greenBright: "#13A677",
  mint: "#3FE0A2",
  navy: "#0B2545",
  slate: "#4A5A6A",
  mist: "#F8F9FA",
} as const;

const OCEAN_IDLE = "#12314A";
const OCEAN_IDLE_STROKE = "#1D4A69";
const LAND_RAMP = ["#0E5A73", "#0F8F73", "#3FE0A2"];

type CountryVisit = { country_code: string; country_name: string; visit_count: number };
type Stats = { total: number; countries: CountryVisit[] };
type StatsFetchResult = { total: number | null; updatedAt: string | null; countries: CountryVisit[] | null };

type MetricCardProps = {
  label: string;
  value: string;
  detail: ReactNode;
  icon: LucideIcon;
  isLoading?: boolean;
  index: number;
  isPrimary?: boolean;
  accent?: ReactNode;
};

const DEMO_COUNTRIES: CountryVisit[] = [
  { country_code: "US", country_name: "United States", visit_count: 3500 },
  { country_code: "IN", country_name: "India", visit_count: 2200 },
  { country_code: "GB", country_name: "United Kingdom", visit_count: 1800 },
  { country_code: "CA", country_name: "Canada", visit_count: 1200 },
  { country_code: "DE", country_name: "Germany", visit_count: 1000 },
  { country_code: "AU", country_name: "Australia", visit_count: 800 },
];

const CENTROIDS: Record<string, [number, number]> = {
  US: [-98.5, 39.8], GB: [-2, 54], IN: [79, 22], NP: [84, 28], CN: [104, 35],
  DE: [10, 51], FR: [2, 47], BR: [-53, -10], AU: [134, -25], JP: [138, 38],
  CA: [-106, 56], RU: [90, 61], ZA: [24, -29], NG: [8, 9], MX: [-102, 23],
  ES: [-4, 40], IT: [12, 42], KR: [127, 36], ID: [113, -2], PK: [69, 30],
  BD: [90, 24], SG: [103.8, 1.35], AE: [54, 24], SA: [45, 24], EG: [30, 26],
  NL: [5.75, 52.1], SE: [15, 62], CH: [8, 47], PH: [122, 13], VN: [108, 16],
  TH: [101, 15], MY: [112, 2.5], NZ: [174, -41], AR: [-64, -34], KE: [38, 1],
  PT: [-8, 39], GR: [22, 39], IE: [-8, 53], AT: [14, 47],
  BE: [4.5, 50.8], DK: [9, 56], FI: [26, 64], NO: [8, 62], PL: [19, 52],
  CZ: [15, 49.8], HU: [20, 47], RO: [25, 46], BG: [25, 42.5], RS: [21, 44],
  UA: [31, 49], KZ: [66, 48], UZ: [64, 41], TR: [35, 39], IQ: [44, 33],
  QA: [51, 25], KW: [47.5, 29], OM: [57, 21], JO: [36, 31],
  LB: [35.8, 33.9], SY: [38, 35], GE: [44, 42], AM: [45, 40],
  MA: [-6, 32], DZ: [2, 28], TN: [9, 34], LY: [17, 27], ET: [40, 9],
  GH: [-1, 8], CI: [-5, 8], SN: [-14, 14], CM: [12, 6], AO: [18, -12],
  ZM: [28, -14], ZW: [30, -19], MZ: [35, -18], TZ: [35, -6], UG: [32, 1],
  AF: [66, 34], LK: [81, 7], MM: [96, 21], KH: [105, 12], LA: [103, 18],
  KP: [127, 40], TW: [121, 24], HK: [114, 22], CL: [-71, -33], CO: [-74, 4],
  PE: [-76, -10], VE: [-66, 6], EC: [-78, -2], BO: [-64, -17],
  PY: [-58, -23], UY: [-56, -33], GT: [-90, 15], CR: [-84, 10], PA: [-80, 9],
  JM: [-77, 18], TT: [-61, 11], MU: [57, -20], MG: [47, -19], BW: [25, -22],
  NA: [18, -22], CV: [-24, 16], GL: [-42, 72], IS: [-19, 65], LT: [24, 56],
  LV: [25, 57], EE: [26, 59], SI: [15, 46], AL: [20, 41], MK: [22, 42],
  ME: [19, 43], CY: [33, 35], MT: [14, 35.9], LU: [6, 49.8], BA: [18, 44],
  CD: [23, -3], CG: [15, -1], ML: [-4, 17], NE: [9, 17], SD: [30, 15],
  SO: [46, 5], MW: [34, -13], FJ: [178, -18], PG: [145, -6], NC: [165, -21],
};

const ISO_NUMERIC: Record<string, string> = {
  "004": "AF", "008": "AL", "012": "DZ", "024": "AO", "032": "AR", "036": "AU",
  "040": "AT", "044": "BS", "048": "BH", "050": "BD", "051": "AM", "056": "BE",
  "068": "BO", "070": "BA", "072": "BW", "076": "BR", "100": "BG", "104": "MM",
  "108": "BI", "112": "BY", "116": "KH", "120": "CM", "124": "CA", "140": "CF",
  "144": "LK", "148": "TD", "152": "CL", "156": "CN", "158": "TW", "170": "CO",
  "178": "CG", "180": "CD", "188": "CR", "191": "HR", "192": "CU", "196": "CY",
  "203": "CZ", "204": "BJ", "208": "DK", "214": "DO", "218": "EC", "222": "SV",
  "226": "GQ", "231": "ET", "232": "ER", "233": "EE", "242": "FJ", "246": "FI",
  "250": "FR", "262": "DJ", "266": "GA", "268": "GE", "270": "GM", "275": "PS",
  "288": "GH", "300": "GR", "320": "GT", "324": "GN", "328": "GY", "332": "HT",
  "340": "HN", "348": "HU", "352": "IS", "356": "IN", "360": "ID", "364": "IR",
  "368": "IQ", "372": "IE", "376": "IL", "380": "IT", "384": "CI", "388": "JM",
  "392": "JP", "398": "KZ", "400": "JO", "404": "KE", "408": "KP", "410": "KR",
  "414": "KW", "417": "KG", "418": "LA", "422": "LB", "428": "LV", "430": "LR",
  "434": "LY", "440": "LT", "442": "LU", "446": "MO", "450": "MG", "454": "MW",
  "458": "MY", "462": "MV", "466": "ML", "470": "MT", "478": "MR", "480": "MU",
  "484": "MX", "496": "MN", "498": "MD", "499": "ME", "500": "MZ", "504": "MA",
  "508": "MZ", "512": "OM", "516": "NA", "524": "NP", "528": "NL", "540": "NC",
  "554": "NZ", "558": "NI", "562": "NE", "566": "NG", "578": "NO", "586": "PK",
  "591": "PA", "598": "PG", "600": "PY", "604": "PE", "608": "PH", "616": "PL",
  "620": "PT", "624": "GW", "626": "TL", "628": "GQ", "630": "PR", "634": "QA",
  "642": "RO", "643": "RU", "646": "RW", "682": "SA", "686": "SN", "688": "RS",
  "694": "SL", "702": "SG", "703": "SK", "704": "VN", "705": "SI", "706": "SO",
  "710": "ZA", "716": "ZW", "724": "ES", "728": "SS", "729": "SD", "740": "SR",
  "748": "SZ", "752": "SE", "756": "CH", "760": "SY", "762": "TJ", "764": "TH",
  "768": "TG", "780": "TT", "788": "TN", "792": "TR", "795": "TM", "800": "UG",
  "804": "UA", "807": "MK", "818": "EG", "826": "GB", "834": "TZ", "840": "US",
  "858": "UY", "860": "UZ", "862": "VE", "887": "YE", "894": "ZM",
};

const motionEase = "easeOut" as const;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: motionEase } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: index * 0.08, ease: motionEase },
  }),
};

// ─── Formatting helpers ───────────────────────────────────────────────────

function toText(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value);
}

function toVisitCount(value: number | string | null | undefined) {
  const count = Number(value ?? 0);
  return Number.isFinite(count) ? count : 0;
}

function formatNumber(value: number) {
  return Math.max(0, Math.floor(value)).toLocaleString("en-US");
}

const COMPACT_TIERS = [
  { threshold: 1e12, suffix: "T" },
  { threshold: 1e9, suffix: "B" },
  { threshold: 1e6, suffix: "M" },
  { threshold: 1e3, suffix: "K" },
];

function formatCompactCount(value: number): string {
  const count = Math.max(0, Math.floor(value));
  if (!Number.isFinite(count)) return "0";
  if (count < 10_000) return formatNumber(count);

  let index = COMPACT_TIERS.findIndex((tier) => count >= tier.threshold);
  if (index === -1) return formatNumber(count);

  const render = (tierIndex: number) => {
    const tier = COMPACT_TIERS[tierIndex];
    const scaled = count / tier.threshold;
    return { tier, scaled, decimals: scaled >= 100 ? 0 : 1 };
  };

  let { tier, scaled, decimals } = render(index);

  if (Number(scaled.toFixed(decimals)) >= 1000 && index > 0) {
    index -= 1;
    ({ tier, scaled, decimals } = render(index));
  }

  let rendered = scaled.toFixed(decimals);
  if (Number(rendered) >= 100) rendered = String(Math.round(scaled));

  return `${rendered}${tier.suffix}`;
}

function hexToRgb(hex: string): [number, number, number] {
  const normalized = hex.replace("#", "");
  const full =
    normalized.length === 3
      ? normalized.split("").map((char) => char + char).join("")
      : normalized;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

function mixColors(ramp: readonly string[], amount: number): string {
  const clamped = Math.max(0, Math.min(1, amount));
  const scaled = clamped * (ramp.length - 1);
  const index = Math.min(ramp.length - 2, Math.floor(scaled));
  const local = scaled - index;
  const from = hexToRgb(ramp[index]);
  const to = hexToRgb(ramp[index + 1]);
  const channel = (position: number) =>
    Math.round(from[position] + (to[position] - from[position]) * local);
  return `rgb(${channel(0)}, ${channel(1)}, ${channel(2)})`;
}

function isoFromGeoId(id: string | number | undefined): string | null {
  if (id === undefined || id === null) return null;
  const digits = toText(id).replace(/\D/g, "");
  if (!digits) return null;
  return ISO_NUMERIC[digits.padStart(3, "0")] ?? null;
}

function geoName(properties: unknown): string {
  if (properties && typeof properties === "object") {
    const name = (properties as { name?: unknown }).name;
    if (typeof name === "string" && name.length > 0) return name;
  }
  return "Unknown region";
}

// ─── Data layer ───────────────────────────────────────────────────────────

async function fetchStatsFromSupabase(): Promise<StatsFetchResult> {
  const [totalsResult, countriesResult] = await Promise.all([
    supabase.from("visitor_totals").select("total_count,updated_at").eq("id", 1).maybeSingle(),
    supabase
      .from("country_visits")
      .select("country_code,country_name,visit_count,last_visit_at")
      .order("visit_count", { ascending: false }),
  ]);

  const rows = Array.isArray(countriesResult.data) ? countriesResult.data : null;
  const updatedAt = totalsResult.data?.updated_at;

  return {
    total: totalsResult.data ? toVisitCount(totalsResult.data.total_count) : null,
    updatedAt: typeof updatedAt === "string" ? updatedAt : null,
    countries: rows
      ? rows
          .map((row) => ({
            country_code: toText(row.country_code).toUpperCase(),
            country_name: toText(row.country_name) || "Unknown",
            visit_count: toVisitCount(row.visit_count),
          }))
          .filter((country) => /^[A-Z]{2}$/.test(country.country_code) && country.visit_count > 0)
      : null,
  };
}

// ─── Presentational pieces ────────────────────────────────────────────────

function MetricCard({ label, value, detail, icon: Icon, isLoading, index, isPrimary, accent }: MetricCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
        isPrimary
          ? "border-[#0F7A5A]/25 bg-gradient-to-br from-[#0F7A5A]/10 via-white to-[#F4F8F6] shadow-lg shadow-[#0F7A5A]/10 hover:border-[#0F7A5A]/40 hover:shadow-xl hover:shadow-[#0F7A5A]/15"
          : "border-[#0B2545]/10 bg-white shadow-sm shadow-[#0B2545]/5 hover:border-[#0F7A5A]/25 hover:shadow-md"
      }`}
    >
      {/* Persistent accent rail */}
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#13A677] to-[#0F7A5A] ${
          isPrimary ? "opacity-100" : "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        }`}
      />
      {isPrimary && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(19,166,119,0.16)_0%,transparent_70%)]"
        />
      )}

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${isPrimary ? "text-[#0F7A5A]" : "text-[#4A5A6A]/80"}`}>
            {label}
          </p>
          {isLoading ? (
            <div className={`mt-4 h-11 w-36 animate-pulse rounded-lg ${isPrimary ? "bg-[#0F7A5A]/15" : "bg-[#0B2545]/8"}`} />
          ) : (
            <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p
                className={`truncate font-extrabold leading-none tracking-tight tabular-nums text-[#0B2545] ${
                  isPrimary ? "text-5xl sm:text-6xl" : "text-3xl"
                }`}
              >
                {value}
              </p>
              {accent}
            </div>
          )}
        </div>
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl border text-[#0F7A5A] transition-transform duration-300 group-hover:scale-105 ${
            isPrimary
              ? "h-14 w-14 border-[#0F7A5A]/25 bg-gradient-to-br from-[#0F7A5A]/20 to-[#0F7A5A]/5"
              : "h-11 w-11 border-[#0F7A5A]/15 bg-gradient-to-br from-[#0F7A5A]/12 to-[#0F7A5A]/4"
          }`}
        >
          <Icon className={isPrimary ? "h-7 w-7" : "h-5 w-5"} aria-hidden />
        </div>
      </div>

      <p className="relative mt-5 border-t border-[#0B2545]/8 pt-4 text-sm leading-relaxed text-[#4A5A6A]">{detail}</p>
    </motion.div>
  );
}

function LegendGradient() {
  return (
    <div className="flex items-center gap-2.5" aria-label="Color scale from low to high visits">
      <span className="text-[11px] font-medium text-white/50">Fewer visits</span>
      <span
        aria-hidden="true"
        className="h-2 w-28 rounded-full ring-1 ring-white/10"
        style={{
          background: `linear-gradient(to right, ${LAND_RAMP[0]}, ${LAND_RAMP[1]}, ${LAND_RAMP[2]})`,
          boxShadow: "0 0 14px rgba(63, 224, 162, 0.3)",
        }}
      />
      <span className="text-[11px] font-medium text-white/50">More</span>
    </div>
  );
}

function PulseDot({ className = "" }: { className?: string }) {
  return (
    <span className={`relative flex h-2.5 w-2.5 ${className}`} aria-hidden="true">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3FE0A2] opacity-70 motion-reduce:animate-none" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#3FE0A2]" />
    </span>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────

export function VisitorMap() {
  useTrackVisit();
  const reduceMotion = useReducedMotion();

  const [stats, setStats] = useState<Stats>({ total: STARTING_TOTAL, countries: DEMO_COUNTRIES });
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(new Date());
  const [delta, setDelta] = useState(0);
  const [hovered, setHovered] = useState<CountryVisit | null>(null);
  const [clockTick, setClockTick] = useState(0);

  const previousTotalRef = useRef(STARTING_TOTAL);
  const mapFrameRef = useRef<HTMLDivElement | null>(null);
  const [mapSize, setMapSize] = useState({ width: 880, height: 452 });

  const applyResult = useCallback((result: StatsFetchResult) => {
    const countries = result.countries && result.countries.length > 0 ? result.countries : DEMO_COUNTRIES;
    setStats({
      total: result.total && result.total > 0 ? result.total : STARTING_TOTAL,
      countries,
    });
    setLastUpdated(result.updatedAt ? new Date(result.updatedAt) : new Date());
    setHasError(false);
    setLoaded(true);
  }, []);

  const refreshStats = useCallback(async () => {
    if (!USE_REAL_DATA) {
      setStats({ total: STARTING_TOTAL, countries: DEMO_COUNTRIES });
      setHasError(false);
      setLoaded(true);
      return;
    }
    try {
      applyResult(await fetchStatsFromSupabase());
    } catch {
      setHasError(true);
      setLoaded(true);
    }
  }, [applyResult]);

  useEffect(() => {
    let mounted = true;
    let totalsChannel: ReturnType<typeof supabase.channel> | null = null;
    let countriesChannel: ReturnType<typeof supabase.channel> | null = null;

    void refreshStats();

    if (USE_REAL_DATA) {
      try {
        totalsChannel = supabase
          .channel("visitor-totals-changes")
          .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "visitor_totals" },
            (payload: { new?: { total_count?: number } }) => {
              if (!mounted) return;
              const newTotal = toVisitCount(payload.new?.total_count);
              if (newTotal > 0) {
                setStats((prev) => ({ ...prev, total: newTotal }));
                setLastUpdated(new Date());
              }
            },
          )
          .subscribe();

        countriesChannel = supabase
          .channel("country-visits-changes")
          .on("postgres_changes", { event: "*", schema: "public", table: "country_visits" }, () => {
            if (!mounted) return;
            void refreshStats();
          })
          .subscribe();
      } catch {
        // Realtime is best-effort; polling still keeps the numbers fresh.
      }
    }

    const pollId = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      void refreshStats();
    }, POLL_INTERVAL_MS);

    const clockId = window.setInterval(() => setClockTick((tick) => tick + 1), RELATIVE_TIME_TICK_MS);

    return () => {
      mounted = false;
      window.clearInterval(pollId);
      window.clearInterval(clockId);
      if (totalsChannel) supabase.removeChannel(totalsChannel);
      if (countriesChannel) supabase.removeChannel(countriesChannel);
    };
  }, [refreshStats]);

  useEffect(() => {
    const element = mapFrameRef.current;
    if (!element) return;

    const update = () => {
      const width = Math.max(320, Math.round(element.clientWidth));
      const height = Math.max(300, Math.min(600, Math.round(width * 0.46)));
      setMapSize((prev) => (prev.width === width && prev.height === height ? prev : { width, height }));
    };

    update();

    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const previous = previousTotalRef.current;
    previousTotalRef.current = stats.total;
    if (!loaded || stats.total <= previous) return;

    setDelta(stats.total - previous);
    const hideId = window.setTimeout(() => setDelta(0), 3200);
    return () => window.clearTimeout(hideId);
  }, [stats.total, loaded]);

  const maxCount = useMemo(() => Math.max(1, ...stats.countries.map((c) => c.visit_count)), [stats.countries]);

  /** Shares are computed against the sum of country rows, so they never exceed 100%. */
  const countryTotal = useMemo(
    () => Math.max(1, stats.countries.reduce((sum, c) => sum + c.visit_count, 0)),
    [stats.countries],
  );

  const intensityByIso = useMemo(() => {
    const map = new Map<string, { count: number; ratio: number }>();
    for (const country of stats.countries) {
      map.set(country.country_code, {
        count: country.visit_count,
        ratio: Math.max(0.08, Math.min(1, country.visit_count / maxCount)),
      });
    }
    return map;
  }, [stats.countries, maxCount]);

  const mappedCountries = useMemo(
    () => stats.countries.filter((country) => Boolean(CENTROIDS[country.country_code])),
    [stats.countries],
  );

  const topCountries = useMemo(
    () => [...stats.countries].sort((a, b) => b.visit_count - a.visit_count).slice(0, 6),
    [stats.countries],
  );

  const topCountry = topCountries[0];
  const lifetimeTotal = BASELINE_VISITS + stats.total;

  const animatedTotal = useAnimatedNumber(lifetimeTotal, 1600);
  const animatedCountries = useAnimatedNumber(stats.countries.length, 1400);

  const lastUpdatedLabel = useMemo(() => {
    if (!lastUpdated) return "Just now";
    const diff = Math.floor((Date.now() - lastUpdated.getTime()) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return lastUpdated.toLocaleDateString();
    // clockTick re-evaluates the relative label on an interval
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastUpdated, clockTick]);

  const metrics: MetricCardProps[] = [
    {
      label: "Total visits",
      value: formatCompactCount(animatedTotal),
      detail: (
        <>
          {formatNumber(lifetimeTotal)} tracked all-time
          <span className="mx-2 text-[#0F7A5A]/40">•</span>
          updates live
        </>
      ),
      icon: Zap,
      isPrimary: true,
      index: 0,
      accent: (
        <AnimatePresence>
          {delta > 0 && (
            <motion.span
              key={delta}
              initial={{ opacity: 0, y: 6, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.9 }}
              transition={{ duration: 0.25, ease: motionEase }}
              className="inline-flex items-center gap-1 rounded-full bg-[#0F7A5A]/12 px-2.5 py-1 text-xs font-bold text-[#0F7A5A]"
            >
              <TrendingUp className="h-3 w-3" aria-hidden />+{formatNumber(delta)}
            </motion.span>
          )}
        </AnimatePresence>
      ),
    },
    {
      label: "Countries reached",
      value: formatNumber(animatedCountries),
      detail: "Countries and regions with recorded visitors",
      icon: Globe2,
      index: 1,
    },
    {
      label: "Top region",
      value: topCountry ? topCountry.country_name : "—",
      detail: topCountry
        ? `${formatCompactCount(topCountry.visit_count)} visits · ${Math.round(
            (topCountry.visit_count / countryTotal) * 100,
          )}% of traffic`
        : "Waiting for the first visit",
      icon: MapPin,
      index: 2,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F6FAF8]/70 to-white py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0F7A5A]/20 to-transparent" aria-hidden="true" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(15,122,90,0.10)_0%,transparent_70%)]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(11,37,69,0.08)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(11,37,69,0.10) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 72%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#0F7A5A]/20 bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
              <PulseDot />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0F7A5A]">Live global analytics</span>
            </div>

            <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#0B2545] sm:text-5xl">
              Global{" "}
              <span className="bg-gradient-to-r from-[#0F7A5A] to-[#13A677] bg-clip-text text-transparent">
                Visitor Analytics
              </span>
            </h2>
          
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#0F7A5A]/40 to-transparent" aria-hidden="true" />
          </div>

          {/* Metrics */}
          <motion.div
            className="mb-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {metrics.map((metric) => (
              <div key={metric.label} className={metric.isPrimary ? "sm:col-span-2" : ""}>
                <MetricCard {...metric} isLoading={!loaded} />
              </div>
            ))}
          </motion.div>

          {/* Map panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-[#0B2545]/15 bg-[#04121F] shadow-2xl shadow-[#0B2545]/25 ring-1 ring-white/5"
          >
            {/* Panel header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-white/[0.03] px-5 py-4 sm:px-6 sm:py-5">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3FE0A2]/25 bg-[#3FE0A2]/10 text-[#3FE0A2]">
                  <Globe2 className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Global visitor footprint</h3>
                  <p className="mt-0.5 text-xs text-white/50">
                    {formatNumber(stats.countries.length)} regions · {formatCompactCount(countryTotal)} located visits
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <LegendGradient />
                <span className="inline-flex items-center gap-2 rounded-full border border-[#3FE0A2]/25 bg-[#3FE0A2]/10 px-3 py-1.5 text-xs font-semibold text-[#3FE0A2]">
                  <PulseDot className="scale-75" />
                  Live
                </span>
              </div>
            </div>

            {/* Map canvas */}
            <div
              ref={mapFrameRef}
              className="relative overflow-hidden"
              style={{
                background: "radial-gradient(ellipse 78% 70% at 50% 42%, #0E3E63 0%, #08243A 55%, #030B16 100%)",
              }}
            >
              <ComposableMap
                width={mapSize.width}
                height={mapSize.height}
                projectionConfig={{ scale: Math.round(mapSize.width * 0.181) }}
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <defs>
                  <filter id="vm-land-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2.6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <radialGradient id="vm-marker-core">
                    <stop offset="0%" stopColor="#EAFFF7" />
                    <stop offset="100%" stopColor={BRAND.mint} />
                  </radialGradient>
                </defs>

                <Graticule fill="none" stroke="rgba(125,211,252,0.10)" strokeWidth={0.4} />

                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const iso = isoFromGeoId(geo.id);
                      const entry = iso ? intensityByIso.get(iso) : undefined;
                      const hasData = Boolean(entry);
                      const ratio = entry?.ratio ?? 0;
                      const label = geoName(geo.properties);

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          className="vm-land"
                          fill={hasData ? mixColors(LAND_RAMP, ratio) : OCEAN_IDLE}
                          stroke={hasData ? "rgba(190, 255, 226, 0.55)" : OCEAN_IDLE_STROKE}
                          strokeWidth={hasData ? 0.6 : 0.45}
                          filter={hasData && ratio > 0.4 ? "url(#vm-land-glow)" : undefined}
                          onMouseEnter={() => {
                            if (!entry) return;
                            setHovered({ country_code: iso ?? "", country_name: label, visit_count: entry.count });
                          }}
                          onMouseLeave={() => setHovered(null)}
                          style={{
                            default: { outline: "none" },
                            hover: {
                              outline: "none",
                              fill: hasData ? mixColors(LAND_RAMP, Math.min(1, ratio + 0.2)) : "#1B4A69",
                            },
                            pressed: { outline: "none" },
                          }}
                        >
                          <title>{hasData ? `${label} · ${formatNumber(entry?.count ?? 0)} visits` : label}</title>
                        </Geography>
                      );
                    })
                  }
                </Geographies>

                {mappedCountries.map((country, index) => {
                  const coords = CENTROIDS[country.country_code];
                  const ratio = Math.min(1, country.visit_count / maxCount);
                  const radius = 3 + Math.pow(ratio, 0.7) * 11;
                  const color = mixColors(LAND_RAMP, Math.max(0.3, ratio));
                  const isHotspot = index < 10 && !reduceMotion;

                  return (
                    <Marker
                      key={country.country_code}
                      coordinates={coords}
                      className="vm-marker"
                      onMouseEnter={() => setHovered(country)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {isHotspot && (
                        <motion.circle
                          r={radius}
                          fill="none"
                          stroke={color}
                          strokeWidth={1.1}
                          initial={{ r: radius, opacity: 0.6 }}
                          animate={{ r: radius * 3.2, opacity: 0 }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: (index % 10) * 0.26,
                          }}
                        />
                      )}
                      <circle r={radius} fill={color} fillOpacity={0.18} stroke={color} strokeWidth={1.3} strokeOpacity={0.9} />
                      <circle r={1.8 + ratio * 1.8} fill="url(#vm-marker-core)" />
                      <circle r={radius + 4} fill="none" stroke="#EAFFF7" strokeOpacity={0.18} strokeWidth={0.7} />
                      <title>{`${country.country_name} · ${formatCompactCount(country.visit_count)} visits`}</title>
                    </Marker>
                  );
                })}
              </ComposableMap>

              {/* Atmosphere vignette */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse 72% 66% at 50% 46%, transparent 55%, rgba(2,8,16,0.55) 100%)",
                }}
              />

              {/* Hover readout */}
              <div className="pointer-events-none absolute inset-x-4 bottom-4 flex justify-start">
                <AnimatePresence mode="wait">
                  {hovered ? (
                    <motion.div
                      key={hovered.country_code}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: motionEase }}
                      className="flex min-w-[220px] items-center gap-3 rounded-xl border border-[#3FE0A2]/25 bg-[#04121F]/90 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3FE0A2]/15 text-[#3FE0A2]">
                        <MapPin className="h-4 w-4" aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1 leading-tight">
                        <p className="truncate text-sm font-semibold text-white">{hovered.country_name}</p>
                        <p className="mt-1 text-xs text-[#3FE0A2]">
                          {formatCompactCount(hovered.visit_count)} visits ·{" "}
                          {Math.round((hovered.visit_count / countryTotal) * 100)}% of total
                        </p>
                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${Math.max(4, Math.round((hovered.visit_count / maxCount) * 100))}%`,
                              background: `linear-gradient(to right, ${LAND_RAMP[1]}, ${LAND_RAMP[2]})`,
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="hint"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-xl border border-white/10 bg-[#04121F]/80 px-4 py-2.5 text-xs font-medium text-white/60 backdrop-blur"
                    >
                      Hover a country or beacon to see its visit count
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Loading / error state */}
              {(!loaded || hasError || mappedCountries.length === 0) && (
                <div
                  role="status"
                  className="absolute inset-x-4 top-4 rounded-xl border border-[#3FE0A2]/20 bg-[#04121F]/90 px-4 py-3 shadow-lg backdrop-blur sm:left-auto sm:max-w-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#3FE0A2]/12 text-[#3FE0A2]">
                      {hasError ? <AlertCircle className="h-4 w-4" aria-hidden="true" /> : <BarChart3 className="h-4 w-4" aria-hidden="true" />}
                    </div>
                    <p className="text-sm font-medium text-white/85">
                      {!loaded
                        ? "Loading visitor data…"
                        : hasError
                          ? "Live feed unavailable — showing the last known snapshot"
                          : "Visitor locations appear here as soon as data is recorded"}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Top regions */}
            <div className="border-t border-white/10 bg-white/[0.02] px-5 py-6 sm:px-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-white/90">Top regions</h3>
                <span className="text-xs text-white/45">Share of located visits</span>
              </div>

              {topCountries.length === 0 ? (
                <p className="rounded-xl border border-dashed border-white/10 px-4 py-6 text-center text-sm text-white/50">
                  Regions will appear here as soon as visits are recorded.
                </p>
              ) : (
                <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                  {topCountries.map((country, index) => {
                    const percent = Math.max(3, Math.round((country.visit_count / maxCount) * 100));
                    const share = Math.round((country.visit_count / countryTotal) * 100);
                    return (
                      <li key={country.country_code}>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="flex min-w-0 items-center gap-2.5">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#3FE0A2]/20 bg-[#3FE0A2]/10 text-[11px] font-bold tabular-nums text-[#3FE0A2]">
                              {index + 1}
                            </span>
                            <span className="truncate text-sm font-medium text-white/90">{country.country_name}</span>
                          </span>
                          <span className="shrink-0 text-xs font-semibold tabular-nums text-white/70">
                            {formatCompactCount(country.visit_count)}
                            <span className="ml-1.5 text-white/40">{share}%</span>
                          </span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.15 + index * 0.07, ease: motionEase }}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(to right, ${LAND_RAMP[1]}, ${LAND_RAMP[2]})` }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Panel footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.03] px-5 py-4 sm:px-6">
              <p className="flex items-center gap-2 text-sm text-white/60">
                <Radio className="h-3.5 w-3.5 text-[#3FE0A2]" aria-hidden="true" />
                <span className="font-semibold text-white/85">Last updated</span>
                <span aria-live="polite">{lastUpdatedLabel}</span>
              </p>
              <p className="text-xs font-medium text-white/45">{mappedCountries.length} beacons plotted</p>
            </div>

            <style>{`
              .vm-land { transition: fill 420ms ease, stroke 420ms ease, opacity 420ms ease; }
              .vm-marker { cursor: pointer; }
              .vm-marker circle { transition: r 420ms ease; }
              @media (prefers-reduced-motion: reduce) {
                .vm-land, .vm-marker circle { transition: none; }
              }
            `}</style>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}