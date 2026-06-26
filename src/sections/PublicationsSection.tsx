
// "use client";

// import { useMemo, useState, useCallback, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   ExternalLink,
//   Quote,
//   Calendar,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import useEmblaCarousel from "embla-carousel-react";

// // --- Types Alignment ---
// interface Publication {
//   id: string;
//   title: string;
//   authors: string;
//   journal: string;
//   year: number;
//   openAccess: boolean;
//   citations?: number;
//   doi?: string;
// }

// // --- Real Scholar & ResearchGate Dataset ---
// const PUBLICATIONS: Publication[] = [
//   {
//     id: "pub-1",
//     title: "Study on Job Satisfaction among the Employees of Nepal Rastra Bank (NRB)",
//     authors: "P. Koirala, B. Timsina, D. Koirala, M.S. Kamalaveni",
//     journal: "Social Science Research Network (SSRN) / ResearchGate",
//     year: 2024,
//     openAccess: true,
//     citations: 21,
//     doi: "21.389653784",
//   },
//   {
//     id: "pub-2",
//     title: "Ergonomic practices and banking employee performance: A sequential explanatory approach",
//     authors: "S. Karmacharya, U. Bhattarai, B. Timsina, N. Shrestha, S. Tamang",
//     journal: "American Journal of STEM Education",
//     year: 2025,
//     openAccess: true,
//     citations: 10,
//     doi: "10.32674/ajse.v6i1",
//   },
//   {
//     id: "pub-3",
//     title: "Unlocking stability: Mitigating job-hopping among millennials in the information technology sector",
//     authors: "A. Shakya, U. Bhattarai, B. Timsina",
//     journal: "American Journal of STEM Education",
//     year: 2025,
//     openAccess: true,
//     citations: 8,
//     doi: "10.32674/xvsrs280",
//   },
//   {
//     id: "pub-4",
//     title: "Navigating cultural contexts: How multinational corporations shape CSR strategies in Nepal",
//     authors: "A. Sthapit, U. Bhattarai, B. Timsina, M. Kayestha",
//     journal: "American Journal of STEM Education",
//     year: 2025,
//     openAccess: false,
//     citations: 7,
//     doi: "10.32674/ajse.v12i2",
//   },
//   {
//     id: "pub-5",
//     title: "Charismatic and transactional leadership and employee engagement: Moderating effect of level of education",
//     authors: "P. Koirala, S. Balami, K. Munankarmi, D. Koirala, J. Chudal, B. Timsina",
//     journal: "International Journal of Management and Social Sciences",
//     year: 2024,
//     openAccess: false,
//     citations: 6,
//     doi: "10.5281/zenodo.1024",
//   },
//   {
//     id: "pub-6",
//     title: "Digital transformation as a catalyst for enhancing business agility in the service sector: The mediating roles of business performance and competitive advantage",
//     authors: "U. Bhattarai, A. Sthapit, B. Timsina, O. Gurung",
//     journal: "American Journal of STEM Education",
//     year: 2026,
//     openAccess: true,
//     citations: 1,
//     doi: "10.32674/ajse.v19i1",
//   },
//   {
//     id: "pub-7",
//     title: "Mandated Corporate Social Responsibility in Nepalese Commercial Banks: A Qualitative Perspective",
//     authors: "B. Aryal, RK. Danuwar, B. Timsina",
//     journal: "Nepalese Journal of Insurance and Social Security",
//     year: 2024,
//     openAccess: true,
//     citations: 2,
//     doi: "10.3126/njiss.v8i1",
//   },
//   {
//     id: "pub-8",
//     title: "Contemporary Policy Frameworks and Future Directions in Nepal's Higher Education",
//     authors: "B. Timsina, U. Bhattarai, P. Koirala",
//     journal: "Kriti Publication Monograph Series",
//     year: 2025,
//     openAccess: true,
//     citations: 1,
//     doi: "978-9937-730-56-3",
//   },
//   {
//     id: "pub-9",
//     title: "The Timeless Strategist: Reinterpreting Kautilya's Arthashastra for Ethical Leadership, Governance, and Strategy in Modern Business",
//     authors: "B. Timsina, U. Bhattarai, U. DC",
//     journal: "Journal of Business and Social Sciences Research",
//     year: 2025,
//     openAccess: false,
//     citations: 0,
//     doi: "10.3126/jbssr.v10i2",
//   },
//   {
//     id: "pub-10",
//     title: "Cognitive dissonance in university choice among graduate students",
//     authors: "J. Luintel, B. Timsina",
//     journal: "Journal of Society and Management Studies",
//     year: 2025,
//     openAccess: false,
//     citations: 0,
//     doi: "10.3126/jsms.v3i1",
//   }
// ];

// const ITEMS_PER_SLIDE = 3;

// // ─── Publication Card (green-accented) ───
// function PublicationCard({
//   pub,
//   onSelect,
// }: {
//   pub: Publication;
//   onSelect: (pub: Publication) => void;
// }) {
//   return (
//     <div
//       className="group relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 transition-all duration-300 hover:shadow-xl hover:shadow-[#0B2545]/10 hover:border-[#0F7A5A]/30 hover:-translate-y-1 p-6 flex flex-col cursor-pointer"
//       onClick={() => onSelect(pub)}
//     >
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0F7A5A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
//       <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-[#0F7A5A] to-transparent rounded-tl-2xl" />

//       <div className="relative z-10 flex-1 flex flex-col">
//         <div className="flex flex-wrap items-center gap-2 mb-4">
//           <span className="text-xs text-[#4A5A6A]/60 flex items-center gap-1">
//             <Calendar className="h-3 w-3 text-[#0F7A5A]" />
//             <span className="font-medium text-[#4A5A6A]/70">{pub.year}</span>
//           </span>

//           {pub.openAccess && (
//             <Badge className="bg-[#0F7A5A] text-white text-[10px] uppercase tracking-wider rounded-full px-3 py-1 border-none ml-auto">
//               Open Access
//             </Badge>
//           )}

//           {pub.citations !== undefined && (
//             <Badge
//               variant="secondary"
//               className={`text-[#0F7A5A] bg-[#0F7A5A]/10 rounded-full px-3 py-1 text-[10px] border border-[#0F7A5A]/20 ${!pub.openAccess ? 'ml-auto' : ''}`}
//             >
//               <Quote className="h-3 w-3 mr-1" />
//               {pub.citations}
//             </Badge>
//           )}
//         </div>

//         <h3 className="font-serif text-xl font-bold text-[#0B2545] mb-3 leading-snug line-clamp-3 group-hover:text-[#0F7A5A] transition-colors duration-300">
//           {pub.title}
//         </h3>

//         <p className="text-sm text-[#4A5A6A] font-medium">{pub.authors}</p>
//         <p className="text-sm text-[#0F7A5A]/80 italic mt-1 line-clamp-2">
//           {pub.journal}
//         </p>

//         {pub.doi && (
//           <a
//             href={pub.doi.includes(".") ? `https://doi.org/${pub.doi}` : `https://www.researchgate.net/profile/Baburam-Timsina-3`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 text-sm font-medium text-[#0F7A5A] hover:text-[#0B6A4E] mt-4 transition-colors"
//             onClick={(e) => e.stopPropagation()}
//           >
//             View Document
//             <ExternalLink className="h-3.5 w-3.5" />
//           </a>
//         )}
//       </div>

//       <div className="mt-auto pt-4 border-t border-gray-100/50 relative z-10">
//         <button
//           className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F7A5A] hover:text-[#0B6A4E] transition-colors group/btn"
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
//   const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

//   // Directly pass sorted static dataset
//   const sortedPublications = useMemo(() => {
//     return [...PUBLICATIONS].sort((a, b) => b.year - a.year);
//   }, []);

//   // Carousel framework setup
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "start",
//     slidesToScroll: 1,
//   });

//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const autoplayRef = useRef<NodeJS.Timeout | null>(null);

//   const slides = useMemo(() => {
//     const groups = [];
//     for (let i = 0; i < sortedPublications.length; i += ITEMS_PER_SLIDE) {
//       groups.push(sortedPublications.slice(i, i + ITEMS_PER_SLIDE));
//     }
//     return groups;
//   }, [sortedPublications]);

//   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

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

//   useEffect(() => {
//     if (!emblaApi || slides.length <= 1) return;
//     startAutoplay();
//     return () => stopAutoplay();
//   }, [emblaApi, slides.length, startAutoplay, stopAutoplay]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     return () => {
//       emblaApi.off("select", onSelect);
//     };
//   }, [emblaApi, onSelect]);

//   useEffect(() => {
//     if (emblaApi) {
//       emblaApi.reInit();
//       setSelectedIndex(0);
//       emblaApi.scrollTo(0);
//     }
//   }, [emblaApi, slides]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 15 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
//   };

//   return (
//     <section id="publications" className="relative py-24 bg-[#F8F9FA] overflow-hidden">
//       {/* Background UI Decor */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#0F7A5A]/20 via-[#0B2545]/5 to-transparent rounded-full blur-3xl" />
//         <div className="absolute bottom-0 -left-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#0B2545]/10 via-[#0F7A5A]/5 to-transparent rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <div className="relative inline-flex items-center">
//             <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-[#0F7A5A]/40 hidden lg:block" />
//             <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/60 shadow-lg">
//               <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0F7A5A]">
//                 Research
//               </span>
//               <div className="w-px h-6 bg-[#0F7A5A]/30" />
//               <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight">
//                 Publications
//               </h2>
//             </div>
//             <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-[#0F7A5A]/40 hidden lg:block" />
//           </div>
//           <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-[#0F7A5A] to-[#0B2545] rounded-full" />
//         </motion.div>

//         {/* Carousel Framework */}
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
//               {slides.map((slide, slideIndex) => (
//                 <div key={slideIndex} className="flex-[0_0_100%] min-w-0 px-3">
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {slide.map((pub) => (
//                       <motion.div key={pub.id} variants={itemVariants} className="h-full">
//                         <PublicationCard pub={pub} onSelect={setSelectedPub} />
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Elements */}
//           {slides.length > 1 && (
//             <>
//               <button
//                 onClick={scrollPrev}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white/90 backdrop-blur-sm hover:bg-white border border-[#0F7A5A]/30 hover:border-[#0F7A5A] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 group"
//                 aria-label="Previous"
//               >
//                 <ChevronLeft className="h-5 w-5 text-[#0B2545] group-hover:text-[#0F7A5A] transition-colors" />
//               </button>
//               <button
//                 onClick={scrollNext}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white/90 backdrop-blur-sm hover:bg-white border border-[#0F7A5A]/30 hover:border-[#0F7A5A] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 group"
//                 aria-label="Next"
//               >
//                 <ChevronRight className="h-5 w-5 text-[#0B2545] group-hover:text-[#0F7A5A] transition-colors" />
//               </button>
//             </>
//           )}

//           {/* Interactive Slide Dots */}
//           {slides.length > 1 && (
//             <div className="flex justify-center gap-3 mt-10">
//               {emblaApi &&
//                 emblaApi
//                   .scrollSnapList()
//                   .map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => emblaApi.scrollTo(index)}
//                       className={`h-2.5 rounded-full transition-all duration-300 ${
//                         index === selectedIndex
//                           ? "w-10 bg-[#0F7A5A] shadow-md"
//                           : "w-2.5 bg-[#0F7A5A]/30 hover:bg-[#0F7A5A]/60 hover:w-6"
//                       }`}
//                       aria-label={`Go to slide group ${index + 1}`}
//                     />
//                   ))}
//             </div>
//           )}
//         </motion.div>

//         <p className="text-center text-sm text-[#4A5A6A]/70 mt-8">
//           Showing all {sortedPublications.length} publications
//         </p>
//       </div>

//       {/* Modal Detail Overlay */}
//       <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
//         <DialogContent className="max-w-2xl rounded-2xl border border-[#0F7A5A]/20 shadow-2xl bg-white">
//           {selectedPub && (
//             <>
//               <DialogHeader>
//                 <DialogTitle className="font-serif text-2xl text-[#0B2545] leading-tight">
//                   {selectedPub.title}
//                 </DialogTitle>
//                 <DialogDescription className="text-[#0F7A5A] font-medium mt-2">
//                   {selectedPub.authors}
//                 </DialogDescription>
//               </DialogHeader>

//               <div className="space-y-6 pt-4">
//                 <p className="italic text-[#4A5A6A]">{selectedPub.journal}</p>

//                 <div className="flex flex-wrap gap-2">
//                   <Badge variant="outline" className="border-[#0F7A5A]/30 text-[#0F7A5A]">
//                     Year: {selectedPub.year}
//                   </Badge>
//                   {selectedPub.openAccess && (
//                     <Badge className="bg-[#0F7A5A] text-white">Open Access</Badge>
//                   )}
//                   {selectedPub.citations !== undefined && (
//                     <Badge variant="secondary" className="bg-[#0F7A5A]/10 text-[#0F7A5A] border border-[#0F7A5A]/20">
//                       {selectedPub.citations} Citations
//                     </Badge>
//                   )}
//                 </div>

//                 {selectedPub.doi && (
//                   <Button asChild className="bg-[#0F7A5A] hover:bg-[#0B6A4E] text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all mt-4">
//                     <a
//                       href={selectedPub.doi.includes(".") ? `https://doi.org/${selectedPub.doi}` : `https://www.researchgate.net/profile/Baburam-Timsina-3`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <ExternalLink className="mr-2 h-4 w-4" />
//                       View Source Document
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



"use client";

import { useMemo, useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
    ExternalLink,
    Quote,
    Calendar,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    BookMarked,
    Lock,
    Unlock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import useEmblaCarousel from "embla-carousel-react";

// ─── Types ────────────────────────────────────────────────────────────
interface Publication {
    id: string;
    title: string;
    authors: string;
    journal: string;
    year: number;
    openAccess: boolean;
    citations?: number;
    doi?: string;
}

// ─── Dataset ──────────────────────────────────────────────────────────
const PUBLICATIONS: Publication[] = [
    {
        id: "pub-1",
        title: "Study on Job Satisfaction among the Employees of Nepal Rastra Bank (NRB)",
        authors: "P. Koirala, B. Timsina, D. Koirala, M.S. Kamalaveni",
        journal: "Social Science Research Network (SSRN) / ResearchGate",
        year: 2024,
        openAccess: true,
        citations: 21,
        doi: "21.389653784",
    },
    {
        id: "pub-2",
        title: "Ergonomic practices and banking employee performance: A sequential explanatory approach",
        authors: "S. Karmacharya, U. Bhattarai, B. Timsina, N. Shrestha, S. Tamang",
        journal: "American Journal of STEM Education",
        year: 2025,
        openAccess: true,
        citations: 10,
        doi: "10.32674/ajse.v6i1",
    },
    {
        id: "pub-3",
        title: "Unlocking stability: Mitigating job-hopping among millennials in the information technology sector",
        authors: "A. Shakya, U. Bhattarai, B. Timsina",
        journal: "American Journal of STEM Education",
        year: 2025,
        openAccess: true,
        citations: 8,
        doi: "10.32674/xvsrs280",
    },
    {
        id: "pub-4",
        title: "Navigating cultural contexts: How multinational corporations shape CSR strategies in Nepal",
        authors: "A. Sthapit, U. Bhattarai, B. Timsina, M. Kayestha",
        journal: "American Journal of STEM Education",
        year: 2025,
        openAccess: false,
        citations: 7,
        doi: "10.32674/ajse.v12i2",
    },
    {
        id: "pub-5",
        title: "Charismatic and transactional leadership and employee engagement: Moderating effect of level of education",
        authors: "P. Koirala, S. Balami, K. Munankarmi, D. Koirala, J. Chudal, B. Timsina",
        journal: "International Journal of Management and Social Sciences",
        year: 2024,
        openAccess: false,
        citations: 6,
        doi: "10.5281/zenodo.1024",
    },
    {
        id: "pub-6",
        title: "Digital transformation as a catalyst for enhancing business agility in the service sector: The mediating roles of business performance and competitive advantage",
        authors: "U. Bhattarai, A. Sthapit, B. Timsina, O. Gurung",
        journal: "American Journal of STEM Education",
        year: 2026,
        openAccess: true,
        citations: 1,
        doi: "10.32674/ajse.v19i1",
    },
    {
        id: "pub-7",
        title: "Mandated Corporate Social Responsibility in Nepalese Commercial Banks: A Qualitative Perspective",
        authors: "B. Aryal, RK. Danuwar, B. Timsina",
        journal: "Nepalese Journal of Insurance and Social Security",
        year: 2024,
        openAccess: true,
        citations: 2,
        doi: "10.3126/njiss.v8i1",
    },
    {
        id: "pub-8",
        title: "Contemporary Policy Frameworks and Future Directions in Nepal's Higher Education",
        authors: "B. Timsina, U. Bhattarai, P. Koirala",
        journal: "Kriti Publication Monograph Series",
        year: 2025,
        openAccess: true,
        citations: 1,
        doi: "978-9937-730-56-3",
    },
    {
        id: "pub-9",
        title: "The Timeless Strategist: Reinterpreting Kautilya's Arthashastra for Ethical Leadership, Governance, and Strategy in Modern Business",
        authors: "B. Timsina, U. Bhattarai, U. DC",
        journal: "Journal of Business and Social Sciences Research",
        year: 2025,
        openAccess: false,
        citations: 0,
        doi: "10.3126/jbssr.v10i2",
    },
    {
        id: "pub-10",
        title: "Cognitive dissonance in university choice among graduate students",
        authors: "J. Luintel, B. Timsina",
        journal: "Journal of Society and Management Studies",
        year: 2025,
        openAccess: false,
        citations: 0,
        doi: "10.3126/jsms.v3i1",
    },
];

const ITEMS_PER_SLIDE = 3;

// ─── Publication Card ─────────────────────────────────────────────────
function PublicationCard({
    pub,
    onSelect,
}: {
    pub: Publication;
    onSelect: (pub: Publication) => void;
}) {
    return (
        <motion.div
            whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(11,37,69,0.16)' }}
            transition={{ duration: 0.32 }}
            onClick={() => onSelect(pub)}
            style={{
                position: 'relative',
                height: '100%',
                display: 'flex', flexDirection: 'column',
                background: '#FFFFFF',
                borderRadius: 20,
                border: '1.5px solid rgba(11,37,69,0.08)',
                boxShadow: '0 4px 20px rgba(11,37,69,0.08)',
                padding: 'clamp(20px, 2.5vw, 28px)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'box-shadow 0.32s',
            }}
        >
            {/* Navy left accent bar */}
            <div style={{
                position: 'absolute', top: 0, left: 0,
                width: 4, height: 64,
                background: 'linear-gradient(to bottom, var(--navy), rgba(11,37,69,0.06))',
                borderRadius: '20px 0 0 0',
            }} />

            {/* Gold top accent line (hover reveal) */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 3,
                background: 'linear-gradient(90deg, var(--gold), rgba(212,175,55,0.15), transparent)',
                borderRadius: '20px 20px 0 0',
                opacity: 0,
                transition: 'opacity 0.32s',
            }} className="pub-top-bar" />

            {/* Hover glow */}
            <div style={{
                position: 'absolute', inset: 0, borderRadius: 20,
                background: 'linear-gradient(135deg, rgba(212,175,55,0.04) 0%, transparent 60%)',
                opacity: 0, transition: 'opacity 0.32s',
                pointerEvents: 'none',
            }} className="pub-hover-glow" />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>

                {/* Year + Badges row */}
                <div style={{
                    display: 'flex', flexWrap: 'wrap',
                    alignItems: 'center', gap: 8,
                    marginBottom: 16,
                }}>
                    {/* Year */}
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        fontSize: 11.5, fontWeight: 500,
                        color: 'var(--gray-400)',
                        fontFamily: 'Inter, sans-serif',
                    }}>
                        <Calendar style={{ width: 12, height: 12, color: 'var(--gold)' }} />
                        {pub.year}
                    </span>

                    {/* Open Access badge */}
                    {pub.openAccess && (
                        <span style={{
                            marginLeft: 'auto',
                            display: 'inline-flex', alignItems: 'center', gap: 5,
                            padding: '3px 10px',
                            borderRadius: 100,
                            fontSize: 9.5, fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase',
                            background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                            color: '#FFFFFF',
                            border: '1px solid rgba(212,175,55,0.20)',
                            fontFamily: 'Inter, sans-serif',
                            boxShadow: '0 2px 8px rgba(11,37,69,0.20)',
                        }}>
                            <Unlock style={{ width: 9, height: 9, color: 'var(--gold)' }} />
                            Open Access
                        </span>
                    )}

                    {/* Closed Access badge */}
                    {!pub.openAccess && (
                        <span style={{
                            marginLeft: 'auto',
                            display: 'inline-flex', alignItems: 'center', gap: 5,
                            padding: '3px 10px',
                            borderRadius: 100,
                            fontSize: 9.5, fontWeight: 600,
                            letterSpacing: '0.10em', textTransform: 'uppercase',
                            background: 'rgba(11,37,69,0.05)',
                            color: 'var(--gray-600)',
                            border: '1px solid rgba(11,37,69,0.10)',
                            fontFamily: 'Inter, sans-serif',
                        }}>
                            <Lock style={{ width: 9, height: 9 }} />
                            Subscription
                        </span>
                    )}

                    {/* Citations badge */}
                    {pub.citations !== undefined && (
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: 5,
                            padding: '3px 10px',
                            borderRadius: 100,
                            fontSize: 9.5, fontWeight: 600,
                            background: 'rgba(212,175,55,0.09)',
                            color: 'var(--navy)',
                            border: '1px solid rgba(212,175,55,0.22)',
                            fontFamily: 'Inter, sans-serif',
                        }}>
                            <Quote style={{ width: 9, height: 9, color: 'var(--gold)' }} />
                            {pub.citations} cited
                        </span>
                    )}
                </div>

                {/* Gold divider */}
                <div style={{
                    height: 1, marginBottom: 14,
                    background: 'linear-gradient(to right, rgba(212,175,55,0.25), transparent)',
                }} />

                {/* Title */}
                <h3
                    className="font-display"
                    style={{
                        fontSize: 'clamp(15px, 1.8vw, 18px)',
                        fontWeight: 700,
                        color: 'var(--navy)',
                        lineHeight: 1.38,
                        letterSpacing: '-0.01em',
                        marginBottom: 12,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        transition: 'color 0.25s',
                    }}
                >
                    {pub.title}
                </h3>

                {/* Authors */}
                <p style={{
                    fontSize: 12.5, fontWeight: 500,
                    color: 'var(--gray-600)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: 6,
                    lineHeight: 1.5,
                }}>
                    {pub.authors}
                </p>

                {/* Journal */}
                <p style={{
                    fontSize: 12.5, fontStyle: 'italic',
                    color: 'var(--navy)',
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0.60,
                    marginBottom: 16,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.5,
                }}>
                    {pub.journal}
                </p>

                {/* DOI link */}
                {pub.doi && (
                    <motion.a
                        href={pub.doi.includes('.') ? `https://doi.org/${pub.doi}` : `https://www.researchgate.net/profile/Baburam-Timsina-3`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            fontSize: 12, fontWeight: 600,
                            color: 'var(--navy)',
                            textDecoration: 'none',
                            fontFamily: 'Inter, sans-serif',
                            opacity: 0.65,
                            marginBottom: 4,
                            transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '1'}
                        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.65'}
                    >
                        View Document
                        <ExternalLink style={{ width: 12, height: 12 }} />
                    </motion.a>
                )}

                {/* Footer: View Details */}
                <div style={{
                    marginTop: 'auto',
                    paddingTop: 16,
                    borderTop: '1px solid rgba(11,37,69,0.07)',
                }}>
                    <motion.button
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.22 }}
                        onClick={(e) => { e.stopPropagation(); onSelect(pub); }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            fontSize: 11.5, fontWeight: 700,
                            letterSpacing: '0.09em', textTransform: 'uppercase',
                            color: 'var(--navy)',
                            background: 'none', border: 'none',
                            padding: 0, cursor: 'pointer',
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
                        View Details
                        <ArrowRight style={{ width: 13, height: 13 }} />
                    </motion.button>
                </div>
            </div>

            <style>{`
                .pub-card:hover .pub-top-bar   { opacity: 1 !important; }
                .pub-card:hover .pub-hover-glow { opacity: 1 !important; }
            `}</style>
        </motion.div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────
export function PublicationsSection() {
    const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

    const sortedPublications = useMemo(() =>
        [...PUBLICATIONS].sort((a, b) => b.year - a.year), []);

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const slides = useMemo(() => {
        const groups: Publication[][] = [];
        for (let i = 0; i < sortedPublications.length; i += ITEMS_PER_SLIDE)
            groups.push(sortedPublications.slice(i, i + ITEMS_PER_SLIDE));
        return groups;
    }, [sortedPublications]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const onSelect   = useCallback(() => { if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap()) }, [emblaApi]);

    const startAutoplay = useCallback(() => {
        if (!emblaApi || slides.length <= 1) return;
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => emblaApi?.scrollNext(), 4000);
    }, [emblaApi, slides.length]);

    const stopAutoplay = useCallback(() => {
        if (autoplayRef.current) { clearInterval(autoplayRef.current); autoplayRef.current = null; }
    }, []);

    useEffect(() => { if (!emblaApi || slides.length <= 1) return; startAutoplay(); return () => stopAutoplay(); }, [emblaApi, slides.length, startAutoplay, stopAutoplay]);
    useEffect(() => { if (!emblaApi) return; onSelect(); emblaApi.on('select', onSelect); return () => { emblaApi.off('select', onSelect); }; }, [emblaApi, onSelect]);
    useEffect(() => { if (emblaApi) { emblaApi.reInit(); setSelectedIndex(0); emblaApi.scrollTo(0); } }, [emblaApi, slides]);

    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
    const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };

    return (
        <section
            id="publications"
            aria-label="Publications"
            style={{
                position: 'relative',
                padding: 'clamp(72px, 10vw, 120px) 0',
                background: 'var(--gray-50)',
                overflow: 'hidden',
            }}
        >
            {/* ── Top divider ──────────────────────────────────── */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.30), rgba(11,37,69,0.12), transparent)',
            }} />

            {/* ── Background ───────────────────────────────────── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{
                    position: 'absolute', top: '-12%', right: '-12%',
                    width: 600, height: 600, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, rgba(26,64,128,0.04) 50%, transparent 75%)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-15%', left: '-12%',
                    width: 680, height: 680, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(11,37,69,0.07) 0%, rgba(26,92,184,0.03) 50%, transparent 70%)',
                }} />
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
                        <BookMarked style={{ width: 12, height: 12, color: 'var(--gold)' }} />
                        <span style={{
                            fontSize: 10.5, fontWeight: 700,
                            letterSpacing: '0.22em', textTransform: 'uppercase',
                            color: 'var(--navy)', fontFamily: 'Inter, sans-serif',
                        }}>
                            Research Output
                        </span>
                        <BookMarked style={{ width: 12, height: 12, color: 'var(--gold)' }} />
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
                        Scholarly{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Publications
                        </span>
                    </h2>

                    {/* Gold rule */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 22 }}>
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
                    <div ref={emblaRef} style={{ overflow: 'hidden', borderRadius: 24 }}>
                        <div style={{ display: 'flex' }}>
                            {slides.map((slide, slideIndex) => (
                                <div key={slideIndex} style={{ flex: '0 0 100%', minWidth: 0, padding: '0 4px' }}>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                                        gap: 20,
                                        alignItems: 'stretch',
                                    }}>
                                        {slide.map((pub) => (
                                            <motion.div key={pub.id} variants={itemVariants} className="pub-card" style={{ height: '100%' }}>
                                                <PublicationCard pub={pub} onSelect={setSelectedPub} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nav Buttons */}
                    {slides.length > 1 && (
                        <>
                            <motion.button
                                onClick={scrollPrev}
                                whileHover={{ scale: 1.10, boxShadow: '0 8px 28px rgba(11,37,69,0.20)' }}
                                whileTap={{ scale: 0.93 }}
                                aria-label="Previous publications"
                                style={{
                                    position: 'absolute', left: -22, top: '50%',
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

                            <motion.button
                                onClick={scrollNext}
                                whileHover={{ scale: 1.10, boxShadow: '0 8px 28px rgba(11,37,69,0.20)' }}
                                whileTap={{ scale: 0.93 }}
                                aria-label="Next publications"
                                style={{
                                    position: 'absolute', right: -22, top: '50%',
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
                        </>
                    )}

                    {/* Dot Indicators */}
                    {slides.length > 1 && (
                        <div style={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center', gap: 10, marginTop: 36,
                        }}>
                            {emblaApi?.scrollSnapList().map((_, index) => (
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
                                        boxShadow: index === selectedIndex ? '0 2px 8px rgba(212,175,55,0.35)' : 'none',
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Count line */}
                <p style={{
                    textAlign: 'center',
                    fontSize: 12.5, fontWeight: 500,
                    color: 'var(--gray-400)',
                    fontFamily: 'Inter, sans-serif',
                    marginTop: 28,
                    letterSpacing: '0.04em',
                }}>
                    Showing all {sortedPublications.length} publications
                </p>
            </div>

            {/* ── Bottom divider ───────────────────────────────── */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(212,175,55,0.20), transparent)',
            }} />

            {/* ── Detail Modal ─────────────────────────────────── */}
            <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
                <DialogContent style={{
                    maxWidth: 640,
                    borderRadius: 24,
                    border: '1.5px solid rgba(212,175,55,0.20)',
                    boxShadow: '0 32px 80px rgba(11,37,69,0.22)',
                    background: '#FFFFFF',
                    padding: 'clamp(28px, 4vw, 44px)',
                    overflow: 'hidden',
                }}>
                    {selectedPub && (
                        <>
                            {/* Modal gold top bar */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                                background: 'linear-gradient(90deg, var(--gold), rgba(212,175,55,0.30), transparent)',
                                borderRadius: '24px 24px 0 0',
                            }} />

                            <DialogHeader style={{ paddingTop: 8 }}>
                                <DialogTitle
                                    className="font-display"
                                    style={{
                                        fontSize: 'clamp(18px, 2.5vw, 24px)',
                                        fontWeight: 700,
                                        color: 'var(--navy)',
                                        lineHeight: 1.35,
                                        letterSpacing: '-0.01em',
                                    }}
                                >
                                    {selectedPub.title}
                                </DialogTitle>
                                <DialogDescription style={{
                                    fontSize: 13, fontWeight: 500,
                                    color: 'var(--gray-600)',
                                    fontFamily: 'Inter, sans-serif',
                                    marginTop: 8,
                                }}>
                                    {selectedPub.authors}
                                </DialogDescription>
                            </DialogHeader>

                            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {/* Journal */}
                                <p style={{
                                    fontSize: 13.5, fontStyle: 'italic',
                                    color: 'var(--navy)', opacity: 0.65,
                                    fontFamily: 'Inter, sans-serif',
                                    borderLeft: '2.5px solid rgba(212,175,55,0.40)',
                                    paddingLeft: 14,
                                    margin: 0,
                                }}>
                                    {selectedPub.journal}
                                </p>

                                {/* Badge row */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                    {/* Year */}
                                    <span style={{
                                        padding: '5px 14px', borderRadius: 100,
                                        fontSize: 11, fontWeight: 600,
                                        background: 'rgba(212,175,55,0.09)',
                                        color: 'var(--navy)',
                                        border: '1px solid rgba(212,175,55,0.22)',
                                        fontFamily: 'Inter, sans-serif',
                                    }}>
                                        {selectedPub.year}
                                    </span>

                                    {selectedPub.openAccess && (
                                        <span style={{
                                            display: 'inline-flex', alignItems: 'center', gap: 5,
                                            padding: '5px 14px', borderRadius: 100,
                                            fontSize: 11, fontWeight: 700,
                                            background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                                            color: '#FFFFFF',
                                            border: '1px solid rgba(212,175,55,0.20)',
                                            fontFamily: 'Inter, sans-serif',
                                        }}>
                                            <Unlock style={{ width: 10, height: 10, color: 'var(--gold)' }} />
                                            Open Access
                                        </span>
                                    )}

                                    {selectedPub.citations !== undefined && (
                                        <span style={{
                                            display: 'inline-flex', alignItems: 'center', gap: 5,
                                            padding: '5px 14px', borderRadius: 100,
                                            fontSize: 11, fontWeight: 600,
                                            background: 'rgba(212,175,55,0.09)',
                                            color: 'var(--navy)',
                                            border: '1px solid rgba(212,175,55,0.22)',
                                            fontFamily: 'Inter, sans-serif',
                                        }}>
                                            <Quote style={{ width: 10, height: 10, color: 'var(--gold)' }} />
                                            {selectedPub.citations} Citations
                                        </span>
                                    )}
                                </div>

                                {/* CTA */}
                                {selectedPub.doi && (
                                    <motion.a
                                        href={selectedPub.doi.includes('.') ? `https://doi.org/${selectedPub.doi}` : `https://www.researchgate.net/profile/Baburam-Timsina-3`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(11,37,69,0.28)' }}
                                        whileTap={{ scale: 0.97 }}
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: 8,
                                            padding: '11px 24px',
                                            borderRadius: 100,
                                            background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
                                            border: '1px solid rgba(212,175,55,0.22)',
                                            color: '#FFFFFF',
                                            fontSize: 13, fontWeight: 600,
                                            textDecoration: 'none',
                                            fontFamily: 'Inter, sans-serif',
                                            boxShadow: '0 4px 18px rgba(11,37,69,0.28)',
                                            alignSelf: 'flex-start',
                                            transition: 'box-shadow 0.25s',
                                        }}
                                    >
                                        <ExternalLink style={{ width: 14, height: 14 }} />
                                        View Source Document
                                    </motion.a>
                                )}
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}