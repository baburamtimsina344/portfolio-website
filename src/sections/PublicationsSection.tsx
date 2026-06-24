
// 'use client';

// import { useMemo, useState, useCallback, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Quote, Search, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from '@/components/ui/dialog';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import useEmblaCarousel from 'embla-carousel-react';
// import { PUBLICATIONS, PUBLICATION_YEARS } from '@/data/publications';
// import { GOOGLE_SCHOLAR_URL } from '@/data/profile';
// import type { PublicationCategory, SortOption } from '@/types';

// const CATEGORY_LABELS: Record<PublicationCategory, string> = {
//   all: 'All Publications',
//   journal: 'Journal Articles',
//   conference: 'Conference Papers',
//   book: 'Book Chapters',
//   report: 'Research Reports',
// };

// const ITEMS_PER_SLIDE = 3;

// // ─── Publication Card (matching NewsSection card style) ───
// function PublicationCard({
//   pub,
//   onSelect,
// }: {
//   pub: (typeof PUBLICATIONS)[0];
//   onSelect: (pub: (typeof PUBLICATIONS)[0]) => void;
// }) {
//   return (
//     <div
//       className="group bg-white rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-lg border border-gray-200 hover:border-transparent relative overflow-hidden cursor-pointer"
//       onClick={() => onSelect(pub)}
//     >
//       {/* Subtle gradient overlay on hover */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#3D87C0]/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

//       <div className="relative z-10">
//         {/* Tags row */}
//         <div className="flex flex-wrap items-center gap-2 mb-4">
//           <Badge
//             variant="outline"
//             className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-[#1f4567] text-white border-none rounded-full"
//           >
//             {CATEGORY_LABELS[pub.category]}
//           </Badge>

//           <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto">
//             <Calendar className="h-3 w-3 text-[#3D87C0]" />
//             <span className="font-medium text-gray-500">{pub.year}</span>
//           </span>

//           {pub.openAccess && (
//             <Badge className="bg-green-600 text-white text-[10px] uppercase tracking-wider rounded-full px-3 py-1">
//               Open Access
//             </Badge>
//           )}

//           {pub.citations !== undefined && (
//             <Badge
//               variant="secondary"
//               className="text-[#1f4567] bg-[#1f4567]/5 rounded-full px-3 py-1 text-[10px]"
//             >
//               <Quote className="h-3 w-3 mr-1" />
//               {pub.citations}
//             </Badge>
//           )}
//         </div>

//         {/* Title with gradient */}
//         <h3 className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-[#0B2545] to-[#3D87C0] bg-clip-text text-transparent mb-3 leading-snug line-clamp-3 group-hover:from-pink-600 group-hover:to-[#3D87C0] transition-all duration-300">
//           {pub.title}
//         </h3>

//         {/* Authors */}
//         <p className="text-sm text-gray-600 font-medium">{pub.authors}</p>

//         {/* Journal / venue */}
//         <p className="text-sm text-[#2a6b8f]/80 italic mt-1 line-clamp-2">{pub.journal}</p>

//         {/* DOI link (opens dialog on card click, but we keep this for direct access) */}
//         {pub.doi && (
//           <a
//             href={`https://doi.org/${pub.doi}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 text-sm font-medium text-[#2a6b8f] hover:text-[#1f4567] mt-4 transition-colors"
//             onClick={(e) => e.stopPropagation()}
//           >
//             View DOI
//             <ExternalLink className="h-3.5 w-3.5" />
//           </a>
//         )}
//       </div>

//       {/* "View Details" button (like READ MORE in news) */}
//       <div className="mt-auto pt-4 border-t border-gray-100 relative z-10">
//         <button
//           className="self-center mt-auto px-6 py-2.5 bg-[#5b9dcc] hover:bg-[#4a8ab8] text-white font-semibold rounded-full inline-flex items-center gap-2 transition-all text-sm"
//           onClick={(e) => {
//             e.stopPropagation();
//             onSelect(pub);
//           }}
//         >
//           VIEW DETAILS
//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
//         </button>
//       </div>
//     </div>
//   );
// }

// // ─── Main Component ───
// export function PublicationsSection() {
//   const [search, setSearch] = useState('');
//   const [yearFilter, setYearFilter] = useState<string>('all');
//   const [sort, setSort] = useState<SortOption>('year-desc');
//   const [activeTab, setActiveTab] = useState<PublicationCategory>('all');
//   const [selectedPub, setSelectedPub] = useState<(typeof PUBLICATIONS)[0] | null>(null);

//   // ── Filter & sort data ──
//   const filtered = useMemo(() => {
//     let results = [...PUBLICATIONS];

//     if (activeTab !== 'all') {
//       results = results.filter((p) => p.category === activeTab);
//     }
//     if (yearFilter !== 'all') {
//       results = results.filter((p) => p.year === Number(yearFilter));
//     }
//     if (search.trim()) {
//       const q = search.toLowerCase();
//       results = results.filter(
//         (p) =>
//           p.title.toLowerCase().includes(q) ||
//           p.authors.toLowerCase().includes(q) ||
//           (p.journal && p.journal.toLowerCase().includes(q))
//       );
//     }

//     results.sort((a, b) => {
//       switch (sort) {
//         case 'year-asc':
//           return a.year - b.year;
//         case 'citations-desc':
//           return (b.citations ?? 0) - (a.citations ?? 0);
//         case 'title-asc':
//           return a.title.localeCompare(b.title);
//         default:
//           return b.year - a.year;
//       }
//     });

//     return results;
//   }, [search, yearFilter, sort, activeTab]);

//   // ── Embla carousel setup ──
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: 'start',
//     slidesToScroll: 1,
//     breakpoints: {
//       '(min-width: 768px)': { slidesToScroll: 2 },
//       '(min-width: 1024px)': { slidesToScroll: 3 },
//     },
//   });

//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const autoplayRef = useRef<NodeJS.Timeout | null>(null);

//   // Group filtered items into slides (each slide holds up to ITEMS_PER_SLIDE cards)
//   const slides = useMemo(() => {
//     const groups = [];
//     for (let i = 0; i < filtered.length; i += ITEMS_PER_SLIDE) {
//       groups.push(filtered.slice(i, i + ITEMS_PER_SLIDE));
//     }
//     return groups;
//   }, [filtered]);

//   // ── Carousel controls ──
//   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   // ── Autoplay ──
//   const startAutoplay = useCallback(() => {
//     if (!emblaApi || slides.length <= 1) return;
//     if (autoplayRef.current) clearInterval(autoplayRef.current);
//     autoplayRef.current = setInterval(() => {
//       if (emblaApi) emblaApi.scrollNext();
//     }, 4000);
//   }, [emblaApi, slides.length]);

//   const stopAutoplay = useCallback(() => {
//     if (autoplayRef.current) {
//       clearInterval(autoplayRef.current);
//       autoplayRef.current = null;
//     }
//   }, []);

//   // ── Effect: start/stop autoplay ──
//   useEffect(() => {
//     if (!emblaApi || slides.length <= 1) return;
//     startAutoplay();
//     return () => stopAutoplay();
//   }, [emblaApi, slides.length, startAutoplay, stopAutoplay]);

//   // ── Effect: listen to select events ──
//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on('select', onSelect);
//     return () => {
//       emblaApi.off('select', onSelect);
//     };
//   }, [emblaApi, onSelect]);

//   // ── Reset carousel when filtered data changes ──
//   useEffect(() => {
//     if (emblaApi) {
//       emblaApi.reInit();
//       setSelectedIndex(0);
//       emblaApi.scrollTo(0);
//     }
//   }, [emblaApi, slides]);

//   // ── Animation variants ──
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
//       transition: { duration: 0.4, ease: 'easeOut' },
//     },
//   };

//   return (
//     <section
//       id="publications"
//       className="relative py-24 bg-[#6b2d90]  overflow-hidden"
//    >
//       <div className="container mx-auto px-6 max-w-7xl border-2 border-[#1f4567] bg-white">
//         {/* ─── Section Header ─── */}
//         <motion.div
//           className="mb-16 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <div className="mb-16 flex justify-center">
//   <div className="relative inline-flex items-center p-5">
    
//     {/* Pink Box */}
//     <div className="absolute left-0 z-10 bg-[#e6007e] px-4 md:px-5 py-2 md:py-3">
//       <span className="text-white font-extrabold text-lg md:text-2xl uppercase">
//         Selected
//       </span>
//     </div>

//     {/* Purple Box */}
//     <div className="ml-24 md:ml-28 bg-[#6b2d90] px-12 md:px-16 py-3 md:py-4">
//       <h2 className="text-white font-extrabold text-3xl md:text-5xl uppercase leading-none">
//         Publications
//       </h2>
//     </div>

//   </div>
// </div>
        
//         </motion.div>

       

//         {/* ─── Category Tabs ─── */}
//         <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as PublicationCategory)}>
         

//           <TabsContent value={activeTab} className="mt-0">
//             {filtered.length === 0 ? (
//               <div className="text-center py-20 text-[#4a5a6a]">
//                 No publications found matching your criteria.
//               </div>
//             ) : (
//               <>
//                 {/* ─── Carousel (same style as NewsSection) ─── */}
//                 <motion.div
//                   variants={containerVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, margin: '-40px' }}
//                   className="relative"
//                   onMouseEnter={stopAutoplay}
//                   onMouseLeave={startAutoplay}
//                 >
//                   <div className="overflow-hidden" ref={emblaRef}>
//                     <div className="flex ">
//                       {slides.map((slide, slideIndex) => (
//                         <div
//                           key={slideIndex}
//                           className="flex-[0_0_100%] min-w-0 px-3 "
//                         >
//                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
//                             {slide.map((pub) => (
//                               <motion.div
//                                 key={pub.id}
//                                 variants={itemVariants}
//                                 className="h-full border-2 border-[#1f4567] rounded-xl"
//                               >
//                                 <PublicationCard
//                                   pub={pub}
//                                   onSelect={setSelectedPub}
//                                 />
//                               </motion.div>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Navigation Buttons */}
//                   {slides.length > 1 && (
//                     <>
//                       <button
//                         onClick={scrollPrev}
//                         className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 md:-ml-7 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 hover:scale-110 hover:border-[#3D87C0] group"
//                         aria-label="Previous"
//                       >
//                         <ChevronLeft className="h-5 w-5 text-[#0B2545] group-hover:text-[#3D87C0] transition-colors" />
//                       </button>
//                       <button
//                         onClick={scrollNext}
//                         className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 md:-mr-7 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 hover:scale-110 hover:border-[#3D87C0] group"
//                         aria-label="Next"
//                       >
//                         <ChevronRight className="h-5 w-5 text-[#0B2545] group-hover:text-[#3D87C0] transition-colors" />
//                       </button>
//                     </>
//                   )}

//                   {/* Dot Indicators */}
//                   {slides.length > 1 && (
//                     <div className="flex justify-center gap-3 mt-10 mb-6">
//                       {emblaApi &&
//                         emblaApi.scrollSnapList().map((_, index) => (
//                           <button
//                             key={index}
//                             onClick={() => emblaApi.scrollTo(index)}
//                             className={`h-2 rounded-full transition-all duration-300 ${
//                               index === selectedIndex
//                                 ? 'w-10 bg-gradient-to-r from-[#3D87C0] to-pink-600 shadow-md animate-pulse'
//                                 : 'w-2 bg-[#0B2545]/30 hover:bg-[#0B2545]/60 hover:w-4'
//                             }`}
//                             aria-label={`Go to slide group ${index + 1}`}
//                           />
//                         ))}
//                     </div>
//                   )}
//                 </motion.div>

//                 <p className="text-center text-sm text-[#4a5a6a] mt-6">
//                   Showing {filtered.length} of {PUBLICATIONS.length} publications
//                 </p>
//               </>
//             )}
//           </TabsContent>
//         </Tabs>
//       </div>

//       {/* ─── Publication Detail Dialog ─── */}
//       <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
//         <DialogContent className="max-w-2xl rounded-3xl">
//           {selectedPub && (
//             <>
//               <DialogHeader>
//                 <DialogTitle className="text-2xl font-serif text-[#1f4567] leading-tight">
//                   {selectedPub.title}
//                 </DialogTitle>
//                 <DialogDescription className="text-[#2a6b8f] font-medium">
//                   {selectedPub.authors}
//                 </DialogDescription>
//               </DialogHeader>

//               <div className="space-y-6 pt-4">
//                 <p className="italic text-[#4a5a6a]">{selectedPub.journal}</p>

//                 <div className="flex flex-wrap gap-2">
//                   <Badge variant="outline">{selectedPub.year}</Badge>
//                   <Badge variant="outline">{CATEGORY_LABELS[selectedPub.category]}</Badge>
//                   {selectedPub.openAccess && (
//                     <Badge className="bg-green-600">Open Access</Badge>
//                   )}
//                   {selectedPub.citations !== undefined && (
//                     <Badge variant="secondary">{selectedPub.citations} Citations</Badge>
//                   )}
//                 </div>

//                 {selectedPub.doi && (
//                   <Button asChild className="bg-[#1f4567] hover:bg-[#2a6b8f] rounded-2xl">
//                     <a
//                       href={`https://doi.org/${selectedPub.doi}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <ExternalLink className="mr-2 h-4 w-4" />
//                       View Full Text via DOI
//                     </a>
//                   </Button>
//                 )}
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// }



'use client';

import { useMemo, useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Quote, Search, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useEmblaCarousel from 'embla-carousel-react';
import { PUBLICATIONS, PUBLICATION_YEARS } from '@/data/publications';
import { GOOGLE_SCHOLAR_URL } from '@/data/profile';
import type { PublicationCategory, SortOption } from '@/types';

// const CATEGORY_LABELS: Record<PublicationCategory, string> = {
//   all: 'All Publications',
//   journal: 'Journal Articles',
//   conference: 'Conference Papers',
//   book: 'Book Chapters',
//   report: 'Research Reports',
// };

const ITEMS_PER_SLIDE = 3;

// ─── Publication Card (green-accented, matching NewsSection) ───
function PublicationCard({
  pub,
  onSelect,
}: {
  pub: (typeof PUBLICATIONS)[0];
  onSelect: (pub: (typeof PUBLICATIONS)[0]) => void;
}) {
  return (
    <div
      className="group relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 transition-all duration-300 hover:shadow-xl hover:shadow-[#0B2545]/10 hover:border-[#0F7A5A]/30 hover:-translate-y-1 p-6 flex flex-col cursor-pointer"
      onClick={() => onSelect(pub)}
    >
      {/* Subtle green gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0F7A5A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top left green accent bar */}
      <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-[#0F7A5A] to-transparent rounded-tl-2xl" />

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Tags row */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {/* <Badge
            variant="outline"
            className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-[#0F7A5A] text-white border-none rounded-full"
          >
            {CATEGORY_LABELS[pub.category]}
          </Badge> */}

          <span className="text-xs text-[#4A5A6A]/60 flex items-center gap-1 ml-auto">
            <Calendar className="h-3 w-3 text-[#0F7A5A]" />
            <span className="font-medium text-[#4A5A6A]/70">{pub.year}</span>
          </span>

          {pub.openAccess && (
            <Badge className="bg-[#0F7A5A] text-white text-[10px] uppercase tracking-wider rounded-full px-3 py-1">
              Open Access
            </Badge>
          )}

          {pub.citations !== undefined && (
            <Badge
              variant="secondary"
              className="text-[#0F7A5A] bg-[#0F7A5A]/10 rounded-full px-3 py-1 text-[10px] border border-[#0F7A5A]/20"
            >
              <Quote className="h-3 w-3 mr-1" />
              {pub.citations}
            </Badge>
          )}
        </div>

        {/* Title with green hover */}
        {/* <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0B2545] mb-3 leading-snug line-clamp-3 group-hover:text-[#0F7A5A] transition-colors duration-300">
          {pub.title}
        </h3> */}

        {/* Authors */}
        <p className="text-sm text-[#4A5A6A] font-medium">{pub.authors}</p>

        {/* Journal / venue */}
        <p className="text-sm text-[#0F7A5A]/80 italic mt-1 line-clamp-2">{pub.journal}</p>

        {/* DOI link */}
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0F7A5A] hover:text-[#0B6A4E] mt-4 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            View DOI
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      {/* "View Details" button */}
      <div className="mt-auto pt-4 border-t border-gray-100/50 relative z-10">
        <button
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F7A5A] hover:text-[#0B6A4E] transition-colors group/btn"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(pub);
          }}
        >
          VIEW DETAILS
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ───
export function PublicationsSection() {
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [sort, setSort] = useState<SortOption>('year-desc');
  const [activeTab, setActiveTab] = useState<PublicationCategory>('all');
  const [selectedPub, setSelectedPub] = useState<(typeof PUBLICATIONS)[0] | null>(null);

  // ── Filter & sort data ──
  const filtered = useMemo(() => {
    let results = [...PUBLICATIONS];

    if (activeTab !== 'all') {
      results = results.filter((p) => p.category === activeTab);
    }
    if (yearFilter !== 'all') {
      results = results.filter((p) => p.year === Number(yearFilter));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          (p.journal && p.journal.toLowerCase().includes(q))
      );
    }

    results.sort((a, b) => {
      switch (sort) {
        case 'year-asc':
          return a.year - b.year;
        case 'citations-desc':
          return (b.citations ?? 0) - (a.citations ?? 0);
        case 'title-asc':
          return a.title.localeCompare(b.title);
        default:
          return b.year - a.year;
      }
    });

    return results;
  }, [search, yearFilter, sort, activeTab]);

  // ── Embla carousel setup ──
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Group filtered items into slides (each slide holds up to ITEMS_PER_SLIDE cards)
  const slides = useMemo(() => {
    const groups = [];
    for (let i = 0; i < filtered.length; i += ITEMS_PER_SLIDE) {
      groups.push(filtered.slice(i, i + ITEMS_PER_SLIDE));
    }
    return groups;
  }, [filtered]);

  // ── Carousel controls ──
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // ── Autoplay ──
  const startAutoplay = useCallback(() => {
    if (!emblaApi || slides.length <= 1) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000);
  }, [emblaApi, slides.length]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  // ── Effect: start/stop autoplay ──
  useEffect(() => {
    if (!emblaApi || slides.length <= 1) return;
    startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi, slides.length, startAutoplay, stopAutoplay]);

  // ── Effect: listen to select events ──
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // ── Reset carousel when filtered data changes ──
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setSelectedIndex(0);
      emblaApi.scrollTo(0);
    }
  }, [emblaApi, slides]);

  // ── Animation variants ──
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
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="publications"
      className="relative py-24 bg-[#F8F9FA] overflow-hidden"
    >
      {/* Background Decor – Green & Navy Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#0F7A5A]/20 via-[#0B2545]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#0B2545]/10 via-[#0F7A5A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0F7A5A]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* ─── Section Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="relative inline-flex items-center">
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-[#0F7A5A]/40 hidden lg:block" />
            
            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/60 shadow-lg">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0F7A5A]">Research</span>
              <div className="w-px h-6 bg-[#0F7A5A]/30" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight">
                Publications
              </h2>
            </div>

            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-[#0F7A5A]/40 hidden lg:block" />
          </div>
          <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-[#0F7A5A] to-[#0B2545] rounded-full" />
        </motion.div>

        {/* ─── Filter Controls ─── */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-end md:items-center justify-between">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as PublicationCategory)} className="w-full md:w-auto">
            {/* <TabsList className="bg-white/60 backdrop-blur-sm border border-white/60 rounded-2xl p-1 shadow-sm">
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-[#0F7A5A] data-[state=active]:text-white rounded-xl transition-all duration-300 text-sm font-medium px-4 py-2"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList> */}
          </Tabs>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#4A5A6A]/40" />
              <Input
                placeholder="Search publications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/80 backdrop-blur-sm border-white/60 rounded-full focus:border-[#0F7A5A] focus:ring-[#0F7A5A]/30 text-sm w-full md:w-56"
              />
            </div> */}

           

          
          </div>
        </div>

        {/* ─── Carousel ─── */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#4A5A6A] bg-white/60 backdrop-blur-sm rounded-2xl border border-white/60">
            No publications found matching your criteria.
          </div>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="relative"
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
            >
              <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                  {slides.map((slide, slideIndex) => (
                    <div
                      key={slideIndex}
                      className="flex-[0_0_100%] min-w-0 px-3"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {slide.map((pub) => (
                          <motion.div
                            key={pub.id}
                            variants={itemVariants}
                            className="h-full"
                          >
                            <PublicationCard pub={pub} onSelect={setSelectedPub} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons – Green Accent */}
              {slides.length > 1 && (
                <>
                  <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white/90 backdrop-blur-sm hover:bg-white border border-[#0F7A5A]/30 hover:border-[#0F7A5A] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 group"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#0B2545] group-hover:text-[#0F7A5A] transition-colors" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white/90 backdrop-blur-sm hover:bg-white border border-[#0F7A5A]/30 hover:border-[#0F7A5A] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 group"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-5 w-5 text-[#0B2545] group-hover:text-[#0F7A5A] transition-colors" />
                  </button>
                </>
              )}

              {/* Dot Indicators – Green */}
              {slides.length > 1 && (
                <div className="flex justify-center gap-3 mt-10">
                  {emblaApi &&
                    emblaApi.scrollSnapList().map((_, index) => (
                      <button
                        key={index}
                        onClick={() => emblaApi.scrollTo(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === selectedIndex
                            ? 'w-10 bg-[#0F7A5A] shadow-md'
                            : 'w-2.5 bg-[#0F7A5A]/30 hover:bg-[#0F7A5A]/60 hover:w-6'
                        }`}
                        aria-label={`Go to slide group ${index + 1}`}
                      />
                    ))}
                </div>
              )}
            </motion.div>

            <p className="text-center text-sm text-[#4A5A6A]/70 mt-8">
              Showing {filtered.length} of {PUBLICATIONS.length} publications
            </p>
          </>
        )}
      </div>

      {/* ─── Publication Detail Dialog (Green Accents) ─── */}
      <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
        <DialogContent className="max-w-2xl rounded-2xl border border-[#0F7A5A]/20 shadow-2xl">
          {selectedPub && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-[#0B2545] leading-tight">
                  {selectedPub.title}
                </DialogTitle>
                <DialogDescription className="text-[#0F7A5A] font-medium">
                  {selectedPub.authors}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                <p className="italic text-[#4A5A6A]">{selectedPub.journal}</p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-[#0F7A5A]/30 text-[#0F7A5A]">
                    {selectedPub.year}
                  </Badge>
                  <Badge variant="outline" className="border-[#0F7A5A]/30 text-[#0F7A5A]">
                    {CATEGORY_LABELS[selectedPub.category]}
                  </Badge>
                  {selectedPub.openAccess && (
                    <Badge className="bg-[#0F7A5A] text-white">Open Access</Badge>
                  )}
                  {selectedPub.citations !== undefined && (
                    <Badge variant="secondary" className="bg-[#0F7A5A]/10 text-[#0F7A5A] border border-[#0F7A5A]/20">
                      {selectedPub.citations} Citations
                    </Badge>
                  )}
                </div>

                {selectedPub.doi && (
                  <Button
                    asChild
                    className="bg-[#0F7A5A] hover:bg-[#0B6A4E] rounded-full px-6 shadow-md hover:shadow-lg transition-all"
                  >
                    <a
                      href={`https://doi.org/${selectedPub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Full Text via DOI
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}