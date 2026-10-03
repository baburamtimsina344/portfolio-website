

"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Sparkles, BookOpen, FileText, Award, User, Briefcase, ExternalLink } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { cn, scrollToSection } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from "@/data/profile";
import { PUBLICATIONS } from "@/data/publications";
import { NEWS_ITEMS } from "@/data/news";
import { KNOWLEDGE_ITEMS } from "@/data/knowledge";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { SocialLinks } from "../common/SocialLinks";

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: "publication" | "news" | "knowledge" | "nav-item";
  url?: string;
  sectionId?: string;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const activeSection = useScrollSpy(NAV_ITEMS.map((n) => n.id));
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      setOpen(false);
      setIsSearchOpen(false);
      return;
    }
    scrollToSection(id);
    setOpen(false);
    setIsSearchOpen(false);
  };

  // Perform search whenever searchQuery changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const results: SearchResult[] = [];

    // Search Publications
    PUBLICATIONS.forEach((pub) => {
      if (
        pub.title.toLowerCase().includes(query) ||
        pub.authors.toLowerCase().includes(query) ||
        pub.journal.toLowerCase().includes(query)
      ) {
        results.push({
          id: pub.id,
          title: pub.title,
          excerpt: `${pub.authors} · ${pub.journal || "Unknown Journal"} · ${pub.year}`,
          type: "publication",
          sectionId: "publications",
        });
      }
    });

    // Search News/Research Areas
    NEWS_ITEMS.forEach((news) => {
      if (
        news.title.toLowerCase().includes(query) ||
        news.excerpt.toLowerCase().includes(query)
      ) {
        results.push({
          id: news.id,
          title: news.title,
          excerpt: news.excerpt,
          type: "news",
          sectionId: "news",
        });
      }
    });

    // Search Knowledge Items
    KNOWLEDGE_ITEMS.forEach((item) => {
      if (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      ) {
        results.push({
          id: item.id,
          title: item.title,
          excerpt: `${item.description} · ${item.year}`,
          type: "knowledge",
          url: "/projects",
        });
      }
    });

    // Search Nav Items
    NAV_ITEMS.forEach((item) => {
      if (item.label.toLowerCase().includes(query)) {
        results.push({
          id: item.id,
          title: item.label,
          excerpt: "Navigate to this section",
          type: "nav-item",
          sectionId: item.id,
          url: item.path,
        });
      }
    });

    setSearchResults(results);
    setShowResults(true);
  }, [searchQuery]);

  const handleResultClick = (result: SearchResult) => {
    if (result.url) {
      navigate(result.url);
    } else if (result.sectionId) {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: result.sectionId } });
      } else {
        scrollToSection(result.sectionId);
      }
    }
    setIsSearchOpen(false);
    setSearchQuery("");
    setShowResults(false);
    setOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Keep search results visible after form submission
    setShowResults(true);
  };

  const getResultIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "publication":
        return <BookOpen className="w-4 h-4 text-[#0F7A5A]" />;
      case "news":
        return <FileText className="w-4 h-4 text-[#0B2545]" />;
      case "knowledge":
        return <Briefcase className="w-4 h-4 text-purple-600" />;
      case "nav-item":
        return <User className="w-4 h-4 text-gray-600" />;
      default:
        return <Search className="w-4 h-4" />;
    }
  };

  const isItemActive = (item: (typeof NAV_ITEMS)[0]) => {
    if (item.path) {
      return location.pathname === item.path;
    }
    return activeSection === item.id;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="relative bg-white/90 backdrop-blur-md border-b border-[#0F7A5A]/20 shadow-lg shadow-[#0B2545]/5">
        {/* Top green accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#0F7A5A] to-transparent" />

        {/* Social Links Bar – Green Accent */}
        <div className="border-b border-[#0F7A5A]/10 bg-[#F8F9FA]">
          <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5">
            <div className="flex items-center justify-between gap-2">
              {/* Hide label on very small screens to free up space for icons + search */}
              <span className="type-kicker hidden xs:block sm:block text-[#0F7A5A] truncate">
                {/* Connect with me */}
              </span>
              <div className="flex items-center gap-2 sm:gap-4 ml-auto shrink-0">
                {/* Social icons – responsive size */}
                <SocialLinks
                  links={SOCIAL_LINKS}
                  size="sm"
                  className="gap-2 sm:gap-4"
                />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  aria-label="Search"
                  className="p-1.5 rounded-full hover:bg-[#0F7A5A]/10 transition-colors cursor-pointer shrink-0"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F7A5A] transition-colors hover:text-[#0B6A4E]" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation – Green Accents & Glassmorphism */}
        <nav
          className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-3 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => {
              const isActive = isItemActive(item);

              if (item.path) {
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive: routeActive }) =>
                      cn(
                        "relative px-4 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer rounded-lg",
                        routeActive
                          ? "text-[#0B2545] bg-[#0F7A5A]/5"
                          : "text-[#4A5A6A] hover:text-[#0F7A5A] hover:bg-[#0F7A5A]/5"
                      )
                    }
                  >
                    {({ isActive: routeActive }) => (
                      <>
                        <span className="relative z-10">{item.label}</span>
                        {routeActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-6 rounded-full bg-[#0F7A5A] shadow-sm shadow-[#0F7A5A]/30"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              }

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.03 }}
                  className={cn(
                    "relative px-4 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer rounded-lg",
                    isActive
                      ? "text-[#0B2545] bg-[#0F7A5A]/5"
                      : "text-[#4A5A6A] hover:text-[#0F7A5A] hover:bg-[#0F7A5A]/5"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-6 rounded-full bg-[#0F7A5A] shadow-sm shadow-[#0F7A5A]/30"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Logo/brand can go here for md screens if needed */}

          {/* Mobile Menu Button – Green Accent */}
          <div className="flex items-center gap-1 xl:ml-auto">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="xl:hidden"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className="h-10 w-10 sm:h-11 sm:w-11 hover:bg-[#0F7A5A]/10 rounded-full transition-colors"
                  >
                    <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-[#0B2545] hover:text-[#0F7A5A] transition-colors" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] max-w-[320px] sm:max-w-[380px] bg-white/95 backdrop-blur-md border-l border-[#0F7A5A]/20 shadow-2xl"
              >
                <SheetHeader className="border-b border-[#0F7A5A]/10 pb-4">
                  <SheetTitle className="flex items-center gap-3 text-[#0B2545]">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0F7A5A] to-[#0B6A4E] flex items-center justify-center shadow-md shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-sans text-lg sm:text-xl truncate">
                      {SITE_CONFIG.name}
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-1.5">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = isItemActive(item);

                    if (item.path) {
                      return (
                        <NavLink
                          key={item.id}
                          to={item.path}
                          onClick={() => setOpen(false)}
                          className={({ isActive: routeActive }) =>
                            cn(
                              "flex items-center justify-between px-4 py-3.5 text-sm rounded-xl transition-all duration-200 cursor-pointer",
                              routeActive
                                ? "bg-[#0F7A5A]/10 text-[#0F7A5A] font-medium"
                                : "text-[#4A5A6A] hover:bg-[#0F7A5A]/5 hover:text-[#0F7A5A]"
                            )
                          }
                        >
                          {({ isActive: routeActive }) => (
                            <>
                              <span>{item.label}</span>
                              {routeActive && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 rounded-full bg-[#0F7A5A]"
                                />
                              )}
                            </>
                          )}
                        </NavLink>
                      );
                    }

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                          "flex items-center justify-between px-4 py-3.5 text-sm rounded-xl transition-all duration-200 cursor-pointer",
                          isActive
                            ? "bg-[#0F7A5A]/10 text-[#0F7A5A] font-medium"
                            : "text-[#4A5A6A] hover:bg-[#0F7A5A]/5 hover:text-[#0F7A5A]"
                        )}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-[#0F7A5A]"
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
                <div className="absolute bottom-6 left-6 right-6 border-t border-[#0F7A5A]/10 pt-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="type-kicker text-[#0F7A5A] shrink-0">
                      Connect
                    </span>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <SocialLinks
                        links={SOCIAL_LINKS}
                        size="sm"
                        className="gap-3 sm:gap-4"
                      />
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setOpen(false);
                          setIsSearchOpen(!isSearchOpen);
                        }}
                        aria-label="Search"
                        className="p-1.5 rounded-full hover:bg-[#0F7A5A]/10 transition-colors cursor-pointer shrink-0"
                      >
                        <Search className="w-5 h-5 text-[#0F7A5A]" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        {/* Search Bar – Green Accents */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-[#0F7A5A]/10"
            >
              <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
                <form onSubmit={handleSearch} className="relative">
                  <motion.div
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.05 }}
                    className="relative"
                  >
                    <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#0F7A5A]" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search articles, research, or projects..."
                      className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 rounded-xl bg-[#F8F9FA] border border-[#0F7A5A]/20 focus:border-[#0F7A5A] focus:outline-none focus:ring-2 focus:ring-[#0F7A5A]/30 transition-all duration-200 text-[#0B2545] placeholder:text-[#4A5A6A]/60 text-sm shadow-inner"
                      autoFocus
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-9 sm:w-9 rounded-full hover:bg-[#0F7A5A]/10 transition-colors cursor-pointer"
                    >
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-[#4A5A6A]/60 hover:text-[#0F7A5A] transition-colors" />
                    </Button>
                  </motion.div>
                </form>

                {/* Search Results */}
                <AnimatePresence>
                  {showResults && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 bg-white border border-[#0F7A5A]/10 rounded-xl shadow-lg overflow-hidden"
                    >
                      <div className="max-h-[60vh] overflow-y-auto">
                        <div className="p-2 sm:p-3">
                          {searchResults.slice(0, 8).map((result, index) => (
                            <motion.button
                              key={result.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => handleResultClick(result)}
                              className="w-full text-left p-3 sm:p-4 rounded-lg hover:bg-[#0F7A5A]/5 transition-all duration-200 flex items-start gap-3 group"
                            >
                              <div className="mt-1 shrink-0 p-2 bg-[#0F7A5A]/10 rounded-lg">
                                {getResultIcon(result.type)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm sm:text-base font-medium text-[#0B2545] group-hover:text-[#0F7A5A] transition-colors line-clamp-2">
                                  {result.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-[#4A5A6A] mt-1 line-clamp-2">
                                  {result.excerpt}
                                </p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-[#4A5A6A]/40 shrink-0 mt-1 group-hover:text-[#0F7A5A] transition-colors" />
                            </motion.button>
                          ))}
                        </div>
                        {searchResults.length > 8 && (
                          <div className="p-3 border-t border-[#0F7A5A]/10 bg-[#F8F9FA]/50">
                            <p className="text-xs sm:text-sm text-[#4A5A6A] text-center">
                              +{searchResults.length - 8} more results. Continue typing to refine.
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                  {showResults && searchResults.length === 0 && searchQuery.trim() && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-6 bg-white border border-[#0F7A5A]/10 rounded-xl shadow-lg text-center"
                    >
                      <Search className="w-10 h-10 text-[#0F7A5A]/30 mx-auto mb-3" />
                      <h4 className="text-[#0B2545] font-medium mb-1">No results found</h4>
                      <p className="text-[#4A5A6A] text-sm">
                        Try different keywords or check your spelling
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
