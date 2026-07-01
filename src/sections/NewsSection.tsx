
// // "use client";

// // import { motion } from "framer-motion";
// // import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// // import { NEWS_ITEMS, NEWS_CATEGORY_LABELS } from "@/data/news";
// // import { formatDate } from "@/lib/utils";
// // import useEmblaCarousel from 'embla-carousel-react';
// // import { useState, useCallback, useEffect, useRef } from 'react';

// // export function NewsSection() {
// //   const [emblaRef, emblaApi] = useEmblaCarousel({
// //     loop: true,
// //     align: 'start',
// //     slidesToScroll: 1,
// //     breakpoints: {
// //       '(min-width: 768px)': { slidesToScroll: 2 },
// //       '(min-width: 1024px)': { slidesToScroll: 3 },
// //     }
// //   });

// //   const [selectedIndex, setSelectedIndex] = useState(0);
// //   const autoplayRef = useRef<NodeJS.Timeout | null>(null);

// //   const featured = NEWS_ITEMS.filter((n) => n.featured);
// //   const regularNews = NEWS_ITEMS.filter((n) => !n.featured);
// //   const allNews = [...featured, ...regularNews];

// //   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
// //   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

// //   const onSelect = useCallback(() => {
// //     if (!emblaApi) return;
// //     setSelectedIndex(emblaApi.selectedScrollSnap());
// //   }, [emblaApi]);

// //   const startAutoplay = useCallback(() => {
// //     if (!emblaApi) return;
// //     if (autoplayRef.current) clearInterval(autoplayRef.current);
// //     autoplayRef.current = setInterval(() => {
// //       if (emblaApi) emblaApi.scrollNext();
// //     }, 3000);
// //   }, [emblaApi]);

// //   const stopAutoplay = useCallback(() => {
// //     if (autoplayRef.current) {
// //       clearInterval(autoplayRef.current);
// //       autoplayRef.current = null;
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (!emblaApi) return;
// //     startAutoplay();
// //     return () => stopAutoplay();
// //   }, [emblaApi, startAutoplay, stopAutoplay]);

// //   useEffect(() => {
// //     if (!emblaApi) return;
// //     onSelect();
// //     emblaApi.on('select', onSelect);
// //     return () => {
// //       emblaApi.off('select', onSelect);
// //     };
// //   }, [emblaApi, onSelect]);

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.05 },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 15 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.4, ease: "easeOut" },
// //     },
// //   };

// //   return (
// //     <section id="news" className="py-24 bg-gradient-to-b from-[#FDFDFD] to-[#F0F4F8] ">
// //       <div className="container mx-auto px-6 max-w-7xl border-2 border-[#1f4567]">
// //         {/* --- Section Header with Decorative Line --- */}
// //         <div className="mb-16 text-center">
// //           <div className="relative inline-flex items-center p-5">
// //             <div className="absolute left-0 z-10 bg-pink-600 px-5 md:px-6 py-2 md:py-3 shadow-lg">
// //               <span className="text-white font-bold text-lg md:text-2xl uppercase tracking-wider">
// //                 Latest
// //               </span>
// //             </div>
// //             <div className="ml-20 md:ml-24 bg-gradient-to-r from-[#3D87C0] to-[#2563EB] px-8 md:px-10 py-4 md:py-5 shadow-lg">
// //               <h2 className="text-white font-extrabold text-3xl md:text-5xl uppercase tracking-tight">
// //                 News
// //               </h2>
// //             </div>
// //           </div>
// //           <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-[#3D87C0] to-pink-600 rounded-full"></div>
// //         </div>

// //         {/* --- Carousel --- */}
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-40px" }}
// //           className="relative"
// //           onMouseEnter={stopAutoplay}
// //           onMouseLeave={startAutoplay}
// //         >
// //           <div className="overflow-hidden" ref={emblaRef}>
// //             <div className="flex">
// //               {allNews.map((item) => (
// //                 <motion.div
// //                   key={item.id}
// //                   variants={itemVariants}
// //                   className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
// //                 >
// //                   <div className="group bg-white rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-lg hover:border-transparent relative overflow-hidden border-2 border-[#1f4567]">
// //                     {/* Subtle gradient overlay on hover */}
// //                     <div className="absolute inset-0 bg-gradient-to-br from-[#3D87C0]/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

// //                     <div className="relative z-10">
// //                       {/* Tags */}
// //                       <div className="flex flex-wrap items-center gap-2 mb-4 ">
// //                         {item.featured && (
// //                           <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-gradient-to-r from-[#0B2545] to-[#1a3a5c] text-white rounded-full shadow-md">
// //                             Featured
// //                           </span>
// //                         )}
// //                         <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-[#E8F0FE] text-[#3D87C0] rounded-full">
// //                           {NEWS_CATEGORY_LABELS[item.category]}
// //                         </span>
// //                         <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto">
// //                           <Calendar className="h-3 w-3 text-[#3D87C0]" />
// //                           <span className="font-medium text-gray-500">{formatDate(item.date)}</span>
// //                         </span>
// //                       </div>

// //                       {/* Title with gradient */}
// //                       <h4 className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-[#0B2545] to-[#3D87C0] bg-clip-text text-transparent mb-3 leading-snug line-clamp-3 group-hover:from-pink-600 group-hover:to-[#3D87C0] transition-all duration-300">
// //                         {item.title}
// //                       </h4>

// //                       {/* Excerpt */}
// //                       <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 mb-6">
// //                         {item.excerpt}
// //                       </p>
// //                     </div>

// //                     {/* Read More Button */}
// //                     <div className="mt-auto pt-4 border-t border-gray-100 relative z-10">
// //                       <a
// //                         href={item.link || "#"}
// //                 className="self-center mt-auto px-8 py-3 bg-[#5b9dcc] hover:bg-[#4a8ab8] text-white font-semibold rounded-full inline-flex items-center gap-2 transition-all"
// //                       >
// //                         READ MORE
// //                         <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
// //                       </a>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* --- Navigation Buttons (with glow) --- */}
// //           <button
// //             onClick={scrollPrev}
// //             className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 md:-ml-7 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 hover:scale-110 hover:border-[#3D87C0] group"
// //             aria-label="Previous"
// //           >
// //             <ChevronLeft className="h-5 w-5 text-[#0B2545] group-hover:text-[#3D87C0] transition-colors" />
// //           </button>
// //           <button
// //             onClick={scrollNext}
// //             className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 md:-mr-7 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 hover:scale-110 hover:border-[#3D87C0] group"
// //             aria-label="Next"
// //           >
// //             <ChevronRight className="h-5 w-5 text-[#0B2545] group-hover:text-[#3D87C0] transition-colors" />
// //           </button>

// //           {/* --- Dot Indicators with Pulse --- */}
// //           <div className="flex justify-center gap-3 mt-10 mb-6">
// //             {emblaApi &&
// //               emblaApi.scrollSnapList().map((_, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => emblaApi.scrollTo(index)}
// //                   className={`h-2 rounded-full transition-all duration-300 ${
// //                     index === selectedIndex
// //                       ? 'w-10 bg-gradient-to-r from-[#3D87C0] to-pink-600 shadow-md animate-pulse'
// //                       : 'w-2 bg-[#0B2545]/30 hover:bg-[#0B2545]/60 hover:w-4'
// //                   }`}
// //                   aria-label={`Go to slide group ${index + 1}`}
// //                 />
// //               ))}
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";

// import { motion } from "framer-motion";
// import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { NEWS_ITEMS, NEWS_CATEGORY_LABELS } from "@/data/news";
// import { formatDate } from "@/lib/utils";
// import useEmblaCarousel from 'embla-carousel-react';
// import { useState, useCallback, useEffect, useRef } from 'react';

// export function NewsSection() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: 'start',
//     slidesToScroll: 1,
//     breakpoints: {
//       '(min-width: 768px)': { slidesToScroll: 2 },
//       '(min-width: 1024px)': { slidesToScroll: 3 },
//     }
//   });

//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const autoplayRef = useRef<NodeJS.Timeout | null>(null);

//   const featured = NEWS_ITEMS.filter((n) => n.featured);
//   const regularNews = NEWS_ITEMS.filter((n) => !n.featured);
//   const allNews = [...featured, ...regularNews];

//   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   const startAutoplay = useCallback(() => {
//     if (!emblaApi) return;
//     if (autoplayRef.current) clearInterval(autoplayRef.current);
//     autoplayRef.current = setInterval(() => {
//       if (emblaApi) emblaApi.scrollNext();
//     }, 3000);
//   }, [emblaApi]);

//   const stopAutoplay = useCallback(() => {
//     if (autoplayRef.current) {
//       clearInterval(autoplayRef.current);
//       autoplayRef.current = null;
//     }
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;
//     startAutoplay();
//     return () => stopAutoplay();
//   }, [emblaApi, startAutoplay, stopAutoplay]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on('select', onSelect);
//     return () => {
//       emblaApi.off('select', onSelect);
//     };
//   }, [emblaApi, onSelect]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.05 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 15 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.4, ease: "easeOut" },
//     },
//   };

//   return (
//     <section id="news" className="py-24 bg-[#F8F9FA] overflow-hidden">
//       <div className="container mx-auto px-6 max-w-7xl">
//         {/* --- Section Header with Green Accents --- */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <div className="relative inline-flex items-center">
//             {/* Decorative line */}
//             <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-[#0F7A5A]/40 hidden lg:block" />
            
//             <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/60 shadow-lg">
//               <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0F7A5A]">Latest</span>
//               <div className="w-px h-6 bg-[#0F7A5A]/30" />
//               <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight">
//                 News &amp; <span className="text-[#0F7A5A]">Events</span>
//               </h2>
//             </div>

//             <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-[#0F7A5A]/40 hidden lg:block" />
//           </div>
//           <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-[#0F7A5A] to-[#0B2545] rounded-full" />
//         </motion.div>

//         {/* --- Carousel --- */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-40px" }}
//           className="relative"
//           onMouseEnter={stopAutoplay}
//           onMouseLeave={startAutoplay}
//         >
//           <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
//             <div className="flex">
//               {allNews.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   variants={itemVariants}
//                   className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
//                 >
//                   <div className="group relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 transition-all duration-300 hover:shadow-xl hover:shadow-[#0B2545]/10 hover:border-[#0F7A5A]/30 hover:-translate-y-1 p-6 flex flex-col">
//                     {/* Subtle green gradient overlay on hover */}
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0F7A5A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

//                     {/* Top left green accent bar */}
//                     <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-[#0F7A5A] to-transparent rounded-tl-2xl" />

//                     <div className="relative z-10 flex-1 flex flex-col">
//                       {/* Tags & Date */}
//                       <div className="flex flex-wrap items-center gap-2 mb-4">
//                         {item.featured && (
//                           <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-[#0F7A5A] text-white rounded-full shadow-md">
//                             Featured
//                           </span>
//                         )}
//                         <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-[#0F7A5A]/10 text-[#0F7A5A] rounded-full border border-[#0F7A5A]/20">
//                           {NEWS_CATEGORY_LABELS[item.category]}
//                         </span>
//                         <span className="text-xs text-[#4A5A6A]/60 flex items-center gap-1 ml-auto">
//                           <Calendar className="h-3 w-3 text-[#0F7A5A]" />
//                           <span className="font-medium text-[#4A5A6A]/70">{formatDate(item.date)}</span>
//                         </span>
//                       </div>

//                       {/* Title */}
//                       <h4 className="font-serif text-xl md:text-2xl font-bold text-[#0B2545] mb-3 leading-snug line-clamp-3 group-hover:text-[#0F7A5A] transition-colors duration-300">
//                         {item.title}
//                       </h4>

//                       {/* Excerpt */}
//                       <p className="text-sm text-[#4A5A6A]/80 leading-relaxed line-clamp-4 mb-6 flex-1">
//                         {item.excerpt}
//                       </p>

//                       {/* Read More Button */}
//                       <div className="mt-auto pt-4 border-t border-gray-100/50">
//                         <a
//                           href={item.link || "#"}
//                           className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F7A5A] hover:text-[#0B6A4E] transition-colors group/link"
//                         >
//                           READ MORE
//                           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* --- Navigation Buttons (Green Accent) --- */}
//           <button
//             onClick={scrollPrev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white/90 backdrop-blur-sm hover:bg-white border border-[#0F7A5A]/30 hover:border-[#0F7A5A] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 group"
//             aria-label="Previous"
//           >
//             <ChevronLeft className="h-5 w-5 text-[#0B2545] group-hover:text-[#0F7A5A] transition-colors" />
//           </button>
//           <button
//             onClick={scrollNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white/90 backdrop-blur-sm hover:bg-white border border-[#0F7A5A]/30 hover:border-[#0F7A5A] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 group"
//             aria-label="Next"
//           >
//             <ChevronRight className="h-5 w-5 text-[#0B2545] group-hover:text-[#0F7A5A] transition-colors" />
//           </button>

//           {/* --- Dot Indicators (Green) --- */}
//           <div className="flex justify-center gap-3 mt-10">
//             {emblaApi &&
//               emblaApi.scrollSnapList().map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => emblaApi.scrollTo(index)}
//                   className={`h-2.5 rounded-full transition-all duration-300 ${
//                     index === selectedIndex
//                       ? 'w-10 bg-[#0F7A5A] shadow-md'
//                       : 'w-2.5 bg-[#0F7A5A]/30 hover:bg-[#0F7A5A]/60 hover:w-6'
//                   }`}
//                   aria-label={`Go to slide group ${index + 1}`}
//                 />
//               ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Newspaper } from "lucide-react";
import { NEWS_ITEMS, NEWS_CATEGORY_LABELS } from "@/data/news";
import { formatDate } from "@/lib/utils";
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect, useRef } from 'react';

export function NewsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 },
        }
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const featured = NEWS_ITEMS.filter((n) => n.featured);
    const regularNews = NEWS_ITEMS.filter((n) => !n.featured);
    const allNews = [...featured, ...regularNews];

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    const startAutoplay = useCallback(() => {
        if (!emblaApi) return;
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
            if (emblaApi) emblaApi.scrollNext();
        }, 3000);
    }, [emblaApi]);

    const stopAutoplay = useCallback(() => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        startAutoplay();
        return () => stopAutoplay();
    }, [emblaApi, startAutoplay, stopAutoplay]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => { emblaApi.off('select', onSelect); };
    }, [emblaApi, onSelect]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section
            id="news"
            aria-label="News and Events"
            style={{
                position: 'relative',
                padding: 'clamp(72px, 10vw, 120px) 0',
                background: 'var(--off-white)',
                overflow: 'hidden',
            }}
        >
            {/* ── Top divider ──────────────────────────────────── */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.30), rgba(11,37,69,0.12), transparent)',
            }} />

            {/* ── Background Orbs ──────────────────────────────── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{
                    position: 'absolute', top: '-10%', right: '-10%',
                    width: 560, height: 560, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, rgba(26,64,128,0.04) 50%, transparent 75%)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-15%', left: '-10%',
                    width: 640, height: 640, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(11,37,69,0.06) 0%, rgba(26,92,184,0.03) 50%, transparent 70%)',
                }} />
                {/* Dot grid */}
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.022,
                    backgroundImage: 'radial-gradient(circle, #0B2545 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                }} />
            </div>

            {/* ── Container ────────────────────────────────────── */}
            <div style={{
                position: 'relative', zIndex: 10,
                width: '100%', maxWidth: 1200,
                margin: '0 auto',
                padding: '0 clamp(20px, 5vw, 56px)',
            }}>

                {/* ── Section Header ───────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    style={{ marginBottom: 64, textAlign: 'center' }}
                >
                    {/* Eyebrow pill */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 10,
                        marginBottom: 20,
                        padding: '7px 20px',
                        borderRadius: 100,
                        background: 'rgba(212,175,55,0.08)',
                        border: '1px solid rgba(212,175,55,0.22)',
                    }}>
                        <Newspaper style={{ width: 12, height: 12, color: 'var(--gold)' }} />
                        <span style={{
                            fontSize: 10.5, fontWeight: 700,
                            letterSpacing: '0.22em', textTransform: 'uppercase',
                            color: 'var(--navy)', fontFamily: 'Inter, sans-serif',
                        }}>
                            Latest Updates
                        </span>
                        <Newspaper style={{ width: 12, height: 12, color: 'var(--gold)' }} />
                    </div>

                    {/* Main heading */}
                    <h2
                        className="font-display"
                        style={{
                            fontSize: 'clamp(30px, 4.5vw, 48px)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1,
                            color: 'var(--navy)',
                            margin: 0,
                        }}
                    >
                        News &amp;{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Events
                        </span>
                    </h2>

                    {/* Gold rule */}
                    <div style={{
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', gap: 12, marginTop: 22,
                    }}>
                        <div style={{ height: 1, width: 64, background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.50))' }} />
                        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--gold)', opacity: 0.7 }} />
                        <div style={{ height: 1, width: 64, background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.50))' }} />
                    </div>
                </motion.div>

                {/* ── Carousel ─────────────────────────────────── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    style={{ position: 'relative' }}
                    onMouseEnter={stopAutoplay}
                    onMouseLeave={startAutoplay}
                >
                    {/* Track */}
                    <div
                        ref={emblaRef}
                        style={{ overflow: 'hidden', borderRadius: 24 }}
                    >
                        <div style={{ display: 'flex' }}>
                            {allNews.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    style={{
                                        flex: '0 0 100%', minWidth: 0,
                                        padding: '0 10px',
                                    }}
                                    // Responsive flex-basis via inline style trick
                                    className="news-slide"
                                >
                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(11,37,69,0.16)' }}
                                        transition={{ duration: 0.32 }}
                                        style={{
                                            position: 'relative',
                                            height: '100%',
                                            display: 'flex', flexDirection: 'column',
                                            background: '#FFFFFF',
                                            borderRadius: 20,
                                            border: '1.5px solid rgba(11,37,69,0.08)',
                                            boxShadow: '0 4px 20px rgba(11,37,69,0.08)',
                                            padding: 'clamp(20px, 3vw, 28px)',
                                            overflow: 'hidden',
                                            transition: 'box-shadow 0.32s',
                                        }}
                                    >
                                        {/* Gold top accent line */}
                                        <div style={{
                                            position: 'absolute', top: 0, left: 0, right: 0,
                                            height: 3,
                                            background: 'linear-gradient(90deg, var(--gold), rgba(212,175,55,0.20), transparent)',
                                            borderRadius: '20px 20px 0 0',
                                            opacity: 0,
                                            transition: 'opacity 0.32s',
                                        }}
                                            className="card-top-bar"
                                        />

                                        {/* Navy left accent bar */}
                                        <div style={{
                                            position: 'absolute', top: 0, left: 0,
                                            width: 4, height: 56,
                                            background: 'linear-gradient(to bottom, var(--navy), rgba(11,37,69,0.08))',
                                            borderRadius: '20px 0 0 0',
                                        }} />

                                        {/* Hover glow overlay */}
                                        <div style={{
                                            position: 'absolute', inset: 0, borderRadius: 20,
                                            background: 'linear-gradient(135deg, rgba(212,175,55,0.04) 0%, transparent 60%)',
                                            opacity: 0, transition: 'opacity 0.32s',
                                            pointerEvents: 'none',
                                        }}
                                            className="card-hover-glow"
                                        />

                                        {/* ── Card content ─────────────── */}
                                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>

                                            {/* Tags + Date row */}
                                            <div style={{
                                                display: 'flex', flexWrap: 'wrap',
                                                alignItems: 'center', gap: 8,
                                                marginBottom: 16,
                                            }}>
                                                {item.featured && (
                                                    <span style={{
                                                        padding: '4px 12px',
                                                        fontSize: 9.5, fontWeight: 700,
                                                        letterSpacing: '0.15em', textTransform: 'uppercase',
                                                        background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                                                        color: '#FFFFFF',
                                                        borderRadius: 100,
                                                        border: '1px solid rgba(212,175,55,0.20)',
                                                        fontFamily: 'Inter, sans-serif',
                                                        boxShadow: '0 2px 8px rgba(11,37,69,0.22)',
                                                    }}>
                                                        Featured
                                                    </span>
                                                )}
                                                <span style={{
                                                    padding: '4px 12px',
                                                    fontSize: 9.5, fontWeight: 600,
                                                    letterSpacing: '0.12em', textTransform: 'uppercase',
                                                    background: 'rgba(212,175,55,0.09)',
                                                    color: 'var(--navy)',
                                                    borderRadius: 100,
                                                    border: '1px solid rgba(212,175,55,0.22)',
                                                    fontFamily: 'Inter, sans-serif',
                                                }}>
                                                    {NEWS_CATEGORY_LABELS[item.category]}
                                                </span>
                                                <span style={{
                                                    marginLeft: 'auto',
                                                    display: 'flex', alignItems: 'center', gap: 5,
                                                    fontSize: 11.5, fontWeight: 500,
                                                    color: 'var(--gray-400)',
                                                    fontFamily: 'Inter, sans-serif',
                                                }}>
                                                    <Calendar style={{ width: 12, height: 12, color: 'var(--gold)' }} />
                                                    {formatDate(item.date)}
                                                </span>
                                            </div>

                                            {/* Divider */}
                                            <div style={{
                                                height: 1, marginBottom: 14,
                                                background: 'linear-gradient(to right, rgba(212,175,55,0.25), transparent)',
                                            }} />

                                            {/* Title */}
                                            <h4
                                                className="font-display"
                                                style={{
                                                    fontSize: 'clamp(16px, 2vw, 19px)',
                                                    fontWeight: 700,
                                                    color: 'var(--navy)',
                                                    lineHeight: 1.35,
                                                    letterSpacing: '-0.01em',
                                                    marginBottom: 12,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    transition: 'color 0.25s',
                                                }}
                                            >
                                                {item.title}
                                            </h4>

                                            {/* Excerpt */}
                                            <p style={{
                                            fontSize: 'clamp(14px, 1.6vw, 16px)',
                                            lineHeight: 1.8,
                                            color: 'var(--text-secondary)',
                                            margin: 0,
                                            fontWeight: 500,
                                            fontFamily: 'Inter, sans-serif',
                                            letterSpacing: '0.3px',
                                             textAlign: 'justify',
                                        }}>
                                                {item.excerpt}
                                            </p>

                                            {/* Read More */}
                                            <div style={{
                                                marginTop: 'auto',
                                                paddingTop: 16,
                                                borderTop: '1px solid rgba(11,37,69,0.07)',
                                            }}>
                                                <motion.a
                                                    href={item.link || '#'}
                                                    whileHover={{ x: 4 }}
                                                    transition={{ duration: 0.22 }}
                                                    style={{
                                                        display: 'inline-flex', alignItems: 'center', gap: 6,
                                                        fontSize: 12, fontWeight: 700,
                                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                                        color: 'var(--navy)',
                                                        textDecoration: 'none',
                                                        fontFamily: 'Inter, sans-serif',
                                                        borderBottom: '1.5px solid rgba(212,175,55,0.40)',
                                                        paddingBottom: 2,
                                                        transition: 'color 0.22s, border-color 0.22s',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        (e.currentTarget as HTMLElement).style.color = 'var(--gold)'
                                                        ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--gold)'
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        (e.currentTarget as HTMLElement).style.color = 'var(--navy)'
                                                        ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(212,175,55,0.40)'
                                                    }}
                                                >
                                                    Read More
                                                    <ArrowRight style={{ width: 13, height: 13 }} />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ── Nav: Prev ───────────────────────────── */}
                    <motion.button
                        onClick={scrollPrev}
                        whileHover={{ scale: 1.10, boxShadow: '0 8px 28px rgba(11,37,69,0.20)' }}
                        whileTap={{ scale: 0.93 }}
                        aria-label="Previous news"
                        style={{
                            position: 'absolute', left: -20, top: '50%',
                            transform: 'translateY(-50%)',
                            width: 44, height: 44, borderRadius: '50%',
                            background: '#FFFFFF',
                            border: '1.5px solid rgba(212,175,55,0.28)',
                            boxShadow: '0 4px 16px rgba(11,37,69,0.14)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', zIndex: 10, padding: 0,
                            transition: 'box-shadow 0.25s',
                        }}
                    >
                        <ChevronLeft style={{ width: 20, height: 20, color: 'var(--navy)' }} />
                    </motion.button>

                    {/* ── Nav: Next ───────────────────────────── */}
                    <motion.button
                        onClick={scrollNext}
                        whileHover={{ scale: 1.10, boxShadow: '0 8px 28px rgba(11,37,69,0.20)' }}
                        whileTap={{ scale: 0.93 }}
                        aria-label="Next news"
                        style={{
                            position: 'absolute', right: -20, top: '50%',
                            transform: 'translateY(-50%)',
                            width: 44, height: 44, borderRadius: '50%',
                            background: '#FFFFFF',
                            border: '1.5px solid rgba(212,175,55,0.28)',
                            boxShadow: '0 4px 16px rgba(11,37,69,0.14)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', zIndex: 10, padding: 0,
                            transition: 'box-shadow 0.25s',
                        }}
                    >
                        <ChevronRight style={{ width: 20, height: 20, color: 'var(--navy)' }} />
                    </motion.button>

                    {/* ── Dot Indicators ──────────────────────── */}
                    <div style={{
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'center', gap: 10, marginTop: 36,
                    }}>
                        {emblaApi &&
                            emblaApi.scrollSnapList().map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => emblaApi.scrollTo(index)}
                                    whileHover={{ scale: 1.2 }}
                                    aria-label={`Go to slide group ${index + 1}`}
                                    style={{
                                        height: 8,
                                        width: index === selectedIndex ? 32 : 8,
                                        borderRadius: 100,
                                        background: index === selectedIndex
                                            ? 'linear-gradient(90deg, var(--gold), var(--gold-light))'
                                            : 'rgba(11,37,69,0.18)',
                                        border: 'none', cursor: 'pointer', padding: 0,
                                        transition: 'width 0.35s ease, background 0.35s ease',
                                        boxShadow: index === selectedIndex
                                            ? '0 2px 8px rgba(212,175,55,0.35)'
                                            : 'none',
                                    }}
                                />
                            ))}
                    </div>
                </motion.div>
            </div>

            {/* ── Bottom divider ───────────────────────────────── */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(212,175,55,0.20), transparent)',
            }} />

            {/* ── Responsive slide widths ──────────────────────── */}
            <style>{`
                .news-slide {
                    flex: 0 0 100%;
                }
                @media (min-width: 768px) {
                    .news-slide { flex: 0 0 50%; }
                }
                @media (min-width: 1024px) {
                    .news-slide { flex: 0 0 33.333%; }
                }
            `}</style>
        </section>
    );
}