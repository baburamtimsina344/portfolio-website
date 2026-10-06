// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   ArrowDown,
//   BookOpen,
//   Award,
//   Quote,
//   GraduationCap,
//   ExternalLink,
//   ChevronRight,
//   Star,
//   Fingerprint,
// } from "lucide-react";
// import { useRef, useState, useEffect } from "react";

// // ─── Global Styles ──────────────────────────────────────────────────
// const GlobalStyles = () => (
//   <style>{`
//     :root {
//       --navy: #0B2545;
//       --navy-mid: #0F2F56;
//       --navy-light: #1A4080;
//       --royal: #1A5CB8;
//       --green: #0F7A5A;
//       --green-light: #66D9A0;
//       --white: #FFFFFF;
//       --off-white: #FAFAF8;
//       --gray-50: #F7F8FA;
//       --gray-100: #EEF0F4;
//       --gray-200: #DCE0E8;
//       --gray-400: #8A93A6;
//       --gray-600: #4A5568;
//       --gray-800: #1A202C;
//     }

//     * { box-sizing: border-box; }

//     body {
//       font-family: var(--font-app);
//       background-color: var(--off-white);
//       color: #000000;
//       -webkit-font-smoothing: antialiased;
//     }

//     .name-underline {
//       position: relative;
//       display: inline-block;
//     }
//     .name-underline::after {
//       content: '';
//       position: absolute;
//       bottom: -4px;
//       left: 0;
//       width: 100%;
//       height: 3px;
//       background: linear-gradient(90deg, var(--green) 0%, var(--green-light) 50%, transparent 100%);
//       border-radius: 2px;
//       transform: scaleX(0);
//       transform-origin: left;
//       animation: underline-draw 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.8s forwards;
//     }
//     @keyframes underline-draw {
//       to { transform: scaleX(1); }
//     }

//     .accent-shimmer {
//       position: relative;
//       overflow: hidden;
//     }
//     .accent-shimmer::before {
//       content: '';
//       position: absolute;
//       top: 0; left: -75%;
//       width: 50%; height: 100%;
//       background: linear-gradient(90deg, transparent, rgba(15,122,90,0.12), transparent);
//       transform: skewX(-15deg);
//     }
//     .accent-shimmer:hover::before {
//       animation: shimmer-pass 0.7s ease-out forwards;
//     }
//     @keyframes shimmer-pass {
//       to { left: 150%; }
//     }

//     @keyframes pulse-ring {
//       0%   { transform: scale(1); opacity: 0.6; }
//       100% { transform: scale(1.35); opacity: 0; }
//     }

//     @keyframes float-dot {
//       0%, 100% { transform: translateY(0px); opacity: 0.4; }
//       50%       { transform: translateY(-8px); opacity: 0.8; }
//     }

//     @keyframes scroll-bounce {
//       0%, 100% { transform: translateY(0); }
//       50%       { transform: translateY(5px); }
//     }

//     @keyframes pulse {
//       0%, 100% { opacity: 0.6; transform: scale(1); }
//       50% { opacity: 0.2; transform: scale(1.2); }
//     }

//     @keyframes spin {
//       to { transform: rotate(360deg); }
//     }

//     /* ── Hero responsive system ──────────────────────────────────────── */
//     .hero-section {
//       min-height: 100vh;
//       min-height: 100svh;
//     }

//     .hero-inner {
//       width: 100%;
//       max-width: 1200px;
//       margin: 0 auto;
//       padding: clamp(48px, 7vw, 80px) clamp(16px, 5vw, 56px);
//     }

//     /* Right column: no overlap / negative margins — every block shares
//        the same width and top margin; spacing comes from the flex gap. */
//     .hero-right-col { margin-top: 0; }

//     /* Academic profile cards */
//     .hero-cards-grid {
//       display: grid;
//       grid-template-columns: repeat(auto-fit, minmax(min(100%, 190px), 1fr));
//       gap: 16px;
//       margin-top: 0;
//       width: 100%;
//     }

//     .hero-metrics-grid { display: grid; gap: 8px; }
//     .hero-metrics-grid[data-cols="3"] {
//       grid-template-columns: repeat(3, minmax(0, 1fr));
//     }
//     .hero-metrics-grid[data-cols="2"] {
//       grid-template-columns: repeat(2, minmax(0, 1fr));
//     }

//     .hero-metric {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       padding: 12px 6px;
//       border-radius: 12px;
//       background: var(--gray-50);
//       border: 1px solid var(--gray-100);
//       min-height: 66px;
//       min-width: 0;
//       text-align: center;
//       overflow-wrap: anywhere;
//     }
//     .hero-metric-value {
//       font-size: 18px;
//       font-weight: 800;
//       color: #000000;
//       line-height: 1;
//       letter-spacing: -0.01em;
//       font-variant-numeric: tabular-nums;
//       max-width: 100%;
//     }
//     .hero-metric-label {
//       font-size: 9px;
//       font-weight: 600;
//       letter-spacing: 0.08em;
//       color: #000000;
//       margin-top: 5px;
//       line-height: 1.3;
//       text-align: center;
//       overflow-wrap: anywhere;
//       word-break: break-word;
//     }
//     .hero-metric-label[data-link="true"] {
//       color: var(--royal);
//       text-decoration: underline dotted;
//       text-underline-offset: 2px;
//       cursor: pointer;
//     }

//     /* Hero counters */
//     .hero-counts-grid {
//       display: grid;
//       grid-template-columns: repeat(3, minmax(0, 1fr));
//       gap: 14px;
//       margin-top: 0;
//       width: 100%;
//     }
//     .hero-count {
//       text-align: center;
//       padding: 22px 14px;
//       border-radius: 18px;
//       position: relative;
//       overflow: hidden;
//       min-width: 0;
//     }
//     .hero-count[data-accent="true"] { padding: 26px 16px; }
//     .hero-count-value {
//       font-size: 26px;
//       font-weight: 800;
//       line-height: 1;
//       color: #000000;
//       letter-spacing: var(--tracking-normal);
//     }
//     .hero-count-value[data-accent="true"] {
//       font-size: 32px;
//       color: var(--green);
//       text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
//     }
//     .hero-count-label {
//       font-size: 10px;
//       font-weight: 700;
//       letter-spacing: 0.12em;
//       text-transform: uppercase;
//       color: #000000;
//       margin-top: 10px;
//       overflow-wrap: anywhere;
//       word-break: break-word;
//     }
//     .hero-count-label[data-accent="true"] {
//       font-size: 10.5px;
//       color: rgba(255, 255, 255, 0.75);
//     }

//     /* ── Small screens ───────────────────────────────────────────────── */
//     @media (max-width: 879px) {
//       .hero-inner { padding-bottom: 48px; }
//       .hero-photo { max-width: 420px; margin-inline: auto; }
//       .hero-counts-grid { gap: 10px; }
//       .hero-count { padding: 16px 6px; }
//       .hero-count[data-accent="true"] { padding: 20px 6px; }
//       .hero-count-value { font-size: 22px; }
//       .hero-count-value[data-accent="true"] { font-size: 26px; }
//       .hero-count-label {
//         font-size: 9px;
//         letter-spacing: 0.06em;
//         margin-top: 8px;
//       }
//     }

//     @media (max-width: 640px) {
//       .hero-photo { max-width: 320px; }
//       .hero-cards-grid { gap: 12px; }
//       .hero-inner { padding-left: clamp(14px, 4vw, 40px); padding-right: clamp(14px, 4vw, 40px); }
//     }

//     @media (max-width: 420px) {
//       .hero-cards-grid { grid-template-columns: 1fr; }
//       .hero-metrics-grid { gap: 6px; }
//       .hero-metric { padding: 10px 4px; min-height: 58px; }
//       .hero-metric-value { font-size: 16px; }
//       .hero-metric-label {
//         font-size: 8.5px;
//         letter-spacing: 0.04em;
//       }
//       .hero-counts-grid { gap: 7px; }
//       .hero-count { padding: 14px 4px; }
//       .hero-count-value { font-size: 20px; }
//       .hero-count-value[data-accent="true"] { font-size: 24px; }
//     }

//     @media (prefers-reduced-motion: reduce) {
//       *, *::before, *::after {
//         animation-duration: 0.01ms !important;
//         transition-duration: 0.01ms !important;
//       }
//     }
//   `}</style>
// );

// // ─── Animation Variants ─────────────────────────────────────────────
// const fadeInUp = {
//   initial: { opacity: 0, y: 36 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
// };
// const fadeInScale = {
//   initial: { opacity: 0, scale: 0.94 },
//   animate: { opacity: 1, scale: 1 },
//   transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
// };
// const fadeInRight = {
//   initial: { opacity: 0, x: 40 },
//   animate: { opacity: 1, x: 0 },
//   transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
// };
// const staggerContainer = {
//   animate: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
// };

// // ─── Shared block layout (same width + same top margin everywhere) ──
// const blockLayout = {
//   width: "100%",
//   marginTop: 0,
//   marginBottom: 0,
//   boxSizing: "border-box" as const,
// };

// // ─── BackgroundCanvas ──────────────────────────────────────────────
// function BackgroundCanvas() {
//   return (
//     <div
//       aria-hidden="true"
//       style={{
//         position: "absolute",
//         inset: 0,
//         overflow: "hidden",
//         pointerEvents: "none",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(145deg, #F7F8FA 0%, #FAFAF8 40%, #F0F4FA 100%)",
//         }}
//       />
//       <motion.div
//         animate={{ x: ["0%", "6%", "0%"], y: ["0%", "-5%", "0%"] }}
//         transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
//         style={{
//           position: "absolute",
//           top: "-20%",
//           right: "-15%",
//           width: 700,
//           height: 700,
//           background:
//             "radial-gradient(circle, rgba(15,122,90,0.10) 0%, rgba(15,122,90,0.04) 50%, transparent 75%)",
//           borderRadius: "50%",
//         }}
//       />
//       <motion.div
//         animate={{ x: ["0%", "-5%", "0%"], y: ["0%", "7%", "0%"] }}
//         transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
//         style={{
//           position: "absolute",
//           bottom: "-25%",
//           left: "-20%",
//           width: 850,
//           height: 850,
//           background:
//             "radial-gradient(circle, rgba(11,37,69,0.07) 0%, rgba(26,64,128,0.04) 50%, transparent 70%)",
//           borderRadius: "50%",
//         }}
//       />
//       <motion.div
//         animate={{ x: ["0%", "3%", "0%"], y: ["0%", "4%", "0%"] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         style={{
//           position: "absolute",
//           top: "40%",
//           left: "35%",
//           width: 500,
//           height: 500,
//           background:
//             "radial-gradient(circle, rgba(26,92,184,0.05) 0%, transparent 70%)",
//           borderRadius: "50%",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           opacity: 0.025,
//           backgroundImage:
//             "radial-gradient(circle, #0B2545 1px, transparent 1px)",
//           backgroundSize: "36px 36px",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           width: 280,
//           height: 2,
//           background:
//             "linear-gradient(to left, rgba(15,122,90,0.55), rgba(15,122,90,0.12), transparent)",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           width: 2,
//           height: 280,
//           background:
//             "linear-gradient(to bottom, rgba(15,122,90,0.55), rgba(15,122,90,0.12), transparent)",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           width: 200,
//           height: 1.5,
//           background:
//             "linear-gradient(to right, rgba(11,37,69,0.25), rgba(11,37,69,0.06), transparent)",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           width: 1.5,
//           height: 200,
//           background:
//             "linear-gradient(to top, rgba(11,37,69,0.25), rgba(11,37,69,0.06), transparent)",
//         }}
//       />
//       {[
//         {
//           top: "18%",
//           right: "22%",
//           delay: "0s",
//           size: 6,
//           color: "rgba(15,122,90,0.35)",
//         },
//         {
//           top: "35%",
//           right: "8%",
//           delay: "1s",
//           size: 4,
//           color: "rgba(26,64,128,0.25)",
//         },
//         {
//           top: "62%",
//           left: "6%",
//           delay: "2s",
//           size: 5,
//           color: "rgba(15,122,90,0.25)",
//         },
//         {
//           top: "75%",
//           right: "30%",
//           delay: "0.5s",
//           size: 3,
//           color: "rgba(11,37,69,0.20)",
//         },
//       ].map((dot, i) => (
//         <div
//           key={i}
//           style={{
//             position: "absolute",
//             top: dot.top,
//             right: (dot as any).right,
//             left: (dot as any).left,
//             width: dot.size,
//             height: dot.size,
//             borderRadius: "50%",
//             backgroundColor: dot.color,
//             animation: `float-dot 4s ease-in-out ${dot.delay} infinite`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// // ─── ProfileImage ──────────────────────────────────────────────────
// function ProfileImage() {
//   return (
//     <motion.div
//       variants={fadeInScale}
//       className="hero-photo"
//       style={{ position: "relative", width: "100%", margin: "0 auto" }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           inset: -20,
//           borderRadius: 32,
//           background:
//             "radial-gradient(ellipse, rgba(15,122,90,0.18) 0%, transparent 70%)",
//           filter: "blur(20px)",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           borderRadius: 24,
//           background:
//             "linear-gradient(135deg, var(--navy-light), var(--royal))",
//           transform: "translate(8px, 10px)",
//           opacity: 0.15,
//         }}
//       />
//       <motion.div
//         whileHover={{ y: -4 }}
//         transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//         style={{
//           position: "relative",
//           borderRadius: 24,
//           overflow: "hidden",
//           border: "1.5px solid rgba(15,122,90,0.30)",
//           backgroundColor: "white",
//           boxShadow:
//             "0 20px 60px rgba(11,37,69,0.18), 0 4px 16px rgba(11,37,69,0.10)",
//           aspectRatio: "3 / 3",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             zIndex: 2,
//             borderRadius: 24,
//             boxShadow: "inset 0 0 0 1px rgba(15,122,90,0.20)",
//             pointerEvents: "none",
//           }}
//         />
//         <motion.img
//           src="/images/profile.png"
//           alt="Baburam Timsina — Professor and Academic Leader"
//           whileHover={{ scale: 1.04 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             display: "block",
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "linear-gradient(to top, rgba(11,37,69,0.55) 0%, rgba(11,37,69,0.10) 40%, transparent 70%)",
//             pointerEvents: "none",
//             zIndex: 1,
//           }}
//         />
//         {[
//           {
//             top: 16,
//             left: 16,
//             borderTop: "2px solid",
//             borderLeft: "2px solid",
//             borderTopLeftRadius: 12,
//           },
//           {
//             bottom: 16,
//             right: 16,
//             borderBottom: "2px solid",
//             borderRight: "2px solid",
//             borderBottomRightRadius: 12,
//           },
//         ].map((corner, i) => (
//           <div
//             key={i}
//             style={{
//               position: "absolute",
//               zIndex: 3,
//               width: 28,
//               height: 28,
//               borderColor: "rgba(15,122,90,0.60)",
//               ...corner,
//               pointerEvents: "none",
//             }}
//           />
//         ))}
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, x: 20, y: -10 }}
//         animate={{ opacity: 1, x: 0, y: 0 }}
//         transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         style={{
//           position: "absolute",
//           top: -16,
//           right: -16,
//           background: "white",
//           border: "1.5px solid rgba(15,122,90,0.25)",
//           borderRadius: 16,
//           padding: "10px 16px",
//           boxShadow: "0 8px 28px rgba(11,37,69,0.14)",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           minWidth: 72,
//         }}
//       >
//         <span
//           style={{
//             fontSize: 22,
//             fontWeight: 700,
//             color: "#000000",
//             lineHeight: 1,
//           }}
//         >
//           20+
//         </span>
//         <span
//           style={{
//             fontSize: 9.5,
//             fontWeight: 600,
//             letterSpacing: "0.12em",
//             textTransform: "uppercase",
//             color: "var(--gray-400)",
//             marginTop: 3,
//           }}
//         >
//           Years
//         </span>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─── Professional Title Block ──────────────────────────────────────
// function ProfessionalTitle() {
//   const journals = ["JINA", "JHROS", "JSMS", "JISS"];

//   return (
//     <motion.div
//       variants={fadeInUp}
//       style={{
//         marginTop: 22,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: 14,
//       }}
//     >
//       {/* Primary title */}
//       <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//         <div
//           style={{
//             height: 1,
//             width: 28,
//             background: "linear-gradient(to right, transparent, var(--green))",
//           }}
//         />
//         <div
//           style={{
//             height: 1,
//             width: 28,
//             background: "linear-gradient(to left, transparent, var(--green))",
//           }}
//         />
//       </div>

//       <p
//         className="
//     text-[clamp(14px,1.6vw,16px)]
//     leading-[1.8]
//     m-0
//     font-medium
//     tracking-[0.3px]
//     text-center
//     py-[26px]
//     px-4
//     rounded-[18px]
//     bg-[linear-gradient(135deg,var(--navy)_0%,var(--navy-light)_100%)]
//     border-2
//     border-[var(--green)]
//     shadow-[0_20px_48px_rgba(15,122,90,0.28),0_8px_20px_rgba(11,37,69,0.16)]
//     cursor-default
//     relative
//     overflow-hidden
//     transform-none
//     text-white
//     text-justify
//   "
//       >
//         Higher Education Leadership Scholar | Institutional Transformation &
//         Internationalization Researcher | Higher Education Futures Strategist
//       </p>

//       {/* Credentials */}
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: 10,
//           marginTop: 4,
//         }}
//       >
//         {/* Chair pill */}
//         <div
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: 8,
//             padding: "7px 14px",
//             borderRadius: 100,
//             background:
//               "linear-gradient(135deg, var(--navy), var(--navy-light))",
//             border: "1px solid rgba(15,122,90,0.30)",
//             boxShadow: "0 4px 14px rgba(11,37,69,0.20)",
//           }}
//         >
//           <Award style={{ width: 13, height: 13, color: "var(--green)" }} />
//           <span
//             style={{
//               fontSize: 11,
//               fontWeight: 600,
//               letterSpacing: "0.06em",
//               color: "#fff",
//             }}
//           >
//             JMC Chair
//             <span style={{ opacity: 0.5, margin: "0 6px" }}>·</span>
//             <span style={{ color: "var(--green-light)" }}>MSSRNPRESS.ORG</span>
//           </span>
//         </div>

//         {/* Editorial member pill with journal tags */}
//         <div
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: 8,
//             padding: "6px 8px 6px 14px",
//             borderRadius: 100,
//             background: "#fff",
//             border: "1px solid rgba(15,122,90,0.25)",
//             boxShadow: "0 4px 14px rgba(11,37,69,0.06)",
//           }}
//         >
//           <span
//             style={{
//               fontSize: 11,
//               fontWeight: 600,
//               letterSpacing: "0.06em",
//               color: "#000000",
//             }}
//           >
//             Editorial Member
//           </span>
//           {journals.map((j) => (
//             <span
//               key={j}
//               style={{
//                 fontSize: 10,
//                 fontWeight: 700,
//                 letterSpacing: "0.08em",
//                 padding: "3px 9px",
//                 borderRadius: 100,
//                 color: "#000000",
//                 background: "rgba(15,122,90,0.10)",
//                 border: "1px solid rgba(15,122,90,0.22)",
//               }}
//             >
//               {j}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Academic Profile Cards ─────────────────────────────────────────
// function AcademicProfileCards() {
//   const [stats, setStats] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchStats() {
//       try {
//         const { supabase } = await import("../lib/supabase");
//         const { data } = await supabase
//           .from("academic_stats")
//           .select("*")
//           .single();
//         if (data) {
//           setStats(data);
//         }
//       } catch (err) {
//         console.error("Error fetching academic stats:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchStats();
//   }, []);

//   const fmt = (v: any) => {
//     if (loading) return "…";
//     const n = Number(v);
//     return Number.isFinite(n) ? n.toLocaleString() : "—";
//   };

//   const fmtScore = (v: any) => {
//     if (loading) return "…";
//     const n = Number(v);
//     if (!Number.isFinite(n)) return "—";
//     return n.toLocaleString(undefined, {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     });
//   };

//   const profiles = [
//     {
//       name: "Google Scholar",
//       href: "https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ",
//       Icon: GraduationCap,
//       badgeGradient: "linear-gradient(135deg, #4285F4, #34A853)",
//       borderColor: "rgba(66,133,244,0.18)",
//       ringColor: "rgba(66,133,244,0.35)",
//       stats: [
//         { value: fmt(stats?.google_scholar_citations), label: "Citations" },
//         { value: fmt(stats?.google_scholar_h_index), label: "h-index" },
//         { value: fmt(stats?.google_scholar_i10_index), label: "i10-index" },
//       ],
//     },
//     {
//       name: "ResearchGate",
//       href: "https://www.researchgate.net/profile/Baburam-Timsina-3",
//       Icon: BookOpen,
//       badgeGradient: "linear-gradient(135deg, #0F7A5A, #00CEC9)",
//       borderColor: "rgba(15,122,90,0.18)",
//       ringColor: "rgba(15,122,90,0.35)",
//       stats: [
//         {
//           value: fmtScore(stats?.researchgate_publications),
//           label: "Score",
//         },
//         { value: fmt(stats?.researchgate_reads), label: "Reads" },
//         { value: fmt(stats?.researchgate_citations), label: "Citations" },
//       ],
//     },
//     {
//       name: "Semantic Scholar",
//       href: "https://www.semanticscholar.org/author/2326887337",
//       Icon: Fingerprint,
//       badgeGradient: "linear-gradient(135deg, #7C3AED, #6366F1)",
//       borderColor: "rgba(124,58,237,0.18)",
//       ringColor: "rgba(124,58,237,0.35)",
//       stats: [
//         {
//           value: fmt(stats?.semantic_scholar_publications),
//           label: "Publications",
//         },
//         {
//           value: fmt(stats?.semantic_scholar_h_index),
//           label: "h-index",
//           href: "https://www.semanticscholar.org/faq#h-index",
//         },
//         { value: fmt(stats?.semantic_scholar_citations), label: "Citations" },
//         {
//           value: fmt(stats?.semantic_scholar_highly_influential_citations),
//           label: "Highly Influential Citations",
//         },
//       ],
//     },
//   ];

//   return (
//     <motion.div variants={fadeInUp} className="hero-cards-grid">
//       {profiles.map((p) => (
//         <motion.a
//           key={p.name}
//           href={p.href}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="accent-shimmer"
//           whileHover={{ y: -5, boxShadow: "0 18px 44px rgba(11,37,69,0.14)" }}
//           transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
//           style={{
//             position: "relative",
//             display: "flex",
//             flexDirection: "column",
//             gap: 16,
//             padding: "20px 18px",
//             borderRadius: 18,
//             background: "#FFFFFF",
//             border: `1px solid ${p.borderColor}`,
//             boxShadow:
//               "0 1px 2px rgba(11,37,69,0.04), 0 8px 24px rgba(11,37,69,0.06)",
//             textDecoration: "none",
//             cursor: "pointer",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
//             <div
//               style={{
//                 width: 38,
//                 height: 38,
//                 borderRadius: 11,
//                 background: p.badgeGradient,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexShrink: 0,
//                 boxShadow: `0 4px 12px ${p.ringColor}`,
//               }}
//             >
//               <p.Icon
//                 style={{ width: 17, height: 17, color: "#fff" }}
//                 strokeWidth={2}
//               />
//             </div>
//             <span
//               style={{
//                 fontSize: 13.5,
//                 fontWeight: 700,
//                 color: "#000000",
//                 flex: 1,
//                 minWidth: 0,
//                 overflowWrap: "anywhere",
//                 letterSpacing: "-0.01em",
//               }}
//             >
//               {p.name}
//             </span>
//             <ExternalLink
//               style={{
//                 width: 13,
//                 height: 13,
//                 color: "var(--gray-400)",
//                 flexShrink: 0,
//               }}
//             />
//           </div>
//           <div
//             className="hero-metrics-grid"
//             data-cols={p.stats.length === 4 ? "2" : "3"}
//           >
//             {p.stats.map((s) => (
//               <div key={s.label} className="hero-metric">
//                 <span className="hero-metric-value">{s.value}</span>
//                 <span
//                   className="hero-metric-label"
//                   data-link={(s as any).href ? "true" : "false"}
//                   onClick={
//                     (s as any).href
//                       ? (e) => {
//                           e.preventDefault();
//                           e.stopPropagation();
//                           window.open(
//                             (s as any).href,
//                             "_blank",
//                             "noopener,noreferrer",
//                           );
//                         }
//                       : undefined
//                   }
//                   title={
//                     (s as any).href ? "Learn what this metric means" : undefined
//                   }
//                 >
//                   {s.label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </motion.a>
//       ))}
//     </motion.div>
//   );
// }

// // ─── CTA Buttons ──────────────────────────────────────────────────
// function CTAButtons() {
//   return (
//     <motion.div
//       variants={fadeInUp}
//       style={{ ...blockLayout, display: "flex", flexWrap: "wrap", gap: 12 }}
//     >
//       <motion.a
//         href="#publications"
//         whileHover={{ y: -2, boxShadow: "0 12px 36px rgba(15,122,90,0.40)" }}
//         whileTap={{ scale: 0.97 }}
//         transition={{ duration: 0.25 }}
//         style={{
//           display: "inline-flex",
//           alignItems: "center",
//           gap: 8,
//           padding: "12px 24px",
//           borderRadius: 100,
//           background:
//             "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
//           border: "1px solid rgba(15,122,90,0.22)",
//           color: "#FFFFFF",
//           fontSize: 13.5,
//           fontWeight: 600,
//           letterSpacing: "0.02em",
//           textDecoration: "none",
//           boxShadow: "0 4px 20px rgba(11,37,69,0.30)",
//         }}
//       >
//         <BookOpen style={{ width: 15, height: 15 }} />
//         View Publications
//         <ChevronRight style={{ width: 15, height: 15, opacity: 0.7 }} />
//       </motion.a>
//       <motion.a
//         href="#contact"
//         whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(15,122,90,0.25)" }}
//         whileTap={{ scale: 0.97 }}
//         transition={{ duration: 0.25 }}
//         style={{
//           display: "inline-flex",
//           alignItems: "center",
//           gap: 8,
//           padding: "11px 22px",
//           borderRadius: 100,
//           background: "transparent",
//           border: "1.5px solid rgba(11,37,69,0.20)",
//           color: "#000000",
//           fontSize: 13.5,
//           fontWeight: 600,
//           letterSpacing: "0.02em",
//           textDecoration: "none",
//         }}
//       >
//         Get in Touch
//       </motion.a>
//     </motion.div>
//   );
// }

// // ─── Main HeroSection ──────────────────────────────────────────────
// export function HeroSection() {
//   const containerRef = useRef<HTMLElement>(null);
//   const [heroStats, setHeroStats] = useState<any>(null);

//   useEffect(() => {
//     async function fetchHeroStats() {
//       try {
//         const { supabase } = await import("../lib/supabase");
//         const { data } = await supabase.from("hero_stats").select("*").single();
//         if (data) setHeroStats(data);
//       } catch (err) {
//         console.error("Error fetching hero stats:", err);
//       }
//     }
//     fetchHeroStats();
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });
//   const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.25]);
//   const y = useTransform(scrollYProgress, [0, 0.55], [0, -30]);

//   return (
//     <>
//       <GlobalStyles />
//       <section
//         id="home"
//         ref={containerRef}
//         aria-label="Hero — Baburam Timsina"
//         className="hero-section"
//         style={{
//           position: "relative",
//           overflow: "hidden",
//           background: "var(--off-white)",
//         }}
//       >
//         <motion.div style={{ opacity, y, position: "absolute", inset: 0 }}>
//           <BackgroundCanvas />
//         </motion.div>

//         <div
//           className="hero-section"
//           style={{
//             position: "relative",
//             zIndex: 10,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <div className="hero-inner">
//             <motion.div
//               initial="initial"
//               animate="animate"
//               variants={staggerContainer}
//               style={{
//                 display: "grid",
//                 gridTemplateColumns:
//                   "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
//                 gap: "clamp(32px, 4vw, 56px)",
//                 alignItems: "center",
//               }}
//             >
//               {/* LEFT COLUMN */}
//               <motion.div
//                 variants={staggerContainer}
//                 style={{ display: "flex", flexDirection: "column", gap: 36 }}
//               >
//                 <ProfileImage />

//                 <motion.div variants={fadeInUp} style={{ textAlign: "center" }}>
//                   <motion.h1
//                     initial={{ opacity: 0, y: 16 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 0.95,
//                       delay: 0.12,
//                       ease: [0.22, 1, 0.36, 1],
//                     }}
//                     style={{
//                       fontSize: "clamp(28px, 7vw, 60px)",
//                       fontWeight: 700,
//                       lineHeight: 1.08,
//                       letterSpacing: "var(--tracking-normal)",
//                       margin: 0,
//                     }}
//                   >
//                     <div className="flex items-center justify-center gap-2">
//                       <span className="text-[var(--navy)]">Baburam</span>

//                       <span
//                         className="name-underline inline-block pb-1"
//                         style={{
//                           background:
//                             "linear-gradient(90deg, var(--green) 0%, var(--green-light) 100%)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           backgroundClip: "text",
//                         }}
//                       >
//                         Timsina
//                       </span>
//                     </div>
//                   </motion.h1>

//                   <ProfessionalTitle />
//                 </motion.div>
//               </motion.div>

//               {/* RIGHT COLUMN */}
//               <motion.div
//                 variants={staggerContainer}
//                 className="hero-right-col flex w-full flex-col gap-6 mt-0"
//               >
//                 {/* Quote card */}
//                 <motion.div
//                   variants={fadeInRight}
//                   className="
//       relative
//       w-full
//       overflow-hidden
//       rounded-[18px]
//       border-[1.5px]
//       border-[rgba(15,122,90,0.18)]
//       bg-white
//       p-[clamp(20px,3vw,28px)]
//       shadow-[0_12px_48px_rgba(11,37,69,0.10)]
//     "
//                 >
//                   {/* Green vertical line */}
//                   <div
//                     className="
//         absolute
//         left-0
//         top-8
//         bottom-8
//         w-1
//         rounded-r-[4px]
//         bg-[linear-gradient(to_bottom,var(--green),rgba(15,122,90,0.20))]
//       "
//                   />

//                   {/* Decorative quote */}
//                   <div
//                     className="
//         pointer-events-none
//         absolute
//         -right-2.5
//         -top-2.5
//         select-none
//         font-[var(--font-app)]
//         text-[120px]
//         leading-none
//         text-[var(--green)]
//         opacity-[0.04]
//       "
//                   >
//                     &ldquo;
//                   </div>

//                   {/* Quote icon */}
//                   <div
//                     className="
//         mb-4
//         flex
//         h-[28px]
//         w-[28px]
//         items-center
//         justify-center
//         rounded-[10px]
//         border
//         border-[rgba(15,122,90,0.22)]
//         bg-[linear-gradient(135deg,rgba(15,122,90,0.15),rgba(15,122,90,0.06))]
//       "
//                   >
//                     <Quote className="h-4 w-4 text-[var(--green)]" />
//                   </div>

//                   {/* Quote */}
//                   <motion.blockquote variants={fadeInUp} className="m-0 pl-3">
//                     <p
//                       className="
//         text-justify
//           m-0
//           text-[clamp(15px,1.8vw,18px)]
//           font-medium
//           italic
//           leading-[1.5]
//           text-[rgba(11,37,69,0.88)]
//         "
//                     >
//                       &ldquo;Advancing scholarship in higher education,
//                       educational leadership, and institutional transformation
//                       through research, teaching, and academic service.&rdquo;
//                     </p>

//                     {/* Bottom line */}
//                     <div
//                       className="
//           mt-4
//           flex
//           items-center
//           gap-3
//         "
//                     >
//                       <div
//                         className="
//             h-px
//             flex-1
//             bg-[linear-gradient(to_right,rgba(15,122,90,0.45),transparent)]
//           "
//                       />
//                     </div>
//                   </motion.blockquote>
//                 </motion.div>

//                 {/* About teaser */}
//                 <motion.div
//                   variants={fadeInRight}
//                   whileHover={{
//                     borderColor: "rgba(15,122,90,0.30)",
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="
//       relative
//       rounded-[16px]
//       border-[1.5px]
//       border-[rgba(11,37,69,0.07)]
//       bg-[rgba(11,37,69,0.03)]
//       px-[22px]
//       py-[18px]
//       backdrop-blur-[8px]
//       transition-[border-color]
//       duration-300
//     "
//                 >
//                   {/* About heading */}
//                   <div
//                     className="
//         mb-4
//         flex
//         items-center
//         gap-2.5
//       "
//                   >
//                     {/* Book icon */}
//                     <div
//                       className="
//           flex
//           h-[36px]
//           w-[36px]
//           items-center
//           justify-center
//           rounded-[10px]
//           border
//           border-[rgba(15,122,90,0.30)]
//           bg-[linear-gradient(135deg,rgba(15,122,90,0.18),rgba(15,122,90,0.08))]
//           shadow-[0_4px_16px_rgba(15,122,90,0.12)]
//         "
//                     >
//                       <BookOpen className="h-[15px] w-[15px] text-[var(--green)]" />
//                     </div>

//                     <span
//                       className="
//           bg-[linear-gradient(135deg,var(--gray-800),var(--navy-light))]
//           bg-clip-text
//           text-[11px]
//           font-semibold
//           uppercase
//           tracking-[0.18em]
//           text-transparent
//         "
//                     >
//                       About
//                     </span>
//                   </div>

//                   {/* About content */}
//                   <div
//                     className="
//         border-l-[3px]
//         border-[var(--green)]
//         py-1
//         pl-4
//       "
//                   >
//                     <p
//                       className="
//           m-0
//           text-[clamp(13px,1.4vw,15px)]
//           font-normal
//           leading-[1.6]
//           tracking-[0.1px]
//           text-[var(--gray-600)]
//         "
//                     >
//                       With a deep commitment to{" "}
//                       <strong
//                         className="
//             font-semibold
//             text-[var(--gray-800)]
//           "
//                       >
//                         academic excellence
//                       </strong>{" "}
//                       and institutional leadership, I have dedicated my career
//                       to advancing education, mentoring future educators, and
//                       fostering transformative learning environments.
//                     </p>
//                   </div>

//                   {/* Learn more */}
//                   <motion.a
//                     href="#about"
//                     whileHover={{
//                       x: 6,
//                       color: "var(--green)",
//                     }}
//                     transition={{ duration: 0.25 }}
//                     className="
//         mt-4
//         inline-flex
//         items-center
//         gap-2
//         py-1.5
//         text-[12px]
//         font-semibold
//         uppercase
//         tracking-[0.04em]
//         text-[var(--gray-800)]
//         no-underline
//       "
//                   >
//                     Learn more
//                     <ArrowDown className="h-3.5 w-3.5" />
//                   </motion.a>
//                 </motion.div>

//                 {/* Stats row */}
//                 <motion.div
//                   variants={fadeInRight}
//                   className="
//       hero-counts-grid
//       w-full
//     "
//                   style={blockLayout}
//                 >
//                   {[
//                     {
//                       value: heroStats?.years_experience || "20+",
//                       label: "Years Experience",
//                       accent: false,
//                     },
//                     {
//                       value: heroStats?.publications_count || "50+",
//                       label: "Publications",
//                       accent: true,
//                     },
//                     {
//                       value: heroStats?.awards_honors || "15+",
//                       label: "Awards & Honors",
//                       accent: false,
//                     },
//                   ].map((stat, i) => (
//                     <motion.div
//                       key={i}
//                       className="accent-shimmer hero-count"
//                       data-accent={stat.accent ? "true" : "false"}
//                       whileHover={{
//                         y: -5,
//                         scale: stat.accent ? 1.03 : 1.02,
//                       }}
//                       transition={{
//                         duration: 0.32,
//                         type: "spring",
//                         stiffness: 200,
//                         damping: 20,
//                       }}
//                       style={{
//                         background: stat.accent
//                           ? "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)"
//                           : "linear-gradient(135deg, #FFFFFF 0%, #FAFAF8 100%)",
//                         border: `2px solid ${
//                           stat.accent ? "var(--green)" : "rgba(15,122,90,0.15)"
//                         }`,
//                         boxShadow: stat.accent
//                           ? "0 20px 48px rgba(15,122,90,0.28), 0 8px 20px rgba(11,37,69,0.16)"
//                           : "0 8px 24px rgba(11,37,69,0.10)",
//                         cursor: "default",
//                       }}
//                     >
//                       {/* Accent glow */}
//                       {stat.accent && (
//                         <div
//                           className="
//               pointer-events-none
//               absolute
//               -right-1/2
//               -top-1/2
//               h-[200%]
//               w-[200%]
//               animate-[pulse_4s_ease-in-out_infinite]
//               bg-[radial-gradient(circle,rgba(15,122,90,0.15)_0%,transparent_70%)]
//             "
//                         />
//                       )}

//                       <div className="relative z-[1]">
//                         {/* Star */}
//                         {stat.accent && (
//                           <div className="mb-2 flex justify-center">
//                             <Star
//                               className="
//                   h-5
//                   w-5
//                   fill-[var(--green)]
//                   text-[var(--green)]
//                   drop-shadow-[0_2px_8px_rgba(15,122,90,0.4)]
//                 "
//                             />
//                           </div>
//                         )}

//                         {/* Value */}
//                         <div
//                           className="hero-count-value"
//                           data-accent={stat.accent ? "true" : "false"}
//                         >
//                           {stat.value}
//                         </div>

//                         {/* Label */}
//                         <div
//                           className="hero-count-label"
//                           data-accent={stat.accent ? "true" : "false"}
//                         >
//                           {stat.label}
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 <CTAButtons />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Academic profile cards — same width/padding as the hero content */}
//         <div
//           style={{
//             position: "relative",
//             zIndex: 10,
//             width: "100%",
//             maxWidth: 1200,
//             margin: "0 auto",
//             padding: "0 clamp(16px, 5vw, 56px) 96px",
//             boxSizing: "border-box",
//           }}
//         >
//           <AcademicProfileCards />
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.6, duration: 0.8 }}
//           aria-hidden="true"
//           style={{
//             position: "absolute",
//             bottom: 36,
//             left: "50%",
//             transform: "translateX(-50%)",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: 8,
//           }}
//         >
//           <span
//             style={{
//               fontSize: 9,
//               fontWeight: 600,
//               letterSpacing: "0.25em",
//               textTransform: "uppercase",
//               color: "rgba(11,37,69,0.30)",
//             }}
//           >
//             Scroll
//           </span>
//           <div
//             style={{
//               width: 24,
//               height: 40,
//               borderRadius: 100,
//               border: "1.5px solid rgba(11,37,69,0.14)",
//               background: "rgba(255,255,255,0.55)",
//               backdropFilter: "blur(8px)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               animation: "scroll-bounce 2.4s ease-in-out infinite",
//             }}
//           >
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{
//                 duration: 2.2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 0.3,
//               }}
//               style={{
//                 width: 6,
//                 height: 6,
//                 borderRadius: "50%",
//                 background:
//                   "linear-gradient(135deg, var(--green), var(--green-light))",
//               }}
//             />
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// }




"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  BookOpen,
  Award,
  Quote,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  Star,
  Fingerprint,
} from "lucide-react";
import { useEffect, useState } from "react";

// ─── Motion presets ─────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const JOURNALS = ["JINA", "JHROS", "JSMS", "JISS"];

// ─── Helpers ────────────────────────────────────────────────────────
const num = (v: unknown, loading: boolean, decimals = 0) => {
  if (loading) return "…";
  const n = Number(v);
  return Number.isFinite(n)
    ? n.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : "—";
};

// ─── Profile image ──────────────────────────────────────────────────
function ProfileImage() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none mt-14"
    >
      <div className="absolute inset-0 translate-x-2 translate-y-2.5 rounded-3xl bg-gradient-to-br from-[#1A4080] to-[#1A5CB8] opacity-15" />
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-[#0F7A5A]/30 bg-white shadow-[0_20px_50px_rgba(11,37,69,0.18)]">
        <img
          src="/images/profile.png"
          alt="Baburam Timsina — Professor and Academic Leader"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B2545]/50 via-transparent to-transparent" />
      </div>
      <div className="absolute -right-3 -top-3 flex min-w-[68px] flex-col items-center rounded-2xl border border-[#0F7A5A]/25 bg-white px-4 py-2.5 shadow-lg">
        <span className="text-xl font-bold leading-none text-black">20+</span>
        <span className="mt-1 text-[9.5px] font-semibold uppercase tracking-widest text-black">
          Years
        </span>
      </div>
    </motion.div>
  );
}

// ─── Name + title + credentials ─────────────────────────────────────
function Identity() {
  return (
    <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-[clamp(30px,6vw,56px)] font-bold leading-tight tracking-tight text-black">
        Baburam{" "}
        <span className="relative inline-block bg-gradient-to-r from-[#0F7A5A] to-[#66D9A0] bg-clip-text text-transparent">
          Timsina
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-[#0F7A5A] via-[#66D9A0] to-transparent"
          />
        </span>
      </h1>

      <p className="w-full rounded-2xl border border-[#0F7A5A] bg-gradient-to-br from-[#0B2545] to-[#1A4080] px-5 py-5 text-center text-sm font-medium leading-relaxed text-white shadow-[0_14px_36px_rgba(15,122,90,0.22)] sm:text-base">
        Higher Education Leadership Scholar | Institutional Transformation &amp;
        Internationalization Researcher | Higher Education Futures Strategist
      </p>

      <div className="flex flex-wrap justify-center gap-2.5">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A5A]/30 bg-gradient-to-br from-[#0B2545] to-[#1A4080] px-3.5 py-1.5 shadow-md">
          <Award className="h-3.5 w-3.5 text-[#0F7A5A]" />
          <span className="text-[11px] font-semibold tracking-wide text-white">
            JMC Chair <span className="mx-1 opacity-50">·</span>
            <span className="text-[#66D9A0]">MSSRNPRESS.ORG</span>
          </span>
        </div>

        <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#0F7A5A]/25 bg-white py-1.5 pl-3.5 pr-2 shadow-sm">
          <span className="text-[11px] font-semibold tracking-wide text-black">
            Editorial Member
          </span>
          {JOURNALS.map((j) => (
            <span
              key={j}
              className="rounded-full border border-[#0F7A5A]/20 bg-[#0F7A5A]/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-black"
            >
              {j}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Quote card ─────────────────────────────────────────────────────
function QuoteCard() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-2xl border border-[#0F7A5A]/20 bg-white p-6 ]"
    >
      <div className="absolute bottom-6 left-0 top-6 w-1 rounded-r bg-gradient-to-b from-[#0F7A5A] to-[#0F7A5A]/20" />
      <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg border border-[#0F7A5A]/20 bg-[#0F7A5A]/10">
        <Quote className="h-4 w-4 text-[#0F7A5A]" />
      </div>
      <blockquote className="m-0 pl-3 text-base font-semibold italic  text-black sm:text-lg">
        &ldquo;Advancing scholarship in higher education, educational leadership,
        and institutional transformation through research, teaching, and
        academic service.&rdquo;
      </blockquote>
    </motion.div>
  );
}

// ─── About teaser ───────────────────────────────────────────────────
function AboutTeaser() {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-[#0B2545]/10 bg-[#0B2545]/[0.03] px-5 py-4 transition-colors hover:border-[#0F7A5A]/30"
    >
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#0F7A5A]/30 bg-[#0F7A5A]/10">
          <BookOpen className="h-4 w-4 text-[#0F7A5A]" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
          About
        </span>
      </div>

      <p className="m-0 border-l-[3px] border-[#0F7A5A] py-1 pl-4 text-sm leading-relaxed text-black sm:text-[15px]">
        With a deep commitment to{" "}
        <strong className="font-semibold text-black">academic excellence</strong>{" "}
        and institutional leadership, I have dedicated my career to advancing
        education, mentoring future educators, and fostering transformative
        learning environments.
      </p>

      <a
        href="#about"
        className="group mt-3 inline-flex items-center gap-2 py-1 text-xs font-semibold uppercase tracking-wide text-black transition-colors hover:text-[#0F7A5A]"
      >
        Learn more
        <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
      </a>
    </motion.div>
  );
}

// ─── Counters ───────────────────────────────────────────────────────
function Counters({ heroStats }: { heroStats: any }) {
  const items = [
    { value: heroStats?.years_experience || "20+", label: "Years Experience", accent: false },
    { value: heroStats?.publications_count || "50+", label: "Publications", accent: true },
    { value: heroStats?.awards_honors || "15+", label: "Awards & Honors", accent: false },
  ];

  return (
    <motion.div variants={fadeUp} className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
      {items.map((s) => (
        <div
          key={s.label}
          className={`relative min-w-0 overflow-hidden rounded-2xl border-2 px-2 text-center transition-transform duration-300 hover:-translate-y-1 ${
            s.accent
              ? "border-[#0F7A5A] bg-gradient-to-br from-[#0B2545] to-[#1A4080] py-5 shadow-[0_14px_36px_rgba(15,122,90,0.25)]"
              : "border-[#0F7A5A]/15 bg-white py-4 shadow-md"
          }`}
        >
          {s.accent && (
            <Star className="mx-auto mb-1.5 h-5 w-5 fill-[#0F7A5A] text-[#0F7A5A]" />
          )}
          <div
            className={`font-extrabold leading-none ${
              s.accent ? "text-2xl text-[#0F7A5A] sm:text-3xl" : "text-xl text-black sm:text-2xl"
            }`}
          >
            {s.value}
          </div>
          <div
            className={`mt-2 break-words text-[9px] font-bold uppercase tracking-wider sm:text-[10px] ${
              s.accent ? "text-white/75" : "text-black"
            }`}
          >
            {s.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

// ─── CTA buttons ────────────────────────────────────────────────────
function CTAButtons() {
  return (
    <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
      <a
        href="#publications"
        className="btn btn-primary btn-pill gap-2 px-6 py-3 text-sm"
      >
        <BookOpen className="h-4 w-4" />
        View Publications
        <ChevronRight className="h-4 w-4 opacity-70" />
      </a>
      <a
        href="#contact"
        className="btn btn-outline btn-pill px-6 py-3 text-sm"
      >
        Get in Touch
      </a>
    </motion.div>
  );
}

// ─── Academic profile cards ─────────────────────────────────────────
function AcademicProfileCards() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { supabase } = await import("../lib/supabase");
        const { data } = await supabase.from("academic_stats").select("*").single();
        if (data) setStats(data);
      } catch (err) {
        console.error("Error fetching academic stats:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const profiles = [
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ",
      Icon: GraduationCap,
      badge: "from-[#4285F4] to-[#34A853]",
      border: "border-[#4285F4]/20",
      stats: [
        { value: num(stats?.google_scholar_citations, loading), label: "Citations" },
        { value: num(stats?.google_scholar_h_index, loading), label: "h-index" },
        { value: num(stats?.google_scholar_i10_index, loading), label: "i10-index" },
      ],
    },
    {
      name: "ResearchGate",
      href: "https://www.researchgate.net/profile/Baburam-Timsina-3",
      Icon: BookOpen,
      badge: "from-[#0F7A5A] to-[#00CEC9]",
      border: "border-[#0F7A5A]/20",
      stats: [
        { value: num(stats?.researchgate_publications, loading, 2), label: "Score" },
        { value: num(stats?.researchgate_reads, loading), label: "Reads" },
        { value: num(stats?.researchgate_citations, loading), label: "Citations" },
      ],
    },
    {
      name: "Semantic Scholar",
      href: "https://www.semanticscholar.org/author/2326887337",
      Icon: Fingerprint,
      badge: "from-[#7C3AED] to-[#6366F1]",
      border: "border-[#7C3AED]/20",
      stats: [
        { value: num(stats?.semantic_scholar_publications, loading), label: "Publications" },
        {
          value: num(stats?.semantic_scholar_h_index, loading),
          label: "h-index",
          href: "https://www.semanticscholar.org/faq#h-index",
        },
        { value: num(stats?.semantic_scholar_citations, loading), label: "Citations" },
        {
          value: num(stats?.semantic_scholar_highly_influential_citations, loading),
          label: "Highly Influential Citations",
        },
      ],
    },
  ];

  return (
    <motion.div
      variants={fadeUp}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {profiles.map(({ name, href, Icon, badge, border, stats: items }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col gap-4 rounded-2xl border bg-white p-5 shadow-[0_8px_24px_rgba(11,37,69,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,37,69,0.14)] ${border}`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-md ${badge}`}
            >
              <Icon className="h-[17px] w-[17px] text-white" strokeWidth={2} />
            </div>
            <span className="min-w-0 flex-1 text-sm font-bold tracking-tight text-black">
              {name}
            </span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-black" />
          </div>

          <div className={`grid gap-2 ${items.length === 4 ? "grid-cols-2" : "grid-cols-3"}`}>
            {items.map((s) => (
              <div
                key={s.label}
                className="flex min-h-[64px] min-w-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 px-1.5 py-3 text-center"
              >
                <span className="text-lg font-extrabold leading-none tabular-nums text-black">
                  {s.value}
                </span>
                {"href" in s && s.href ? (
                  <span
                    role="link"
                    title="Learn what this metric means"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(s.href, "_blank", "noopener,noreferrer");
                    }}
                    className="mt-1.5 cursor-pointer break-words text-[9px] font-semibold uppercase leading-tight tracking-wider text-[#1A5CB8] underline decoration-dotted underline-offset-2"
                  >
                    {s.label}
                  </span>
                ) : (
                  <span className="mt-1.5 break-words text-[9px] font-semibold uppercase leading-tight tracking-wider text-black">
                    {s.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </a>
      ))}
    </motion.div>
  );
}

// ─── Main section ───────────────────────────────────────────────────
export function HeroSection() {
  const [heroStats, setHeroStats] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const { supabase } = await import("../lib/supabase");
        const { data } = await supabase.from("hero_stats").select("*").single();
        if (data) setHeroStats(data);
      } catch (err) {
        console.error("Error fetching hero stats:", err);
      }
    })();
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero — Baburam Timsina"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-[#FAFAF8] to-[#F0F4FA] text-black antialiased"
    >
      {/* Subtle background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(15,122,90,0.10),transparent_70%)]" />
        <div className="absolute -bottom-48 -left-48 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(11,37,69,0.07),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,#0B2545_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.025]" />
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-6 sm:px-8 sm:pt-8 lg:px-14 lg:pt-10"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left column */}
          <motion.div variants={stagger} className="flex flex-col gap-6">
            <ProfileImage />
            <Identity />
          </motion.div>

          {/* Right column */}
          <motion.div variants={stagger} className="flex flex-col gap-5">
            <QuoteCard />
            <AboutTeaser />
            <Counters heroStats={heroStats} />
            <CTAButtons />
          </motion.div>
        </div>

        <div className="mt-10">
          <AcademicProfileCards />
        </div>
      </motion.div>
    </section>
  );
}