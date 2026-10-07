

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowUp,
//   BookOpen,
//   ChevronRight,
//   Home,
//   Mail,
//   ShieldCheck,
//   Sparkles,
//   User,
//   GraduationCap,
//   BriefcaseBusiness,
//   Award,
//   FileText,
//   Newspaper,
// } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS, RESEARCH_INTERESTS } from "@/data/profile";
// import { SocialLinks } from "@/components/common/SocialLinks";
// import { scrollToSection } from "@/lib/utils";
// import { VisitorMap } from "@/sections/VisitorMap";

// const footerLinks = ["Privacy Policy", "Terms of Use"];

// const getNavIcon = (label: string) => {
//   switch (label.toLowerCase()) {
//     case "home": return Home;
//     case "about": return User;
//     case "research": return Newspaper;
//     case "publications": return BookOpen;
//     case "teaching": return GraduationCap;
//     case "editorial & academic service ": return BriefcaseBusiness;
//     case "projects ": return BriefcaseBusiness;
//     case "awards & certifications  ": return Award;
//     case "cv": return FileText;
//     case "contact": return Mail;
//     default: return ChevronRight;
//   }
// };

// export function Footer() {
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const currentYear = new Date().getFullYear();

//   useEffect(() => {
//     const handleScroll = () => setShowBackToTop(window.scrollY > 500);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (item: typeof NAV_ITEMS[0]) => {
//     if (item.path) {
//       navigate(item.path);
//       return;
//     }
//     if (location.pathname !== "/") {
//       navigate("/", { state: { scrollTo: item.id } });
//       return;
//     }
//     scrollToSection(item.id);
//   };

//   return (
//     <footer className="relative overflow-hidden border-t nav-surface">
//       <div
//         className="absolute inset-x-0 top-0 h-0.5 dashboard-accent-line"
//         aria-hidden="true"
//       />
//       <VisitorMap />

//       <div className="relative z-10 overflow-hidden border-t nav-subtle-surface">
//         {/* Decorative backdrop, echoes Hero/VisitorMap sections */}
//         <div
//           className="pointer-events-none absolute inset-0 opacity-60"
//           style={{
//             background:
//               "radial-gradient(circle at 8% 0%, rgba(15,122,90,0.06), transparent 45%), radial-gradient(circle at 95% 100%, rgba(11,37,69,0.05), transparent 50%)",
//           }}
//           aria-hidden="true"
//         />

//         <div className="container relative mx-auto px-3 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        

//           <div className="mt-10 h-px bg-linear-to-r from-transparent via-[#0F7A5A]/25 to-transparent" />

//           <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
//             <p className="type-caption text-black">
//               &copy; {currentYear}{" "}
//               <span className="font-semibold text-black">
//                 {SITE_CONFIG.name}
//               </span>
//               . All rights reserved.
//             </p>

//             <div className="flex flex-wrap items-center gap-1">
//               {footerLinks.map((label, i) => (
//                 <motion.button
//                   key={label}
//                   type="button"
//                   whileHover={{ y: -1 }}
//                   whileTap={{ scale: 0.98 }}
//                   transition={{ duration: 0.15 }}
//                   className="footer-link"
//                 >
//                   <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
//                   {label}
//                   {i === 0 && (
//                     <span
//                       className="mx-1 h-3.5 w-px bg-[#0F7A5A]/15"
//                       aria-hidden="true"
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {showBackToTop && (
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 12 }}
//             transition={{ duration: 0.25 }}
//             className="fixed bottom-6 right-6 z-50"
//           >
//             <motion.button
//               whileHover={{ y: -3 }}
//               whileTap={{ scale: 0.93 }}
//               transition={{ duration: 0.22 }}
//               onClick={() => scrollToSection("home")}
//               aria-label="Back to top"
//               className="btn btn-outline btn-icon btn-pill relative h-11 w-11"
//             >
//               <span className="absolute inset-0 rounded-full border border-[#0F7A5A]/20 opacity-0 transition-opacity duration-300 hover:opacity-100" aria-hidden="true" />
//               <ArrowUp className="h-5 w-5" aria-hidden="true" />
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </footer>
//   );
// }


import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  BookOpen,
  ChevronRight,
  Home,
  Mail,
  ShieldCheck,
  Sparkles,
  User,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  FileText,
  Newspaper,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { SITE_CONFIG, NAV_ITEMS } from "@/data/profile";
import { scrollToSection } from "@/lib/utils";

const footerLinks = ["Privacy Policy", "Terms of Use"];

const getNavIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case "home": return Home;
    case "about": return User;
    case "research": return Newspaper;
    case "publications": return BookOpen;
    case "teaching": return GraduationCap;
    case "editorial & academic service ": return BriefcaseBusiness;
    case "projects ": return BriefcaseBusiness;
    case "awards & certifications  ": return Award;
    case "cv": return FileText;
    case "contact": return Mail;
    default: return ChevronRight;
  }
};

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: typeof NAV_ITEMS[0]) => {
    if (item.path) {
      navigate(item.path);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: item.id } });
      return;
    }
    scrollToSection(item.id);
  };

  return (
    <footer className="relative overflow-hidden border-t nav-surface">
      <div
        className="absolute inset-x-0 top-0 h-0.5 dashboard-accent-line"
        aria-hidden="true"
      />

      <div className="relative z-10 overflow-hidden border-t nav-subtle-surface">
        {/* Decorative backdrop, echoes Hero/VisitorMap sections */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 8% 0%, rgba(15,122,90,0.06), transparent 45%), radial-gradient(circle at 95% 100%, rgba(11,37,69,0.05), transparent 50%)",
          }}
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          {/* SocialLinks and NavItems are omitted here for brevity – keep your existing JSX */}

          <div className="mt-6 h-px bg-linear-to-r from-transparent via-[#0F7A5A]/25 to-transparent" />

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-caption text-black">
              &copy; {currentYear}{" "}
              <span className="font-semibold text-black">
                {SITE_CONFIG.name}
              </span>
              . All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-1">
              {footerLinks.map((label, i) => (
                <motion.button
                  key={label}
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="footer-link"
                >
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  {label}
                  {i === 0 && (
                    <span
                      className="mx-1 h-3.5 w-px bg-[#0F7A5A]/15"
                      aria-hidden="true"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.93 }}
              transition={{ duration: 0.22 }}
              onClick={() => scrollToSection("home")}
              aria-label="Back to top"
              className="btn btn-outline btn-icon btn-pill relative h-11 w-11"
            >
              <span className="absolute inset-0 rounded-full border border-[#0F7A5A]/20 opacity-0 transition-opacity duration-300 hover:opacity-100" aria-hidden="true" />
              <ArrowUp className="h-5 w-5" aria-hidden="true" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}