

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
// } from 'lucide-react'
// import { useRef } from 'react'

// // ─── Animation Variants ──────────────────────────────────────────────
// const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
// }

// const fadeInScale = {
//     initial: { opacity: 0, scale: 0.92 },
//     animate: { opacity: 1, scale: 1 },
//     transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
// }

// const fadeInLeft = {
//     initial: { opacity: 0, x: -40 },
//     animate: { opacity: 1, x: 0 },
//     transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
// }

// const fadeInRight = {
//     initial: { opacity: 0, x: 40 },
//     animate: { opacity: 1, x: 0 },
//     transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
// }

// const staggerContainer = {
//     animate: {
//         transition: {
//             staggerChildren: 0.1,
//             delayChildren: 0.2,
//         },
//     },
// }

// // ─── Component ──────────────────────────────────────────────────────
// export function HeroSection() {
//     const containerRef = useRef<HTMLElement>(null)
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ['start start', 'end start'],
//     })

//     const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])
//     const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97])

//     return (
//         <section
//             id="home"
//             ref={containerRef}
//             className="relative min-h-screen overflow-hidden bg-[#F8F9FA]"
//             style={{ opacity, scale }}
//         >
//             {/* ─── Background ──────────────────────────────────────────── */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {/* Primary gradient orbs – now in green tones */}
//                 <motion.div
//                     animate={{
//                         x: ['0%', '8%', '0%'],
//                         y: ['0%', '-6%', '0%'],
//                     }}
//                     transition={{
//                         duration: 22,
//                         repeat: Infinity,
//                         ease: 'easeInOut',
//                     }}
//                     className="absolute -top-[30%] -right-[20%] w-[800px] h-[800px] bg-gradient-to-br from-[#0F7A5A]/20 via-[#1A8C6A]/10 to-transparent rounded-full blur-3xl"
//                 />
//                 <motion.div
//                     animate={{
//                         x: ['0%', '-8%', '0%'],
//                         y: ['0%', '6%', '0%'],
//                     }}
//                     transition={{
//                         duration: 26,
//                         repeat: Infinity,
//                         ease: 'easeInOut',
//                     }}
//                     className="absolute -bottom-[30%] -left-[20%] w-[900px] h-[900px] bg-gradient-to-tl from-[#0F7A5A]/10 via-[#1A8C6A]/10 to-transparent rounded-full blur-3xl"
//                 />
//                 <motion.div
//                     animate={{
//                         x: ['0%', '4%', '0%'],
//                         y: ['0%', '4%', '0%'],
//                     }}
//                     transition={{
//                         duration: 18,
//                         repeat: Infinity,
//                         ease: 'easeInOut',
//                     }}
//                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0F7A5A]/5 rounded-full blur-3xl"
//                 />

//                 {/* Subtle grid */}
//                 <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0B2545_1px,transparent_1px)] [background-size:40px_40px]" />

//                 {/* Top-right accent lines – now green */}
//                 <div className="absolute top-0 right-0 w-[320px] h-[2px] bg-gradient-to-l from-[#0F7A5A]/60 via-[#0F7A5A]/20 to-transparent" />
//                 <div className="absolute top-0 right-0 w-[2px] h-[320px] bg-gradient-to-b from-[#0F7A5A]/60 via-[#0F7A5A]/20 to-transparent" />

//                 {/* Bottom-left accent lines */}
//                 <div className="absolute bottom-0 left-0 w-[240px] h-[1.5px] bg-gradient-to-r from-[#0F7A5A]/40 via-[#0F7A5A]/10 to-transparent" />
//                 <div className="absolute bottom-0 left-0 w-[1.5px] h-[240px] bg-gradient-to-t from-[#0F7A5A]/40 via-[#0F7A5A]/10 to-transparent" />
//             </div>

//             {/* ─── Main Content ────────────────────────────────────────── */}
//             <div className="relative z-10 min-h-screen flex items-center justify-center">
//                 <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
//                     <motion.div
//                         initial="initial"
//                         animate="animate"
//                         variants={staggerContainer}
//                         className="grid lg:grid-cols-2 gap-14 lg:gap-20 xl:gap-28 items-center"
//                     >
//                         {/* ─── LEFT COLUMN ────────────────────────────── */}
//                         <motion.div
//                             variants={staggerContainer}
//                             className="flex flex-col gap-10"
//                         >
//                             {/* Profile Image */}
//                             <motion.div
//                                 variants={fadeInScale}
// className="relative group w-full max-w-md mx-auto lg:mx-0 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12"                            >
//                                 {/* Outer glow ring – green */}
//                                 <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#0F7A5A]/30 via-[#0F7A5A]/10 to-transparent blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />

//                                 {/* Green frame */}
//                                 <div className="relative rounded-2xl overflow-hidden border-2 border-[#0F7A5A]/30 bg-white shadow-2xl shadow-[#0B2545]/10 transition-shadow duration-500 group-hover:shadow-[#0B2545]/20 ">
//                                     <div className="absolute inset-0 rounded-2xl ring-1 ring-[#0F7A5A]/20 ring-inset pointer-events-none" />

//                                     {/* Image */}
//                                     <motion.img
//                                         src="/images/profile.jpg"
//                                         alt="Dr. Baburam Timsina"
//                                         className="w-full h-full object-cover"
//                                         whileHover={{ scale: 1.02 }}
//                                         transition={{ duration: 0.7 }}
//                                     />

//                                     {/* Gradient overlay */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/15 via-transparent to-[#0F7A5A]/5 pointer-events-none" />

//                                     {/* Corner accents – green */}
//                                     <div className="absolute top-4 left-4 w-14 h-14 border-l-2 border-t-2 border-[#0F7A5A]/40 rounded-tl-2xl pointer-events-none" />
//                                     <div className="absolute bottom-4 right-4 w-14 h-14 border-r-2 border-b-2 border-[#0F7A5A]/40 rounded-br-2xl pointer-events-none" />

//                                     {/* Green badge */}
//                                     <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-[#0B2545]/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full border border-[#0F7A5A]/30 shadow-lg">
//                                         <Award className="w-3.5 h-3.5 text-[#0F7A5A]" />
//                                         <span className="text-[11px] font-medium tracking-wide uppercase">
//                                             Academic Leader
//                                         </span>
//                                     </div>
//                                 </div>
//                             </motion.div>

//                             {/* Name & Titles */}
//                             <motion.div
//                                 variants={fadeInUp}
//                                 className="space-y-4 text-center lg:text-left"
//                             >
//                                 <motion.h1
//                                     className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
//                                     initial={{ opacity: 0, y: 10 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.9, delay: 0.15 }}
//                                 >
//                                     <span className="font-serif text-[#0B2545]">
//                                         Dr. Baburam
//                                     </span>
//                                     <br />
//                                     <span className="font-serif bg-gradient-to-r from-[#0F7A5A] via-[#1A8C6A] to-[#0F7A5A] bg-clip-text text-transparent">
//                                         Timsina
//                                     </span>
//                                 </motion.h1>

//                                 <motion.div
//                                     variants={fadeInUp}
//                                     className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5"
//                                 >
//                                     <span className="text-base sm:text-lg text-[#4A5A6A] font-medium tracking-wide">
//                                         Professor
//                                     </span>
//                                     <span className="hidden sm:inline w-1 h-1 rounded-full bg-[#0F7A5A]/50" />
//                                     <span className="text-base sm:text-lg text-[#4A5A6A] font-medium tracking-wide">
//                                         Director
//                                     </span>
//                                     <span className="hidden sm:inline w-1 h-1 rounded-full bg-[#0F7A5A]/50" />
//                                     <span className="text-base sm:text-lg text-[#4A5A6A] font-medium tracking-wide">
//                                         Head of Department
//                                     </span>
//                                 </motion.div>

//                                 <motion.p
//                                     variants={fadeInUp}
//                                     className="text-sm text-[#4A5A6A]/60 flex items-center justify-center lg:justify-start gap-2"
//                                 >
//                                     <MapPin className="w-4 h-4 text-[#0F7A5A]/60" />
//                                     <span>Teacher Educator &amp; Academic Leader</span>
//                                 </motion.p>

//                                 {/* Divider with green accent */}
//                                 <div className="flex items-center justify-center lg:justify-start gap-4 pt-1">
//                                     <div className="h-px w-12 bg-gradient-to-r from-[#0F7A5A]/60 to-transparent" />
//                                     <div className="h-1.5 w-1.5 rounded-full bg-[#0F7A5A]" />
//                                     <div className="h-px w-12 bg-gradient-to-l from-[#0F7A5A]/60 to-transparent" />
//                                 </div>
//                             </motion.div>

//                             {/* Academic Profile Cards */}
//                             <motion.div
//                                 variants={fadeInUp}
//                                 className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2"
//                             >
//                                 {[
//                                     {
//                                         name: 'Google Scholar',
//                                         href: 'https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ',
//                                         icon: GraduationCap,
//                                         badgeColor: 'from-[#4285F4] to-[#34A853]',
//                                         cardBg: 'bg-white/80',
//                                         textColor: 'text-[#0B2545]',
//                                         accentColor: 'border-[#4285F4]/30',
//                                         stats: [
//                                             { value: '1,847', label: 'Citations' },
//                                             { value: '24', label: 'H-index' },
//                                         ],
//                                     },
//                                     {
//                                         name: 'ResearchGate',
//                                         href: 'https://www.researchgate.net/profile/Baburam-Timsina-3',
//                                         icon: BookOpen,
//                                         badgeColor: 'from-[#00D4AA] to-[#00B894]',
//                                         cardBg: 'bg-white/80',
//                                         textColor: 'text-[#0B2545]',
//                                         accentColor: 'border-[#00D4AA]/30',
//                                         stats: [
//                                             { value: '32', label: 'RI Score' },
//                                             { value: '1,203', label: 'Citations' },
//                                         ],
//                                     },
//                                 ].map((profile) => (
//                                     <motion.a
//                                         key={profile.name}
//                                         href={profile.href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         variants={fadeInUp}
//                                         whileHover={{ y: -4, scale: 1.01 }}
//                                         transition={{ duration: 0.3 }}
//                                         className={`group relative flex flex-col gap-4 rounded-2xl border ${profile.accentColor} ${profile.cardBg} p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#0B2545]/10 hover:border-[#0F7A5A]/40`}
//                                     >
//                                         {/* Top section: badge + name */}
//                                         <div className="flex items-center gap-3">
//                                             <span
//                                                 className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${profile.badgeColor} text-sm font-bold text-white shadow-md`}
//                                             >
//                                                 <profile.icon className="w-4 h-4" />
//                                             </span>
//                                             <span className={`text-sm font-semibold ${profile.textColor}`}>
//                                                 {profile.name}
//                                             </span>
//                                             <ExternalLink className="w-3.5 h-3.5 ml-auto text-[#4A5A6A]/30 group-hover:text-[#0F7A5A] transition-colors duration-300" />
//                                         </div>

//                                         {/* Stats */}
//                                         <div className="grid grid-cols-2 gap-3">
//                                             {profile.stats.map((stat) => (
//                                                 <div
//                                                     key={stat.label}
//                                                     className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-[#F8F9FA]/80 py-3.5 px-2 shadow-sm border border-[#E8ECF0]/50 transition-colors duration-300 group-hover:border-[#0F7A5A]/20"
//                                                 >
//                                                     <span className={`text-lg font-bold ${profile.textColor}`}>
//                                                         {stat.value}
//                                                     </span>
//                                                     <span className="text-[10px] uppercase tracking-wider text-[#4A5A6A]/50 font-medium">
//                                                         {stat.label}
//                                                     </span>
//                                                 </div>
//                                             ))}
//                                         </div>

//                                         {/* Subtle green accent line on hover */}
//                                         <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#0F7A5A]/0 via-[#0F7A5A]/0 to-[#0F7A5A]/0 rounded-full transition-all duration-500 group-hover:via-[#0F7A5A]/40" />
//                                     </motion.a>
//                                 ))}
//                             </motion.div>
//                         </motion.div>

//                         {/* ─── RIGHT COLUMN ────────────────────────────── */}
//                         <motion.div
//                             variants={staggerContainer}
//                             className="flex flex-col gap-10 lg:pl-4"
//                         >
//                             {/* Quote Card */}
//                             <motion.div
//                                 variants={fadeInRight}
//                                 className="relative p-8 md:p-10 rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 shadow-xl shadow-[#0B2545]/8 hover:shadow-[#0B2545]/15 transition-shadow duration-500"
//                             >
//                                 {/* Green accent border left */}
//                                 <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[#0F7A5A]/60 via-[#0F7A5A]/30 to-transparent rounded-full" />

//                                 {/* Quote mark */}
//                                 <div className="absolute -top-3 -left-2 text-7xl font-serif leading-none text-[#0F7A5A]/15">
//                                     <Quote className="w-11 h-11 text-[#0F7A5A]/20" />
//                                 </div>

//                                 <motion.blockquote
//                                     variants={fadeInUp}
//                                     className="space-y-5 relative z-10 pl-4"
//                                 >
//                                     <p className="text-xl sm:text-2xl lg:text-3xl font-serif leading-[1.5] text-[#0B2545]/85 italic font-light tracking-wide">
//                                         &ldquo;I will open rivers in high places, and fountains in the midst of the valleys: I will make the wilderness a pool of water, and the dry land springs of water.&rdquo;
//                                     </p>
//                                     <div className="flex items-center gap-3">
//                                         <div className="h-px flex-1 bg-gradient-to-r from-[#0F7A5A]/40 to-transparent" />
//                                         <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#0F7A5A]/60">
//                                             — Isaiah 41:18
//                                         </span>
//                                     </div>
//                                 </motion.blockquote>
//                             </motion.div>

//                             {/* About Teaser */}
//                             <motion.div
//                                 variants={fadeInRight}
//                                 className="relative p-6 rounded-xl bg-[#0B2545]/[0.03] border border-[#0B2545]/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#0B2545]/[0.05] hover:border-[#0F7A5A]/20"
//                             >
//                                 <div className="flex items-center gap-3 mb-3">
//                                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F7A5A]/10 border border-[#0F7A5A]/20">
//                                         <BookOpen className="w-3.5 h-3.5 text-[#0F7A5A]" />
//                                     </div>
//                                     <span className="text-[10px] font-medium text-[#0B2545]/50 uppercase tracking-[0.2em]">
//                                         About
//                                     </span>
//                                 </div>

//                                 <div className="border-l-2 border-[#0F7A5A]/30 pl-4">
//                                     <p className="text-[#4A5A6A]/80 leading-relaxed text-sm sm:text-base font-light">
//                                         With a deep commitment to
//                                         <span className="font-semibold text-[#0B2545]"> academic excellence </span>
//                                         and institutional leadership, I have dedicated my career to advancing
//                                         education, mentoring future educators, and fostering transformative
//                                         learning environments.
//                                     </p>
//                                 </div>

//                                 <motion.a
//                                     href="#about"
//                                     className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-[#0B2545]/60 hover:text-[#0F7A5A] transition-colors duration-300 group"
//                                     whileHover={{ x: 4 }}
//                                 >
//                                     Learn more
//                                     <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform duration-300" />
//                                 </motion.a>
//                             </motion.div>

//                             {/* Quick stats */}
//                             <motion.div
//                                 variants={fadeInRight}
//                                 className="grid grid-cols-3 gap-3"
//                             >
//                                 {[
//                                     { value: '20+', label: 'Years Experience' },
//                                     { value: '50+', label: 'Publications' },
//                                     { value: '15+', label: 'Awards' },
//                                 ].map((stat, i) => (
//                                     <motion.div
//                                         key={i}
//                                         variants={fadeInUp}
//                                         className="text-center p-4 rounded-xl bg-white/50 border border-white/60 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#0F7A5A]/20"
//                                     >
//                                         <div className="text-xl font-bold text-[#0B2545] font-serif">
//                                             {stat.value}
//                                         </div>
//                                         <div className="text-[10px] uppercase tracking-wider text-[#4A5A6A]/50 font-medium mt-0.5">
//                                             {stat.label}
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>
//                         </motion.div>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* ─── Scroll Indicator ────────────────────────────────────── */}
//             <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.4, duration: 0.8 }}
//                 className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2.5"
//             >
//                 <span className="text-[9px] uppercase tracking-[0.25em] text-[#0B2545]/30 font-medium">
//                     Scroll
//                 </span>
//                 <motion.div
//                     animate={{ y: [0, 8, 0] }}
//                     transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
//                     className="relative flex h-10 w-6 items-center justify-center rounded-full border border-[#0B2545]/15 bg-white/40 backdrop-blur-sm shadow-sm"
//                 >
//                     <motion.div
//                         animate={{ y: [0, 4, 0] }}
//                         transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
//                         className="h-1.5 w-1.5 rounded-full bg-[#0F7A5A]"
//                     />
//                 </motion.div>
//             </motion.div>
//         </section>
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
            --gold:       #D4AF37;
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
                <span className="font-display" style={{ fontSize: 22, fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>50+</span>
                <span style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>Papers</span>
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
                                    {/* Section label */}
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
                                    }}>
                                        <div style={{
                                            width: 32, height: 32, borderRadius: 10,
                                            background: 'rgba(212,175,55,0.10)',
                                            border: '1px solid rgba(212,175,55,0.22)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <BookOpen style={{ width: 14, height: 14, color: 'var(--gold)' }} />
                                        </div>
                                        <span style={{
                                            fontSize: 10.5, fontWeight: 700,
                                            letterSpacing: '0.20em', textTransform: 'uppercase',
                                            color: 'rgba(11,37,69,0.45)',
                                            fontFamily: 'Inter, sans-serif',
                                        }}>
                                            About
                                        </span>
                                    </div>

                                    <div style={{
                                        borderLeft: '2.5px solid rgba(212,175,55,0.40)',
                                        paddingLeft: 16,
                                    }}>
                                        <p style={{
                                            fontSize: 'clamp(13.5px, 1.5vw, 15px)',
                                            lineHeight: 1.75,
                                            color: 'var(--gray-600)',
                                            margin: 0,
                                            fontWeight: 300,
                                            fontFamily: 'Inter, sans-serif',
                                        }}>
                                            With a deep commitment to{' '}
                                            <strong style={{ fontWeight: 600, color: 'var(--navy)' }}>
                                                academic excellence
                                            </strong>
                                            {' '}and institutional leadership, I have dedicated my career to advancing
                                            education, mentoring future educators, and fostering transformative
                                            learning environments.
                                        </p>
                                    </div>

                                    <motion.a
                                        href="#about"
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.25 }}
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: 6,
                                            marginTop: 18,
                                            fontSize: 12.5, fontWeight: 600,
                                            color: 'var(--navy)',
                                            textDecoration: 'none',
                                            fontFamily: 'Inter, sans-serif',
                                            letterSpacing: '0.03em',
                                            opacity: 0.65,
                                            transition: 'opacity 0.25s',
                                        }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.65' }}
                                    >
                                        Learn more
                                        <ArrowDown style={{ width: 13, height: 13 }} />
                                    </motion.a>
                                </motion.div>

                                {/* Stats row */}
                                <motion.div
                                    variants={fadeInRight}
                                    style={{
                                        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
                                    }}
                                >
                                    {[
                                        { value: '20+', label: 'Years Experience', gold: false },
                                        { value: '50+', label: 'Publications',     gold: true  },
                                        { value: '15+', label: 'Awards & Honors',  gold: false },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            className="gold-shimmer"
                                            whileHover={{ y: -3 }}
                                            transition={{ duration: 0.28 }}
                                            style={{
                                                textAlign: 'center',
                                                padding: '16px 8px',
                                                borderRadius: 16,
                                                background: stat.gold
                                                    ? 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)'
                                                    : '#FFFFFF',
                                                border: `1.5px solid ${stat.gold ? 'rgba(212,175,55,0.22)' : 'rgba(11,37,69,0.08)'}`,
                                                boxShadow: stat.gold
                                                    ? '0 8px 28px rgba(11,37,69,0.22)'
                                                    : '0 2px 10px rgba(11,37,69,0.06)',
                                                cursor: 'default',
                                            }}
                                        >
                                            <div
                                                className="font-display"
                                                style={{
                                                    fontSize: 22, fontWeight: 700, lineHeight: 1,
                                                    color: stat.gold ? 'var(--gold)' : 'var(--navy)',
                                                }}
                                            >
                                                {stat.value}
                                            </div>
                                            <div style={{
                                                fontSize: 9.5, fontWeight: 600,
                                                letterSpacing: '0.10em', textTransform: 'uppercase',
                                                color: stat.gold ? 'rgba(255,255,255,0.50)' : 'var(--gray-400)',
                                                marginTop: 6,
                                                fontFamily: 'Inter, sans-serif',
                                            }}>
                                                {stat.label}
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