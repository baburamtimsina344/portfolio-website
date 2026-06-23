// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, Sun, X, Search, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { cn, scrollToSection } from "@/lib/utils";
// import { NAV_ITEMS, SITE_CONFIG } from "@/data/profile";
// import { useScrollSpy } from "@/hooks/useScrollSpy";
// import { useTheme } from "@/hooks/useTheme";
// import { SocialLinks } from "../common/SocialLinks";

// export function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const activeSection = useScrollSpy(NAV_ITEMS.map((n) => n.id));
//   const { theme, toggleTheme } = useTheme();

//   const handleNavClick = (id: string) => {
//     scrollToSection(id);
//     setOpen(false);
//     setIsSearchOpen(false);
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Searching for:", searchQuery);
//     setIsSearchOpen(false);
//     setSearchQuery("");
//   };

//   // Social links – LinkedIn is included
//   const socialLinks = [
//     { name: "Email", icon: "email", url: "mailto:your@email.com" },
//     {
//       name: "ResearchGate",
//       icon: "researchgate",
//       url: "https://researchgate.net/your-profile",
//     },
//     {
//       name: "Google Scholar",
//       icon: "scholar",
//       url: "https://scholar.google.com/your-profile",
//     },
//     {
//       name: "Facebook",
//       icon: "facebook",
//       url: "https://facebook.com/your-profile",
//     },
//     {
//       name: "LinkedIn",
//       icon: "linkedin",
//       url: "https://www.linkedin.com/in/baburam-timsina-9a0b169b/",
//     },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed top-0 left-0 right-0 z-50"
//     >
//       <div className="relative bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm">
//         <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

//         {/* Social Links Bar */}
//         <div className="border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
//             <div className="flex items-center justify-between">
//               <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
//                 Connect with me
//               </span>
//               <div className="flex items-center gap-3">
//                 <SocialLinks links={socialLinks} size="sm" className="gap-3" />
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setIsSearchOpen(!isSearchOpen)}
//                   aria-label="Search"
//                   className="p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
//                 >
//                   <Search className="w-4 h-4 text-slate-600 dark:text-slate-400" />
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Navigation */}
//         <nav
//           className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
//           aria-label="Main navigation"
//         >
//           <div className="hidden xl:flex items-center gap-1">
//             {NAV_ITEMS.map((item, index) => (
//               <motion.button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.id)}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: index * 0.03 }}
//                 className={cn(
//                   "relative px-3 py-2 text-sm font-medium transition-all duration-200",
//                   activeSection === item.id
//                     ? "text-slate-900 dark:text-white"
//                     : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200",
//                 )}
//               >
//                 <span className="relative z-10">{item.label}</span>
//                 {activeSection === item.id && (
//                   <motion.div
//                     layoutId="activeNav"
//                     className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 dark:bg-blue-500"
//                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                   />
//                 )}
//               </motion.button>
//             ))}
//           </div>

//           <div className="flex items-center gap-1">
           

//             <Sheet open={open} onOpenChange={setOpen}>
//               <SheetTrigger asChild className="xl:hidden">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     aria-label="Open menu"
//                     className="h-9 w-9 hover:bg-slate-100 dark:hover:bg-slate-800"
//                   >
//                     <Menu className="h-5 w-5 text-slate-600 dark:text-slate-400" />
//                   </Button>
//                 </motion.div>
//               </SheetTrigger>
//               <SheetContent
//                 side="right"
//                 className="w-[300px] sm:w-[350px] bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800"
//               >
//                 <SheetHeader className="border-b border-slate-200 dark:border-slate-800 pb-4">
//                   <SheetTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
//                     <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 dark:from-blue-600 dark:to-blue-800 flex items-center justify-center">
//                       <Sparkles className="w-3 h-3 text-white" />
//                     </div>
//                     {SITE_CONFIG.name}
//                   </SheetTitle>
//                 </SheetHeader>
//                 <div className="mt-6 flex flex-col gap-1">
//                   {NAV_ITEMS.map((item, index) => (
//                     <motion.button
//                       key={item.id}
//                       onClick={() => handleNavClick(item.id)}
//                       initial={{ opacity: 0, x: -15 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       className={cn(
//                         "flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors duration-200",
//                         activeSection === item.id
//                           ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
//                           : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900",
//                       )}
//                     >
//                       <span>{item.label}</span>
//                       {activeSection === item.id && (
//                         <motion.div
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1 }}
//                           className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-blue-500"
//                         />
//                       )}
//                     </motion.button>
//                   ))}
//                 </div>
//                 <div className="absolute bottom-6 left-6 right-6 border-t border-slate-200 dark:border-slate-800 pt-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
//                       Connect
//                     </span>
//                     <div className="flex items-center gap-3">
//                       <SocialLinks links={socialLinks} size="sm" />
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => {
//                           setOpen(false);
//                           setIsSearchOpen(!isSearchOpen);
//                         }}
//                         aria-label="Search"
//                         className="p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
//                       >
//                         <Search className="w-4 h-4 text-slate-600 dark:text-slate-400" />
//                       </motion.button>
//                     </div>
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </nav>

//         {/* Search Bar */}
//         <AnimatePresence>
//           {isSearchOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.25, ease: "easeInOut" }}
//               className="overflow-hidden border-t border-slate-200 dark:border-slate-800"
//             >
//               <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
//                 <form onSubmit={handleSearch} className="relative">
//                   <motion.div
//                     initial={{ scale: 0.98, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ delay: 0.05 }}
//                     className="relative"
//                   >
//                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
//                     <input
//                       type="text"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       placeholder="Search articles, research, or projects..."
//                       className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-800 transition-all duration-200 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 text-sm"
//                       autoFocus
//                     />
//                     <Button
//                       type="button"
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => setIsSearchOpen(false)}
//                       className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
//                     >
//                       <X className="h-4 w-4 text-slate-400" />
//                     </Button>
//                   </motion.div>
//                 </form>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.header>
//   );
// }



"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Sparkles } from "lucide-react";
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
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { SocialLinks } from "../common/SocialLinks";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const activeSection = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setOpen(false);
    setIsSearchOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  // Social links – including LinkedIn
  const socialLinks = [
    { name: "Email", icon: "email", url: "mailto:your@email.com" },
    {
      name: "ResearchGate",
      icon: "researchgate",
      url: "https://researchgate.net/your-profile",
    },
    {
      name: "Google Scholar",
      icon: "scholar",
      url: "https://scholar.google.com/your-profile",
    },
    {
      name: "Facebook",
      icon: "facebook",
      url: "https://facebook.com/your-profile",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/baburam-timsina-9a0b169b/",
    },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="relative bg-white border-b border-slate-200 shadow-sm">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />

        {/* Social Links Bar */}
        <div className="border-b border-slate-100 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                Connect with me
              </span>
              <div className="flex items-center gap-3">
                <SocialLinks links={socialLinks} size="sm" className="gap-3" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  aria-label="Search"
                  className="p-1 rounded-md hover:bg-slate-200 transition-colors"
                >
                  <Search className="w-4 h-4 text-slate-600" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.03 }}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-all duration-200",
                  activeSection === item.id
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900",
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="xl:hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className="h-9 w-9 hover:bg-slate-100"
                  >
                    <Menu className="h-5 w-5 text-slate-600" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[350px] bg-white border-l border-slate-200"
              >
                <SheetHeader className="border-b border-slate-200 pb-4">
                  <SheetTitle className="flex items-center gap-2 text-slate-900">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    {SITE_CONFIG.name}
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-1">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        "flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors duration-200",
                        activeSection === item.id
                          ? "bg-slate-100 text-slate-900 font-medium"
                          : "text-slate-600 hover:bg-slate-50",
                      )}
                    >
                      <span>{item.label}</span>
                      {activeSection === item.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-1.5 h-1.5 rounded-full bg-slate-900"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
                <div className="absolute bottom-6 left-6 right-6 border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      Connect
                    </span>
                    <div className="flex items-center gap-3">
                      <SocialLinks links={socialLinks} size="sm" />
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setOpen(false);
                          setIsSearchOpen(!isSearchOpen);
                        }}
                        aria-label="Search"
                        className="p-1 rounded-md hover:bg-slate-200 transition-colors"
                      >
                        <Search className="w-4 h-4 text-slate-600" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-slate-200"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <form onSubmit={handleSearch} className="relative">
                  <motion.div
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.05 }}
                    className="relative"
                  >
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search articles, research, or projects..."
                      className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-slate-100 border border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all duration-200 text-slate-900 placeholder:text-slate-500 text-sm"
                      autoFocus
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 hover:bg-slate-200 transition-colors"
                    >
                      <X className="h-4 w-4 text-slate-400" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}