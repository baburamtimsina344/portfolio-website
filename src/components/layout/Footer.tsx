import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/common/SocialLinks";
import { NAV_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from "@/data/profile";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <footer className="relative bg-slate-50 border-t border-slate-200">
      <div className="relative section-padding container-wide">
        

        {/* Signature gradient hairline */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-[#4355DB]/40 via-[#1FB28E]/40 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <button className="hover:text-slate-600 transition-colors duration-150">
              Privacy Policy
            </button>
            <button className="hover:text-slate-600 transition-colors duration-150">
              Terms of Use
            </button>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="icon"
              variant="secondary"
              className="h-11 w-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 shadow-md"
              onClick={() => scrollToSection("home")}
              aria-label="Back to top"
            >
              <ArrowUp className="h-4.5 w-4.5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}