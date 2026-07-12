// "use client";

// import { useEffect, useMemo, useState } from "react";
// import type { ComponentType } from "react";
// import { motion } from "framer-motion";
// import type { Variants } from "framer-motion";
// import { Activity, AlertCircle, BarChart3, Globe2, MapPin, Radio, TrendingUp, Users, Clock } from "lucide-react";
// import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
// import { useTrackVisit } from "../hooks/useTrackVisit";
// import { useAnimatedNumber } from "../hooks/useAnimatedNumber";
// import { supabase } from "../lib/supabase";

// const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
// const POLL_INTERVAL_MS = 10_000;
// const STARTING_TOTAL = 10_000;

// type CountryVisit = {
//   country_code: string;
//   country_name: string;
//   visit_count: number;
// };

// type Stats = {
//   total: number;
//   countries: CountryVisit[];
// };

// type VisitorStatsResponse = {
//   total?: number | string | null;
//   countries?: Array<{
//     country_code?: string | null;
//     country_name?: string | null;
//     visit_count?: number | string | null;
//   }>;
// };

// type MetricCardProps = {
//   label: string;
//   value: string;
//   detail: string;
//   icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
//   isLoading?: boolean;
//   index: number;
// };

// const CENTROIDS: Record<string, [number, number]> = {
//   US: [-98.5, 39.8], GB: [-2, 54], IN: [79, 22], NP: [84, 28], CN: [104, 35],
//   DE: [10, 51], FR: [2, 47], BR: [-53, -10], AU: [134, -25], JP: [138, 38],
//   CA: [-106, 56], RU: [90, 61], ZA: [24, -29], NG: [8, 9], MX: [-102, 23],
//   ES: [-4, 40], IT: [12, 42], KR: [127, 36], ID: [113, -2], PK: [69, 30],
//   BD: [90, 24], SG: [103.8, 1.35], AE: [54, 24], SA: [45, 24], EG: [30, 26],
//   NL: [5.75, 52.1], SE: [15, 62], CH: [8, 47], PH: [122, 13], VN: [108, 16],
//   TH: [101, 15], MY: [112, 2.5], NZ: [174, -41], AR: [-64, -34], KE: [38, 1],
// };

// const motionEase = "easeOut" as const;

// const containerVariants: Variants = {
//   hidden: { opacity: 0, y: 18 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: motionEase } },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 12 },
//   visible: (index = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.32, delay: index * 0.05, ease: motionEase },
//   }),
// };

// function toVisitCount(value: number | string | null | undefined) {
//   const count = Number(value ?? 0);
//   return Number.isFinite(count) ? count : 0;
// }

// function formatNumber(value: number) {
//   return value.toLocaleString();
// }

// function MetricCard({ label, value, detail, icon: Icon, isLoading, index }: MetricCardProps) {
//   // Try to parse value as number for animation
//   const numericValue = useMemo(() => {
//     if (typeof value === "string") {
//       // Remove commas and percent signs
//       const cleaned = value.replace(/,/g, "").replace(/%/g, "");
//       const num = Number(cleaned);
//       return Number.isFinite(num) ? num : null;
//     }
//     return typeof value === "number" ? value : null;
//   }, [value]);

//   const animatedNumber = useAnimatedNumber(numericValue ?? 0, 1500);
  
//   // Format the animated number
//   const displayValue = useMemo(() => {
//     if (numericValue === null) return value;
//     if (typeof value === "string" && value.includes("%")) {
//       return `${animatedNumber}%`;
//     }
//     return animatedNumber.toLocaleString();
//   }, [animatedNumber, value, numericValue]);

//   return (
//     <motion.div
//       variants={cardVariants}
//       custom={index}
//       whileHover={{ y: -3 }}
//       className="dashboard-panel-soft group relative overflow-hidden p-4 transition-all duration-200 hover:border-[#0F7A5A]/25 hover:shadow-lg hover:shadow-[#0B2545]/8"
//     >
//       <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-[#0F7A5A]/0 via-[#0F7A5A]/45 to-[#0F7A5A]/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
//       <div className="flex items-start justify-between gap-3">
//         <div className="min-w-0">
//           <p className="type-caption font-semibold text-[#4A5A6A]">{label}</p>
//           {isLoading ? (
//             <div className="mt-3 h-8 w-24 animate-pulse rounded-md bg-[#0F7A5A]/10" />
//           ) : (
//             <p className="mt-2 text-2xl font-extrabold leading-none text-[#0B2545]">{displayValue}</p>
//           )}
//         </div>
//         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#0F7A5A]/15 bg-[#0F7A5A]/8 text-[#0F7A5A] transition-transform duration-200 group-hover:scale-105">
//           <Icon className="h-5 w-5" aria-hidden />
//         </div>
//       </div>
//       <p className="type-caption mt-3 text-[#4A5A6A]">{detail}</p>
//     </motion.div>
//   );
// }

// export function VisitorMap() {
//   useTrackVisit();

//   // Dummy fallback data
//   const dummyCountries: CountryVisit[] = [
//     { country_code: "US", country_name: "United States", visit_count: 3500 },
//     { country_code: "IN", country_name: "India", visit_count: 2200 },
//     { country_code: "GB", country_name: "United Kingdom", visit_count: 1800 },
//     { country_code: "CA", country_name: "Canada", visit_count: 1200 },
//     { country_code: "DE", country_name: "Germany", visit_count: 1000 },
//     { country_code: "AU", country_name: "Australia", visit_count: 800 },
//   ];

//   const [stats, setStats] = useState<Stats>({ total: STARTING_TOTAL, countries: dummyCountries });
//   const [loaded, setLoaded] = useState(false);
//   const [hasError, setHasError] = useState(false);
//   const [lastUpdated, setLastUpdated] = useState<Date | null>(new Date());

//   useEffect(() => {
//     let mounted = true;

//     // Function to load initial stats
//     async function loadInitialStats() {
//       try {
//         const [totalsResult, countriesResult] = await Promise.all([
//           supabase.from('visitor_totals').select('total_count, updated_at').eq('id', 1).single(),
//           supabase.from('country_visits').select('country_code, country_name, visit_count, last_visit_at').order('visit_count', { ascending: false }),
//         ]);

//         if (!mounted) return;

//         if (totalsResult.error) {
//           console.log('Using dummy data for totals');
//         }
//         if (countriesResult.error) {
//           console.log('Using dummy data for countries');
//         }

//         // Use real data if available, otherwise use dummy
//         const countries = (countriesResult.data && countriesResult.data.length > 0)
//           ? (countriesResult.data ?? [])
//               .map((country) => ({
//                 country_code: (country.country_code ?? "XX").toUpperCase(),
//                 country_name: country.country_name ?? "Unknown",
//                 visit_count: toVisitCount(country.visit_count),
//               }))
//               .filter((country) => country.country_code !== "XX" && country.visit_count > 0)
//           : dummyCountries;

//         const total = (totalsResult.data && !totalsResult.error) 
//           ? (toVisitCount(totalsResult.data?.total_count) || STARTING_TOTAL)
//           : STARTING_TOTAL;

//         setStats({
//           total,
//           countries,
//         });
//         setLastUpdated((totalsResult.data && !totalsResult.error && totalsResult.data?.updated_at) 
//           ? new Date(totalsResult.data.updated_at) 
//           : new Date());
//         setHasError(false);
//         setLoaded(true);
//       } catch (error) {
//         console.log('Using dummy data (error loading from Supabase):', error);
//         if (mounted) {
//           setStats({ total: STARTING_TOTAL, countries: dummyCountries });
//           setHasError(false);
//           setLoaded(true);
//         }
//       }
//     }

//     loadInitialStats();

//     // Subscribe to realtime changes for visitor_totals
//     const totalsChannel = supabase
//       .channel('visitor-totals-changes')
//       .on(
//         'postgres_changes',
//         { event: '*', schema: 'public', table: 'visitor_totals' },
//         (payload) => {
//           if (!mounted) return;
//           const newTotal = toVisitCount(payload.new?.total_count);
//           if (newTotal > 0) {
//             setStats(prev => ({ ...prev, total: newTotal }));
//             setLastUpdated(new Date());
//           }
//         }
//       )
//       .subscribe();

//     // Subscribe to realtime changes for country_visits
//     const countriesChannel = supabase
//       .channel('country-visits-changes')
//       .on(
//         'postgres_changes',
//         { event: '*', schema: 'public', table: 'country_visits' },
//         async () => {
//           if (!mounted) return;
//           // Refetch countries when there's a change
//           try {
//             const countriesResult = await supabase
//               .from('country_visits')
//               .select('country_code, country_name, visit_count')
//               .order('visit_count', { ascending: false });

//             if (!mounted || countriesResult.error) return;

//             const countries = (countriesResult.data ?? [])
//               .map((country) => ({
//                 country_code: (country.country_code ?? "XX").toUpperCase(),
//                 country_name: country.country_name ?? "Unknown",
//                 visit_count: toVisitCount(country.visit_count),
//               }))
//               .filter((country) => country.country_code !== "XX" && country.visit_count > 0);

//             if (countries.length > 0) {
//               setStats(prev => ({ ...prev, countries }));
//               setLastUpdated(new Date());
//             }
//           } catch (error) {
//             console.error('Error refreshing country visits:', error);
//           }
//         }
//       )
//       .subscribe();

//     return () => {
//       mounted = false;
//       supabase.removeChannel(totalsChannel);
//       supabase.removeChannel(countriesChannel);
//     };
//   }, []);

//   const maxCount = useMemo(
//     () => Math.max(1, ...stats.countries.map((country) => country.visit_count)),
//     [stats.countries]
//   );

//   const mappedCountries = useMemo(
//     () => stats.countries.filter((country) => CENTROIDS[country.country_code]),
//     [stats.countries]
//   );

//   const topCountries = stats.countries.slice(0, 5);
//   const topCountry = topCountries[0];
//   const mappedVisitCount = mappedCountries.reduce((sum, country) => sum + country.visit_count, 0);
//   const coveragePercent = stats.total > 0 ? Math.min(100, Math.round((mappedVisitCount / stats.total) * 100)) : 0;

//   const formatLastUpdated = () => {
//     if (!lastUpdated) return "Just now";
//     const now = new Date();
//     const diff = Math.floor((now.getTime() - lastUpdated.getTime()) / 1000);
//     if (diff < 60) return "Just now";
//     if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
//     if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
//     return lastUpdated.toLocaleDateString();
//   };

//   const metrics = [
//     {
//       label: "Total visits",
//       value: formatNumber(stats.total),
//       // detail: loaded ? "Tracked through Supabase" : "Syncing visitor data",
//       icon: Activity,
//     },
//     {
//       label: "Countries",
//       value: formatNumber(stats.countries.length),
//       // detail: "Unique country records",
//       icon: Globe2,
//     },
//     {
//       label: "Mapped visits",
//       value: `${coveragePercent}%`,
//       detail: `${formatNumber(mappedVisitCount)} visits with map coordinates`,
//       icon: MapPin,
//     },
//     // {
//     //   label: "Last updated",
//     //   value: formatLastUpdated(),
//     //   detail: "Live updates via Supabase Realtime",
//     //   icon: Clock,
//     // },
//   ];

//   return (
//     <section className="relative overflow-hidden" style={{ padding: 'clamp(72px, 10vw, 120px) 0' }}>
//       <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#0F7A5A]/20 to-transparent" aria-hidden="true" />
//       <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 5vw, 56px)' }}>
//         <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
//         <div className="mb-8 flex flex-col items-center gap-5 text-center">
//   <div className="max-w-2xl">
//     <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0F7A5A]/20 bg-white px-3 py-1.5 text-[#0F7A5A] shadow-soft">
//       <Radio className="h-4 w-4" aria-hidden="true" />
//       <span className="type-kicker">Live Global Reach</span>
//     </div>
//     <h2
//       style={{
//         fontSize: 'clamp(30px, 4.5vw, 48px)',
//         fontWeight: 700,
//         letterSpacing: 'var(--tracking-normal)',
//         lineHeight: 1.1,
//         color: 'var(--navy)',
//         margin: 0,
//         fontFamily: 'var(--font-app)',
//       }}
//     >
//       Visitor{' '}
//       <span
//         style={{
//           background: 'linear-gradient(90deg, var(--green) 0%, var(--green-light) 100%)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           backgroundClip: 'text',
//         }}
//       >
//         Analytics
//       </span>
//     </h2>
//               {/* <p className="type-body mt-3 max-w-2xl text-[#4A5A6A]">
//                 A real-time view of audience reach across regions, powered by Supabase and presented as a focused analytics dashboard.
//               </p> */}
//             </div>

            
//           </div>

//           <motion.div className="flex items-center justify-between" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
//             {metrics.map((metric, index) => (
//               <MetricCard key={metric.label} {...metric} index={index} isLoading={!loaded && index !== 0} />
//             ))}
//           </motion.div>

//           <div className="mt-5 items-center justify-center flex w-full">
//             <motion.div
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               className="dashboard-panel relative min-h-[360px] overflow-hidden p-3 sm:p-5 lg:min-h-[560px]"
//             >
//               <div className="mb-4">
//                 <div>
//                   <p className="type-label text-[#0F7A5A] flex items-center justify-center">Audience map</p>
//                   {/* <h3 className="type-card-title mt-1 text-[#0B2545]">Global visitor footprint</h3> */}
//                 </div>
//                 <div className="flex flex-wrap items-center gap-3 rounded-lg border border-[#0F7A5A]/10 bg-[#F8F9FA] px-3 py-2">
//                   {/* <span className="flex items-center gap-2 type-caption text-[#4A5A6A]"><span className="h-2.5 w-2.5 rounded-full bg-[#00B894]" /> Visitor hub</span> */}
//                   {/* <span className="flex items-center gap-2 type-caption text-[#4A5A6A]"><span className="h-2.5 w-2.5 rounded-full border border-[#00B894] bg-[#00B894]/20" /> Visit volume</span> */}
//                 </div>
//               </div>

//               <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-[#0F7A5A]/10 bg-linear-to-b from-[#F8F9FA] to-white lg:min-h-[455px]">
//                 <ComposableMap
//                   projectionConfig={{ scale: 150 }}
//                   style={{ width: "100%", height: "100%", minHeight: "inherit" }}
//                 >
//                   <Geographies geography={GEO_URL}>
//                     {({ geographies }) =>
//                       geographies.map((geo) => (
//                         <Geography
//                           key={geo.rsmKey}
//                           geography={geo}
//                           fill="#E9F3EF"
//                           stroke="#FFFFFF"
//                           strokeWidth={0.65}
//                           style={{
//                             default: { outline: "none" },
//                             hover: { outline: "none", fill: "#D9EFE7" },
//                             pressed: { outline: "none" },
//                           }}
//                         />
//                       ))
//                     }
//                   </Geographies>

//                   {mappedCountries.map((country) => {
//                     const coords = CENTROIDS[country.country_code];
//                     const radius = 4 + (country.visit_count / maxCount) * 15;
//                     return (
//                       <Marker key={country.country_code} coordinates={coords}>
//                         <circle r={radius} fill="rgba(0, 184, 148, 0.18)" stroke="#00B894" strokeWidth={1.4} />
//                         <circle r={2.4} fill="#0F7A5A" />
//                         <title>{`${country.country_name}: ${formatNumber(country.visit_count)} visits`}</title>
//                       </Marker>
//                     );
//                   })}
//                 </ComposableMap>

//                 {(!loaded || hasError || mappedCountries.length === 0) && (
//                   <div className="absolute inset-x-4 bottom-4 rounded-lg border border-[#0F7A5A]/10 bg-white/90 p-3 text-center shadow-soft backdrop-blur-md">
//                     <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F7A5A]/10 text-[#0F7A5A]">
//                       {hasError ? <AlertCircle className="h-5 w-5" aria-hidden="true" /> : <BarChart3 className="h-5 w-5" aria-hidden="true" />}
//                     </div>
//                     <p className="type-caption font-semibold text-[#0B2545]">
//                       {!loaded
//                         ? "Loading visitor data"
//                         : hasError
//                           ? "Visitor data is temporarily unavailable"
//                           : "Visitor locations will appear after country data is recorded"}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </motion.div>

//             {/* <motion.aside
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
//               className="dashboard-panel flex flex-col p-5"
//             >
//               <div className="flex items-center justify-between gap-4">
//                 <div>
//                   <p className="type-label text-[#0F7A5A]">Top countries</p>
//                   <h3 className="type-card-title mt-1 text-[#0B2545]">Engagement leaders</h3>
//                 </div>
//                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F7A5A]/10 text-[#0F7A5A]">
//                   <Users className="h-5 w-5" aria-hidden="true" />
//                 </div>
//               </div>

//               <div className="mt-5 flex flex-1 flex-col gap-3">
//                 {(topCountries.length ? topCountries : [{ country_code: "NA", country_name: "Awaiting data", visit_count: 0 }]).map((country, index) => {
//                   const progress = maxCount > 0 ? Math.max(4, Math.round((country.visit_count / maxCount) * 100)) : 0;
//                   return (
//                     <motion.div
//                       key={country.country_code}
//                       initial={{ opacity: 0, x: 10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.25, delay: index * 0.04 }}
//                       className="rounded-lg border border-[#0F7A5A]/10 bg-[#F8F9FA] p-3 transition-all duration-200 hover:border-[#0F7A5A]/20 hover:bg-white hover:shadow-soft"
//                     >
//                       <div className="flex items-center justify-between gap-3">
//                         <div className="min-w-0">
//                           <p className="type-caption font-semibold text-[#0B2545]">#{index + 1} {country.country_name}</p>
//                           <p className="type-caption text-[#4A5A6A]">{country.country_code}</p>
//                         </div>
//                         <p className="text-lg font-extrabold leading-none text-[#0F7A5A]">{formatNumber(country.visit_count)}</p>
//                       </div>
//                       <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#0F7A5A]/10">
//                         <div className="h-full rounded-full bg-[#0F7A5A] transition-all duration-500" style={{ width: `${progress}%` }} />
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </motion.aside> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Activity, AlertCircle, BarChart3, Globe2, MapPin, Radio, TrendingUp, Users, Clock, Zap } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useTrackVisit } from "../hooks/useTrackVisit";
import { useAnimatedNumber } from "../hooks/useAnimatedNumber";
import { supabase } from "../lib/supabase";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const POLL_INTERVAL_MS = 10_000;
const STARTING_TOTAL = 10_000;

type CountryVisit = {
  country_code: string;
  country_name: string;
  visit_count: number;
};

type Stats = {
  total: number;
  countries: CountryVisit[];
};

type VisitorStatsResponse = {
  total?: number | string | null;
  countries?: Array<{
    country_code?: string | null;
    country_name?: string | null;
    visit_count?: number | string | null;
  }>;
};

type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  isLoading?: boolean;
  index: number;
};

const CENTROIDS: Record<string, [number, number]> = {
  US: [-98.5, 39.8], GB: [-2, 54], IN: [79, 22], NP: [84, 28], CN: [104, 35],
  DE: [10, 51], FR: [2, 47], BR: [-53, -10], AU: [134, -25], JP: [138, 38],
  CA: [-106, 56], RU: [90, 61], ZA: [24, -29], NG: [8, 9], MX: [-102, 23],
  ES: [-4, 40], IT: [12, 42], KR: [127, 36], ID: [113, -2], PK: [69, 30],
  BD: [90, 24], SG: [103.8, 1.35], AE: [54, 24], SA: [45, 24], EG: [30, 26],
  NL: [5.75, 52.1], SE: [15, 62], CH: [8, 47], PH: [122, 13], VN: [108, 16],
  TH: [101, 15], MY: [112, 2.5], NZ: [174, -41], AR: [-64, -34], KE: [38, 1],
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

function toVisitCount(value: number | string | null | undefined) {
  const count = Number(value ?? 0);
  return Number.isFinite(count) ? count : 0;
}

function formatNumber(value: number) {
  return value.toLocaleString();
}

function MetricCard({ label, value, detail, icon: Icon, isLoading, index }: MetricCardProps) {
  const numericValue = useMemo(() => {
    if (typeof value === "string") {
      const cleaned = value.replace(/,/g, "").replace(/%/g, "");
      const num = Number(cleaned);
      return Number.isFinite(num) ? num : null;
    }
    return typeof value === "number" ? value : null;
  }, [value]);

  const animatedNumber = useAnimatedNumber(numericValue ?? 0, 1500);
  
  const displayValue = useMemo(() => {
    if (numericValue === null) return value;
    if (typeof value === "string" && value.includes("%")) {
      return `${animatedNumber}%`;
    }
    return animatedNumber.toLocaleString();
  }, [animatedNumber, value, numericValue]);

  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-xl border border-[#0F7A5A]/12 bg-gradient-to-br from-white to-[#F8F9FA] p-6 shadow-sm transition-all duration-300 hover:border-[#0F7A5A]/25 hover:shadow-md hover:shadow-[#0F7A5A]/8"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0F7A5A]/0 via-[#0F7A5A]/40 to-[#0F7A5A]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#4A5A6A]/70">{label}</p>
          {isLoading ? (
            <div className="mt-4 h-10 w-32 animate-pulse rounded-lg bg-[#0F7A5A]/8" />
          ) : (
            <p className="mt-3 text-3xl font-bold leading-tight text-[#0B2545]">{displayValue}</p>
          )}
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#0F7A5A]/15 bg-gradient-to-br from-[#0F7A5A]/12 to-[#0F7A5A]/6 text-[#0F7A5A] transition-all duration-300 group-hover:scale-110 group-hover:border-[#0F7A5A]/30">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
      </div>
      <p className="mt-4 text-sm text-[#4A5A6A]">{detail}</p>
    </motion.div>
  );
}

export function VisitorMap() {
  useTrackVisit();

  const dummyCountries: CountryVisit[] = [
    { country_code: "US", country_name: "United States", visit_count: 3500 },
    { country_code: "IN", country_name: "India", visit_count: 2200 },
    { country_code: "GB", country_name: "United Kingdom", visit_count: 1800 },
    { country_code: "CA", country_name: "Canada", visit_count: 1200 },
    { country_code: "DE", country_name: "Germany", visit_count: 1000 },
    { country_code: "AU", country_name: "Australia", visit_count: 800 },
  ];

  const [stats, setStats] = useState<Stats>({ total: STARTING_TOTAL, countries: dummyCountries });
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(new Date());

  // Add a state to track whether we should try to load real data
  // Set to true ONLY after running the migration in Supabase!
  const [useRealData, setUseRealData] = useState(false); // <-- CHANGE THIS TO TRUE AFTER RUNNING THE MIGRATION!

  useEffect(() => {
    let mounted = true;
    let totalsChannel: any = null;
    let countriesChannel: any = null;

    async function loadInitialStats() {
      if (!useRealData) {
        // Just use dummy data - NO NETWORK REQUESTS!
        if (mounted) {
          setStats({ total: STARTING_TOTAL, countries: dummyCountries });
          setHasError(true); // This is just to indicate we're using dummy data
          setLoaded(true);
        }
        return;
      }

      try {
        let totalsData = null;
        let countriesData = null;
        let hasTableError = false;

        try {
          const [totalsResult, countriesResult] = await Promise.all([
            supabase.from('visitor_totals').select('total_count,updated_at').eq('id', 1).maybeSingle(),
            supabase.from('country_visits').select('country_code,country_name,visit_count,last_visit_at').order('visit_count', { ascending: false }),
          ]);

          if (!totalsResult.error) {
            totalsData = totalsResult.data;
          } else {
            hasTableError = true;
          }
          
          if (!countriesResult.error) {
            countriesData = countriesResult.data;
          } else {
            hasTableError = true;
          }
        } catch {
          hasTableError = true;
        }

        if (!mounted) return;

        const countries = (countriesData && countriesData.length > 0)
          ? (countriesData ?? [])
              .map((country) => ({
                country_code: (country.country_code ?? "XX").toUpperCase(),
                country_name: country.country_name ?? "Unknown",
                visit_count: toVisitCount(country.visit_count),
              }))
              .filter((country) => country.country_code !== "XX" && country.visit_count > 0)
          : dummyCountries;

        const total = totalsData 
          ? (toVisitCount(totalsData?.total_count) || STARTING_TOTAL)
          : STARTING_TOTAL;

        setStats({
          total,
          countries,
        });
        setLastUpdated(totalsData?.updated_at 
          ? new Date(totalsData.updated_at) 
          : new Date());
        setHasError(hasTableError);
        setLoaded(true);
      } catch {
        if (mounted) {
          setStats({ total: STARTING_TOTAL, countries: dummyCountries });
          setHasError(true);
          setLoaded(true);
        }
      }
    }

    // Load initial stats - no table check to avoid 404s!
    loadInitialStats();

    // Only set up realtime subscriptions if we're using real data
    if (useRealData) {
      try {
        totalsChannel = supabase
          .channel('visitor-totals-changes')
          .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'visitor_totals' },
            (payload) => {
              if (!mounted) return;
              const newTotal = toVisitCount(payload.new?.total_count);
              if (newTotal > 0) {
                setStats(prev => ({ ...prev, total: newTotal }));
                setLastUpdated(new Date());
              }
            }
          )
          .subscribe();

        countriesChannel = supabase
          .channel('country-visits-changes')
          .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'country_visits' },
            async () => {
              if (!mounted) return;
              try {
                const countriesResult = await supabase
                  .from('country_visits')
                  .select('country_code,country_name,visit_count')
                  .order('visit_count', { ascending: false });

                if (!mounted || countriesResult.error) return;

                const countries = (countriesResult.data ?? [])
                  .map((country) => ({
                    country_code: (country.country_code ?? "XX").toUpperCase(),
                    country_name: country.country_name ?? "Unknown",
                    visit_count: toVisitCount(country.visit_count),
                  }))
                  .filter((country) => country.country_code !== "XX" && country.visit_count > 0);

                if (countries.length > 0) {
                  setStats(prev => ({ ...prev, countries }));
                  setLastUpdated(new Date());
                }
              } catch {
                // Ignore errors on realtime updates
              }
            }
          )
          .subscribe();
      } catch {
        // Ignore realtime subscription errors
      }
    }

    return () => {
      mounted = false;
      if (totalsChannel) {
        supabase.removeChannel(totalsChannel);
      }
      if (countriesChannel) {
        supabase.removeChannel(countriesChannel);
      }
    };
  }, [useRealData]);

  const maxCount = useMemo(
    () => Math.max(1, ...stats.countries.map((country) => country.visit_count)),
    [stats.countries]
  );

  const mappedCountries = useMemo(
    () => stats.countries.filter((country) => CENTROIDS[country.country_code]),
    [stats.countries]
  );

  const topCountries = stats.countries.slice(0, 5);
  const topCountry = topCountries[0];
  const mappedVisitCount = mappedCountries.reduce((sum, country) => sum + country.visit_count, 0);
  const coveragePercent = stats.total > 0 ? Math.min(100, Math.round((mappedVisitCount / stats.total) * 100)) : 0;

  const formatLastUpdated = () => {
    if (!lastUpdated) return "Just now";
    const now = new Date();
    const diff = Math.floor((now.getTime() - lastUpdated.getTime()) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return lastUpdated.toLocaleDateString();
  };

  const metrics = [
    {
      label: "Total Visits",
      value: formatNumber(stats.total),
      detail: "Tracked worldwide",
      icon: Zap,
    },
    {
      label: "Countries",
      value: formatNumber(stats.countries.length),
      detail: "Active regions",
      icon: Globe2,
    },
    {
      label: "Map Coverage",
      value: `${coveragePercent}%`,
      detail: `${formatNumber(mappedVisitCount)} mapped visits`,
      icon: MapPin,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8F9FA]/50 to-white py-20 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0F7A5A]/10 to-transparent" aria-hidden="true" />
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header Section */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0F7A5A]/20 bg-white px-4 py-2 shadow-sm"
            >
              <Radio className="h-4 w-4 text-[#0F7A5A]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#0F7A5A]">Live Global Analytics</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#0B2545] sm:text-5xl">
                Global{" "}
                <span className="bg-gradient-to-r from-[#0F7A5A] to-[#13A677] bg-clip-text text-transparent">
                  Visitor Analytics
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[#4A5A6A]">
                Real-time insights into your audience reach across regions, powered by Supabase Realtime
              </p>
            </motion.div>
          </div>

          {/* Metrics Grid */}
          <motion.div 
            className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {metrics.map((metric, index) => (
              <MetricCard key={metric.label} {...metric} index={index} isLoading={!loaded} />
            ))}
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-[#0F7A5A]/12 bg-white shadow-lg"
          >
            {/* Map Header */}
            <div className="border-b border-[#0F7A5A]/10 bg-gradient-to-r from-[#F8F9FA] to-white px-6 py-5 sm:px-8 sm:py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0F7A5A]">Audience Map</h3>
                  <p className="mt-1 text-base font-medium text-[#0B2545]">Global Visitor Footprint</p>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-[#0F7A5A]/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#0F7A5A]" />
                    <span className="text-xs font-medium text-[#4A5A6A]">Active Regions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative min-h-96 bg-gradient-to-b from-[#F8F9FA] to-white p-4 sm:p-6 lg:min-h-[520px]">
              <ComposableMap
                projectionConfig={{ scale: 150 }}
                style={{ width: "100%", height: "100%", minHeight: "inherit" }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#E9F3EF"
                        stroke="#FFFFFF"
                        strokeWidth={0.65}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: "#D9EFE7" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {mappedCountries.map((country) => {
                  const coords = CENTROIDS[country.country_code];
                  const radius = 4 + (country.visit_count / maxCount) * 15;
                  return (
                    <Marker key={country.country_code} coordinates={coords}>
                      <circle r={radius} fill="rgba(15, 122, 90, 0.15)" stroke="#0F7A5A" strokeWidth={1.5} />
                      <circle r={2.4} fill="#0F7A5A" />
                      <title>{`${country.country_name}: ${formatNumber(country.visit_count)} visits`}</title>
                    </Marker>
                  );
                })}
              </ComposableMap>

              {(!loaded || hasError || mappedCountries.length === 0) && (
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-[#0F7A5A]/12 bg-white/95 p-4 shadow-md backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F7A5A]/10 text-[#0F7A5A]">
                      {hasError ? <AlertCircle className="h-5 w-5" aria-hidden="true" /> : <BarChart3 className="h-5 w-5" aria-hidden="true" />}
                    </div>
                    <p className="font-medium text-[#0B2545]">
                      {!loaded
                        ? "Loading visitor data..."
                        : hasError
                          ? "Visitor data is temporarily unavailable"
                          : "Visitor locations will appear when data is recorded"}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Map Footer */}
            <div className="border-t border-[#0F7A5A]/10 bg-gradient-to-r from-[#F8F9FA] to-white px-6 py-4 sm:px-8">
              <p className="text-sm text-[#4A5A6A]">
                <span className="font-medium text-[#0B2545]">Last updated:</span> {formatLastUpdated()}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
