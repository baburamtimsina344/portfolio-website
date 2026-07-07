// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
// import { useTrackVisit } from "../hooks/useTrackVisit"

// const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
// const POLL_INTERVAL_MS = 10_000;

// type CountryVisit = {
//   country_code: string;
//   country_name: string;
//   visit_count: number;
// };

// type Stats = {
//   total: number;
//   countries: CountryVisit[];
// };

// // Rough centroids for common countries. Extend this map with any
// // countries you expect meaningful traffic from — a full ISO list is
// // easy to find (e.g. "country centroid lat lng json").
// const CENTROIDS: Record<string, [number, number]> = {
//   US: [-98.5, 39.8], GB: [-2, 54], IN: [79, 22], NP: [84, 28], CN: [104, 35],
//   DE: [10, 51], FR: [2, 47], BR: [-53, -10], AU: [134, -25], JP: [138, 38],
//   CA: [-106, 56], RU: [90, 61], ZA: [24, -29], NG: [8, 9], MX: [-102, 23],
//   ES: [-4, 40], IT: [12, 42], KR: [127, 36], ID: [113, -2], PK: [69, 30],
//   BD: [90, 24], SG: [103.8, 1.35], AE: [54, 24], SA: [45, 24], EG: [30, 26],
//   NL: [5.75, 52.1], SE: [15, 62], CH: [8, 47], PH: [122, 13], VN: [108, 16],
//   TH: [101, 15], MY: [112, 2.5], NZ: [174, -41], AR: [-64, -34], KE: [38, 1],
// };

// export function VisitorMap() {
//   useTrackVisit();

//   const [stats, setStats] = useState<Stats>({ total: 10000, countries: [] });
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     let mounted = true;

//     async function load() {
//       try {
//         const res = await fetch("/api/visitor-stats");
//         const data = await res.json();
//         if (mounted) {
//           setStats(data);
//           setLoaded(true);
//         }
//       } catch {
//         // keep previous stats on transient failure
//       }
//     }

//     load();
//     const interval = setInterval(load, POLL_INTERVAL_MS);
//     return () => {
//       mounted = false;
//       clearInterval(interval);
//     };
//   }, []);

//   const maxCount = useMemo(
//     () => Math.max(1, ...stats.countries.map((c) => c.visit_count)),
//     [stats.countries]
//   );

//   const topCountries = stats.countries.slice(0, 5);

//   return (
//     <section
//       style={{
//         background: "linear-gradient(135deg, #0B2545 0%, #1A3A6B 55%, #0B2545 100%)",
//         padding: "clamp(48px, 6vw, 80px) clamp(20px, 5vw, 56px)",
//         position: "relative",
//         overflow: "hidden",

//       }}
//     >
//       {/* Background dot grid, matching Footer */}
//       <div
//         aria-hidden="true"
//         style={{
//           position: "absolute",
//           inset: 0,
//           opacity: 0.025,
//           backgroundImage:
//             "radial-gradient(circle, rgba(0,184,148,0.6) 1px, transparent 1px)",
//           backgroundSize: "32px 32px",
//           pointerEvents: "none",
//         }}
//       />

//       <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
//         {/* ── Header ── */}
//         <div style={{ marginBottom: 32, textAlign: "center" }}>
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 8,
//               marginBottom: 16,
//               padding: "5px 14px",
//               borderRadius: 100,
//               background: "rgba(0,184,148,0.10)",
//               border: "1px solid rgba(0,184,148,0.24)",
//             }}
//           >
//             <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#00B894" }} />
//             <span
//               style={{
//                 fontSize: 9.5,
//                 fontWeight: 700,
//                 letterSpacing: "0.22em",
//                 textTransform: "uppercase",
//                 color: "#00B894",
//                 fontFamily: "Inter, sans-serif",
//               }}
//             >
//               Global Reach
//             </span>
//           </div>

//           <h2
//             style={{
//               fontSize: "clamp(24px, 3vw, 32px)",
//               fontWeight: 700,
//               color: "#FFFFFF",
//               margin: "0 0 8px 0",
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             Visitor Analytics
//           </h2>

//           <motion.p
//             key={stats.total}
//             initial={{ opacity: 0.4 }}
//             animate={{ opacity: 1 }}
//             style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}
//           >
//             <span style={{ color: "#00B894", fontWeight: 700, fontSize: 20 }}>
//               {stats.total.toLocaleString()}
//             </span>{" "}
//             total visits from {stats.countries.length || "—"} countries
//           </motion.p>
//         </div>

//         {/* ── Map ── */}
//         <div
//           style={{
//             borderRadius: 20,
//             border: "1px solid rgba(0,184,148,0.20)",
//             background: "rgba(255,255,255,0.03)",
//             padding: "clamp(12px, 2vw, 24px)",
//             marginBottom: 32,
//           }}
//         >
//           <ComposableMap projectionConfig={{ scale: 140 }} style={{ width: "100%", height: "auto" }}>
//             <Geographies geography={GEO_URL}>
//               {({ geographies }) =>
//                 geographies.map((geo) => (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill="rgba(255,255,255,0.06)"
//                     stroke="rgba(255,255,255,0.10)"
//                     style={{
//                       default: { outline: "none" },
//                       hover: { outline: "none", fill: "rgba(0,184,148,0.12)" },
//                       pressed: { outline: "none" },
//                     }}
//                   />
//                 ))
//               }
//             </Geographies>

//             {stats.countries.map((c) => {
//               const coords = CENTROIDS[c.country_code];
//               if (!coords) return null;
//               const r = 4 + (c.visit_count / maxCount) * 16;
//               return (
//                 <Marker key={c.country_code} coordinates={coords}>
//                   <circle r={r} fill="rgba(0,184,148,0.35)" stroke="#00B894" strokeWidth={1.5} />
//                   <circle r={2} fill="#00B894" />
//                 </Marker>
//               );
//             })}
//           </ComposableMap>

//           {!loaded && (
//             <p
//               style={{
//                 textAlign: "center",
//                 color: "rgba(255,255,255,0.4)",
//                 fontSize: 12,
//                 fontFamily: "Inter, sans-serif",
//                 marginTop: 8,
//               }}
//             >
//               Loading visitor data…
//             </p>
//           )}
//         </div>

//         {/* ── Top countries ── */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
//             gap: 12,
//           }}
//         >
//           {topCountries.map((c, i) => (
//             <div
//               key={c.country_code}
//               style={{
//                 padding: "14px 16px",
//                 borderRadius: 14,
//                 background: "rgba(255,255,255,0.04)",
//                 border: "1px solid rgba(255,255,255,0.08)",
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: 10,
//                   fontWeight: 700,
//                   letterSpacing: "0.14em",
//                   textTransform: "uppercase",
//                   color: "#00B894",
//                   margin: "0 0 6px 0",
//                   fontFamily: "Inter, sans-serif",
//                 }}
//               >
//                 #{i + 1} {c.country_name}
//               </p>
//               <p
//                 style={{
//                   fontSize: 20,
//                   fontWeight: 700,
//                   color: "#FFFFFF",
//                   margin: 0,
//                   fontFamily: "Inter, sans-serif",
//                 }}
//               >
//                 {c.visit_count.toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useTrackVisit } from "../hooks/useTrackVisit";
import { BRAND_GRADIENT } from "@/lib/theme";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const POLL_INTERVAL_MS = 10_000;

type CountryVisit = {
  country_code: string;
  country_name: string;
  visit_count: number;
};

type Stats = {
  total: number;
  countries: CountryVisit[];
};

// Rough centroids for common countries. Extend this map with any
// countries you expect meaningful traffic from — a full ISO list is
// easy to find (e.g. "country centroid lat lng json").
const CENTROIDS: Record<string, [number, number]> = {
  US: [-98.5, 39.8], GB: [-2, 54], IN: [79, 22], NP: [84, 28], CN: [104, 35],
  DE: [10, 51], FR: [2, 47], BR: [-53, -10], AU: [134, -25], JP: [138, 38],
  CA: [-106, 56], RU: [90, 61], ZA: [24, -29], NG: [8, 9], MX: [-102, 23],
  ES: [-4, 40], IT: [12, 42], KR: [127, 36], ID: [113, -2], PK: [69, 30],
  BD: [90, 24], SG: [103.8, 1.35], AE: [54, 24], SA: [45, 24], EG: [30, 26],
  NL: [5.75, 52.1], SE: [15, 62], CH: [8, 47], PH: [122, 13], VN: [108, 16],
  TH: [101, 15], MY: [112, 2.5], NZ: [174, -41], AR: [-64, -34], KE: [38, 1],
};

export function VisitorMap() {
  useTrackVisit();

  const [stats, setStats] = useState<Stats>({ total: 10000, countries: [] });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/visitor-stats");
        const data = await res.json();
        if (mounted) {
          setStats(data);
          setLoaded(true);
        }
      } catch {
        // keep previous stats on transient failure
      }
    }

    load();
    const interval = setInterval(load, POLL_INTERVAL_MS);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const maxCount = useMemo(
    () => Math.max(1, ...stats.countries.map((c) => c.visit_count)),
    [stats.countries]
  );

  const topCountries = stats.countries.slice(0, 5);

  return (
    <section
      style={{
        background: BRAND_GRADIENT,
        padding: "clamp(48px, 6vw, 80px) clamp(20px, 5vw, 56px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background dot grid, matching Footer */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "radial-gradient(circle, rgba(0,184,148,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* ── Header ── */}
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
              padding: "5px 14px",
              borderRadius: 100,
              background: "rgba(0,184,148,0.10)",
              border: "1px solid rgba(0,184,148,0.24)",
            }}
          >
            <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#00B894" }} />
            <span
              style={{
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#00B894",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Global Reach
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: "0 0 8px 0",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Visitor Analytics
          </h2>

          <motion.p
            key={stats.total}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            <span style={{ color: "#00B894", fontWeight: 700, fontSize: 20 }}>
              {stats.total.toLocaleString()}
            </span>{" "}
            total visits from {stats.countries.length || "—"} countries
          </motion.p>
        </div>

        {/* ── Map ── */}
        <div
          style={{
            borderRadius: 20,
            border: "1px solid rgba(0,184,148,0.20)",
            background: "rgba(255,255,255,0.03)",
            padding: "clamp(12px, 2vw, 24px)",
            marginBottom: 32,
          }}
        >
          <ComposableMap projectionConfig={{ scale: 140 }} style={{ width: "100%", height: "auto" }}>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255,255,255,0.06)"
                    stroke="rgba(255,255,255,0.10)"
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "rgba(0,184,148,0.12)" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {stats.countries.map((c) => {
              const coords = CENTROIDS[c.country_code];
              if (!coords) return null;
              const r = 4 + (c.visit_count / maxCount) * 16;
              return (
                <Marker key={c.country_code} coordinates={coords}>
                  <circle r={r} fill="rgba(0,184,148,0.35)" stroke="#00B894" strokeWidth={1.5} />
                  <circle r={2} fill="#00B894" />
                </Marker>
              );
            })}
          </ComposableMap>

          {!loaded && (
            <p
              style={{
                textAlign: "center",
                color: "rgba(255,255,255,0.4)",
                fontSize: 12,
                fontFamily: "Inter, sans-serif",
                marginTop: 8,
              }}
            >
              Loading visitor data…
            </p>
          )}
        </div>

        {/* ── Top countries ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
          }}
        >
          {topCountries.map((c, i) => (
            <div
              key={c.country_code}
              style={{
                padding: "14px 16px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#00B894",
                  margin: "0 0 6px 0",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                #{i + 1} {c.country_name}
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {c.visit_count.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}