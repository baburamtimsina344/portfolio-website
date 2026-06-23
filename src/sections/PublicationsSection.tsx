// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Quote, Search, Filter } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
// import { SectionHeading } from "@/components/common/SectionHeading";
// import { ScrollReveal } from "@/components/common/ScrollReveal";
// import { PUBLICATIONS, PUBLICATION_YEARS } from "@/data/publications";
// import { GOOGLE_SCHOLAR_URL } from "@/data/profile";
// import type { PublicationCategory, SortOption } from "@/types";

// const CATEGORY_LABELS: Record<PublicationCategory, string> = {
//   all: "All",
//   journal: "Journal Articles",
//   conference: "Conference Papers",
//   book: "Book Chapters",
//   report: "Research Reports",
// };

// function PublicationCard({ pub, onSelect }: { pub: (typeof PUBLICATIONS)[0]; onSelect: (pub: (typeof PUBLICATIONS)[0]) => void }) {
//   return (
//     <Card className="glass-card border-0 hover-lift group cursor-pointer" onClick={() => onSelect(pub)}>
//       <CardContent className="p-6">
//         <div className="flex flex-wrap items-center gap-2 mb-3">
//           <Badge variant="outline">{pub.year}</Badge>
//           <Badge variant="secondary">{CATEGORY_LABELS[pub.category]}</Badge>
//           {pub.openAccess && <Badge variant="success">Open Access</Badge>}
//           {pub.citations !== undefined && (
//             <Badge variant="accent" className="gap-1">
//               <Quote className="h-3 w-3" />
//               {pub.citations} citations
//             </Badge>
//           )}
//         </div>
//         <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
//           {pub.title}
//         </h3>
//         <p className="text-sm text-muted-foreground mt-2">{pub.authors}</p>
//         <p className="text-sm text-primary/80 mt-1 italic">{pub.journal}</p>
//         {pub.doi && (
//           <a
//             href={`https://doi.org/${pub.doi}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-xs text-primary mt-3 hover:underline"
//           >
//             DOI: {pub.doi} <ExternalLink className="h-3 w-3" />
//           </a>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

// export function PublicationsSection() {
//   const [search, setSearch] = useState("");
//   const [yearFilter, setYearFilter] = useState<string>("all");
//   const [sort, setSort] = useState<SortOption>("year-desc");
//   const [activeTab, setActiveTab] = useState<PublicationCategory>("all");
//   const [selectedPub, setSelectedPub] = useState<(typeof PUBLICATIONS)[0] | null>(null);

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
//           p.journal.toLowerCase().includes(q)
//       );
//     }

//     results.sort((a, b) => {
//       switch (sort) {
//         case "year-asc": return a.year - b.year;
//         case "citations-desc": return (b.citations ?? 0) - (a.citations ?? 0);
//         case "title-asc": return a.title.localeCompare(b.title);
//         default: return b.year - a.year;
//       }
//     });

//     return results;
//   }, [search, yearFilter, sort, activeTab]);

//   return (
//     <section id="publications" className="section-padding bg-background relative">
//       <div className="container-wide">
//         <SectionHeading
//           label="Publications"
//           title="Research Output"
//           subtitle="Peer-reviewed journal articles, conference papers, book chapters, and research reports."
//         />

//         <ScrollReveal>
//           <div className="flex flex-col lg:flex-row gap-4 mb-8">
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search publications..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="pl-10"
//                 aria-label="Search publications"
//               />
//             </div>
//             <div className="flex flex-wrap gap-3">
//               <Select value={yearFilter} onValueChange={setYearFilter}>
//                 <SelectTrigger className="w-[140px]" aria-label="Filter by year">
//                   <Filter className="h-4 w-4 mr-1" />
//                   <SelectValue placeholder="Year" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Years</SelectItem>
//                   {PUBLICATION_YEARS.map((y) => (
//                     <SelectItem key={y} value={String(y)}>{y}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
//                 <SelectTrigger className="w-[160px]" aria-label="Sort publications">
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="year-desc">Newest First</SelectItem>
//                   <SelectItem value="year-asc">Oldest First</SelectItem>
//                   <SelectItem value="citations-desc">Most Cited</SelectItem>
//                   <SelectItem value="title-asc">Title A-Z</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button variant="outline" asChild>
//                 <a href={GOOGLE_SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
//                   <ExternalLink className="h-4 w-4" />
//                   Google Scholar
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </ScrollReveal>

//         <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as PublicationCategory)}>
//           <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-transparent p-0 mb-8">
//             {(Object.keys(CATEGORY_LABELS) as PublicationCategory[]).map((cat) => (
//               <TabsTrigger
//                 key={cat}
//                 value={cat}
//                 className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4"
//               >
//                 {CATEGORY_LABELS[cat]}
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           {(Object.keys(CATEGORY_LABELS) as PublicationCategory[]).map((cat) => (
//             <TabsContent key={cat} value={cat} className="mt-0">
//               {filtered.length === 0 ? (
//                 <p className="text-center text-muted-foreground py-12">No publications found matching your criteria.</p>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="space-y-4"
//                 >
//                   {filtered.map((pub, i) => (
//                     <motion.div
//                       key={pub.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.05 }}
//                     >
//                       <PublicationCard pub={pub} onSelect={setSelectedPub} />
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               )}
//             </TabsContent>
//           ))}
//         </Tabs>

//         <p className="text-sm text-muted-foreground text-center mt-8">
//           Showing {filtered.length} of {PUBLICATIONS.length} publications
//         </p>

//         <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
//           <DialogContent className="max-w-2xl">
//             {selectedPub && (
//               <>
//                 <DialogHeader>
//                   <DialogTitle className="text-xl leading-snug">{selectedPub.title}</DialogTitle>
//                   <DialogDescription>{selectedPub.authors}</DialogDescription>
//                 </DialogHeader>
//                 <div className="space-y-4 pt-2">
//                   <p className="text-sm italic text-primary/80">{selectedPub.journal}</p>
//                   <div className="flex flex-wrap gap-2">
//                     <Badge variant="outline">{selectedPub.year}</Badge>
//                     <Badge variant="secondary">{CATEGORY_LABELS[selectedPub.category]}</Badge>
//                     {selectedPub.openAccess && <Badge variant="success">Open Access</Badge>}
//                     {selectedPub.citations !== undefined && (
//                       <Badge variant="accent">{selectedPub.citations} citations</Badge>
//                     )}
//                   </div>
//                   {selectedPub.doi && (
//                     <Button variant="outline" asChild>
//                       <a href={`https://doi.org/${selectedPub.doi}`} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-4 w-4" />
//                         View on DOI
//                       </a>
//                     </Button>
//                   )}
//                 </div>
//               </>
//             )}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </section>
//   );
// }


// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Quote, Search, Filter, Calendar } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import { SectionHeading } from "@/components/common/SectionHeading";
// import { ScrollReveal } from "@/components/common/ScrollReveal";
// import { PUBLICATIONS, PUBLICATION_YEARS } from "@/data/publications";
// import { GOOGLE_SCHOLAR_URL } from "@/data/profile";
// import type { PublicationCategory, SortOption } from "@/types";

// const CATEGORY_LABELS: Record<PublicationCategory, string> = {
//   all: "All",
//   journal: "Journal Articles",
//   conference: "Conference Papers",
//   book: "Book Chapters",
//   report: "Research Reports",
// };

// const ITEMS_PER_SLIDE = 3;

// function PublicationCard({
//   pub,
//   onSelect,
// }: {
//   pub: (typeof PUBLICATIONS)[0];
//   onSelect: (pub: (typeof PUBLICATIONS)[0]) => void;
// }) {
//   return (
//     <Card
//       className="group border-4 border-[#003D6B] p-6 bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full min-h-[320px] flex flex-col"
//       onClick={() => onSelect(pub)}
//     >
//       {/* Top accent bar */}
//       <div className="h-[2px] bg-[#FF00FF] mb-4" />

//       {/* Meta badges */}
//       <div className="flex flex-wrap items-center gap-2 mb-3">
//         <span className="text-[11px] font-bold text-white bg-[#003D6B] px-2 py-1 tracking-wide">
//           {CATEGORY_LABELS[pub.category]}
//         </span>
//         <span className="text-xs text-gray-500 flex items-center gap-1">
//           <Calendar className="h-3 w-3" />
//           {pub.year}
//         </span>
//         {pub.openAccess && (
//           <span className="text-[11px] font-bold text-white bg-green-600 px-2 py-1 tracking-wide">
//             Open Access
//           </span>
//         )}
//         {pub.citations !== undefined && (
//           <span className="text-[11px] font-bold text-[#003D6B] bg-[#00D9FF]/20 px-2 py-1 tracking-wide flex items-center gap-1">
//             <Quote className="h-3 w-3" />
//             {pub.citations} citations
//           </span>
//         )}
//       </div>

//       {/* Title */}
//       <h3 className="text-lg font-serif font-bold text-[#003D6B] mb-2 leading-snug group-hover:text-[#FF00FF] transition-colors flex-1">
//         {pub.title}
//       </h3>

//       {/* Authors */}
//       <p className="text-sm text-gray-600">{pub.authors}</p>

//       {/* Journal */}
//       <p className="text-sm text-[#003D6B]/80 italic mt-1">{pub.journal}</p>

//       {/* DOI link */}
//       {pub.doi && (
//         <a
//           href={`https://doi.org/${pub.doi}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D9FF] hover:text-[#FF00FF] transition-colors mt-3"
//           onClick={(e) => e.stopPropagation()}
//         >
//           DOI: {pub.doi}
//           <ExternalLink className="h-3 w-3" />
//         </a>
//       )}
//     </Card>
//   );
// }

// export function PublicationsSection() {
//   const [search, setSearch] = useState("");
//   const [yearFilter, setYearFilter] = useState<string>("all");
//   const [sort, setSort] = useState<SortOption>("year-desc");
//   const [activeTab, setActiveTab] = useState<PublicationCategory>("all");
//   const [selectedPub, setSelectedPub] = useState<(typeof PUBLICATIONS)[0] | null>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

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
//           p.journal.toLowerCase().includes(q)
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

//   const carouselSlides = useMemo(() => {
//     const slides = [];
//     for (let i = 0; i < filtered.length; i += ITEMS_PER_SLIDE) {
//       slides.push(filtered.slice(i, i + ITEMS_PER_SLIDE));
//     }
//     return slides;
//   }, [filtered]);

//   const autoplayPlugin = useMemo(
//     () =>
//       Autoplay({
//         delay: 5000,
//         stopOnInteraction: true,
//         stopOnMouseEnter: true,
//       }),
//     []
//   );

//   const handleSlideChange = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section id="publications" className="py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-8">
//         {/* Section Header – identical to NewsSection */}
//         <div className="mb-14">
//           <div className="flex items-baseline gap-4 mb-4">
//             <span className="text-sm font-bold text-[#FF00FF] tracking-wider">
//               PUBLICATIONS
//             </span>
//             <div className="flex-1 h-[3px] bg-[#FF00FF]" />
//           </div>
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#003D6B] mb-4">
//             Research Output
//           </h2>

//         </div>

//         {/* Filters – kept but can be toggled on/off */}
//         <ScrollReveal>
//           <div className="flex flex-col lg:flex-row gap-4 mb-8">
//             <div className="relative flex-1">
//               {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search publications..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="pl-10 border-[#003D6B] focus:border-[#FF00FF]"
//                 aria-label="Search publications"
//               /> */}
//             </div>
//             <div className="flex flex-wrap gap-3">
//               <Select value={yearFilter} onValueChange={setYearFilter}>
//                 <SelectTrigger className="w-[140px] border-[#003D6B] text-[#003D6B]">
//                   <Filter className="h-4 w-4 mr-1" />
//                   <SelectValue placeholder="Year" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Years</SelectItem>
//                   {PUBLICATION_YEARS.map((y) => (
//                     <SelectItem key={y} value={String(y)}>
//                       {y}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
//                 <SelectTrigger className="w-[160px] border-[#003D6B] text-[#003D6B]">
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="year-desc">Newest First</SelectItem>
//                   <SelectItem value="year-asc">Oldest First</SelectItem>
//                   <SelectItem value="citations-desc">Most Cited</SelectItem>
//                   <SelectItem value="title-asc">Title A-Z</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button
//                 variant="outline"
//                 asChild
//                 className="border-[#003D6B] text-[#003D6B] hover:bg-[#003D6B] hover:text-white rounded-full"
//               >
//                 <a href={GOOGLE_SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
//                   <ExternalLink className="h-4 w-4" />
//                   Google Scholar
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </ScrollReveal>

//         {/* Tabs – fully functional */}
//         <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as PublicationCategory)}>
//           {/* <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-transparent p-0 mb-8">
//             {(Object.keys(CATEGORY_LABELS) as PublicationCategory[]).map((cat) => (
//               <TabsTrigger
//                 key={cat}
//                 value={cat}
//                 className="data-[state=active]:bg-[#003D6B] data-[state=active]:text-white rounded-full px-4 border border-[#003D6B] text-[#003D6B]"
//               >
//                 {CATEGORY_LABELS[cat]}
//               </TabsTrigger>
//             ))}
//           </TabsList> */}

//           <TabsContent value={activeTab} className="mt-0">
//             {filtered.length === 0 ? (
//               <p className="text-center text-muted-foreground py-12">
//                 No publications found matching your criteria.
//               </p>
//             ) : (
//               <>
//                 {/* Carousel – now with same min-height as NewsSection */}
//                 <div className="relative">
//                   <Carousel
//                     opts={{
//                       align: "start",
//                       loop: true,
//                     }}
//                     plugins={[autoplayPlugin]}
//                     className="w-full"
//                     onSelect={(api) => {
//                       if (api) {
//                         const index = api.selectedScrollSnap();
//                         handleSlideChange(index);
//                       }
//                     }}
//                   >
//                     <CarouselContent className="-ml-4 min-h-[480px]">
//                       {carouselSlides.map((slide, slideIndex) => (
//                         <CarouselItem key={slideIndex} className="pl-4 basis-full">
//                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
//                             {slide.map((pub) => (
//                               <PublicationCard
//                                 key={pub.id}
//                                 pub={pub}
//                                 onSelect={setSelectedPub}
//                               />
//                             ))}
//                           </div>
//                         </CarouselItem>
//                       ))}
//                     </CarouselContent>

//                     <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-white border-2 border-[#003D6B] text-[#003D6B] hover:bg-[#003D6B] hover:text-white rounded-full h-10 w-10" />
//                     <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-white border-2 border-[#003D6B] text-[#003D6B] hover:bg-[#003D6B] hover:text-white rounded-full h-10 w-10" />
//                   </Carousel>

//                   {/* Dot indicators */}
//                   {carouselSlides.length > 1 && (
//                     <div className="flex justify-center gap-3 mt-10">
//                       {carouselSlides.map((_, idx) => (
//                         <button
//                           key={idx}
//                           className={`h-2 rounded-full transition-all duration-300 ${
//                             idx === currentSlide
//                               ? "w-8 bg-[#FF00FF]"
//                               : "w-2 bg-[#003D6B]/30 hover:bg-[#003D6B]/60"
//                           }`}
//                           aria-label={`Go to slide ${idx + 1}`}
//                           onClick={() => {
//                             const carouselEl = document.querySelector(
//                               "[data-carousel]"
//                             ) as HTMLElement;
//                             if (carouselEl) {
//                               const event = new CustomEvent("carouselSelect", {
//                                 detail: { index: idx },
//                               });
//                               carouselEl.dispatchEvent(event);
//                             }
//                           }}
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <p className="text-sm text-muted-foreground text-center mt-6">
//                   Showing {filtered.length} of {PUBLICATIONS.length} publications
//                 </p>
//               </>
//             )}
//           </TabsContent>
//         </Tabs>

//         {/* Detail Dialog */}
//         <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
//           <DialogContent className="max-w-2xl">
//             {selectedPub && (
//               <>
//                 <DialogHeader>
//                   <DialogTitle className="text-xl leading-snug">{selectedPub.title}</DialogTitle>
//                   <DialogDescription>{selectedPub.authors}</DialogDescription>
//                 </DialogHeader>
//                 <div className="space-y-4 pt-2">
//                   <p className="text-sm italic text-primary/80">{selectedPub.journal}</p>
//                   <div className="flex flex-wrap gap-2">
//                     <Badge variant="outline">{selectedPub.year}</Badge>
//                     <Badge variant="secondary">{CATEGORY_LABELS[selectedPub.category]}</Badge>
//                     {selectedPub.openAccess && <Badge variant="success">Open Access</Badge>}
//                     {selectedPub.citations !== undefined && (
//                       <Badge variant="accent">{selectedPub.citations} citations</Badge>
//                     )}
//                   </div>
//                   {selectedPub.doi && (
//                     <Button variant="outline" asChild>
//                       <a
//                         href={`https://doi.org/${selectedPub.doi}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <ExternalLink className="h-4 w-4" />
//                         View on DOI
//                       </a>
//                     </Button>
//                   )}
//                 </div>
//               </>
//             )}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </section>
//   );
// }




// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Quote, Search, Filter, Calendar } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import { SectionHeading } from "@/components/common/SectionHeading";
// import { ScrollReveal } from "@/components/common/ScrollReveal";
// import { PUBLICATIONS, PUBLICATION_YEARS } from "@/data/publications";
// import { GOOGLE_SCHOLAR_URL } from "@/data/profile";
// import type { PublicationCategory, SortOption } from "@/types";

// const CATEGORY_LABELS: Record<PublicationCategory, string> = {
//   all: "All",
//   journal: "Journal Articles",
//   conference: "Conference Papers",
//   book: "Book Chapters",
//   report: "Research Reports",
// };

// const ITEMS_PER_SLIDE = 3;

// function PublicationCard({
//   pub,
//   onSelect,
// }: {
//   pub: (typeof PUBLICATIONS)[0];
//   onSelect: (pub: (typeof PUBLICATIONS)[0]) => void;
// }) {
//   return (
//     <Card
//       className="group border-4 border-[#003D6B] p-6 bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full min-h-[320px] flex flex-col"
//       onClick={() => onSelect(pub)}
//     >
//       <div className="h-[2px] bg-[#FF00FF] mb-4" />

//       <div className="flex flex-wrap items-center gap-2 mb-3">
//         <span className="text-[11px] font-bold text-white bg-[#003D6B] px-2 py-1 tracking-wide">
//           {CATEGORY_LABELS[pub.category]}
//         </span>
//         <span className="text-xs text-gray-500 flex items-center gap-1">
//           <Calendar className="h-3 w-3" />
//           {pub.year}
//         </span>
//         {pub.openAccess && (
//           <span className="text-[11px] font-bold text-white bg-green-600 px-2 py-1 tracking-wide">
//             Open Access
//           </span>
//         )}
//         {pub.citations !== undefined && (
//           <span className="text-[11px] font-bold text-[#003D6B] bg-[#00D9FF]/20 px-2 py-1 tracking-wide flex items-center gap-1">
//             <Quote className="h-3 w-3" />
//             {pub.citations} citations
//           </span>
//         )}
//       </div>

//       <h3 className="text-lg font-serif font-bold text-[#003D6B] mb-2 leading-snug group-hover:text-[#FF00FF] transition-colors flex-1">
//         {pub.title}
//       </h3>

//       <p className="text-sm text-gray-600">{pub.authors}</p>
//       <p className="text-sm text-[#003D6B]/80 italic mt-1">{pub.journal}</p>

//       {pub.doi && (
//         <a
//           href={`https://doi.org/${pub.doi}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D9FF] hover:text-[#FF00FF] transition-colors mt-3"
//           onClick={(e) => e.stopPropagation()}
//         >
//           DOI: {pub.doi}
//           <ExternalLink className="h-3 w-3" />
//         </a>
//       )}
//     </Card>
//   );
// }

// export function PublicationsSection() {
//   const [search, setSearch] = useState("");
//   const [yearFilter, setYearFilter] = useState<string>("all");
//   const [sort, setSort] = useState<SortOption>("year-desc");
//   const [activeTab, setActiveTab] = useState<PublicationCategory>("all");
//   const [selectedPub, setSelectedPub] = useState<(typeof PUBLICATIONS)[0] | null>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

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
//           p.journal.toLowerCase().includes(q)
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

//   const carouselSlides = useMemo(() => {
//     const slides = [];
//     for (let i = 0; i < filtered.length; i += ITEMS_PER_SLIDE) {
//       slides.push(filtered.slice(i, i + ITEMS_PER_SLIDE));
//     }
//     return slides;
//   }, [filtered]);

//   const autoplayPlugin = useMemo(
//     () =>
//       Autoplay({
//         delay: 5000,
//         stopOnInteraction: true,
//         stopOnMouseEnter: true,
//       }),
//     []
//   );

//   const handleSlideChange = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section
//       id="publications"
//       className="py-20 bg-gradient-to-br from-[#f8f9fa] via-[#f0f2f5] to-[#e8ecf0]"
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         {/* Section Header */}
//         <div className="mb-14">
//           <div className="flex items-baseline gap-4 mb-4">
//             <span className="text-sm font-bold text-[#FF00FF] tracking-wider">
//               PUBLICATIONS
//             </span>
//             <div className="flex-1 h-[3px] bg-[#FF00FF]" />
//           </div>
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#003D6B] mb-4">
//             Research Output
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl">
//             Peer-reviewed journal articles, conference papers, book chapters, and research reports.
//           </p>
//         </div>

//         {/* Filters */}
//         <ScrollReveal>
//           <div className="flex flex-col lg:flex-row gap-4 mb-8">
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search publications..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="pl-10 border-[#003D6B] focus:border-[#FF00FF]"
//                 aria-label="Search publications"
//               />
//             </div>
//             <div className="flex flex-wrap gap-3">
//               <Select value={yearFilter} onValueChange={setYearFilter}>
//                 <SelectTrigger className="w-[140px] border-[#003D6B] text-[#003D6B]">
//                   <Filter className="h-4 w-4 mr-1" />
//                   <SelectValue placeholder="Year" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Years</SelectItem>
//                   {PUBLICATION_YEARS.map((y) => (
//                     <SelectItem key={y} value={String(y)}>
//                       {y}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
//                 <SelectTrigger className="w-[160px] border-[#003D6B] text-[#003D6B]">
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="year-desc">Newest First</SelectItem>
//                   <SelectItem value="year-asc">Oldest First</SelectItem>
//                   <SelectItem value="citations-desc">Most Cited</SelectItem>
//                   <SelectItem value="title-asc">Title A-Z</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button
//                 variant="outline"
//                 asChild
//                 className="border-[#003D6B] text-[#003D6B] hover:bg-[#003D6B] hover:text-white rounded-full"
//               >
//                 <a href={GOOGLE_SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
//                   <ExternalLink className="h-4 w-4" />
//                   Google Scholar
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </ScrollReveal>

//         {/* Tabs */}
//         <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as PublicationCategory)}>
//           <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-transparent p-0 mb-8">
//             {(Object.keys(CATEGORY_LABELS) as PublicationCategory[]).map((cat) => (
//               <TabsTrigger
//                 key={cat}
//                 value={cat}
//                 className="data-[state=active]:bg-[#003D6B] data-[state=active]:text-white rounded-full px-4 border border-[#003D6B] text-[#003D6B]"
//               >
//                 {CATEGORY_LABELS[cat]}
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           <TabsContent value={activeTab} className="mt-0">
//             {filtered.length === 0 ? (
//               <p className="text-center text-muted-foreground py-12">
//                 No publications found matching your criteria.
//               </p>
//             ) : (
//               <>
//                 {/* Carousel */}
//                 <div className="relative">
//                   <Carousel
//                     opts={{
//                       align: "start",
//                       loop: true,
//                     }}
//                     plugins={[autoplayPlugin]}
//                     className="w-full"
//                     onSelect={(api) => {
//                       if (api) {
//                         const index = api.selectedScrollSnap();
//                         handleSlideChange(index);
//                       }
//                     }}
//                   >
//                     <CarouselContent className="-ml-4 min-h-[480px]">
//                       {carouselSlides.map((slide, slideIndex) => (
//                         <CarouselItem key={slideIndex} className="pl-4 basis-full">
//                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
//                             {slide.map((pub) => (
//                               <PublicationCard
//                                 key={pub.id}
//                                 pub={pub}
//                                 onSelect={setSelectedPub}
//                               />
//                             ))}
//                           </div>
//                         </CarouselItem>
//                       ))}
//                     </CarouselContent>

//                     <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-white border-2 border-[#003D6B] text-[#003D6B] hover:bg-[#003D6B] hover:text-white rounded-full h-10 w-10" />
//                     <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-white border-2 border-[#003D6B] text-[#003D6B] hover:bg-[#003D6B] hover:text-white rounded-full h-10 w-10" />
//                   </Carousel>

//                   {/* Dot indicators */}
//                   {carouselSlides.length > 1 && (
//                     <div className="flex justify-center gap-3 mt-10">
//                       {carouselSlides.map((_, idx) => (
//                         <button
//                           key={idx}
//                           className={`h-2 rounded-full transition-all duration-300 ${
//                             idx === currentSlide
//                               ? "w-8 bg-[#FF00FF]"
//                               : "w-2 bg-[#003D6B]/30 hover:bg-[#003D6B]/60"
//                           }`}
//                           aria-label={`Go to slide ${idx + 1}`}
//                           onClick={() => {
//                             const carouselEl = document.querySelector(
//                               "[data-carousel]"
//                             ) as HTMLElement;
//                             if (carouselEl) {
//                               const event = new CustomEvent("carouselSelect", {
//                                 detail: { index: idx },
//                               });
//                               carouselEl.dispatchEvent(event);
//                             }
//                           }}
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <p className="text-sm text-muted-foreground text-center mt-6">
//                   Showing {filtered.length} of {PUBLICATIONS.length} publications
//                 </p>
//               </>
//             )}
//           </TabsContent>
//         </Tabs>

//         {/* Detail Dialog */}
//         <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
//           <DialogContent className="max-w-2xl">
//             {selectedPub && (
//               <>
//                 <DialogHeader>
//                   <DialogTitle className="text-xl leading-snug">{selectedPub.title}</DialogTitle>
//                   <DialogDescription>{selectedPub.authors}</DialogDescription>
//                 </DialogHeader>
//                 <div className="space-y-4 pt-2">
//                   <p className="text-sm italic text-primary/80">{selectedPub.journal}</p>
//                   <div className="flex flex-wrap gap-2">
//                     <Badge variant="outline">{selectedPub.year}</Badge>
//                     <Badge variant="secondary">{CATEGORY_LABELS[selectedPub.category]}</Badge>
//                     {selectedPub.openAccess && <Badge variant="success">Open Access</Badge>}
//                     {selectedPub.citations !== undefined && (
//                       <Badge variant="accent">{selectedPub.citations} citations</Badge>
//                     )}
//                   </div>
//                   {selectedPub.doi && (
//                     <Button variant="outline" asChild>
//                       <a
//                         href={`https://doi.org/${selectedPub.doi}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <ExternalLink className="h-4 w-4" />
//                         View on DOI
//                       </a>
//                     </Button>
//                   )}
//                 </div>
//               </>
//             )}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </section>
//   );
// }



'use client';

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Quote, Search, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PUBLICATIONS, PUBLICATION_YEARS } from "@/data/publications";
import { GOOGLE_SCHOLAR_URL } from "@/data/profile";
import type { PublicationCategory, SortOption } from "@/types";

const CATEGORY_LABELS: Record<PublicationCategory, string> = {
  all: "All Publications",
  journal: "Journal Articles",
  conference: "Conference Papers",
  book: "Book Chapters",
  report: "Research Reports",
};

const ITEMS_PER_SLIDE = 3;

function PublicationCard({
  pub,
  onSelect,
}: {
  pub: (typeof PUBLICATIONS)[0];
  onSelect: (pub: (typeof PUBLICATIONS)[0]) => void;
}) {
  return (
    <Card
      className="group border border-white/60 bg-white/70 backdrop-blur-md hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer h-full min-h-[340px] flex flex-col rounded-3xl overflow-hidden"
      onClick={() => onSelect(pub)}
    >
      <div className="h-1.5 bg-gradient-to-r from-[#1f4567] to-[#2a6b8f]" />

      <div className="p-8 flex flex-col h-full">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <Badge 
            variant="outline" 
            className="bg-[#1f4567] text-white border-none font-medium text-xs px-3 py-1"
          >
            {CATEGORY_LABELS[pub.category]}
          </Badge>
          
          <span className="text-xs text-[#4a5a6a] flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {pub.year}
          </span>

          {pub.openAccess && (
            <Badge className="bg-green-600 text-white text-xs">Open Access</Badge>
          )}
          
          {pub.citations !== undefined && (
            <Badge variant="secondary" className="text-[#1f4567] bg-[#1f4567]/5">
              <Quote className="h-3 w-3 mr-1" />
              {pub.citations}
            </Badge>
          )}
        </div>

        <h3 className="text-xl font-serif font-semibold text-[#1f4567] leading-tight mb-4 group-hover:text-[#2a6b8f] transition-colors flex-1 line-clamp-3">
          {pub.title}
        </h3>

        <div className="mt-auto">
          <p className="text-sm text-[#4a5a6a] font-medium">{pub.authors}</p>
          <p className="text-sm text-[#2a6b8f]/80 italic mt-1 line-clamp-2">{pub.journal}</p>

          {pub.doi && (
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#2a6b8f] hover:text-[#1f4567] mt-4 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View DOI
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

export function PublicationsSection() {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("year-desc");
  const [activeTab, setActiveTab] = useState<PublicationCategory>("all");
  const [selectedPub, setSelectedPub] = useState<(typeof PUBLICATIONS)[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filtered = useMemo(() => {
    let results = [...PUBLICATIONS];

    if (activeTab !== "all") {
      results = results.filter((p) => p.category === activeTab);
    }
    if (yearFilter !== "all") {
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
        case "year-asc":
          return a.year - b.year;
        case "citations-desc":
          return (b.citations ?? 0) - (a.citations ?? 0);
        case "title-asc":
          return a.title.localeCompare(b.title);
        default:
          return b.year - a.year;
      }
    });

    return results;
  }, [search, yearFilter, sort, activeTab]);

  const carouselSlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < filtered.length; i += ITEMS_PER_SLIDE) {
      slides.push(filtered.slice(i, i + ITEMS_PER_SLIDE));
    }
    return slides;
  }, [filtered]);

  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

  return (
    <section id="publications" className="relative py-24 bg-gradient-to-br from-[#f8f9fa] via-[#f0f2f5] to-[#e8ecf0] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1f4567]" />
            <span className="text-sm font-bold tracking-[0.125em] text-[#1f4567]/70 uppercase">Research</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1f4567]">
            Publications &amp; Research Output
          </h2>
          <p className="mt-4 text-lg text-[#4a5a6a] max-w-2xl mx-auto">
            Advancing knowledge through high-impact peer-reviewed work
          </p>
        </motion.div>

        {/* Filters & Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#4a5a6a]" />
            <Input
              placeholder="Search by title, author, or journal..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11 bg-white/70 border-white/60 focus:border-[#2a6b8f] h-12 rounded-2xl"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-[150px] bg-white/70 border-white/60 text-[#1f4567] rounded-2xl h-12">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {PUBLICATION_YEARS.map((y) => (
                  <SelectItem key={y} value={String(y)}>{y}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
              <SelectTrigger className="w-[170px] bg-white/70 border-white/60 text-[#1f4567] rounded-2xl h-12">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="year-desc">Newest First</SelectItem>
                <SelectItem value="year-asc">Oldest First</SelectItem>
                <SelectItem value="citations-desc">Most Cited</SelectItem>
                <SelectItem value="title-asc">Title A–Z</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              asChild
              className="border-[#1f4567] text-[#1f4567] hover:bg-[#1f4567] hover:text-white rounded-2xl h-12 px-6"
            >
              <a href={GOOGLE_SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Google Scholar
              </a>
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as PublicationCategory)}>
          <TabsList className="w-full flex flex-wrap gap-2 bg-transparent p-0 mb-10 justify-center">
            {(Object.keys(CATEGORY_LABELS) as PublicationCategory[]).map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="data-[state=active]:bg-[#1f4567] data-[state=active]:text-white border border-[#1f4567]/20 hover:border-[#2a6b8f] rounded-2xl px-6 py-2.5 text-sm transition-all"
              >
                {CATEGORY_LABELS[cat]}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-[#4a5a6a]">
                No publications found matching your criteria.
              </div>
            ) : (
              <>
                <Carousel
                  opts={{ align: "start", loop: true }}
                  plugins={[autoplayPlugin]}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {carouselSlides.map((slide, slideIndex) => (
                      <CarouselItem key={slideIndex} className="pl-4 basis-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {slide.map((pub) => (
                            <PublicationCard
                              key={pub.id}
                              pub={pub}
                              onSelect={setSelectedPub}
                            />
                          ))}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious className="-left-4 bg-white/80 border border-white/60 hover:bg-white" />
                  <CarouselNext className="-right-4 bg-white/80 border border-white/60 hover:bg-white" />
                </Carousel>

                <p className="text-center text-sm text-[#4a5a6a] mt-10">
                  Showing {filtered.length} of {PUBLICATIONS.length} publications
                </p>
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Publication Detail Dialog */}
      <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
        <DialogContent className="max-w-2xl rounded-3xl">
          {selectedPub && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-[#1f4567] leading-tight">
                  {selectedPub.title}
                </DialogTitle>
                <DialogDescription className="text-[#2a6b8f] font-medium">
                  {selectedPub.authors}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                <p className="italic text-[#4a5a6a]">{selectedPub.journal}</p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{selectedPub.year}</Badge>
                  <Badge variant="outline">{CATEGORY_LABELS[selectedPub.category]}</Badge>
                  {selectedPub.openAccess && <Badge className="bg-green-600">Open Access</Badge>}
                  {selectedPub.citations !== undefined && (
                    <Badge variant="secondary">{selectedPub.citations} Citations</Badge>
                  )}
                </div>

                {selectedPub.doi && (
                  <Button asChild className="bg-[#1f4567] hover:bg-[#2a6b8f] rounded-2xl">
                    <a href={`https://doi.org/${selectedPub.doi}`} target="_blank" rel="noopener noreferrer">
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