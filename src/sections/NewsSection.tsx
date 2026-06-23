<<<<<<< HEAD
// "use client";

// import { motion } from "framer-motion";
// import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { NEWS_ITEMS, NEWS_CATEGORY_LABELS } from "@/data/news";
// import { formatDate } from "@/lib/utils";
// import useEmblaCarousel from 'embla-carousel-react';
// import { useState, useCallback, useEffect } from 'react';

// export function NewsSection() {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: 'start',
//     slidesToScroll: 1,
//     breakpoints: {
//       '(min-width: 768px)': {
//         slidesToScroll: 2,
//       },
//       '(min-width: 1024px)': {
//         slidesToScroll: 3,
//       }
//     }
//   });

//   const featured = NEWS_ITEMS.filter((n) => n.featured);
//   const regularNews = NEWS_ITEMS.filter((n) => !n.featured);

//   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

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
//     <section id="news" className="py-24 bg-[#FDFDFD] ">
//       <div className="container mx-auto px-6 max-w-6xl border-2 border-[#1f4567]">
        
//         {/* Section Header */}
//         <div className="mb-12">
//   <div className="relative inline-flex items-center p-5">
//     <div className="absolute left-0 z-10 bg-pink-600 px-4 md:px-5 py-2 md:py-3">
//       <span className="text-white font-bold text-lg md:text-2xl uppercase">
//         Latest
//       </span>
//     </div>

//     <div className="ml-16 md:ml-20 bg-[#3D87C0] px-8 md:px-10 py-4 md:py-5">
//       <h2 className="text-white font-extrabold text-3xl md:text-5xl uppercase">
//         News
//       </h2>
//     </div>
//   </div>
// </div>

//         {/* Featured Banner Items */}
//         {/* ---- Single Carousel for ALL news ---- */}
// <motion.div
//   variants={containerVariants}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true, margin: "-40px" }}
//   className="relative"
// >
//   <div className="overflow-hidden" ref={emblaRef}>
//     <div className="flex">
//       {[...featured, ...regularNews].map((item) => (
//         <motion.div
//           key={item.id}
//           variants={itemVariants}
//           className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
//         >
//           <div className="bg-white border border-gray-200 rounded-sm p-6 h-full flex flex-col transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
//             <div>
//               {/* Tags row */}
//               <div className="flex flex-wrap items-center gap-3 mb-4">
//                 {item.featured && (
//                   <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-[#0B2545] text-white rounded-full">
//                     Featured
//                   </span>
//                 )}
//                 <span className="text-xs font-medium text-gray-500">
//                   {NEWS_CATEGORY_LABELS[item.category]}
//                 </span>
//                 <span className="text-xs text-gray-400">•</span>
//                 <span className="text-xs text-gray-400 flex items-center gap-1">
//                   <Calendar className="h-3 w-3" />
//                   {formatDate(item.date)}
//                 </span>
//               </div>

//               <h4 className="text-lg font-serif font-medium text-[#0B2545] mb-3 leading-snug line-clamp-3">
//                 {item.title}
//               </h4>

//               <p className="text-sm text-gray-500 leading-relaxed line-clamp-4 mb-6">
//                 {item.excerpt}
//               </p>
//             </div>

//             <div className="mt-auto pt-4 border-t border-gray-100">
//               <a
//                 href={item.link || "#"}
//                 className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2545]/80 hover:text-[#0B2545] group"
//               >
//                 READ MORE <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>

//   {/* Dot Indicators (now using Embla's scroll snaps) */}
//   <div className="flex justify-center gap-2 mt-8 mb-10">
//     {emblaApi &&
//       emblaApi.scrollSnapList().map((_, index) => (
//         <button
//           key={index}
//           onClick={() => emblaApi.scrollTo(index)}
//           className={`w-2 h-2 rounded-full transition-all duration-300 ${
//             index === emblaApi.selectedScrollSnap()
//               ? 'bg-[#0B2545] w-8'
//               : 'bg-[#0B2545]/30 hover:bg-[#0B2545]/50'
//           }`}
//           aria-label={`Go to slide group ${index + 1}`}
//         />
//       ))}
//   </div>
// </motion.div>

//         {/* View All News Button */}
       
//       </div>
//     </section>
//   );
// }

// // "use client";

// // import { motion } from "framer-motion";
// // import { Calendar, ArrowRight } from "lucide-react";
// // import { NEWS_ITEMS, NEWS_CATEGORY_LABELS } from "@/data/news";
// // import { formatDate } from "@/lib/utils";

// // export function NewsSection() {
// //   const featured = NEWS_ITEMS.filter((n) => n.featured);
// //   const regularNews = NEWS_ITEMS.filter((n) => !n.featured);

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
// //     <section id="news" className="py-24 bg-[#FDFDFD] border-t border-gray-100">
// //       <div className="container mx-auto px-6 max-w-6xl">
        
// //         {/* Section Header */}
// //         <div className="mb-16 pb-6 border-b border-gray-200/80 max-w-3xl">
// //           <p className="text-xs font-bold tracking-widest text-[#0B2545]/60 uppercase mb-2">
// //             Announcements & Updates
// //           </p>
// //           <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#0B2545] tracking-tight">
// //             Latest News
// //           </h2>
// //         </div>

// //         {/* Featured Banner Item */}
// //         {featured.length > 0 && (
// //           <div className="mb-12 bg-white border border-gray-200 rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
// //             <div className="flex flex-wrap items-center gap-3 mb-4">
// //               <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-[#0B2545] text-white rounded-xs">
// //                 Featured
// //               </span>
// //               <span className="text-xs font-medium text-gray-500">
// //                 {NEWS_CATEGORY_LABELS[featured[0].category]}
// //               </span>
// //               <span className="text-xs text-gray-400">•</span>
// //               <span className="text-xs text-gray-400 flex items-center gap-1">
// //                 <Calendar className="h-3 w-3" />
// //                 {formatDate(featured[0].date)}
// //               </span>
// //             </div>
            
// //             <h3 className="text-2xl font-serif font-medium text-[#0B2545] mb-3 leading-snug">
// //               {featured[0].title}
// //             </h3>
// //             <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-4xl">
// //               {featured[0].excerpt}
// //             </p>

// //             {featured[0].link && (
// //               <a
// //                 href={featured[0].link}
// //                 className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B2545] hover:underline"
// //               >
// //                 Read Announcement <ArrowRight className="h-3.5 w-3.5" />
// //               </a>
// //             )}
// //           </div>
// //         )}

// //         {/* Editorial News Grid */}
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-40px" }}
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //         >
// //           {regularNews.map((item) => (
// //             <motion.div
// //               key={item.id}
// //               variants={itemVariants}
// //               className="bg-white border border-gray-100 p-6 flex flex-col justify-between transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
// //             >
// //               <div>
// //                 <div className="flex items-center justify-between gap-2 mb-4 text-xs text-gray-400">
// //                   <span className="font-medium text-[#0B2545]/70">
// //                     {NEWS_CATEGORY_LABELS[item.category]}
// //                   </span>
// //                   <span className="flex items-center gap-1 text-[11px]">
// //                     <Calendar className="h-3 w-3" />
// //                     {formatDate(item.date)}
// //                   </span>
// //                 </div>
                
// //                 <h4 className="text-lg font-serif font-medium text-[#0B2545] mb-3 leading-snug line-clamp-2">
// //                   {item.title}
// //                 </h4>
                
// //                 <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6">
// //                   {item.excerpt}
// //                 </p>
// //               </div>

// //               {item.link && (
// //                 <a
// //                   href={item.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B2545]/80 hover:text-[#0B2545] hover:underline mt-auto"
// //                 >
// //                   View details →
// //                 </a>
// //               )}
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="news" className="py-24 bg-gradient-to-b from-[#FDFDFD] to-[#F0F4F8]">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* --- Section Header with Decorative Line --- */}
        <div className="mb-16 text-center">
          <div className="relative inline-flex items-center p-5">
            <div className="absolute left-0 z-10 bg-pink-600 px-5 md:px-6 py-2 md:py-3 shadow-lg">
              <span className="text-white font-bold text-lg md:text-2xl uppercase tracking-wider">
                Latest
              </span>
            </div>
            <div className="ml-20 md:ml-24 bg-gradient-to-r from-[#3D87C0] to-[#2563EB] px-8 md:px-10 py-4 md:py-5 shadow-lg">
              <h2 className="text-white font-extrabold text-3xl md:text-5xl uppercase tracking-tight">
                News
              </h2>
            </div>
          </div>
          <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-[#3D87C0] to-pink-600 rounded-full"></div>
        </div>

        {/* --- Carousel --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {allNews.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                >
                  <div className="group bg-white rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-lg border border-gray-100/50 hover:border-transparent relative overflow-hidden">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3D87C0]/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                    <div className="relative z-10">
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {item.featured && (
                          <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-gradient-to-r from-[#0B2545] to-[#1a3a5c] text-white rounded-full shadow-md">
                            Featured
                          </span>
                        )}
                        <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-[#E8F0FE] text-[#3D87C0] rounded-full">
                          {NEWS_CATEGORY_LABELS[item.category]}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto">
                          <Calendar className="h-3 w-3 text-[#3D87C0]" />
                          <span className="font-medium text-gray-500">{formatDate(item.date)}</span>
                        </span>
                      </div>

                      {/* Title with gradient */}
                      <h4 className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-[#0B2545] to-[#3D87C0] bg-clip-text text-transparent mb-3 leading-snug line-clamp-3 group-hover:from-pink-600 group-hover:to-[#3D87C0] transition-all duration-300">
                        {item.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 mb-6">
                        {item.excerpt}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <div className="mt-auto pt-4 border-t border-gray-100 relative z-10">
                      <a
                        href={item.link || "#"}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#0B2545] to-[#1a3a5c] rounded-full shadow-md hover:shadow-xl hover:from-pink-600 hover:to-[#3D87C0] transition-all duration-300 group/btn"
                      >
                        READ MORE
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- Navigation Buttons (with glow) --- */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 md:-ml-7 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 hover:scale-110 hover:border-[#3D87C0] group"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-[#0B2545] group-hover:text-[#3D87C0] transition-colors" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 md:-mr-7 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 hover:scale-110 hover:border-[#3D87C0] group"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-[#0B2545] group-hover:text-[#3D87C0] transition-colors" />
          </button>

          {/* --- Dot Indicators with Pulse --- */}
          <div className="flex justify-center gap-3 mt-10 mb-6">
            {emblaApi &&
              emblaApi.scrollSnapList().map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'w-10 bg-gradient-to-r from-[#3D87C0] to-pink-600 shadow-md animate-pulse'
                      : 'w-2 bg-[#0B2545]/30 hover:bg-[#0B2545]/60 hover:w-4'
                  }`}
                  aria-label={`Go to slide group ${index + 1}`}
                />
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
=======
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
import { NEWS_ITEMS, NEWS_CATEGORY_LABELS } from "@/data/news";
import { formatDate } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

export function NewsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(NEWS_ITEMS.length / ITEMS_PER_PAGE);
  const paginatedItems = NEWS_ITEMS.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
  const featured = NEWS_ITEMS.filter((n) => n.featured);

  return (
    <section id="news" className="section-padding bg-muted/5 relative">
      <div className="container-wide">
        <SectionHeading
          label="News"
          title="Latest Updates"
          subtitle="Conferences, workshops, research updates, academic events, and awards."
        />

        {featured.length > 0 && (
          <div className="mb-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {featured.map((item) => (
                  <CarouselItem key={item.id} className="pl-4 md:basis-1/2">
                    <Card className="glass-card border-primary/20 hover-lift overflow-hidden group h-full">
                      <div className="h-1 gradient-primary" />
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="default">Featured</Badge>
                          <Badge variant="outline">{NEWS_CATEGORY_LABELS[item.category]}</Badge>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(item.date)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12" />
              <CarouselNext className="hidden sm:flex -right-4 lg:-right-12" />
            </Carousel>
          </div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paginatedItems.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <Card className="h-full hover-lift group border-0 glass-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{NEWS_CATEGORY_LABELS[item.category]}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-1 text-sm text-primary mt-3 hover:underline"
                    >
                      Read more <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {page + 1} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
>>>>>>> 3a65e851bc07cbf279eeaa5a3b08beaee085fd34
