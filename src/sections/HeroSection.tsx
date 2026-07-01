
// 'use client'

// import { motion, useScroll, useTransform } from 'framer-motion'
// import {
//     ArrowDown,
//     BookOpen,
//     Award,
//     MapPin,
//     Quote,
//     GraduationCap,
//     ExternalLink,
//     ChevronRight,
//     Star,
// } from 'lucide-react'
// import { useRef } from 'react'

// // ─── Inject Google Fonts + Global Styles ─────────────────────────────
// const GlobalStyles = () => (
//     <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap');

//         :root {
//             --navy:       #0B2545;
//             --navy-mid:   #0F2F56;
//             --navy-light: #1A4080;
//             --royal:      #1A5CB8;
//             --gold:       #00B894 ;
//             --gold-light: #E8CC6A;
//             --gold-pale:  #F5E6A3;
//             --white:      #FFFFFF;
//             --off-white:  #FAFAF8;
//             --gray-50:    #F7F8FA;
//             --gray-100:   #EEF0F4;
//             --gray-200:   #DCE0E8;
//             --gray-400:   #8A93A6;
//             --gray-600:   #4A5568;
//             --gray-800:   #1A202C;
//             --shadow-sm:  0 1px 3px rgba(11,37,69,0.08), 0 1px 2px rgba(11,37,69,0.04);
//             --shadow-md:  0 4px 16px rgba(11,37,69,0.10), 0 2px 6px rgba(11,37,69,0.06);
//             --shadow-lg:  0 12px 40px rgba(11,37,69,0.14), 0 4px 12px rgba(11,37,69,0.08);
//             --shadow-xl:  0 24px 64px rgba(11,37,69,0.18), 0 8px 24px rgba(11,37,69,0.10);
//             --shadow-gold: 0 8px 32px rgba(212,175,55,0.20);
//         }

//         * { box-sizing: border-box; }

//         body {
//             font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//             background-color: var(--off-white);
//             color: var(--navy);
//             -webkit-font-smoothing: antialiased;
//         }

//         /* ── Serif display utility ──────────────────────────────── */
//         .font-display  { font-family: 'Playfair Display', Georgia, serif; }
//         .font-crimson  { font-family: 'Crimson Text', Georgia, serif; }

//         /* ── Gold underline signature element ───────────────────── */
//         .name-underline {
//             position: relative;
//             display: inline-block;
//         }
//         .name-underline::after {
//             content: '';
//             position: absolute;
//             bottom: -4px;
//             left: 0;
//             width: 100%;
//             height: 3px;
//             background: linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 50%, transparent 100%);
//             border-radius: 2px;
//             transform: scaleX(0);
//             transform-origin: left;
//             animation: underline-draw 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.8s forwards;
//         }
//         @keyframes underline-draw {
//             to { transform: scaleX(1); }
//         }

//         /* ── Gold shimmer on stat cards ─────────────────────────── */
//         .gold-shimmer {
//             position: relative;
//             overflow: hidden;
//         }
//         .gold-shimmer::before {
//             content: '';
//             position: absolute;
//             top: 0; left: -75%;
//             width: 50%; height: 100%;
//             background: linear-gradient(90deg, transparent, rgba(212,175,55,0.12), transparent);
//             transform: skewX(-15deg);
//             transition: none;
//         }
//         .gold-shimmer:hover::before {
//             animation: shimmer-pass 0.7s ease-out forwards;
//         }
//         @keyframes shimmer-pass {
//             to { left: 150%; }
//         }

//         /* ── Pulse ring on profile badge ────────────────────────── */
//         @keyframes pulse-ring {
//             0%   { transform: scale(1); opacity: 0.6; }
//             100% { transform: scale(1.35); opacity: 0; }
//         }

//         /* ── Floating dots animation ────────────────────────────── */
//         @keyframes float-dot {
//             0%, 100% { transform: translateY(0px); opacity: 0.4; }
//             50%       { transform: translateY(-8px); opacity: 0.8; }
//         }

//         /* ── Scroll indicator ───────────────────────────────────── */
//         @keyframes scroll-bounce {
//             0%, 100% { transform: translateY(0); }
//             50%       { transform: translateY(5px); }
//         }

//         /* ── Focus styles ───────────────────────────────────────── */
//         a:focus-visible, button:focus-visible {
//             outline: 2px solid var(--gold);
//             outline-offset: 3px;
//             border-radius: 4px;
//         }

//         /* ── Reduced motion ─────────────────────────────────────── */
//         @media (prefers-reduced-motion: reduce) {
//             *, *::before, *::after {
//                 animation-duration: 0.01ms !important;
//                 transition-duration: 0.01ms !important;
//             }
//         }
//     `}</style>
// )

// // ─── Animation Variants ──────────────────────────────────────────────
// const fadeInUp = {
//     initial: { opacity: 0, y: 36 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
// }

// const fadeInScale = {
//     initial: { opacity: 0, scale: 0.94 },
//     animate: { opacity: 1, scale: 1 },
//     transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
// }

// const fadeInRight = {
//     initial: { opacity: 0, x: 40 },
//     animate: { opacity: 1, x: 0 },
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
// }

// const staggerContainer = {
//     animate: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
// }

// // ─── Sub-components ──────────────────────────────────────────────────

// /** Decorative floating background orbs */
// function BackgroundCanvas() {
//     return (
//         <div
//             aria-hidden="true"
//             style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
//         >
//             {/* Primary navy-to-royal gradient wash */}
//             <div style={{
//                 position: 'absolute', inset: 0,
//                 background: 'linear-gradient(145deg, #F7F8FA 0%, #FAFAF8 40%, #F0F4FA 100%)',
//             }} />

//             {/* Gold accent orb — top right */}
//             <motion.div
//                 animate={{ x: ['0%', '6%', '0%'], y: ['0%', '-5%', '0%'] }}
//                 transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
//                 style={{
//                     position: 'absolute', top: '-20%', right: '-15%',
//                     width: 700, height: 700,
//                     background: 'radial-gradient(circle, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.04) 50%, transparent 75%)',
//                     borderRadius: '50%',
//                 }}
//             />

//             {/* Navy deep orb — bottom left */}
//             <motion.div
//                 animate={{ x: ['0%', '-5%', '0%'], y: ['0%', '7%', '0%'] }}
//                 transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
//                 style={{
//                     position: 'absolute', bottom: '-25%', left: '-20%',
//                     width: 850, height: 850,
//                     background: 'radial-gradient(circle, rgba(11,37,69,0.07) 0%, rgba(26,64,128,0.04) 50%, transparent 70%)',
//                     borderRadius: '50%',
//                 }}
//             />

//             {/* Royal blue mid orb */}
//             <motion.div
//                 animate={{ x: ['0%', '3%', '0%'], y: ['0%', '4%', '0%'] }}
//                 transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
//                 style={{
//                     position: 'absolute', top: '40%', left: '35%',
//                     width: 500, height: 500,
//                     background: 'radial-gradient(circle, rgba(26,92,184,0.05) 0%, transparent 70%)',
//                     borderRadius: '50%',
//                 }}
//             />

//             {/* Subtle dot grid */}
//             <div style={{
//                 position: 'absolute', inset: 0, opacity: 0.025,
//                 backgroundImage: 'radial-gradient(circle, #0B2545 1px, transparent 1px)',
//                 backgroundSize: '36px 36px',
//             }} />

//             {/* Top-right corner accent lines — gold */}
//             <div style={{
//                 position: 'absolute', top: 0, right: 0,
//                 width: 280, height: 2,
//                 background: 'linear-gradient(to left, rgba(212,175,55,0.55), rgba(212,175,55,0.12), transparent)',
//             }} />
//             <div style={{
//                 position: 'absolute', top: 0, right: 0,
//                 width: 2, height: 280,
//                 background: 'linear-gradient(to bottom, rgba(212,175,55,0.55), rgba(212,175,55,0.12), transparent)',
//             }} />

//             {/* Bottom-left corner accent lines — navy */}
//             <div style={{
//                 position: 'absolute', bottom: 0, left: 0,
//                 width: 200, height: 1.5,
//                 background: 'linear-gradient(to right, rgba(11,37,69,0.25), rgba(11,37,69,0.06), transparent)',
//             }} />
//             <div style={{
//                 position: 'absolute', bottom: 0, left: 0,
//                 width: 1.5, height: 200,
//                 background: 'linear-gradient(to top, rgba(11,37,69,0.25), rgba(11,37,69,0.06), transparent)',
//             }} />

//             {/* Floating decorative dots */}
//             {[
//                 { top: '18%', right: '22%', delay: '0s', size: 6, color: 'rgba(212,175,55,0.35)' },
//                 { top: '35%', right: '8%',  delay: '1s', size: 4, color: 'rgba(26,64,128,0.25)' },
//                 { top: '62%', left: '6%',   delay: '2s', size: 5, color: 'rgba(212,175,55,0.25)' },
//                 { top: '75%', right: '30%', delay: '0.5s', size: 3, color: 'rgba(11,37,69,0.20)' },
//             ].map((dot, i) => (
//                 <div key={i} style={{
//                     position: 'absolute',
//                     top: dot.top, right: (dot as any).right, left: (dot as any).left,
//                     width: dot.size, height: dot.size,
//                     borderRadius: '50%',
//                     backgroundColor: dot.color,
//                     animation: `float-dot 4s ease-in-out ${dot.delay} infinite`,
//                 }} />
//             ))}
//         </div>
//     )
// }

// /** Profile image with premium dimensional frame */
// function ProfileImage() {
//     return (
//         <motion.div
//             variants={fadeInScale}
//             style={{ position: 'relative', width: '100%', margin: '0 auto' }}
//         >
//             {/* Outer glow halo */}
//             <div style={{
//                 position: 'absolute', inset: -20,
//                 borderRadius: 32,
//                 background: 'radial-gradient(ellipse, rgba(212,175,55,0.18) 0%, transparent 70%)',
//                 filter: 'blur(20px)',
//             }} />

//             {/* Offset shadow card — depth effect */}
//             <div style={{
//                 position: 'absolute', inset: 0,
//                 borderRadius: 24,
//                 background: 'linear-gradient(135deg, var(--navy-light), var(--royal))',
//                 transform: 'translate(8px, 10px)',
//                 opacity: 0.15,
//             }} />

//             {/* Main card frame */}
//             <motion.div
//                 whileHover={{ y: -4 }}
//                 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                 style={{
//                     position: 'relative',
//                     borderRadius: 24,
//                     overflow: 'hidden',
//                     border: '1.5px solid rgba(212,175,55,0.30)',
//                     backgroundColor: 'white',
//                     boxShadow: '0 20px 60px rgba(11,37,69,0.18), 0 4px 16px rgba(11,37,69,0.10)',
//                     aspectRatio: '3 / 4',
//                 }}
//             >
//                 {/* Inner ring */}
//                 <div style={{
//                     position: 'absolute', inset: 0, zIndex: 2, borderRadius: 24,
//                     boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.20)',
//                     pointerEvents: 'none',
//                 }} />

//                 {/* Profile image */}
//                 <motion.img
//                     src="/images/profile.jpg"
//                     alt="Dr. Baburam Timsina — Professor and Academic Leader"
//                     whileHover={{ scale: 1.04 }}
//                     transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//                     style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
//                 />

//                 {/* Gradient overlay — bottom fade */}
//                 <div style={{
//                     position: 'absolute', inset: 0,
//                     background: 'linear-gradient(to top, rgba(11,37,69,0.55) 0%, rgba(11,37,69,0.10) 40%, transparent 70%)',
//                     pointerEvents: 'none', zIndex: 1,
//                 }} />

//                 {/* Gold corner accents */}
//                 {[
//                     { top: 16, left: 16, borderTop: '2px solid', borderLeft: '2px solid', borderTopLeftRadius: 12 },
//                     { bottom: 16, right: 16, borderBottom: '2px solid', borderRight: '2px solid', borderBottomRightRadius: 12 },
//                 ].map((corner, i) => (
//                     <div key={i} style={{
//                         position: 'absolute', zIndex: 3,
//                         width: 28, height: 28,
//                         borderColor: 'rgba(212,175,55,0.60)',
//                         ...corner,
//                         pointerEvents: 'none',
//                     }} />
//                 ))}

//                 {/* Academic Leader badge */}
//                 <div style={{
//                     position: 'absolute', bottom: 20, left: 20, zIndex: 4,
//                     display: 'flex', alignItems: 'center', gap: 8,
//                     background: 'rgba(11,37,69,0.88)',
//                     backdropFilter: 'blur(12px)',
//                     WebkitBackdropFilter: 'blur(12px)',
//                     border: '1px solid rgba(212,175,55,0.35)',
//                     padding: '7px 14px',
//                     borderRadius: 100,
//                     boxShadow: '0 4px 16px rgba(0,0,0,0.30)',
//                 }}>
//                     {/* Pulse ring */}
//                     <div style={{ position: 'relative', width: 8, height: 8 }}>
//                         <div style={{
//                             position: 'absolute', inset: 0,
//                             borderRadius: '50%',
//                             backgroundColor: 'var(--gold)',
//                             animation: 'pulse-ring 1.8s ease-out infinite',
//                             opacity: 0.5,
//                         }} />
//                         <div style={{
//                             width: 8, height: 8, borderRadius: '50%',
//                             backgroundColor: 'var(--gold)',
//                             position: 'relative', zIndex: 1,
//                         }} />
//                     </div>
//                     <Award style={{ width: 13, height: 13, color: 'var(--gold)' }} />
//                     <span style={{
//                         fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
//                         textTransform: 'uppercase', color: '#FFFFFF',
//                         fontFamily: 'Inter, sans-serif',
//                     }}>
//                         Academic Leader
//                     </span>
//                 </div>
//             </motion.div>

//             {/* Floating stat pill — top right */}
//             <motion.div
//                 initial={{ opacity: 0, x: 20, y: -10 }}
//                 animate={{ opacity: 1, x: 0, y: 0 }}
//                 transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 style={{
//                     position: 'absolute', top: -16, right: -16,
//                     background: 'white',
//                     border: '1.5px solid rgba(212,175,55,0.25)',
//                     borderRadius: 16,
//                     padding: '10px 16px',
//                     boxShadow: '0 8px 28px rgba(11,37,69,0.14)',
//                     display: 'flex', flexDirection: 'column', alignItems: 'center',
//                     minWidth: 72,
//                 }}
//             >
//                 <span className="font-display" style={{ fontSize: 22, fontWeight: 700, color: 'var(--navy)', lineHeight: 1 }}>20+</span>
//                 <span style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-400)', marginTop: 3 }}>Years</span>
//             </motion.div>

//             {/* Floating stat pill — bottom left */}
//             <motion.div
//                 initial={{ opacity: 0, x: -20, y: 10 }}
//                 animate={{ opacity: 1, x: 0, y: 0 }}
//                 transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 style={{
//                     position: 'absolute', bottom: 60, left: -20,
//                     background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
//                     border: '1.5px solid rgba(212,175,55,0.20)',
//                     borderRadius: 16,
//                     padding: '10px 16px',
//                     boxShadow: '0 8px 28px rgba(11,37,69,0.28)',
//                     display: 'flex', flexDirection: 'column', alignItems: 'center',
//                     minWidth: 72,
//                 }}
//             >
//                 <span className="font-display" style={{ fontSize: 22, fontWeight: 700, color: 'white', lineHeight: 1 }}>50+</span>
//                 <span style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white', marginTop: 3 }}>Papers</span>
//             </motion.div>
//         </motion.div>
//     )
// }

// /** Academic profile cards (Scholar + ResearchGate) */
// function AcademicProfileCards() {
//     const profiles = [
//         {
//             name: 'Google Scholar',
//             href: 'https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ',
//             Icon: GraduationCap,
//             badgeGradient: 'linear-gradient(135deg, #4285F4, #34A853)',
//             borderColor: 'rgba(66,133,244,0.22)',
//             stats: [
//                 { value: '1,847', label: 'Citations' },
//                 { value: '24', label: 'H-Index' },
//             ],
//         },
//         {
//             name: 'ResearchGate',
//             href: 'https://www.researchgate.net/profile/Baburam-Timsina-3',
//             Icon: BookOpen,
//             badgeGradient: 'linear-gradient(135deg, #00B894, #00CEC9)',
//             borderColor: 'rgba(0,184,148,0.22)',
//             stats: [
//                 { value: '32', label: 'RI Score' },
//                 { value: '1,203', label: 'Citations' },
//             ],
//         },
//     ]

//     return (
//         <motion.div
//     variants={fadeInUp}
//     style={{
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: 14,
//         marginTop: 10, // <-- added this
//     }}
// >
//     {profiles.map((p) => (
//         <motion.a
//             key={p.name}
//             href={p.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="gold-shimmer"
//             whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(11,37,69,0.16)' }}
//             transition={{ duration: 0.32 }}
//             style={{
//                 display: 'flex', flexDirection: 'column', gap: 14,
//                 padding: '18px 16px',
//                 borderRadius: 18,
//                 background: '#FFFFFF',
//                 border: `1.5px solid ${p.borderColor}`,
//                 boxShadow: '0 2px 12px rgba(11,37,69,0.07)',
//                 textDecoration: 'none',
//                 transition: 'box-shadow 0.32s',
//                 cursor: 'pointer',
//             }}
//         >
//             {/* Header row */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                 <div style={{
//                     width: 36, height: 36, borderRadius: '50%',
//                     background: p.badgeGradient,
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     flexShrink: 0,
//                     boxShadow: '0 3px 10px rgba(0,0,0,0.18)',
//                 }}>
//                     <p.Icon style={{ width: 16, height: 16, color: '#fff' }} />
//                 </div>
//                 <span style={{
//                     fontSize: 12.5, fontWeight: 600,
//                     color: 'var(--navy)', flex: 1,
//                     fontFamily: 'Inter, sans-serif',
//                 }}>
//                     {p.name}
//                 </span>
//                 <ExternalLink style={{ width: 13, height: 13, color: 'var(--gray-400)', flexShrink: 0 }} />
//             </div>

//             {/* Stats */}
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
//                 {p.stats.map((s) => (
//                     <div key={s.label} style={{
//                         display: 'flex', flexDirection: 'column', alignItems: 'center',
//                         padding: '10px 6px',
//                         borderRadius: 12,
//                         background: 'var(--gray-50)',
//                         border: '1px solid var(--gray-100)',
//                     }}>
//                         <span className="font-display" style={{
//                             fontSize: 17, fontWeight: 700,
//                             color: 'var(--navy)', lineHeight: 1,
//                         }}>
//                             {s.value}
//                         </span>
//                         <span style={{
//                             fontSize: 9.5, fontWeight: 500,
//                             letterSpacing: '0.10em', textTransform: 'uppercase',
//                             color: 'var(--gray-400)', marginTop: 4,
//                             fontFamily: 'Inter, sans-serif',
//                         }}>
//                             {s.label}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </motion.a>
//     ))}
// </motion.div>
//     )
// }

// /** CTA buttons row */
// function CTAButtons() {
//     return (
//         <motion.div
//             variants={fadeInUp}
//             style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}
//         >
//             {/* Primary CTA */}
//             <motion.a
//                 href="#publications"
//                 whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(212,175,55,0.40)' }}
//                 whileTap={{ scale: 0.97 }}
//                 transition={{ duration: 0.25 }}
//                 style={{
//                     display: 'inline-flex', alignItems: 'center', gap: 8,
//                     padding: '12px 24px',
//                     borderRadius: 100,
//                     background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
//                     border: '1px solid rgba(212,175,55,0.22)',
//                     color: '#FFFFFF',
//                     fontSize: 13.5, fontWeight: 600,
//                     letterSpacing: '0.02em',
//                     textDecoration: 'none',
//                     fontFamily: 'Inter, sans-serif',
//                     boxShadow: '0 4px 20px rgba(11,37,69,0.30)',
//                     transition: 'box-shadow 0.25s',
//                 }}
//             >
//                 <BookOpen style={{ width: 15, height: 15 }} />
//                 View Publications
//                 <ChevronRight style={{ width: 15, height: 15, opacity: 0.7 }} />
//             </motion.a>

//             {/* Secondary CTA */}
//             <motion.a
//                 href="#contact"
//                 whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(212,175,55,0.25)' }}
//                 whileTap={{ scale: 0.97 }}
//                 transition={{ duration: 0.25 }}
//                 style={{
//                     display: 'inline-flex', alignItems: 'center', gap: 8,
//                     padding: '11px 22px',
//                     borderRadius: 100,
//                     background: 'transparent',
//                     border: '1.5px solid rgba(11,37,69,0.20)',
//                     color: 'var(--navy)',
//                     fontSize: 13.5, fontWeight: 600,
//                     letterSpacing: '0.02em',
//                     textDecoration: 'none',
//                     fontFamily: 'Inter, sans-serif',
//                     transition: 'box-shadow 0.25s, border-color 0.25s',
//                 }}
//             >
//                 Get in Touch
//             </motion.a>
//         </motion.div>
//     )
// }

// // ─── Main Component ──────────────────────────────────────────────────
// export function HeroSection() {
//     const containerRef = useRef<HTMLElement>(null)
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ['start start', 'end start'],
//     })

//     const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.25])
//     const y       = useTransform(scrollYProgress, [0, 0.55], [0, -30])

//     return (
//         <>
//             <GlobalStyles />

//             <section
//                 id="home"
//                 ref={containerRef}
//                 aria-label="Hero — Dr. Baburam Timsina"
//                 style={{
//                     position: 'relative',
//                     minHeight: '100vh',
//                     overflow: 'hidden',
//                     background: 'var(--off-white)',
//                 }}
//             >
//                 <motion.div style={{ opacity, y, position: 'absolute', inset: 0 }}>
//                     <BackgroundCanvas />
//                 </motion.div>

//                 {/* ─── Main Content ─────────────────────────────────── */}
//                 <div style={{
//                     position: 'relative', zIndex: 10,
//                     minHeight: '100vh',
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 }}>
//                     <div style={{
//                         width: '100%', maxWidth: 1200,
//                         margin: '0 auto',
//                         padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 56px)',
//                     }}>
//                         <motion.div
//                             initial="initial"
//                             animate="animate"
//                             variants={staggerContainer}
//                             style={{
//                                 display: 'grid',
//                                 gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
//                                 gap: 'clamp(48px, 6vw, 88px)',
//                                 alignItems: 'center',
//                             }}
//                         >
//                             {/* ── LEFT COLUMN ──────────────────────── */}
//                             <motion.div
//                                 variants={staggerContainer}
//                                 style={{ display: 'flex', flexDirection: 'column', gap: 36 }}
//                             >
//                                 <ProfileImage />

//                                 {/* Name & Titles */}
//                                 <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
//                                     {/* Eyebrow label */}
//                                     <div style={{
//                                         display: 'inline-flex', alignItems: 'center', gap: 8,
//                                         marginBottom: 18,
//                                         padding: '6px 16px',
//                                         borderRadius: 100,
//                                         background: 'rgba(212,175,55,0.09)',
//                                         border: '1px solid rgba(212,175,55,0.25)',
//                                     }}>
//                                         <Star style={{ width: 11, height: 11, color: 'var(--gold)' }} />
//                                         <span style={{
//                                             fontSize: 10.5, fontWeight: 600,
//                                             letterSpacing: '0.18em', textTransform: 'uppercase',
//                                             color: 'var(--navy)', fontFamily: 'Inter, sans-serif',
//                                         }}>
//                                             Professor · Director · HOD
//                                         </span>
//                                         <Star style={{ width: 11, height: 11, color: 'var(--gold)' }} />
//                                     </div>

//                                     {/* Name heading */}
//                                     <motion.h1
//                                         className="font-display"
//                                         initial={{ opacity: 0, y: 16 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
//                                         style={{
//                                             fontSize: 'clamp(36px, 6vw, 60px)',
//                                             fontWeight: 700,
//                                             lineHeight: 1.08,
//                                             letterSpacing: '-0.02em',
//                                             margin: 0,
//                                         }}
//                                     >
//                                         <span style={{ color: 'var(--navy)', display: 'block' }}>Dr. Baburam</span>
//                                         <span
//                                             className="name-underline"
//                                             style={{
//                                                 background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%)',
//                                                 WebkitBackgroundClip: 'text',
//                                                 WebkitTextFillColor: 'transparent',
//                                                 backgroundClip: 'text',
//                                                 display: 'inline-block',
//                                                 paddingBottom: 6,
//                                             }}
//                                         >
//                                             Timsina
//                                         </span>
//                                     </motion.h1>

//                                     {/* Location line */}
//                                     <motion.p
//                                         variants={fadeInUp}
//                                         style={{
//                                             display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                             gap: 6, marginTop: 14,
//                                             fontSize: 13, color: 'var(--gray-400)',
//                                             fontFamily: 'Inter, sans-serif',
//                                         }}
//                                     >
//                                         <MapPin style={{ width: 13, height: 13, color: 'var(--gold)', flexShrink: 0 }} />
//                                         Teacher Educator &amp; Academic Leader
//                                     </motion.p>

//                                     {/* Gold rule */}
//                                     <div style={{
//                                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                         gap: 10, marginTop: 18,
//                                     }}>
//                                         <div style={{ height: 1, width: 48, background: 'linear-gradient(to right, var(--gold), transparent)' }} />
//                                         <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'var(--gold)' }} />
//                                         <div style={{ height: 1, width: 48, background: 'linear-gradient(to left, var(--gold), transparent)' }} />
//                                     </div>
//                                 </motion.div>

//                                 <AcademicProfileCards />
//                             </motion.div>

//                             {/* ── RIGHT COLUMN ─────────────────────── */}
//                             <motion.div
//                                 variants={staggerContainer}
//                                 style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
//                             >
//                                 {/* Quote Card */}
//                                 <motion.div
//                                     variants={fadeInRight}
//                                     style={{
//                                         position: 'relative',
//                                         padding: 'clamp(28px, 4vw, 44px)',
//                                         borderRadius: 24,
//                                         background: '#FFFFFF',
//                                         border: '1.5px solid rgba(212,175,55,0.18)',
//                                         boxShadow: '0 12px 48px rgba(11,37,69,0.10), 0 2px 8px rgba(11,37,69,0.06)',
//                                         overflow: 'hidden',
//                                     }}
//                                 >
//                                     {/* Left gold accent bar */}
//                                     <div style={{
//                                         position: 'absolute', left: 0, top: 32, bottom: 32, width: 4,
//                                         background: 'linear-gradient(to bottom, var(--gold), rgba(212,175,55,0.20))',
//                                         borderRadius: '0 4px 4px 0',
//                                     }} />

//                                     {/* Background pattern */}
//                                     <div style={{
//                                         position: 'absolute', top: -20, right: -20, opacity: 0.04,
//                                         fontSize: 160, lineHeight: 1,
//                                         fontFamily: 'Georgia, serif', color: 'var(--gold)',
//                                         pointerEvents: 'none', userSelect: 'none',
//                                     }}>
//                                         &ldquo;
//                                     </div>

//                                     {/* Quote icon */}
//                                     <div style={{
//                                         width: 44, height: 44, borderRadius: 12,
//                                         background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.06))',
//                                         border: '1px solid rgba(212,175,55,0.22)',
//                                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                         marginBottom: 24,
//                                     }}>
//                                         <Quote style={{ width: 18, height: 18, color: 'var(--gold)' }} />
//                                     </div>

//                                     <motion.blockquote variants={fadeInUp} style={{ margin: 0, paddingLeft: 16 }}>
//                                         <p
//                                             className="font-crimson"
//                                             style={{
//                                                 fontSize: 'clamp(17px, 2.2vw, 22px)',
//                                                 lineHeight: 1.65,
//                                                 color: 'rgba(11,37,69,0.88)',
//                                                 fontStyle: 'italic',
//                                                 fontWeight: 400,
//                                                 margin: 0,
//                                             }}
//                                         >
//                                             &ldquo;I will open rivers in high places, and fountains in the midst of the valleys: I will make the wilderness a pool of water, and the dry land springs of water.&rdquo;
//                                         </p>

//                                         <div style={{
//                                             display: 'flex', alignItems: 'center', gap: 12, marginTop: 20,
//                                         }}>
//                                             <div style={{
//                                                 height: 1, flex: 1,
//                                                 background: 'linear-gradient(to right, rgba(212,175,55,0.45), transparent)',
//                                             }} />
//                                             <span style={{
//                                                 fontSize: 11, fontWeight: 600,
//                                                 letterSpacing: '0.14em', textTransform: 'uppercase',
//                                                 color: 'var(--gold)',
//                                                 fontFamily: 'Inter, sans-serif',
//                                             }}>
//                                                 — Isaiah 41:18
//                                             </span>
//                                         </div>
//                                     </motion.blockquote>
//                                 </motion.div>

//                                 {/* About teaser card */}
//                                 <motion.div
//                                     variants={fadeInRight}
//                                     whileHover={{ borderColor: 'rgba(212,175,55,0.30)' }}
//                                     transition={{ duration: 0.3 }}
//                                     style={{
//                                         position: 'relative',
//                                         padding: '24px 28px',
//                                         borderRadius: 20,
//                                         background: 'rgba(11,37,69,0.03)',
//                                         border: '1.5px solid rgba(11,37,69,0.07)',
//                                         backdropFilter: 'blur(8px)',
//                                         WebkitBackdropFilter: 'blur(8px)',
//                                         transition: 'border-color 0.3s',
//                                     }}
//                                 >
//                                     {/* Section label */}
//                                     <div style={{
//                                         display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
//                                     }}>
//                                         <div style={{
//                                             width: 32, height: 32, borderRadius: 10,
//                                             background: 'rgba(212,175,55,0.10)',
//                                             border: '1px solid rgba(212,175,55,0.22)',
//                                             display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                         }}>
//                                             <BookOpen style={{ width: 14, height: 14, color: 'var(--gold)' }} />
//                                         </div>
//                                         <span style={{
//                                             fontSize: 10.5, fontWeight: 700,
//                                             letterSpacing: '0.20em', textTransform: 'uppercase',
//                                             color: 'rgba(11,37,69,0.45)',
//                                             fontFamily: 'Inter, sans-serif',
//                                         }}>
//                                             About
//                                         </span>
//                                     </div>

//                                     <div style={{
//                                         borderLeft: '2.5px solid rgba(212,175,55,0.40)',
//                                         paddingLeft: 16,
//                                     }}>
//                                         <p style={{
//                                             fontSize: 'clamp(13.5px, 1.5vw, 15px)',
//                                             lineHeight: 1.75,
//                                             color: 'var(--gray-600)',
//                                             margin: 0,
//                                             fontWeight: 300,
//                                             fontFamily: 'Inter, sans-serif',
//                                         }}>
//                                             With a deep commitment to{' '}
//                                             <strong style={{ fontWeight: 600, color: 'var(--navy)' }}>
//                                                 academic excellence
//                                             </strong>
//                                             {' '}and institutional leadership, I have dedicated my career to advancing
//                                             education, mentoring future educators, and fostering transformative
//                                             learning environments.
//                                         </p>
//                                     </div>

//                                     <motion.a
//                                         href="#about"
//                                         whileHover={{ x: 4 }}
//                                         transition={{ duration: 0.25 }}
//                                         style={{
//                                             display: 'inline-flex', alignItems: 'center', gap: 6,
//                                             marginTop: 18,
//                                             fontSize: 12.5, fontWeight: 600,
//                                             color: 'var(--navy)',
//                                             textDecoration: 'none',
//                                             fontFamily: 'Inter, sans-serif',
//                                             letterSpacing: '0.03em',
//                                             opacity: 0.65,
//                                             transition: 'opacity 0.25s',
//                                         }}
//                                         onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
//                                         onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.65' }}
//                                     >
//                                         Learn more
//                                         <ArrowDown style={{ width: 13, height: 13 }} />
//                                     </motion.a>
//                                 </motion.div>

//                                 {/* Stats row */}
//                                 <motion.div
//                                     variants={fadeInRight}
//                                     style={{
//                                         display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
//                                     }}
//                                 >
//                                     {[
//                                         { value: '20+', label: 'Years Experience', gold: false },
//                                         { value: '50+', label: 'Publications',     gold: true  },
//                                         { value: '15+', label: 'Awards & Honors',  gold: false },
//                                     ].map((stat, i) => (
//                                         <motion.div
//                                             key={i}
//                                             className="gold-shimmer"
//                                             whileHover={{ y: -3 }}
//                                             transition={{ duration: 0.28 }}
//                                             style={{
//                                                 textAlign: 'center',
//                                                 padding: '16px 8px',
//                                                 borderRadius: 16,
//                                                 background: stat.gold
//                                                     ? 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)'
//                                                     : '#FFFFFF',
//                                                 border: `1.5px solid ${stat.gold ? 'rgba(212,175,55,0.22)' : 'rgba(11,37,69,0.08)'}`,
//                                                 boxShadow: stat.gold
//                                                     ? '0 8px 28px rgba(11,37,69,0.22)'
//                                                     : '0 2px 10px rgba(11,37,69,0.06)',
//                                                 cursor: 'default',
//                                             }}
//                                         >
//                                             <div
//                                                 className="font-display"
//                                                 style={{
//                                                     fontSize: 22, fontWeight: 700, lineHeight: 1,
//                                                     color: stat.gold ? 'var(--gold)' : 'var(--navy)',
//                                                 }}
//                                             >
//                                                 {stat.value}
//                                             </div>
//                                             <div style={{
//                                                 fontSize: 9.5, fontWeight: 600,
//                                                 letterSpacing: '0.10em', textTransform: 'uppercase',
//                                                 color: stat.gold ? 'rgba(255,255,255,0.50)' : 'var(--gray-400)',
//                                                 marginTop: 6,
//                                                 fontFamily: 'Inter, sans-serif',
//                                             }}>
//                                                 {stat.label}
//                                             </div>
//                                         </motion.div>
//                                     ))}
//                                 </motion.div>

//                                 {/* CTA Buttons */}
//                                 <CTAButtons />
//                             </motion.div>
//                         </motion.div>
//                     </div>
//                 </div>

//                 {/* ─── Scroll Indicator ─────────────────────────────── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 12 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1.6, duration: 0.8 }}
//                     aria-hidden="true"
//                     style={{
//                         position: 'absolute', bottom: 36, left: '50%',
//                         transform: 'translateX(-50%)',
//                         display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
//                     }}
//                 >
//                     <span style={{
//                         fontSize: 9, fontWeight: 600, letterSpacing: '0.25em',
//                         textTransform: 'uppercase',
//                         color: 'rgba(11,37,69,0.30)',
//                         fontFamily: 'Inter, sans-serif',
//                     }}>
//                         Scroll
//                     </span>
//                     <div style={{
//                         width: 24, height: 40,
//                         borderRadius: 100,
//                         border: '1.5px solid rgba(11,37,69,0.14)',
//                         background: 'rgba(255,255,255,0.55)',
//                         backdropFilter: 'blur(8px)',
//                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                         animation: 'scroll-bounce 2.4s ease-in-out infinite',
//                     }}>
//                         <motion.div
//                             animate={{ y: [0, 6, 0] }}
//                             transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
//                             style={{
//                                 width: 6, height: 6, borderRadius: '50%',
//                                 background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
//                             }}
//                         />
//                     </div>
//                 </motion.div>
//             </section>
//         </>
//     )
// }





'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
    ArrowDown,
    BookOpen,
    Award,
    MapPin,
    Quote,
    GraduationCap,
    ExternalLink,
    ChevronRight,
    Star,
} from 'lucide-react'
import { useRef } from 'react'

// ─── Inject Google Fonts + Global Styles ─────────────────────────────
const GlobalStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        :root {
            --navy:       #0B2545;
            --navy-mid:   #0F2F56;
            --navy-light: #1A4080;
            --royal:      #1A5CB8;
            --gold:       #00B894 ;
            --gold-light: #E8CC6A;
            --gold-pale:  #F5E6A3;
            --white:      #FFFFFF;
            --off-white:  #FAFAF8;
            --gray-50:    #F7F8FA;
            --gray-100:   #EEF0F4;
            --gray-200:   #DCE0E8;
            --gray-400:   #8A93A6;
            --gray-600:   #4A5568;
            --gray-800:   #1A202C;
            --shadow-sm:  0 1px 3px rgba(11,37,69,0.08), 0 1px 2px rgba(11,37,69,0.04);
            --shadow-md:  0 4px 16px rgba(11,37,69,0.10), 0 2px 6px rgba(11,37,69,0.06);
            --shadow-lg:  0 12px 40px rgba(11,37,69,0.14), 0 4px 12px rgba(11,37,69,0.08);
            --shadow-xl:  0 24px 64px rgba(11,37,69,0.18), 0 8px 24px rgba(11,37,69,0.10);
            --shadow-gold: 0 8px 32px rgba(212,175,55,0.20);
        }

        * { box-sizing: border-box; }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: var(--off-white);
            color: var(--navy);
            -webkit-font-smoothing: antialiased;
        }

        /* ── Serif display utility ──────────────────────────────── */
        .font-display  { font-family: 'Playfair Display', Georgia, serif; }
        .font-crimson  { font-family: 'Crimson Text', Georgia, serif; }

        /* ── Gold underline signature element ───────────────────── */
        .name-underline {
            position: relative;
            display: inline-block;
        }
        .name-underline::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 50%, transparent 100%);
            border-radius: 2px;
            transform: scaleX(0);
            transform-origin: left;
            animation: underline-draw 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.8s forwards;
        }
        @keyframes underline-draw {
            to { transform: scaleX(1); }
        }

        /* ── Gold shimmer on stat cards ─────────────────────────── */
        .gold-shimmer {
            position: relative;
            overflow: hidden;
        }
        .gold-shimmer::before {
            content: '';
            position: absolute;
            top: 0; left: -75%;
            width: 50%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(212,175,55,0.12), transparent);
            transform: skewX(-15deg);
            transition: none;
        }
        .gold-shimmer:hover::before {
            animation: shimmer-pass 0.7s ease-out forwards;
        }
        @keyframes shimmer-pass {
            to { left: 150%; }
        }

        /* ── Pulse ring on profile badge ────────────────────────── */
        @keyframes pulse-ring {
            0%   { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(1.35); opacity: 0; }
        }

        /* ── Floating dots animation ────────────────────────────── */
        @keyframes float-dot {
            0%, 100% { transform: translateY(0px); opacity: 0.4; }
            50%       { transform: translateY(-8px); opacity: 0.8; }
        }

        /* ── Scroll indicator ───────────────────────────────────── */
        @keyframes scroll-bounce {
            0%, 100% { transform: translateY(0); }
            50%       { transform: translateY(5px); }
        }

        /* ── Spotlight pulse for featured stats card ────────────── */
        @keyframes pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(1.2); }
        }

        /* ── Focus styles ───────────────────────────────────────── */
        a:focus-visible, button:focus-visible {
            outline: 2px solid var(--gold);
            outline-offset: 3px;
            border-radius: 4px;
        }

        /* ── Reduced motion ─────────────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                transition-duration: 0.01ms !important;
            }
        }
    `}</style>
)

// ─── Animation Variants ──────────────────────────────────────────────
const fadeInUp = {
    initial: { opacity: 0, y: 36 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
}

const fadeInScale = {
    initial: { opacity: 0, scale: 0.94 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
}

const fadeInRight = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

// ─── Sub-components ──────────────────────────────────────────────────

/** Decorative floating background orbs */
function BackgroundCanvas() {
    return (
        <div
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
        >
            {/* Primary navy-to-royal gradient wash */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(145deg, #F7F8FA 0%, #FAFAF8 40%, #F0F4FA 100%)',
            }} />

            {/* Gold accent orb — top right */}
            <motion.div
                animate={{ x: ['0%', '6%', '0%'], y: ['0%', '-5%', '0%'] }}
                transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute', top: '-20%', right: '-15%',
                    width: 700, height: 700,
                    background: 'radial-gradient(circle, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.04) 50%, transparent 75%)',
                    borderRadius: '50%',
                }}
            />

            {/* Navy deep orb — bottom left */}
            <motion.div
                animate={{ x: ['0%', '-5%', '0%'], y: ['0%', '7%', '0%'] }}
                transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute', bottom: '-25%', left: '-20%',
                    width: 850, height: 850,
                    background: 'radial-gradient(circle, rgba(11,37,69,0.07) 0%, rgba(26,64,128,0.04) 50%, transparent 70%)',
                    borderRadius: '50%',
                }}
            />

            {/* Royal blue mid orb */}
            <motion.div
                animate={{ x: ['0%', '3%', '0%'], y: ['0%', '4%', '0%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute', top: '40%', left: '35%',
                    width: 500, height: 500,
                    background: 'radial-gradient(circle, rgba(26,92,184,0.05) 0%, transparent 70%)',
                    borderRadius: '50%',
                }}
            />

            {/* Subtle dot grid */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.025,
                backgroundImage: 'radial-gradient(circle, #0B2545 1px, transparent 1px)',
                backgroundSize: '36px 36px',
            }} />

            {/* Top-right corner accent lines — gold */}
            <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 280, height: 2,
                background: 'linear-gradient(to left, rgba(212,175,55,0.55), rgba(212,175,55,0.12), transparent)',
            }} />
            <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 2, height: 280,
                background: 'linear-gradient(to bottom, rgba(212,175,55,0.55), rgba(212,175,55,0.12), transparent)',
            }} />

            {/* Bottom-left corner accent lines — navy */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0,
                width: 200, height: 1.5,
                background: 'linear-gradient(to right, rgba(11,37,69,0.25), rgba(11,37,69,0.06), transparent)',
            }} />
            <div style={{
                position: 'absolute', bottom: 0, left: 0,
                width: 1.5, height: 200,
                background: 'linear-gradient(to top, rgba(11,37,69,0.25), rgba(11,37,69,0.06), transparent)',
            }} />

            {/* Floating decorative dots */}
            {[
                { top: '18%', right: '22%', delay: '0s', size: 6, color: 'rgba(212,175,55,0.35)' },
                { top: '35%', right: '8%',  delay: '1s', size: 4, color: 'rgba(26,64,128,0.25)' },
                { top: '62%', left: '6%',   delay: '2s', size: 5, color: 'rgba(212,175,55,0.25)' },
                { top: '75%', right: '30%', delay: '0.5s', size: 3, color: 'rgba(11,37,69,0.20)' },
            ].map((dot, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    top: dot.top, right: (dot as any).right, left: (dot as any).left,
                    width: dot.size, height: dot.size,
                    borderRadius: '50%',
                    backgroundColor: dot.color,
                    animation: `float-dot 4s ease-in-out ${dot.delay} infinite`,
                }} />
            ))}
        </div>
    )
}

/** Profile image with premium dimensional frame */
function ProfileImage() {
    return (
        <motion.div
            variants={fadeInScale}
            style={{ position: 'relative', width: '100%', margin: '0 auto' }}
        >
            {/* Outer glow halo */}
            <div style={{
                position: 'absolute', inset: -20,
                borderRadius: 32,
                background: 'radial-gradient(ellipse, rgba(212,175,55,0.18) 0%, transparent 70%)',
                filter: 'blur(20px)',
            }} />

            {/* Offset shadow card — depth effect */}
            <div style={{
                position: 'absolute', inset: 0,
                borderRadius: 24,
                background: 'linear-gradient(135deg, var(--navy-light), var(--royal))',
                transform: 'translate(8px, 10px)',
                opacity: 0.15,
            }} />

            {/* Main card frame */}
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'relative',
                    borderRadius: 24,
                    overflow: 'hidden',
                    border: '1.5px solid rgba(212,175,55,0.30)',
                    backgroundColor: 'white',
                    boxShadow: '0 20px 60px rgba(11,37,69,0.18), 0 4px 16px rgba(11,37,69,0.10)',
                    aspectRatio: '3 / 4',
                }}
            >
                {/* Inner ring */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 2, borderRadius: 24,
                    boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.20)',
                    pointerEvents: 'none',
                }} />

                {/* Profile image */}
                <motion.img
                    src="/images/profile.jpg"
                    alt="Dr. Baburam Timsina — Professor and Academic Leader"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                {/* Gradient overlay — bottom fade */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(11,37,69,0.55) 0%, rgba(11,37,69,0.10) 40%, transparent 70%)',
                    pointerEvents: 'none', zIndex: 1,
                }} />

                {/* Gold corner accents */}
                {[
                    { top: 16, left: 16, borderTop: '2px solid', borderLeft: '2px solid', borderTopLeftRadius: 12 },
                    { bottom: 16, right: 16, borderBottom: '2px solid', borderRight: '2px solid', borderBottomRightRadius: 12 },
                ].map((corner, i) => (
                    <div key={i} style={{
                        position: 'absolute', zIndex: 3,
                        width: 28, height: 28,
                        borderColor: 'rgba(212,175,55,0.60)',
                        ...corner,
                        pointerEvents: 'none',
                    }} />
                ))}

                {/* Academic Leader badge */}
                <div style={{
                    position: 'absolute', bottom: 20, left: 20, zIndex: 4,
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: 'rgba(11,37,69,0.88)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(212,175,55,0.35)',
                    padding: '7px 14px',
                    borderRadius: 100,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.30)',
                }}>
                    {/* Pulse ring */}
                    <div style={{ position: 'relative', width: 8, height: 8 }}>
                        <div style={{
                            position: 'absolute', inset: 0,
                            borderRadius: '50%',
                            backgroundColor: 'var(--gold)',
                            animation: 'pulse-ring 1.8s ease-out infinite',
                            opacity: 0.5,
                        }} />
                        <div style={{
                            width: 8, height: 8, borderRadius: '50%',
                            backgroundColor: 'var(--gold)',
                            position: 'relative', zIndex: 1,
                        }} />
                    </div>
                    <Award style={{ width: 13, height: 13, color: 'var(--gold)' }} />
                    <span style={{
                        fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
                        textTransform: 'uppercase', color: '#FFFFFF',
                        fontFamily: 'Inter, sans-serif',
                    }}>
                        Academic Leader
                    </span>
                </div>
            </motion.div>

            {/* Floating stat pill — top right */}
            <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'absolute', top: -16, right: -16,
                    background: 'white',
                    border: '1.5px solid rgba(212,175,55,0.25)',
                    borderRadius: 16,
                    padding: '10px 16px',
                    boxShadow: '0 8px 28px rgba(11,37,69,0.14)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    minWidth: 72,
                }}
            >
                <span className="font-display" style={{ fontSize: 22, fontWeight: 700, color: 'var(--navy)', lineHeight: 1 }}>20+</span>
                <span style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-400)', marginTop: 3 }}>Years</span>
            </motion.div>

            {/* Floating stat pill — bottom left */}
            <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'absolute', bottom: 60, left: -20,
                    background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                    border: '1.5px solid rgba(212,175,55,0.20)',
                    borderRadius: 16,
                    padding: '10px 16px',
                    boxShadow: '0 8px 28px rgba(11,37,69,0.28)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    minWidth: 72,
                    
                }}
            >
                <span className="font-display" style={{ fontSize: 22, fontWeight: 700, color: 'white', lineHeight: 1 }}>50+</span>
                <span style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white', marginTop: 3 }}>Papers</span>
            </motion.div>
        </motion.div>
    )
}

/** Academic profile cards (Scholar + ResearchGate) */
function AcademicProfileCards() {
    const profiles = [
        {
            name: 'Google Scholar',
            href: 'https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ',
            Icon: GraduationCap,
            badgeGradient: 'linear-gradient(135deg, #4285F4, #34A853)',
            borderColor: 'rgba(66,133,244,0.22)',
            stats: [
                { value: '1,847', label: 'Citations' },
                { value: '24', label: 'H-Index' },
            ],
        },
        {
            name: 'ResearchGate',
            href: 'https://www.researchgate.net/profile/Baburam-Timsina-3',
            Icon: BookOpen,
            badgeGradient: 'linear-gradient(135deg, #00B894, #00CEC9)',
            borderColor: 'rgba(0,184,148,0.22)',
            stats: [
                { value: '32', label: 'RI Score' },
                { value: '1,203', label: 'Citations' },
            ],
        },
    ]

    return (
        <motion.div
    variants={fadeInUp}
    style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14,
        marginTop: 10, // <-- added this
    }}
>
    {profiles.map((p) => (
        <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-shimmer"
            whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(11,37,69,0.16)' }}
            transition={{ duration: 0.32 }}
            style={{
                display: 'flex', flexDirection: 'column', gap: 14,
                padding: '18px 16px',
                borderRadius: 18,
                background: '#FFFFFF',
                border: `1.5px solid ${p.borderColor}`,
                boxShadow: '0 2px 12px rgba(11,37,69,0.07)',
                textDecoration: 'none',
                transition: 'box-shadow 0.32s',
                cursor: 'pointer',
            }}
        >
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: p.badgeGradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 3px 10px rgba(0,0,0,0.18)',
                }}>
                    <p.Icon style={{ width: 16, height: 16, color: '#fff' }} />
                </div>
                <span style={{
                    fontSize: 12.5, fontWeight: 600,
                    color: 'var(--navy)', flex: 1,
                    fontFamily: 'Inter, sans-serif',
                }}>
                    {p.name}
                </span>
                <ExternalLink style={{ width: 13, height: 13, color: 'var(--gray-400)', flexShrink: 0 }} />
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {p.stats.map((s) => (
                    <div key={s.label} style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        padding: '10px 6px',
                        borderRadius: 12,
                        background: 'var(--gray-50)',
                        border: '1px solid var(--gray-100)',
                    }}>
                        <span className="font-display" style={{
                            fontSize: 17, fontWeight: 700,
                            color: 'var(--navy)', lineHeight: 1,
                        }}>
                            {s.value}
                        </span>
                        <span style={{
                            fontSize: 9.5, fontWeight: 500,
                            letterSpacing: '0.10em', textTransform: 'uppercase',
                            color: 'var(--gray-400)', marginTop: 4,
                            fontFamily: 'Inter, sans-serif',
                        }}>
                            {s.label}
                        </span>
                    </div>
                ))}
            </div>
        </motion.a>
    ))}
</motion.div>
    )
}

/** CTA buttons row */
function CTAButtons() {
    return (
        <motion.div
            variants={fadeInUp}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}
        >
            {/* Primary CTA */}
            <motion.a
                href="#publications"
                whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(212,175,55,0.40)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '12px 24px',
                    borderRadius: 100,
                    background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
                    border: '1px solid rgba(212,175,55,0.22)',
                    color: '#FFFFFF',
                    fontSize: 13.5, fontWeight: 600,
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: '0 4px 20px rgba(11,37,69,0.30)',
                    transition: 'box-shadow 0.25s',
                }}
            >
                <BookOpen style={{ width: 15, height: 15 }} />
                View Publications
                <ChevronRight style={{ width: 15, height: 15, opacity: 0.7 }} />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(212,175,55,0.25)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '11px 22px',
                    borderRadius: 100,
                    background: 'transparent',
                    border: '1.5px solid rgba(11,37,69,0.20)',
                    color: 'var(--navy)',
                    fontSize: 13.5, fontWeight: 600,
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'box-shadow 0.25s, border-color 0.25s',
                }}
            >
                Get in Touch
            </motion.a>
        </motion.div>
    )
}

// ─── Main Component ──────────────────────────────────────────────────
export function HeroSection() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.25])
    const y       = useTransform(scrollYProgress, [0, 0.55], [0, -30])

    return (
        <>
            <GlobalStyles />

            <section
                id="home"
                ref={containerRef}
                aria-label="Hero — Dr. Baburam Timsina"
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                    overflow: 'hidden',
                    background: 'var(--off-white)',
                }}
            >
                <motion.div style={{ opacity, y, position: 'absolute', inset: 0 }}>
                    <BackgroundCanvas />
                </motion.div>

                {/* ─── Main Content ─────────────────────────────────── */}
                <div style={{
                    position: 'relative', zIndex: 10,
                    minHeight: '100vh',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <div style={{
                        width: '100%', maxWidth: 1200,
                        margin: '0 auto',
                        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 56px)',
                    }}>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={staggerContainer}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                                gap: 'clamp(48px, 6vw, 88px)',
                                alignItems: 'center',
                            }}
                        >
                            {/* ── LEFT COLUMN ──────────────────────── */}
                            <motion.div
                                variants={staggerContainer}
                                style={{ display: 'flex', flexDirection: 'column', gap: 36 }}
                            >
                                <ProfileImage />

                                {/* Name & Titles */}
                                <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
                                    {/* Eyebrow label */}
                                    <div style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 8,
                                        marginBottom: 18,
                                        padding: '6px 16px',
                                        borderRadius: 100,
                                        background: 'rgba(212,175,55,0.09)',
                                        border: '1px solid rgba(212,175,55,0.25)',
                                    }}>
                                        <Star style={{ width: 11, height: 11, color: 'var(--gold)' }} />
                                        <span style={{
                                            fontSize: 10.5, fontWeight: 600,
                                            letterSpacing: '0.18em', textTransform: 'uppercase',
                                            color: 'var(--navy)', fontFamily: 'Inter, sans-serif',
                                        }}>
                                            Professor · Director · HOD
                                        </span>
                                        <Star style={{ width: 11, height: 11, color: 'var(--gold)' }} />
                                    </div>

                                    {/* Name heading */}
                                    <motion.h1
                                        className="font-display"
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                                        style={{
                                            fontSize: 'clamp(36px, 6vw, 60px)',
                                            fontWeight: 700,
                                            lineHeight: 1.08,
                                            letterSpacing: '-0.02em',
                                            margin: 0,
                                        }}
                                    >
                                        <span style={{ color: 'var(--navy)', display: 'block' }}>Dr. Baburam</span>
                                        <span
                                            className="name-underline"
                                            style={{
                                                background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                display: 'inline-block',
                                                paddingBottom: 6,
                                            }}
                                        >
                                            Timsina
                                        </span>
                                    </motion.h1>

                                    {/* Location line */}
                                    <motion.p
                                        variants={fadeInUp}
                                        style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            gap: 6, marginTop: 14,
                                            fontSize: 13, color: 'var(--gray-400)',
                                            fontFamily: 'Inter, sans-serif',
                                        }}
                                    >
                                        <MapPin style={{ width: 13, height: 13, color: 'var(--gold)', flexShrink: 0 }} />
                                        Teacher Educator &amp; Academic Leader
                                    </motion.p>

                                    {/* Gold rule */}
                                    <div style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        gap: 10, marginTop: 18,
                                    }}>
                                        <div style={{ height: 1, width: 48, background: 'linear-gradient(to right, var(--gold), transparent)' }} />
                                        <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'var(--gold)' }} />
                                        <div style={{ height: 1, width: 48, background: 'linear-gradient(to left, var(--gold), transparent)' }} />
                                    </div>
                                </motion.div>

                                <AcademicProfileCards />
                            </motion.div>

                            {/* ── RIGHT COLUMN ─────────────────────── */}
                            <motion.div
                                variants={staggerContainer}
                                style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
                            >
                                {/* Quote Card */}
                                <motion.div
                                    variants={fadeInRight}
                                    style={{
                                        position: 'relative',
                                        padding: 'clamp(28px, 4vw, 44px)',
                                        borderRadius: 24,
                                        background: '#FFFFFF',
                                        border: '1.5px solid rgba(212,175,55,0.18)',
                                        boxShadow: '0 12px 48px rgba(11,37,69,0.10), 0 2px 8px rgba(11,37,69,0.06)',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {/* Left gold accent bar */}
                                    <div style={{
                                        position: 'absolute', left: 0, top: 32, bottom: 32, width: 4,
                                        background: 'linear-gradient(to bottom, var(--gold), rgba(212,175,55,0.20))',
                                        borderRadius: '0 4px 4px 0',
                                    }} />

                                    {/* Background pattern */}
                                    <div style={{
                                        position: 'absolute', top: -20, right: -20, opacity: 0.04,
                                        fontSize: 160, lineHeight: 1,
                                        fontFamily: 'Georgia, serif', color: 'var(--gold)',
                                        pointerEvents: 'none', userSelect: 'none',
                                    }}>
                                        &ldquo;
                                    </div>

                                    {/* Quote icon */}
                                    <div style={{
                                        width: 44, height: 44, borderRadius: 12,
                                        background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.06))',
                                        border: '1px solid rgba(212,175,55,0.22)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: 24,
                                    }}>
                                        <Quote style={{ width: 18, height: 18, color: 'var(--gold)' }} />
                                    </div>

                                    <motion.blockquote variants={fadeInUp} style={{ margin: 0, paddingLeft: 16 }}>
                                        <p
                                            className="font-crimson"
                                            style={{
                                                fontSize: 'clamp(17px, 2.2vw, 22px)',
                                                lineHeight: 1.65,
                                                color: 'rgba(11,37,69,0.88)',
                                                fontStyle: 'italic',
                                                fontWeight: 400,
                                                margin: 0,
                                            }}
                                        >
                                            &ldquo;I will open rivers in high places, and fountains in the midst of the valleys: I will make the wilderness a pool of water, and the dry land springs of water.&rdquo;
                                        </p>

                                        <div style={{
                                            display: 'flex', alignItems: 'center', gap: 12, marginTop: 20,
                                        }}>
                                            <div style={{
                                                height: 1, flex: 1,
                                                background: 'linear-gradient(to right, rgba(212,175,55,0.45), transparent)',
                                            }} />
                                            <span style={{
                                                fontSize: 11, fontWeight: 600,
                                                letterSpacing: '0.14em', textTransform: 'uppercase',
                                                color: 'var(--gold)',
                                                fontFamily: 'Inter, sans-serif',
                                            }}>
                                                — Isaiah 41:18
                                            </span>
                                        </div>
                                    </motion.blockquote>
                                </motion.div>

                                {/* About teaser card */}
                                <motion.div
                                    variants={fadeInRight}
                                    whileHover={{ borderColor: 'rgba(212,175,55,0.30)' }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        position: 'relative',
                                        padding: '24px 28px',
                                        borderRadius: 20,
                                        background: 'rgba(11,37,69,0.03)',
                                        border: '1.5px solid rgba(11,37,69,0.07)',
                                        backdropFilter: 'blur(8px)',
                                        WebkitBackdropFilter: 'blur(8px)',
                                        transition: 'border-color 0.3s',
                                    }}
                                >
                                    {/* Section label - Enhanced visibility */}
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18,
                                    }}>
                                        <div style={{
                                            width: 40, height: 40, borderRadius: 12,
                                            background: 'linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.08))',
                                            border: '1.5px solid rgba(212,175,55,0.35)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            boxShadow: '0 4px 16px rgba(212,175,55,0.12)',
                                        }}>
                                            <BookOpen style={{ width: 16, height: 16, color: 'var(--gold)', strokeWidth: 1.8 }} />
                                        </div>
                                        <span style={{
                                            fontSize: 12, fontWeight: 800,
                                            letterSpacing: '0.22em', textTransform: 'uppercase',
                                            color: 'var(--text-primary)',
                                            fontFamily: 'Inter, sans-serif',
                                            backgroundImage: 'linear-gradient(135deg, var(--text-primary), var(--navy-light))',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}>
                                            About
                                        </span>
                                    </div>

                                    <div style={{
                                        borderLeft: '3px solid var(--gold)',
                                        paddingLeft: 20,
                                        paddingTop: 4,
                                        paddingBottom: 4,
                                    }}>
                                        <p style={{
                                            fontSize: 'clamp(14px, 1.6vw, 16px)',
                                            lineHeight: 1.8,
                                            color: 'var(--text-secondary)',
                                            margin: 0,
                                            fontWeight: 500,
                                            fontFamily: 'Inter, sans-serif',
                                            letterSpacing: '0.3px',
                                        }}>
                                            With a deep commitment to{' '}
                                            <strong style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.05em' }}>
                                                academic excellence
                                            </strong>
                                            {' '}and institutional leadership, I have dedicated my career to advancing
                                            education, mentoring future educators, and fostering transformative
                                            learning environments.
                                        </p>
                                    </div>

                                    <motion.a
                                        href="#about"
                                        whileHover={{ x: 6, color: 'var(--gold)' }}
                                        transition={{ duration: 0.25 }}
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: 8,
                                            marginTop: 22,
                                            fontSize: 13, fontWeight: 700,
                                            color: 'var(--text-primary)',
                                            textDecoration: 'none',
                                            fontFamily: 'Inter, sans-serif',
                                            letterSpacing: '0.04em',
                                            textTransform: 'uppercase',
                                            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                                            padding: '8px 0',
                                        }}
                                        onMouseEnter={(e) => { 
                                            (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                                        }}
                                        onMouseLeave={(e) => { 
                                            (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                                        }}
                                    >
                                        Learn more
                                        <ArrowDown style={{ width: 14, height: 14, transition: 'transform 0.3s' }} />
                                    </motion.a>
                                </motion.div>

                                {/* Stats row - Enhanced Professional Look */}
                                <motion.div
                                    variants={fadeInRight}
                                    style={{
                                        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14,
                                        marginTop: 28,
                                    }}
                                >
                                    {[
                                        { value: '20+', label: 'Years Experience', gold: false, icon: null },
                                        { value: '50+', label: 'Publications',     gold: true, icon: Star },
                                        { value: '15+', label: 'Awards & Honors',  gold: false, icon: null },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            className="gold-shimmer"
                                            whileHover={{ y: -6, scale: stat.gold ? 1.04 : 1.02 }}
                                            transition={{ duration: 0.32, type: 'spring', stiffness: 200, damping: 20 }}
                                            style={{
                                                textAlign: 'center',
                                                padding: stat.gold ? '26px 16px' : '22px 14px',
                                                borderRadius: 18,
                                                background: stat.gold
                                                    ? 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)'
                                                    : 'linear-gradient(135deg, #FFFFFF 0%, #FAFAF8 100%)',
                                                border: `2px solid ${stat.gold ? 'var(--gold)' : 'rgba(212,175,55,0.15)'}`,
                                                boxShadow: stat.gold
                                                    ? '0 20px 48px rgba(212,175,55,0.28), 0 8px 20px rgba(11,37,69,0.16)'
                                                    : '0 8px 24px rgba(11,37,69,0.10), 0 2px 8px rgba(11,37,69,0.04)',
                                                cursor: 'default',
                                                position: 'relative',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {/* Spotlight effect for Publications card */}
                                            {stat.gold && (
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '-50%',
                                                    right: '-50%',
                                                    width: '200%',
                                                    height: '200%',
                                                    background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
                                                    pointerEvents: 'none',
                                                    animation: 'pulse 4s ease-in-out infinite',
                                                }} />
                                            )}
                                            
                                            <div style={{ position: 'relative', zIndex: 1 }}>
                                                {stat.gold && (
                                                    <div style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        marginBottom: 8,
                                                    }}>
                                                        <Star style={{
                                                            width: 20,
                                                            height: 20,
                                                            color: 'var(--gold)',
                                                            fill: 'var(--gold)',
                                                            filter: 'drop-shadow(0 2px 8px rgba(212,175,55,0.4))',
                                                        }} />
                                                    </div>
                                                )}
                                                <div
                                                    className="font-display"
                                                    style={{
                                                        fontSize: stat.gold ? 32 : 26,
                                                        fontWeight: 800,
                                                        lineHeight: 1,
                                                        color: stat.gold ? 'var(--gold)' : 'var(--text-primary)',
                                                        textShadow: stat.gold ? '0 2px 8px rgba(0,0,0,0.20)' : 'none',
                                                        letterSpacing: '-0.5px',
                                                    }}
                                                >
                                                    {stat.value}
                                                </div>
                                                <div style={{
                                                    fontSize: stat.gold ? 10.5 : 10,
                                                    fontWeight: 700,
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase',
                                                    color: stat.gold ? 'rgba(255,255,255,0.75)' : 'var(--text-tertiary)',
                                                    marginTop: 10,
                                                    fontFamily: 'Inter, sans-serif',
                                                    opacity: stat.gold ? 0.95 : 1,
                                                }}>
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* CTA Buttons */}
                                <CTAButtons />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* ─── Scroll Indicator ─────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    aria-hidden="true"
                    style={{
                        position: 'absolute', bottom: 36, left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                    }}
                >
                    <span style={{
                        fontSize: 9, fontWeight: 600, letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: 'rgba(11,37,69,0.30)',
                        fontFamily: 'Inter, sans-serif',
                    }}>
                        Scroll
                    </span>
                    <div style={{
                        width: 24, height: 40,
                        borderRadius: 100,
                        border: '1.5px solid rgba(11,37,69,0.14)',
                        background: 'rgba(255,255,255,0.55)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        animation: 'scroll-bounce 2.4s ease-in-out infinite',
                    }}>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                            style={{
                                width: 6, height: 6, borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                            }}
                        />
                    </div>
                </motion.div>
            </section>
        </>
    )
}
