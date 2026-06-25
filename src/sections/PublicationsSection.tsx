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
// import { Tabs } from "@/components/ui/tabs";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import useEmblaCarousel from "embla-carousel-react";
// import { PUBLICATIONS, PUBLICATION_YEARS } from "@/data/publications";
// import { GOOGLE_SCHOLAR_URL } from "@/data/profile";
// import type { PublicationCategory, SortOption } from "@/types";

// // const CATEGORY_LABELS: Record<PublicationCategory, string> = {
// //   all: 'All Publications',
// //   journal: 'Journal Articles',
// //   conference: 'Conference Papers',
// //   book: 'Book Chapters',
// //   report: 'Research Reports',
// // };

// const ITEMS_PER_SLIDE = 3;

// // ─── Publication Card (green-accented, matching NewsSection) ───
// function PublicationCard({
//   pub,
//   onSelect,
// }: {
//   pub: (typeof PUBLICATIONS)[0];
//   onSelect: (pub: (typeof PUBLICATIONS)[0]) => void;
// }) {
//   return (
//     <div
//       className="group relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 transition-all duration-300 hover:shadow-xl hover:shadow-[#0B2545]/10 hover:border-[#0F7A5A]/30 hover:-translate-y-1 p-6 flex flex-col cursor-pointer"
//       onClick={() => onSelect(pub)}
//     >
//       {/* Subtle green gradient overlay on hover */}
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0F7A5A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

//       {/* Top left green accent bar */}
//       <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-[#0F7A5A] to-transparent rounded-tl-2xl" />

//       <div className="relative z-10 flex-1 flex flex-col">
//         {/* Tags row */}
//         <div className="flex flex-wrap items-center gap-2 mb-4">
//           {/* <Badge
//             variant="outline"
//             className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-[#0F7A5A] text-white border-none rounded-full"
//           >
//             {CATEGORY_LABELS[pub.category]}
//           </Badge> */}

//           <span className="text-xs text-[#4A5A6A]/60 flex items-center gap-1 ml-auto">
//             <Calendar className="h-3 w-3 text-[#0F7A5A]" />
//             <span className="font-medium text-[#4A5A6A]/70">{pub.year}</span>
//           </span>

//           {pub.openAccess && (
//             <Badge className="bg-[#0F7A5A] text-white text-[10px] uppercase tracking-wider rounded-full px-3 py-1">
//               Open Access
//             </Badge>
//           )}

//           {pub.citations !== undefined && (
//             <Badge
//               variant="secondary"
//               className="text-[#0F7A5A] bg-[#0F7A5A]/10 rounded-full px-3 py-1 text-[10px] border border-[#0F7A5A]/20"
//             >
//               <Quote className="h-3 w-3 mr-1" />
//               {pub.citations}
//             </Badge>
//           )}
//         </div>

//         {/* Title with green hover */}
//         {/* <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0B2545] mb-3 leading-snug line-clamp-3 group-hover:text-[#0F7A5A] transition-colors duration-300">
//           {pub.title}
//         </h3> */}

//         {/* Authors */}
//         <p className="text-sm text-[#4A5A6A] font-medium">{pub.authors}</p>

//         {/* Journal / venue */}
//         <p className="text-sm text-[#0F7A5A]/80 italic mt-1 line-clamp-2">
//           {pub.journal}
//         </p>

//         {/* DOI link */}
//         {pub.doi && (
//           <a
//             href={`https://doi.org/${pub.doi}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 text-sm font-medium text-[#0F7A5A] hover:text-[#0B6A4E] mt-4 transition-colors"
//             onClick={(e) => e.stopPropagation()}
//           >
//             View DOI
//             <ExternalLink className="h-3.5 w-3.5" />
//           </a>
//         )}
//       </div>

//       {/* "View Details" button */}
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
//   const [search, setSearch] = useState("");
//   const [yearFilter, setYearFilter] = useState<string>("all");
//   const [sort, setSort] = useState<SortOption>("year-desc");
//   const [activeTab, setActiveTab] = useState<PublicationCategory>("all");
//   const [selectedPub, setSelectedPub] = useState<
//     (typeof PUBLICATIONS)[0] | null
//   >(null);

//   // ── Filter & sort data ──
//   const filtered = useMemo(() => {
//     let results = [...PUBLICATIONS];

//     if (activeTab !== "all") {
//       results = results.filter((p) => p.category === activeTab);
//     }
//     if (yearFilter !== "all") {
//       results = results.filter((p) => p.year === Number(yearFilter));
//     }
//     if (search.trim()) {
//       const q = search.toLowerCase();
//       results = results.filter(
//         (p) =>
//           p.title.toLowerCase().includes(q) ||
//           p.authors.toLowerCase().includes(q) ||
//           (p.journal && p.journal.toLowerCase().includes(q)),
//       );
//     }

//     results.sort((a, b) => {
//       switch (sort) {
//         case "year-asc":
//           return a.year - b.year;
//         case "citations-desc":
//           return (b.citations ?? 0) - (a.citations ?? 0);
//         case "title-asc":
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
//     align: "start",
//     slidesToScroll: 1,
//     breakpoints: {
//       "(min-width: 768px)": { slidesToScroll: 2 },
//       "(min-width: 1024px)": { slidesToScroll: 3 },
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
//   const scrollPrev = useCallback(
//     () => emblaApi && emblaApi.scrollPrev(),
//     [emblaApi],
//   );
//   const scrollNext = useCallback(
//     () => emblaApi && emblaApi.scrollNext(),
//     [emblaApi],
//   );

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
//     emblaApi.on("select", onSelect);
//     return () => {
//       emblaApi.off("select", onSelect);
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
//       transition: { duration: 0.4, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="publications"
//       className="relative py-24 bg-[#F8F9FA] overflow-hidden"
//     >
//       {/* Background Decor – Green & Navy Orbs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#0F7A5A]/20 via-[#0B2545]/5 to-transparent rounded-full blur-3xl" />
//         <div className="absolute bottom-0 -left-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#0B2545]/10 via-[#0F7A5A]/5 to-transparent rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0F7A5A]/5 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         {/* ─── Section Header ─── */}
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

//         {/* ─── Filter Controls ─── */}
//         <div className="mb-10 flex flex-col md:flex-row gap-4 items-end md:items-center justify-between">
//           <Tabs
//             value={activeTab}
//             onValueChange={(v) => setActiveTab(v as PublicationCategory)}
//             className="w-full md:w-auto"
//           >
//             {/* <TabsList className="bg-white/60 backdrop-blur-sm border border-white/60 rounded-2xl p-1 shadow-sm">
//               {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
//                 <TabsTrigger
//                   key={key}
//                   value={key}
//                   className="data-[state=active]:bg-[#0F7A5A] data-[state=active]:text-white rounded-xl transition-all duration-300 text-sm font-medium px-4 py-2"
//                 >
//                   {label}
//                 </TabsTrigger>
//               ))}
//             </TabsList> */}
//           </Tabs>

//           <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
//             {/* <div className="relative flex-1 md:flex-none">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#4A5A6A]/40" />
//               <Input
//                 placeholder="Search publications..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="pl-10 pr-4 py-2 bg-white/80 backdrop-blur-sm border-white/60 rounded-full focus:border-[#0F7A5A] focus:ring-[#0F7A5A]/30 text-sm w-full md:w-56"
//               />
//             </div> */}
//           </div>
//         </div>

//         {/* ─── Carousel ─── */}
//         {filtered.length === 0 ? (
//           <div className="text-center py-20 text-[#4A5A6A] bg-white/60 backdrop-blur-sm rounded-2xl border border-white/60">
//             No publications found matching your criteria.
//           </div>
//         ) : (
//           <>
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-40px" }}
//               className="relative"
//               onMouseEnter={stopAutoplay}
//               onMouseLeave={startAutoplay}
//             >
//               <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
//                 <div className="flex">
//                   {slides.map((slide, slideIndex) => (
//                     <div
//                       key={slideIndex}
//                       className="flex-[0_0_100%] min-w-0 px-3"
//                     >
//                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {slide.map((pub) => (
//                           <motion.div
//                             key={pub.id}
//                             variants={itemVariants}
//                             className="h-full"
//                           >
//                             <PublicationCard
//                               pub={pub}
//                               onSelect={setSelectedPub}
//                             />
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Navigation Buttons – Green Accent */}
//               {slides.length > 1 && (
//                 <>
//                   <button
//                     onClick={scrollPrev}
//                     className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white/90 backdrop-blur-sm hover:bg-white border border-[#0F7A5A]/30 hover:border-[#0F7A5A] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 group"
//                     aria-label="Previous"
//                   >
//                     <ChevronLeft className="h-5 w-5 text-[#0B2545] group-hover:text-[#0F7A5A] transition-colors" />
//                   </button>
//                   <button
//                     onClick={scrollNext}
//                     className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white/90 backdrop-blur-sm hover:bg-white border border-[#0F7A5A]/30 hover:border-[#0F7A5A] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 group"
//                     aria-label="Next"
//                   >
//                     <ChevronRight className="h-5 w-5 text-[#0B2545] group-hover:text-[#0F7A5A] transition-colors" />
//                   </button>
//                 </>
//               )}

//               {/* Dot Indicators – Green */}
//               {slides.length > 1 && (
//                 <div className="flex justify-center gap-3 mt-10">
//                   {emblaApi &&
//                     emblaApi
//                       .scrollSnapList()
//                       .map((_, index) => (
//                         <button
//                           key={index}
//                           onClick={() => emblaApi.scrollTo(index)}
//                           className={`h-2.5 rounded-full transition-all duration-300 ${
//                             index === selectedIndex
//                               ? "w-10 bg-[#0F7A5A] shadow-md"
//                               : "w-2.5 bg-[#0F7A5A]/30 hover:bg-[#0F7A5A]/60 hover:w-6"
//                           }`}
//                           aria-label={`Go to slide group ${index + 1}`}
//                         />
//                       ))}
//                 </div>
//               )}
//             </motion.div>

//             <p className="text-center text-sm text-[#4A5A6A]/70 mt-8">
//               Showing {filtered.length} of {PUBLICATIONS.length} publications
//             </p>
//           </>
//         )}
//       </div>

//       {/* ─── Publication Detail Dialog (Green Accents) ─── */}
//       <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
//         <DialogContent className="max-w-2xl rounded-2xl border border-[#0F7A5A]/20 shadow-2xl">
//           {selectedPub && (
//             <>
//               <DialogHeader>
//                 <DialogTitle className="font-serif text-2xl text-[#0B2545] leading-tight">
//                   {selectedPub.title}
//                 </DialogTitle>
//                 <DialogDescription className="text-[#0F7A5A] font-medium">
//                   {selectedPub.authors}
//                 </DialogDescription>
//               </DialogHeader>

//               <div className="space-y-6 pt-4">
//                 <p className="italic text-[#4A5A6A]">{selectedPub.journal}</p>

//                 <div className="flex flex-wrap gap-2">
//                   <Badge
//                     variant="outline"
//                     className="border-[#0F7A5A]/30 text-[#0F7A5A]"
//                   >
//                     {selectedPub.year}
//                   </Badge>
//                   <Badge
//                     variant="outline"
//                     className="border-[#0F7A5A]/30 text-[#0F7A5A]"
//                   >
//                     {CATEGORY_LABELS[selectedPub.category]}
//                   </Badge>
//                   {selectedPub.openAccess && (
//                     <Badge className="bg-[#0F7A5A] text-white">
//                       Open Access
//                     </Badge>
//                   )}
//                   {selectedPub.citations !== undefined && (
//                     <Badge
//                       variant="secondary"
//                       className="bg-[#0F7A5A]/10 text-[#0F7A5A] border border-[#0F7A5A]/20"
//                     >
//                       {selectedPub.citations} Citations
//                     </Badge>
//                   )}
//                 </div>

//                 {selectedPub.doi && (
//                   <Button
//                     asChild
//                     className="bg-[#0F7A5A] hover:bg-[#0B6A4E] rounded-full px-6 shadow-md hover:shadow-lg transition-all"
//                   >
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

// --- Types Alignment ---
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

// --- Real Scholar & ResearchGate Dataset ---
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
  }
];

const ITEMS_PER_SLIDE = 3;

// ─── Publication Card (green-accented) ───
function PublicationCard({
  pub,
  onSelect,
}: {
  pub: Publication;
  onSelect: (pub: Publication) => void;
}) {
  return (
    <div
      className="group relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 transition-all duration-300 hover:shadow-xl hover:shadow-[#0B2545]/10 hover:border-[#0F7A5A]/30 hover:-translate-y-1 p-6 flex flex-col cursor-pointer"
      onClick={() => onSelect(pub)}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0F7A5A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-[#0F7A5A] to-transparent rounded-tl-2xl" />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs text-[#4A5A6A]/60 flex items-center gap-1">
            <Calendar className="h-3 w-3 text-[#0F7A5A]" />
            <span className="font-medium text-[#4A5A6A]/70">{pub.year}</span>
          </span>

          {pub.openAccess && (
            <Badge className="bg-[#0F7A5A] text-white text-[10px] uppercase tracking-wider rounded-full px-3 py-1 border-none ml-auto">
              Open Access
            </Badge>
          )}

          {pub.citations !== undefined && (
            <Badge
              variant="secondary"
              className={`text-[#0F7A5A] bg-[#0F7A5A]/10 rounded-full px-3 py-1 text-[10px] border border-[#0F7A5A]/20 ${!pub.openAccess ? 'ml-auto' : ''}`}
            >
              <Quote className="h-3 w-3 mr-1" />
              {pub.citations}
            </Badge>
          )}
        </div>

        <h3 className="font-serif text-xl font-bold text-[#0B2545] mb-3 leading-snug line-clamp-3 group-hover:text-[#0F7A5A] transition-colors duration-300">
          {pub.title}
        </h3>

        <p className="text-sm text-[#4A5A6A] font-medium">{pub.authors}</p>
        <p className="text-sm text-[#0F7A5A]/80 italic mt-1 line-clamp-2">
          {pub.journal}
        </p>

        {pub.doi && (
          <a
            href={pub.doi.includes(".") ? `https://doi.org/${pub.doi}` : `https://www.researchgate.net/profile/Baburam-Timsina-3`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0F7A5A] hover:text-[#0B6A4E] mt-4 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            View Document
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

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
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

  // Directly pass sorted static dataset
  const sortedPublications = useMemo(() => {
    return [...PUBLICATIONS].sort((a, b) => b.year - a.year);
  }, []);

  // Carousel framework setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const slides = useMemo(() => {
    const groups = [];
    for (let i = 0; i < sortedPublications.length; i += ITEMS_PER_SLIDE) {
      groups.push(sortedPublications.slice(i, i + ITEMS_PER_SLIDE));
    }
    return groups;
  }, [sortedPublications]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

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

  useEffect(() => {
    if (!emblaApi || slides.length <= 1) return;
    startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi, slides.length, startAutoplay, stopAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setSelectedIndex(0);
      emblaApi.scrollTo(0);
    }
  }, [emblaApi, slides]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="publications" className="relative py-24 bg-[#F8F9FA] overflow-hidden">
      {/* Background UI Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#0F7A5A]/20 via-[#0B2545]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#0B2545]/10 via-[#0F7A5A]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
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
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0F7A5A]">
                Research
              </span>
              <div className="w-px h-6 bg-[#0F7A5A]/30" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight">
                Publications
              </h2>
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-[#0F7A5A]/40 hidden lg:block" />
          </div>
          <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-[#0F7A5A] to-[#0B2545] rounded-full" />
        </motion.div>

        {/* Carousel Framework */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="flex-[0_0_100%] min-w-0 px-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {slide.map((pub) => (
                      <motion.div key={pub.id} variants={itemVariants} className="h-full">
                        <PublicationCard pub={pub} onSelect={setSelectedPub} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Elements */}
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

          {/* Interactive Slide Dots */}
          {slides.length > 1 && (
            <div className="flex justify-center gap-3 mt-10">
              {emblaApi &&
                emblaApi
                  .scrollSnapList()
                  .map((_, index) => (
                    <button
                      key={index}
                      onClick={() => emblaApi.scrollTo(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === selectedIndex
                          ? "w-10 bg-[#0F7A5A] shadow-md"
                          : "w-2.5 bg-[#0F7A5A]/30 hover:bg-[#0F7A5A]/60 hover:w-6"
                      }`}
                      aria-label={`Go to slide group ${index + 1}`}
                    />
                  ))}
            </div>
          )}
        </motion.div>

        <p className="text-center text-sm text-[#4A5A6A]/70 mt-8">
          Showing all {sortedPublications.length} publications
        </p>
      </div>

      {/* Modal Detail Overlay */}
      <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
        <DialogContent className="max-w-2xl rounded-2xl border border-[#0F7A5A]/20 shadow-2xl bg-white">
          {selectedPub && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-[#0B2545] leading-tight">
                  {selectedPub.title}
                </DialogTitle>
                <DialogDescription className="text-[#0F7A5A] font-medium mt-2">
                  {selectedPub.authors}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                <p className="italic text-[#4A5A6A]">{selectedPub.journal}</p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-[#0F7A5A]/30 text-[#0F7A5A]">
                    Year: {selectedPub.year}
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
                  <Button asChild className="bg-[#0F7A5A] hover:bg-[#0B6A4E] text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all mt-4">
                    <a
                      href={selectedPub.doi.includes(".") ? `https://doi.org/${selectedPub.doi}` : `https://www.researchgate.net/profile/Baburam-Timsina-3`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Source Document
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