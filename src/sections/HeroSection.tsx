// // // 'use client'

// // // import { motion } from 'framer-motion'
// // // import { ArrowDown, Code2, Dot, Mail, Share2 } from 'lucide-react'

// // // const fadeInUp = {
// // //   initial: { opacity: 0, y: 20 },
// // //   animate: { opacity: 1, y: 0 },
// // //   transition: { duration: 0.6 },
// // // }

// // // const staggerContainer = {
// // //   animate: {
// // //     transition: {
// // //       staggerChildren: 0.1,
// // //       delayChildren: 0.2,
// // //     },
// // //   },
// // // }

// // // export function HeroSection() {
// // //   return (
// // //     <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-background">
// // //       {/* Animated gradient background elements */}
// // //       <div className="absolute inset-0 overflow-hidden">
// // //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-40 animate-pulse" />
// // //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse" />
// // //       </div>

// // //       {/* Content */}
// // //       <div className="relative z-10 min-h-screen flex items-center justify-center">
// // //         <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
// // //           <motion.div
// // //             initial="initial"
// // //             animate="animate"
// // //             variants={staggerContainer}
// // //             className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
// // //           >
// // //             {/* LEFT SIDE - Profile Image & Info */}
// // //             <motion.div variants={fadeInUp} className="flex flex-col gap-8">
// // //               {/* Profile Image Container */}
// // //               <div className="relative group">
// // //                 <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
// // //                 <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted/50 border border-border/50 backdrop-blur-sm">
// // //                   <motion.img
// // //                     src="/images/profile.jpg"
// // //                     alt="Professor"
// // //                     className="w-full h-full object-cover"
// // //                     initial={{ scale: 1.05 }}
// // //                     animate={{ scale: 1 }}
// // //                     transition={{ duration: 0.8 }}
// // //                   />
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
// // //                 </div>
// // //               </div>

// // //               {/* Name & Title */}
// // //               <motion.div variants={fadeInUp} className="space-y-4">
// // //                 <div>
// // //                   <motion.h1
// // //                     className="text-xl md:text-xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
// // //                     initial={{ opacity: 0, y: 10 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ duration: 0.8, delay: 0.1 }}
// // //                   >
// // //                     Dr. Baburam Timsina
// // //                   </motion.h1>
// // //                 </div>

// // //                 <motion.p
// // //                   className="text-lg md:text-xl text-muted-foreground font-medium"
// // //                   variants={fadeInUp}
// // //                 >
// // //                   Professor, Director, Head of Department,
// // //                   <br />
// // //                   and Teacher Educator
// // //                 </motion.p>
// // //               </motion.div>

// // //               {/* Social Links */}
// // //               <motion.div
// // //                 variants={fadeInUp}
// // //                 className="flex gap-4 pt-4"
// // //               >
// // //                 {[
// // //                   { icon: Dot, label: 'LinkedIn', href: '#' },
// // //                   { icon: Code2, label: 'GitHub', href: '#' },
// // //                   { icon: Share2, label: 'Twitter', href: '#' },
// // //                   { icon: Mail, label: 'Email', href: '#' },
// // //                 ].map((social, i) => (
// // //                   <motion.a
// // //                     key={i}
// // //                     href={social.href}
// // //                     className="p-3 rounded-lg bg-muted/50 hover:bg-accent/50 border border-border/50 text-muted-foreground hover:text-accent-foreground transition-all duration-300 backdrop-blur-sm group"
// // //                     whileHover={{ scale: 1.1, y: -2 }}
// // //                     whileTap={{ scale: 0.95 }}
// // //                   >
// // //                     <social.icon className="w-5 h-5" />
// // //                   </motion.a>
// // //                 ))}
// // //               </motion.div>
// // //             </motion.div>

// // //             {/* RIGHT SIDE - Inspirational Quote */}
// // //             <motion.div
// // //               variants={fadeInUp}
// // //               className="flex flex-col justify-center gap-12"
// // //             >
// // //               {/* Main Quote */}
// // //               <div className="space-y-8">
// // //                 <motion.blockquote
// // //                   className="space-y-6"
// // //                   variants={fadeInUp}
// // //                 >
// // //                   <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-relaxed text-foreground italic font-light tracking-tight">
// // //                     &ldquo;I will open rivers in high places, and fountains in the midst of the valleys: I will make the wilderness a pool of water, and the dry land springs of water&rdquo;
// // //                   </p>
                  
// // //                 </motion.blockquote>

// // //                 {/* Decorative line */}
// // //                 <motion.div
// // //                   className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
// // //                   initial={{ width: 0 }}
// // //                   animate={{ width: 64 }}
// // //                   transition={{ duration: 0.8, delay: 0.6 }}
// // //                 />
// // //               </div>

// // //               {/* About Summary */}
// // //               {/* <motion.div
// // //                 variants={fadeInUp}
// // //                 className="p-6 rounded-xl bg-muted/30 border border-border/50 backdrop-blur-sm hover:bg-muted/50 transition-all duration-300"
// // //               >
// // //                 <p className="text-muted-foreground leading-relaxed">
// // //                   With a passion for education and institutional leadership, I have dedicated my career to advancing academic excellence and fostering transformative learning experiences. My approach combines rigorous scholarship with practical wisdom.
// // //                 </p>
// // //               </motion.div> */}
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* Scroll Indicator */}
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ delay: 1.2, duration: 0.8 }}
// // //             className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
// // //           >
// // //             <p className="text-xs uppercase tracking-widest text-muted-foreground">
// // //               Scroll
// // //             </p>
// // //             <motion.div
// // //               animate={{ y: [0, 8, 0] }}
// // //               transition={{ duration: 2, repeat: Infinity }}
// // //               className="p-2 rounded-lg bg-muted/30 border border-border/50 backdrop-blur-sm"
// // //             >
// // //               <ArrowDown className="h-4 w-4 text-muted-foreground" />
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }


// // // // import { motion } from "framer-motion";
// // // // import { ArrowDown } from "lucide-react";
// // // // import { SocialLinks } from "@/components/common/SocialLinks";
// // // // import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/profile";

// // // // export function HeroSection() {
// // // //   return (
// // // //     <section
// // // //       id="home"
// // // //       className="relative min-h-screen flex items-center bg-[#f5f5f5] overflow-hidden p-16"
// // // //     >
// // // //       <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
// // // //         <div className="grid lg:grid-cols-2 gap-16 items-center">

// // // //           {/* LEFT SIDE */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: -40 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //           >
// // // //             {/* Image */}
// // // //             <div className="bg-[#dbe2e7] overflow-hidden">
// // // //               <img
// // // //                 src="/images/profile.jpg"
// // // //                 alt={SITE_CONFIG.name}
// // // //                 className="w-full h-auto object-cover"
// // // //               />
// // // //             </div>

// // // //             {/* Name & Designation */}
// // // //             <div className="pt-6">
// // // //               <h1 className="font-serif text-[#1f4567] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
// // // //                 {SITE_CONFIG.name}
// // // //               </h1>

// // // //               <p className="mt-2 text-[#1f4567] text-lg md:text-xl font-semibold">
// // // //                 A professor, director, head of department,
// // // //                 <br />
// // // //                 and teacher educator
// // // //               </p>

// // // //               <div className="mt-6">
// // // //                 <SocialLinks links={SOCIAL_LINKS} />
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* RIGHT SIDE */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: 40 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 1 }}
// // // //             className="flex flex-col justify-center"
// // // //           >
// // // //             <blockquote className="font-serif text-[#1f4567]">
// // // //               <p className="text-xl md:text-xl lg:text-[5rem] leading-[1.15] tracking-tight">
// // // //                 "I will open rivers in high places,
// // // //                 and fountains in the midst of the valleys:
// // // //                 I will make the wilderness a pool of water,
// // // //                 and the dry land springs of water"
// // // //               </p>
// // // //             </blockquote>
// // // //           </motion.div>

// // // //         </div>

// // // //         {/* Scroll Indicator */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           transition={{ delay: 1.5 }}
// // // //           className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
// // // //         >
// // // //           <motion.div
// // // //             animate={{ y: [0, 8, 0] }}
// // // //             transition={{
// // // //               duration: 1.5,
// // // //               repeat: Infinity,
// // // //             }}
// // // //           >
// // // //             <ArrowDown className="h-5 w-5 text-[#1f4567]" />
// // // //           </motion.div>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }



// // 'use client'

// // import { motion, useScroll, useTransform } from 'framer-motion'
// // import {
// //     ArrowDown,
// //     Briefcase,
// //     MapPin,
// //     Quote,
// //     // Twitter,
// // } from 'lucide-react'
// // import { useRef } from 'react'

// // const fadeInUp = {
// //     initial: { opacity: 0, y: 30 },
// //     animate: { opacity: 1, y: 0 },
// //     transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
// // }

// // const fadeInScale = {
// //     initial: { opacity: 0, scale: 0.95 },
// //     animate: { opacity: 1, scale: 1 },
// //     transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
// // }

// // const staggerContainer = {
// //     animate: {
// //         transition: {
// //             staggerChildren: 0.12,
// //             delayChildren: 0.15,
// //         },
// //     },
// // }

// // export function HeroSection() {
// //     const containerRef = useRef<HTMLElement>(null)
// //     const { scrollYProgress } = useScroll({
// //         target: containerRef,
// //         offset: ['start start', 'end start'],
// //     })

// //     const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4])
// //     const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

// //     return (
// //         <section
// //             ref={containerRef}
// //             className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-background p-16"
// //             style={{ opacity, scale }}
// //         >
// //             {/* ── Animated Background ── */}
// //             <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //                 <motion.div
// //                     animate={{
// //                         x: ['0%', '5%', '0%'],
// //                         y: ['0%', '-5%', '0%'],
// //                     }}
// //                     transition={{
// //                         duration: 20,
// //                         repeat: Infinity,
// //                         ease: 'easeInOut',
// //                     }}
// //                     className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
// //                 />
// //                 <motion.div
// //                     animate={{
// //                         x: ['0%', '-5%', '0%'],
// //                         y: ['0%', '5%', '0%'],
// //                     }}
// //                     transition={{
// //                         duration: 25,
// //                         repeat: Infinity,
// //                         ease: 'easeInOut',
// //                     }}
// //                     className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
// //                 />
// //                 <motion.div
// //                     animate={{
// //                         x: ['0%', '3%', '0%'],
// //                         y: ['0%', '3%', '0%'],
// //                     }}
// //                     transition={{
// //                         duration: 18,
// //                         repeat: Infinity,
// //                         ease: 'easeInOut',
// //                     }}
// //                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
// //                 />
// //             </div>

// //             {/* ── Subtle Grid Overlay ── */}
// //             <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

// //             {/* ── Main Content ── */}
// //             <div className="relative z-10 min-h-screen flex items-center justify-center">
// //                 <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
// //                     <motion.div
// //                         initial="initial"
// //                         animate="animate"
// //                         variants={staggerContainer}
// //                         className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center"
// //                     >
// //                         {/* ── LEFT COLUMN ── */}
// //                         <motion.div
// //                             variants={staggerContainer}
// //                             className="flex flex-col gap-8"
// //                         >
// //                             {/* Profile Image */}
// //                             <motion.div
// //                                 variants={fadeInScale}
// //                                 className="relative group w-full max-w-md mx-auto lg:mx-0"
// //                             >
// //                                 <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700" />
// //                                 <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted/30 border border-white/10 backdrop-blur-sm shadow-2xl shadow-primary/5">
// //                                     <motion.img
// //                                         src="/images/profile.jpg"
// //                                         alt="Dr. Baburam Timsina"
// //                                         className="w-full h-full object-cover"
// //                                         whileHover={{ scale: 1.02 }}
// //                                         transition={{ duration: 0.6 }}
// //                                     />
// //                                     <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
// //                                     <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/20 rounded-br-2xl pointer-events-none" />
// //                                     <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl pointer-events-none" />
// //                                 </div>
// //                             </motion.div>

// //                             {/* Name & Titles */}
// //                             <motion.div
// //                                 variants={fadeInUp}
// //                                 className="space-y-3 text-center lg:text-left"
// //                             >
// //                                 <motion.h1
// //                                     className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
// //                                     initial={{ opacity: 0, y: 10 }}
// //                                     animate={{ opacity: 1, y: 0 }}
// //                                     transition={{ duration: 0.8, delay: 0.15 }}
// //                                 >
// //                                     <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary/80 bg-clip-text text-transparent">
// //                                         Dr. Baburam
// //                                     </span>
// //                                     <br />
// //                                     <span className="bg-gradient-to-r from-primary/80 via-accent to-primary/80 bg-clip-text text-transparent">
// //                                         Timsina
// //                                     </span>
// //                                 </motion.h1>

// //                                 <motion.div
// //                                     variants={fadeInUp}
// //                                     className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5"
// //                                 >
// //                                     <span className="text-lg sm:text-xl text-muted-foreground font-medium">
// //                                         Professor
// //                                     </span>
// //                                     <span className="hidden sm:inline text-muted-foreground/30">•</span>
// //                                     <span className="text-lg sm:text-xl text-muted-foreground font-medium">
// //                                         Director
// //                                     </span>
// //                                     <span className="hidden sm:inline text-muted-foreground/30">•</span>
// //                                     <span className="text-lg sm:text-xl text-muted-foreground font-medium">
// //                                         Head of Department
// //                                     </span>
// //                                 </motion.div>

// //                                 <motion.p
// //                                     variants={fadeInUp}
// //                                     className="text-base text-muted-foreground/70 flex items-center justify-center lg:justify-start gap-2"
// //                                 >
// //                                     <MapPin className="w-4 h-4" />
// //                                     <span>Teacher Educator &amp; Academic Leader</span>
// //                                 </motion.p>
// //                             </motion.div>

// //                             {/* Stats */}
// //                             <motion.div
// //                                 variants={fadeInUp}
// //                                 className="flex flex-wrap items-center gap-6 pt-2 text-center lg:text-left"
// //                             >
// //                                 {[
// //                                     // { value: '20+', label: 'Years of Service' },
// //                                     // { value: '50+', label: 'Research Papers' },
// //                                     // { value: '1000+', label: 'Students Mentored' },
// //                                      { label: "Research Papers", value: "45+" },
// //     { label: "Citations", value: "1,200+" },
// //     { label: "Years Experience", value: "15+" },
// //                                 ].map((stat, i) => (
// //                                     <div key={i} className="flex items-center gap-3">
// //                                         <div className="flex flex-col">
// //                                             <span className="text-xl font-bold text-foreground">
// //                                                 {stat.value}
// //                                             </span>
// //                                             <span className="text-xs text-muted-foreground/60">
// //                                                 {stat.label}
// //                                             </span>
// //                                         </div>
// //                                         {i < 2 && (
// //                                             <span className="text-muted-foreground/20 text-2xl font-thin">
// //                                                 |
// //                                             </span>
// //                                         )}
// //                                     </div>
// //                                 ))}
// //                             </motion.div>
// //                         </motion.div>

// //                         {/* ── RIGHT COLUMN ── */}
// //                         <motion.div
// //                             variants={staggerContainer}
// //                             className="flex flex-col gap-8 lg:pl-4"
// //                         >
// //                             {/* Quote Card */}
// //                             <motion.div
// //                                 variants={fadeInUp}
// //                                 className="relative p-8 md:p-10 rounded-2xl bg-background/40 backdrop-blur-md border border-border/30 shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-shadow duration-500"
// //                             >
// //                                 <div className="absolute -top-3 -left-3 text-6xl text-primary/10 font-serif leading-none">
// //                                     <Quote className="w-10 h-10 text-primary/20" />
// //                                 </div>

// //                                 <motion.blockquote
// //                                     variants={fadeInUp}
// //                                     className="space-y-6 relative z-10"
// //                                 >
// //                                     <p className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-[1.4] text-foreground/90 italic font-light tracking-wide">
// //                                         &ldquo;I will open rivers in high places, and fountains in the midst of the valleys: I will make the wilderness a pool of water, and the dry land springs of water.&rdquo;
// //                                     </p>

                                        
// //                                 </motion.blockquote>
// //                             </motion.div>

// //                             {/* About Teaser */}
// //                             <motion.div
// //                                 variants={fadeInUp}
// //                                 className="space-y-4 p-6 rounded-xl bg-muted/20 border border-border/20 backdrop-blur-sm"
// //                             >
// //                                 <div className="flex items-center gap-3">
// //                                     <Briefcase className="w-5 h-5 text-primary/60" />
// //                                     <span className="text-sm font-medium text-muted-foreground/80 uppercase tracking-wider">
// //                                         About
// //                                     </span>
// //                                 </div>
// //                                 <p className="text-muted-foreground/80 leading-relaxed text-sm sm:text-base">
// //                                     With a deep commitment to academic excellence and institutional leadership,
// //                                     I have dedicated my career to advancing education, mentoring future
// //                                     educators, and fostering transformative learning environments.
// //                                 </p>
// //                                 <motion.a
// //                                     href="#about"
// //                                     className="inline-flex items-center gap-2 text-sm font-medium text-primary/80 hover:text-primary transition-colors duration-300 group"
// //                                     whileHover={{ x: 4 }}
// //                                 >
// //                                     Learn more
// //                                     <ArrowDown className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
// //                                 </motion.a>
// //                             </motion.div>
// //                         </motion.div>
// //                     </motion.div>
// //                 </div>
// //             </div>

// //             {/* ── Scroll Indicator ── */}
// //             <motion.div
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ delay: 1.2, duration: 0.8 }}
// //                 className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
// //             >
// //                 <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-medium">
// //                     Scroll
// //                 </span>
// //                 <motion.div
// //                     animate={{ y: [0, 6, 0] }}
// //                     transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
// //                     className="p-2 rounded-full bg-background/40 backdrop-blur-sm border border-border/30"
// //                 >
// //                     <ArrowDown className="w-3.5 h-3.5 text-muted-foreground/40" />
// //                 </motion.div>
// //             </motion.div>
// //         </section>
// //     )
// // }



// 'use client'

// import { motion, useScroll, useTransform } from 'framer-motion'
// import {
//     ArrowDown,
//     Briefcase,
//     Mail,
//     MapPin,
//     Quote,
// } from 'lucide-react'
// import { FaLinkedin } from "react-icons/fa";
// import { useRef } from 'react'

// const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
// }

// const fadeInScale = {
//     initial: { opacity: 0, scale: 0.95 },
//     animate: { opacity: 1, scale: 1 },
//     transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
// }

// const staggerContainer = {
//     animate: {
//         transition: {
//             staggerChildren: 0.12,
//             delayChildren: 0.15,
//         },
//     },
// }

// export function HeroSection() {
//     const containerRef = useRef<HTMLElement>(null)
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ['start start', 'end start'],
//     })

//     const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4])
//     const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

//     return (
//         <section
//             ref={containerRef}
//             className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-background p-16"
//             style={{ opacity, scale }}
//         >
//             {/* ── Animated Background ── */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <motion.div
//                     animate={{
//                         x: ['0%', '5%', '0%'],
//                         y: ['0%', '-5%', '0%'],
//                     }}
//                     transition={{
//                         duration: 20,
//                         repeat: Infinity,
//                         ease: 'easeInOut',
//                     }}
//                     className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
//                 />
//                 <motion.div
//                     animate={{
//                         x: ['0%', '-5%', '0%'],
//                         y: ['0%', '5%', '0%'],
//                     }}
//                     transition={{
//                         duration: 25,
//                         repeat: Infinity,
//                         ease: 'easeInOut',
//                     }}
//                     className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
//                 />
//                 <motion.div
//                     animate={{
//                         x: ['0%', '3%', '0%'],
//                         y: ['0%', '3%', '0%'],
//                     }}
//                     transition={{
//                         duration: 18,
//                         repeat: Infinity,
//                         ease: 'easeInOut',
//                     }}
//                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
//                 />
//             </div>

//             {/* ── Subtle Grid Overlay ── */}
//             <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

//             {/* ── Main Content ── */}
//             <div className="relative z-10 min-h-screen flex items-center justify-center">
//                 <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
//                     <motion.div
//                         initial="initial"
//                         animate="animate"
//                         variants={staggerContainer}
//                         className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center"
//                     >
//                         {/* ── LEFT COLUMN ── */}
//                         <motion.div
//                             variants={staggerContainer}
//                             className="flex flex-col gap-8"
//                         >
//                             {/* Profile Image */}
//                             <motion.div
//                                 variants={fadeInScale}
//                                 className="relative group w-full max-w-md mx-auto lg:mx-0"
//                             >
//                                 <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700" />
//                                 <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted/30 border border-white/10 backdrop-blur-sm shadow-2xl shadow-primary/5">
//                                     <motion.img
//                                         src="/images/profile.jpg"
//                                         alt="Dr. Baburam Timsina"
//                                         className="w-full h-full object-cover"
//                                         whileHover={{ scale: 1.02 }}
//                                         transition={{ duration: 0.6 }}
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
//                                     <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/20 rounded-br-2xl pointer-events-none" />
//                                     <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl pointer-events-none" />
//                                 </div>
//                             </motion.div>

//                             {/* Name & Titles */}
//                             <motion.div
//                                 variants={fadeInUp}
//                                 className="space-y-3 text-center lg:text-left"
//                             >
//                                 <motion.h1
//                                     className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
//                                     initial={{ opacity: 0, y: 10 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.8, delay: 0.15 }}
//                                 >
//                                     <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary/80 bg-clip-text text-transparent">
//                                         Dr. Baburam
//                                     </span>
//                                     <br />
//                                     <span className="bg-gradient-to-r from-primary/80 via-accent to-primary/80 bg-clip-text text-transparent">
//                                         Timsina
//                                     </span>
//                                 </motion.h1>

//                                 <motion.div
//                                     variants={fadeInUp}
//                                     className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5"
//                                 >
//                                     <span className="text-lg sm:text-xl text-muted-foreground font-medium">
//                                         Professor
//                                     </span>
//                                     <span className="hidden sm:inline text-muted-foreground/30">•</span>
//                                     <span className="text-lg sm:text-xl text-muted-foreground font-medium">
//                                         Director
//                                     </span>
//                                     <span className="hidden sm:inline text-muted-foreground/30">•</span>
//                                     <span className="text-lg sm:text-xl text-muted-foreground font-medium">
//                                         Head of Department
//                                     </span>
//                                 </motion.div>

//                                 <motion.p
//                                     variants={fadeInUp}
//                                     className="text-base text-muted-foreground/70 flex items-center justify-center lg:justify-start gap-2"
//                                 >
//                                     <MapPin className="w-4 h-4" />
//                                     <span>Teacher Educator &amp; Academic Leader</span>
//                                 </motion.p>
//                             </motion.div>

//                             {/* Academic Profile Cards */}
//                             <motion.div
//                                 variants={fadeInUp}
//                                 className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
//                             >
//                                 {[
//                                     {
//                                         name: 'Google Scholar',
//                                         href: 'https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ',
//                                         badgeLabel: 'G',
//                                         badgeFrom: 'from-[#4355DB]',
//                                         badgeTo: 'to-[#6E7AF0]',
//                                         cardBg: 'bg-[#E6E8FB]',
//                                         cardBorder: 'border-[#C9CDF5]',
//                                         textColor: 'text-[#2A3590]',
//                                         stats: [
//                                             { value: '—', label: 'Citations' },
//                                             { value: '—', label: 'H-index' },
//                                         ],
//                                     },
//                                     {
//                                         name: 'ResearchGate',
//                                         href: 'https://www.researchgate.net/profile/Baburam-Timsina-3',
//                                         badgeLabel: 'RG',
//                                         badgeFrom: 'from-[#1FB28E]',
//                                         badgeTo: 'to-[#5FD6B4]',
//                                         cardBg: 'bg-[#D7F5EA]',
//                                         cardBorder: 'border-[#B9EBD9]',
//                                         textColor: 'text-[#0E6B53]',
//                                         stats: [
//                                             { value: '—', label: 'RI Score' },
//                                             { value: '—', label: 'Citations' },
//                                         ],
//                                     },
//                                 ].map((profile) => (
//                                     <motion.a
//                                         key={profile.name}
//                                         href={profile.href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         variants={fadeInUp}
//                                         whileHover={{ y: -3 }}
//                                         className={`group flex flex-col gap-4 rounded-2xl border ${profile.cardBorder} ${profile.cardBg} p-5 transition-shadow duration-300 hover:shadow-lg`}
//                                     >
//                                         {/* Badge + name */}
//                                         <div className="flex items-center gap-3">
//                                             <span
//                                                 className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${profile.badgeFrom} ${profile.badgeTo} text-sm font-bold text-white shadow-sm`}
//                                             >
//                                                 {profile.badgeLabel}
//                                             </span>
//                                             <span className={`text-sm font-semibold ${profile.textColor}`}>
//                                                 {profile.name}
//                                             </span>
//                                         </div>

//                                         {/* Stat pills */}
//                                         <div className="grid grid-cols-2 gap-2.5">
//                                             {profile.stats.map((stat) => (
//                                                 <div
//                                                     key={stat.label}
//                                                     className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-white/80 py-3 shadow-sm"
//                                                 >
//                                                     <span className={`text-lg font-bold ${profile.textColor}`}>
//                                                         {stat.value}
//                                                     </span>
//                                                     <span className="text-[11px] text-slate-500">
//                                                         {stat.label}
//                                                     </span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </motion.a>
//                                 ))}
//                             </motion.div>

//                             {/* Contact & Social Links */}
//                             {/* <motion.div
//                                 variants={fadeInUp}
//                                 className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1"
//                             >
//                                 {[
//                                     { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/' },
//                                     { icon: Mail, label: 'brtimsina05@gmail.com', href: 'mailto:brtimsina05@gmail.com' },
//                                     { icon: Mail, label: 'baburam.timsina@som.tu.edu.np', href: 'mailto:baburam.timsina@som.tu.edu.np' },
//                                 ].map((link) => (
//                                     <a
//                                         key={link.label}
//                                         href={link.href}
//                                         target={link.href.startsWith('http') ? '_blank' : undefined}
//                                         rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                                         className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-muted/30 px-3.5 py-2 text-xs font-medium text-muted-foreground/80 backdrop-blur-sm transition-colors duration-300 hover:bg-accent/20 hover:text-foreground"
//                                     >
//                                         <link.icon className="h-3.5 w-3.5" />
//                                         <span className="hidden sm:inline">{link.label}</span>
//                                     </a>
//                                 ))}
//                             </motion.div> */}
//                         </motion.div>

//                         {/* ── RIGHT COLUMN ── */}
//                         <motion.div
//                             variants={staggerContainer}
//                             className="flex flex-col gap-8 lg:pl-4"
//                         >
//                             {/* Quote Card */}
//                             <motion.div
//                                 variants={fadeInUp}
//                                 className="relative p-8 md:p-10 rounded-2xl bg-background/40 backdrop-blur-md border border-border/30 shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-shadow duration-500"
//                             >
//                                 <div className="absolute -top-3 -left-3 text-6xl text-primary/10 font-serif leading-none">
//                                     <Quote className="w-10 h-10 text-primary/20" />
//                                 </div>

//                                 <motion.blockquote
//                                     variants={fadeInUp}
//                                     className="space-y-6 relative z-10"
//                                 >
//                                     <p className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-[1.4] text-foreground/90 italic font-light tracking-wide">
//                                         &ldquo;I will open rivers in high places, and fountains in the midst of the valleys: I will make the wilderness a pool of water, and the dry land springs of water.&rdquo;
//                                     </p>


//                                 </motion.blockquote>
//                             </motion.div>

//                             {/* About Teaser */}
//                             <motion.div
//                                 variants={fadeInUp}
//                                 className="space-y-4 p-6 rounded-xl bg-muted/20 border border-border/20 backdrop-blur-sm"
//                             >
//                                 <div className="flex items-center gap-3">
//                                     <Briefcase className="w-5 h-5 text-primary/60" />
//                                     <span className="text-sm font-medium text-muted-foreground/80 uppercase tracking-wider">
//                                         About
//                                     </span>
//                                 </div>
//                                 <p className="text-muted-foreground/80 leading-relaxed text-sm sm:text-base">
//                                     With a deep commitment to academic excellence and institutional leadership,
//                                     I have dedicated my career to advancing education, mentoring future
//                                     educators, and fostering transformative learning environments.
//                                 </p>
//                                 <motion.a
//                                     href="#about"
//                                     className="inline-flex items-center gap-2 text-sm font-medium text-primary/80 hover:text-primary transition-colors duration-300 group"
//                                     whileHover={{ x: 4 }}
//                                 >
//                                     Learn more
//                                     <ArrowDown className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
//                                 </motion.a>
//                             </motion.div>
//                         </motion.div>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* ── Scroll Indicator ── */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.2, duration: 0.8 }}
//                 className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
//             >
//                 <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-medium">
//                     Scroll
//                 </span>
//                 <motion.div
//                     animate={{ y: [0, 6, 0] }}
//                     transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//                     className="p-2 rounded-full bg-background/40 backdrop-blur-sm border border-border/30"
//                 >
//                     <ArrowDown className="w-3.5 h-3.5 text-muted-foreground/40" />
//                 </motion.div>
//             </motion.div>
//         </section>
//     )
// }



'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
    ArrowDown,
    Briefcase,
    MapPin,
    Quote,
} from 'lucide-react'
import { useRef } from 'react'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
}

const fadeInScale = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
}

export function HeroSection() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f9fa] via-[#f0f2f5] to-[#e8ecf0] p-16"
            style={{ opacity, scale }}
        >
            {/* ── Animated Background ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: ['0%', '5%', '0%'],
                        y: ['0%', '-5%', '0%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-[#1f4567]/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: ['0%', '-5%', '0%'],
                        y: ['0%', '5%', '0%'],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-[#2a6b8f]/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: ['0%', '3%', '0%'],
                        y: ['0%', '3%', '0%'],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1f4567]/5 rounded-full blur-3xl"
                />
            </div>

            {/* ── Subtle Grid Overlay ── */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#1f4567_1px,transparent_1px)] [background-size:32px_32px]" />

            {/* ── Main Content ── */}
            <div className="relative z-10 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center"
                    >
                        {/* ── LEFT COLUMN ── */}
                        <motion.div
                            variants={staggerContainer}
                            className="flex flex-col gap-8"
                        >
                            {/* Profile Image */}
                            <motion.div
                                variants={fadeInScale}
                                className="relative group w-full max-w-md mx-auto lg:mx-0"
                            >
                                <div className="absolute -inset-3 bg-gradient-to-r from-[#1f4567]/30 via-[#2a6b8f]/30 to-[#1f4567]/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700" />
                                <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/50 border border-white/20 backdrop-blur-sm shadow-2xl shadow-[#1f4567]/5">
                                    <motion.img
                                        src="/images/profile.jpg"
                                        alt="Dr. Baburam Timsina"
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa]/30 via-transparent to-transparent pointer-events-none" />
                                    <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-[#1f4567]/20 rounded-br-2xl pointer-events-none" />
                                    <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-[#1f4567]/20 rounded-tl-2xl pointer-events-none" />
                                </div>
                            </motion.div>

                            {/* Name & Titles */}
                            <motion.div
                                variants={fadeInUp}
                                className="space-y-3 text-center lg:text-left"
                            >
                                <motion.h1
                                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.15 }}
                                >
                                    <span className="bg-gradient-to-r from-[#1a2a3a] via-[#1f4567] to-[#1a2a3a] bg-clip-text text-transparent">
                                        Dr. Baburam
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-[#1f4567] via-[#2a6b8f] to-[#1f4567] bg-clip-text text-transparent">
                                        Timsina
                                    </span>
                                </motion.h1>

                                <motion.div
                                    variants={fadeInUp}
                                    className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5"
                                >
                                    <span className="text-lg sm:text-xl text-[#4a5a6a] font-medium">
                                        Professor
                                    </span>
                                    <span className="hidden sm:inline text-[#4a5a6a]/30">•</span>
                                    <span className="text-lg sm:text-xl text-[#4a5a6a] font-medium">
                                        Director
                                    </span>
                                    <span className="hidden sm:inline text-[#4a5a6a]/30">•</span>
                                    <span className="text-lg sm:text-xl text-[#4a5a6a] font-medium">
                                        Head of Department
                                    </span>
                                </motion.div>

                                <motion.p
                                    variants={fadeInUp}
                                    className="text-base text-[#4a5a6a]/70 flex items-center justify-center lg:justify-start gap-2"
                                >
                                    <MapPin className="w-4 h-4" />
                                    <span>Teacher Educator &amp; Academic Leader</span>
                                </motion.p>
                            </motion.div>

                            {/* Academic Profile Cards */}
                            <motion.div
                                variants={fadeInUp}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
                            >
                                {[
                                    {
                                        name: 'Google Scholar',
                                        href: 'https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ',
                                        badgeLabel: 'G',
                                        badgeFrom: 'from-[#4355DB]',
                                        badgeTo: 'to-[#6E7AF0]',
                                        cardBg: 'bg-[#E6E8FB]',
                                        cardBorder: 'border-[#C9CDF5]',
                                        textColor: 'text-[#2A3590]',
                                        stats: [
                                            { value: '—', label: 'Citations' },
                                            { value: '—', label: 'H-index' },
                                        ],
                                    },
                                    {
                                        name: 'ResearchGate',
                                        href: 'https://www.researchgate.net/profile/Baburam-Timsina-3',
                                        badgeLabel: 'RG',
                                        badgeFrom: 'from-[#1FB28E]',
                                        badgeTo: 'to-[#5FD6B4]',
                                        cardBg: 'bg-[#D7F5EA]',
                                        cardBorder: 'border-[#B9EBD9]',
                                        textColor: 'text-[#0E6B53]',
                                        stats: [
                                            { value: '—', label: 'RI Score' },
                                            { value: '—', label: 'Citations' },
                                        ],
                                    },
                                ].map((profile) => (
                                    <motion.a
                                        key={profile.name}
                                        href={profile.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={fadeInUp}
                                        whileHover={{ y: -3 }}
                                        className={`group flex flex-col gap-4 rounded-2xl border ${profile.cardBorder} ${profile.cardBg} p-5 transition-shadow duration-300 hover:shadow-lg`}
                                    >
                                        {/* Badge + name */}
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${profile.badgeFrom} ${profile.badgeTo} text-sm font-bold text-white shadow-sm`}
                                            >
                                                {profile.badgeLabel}
                                            </span>
                                            <span className={`text-sm font-semibold ${profile.textColor}`}>
                                                {profile.name}
                                            </span>
                                        </div>

                                        {/* Stat pills */}
                                        <div className="grid grid-cols-2 gap-2.5">
                                            {profile.stats.map((stat) => (
                                                <div
                                                    key={stat.label}
                                                    className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-white/80 py-3 shadow-sm"
                                                >
                                                    <span className={`text-lg font-bold ${profile.textColor}`}>
                                                        {stat.value}
                                                    </span>
                                                    <span className="text-[11px] text-slate-500">
                                                        {stat.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* ── RIGHT COLUMN ── */}
                        <motion.div
                            variants={staggerContainer}
                            className="flex flex-col gap-8 lg:pl-4"
                        >
                            {/* Quote Card */}
                            <motion.div
                                variants={fadeInUp}
                                className="relative p-8 md:p-10 rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 shadow-xl shadow-[#1f4567]/5 hover:shadow-[#1f4567]/10 transition-shadow duration-500"
                            >
                                <div className="absolute -top-3 -left-3 text-6xl text-[#1f4567]/10 font-serif leading-none">
                                    <Quote className="w-10 h-10 text-[#1f4567]/20" />
                                </div>

                                <motion.blockquote
                                    variants={fadeInUp}
                                    className="space-y-6 relative z-10"
                                >
                                    <p className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-[1.4] text-[#1a2a3a]/90 italic font-light tracking-wide">
                                        &ldquo;I will open rivers in high places, and fountains in the midst of the valleys: I will make the wilderness a pool of water, and the dry land springs of water.&rdquo;
                                    </p>
                                </motion.blockquote>
                            </motion.div>

                            {/* About Teaser */}
                            <motion.div
                                variants={fadeInUp}
                                className="space-y-4 p-6 rounded-xl bg-white/30 border border-white/20 backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-5 h-5 text-[#1f4567]/60" />
                                    <span className="text-sm font-medium text-[#4a5a6a]/80 uppercase tracking-wider">
                                        About
                                    </span>
                                </div>
                                <p className="text-[#4a5a6a]/80 leading-relaxed text-sm sm:text-base">
                                    With a deep commitment to academic excellence and institutional leadership,
                                    I have dedicated my career to advancing education, mentoring future
                                    educators, and fostering transformative learning environments.
                                </p>
                                <motion.a
                                    href="#about"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1f4567]/80 hover:text-[#1f4567] transition-colors duration-300 group"
                                    whileHover={{ x: 4 }}
                                >
                                    Learn more
                                    <ArrowDown className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ── Scroll Indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#4a5a6a]/40 font-medium">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="p-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/30"
                >
                    <ArrowDown className="w-3.5 h-3.5 text-[#4a5a6a]/40" />
                </motion.div>
            </motion.div>
        </section>
    )
}