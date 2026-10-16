// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   Search,
//   GraduationCap,
//   BookOpen,
//   FileText,
//   User,
//   Briefcase,
//   ExternalLink,
// } from "lucide-react";

// import {
//   FaLinkedinIn,
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaResearchgate,
//   FaGoogleScholar,
// } from "react-icons/fa6";

// import { SiOrcid, SiX } from "react-icons/si";

// import { NavLink, useLocation, useNavigate } from "react-router-dom";

// import { Button } from "@/components/ui/button";

// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// import { cn, scrollToSection } from "@/lib/utils";

// import { NAV_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from "@/data/profile";

// import { PUBLICATIONS } from "@/data/publications";
// import { NEWS_ITEMS } from "@/data/news";
// import { KNOWLEDGE_ITEMS } from "@/data/knowledge";

// import { useScrollSpy } from "@/hooks/useScrollSpy";

// interface SearchResult {
//   id: string;
//   title: string;
//   excerpt: string;
//   type: "publication" | "news" | "knowledge" | "nav-item";
//   url?: string;
//   sectionId?: string;
// }

// export function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
//   const [showResults, setShowResults] = useState(false);

//   const activeSection = useScrollSpy(NAV_ITEMS.map((n) => n.id));

//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleNavClick = (id: string) => {
//     if (location.pathname !== "/") {
//       navigate("/", {
//         state: {
//           scrollTo: id,
//         },
//       });

//       setOpen(false);
//       setIsSearchOpen(false);

//       return;
//     }

//     scrollToSection(id);

//     setOpen(false);
//     setIsSearchOpen(false);
//   };

//   // ---------------------------------------------
//   // SEARCH
//   // ---------------------------------------------

//   useEffect(() => {
//     if (!searchQuery.trim()) {
//       setSearchResults([]);
//       setShowResults(false);
//       return;
//     }

//     const query = searchQuery.toLowerCase().trim();

//     const results: SearchResult[] = [];

//     // Publications
//     PUBLICATIONS.forEach((pub) => {
//       if (
//         pub.title.toLowerCase().includes(query) ||
//         pub.authors.toLowerCase().includes(query) ||
//         pub.journal.toLowerCase().includes(query)
//       ) {
//         results.push({
//           id: pub.id,
//           title: pub.title,
//           excerpt: `${pub.authors} · ${
//             pub.journal || "Unknown Journal"
//           } · ${pub.year}`,
//           type: "publication",
//           sectionId: "publications",
//         });
//       }
//     });

//     // News
//     NEWS_ITEMS.forEach((news) => {
//       if (
//         news.title.toLowerCase().includes(query) ||
//         news.excerpt.toLowerCase().includes(query)
//       ) {
//         results.push({
//           id: news.id,
//           title: news.title,
//           excerpt: news.excerpt,
//           type: "news",
//           sectionId: "news",
//         });
//       }
//     });

//     // Knowledge
//     KNOWLEDGE_ITEMS.forEach((item) => {
//       if (
//         item.title.toLowerCase().includes(query) ||
//         item.description.toLowerCase().includes(query)
//       ) {
//         results.push({
//           id: item.id,
//           title: item.title,
//           excerpt: `${item.description} · ${item.year}`,
//           type: "knowledge",
//           url: "/projects",
//         });
//       }
//     });

//     // Navigation
//     NAV_ITEMS.forEach((item) => {
//       if (item.label.toLowerCase().includes(query)) {
//         results.push({
//           id: item.id,
//           title: item.label,
//           excerpt: "Navigate to this section",
//           type: "nav-item",
//           sectionId: item.id,
//           url: item.path,
//         });
//       }
//     });

//     setSearchResults(results);
//     setShowResults(true);
//   }, [searchQuery]);

//   // ---------------------------------------------
//   // SEARCH RESULT CLICK
//   // ---------------------------------------------

//   const handleResultClick = (result: SearchResult) => {
//     if (result.url) {
//       navigate(result.url);
//     } else if (result.sectionId) {
//       if (location.pathname !== "/") {
//         navigate("/", {
//           state: {
//             scrollTo: result.sectionId,
//           },
//         });
//       } else {
//         scrollToSection(result.sectionId);
//       }
//     }

//     setIsSearchOpen(false);
//     setSearchQuery("");
//     setShowResults(false);
//     setOpen(false);
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     setShowResults(true);
//   };

//   // ---------------------------------------------
//   // SEARCH RESULT ICON
//   // ---------------------------------------------

//   const getResultIcon = (type: SearchResult["type"]) => {
//     switch (type) {
//       case "publication":
//         return <BookOpen className="w-4 h-4 text-[#0F7A5A]" />;

//       case "news":
//         return <FileText className="w-4 h-4 text-black" />;

//       case "knowledge":
//         return <Briefcase className="w-4 h-4 text-[color:var(--ink-soft)]" />;

//       case "nav-item":
//         return <User className="w-4 h-4 text-black" />;

//       default:
//         return <Search className="w-4 h-4" />;
//     }
//   };

//   // ---------------------------------------------
//   // ACTIVE NAVIGATION
//   // ---------------------------------------------

//   const isItemActive = (item: (typeof NAV_ITEMS)[0]) => {
//     if (item.path) {
//       return location.pathname === item.path;
//     }

//     return activeSection === item.id;
//   };

//   return (
//     <motion.header
//       initial={{
//         y: -100,
//         opacity: 0,
//       }}
//       animate={{
//         y: 0,
//         opacity: 1,
//       }}
//       transition={{
//         duration: 0.6,
//         ease: "easeOut",
//       }}
//       className="fixed top-0 left-0 right-0 z-50"
//     >
//       <div className="relative border-b border-border bg-white/95 backdrop-blur-md">
//         {/* --------------------------------------------- */}
//         {/* SOCIAL MEDIA BAR */}
//         {/* --------------------------------------------- */}

//         <div className="border-b border-border bg-background">
//           <div className="container mx-auto px-3 py-1 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between gap-2">
//               {/* Social icons */}
//               <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
//                 {/* LinkedIn */}
//                 <a
//                   href="https://www.linkedin.com/in/baburam-timsina-9a0b169b/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="LinkedIn"
//                   className="group flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--ink-soft)] transition-colors duration-200 hover:bg-[#0B2545]/[0.06] hover:text-[#0F7A5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/50"
//                 >
//                   <FaLinkedinIn className="h-[16px] w-[16px]" />
//                 </a>

//                 {/* Facebook */}
//                 <a
//                   href="https://www.facebook.com/babusri.timsina"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Facebook"
//                   className="group flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--ink-soft)] transition-colors duration-200 hover:bg-[#0B2545]/[0.06] hover:text-[#0F7A5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/50"
//                 >
//                   <FaFacebookF className="h-[16px] w-[16px]" />
//                 </a>

//                 {/* Instagram */}
//                 {/* <a
//                   href="https://www.instagram.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram"
//                   className="group flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--ink-soft)] transition-colors duration-200 hover:bg-[#0B2545]/[0.06] hover:text-[#0F7A5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/50"
//                 >
//                   <FaInstagram className="h-[17px] w-[17px]" />
//                 </a> */}

//                 {/* YouTube */}
//                 {/* <a
//                   href="https://www.youtube.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="YouTube"
//                   className="group flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--ink-soft)] transition-colors duration-200 hover:bg-[#0B2545]/[0.06] hover:text-[#0F7A5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/50"
//                 >
//                   <FaYoutube className="h-[17px] w-[17px]" />
//                 </a> */}

//                 {/* ResearchGate */}
//                 <a
//                   href="https://www.researchgate.net/profile/Baburam-Timsina-3"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="ResearchGate"
//                   className="group flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--ink-soft)] transition-colors duration-200 hover:bg-[#0B2545]/[0.06] hover:text-[#0F7A5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/50"
//                 >
//                   <FaResearchgate className="h-[17px] w-[17px]" />
//                 </a>

//                 {/* ORCID */}
//                 <a
//                   href="https://orcid.org/0009-0001-9593-4222"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="ORCID"
//                   className="group flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--ink-soft)] transition-colors duration-200 hover:bg-[#0B2545]/[0.06] hover:text-[#0F7A5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/50"
//                 >
//                   <SiOrcid className="h-[18px] w-[18px]" />
//                 </a>

//                 {/* Google Scholar */}
//                 <a
//                   href="https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Google Scholar"
//                   className="group flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--ink-soft)] transition-colors duration-200 hover:bg-[#0B2545]/[0.06] hover:text-[#0F7A5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/50"
//                 >
//                   <FaGoogleScholar className="h-[17px] w-[17px]" />
//                 </a>

//                 {/* X */}
//                 {/* <a
//                   href="https://x.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="X"
//                   className="group flex h-8 w-8 items-center justify-center rounded-full text-black transition-all duration-200 hover:bg-gray-100 hover:-translate-y-0.5"
//                 >
//                   <SiX className="h-[16px] w-[16px]" />
//                 </a> */}

//                 {/* Search */}
//                 <motion.button
//                   whileTap={{
//                     scale: 0.95,
//                   }}
//                   onClick={() => setIsSearchOpen(!isSearchOpen)}
//                   aria-label="Search"
//                   aria-expanded={isSearchOpen}
//                   className="btn btn-ghost btn-icon btn-pill ml-1 h-8 w-8 text-[color:var(--ink-soft)]"
//                 >
//                   <Search className="h-[17px] w-[17px]" />
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --------------------------------------------- */}
//         {/* MAIN NAVIGATION */}
//         {/* --------------------------------------------- */}

//         <nav
//           className="container mx-auto flex h-16 items-center justify-between gap-4 px-3 sm:px-6 lg:px-8"
//           aria-label="Main navigation"
//         >
         

//           {/* Desktop navigation */}
//           <div className="hidden xl:flex items-center gap-0.5 2xl:gap-1">
//             {NAV_ITEMS.map((item, index) => {
//               const isActive = isItemActive(item);

//               {
//                 /* ROUTE LINK */
//               }
//               if (item.path) {
//                 return (
//                   <NavLink
//                     key={item.id}
//                     to={item.path}
//                     className={({ isActive: routeActive }) =>
//                       cn(
//                         "relative whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 cursor-pointer xl:text-[14px] 2xl:px-3.5 2xl:text-[15px]",

//                         routeActive
//                           ? "text-[color:var(--ink)]"
//                           : "text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]",
//                       )
//                     }
//                   >
//                     {({ isActive: routeActive }) => (
//                       <>
//                         <span className="relative z-10">{item.label}</span>

//                         {routeActive && (
//                           <motion.div
//                             layoutId="activeNav"
//                             className="absolute inset-x-2.5 -bottom-px h-0.5 rounded-full bg-[#0F7A5A]"
//                             transition={{
//                               type: "spring",
//                               stiffness: 380,
//                               damping: 30,
//                             }}
//                           />
//                         )}
//                       </>
//                     )}
//                   </NavLink>
//                 );
//               }

//               {
//                 /* SECTION BUTTON */
//               }
//               return (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => handleNavClick(item.id)}
//                   initial={{
//                     opacity: 0,
//                   }}
//                   animate={{
//                     opacity: 1,
//                   }}
//                   transition={{
//                     delay: index * 0.03,
//                   }}
//                   className={cn(
//                     "relative whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 cursor-pointer xl:text-[14px] 2xl:px-3.5 2xl:text-[15px]",

//                     isActive
//                       ? "text-[color:var(--ink)]"
//                       : "text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]",
//                   )}
//                 >
//                   <span className="relative z-10">{item.label}</span>

//                   {isActive && (
//                     <motion.div
//                       layoutId="activeNav"
//                       className="absolute inset-x-2.5 -bottom-px h-0.5 rounded-full bg-[#0F7A5A]"
//                       transition={{
//                         type: "spring",
//                         stiffness: 380,
//                         damping: 30,
//                       }}
//                     />
//                   )}
//                 </motion.button>
//               );
//             })}
//           </div>

//           {/* --------------------------------------------- */}
//           {/* MOBILE MENU */}
//           {/* --------------------------------------------- */}

//           <div className="flex items-center gap-1 ml-auto">
//             <Sheet open={open} onOpenChange={setOpen}>
//               <SheetTrigger asChild>
//                 <motion.div
//                   whileTap={{
//                     scale: 0.95,
//                   }}
//                   className="xl:hidden"
//                 >
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     aria-label="Open menu"
//                     className="btn btn-ghost btn-pill h-11 w-11"
//                   >
//                     <Menu className="h-5 w-5 transition-colors" />
//                   </Button>
//                 </motion.div>
//               </SheetTrigger>

//               {/* Mobile drawer */}
//               <SheetContent
//                 side="right"
//                 aria-describedby={undefined}
//                 className="w-[85vw] max-w-[320px] sm:max-w-[380px] overflow-y-auto border-l border-border bg-white shadow-xl"
//               >
//                 <SheetHeader className="border-b border-border pb-4">
//                   <SheetTitle className="flex items-center gap-3 text-black">
//                     <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0B2545]">
//                       <GraduationCap className="h-4 w-4 text-white" />
//                     </div>

//                     <span className="truncate font-[family-name:var(--font-heading)] text-lg font-semibold sm:text-xl">
//                       {SITE_CONFIG.name}
//                     </span>
//                   </SheetTitle>
//                 </SheetHeader>

//                 {/* Mobile nav items */}
//                 <div className="mt-6 flex flex-col gap-1.5">
//                   {NAV_ITEMS.map((item, index) => {
//                     const isActive = isItemActive(item);

//                     {
//                       /* Mobile route */
//                     }
//                     if (item.path) {
//                       return (
//                         <NavLink
//                           key={item.id}
//                           to={item.path}
//                           onClick={() => setOpen(false)}
//                           className={({ isActive: routeActive }) =>
//                             cn(
//                               "flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium transition-colors duration-200 cursor-pointer",

//                               routeActive
//                                 ? "bg-[#0B2545]/[0.05] text-[color:var(--ink)]"
//                                 : "text-[color:var(--ink-soft)] hover:bg-[#0B2545]/[0.04] hover:text-[color:var(--ink)]",
//                             )
//                           }
//                         >
//                           {({ isActive: routeActive }) => (
//                             <>
//                               <span>{item.label}</span>

//                               {routeActive && (
//                                 <motion.div
//                                   initial={{
//                                     scale: 0,
//                                   }}
//                                   animate={{
//                                     scale: 1,
//                                   }}
//                                   className="w-2 h-2 rounded-full bg-[#0F7A5A]"
//                                 />
//                               )}
//                             </>
//                           )}
//                         </NavLink>
//                       );
//                     }

//                     {
//                       /* Mobile section */
//                     }
//                     return (
//                       <motion.button
//                         key={item.id}
//                         onClick={() => handleNavClick(item.id)}
//                         initial={{
//                           opacity: 0,
//                           x: -15,
//                         }}
//                         animate={{
//                           opacity: 1,
//                           x: 0,
//                         }}
//                         transition={{
//                           delay: index * 0.05,
//                         }}
//                         className={cn(
//                           "flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium transition-colors duration-200 cursor-pointer",

//                           isActive
//                             ? "bg-[#0B2545]/[0.05] text-[color:var(--ink)]"
//                             : "text-[color:var(--ink-soft)] hover:bg-[#0B2545]/[0.04] hover:text-[color:var(--ink)]",
//                         )}
//                       >
//                         <span>{item.label}</span>

//                         {isActive && (
//                           <motion.div
//                             initial={{
//                               scale: 0,
//                             }}
//                             animate={{
//                               scale: 1,
//                             }}
//                             className="w-2 h-2 rounded-full bg-[#0F7A5A]"
//                           />
//                         )}
//                       </motion.button>
//                     );
//                   })}
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </nav>

//         {/* --------------------------------------------- */}
//         {/* SEARCH BAR */}
//         {/* --------------------------------------------- */}

//         <AnimatePresence>
//           {isSearchOpen && (
//             <motion.div
//               initial={{
//                 height: 0,
//                 opacity: 0,
//               }}
//               animate={{
//                 height: "auto",
//                 opacity: 1,
//               }}
//               exit={{
//                 height: 0,
//                 opacity: 0,
//               }}
//               transition={{
//                 duration: 0.25,
//                 ease: "easeInOut",
//               }}
//               className="overflow-hidden border-t border-border"
//             >
//               <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
//                 <form onSubmit={handleSearch} className="relative">
//                   <motion.div
//                     initial={{
//                       scale: 0.98,
//                       opacity: 0,
//                     }}
//                     animate={{
//                       scale: 1,
//                       opacity: 1,
//                     }}
//                     transition={{
//                       delay: 0.05,
//                     }}
//                     className="relative"
//                   >
//                     <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#0F7A5A]" />

//                     <input
//                       type="text"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       placeholder="Search articles, research, or projects..."
//                       aria-label="Search"
//                       className="w-full rounded-lg border border-input bg-white py-3 pl-10 pr-12 text-sm text-[color:var(--ink)] transition-colors duration-200 placeholder:text-[color:var(--ink-soft)] focus:border-[#0F7A5A] focus:outline-none focus:ring-2 focus:ring-[#0F7A5A]/30 sm:py-3.5 sm:pl-12"
//                       autoFocus
//                     />

//                     <Button
//                       type="button"
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => setIsSearchOpen(false)}
//                       aria-label="Close search"
//                       className="btn btn-ghost btn-pill absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 h-9 w-9"
//                     >
//                       <X className="h-4 w-4 sm:h-5 sm:w-5" />
//                     </Button>
//                   </motion.div>
//                 </form>

//                 {/* Search results */}
//                 <AnimatePresence>
//                   {showResults && searchResults.length > 0 && (
//                     <motion.div
//                       initial={{
//                         opacity: 0,
//                         y: -10,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       exit={{
//                         opacity: 0,
//                         y: -10,
//                       }}
//                       className="mt-4 overflow-hidden rounded-lg border border-border bg-white shadow-lg"
//                     >
//                       <div className="max-h-[60vh] overflow-y-auto">
//                         <div className="p-2 sm:p-3">
//                           {searchResults.slice(0, 8).map((result, index) => (
//                             <motion.button
//                               key={result.id}
//                               initial={{
//                                 opacity: 0,
//                                 x: -20,
//                               }}
//                               animate={{
//                                 opacity: 1,
//                                 x: 0,
//                               }}
//                               transition={{
//                                 delay: index * 0.05,
//                               }}
//                               onClick={() => handleResultClick(result)}
//                               className="group flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors duration-200 hover:bg-[#0B2545]/[0.04] sm:p-4"
//                             >
//                               <div className="mt-1 shrink-0 rounded-lg bg-[#0B2545]/[0.05] p-2">
//                                 {getResultIcon(result.type)}
//                               </div>

//                               <div className="flex-1 min-w-0">
//                                 <h4 className="line-clamp-2 text-sm font-medium text-[color:var(--ink)] transition-colors group-hover:text-[#0F7A5A] sm:text-base">
//                                   {result.title}
//                                 </h4>

//                                 <p className="mt-1 line-clamp-2 text-xs text-[color:var(--ink-soft)] sm:text-sm">
//                                   {result.excerpt}
//                                 </p>
//                               </div>

//                               <ExternalLink className="w-4 h-4 text-black shrink-0 mt-1 group-hover:text-[#0F7A5A] transition-colors" />
//                             </motion.button>
//                           ))}
//                         </div>

//                         {searchResults.length > 8 && (
//                           <div className="border-t border-border bg-background p-3">
//                             <p className="text-xs sm:text-sm text-black text-center">
//                               +{searchResults.length - 8} more results. Continue
//                               typing to refine.
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     </motion.div>
//                   )}

//                   {/* No results */}
//                   {showResults &&
//                     searchResults.length === 0 &&
//                     searchQuery.trim() && (
//                       <motion.div
//                         initial={{
//                           opacity: 0,
//                           y: -10,
//                         }}
//                         animate={{
//                           opacity: 1,
//                           y: 0,
//                         }}
//                         className="mt-4 rounded-lg border border-border bg-white p-6 text-center shadow-lg"
//                       >
//                         <Search className="mx-auto mb-3 h-10 w-10 text-[color:var(--line-strong)]" />

//                         <h4 className="text-black font-medium mb-1">
//                           No results found
//                         </h4>

//                         <p className="text-black text-sm">
//                           Try different keywords or check your spelling
//                         </p>
//                       </motion.div>
//                     )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.header>
//   );
// }

"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  Menu,
  X,
  Search,
  GraduationCap,
  BookOpen,
  FileText,
  User,
  Briefcase,
  CornerDownLeft,
  ArrowUpRight,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaResearchgate,
  FaGoogleScholar,
} from "react-icons/fa6";
import { SiOrcid } from "react-icons/si";

import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn, scrollToSection } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/profile";
import { PUBLICATIONS } from "@/data/publications";
import { NEWS_ITEMS } from "@/data/news";
import { KNOWLEDGE_ITEMS } from "@/data/knowledge";
import { useScrollSpy } from "@/hooks/useScrollSpy";

/* -------------------------------------------------------------------------- */
/* Types & static data                                                         */
/* -------------------------------------------------------------------------- */

type ResultType = "publication" | "news" | "knowledge" | "nav-item";

interface SearchResult {
  key: string;
  id: string;
  title: string;
  excerpt: string;
  type: ResultType;
  url?: string;
  sectionId?: string;
}

const TYPE_LABEL: Record<ResultType, string> = {
  publication: "Publication",
  news: "News",
  knowledge: "Project",
  "nav-item": "Page",
};

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/baburam-timsina-9a0b169b/",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/babusri.timsina",
    icon: FaFacebookF,
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Baburam-Timsina-3",
    icon: FaResearchgate,
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0001-9593-4222",
    icon: SiOrcid,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ",
    icon: FaGoogleScholar,
  },
] as const;

const MAX_RESULTS = 8;

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const reduceMotion = useReducedMotion();

  const activeSection = useScrollSpy(NAV_ITEMS.map((n) => n.id));
  const location = useLocation();
  const navigate = useNavigate();

  // Optional "Contact" call-to-action: shown as a button if such an item exists.
  const ctaItem = NAV_ITEMS.find((n) => n.id === "contact");
  const linkItems = NAV_ITEMS.filter((n) => n.id !== "contact");

  /* ---------------------------- scroll behaviour --------------------------- */

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ------------------------------- navigation ------------------------------ */

  const closeAll = useCallback(() => {
    setOpen(false);
    setIsSearchOpen(false);
    setSearchQuery("");
  }, []);

  const goToSection = useCallback(
    (id: string) => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        scrollToSection(id);
      }
      closeAll();
    },
    [location.pathname, navigate, closeAll],
  );

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeAll();
  };

  /* --------------------------------- search -------------------------------- */

  const searchResults = useMemo<SearchResult[]>(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];

    const has = (value?: string) => (value || "").toLowerCase().includes(q);
    const results: SearchResult[] = [];

    PUBLICATIONS.forEach((pub) => {
      if (has(pub.title) || has(pub.authors) || has(pub.journal)) {
        results.push({
          key: `publication-${pub.id}`,
          id: pub.id,
          title: pub.title,
          excerpt: `${pub.authors} · ${pub.journal || "Unknown Journal"} · ${pub.year}`,
          type: "publication",
          sectionId: "publications",
        });
      }
    });

    NEWS_ITEMS.forEach((news) => {
      if (has(news.title) || has(news.excerpt)) {
        results.push({
          key: `news-${news.id}`,
          id: news.id,
          title: news.title,
          excerpt: news.excerpt,
          type: "news",
          sectionId: "news",
        });
      }
    });

    KNOWLEDGE_ITEMS.forEach((item) => {
      if (has(item.title) || has(item.description)) {
        results.push({
          key: `knowledge-${item.id}`,
          id: item.id,
          title: item.title,
          excerpt: `${item.description} · ${item.year}`,
          type: "knowledge",
          url: "/projects",
        });
      }
    });

    NAV_ITEMS.forEach((item) => {
      if (has(item.label)) {
        results.push({
          key: `nav-item-${item.id}`,
          id: item.id,
          title: item.label,
          excerpt: "Go to this section",
          type: "nav-item",
          sectionId: item.id,
          url: item.path,
        });
      }
    });

    return results;
  }, [searchQuery]);

  const visibleResults = searchResults.slice(0, MAX_RESULTS);
  const hasQuery = searchQuery.trim().length > 0;

  useEffect(() => setHighlighted(0), [searchQuery]);

  const openSearch = useCallback(() => {
    setOpen(false);
    setIsSearchOpen(true);
    // wait for the panel to mount
    requestAnimationFrame(() => searchInputRef.current?.focus());
  }, []);

  // Ctrl/⌘ + K opens search, Esc closes it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((v) => {
          if (!v) requestAnimationFrame(() => searchInputRef.current?.focus());
          return !v;
        });
      } else if (e.key === "Escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleResultClick = (result: SearchResult) => {
    if (result.url) {
      navigate(result.url);
    } else if (result.sectionId) {
      goToSection(result.sectionId);
    }
    closeAll();
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!visibleResults.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((i) => (i + 1) % visibleResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted(
        (i) => (i - 1 + visibleResults.length) % visibleResults.length,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleResultClick(visibleResults[highlighted]);
    }
  };

  const getResultIcon = (type: ResultType) => {
    switch (type) {
      case "publication":
        return <BookOpen className="h-5 w-5 text-[#0F7A5A]" />;
      case "news":
        return <FileText className="h-5 w-5 text-[#0B2545]" />;
      case "knowledge":
        return <Briefcase className="h-5 w-5 text-[color:var(--ink-soft)]" />;
      default:
        return <User className="h-5 w-5 text-[#0B2545]" />;
    }
  };

  const isItemActive = (item: (typeof NAV_ITEMS)[number]) =>
    item.path ? location.pathname === item.path : activeSection === item.id;

  /* -------------------------------- shared UI ------------------------------ */

  const linkBase =
    "relative whitespace-nowrap rounded-md px-3 py-2.5 text-[15px] font-bold tracking-[0.01em] transition-colors duration-200 cursor-pointer " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/60 " +
    "xl:text-base 2xl:px-4 2xl:text-[17px]";

  const linkTone = (active: boolean) =>
    active
      ? "text-[color:var(--ink)]"
      : "text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]";

  const ActiveBar = () => (
    <motion.div
      layoutId="activeNav"
      className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-[#0F7A5A]"
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );

  const drawerItemBase =
    "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-lg font-bold transition-colors duration-200 cursor-pointer " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/60";

  const drawerItemTone = (active: boolean) =>
    active
      ? "bg-[#0F7A5A]/10 text-[color:var(--ink)]"
      : "text-[color:var(--ink-soft)] hover:bg-[#0B2545]/[0.05] hover:text-[color:var(--ink)]";

  /* --------------------------------- render -------------------------------- */

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "relative border-b border-border bg-white/95 backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-[0_6px_24px_-12px_rgba(11,37,69,0.25)]",
        )}
      >
        {/* ------------------------- Utility / social bar ------------------------ */}
        <div
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-out",
            scrolled ? "grid-rows-[0fr]" : "grid-rows-[1fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="border-b border-border bg-[#0B2545]">
              <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-1.5 sm:px-6 lg:px-8">
                <p className="hidden text-sm font-semibold text-white/90 sm:block">
                  Find my research and profiles
                </p>

                <ul className="ml-auto flex items-center gap-1">
                  {SOCIALS.map(({ label, href, icon: Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------- Main navigation ------------------------- */}
        <nav
          aria-label="Main navigation"
          className={cn(
            "container mx-auto flex items-center justify-between gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:px-8",
            scrolled ? "h-16 sm:h-[68px]" : "h-[72px] sm:h-20",
          )}
        >

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 xl:flex 2xl:gap-1">
            {linkItems.map((item) => {
              const active = isItemActive(item);

              if (item.path) {
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) => cn(linkBase, linkTone(isActive))}
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">{item.label}</span>
                        {isActive && <ActiveBar />}
                      </>
                    )}
                  </NavLink>
                );
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  aria-current={active ? "true" : undefined}
                  className={cn(linkBase, linkTone(active))}
                >
                  <span className="relative z-10">{item.label}</span>
                  {active && <ActiveBar />}
                </button>
              );
            })}
          </div>

          {/* Right-hand actions */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* Search trigger */}
            <button
              type="button"
              onClick={() => (isSearchOpen ? closeAll() : openSearch())}
              aria-label="Search"
              aria-expanded={isSearchOpen}
              className="hidden h-11 items-center gap-3 rounded-full border border-border bg-background px-4 text-[15px] font-semibold text-[color:var(--ink-soft)] transition-colors duration-200 hover:border-[#0F7A5A]/50 hover:text-[color:var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/60 md:flex"
            >
              <Search className="h-[18px] w-[18px]" />
              <span className="hidden lg:inline">Search</span>
              <kbd className="hidden rounded border border-border bg-white px-1.5 py-0.5 text-xs font-bold lg:inline">
                Ctrl K
              </kbd>
            </button>

            <button
              type="button"
              onClick={() => (isSearchOpen ? closeAll() : openSearch())}
              aria-label="Search"
              aria-expanded={isSearchOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full text-[color:var(--ink)] transition-colors duration-200 hover:bg-[#0B2545]/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/60 md:hidden"
            >
              <Search className="h-6 w-6" />
            </button>

            {/* CTA */}
            {ctaItem && (
              <Button
                onClick={() => goToSection(ctaItem.id)}
                className="hidden h-11 rounded-full bg-[#0F7A5A] px-6 text-base font-bold text-white hover:bg-[#0B6249] focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/60 sm:inline-flex xl:h-12 xl:px-7"
              >
                {ctaItem.label}
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Button>
            )}

            {/* Mobile / tablet menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="h-11 w-11 rounded-full xl:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                aria-describedby={undefined}
                className="flex w-[88vw] max-w-[400px] flex-col overflow-y-auto border-l border-border bg-white p-0 shadow-xl"
              >
                <SheetHeader className="border-b border-border px-5 py-5 text-left">
                  <SheetTitle className="flex items-center gap-3 text-[color:var(--ink)]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B2545]">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </span>
                    <span className="truncate font-[family-name:var(--font-heading)] text-xl font-bold">
                      {SITE_CONFIG.name}
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex-1 px-4 py-5">
                  {/* Search shortcut */}
                  <button
                    type="button"
                    onClick={openSearch}
                    className="mb-4 flex h-12 w-full items-center gap-3 rounded-xl border border-border bg-background px-4 text-base font-semibold text-[color:var(--ink-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/60"
                  >
                    <Search className="h-5 w-5" />
                    Search the site
                  </button>

                  <div className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item) => {
                      const active = isItemActive(item);

                      const dot = active && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#0F7A5A]" />
                      );

                      if (item.path) {
                        return (
                          <NavLink
                            key={item.id}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              cn(drawerItemBase, drawerItemTone(isActive))
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <span>{item.label}</span>
                                {isActive && (
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#0F7A5A]" />
                                )}
                              </>
                            )}
                          </NavLink>
                        );
                      }

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => goToSection(item.id)}
                          aria-current={active ? "true" : undefined}
                          className={cn(drawerItemBase, drawerItemTone(active))}
                        >
                          <span>{item.label}</span>
                          {dot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Socials in the drawer */}
                <div className="border-t border-border bg-background px-5 py-5">
                  <p className="mb-3 text-sm font-bold text-[color:var(--ink-soft)]">
                    Profiles
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {SOCIALS.map(({ label, href, icon: Icon }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-[#0B2545] transition-colors duration-200 hover:border-[#0F7A5A] hover:text-[#0F7A5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/60"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        {/* ------------------------------ Search panel --------------------------- */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-border bg-white"
            >
              <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
                <div className="relative mx-auto max-w-3xl">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#0F7A5A] sm:h-6 sm:w-6" />

                  <input
                    ref={searchInputRef}
                    type="text"
                    role="combobox"
                    aria-expanded={visibleResults.length > 0}
                    aria-controls="navbar-search-results"
                    aria-label="Search the site"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Search publications, news or projects"
                    className="h-14 w-full rounded-xl border border-input bg-white pl-12 pr-14 text-base font-semibold text-[color:var(--ink)] transition-colors duration-200 placeholder:text-[color:var(--ink-soft)] focus:border-[#0F7A5A] focus:outline-none focus:ring-2 focus:ring-[#0F7A5A]/30 sm:pl-14 sm:text-lg"
                  />

                  <button
                    type="button"
                    onClick={closeAll}
                    aria-label="Close search"
                    className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-[color:var(--ink-soft)] transition-colors hover:bg-[#0B2545]/[0.06] hover:text-[color:var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/60"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Results */}
                  {visibleResults.length > 0 && (
                    <div className="mt-3 overflow-hidden rounded-xl border border-border bg-white shadow-lg">
                      <ul
                        id="navbar-search-results"
                        role="listbox"
                        className="max-h-[55vh] overflow-y-auto p-2"
                      >
                        {visibleResults.map((result, index) => (
                          <li
                            key={result.key}
                            role="option"
                            aria-selected={index === highlighted}
                          >
                            <button
                              type="button"
                              onClick={() => handleResultClick(result)}
                              onMouseEnter={() => setHighlighted(index)}
                              className={cn(
                                "group flex w-full items-start gap-4 rounded-lg p-3 text-left transition-colors duration-150 sm:p-4",
                                index === highlighted
                                  ? "bg-[#0B2545]/[0.05]"
                                  : "hover:bg-[#0B2545]/[0.04]",
                              )}
                            >
                              <span className="mt-0.5 shrink-0 rounded-lg bg-[#0B2545]/[0.06] p-2.5">
                                {getResultIcon(result.type)}
                              </span>

                              <span className="min-w-0 flex-1">
                                <span className="block text-sm font-bold text-[color:var(--ink-soft)]">
                                  {TYPE_LABEL[result.type]}
                                </span>
                                <span className="mt-0.5 line-clamp-2 block text-base font-bold text-[color:var(--ink)] group-hover:text-[#0F7A5A] sm:text-lg">
                                  {result.title}
                                </span>
                                <span className="mt-1 line-clamp-2 block text-sm font-medium text-[color:var(--ink-soft)] sm:text-[15px]">
                                  {result.excerpt}
                                </span>
                              </span>

                              {index === highlighted && (
                                <CornerDownLeft className="mt-2 hidden h-4 w-4 shrink-0 text-[color:var(--ink-soft)] sm:block" />
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>

                      {searchResults.length > MAX_RESULTS && (
                        <div className="border-t border-border bg-background px-4 py-3 text-center text-sm font-semibold text-[color:var(--ink-soft)]">
                          Showing {MAX_RESULTS} of {searchResults.length}{" "}
                          results. Keep typing to narrow them down.
                        </div>
                      )}
                    </div>
                  )}

                  {/* No results */}
                  {hasQuery && searchResults.length === 0 && (
                    <div className="mt-3 rounded-xl border border-border bg-white p-8 text-center shadow-lg">
                      <Search className="mx-auto mb-3 h-10 w-10 text-[color:var(--line-strong)]" />
                      <h4 className="mb-1 text-lg font-bold text-[color:var(--ink)]">
                        No results for &ldquo;{searchQuery.trim()}&rdquo;
                      </h4>
                      <p className="text-base font-medium text-[color:var(--ink-soft)]">
                        Check the spelling or try a shorter keyword.
                      </p>
                    </div>
                  )}

                  {/* Hint when empty */}
                  {!hasQuery && (
                    <p className="mt-3 hidden text-sm font-medium text-[color:var(--ink-soft)] sm:block">
                      Use the arrow keys to move, Enter to open, Esc to close.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---------------------------- Scroll progress -------------------------- */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-[#0F7A5A]"
        />
      </div>
    </motion.header>
  );
}