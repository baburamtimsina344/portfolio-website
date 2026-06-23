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

  const quickLinks = NAV_ITEMS.filter((item) => item.id !== "home");

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200">
      <div className="relative section-padding container-wide">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-slate-900 tracking-tight">
                {SITE_CONFIG.name}
              </h3>
              <p className="mt-1.5 text-sm text-slate-500">
                {SITE_CONFIG.title} &middot; {SITE_CONFIG.institution}
              </p>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Advancing knowledge through rigorous research, thoughtful
              teaching, and academic leadership.
            </p>

            <SocialLinks links={SOCIAL_LINKS} className="pt-1" size="sm" />
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-slate-500 hover:text-[#4355DB] transition-colors duration-150"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <Mail className="h-4 w-4 mt-0.5 text-slate-400 shrink-0" />
                <div className="space-y-1">
                  {SITE_CONFIG.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block hover:text-[#1FB28E] transition-colors duration-150 break-all"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="h-4 w-4 mt-0.5 text-slate-400 shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </li>
            </ul>
          </div>
        </div>

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