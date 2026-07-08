// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ArrowUp } from "lucide-react";
// // import { SITE_CONFIG } from "@/data/profile";
// // import { scrollToSection } from "@/lib/utils";
// // import { VisitorMap } from "@/sections/VisitorMap";

// // export function Footer() {
// //   const [showBackToTop, setShowBackToTop] = useState(false);
// //   const currentYear = new Date().getFullYear();

// //   useEffect(() => {
// //     const handleScroll = () => setShowBackToTop(window.scrollY > 500);
// //     window.addEventListener("scroll", handleScroll, { passive: true });
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <footer
// //       style={{
// //         position: "relative",
// //         background: "linear-gradient(135deg, #0B2545 0%, #1A3A6B 55%, #0B2545 100%)",
// //         overflow: "hidden",
// //       }}
// //     >
// //       <VisitorMap/>
// //       <div
// //         style={{
// //           position: "relative",
// //           zIndex: 2,
// //           maxWidth: 1200,
// //           margin: "0 auto",
// //           padding: "clamp(32px, 4vw, 56px) clamp(20px, 5vw, 56px) 0",
// //         }}
// //       >
// //         {/* Divider */}
// //         <div
// //           style={{
// //             height: 1,
// //             background:
// //               "linear-gradient(90deg, transparent, rgba(0,184,148,0.30), rgba(255,255,255,0.08), transparent)",
// //           }}
// //         />

// //         {/* Bottom Bar */}
// //         <div
// //           style={{
// //             display: "flex",
// //             flexWrap: "wrap",
// //             alignItems: "center",
// //             justifyContent: "space-between",
// //             gap: 14,
// //             padding: "clamp(14px, 2vw, 20px) 0",
// //           }}
// //         >
// //           <p
// //             style={{
// //               fontSize: 12,
// //               color: "rgba(255,255,255,0.35)",
// //               margin: 0,
// //               fontFamily: "var(--font-app)",
// //               fontWeight: 400,
// //             }}
// //           >
// //             &copy; {currentYear}{" "}
// //             <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
// //               {SITE_CONFIG.name}
// //             </span>
// //             . All rights reserved.
// //           </p>

// //           <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
// //             {["Privacy Policy", "Terms of Use"].map((label, i) => (
// //               <motion.button
// //                 key={label}
// //                 transition={{ duration: 0.15 }}
// //                 style={{
// //                   background: "none",
// //                   border: "none",
// //                   cursor: "pointer",
// //                   padding: "5px 12px",
// //                   fontSize: 11.5,
// //                   color: "rgba(255,255,255,0.35)",
// //                   fontFamily: "var(--font-app)",
// //                   fontWeight: 400,
// //                   transition: "color 0.2s",
// //                   borderRight:
// //                     i === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
// //                 }}
// //                 onMouseEnter={(e) =>
// //                   (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
// //                 }
// //                 onMouseLeave={(e) =>
// //                   (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
// //                 }
// //               >
// //                 {label}
// //               </motion.button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Back to Top Button */}
// //       <AnimatePresence>
// //         {showBackToTop && (
// //           <motion.div
// //             initial={{ opacity: 0, y: 12 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: 12 }}
// //             transition={{ duration: 0.25 }}
// //             style={{ position: "fixed", bottom: 28, right: 28, zIndex: 50 }}
// //           >
// //             <motion.button
// //               whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(11,37,69,0.35)" }}
// //               whileTap={{ scale: 0.93 }}
// //               transition={{ duration: 0.22 }}
// //               onClick={() => scrollToSection("home")}
// //               aria-label="Back to top"
// //               style={{
// //                 width: 44,
// //                 height: 44,
// //                 borderRadius: "50%",
// //                 background: "linear-gradient(135deg, #0B2545, #1A3A6B)",
// //                 border: "1.5px solid rgba(0,184,148,0.40)",
// //                 boxShadow: "0 6px 20px rgba(11,37,69,0.40)",
// //                 cursor: "pointer",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 transition: "box-shadow 0.22s",
// //               }}
// //             >
// //               <ArrowUp style={{ width: 18, height: 18, color: "#00B894" }} />
// //             </motion.button>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </footer>
// //   );
// // }



// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUp } from "lucide-react";
// import { SITE_CONFIG } from "@/data/profile";
// import { scrollToSection } from "@/lib/utils";
// import { BRAND_GRADIENT } from "@/lib/theme";
// import { VisitorMap } from "@/sections/VisitorMap";

// export function Footer() {
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const currentYear = new Date().getFullYear();

//   useEffect(() => {
//     const handleScroll = () => setShowBackToTop(window.scrollY > 500);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <footer
//       style={{
//         position: "relative",
//         background: BRAND_GRADIENT,
//         overflow: "hidden",
//       }}
//     >
//       <VisitorMap/>
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           maxWidth: 1200,
//           margin: "0 auto",
//           padding: "clamp(32px, 4vw, 56px) clamp(20px, 5vw, 56px) 0",
//         }}
//       >
//         {/* Divider */}
//         <div
//           style={{
//             height: 1,
//             background:
//               "linear-gradient(90deg, transparent, rgba(0,184,148,0.30), rgba(255,255,255,0.08), transparent)",
//           }}
//         />

//         {/* Bottom Bar */}
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: 14,
//             padding: "clamp(14px, 2vw, 20px) 0",
//           }}
//         >
//           <p
//             style={{
//               fontSize: 12,
//               color: "rgba(255,255,255,0.35)",
//               margin: 0,
//               fontFamily: "var(--font-app)",
//               fontWeight: 400,
//             }}
//           >
//             &copy; {currentYear}{" "}
//             <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
//               {SITE_CONFIG.name}
//             </span>
//             . All rights reserved.
//           </p>

//           <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//             {["Privacy Policy", "Terms of Use"].map((label, i) => (
//               <motion.button
//                 key={label}
//                 transition={{ duration: 0.15 }}
//                 style={{
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                   padding: "5px 12px",
//                   fontSize: 11.5,
//                   color: "rgba(255,255,255,0.35)",
//                   fontFamily: "var(--font-app)",
//                   fontWeight: 400,
//                   transition: "color 0.2s",
//                   borderRight:
//                     i === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
//                 }
//               >
//                 {label}
//               </motion.button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Back to Top Button */}
//       <AnimatePresence>
//         {showBackToTop && (
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 12 }}
//             transition={{ duration: 0.25 }}
//             style={{ position: "fixed", bottom: 28, right: 28, zIndex: 50 }}
//           >
//             <motion.button
//               whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(11,37,69,0.35)" }}
//               whileTap={{ scale: 0.93 }}
//               transition={{ duration: 0.22 }}
//               onClick={() => scrollToSection("home")}
//               aria-label="Back to top"
//               style={{
//                 width: 44,
//                 height: 44,
//                 borderRadius: "50%",
//                 background: "linear-gradient(135deg, #0B2545, #1A3A6B)",
//                 border: "1.5px solid rgba(0,184,148,0.40)",
//                 boxShadow: "0 6px 20px rgba(11,37,69,0.40)",
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "box-shadow 0.22s",
//               }}
//             >
//               <ArrowUp style={{ width: 18, height: 18, color: "#00B894" }} />
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </footer>
//   );
// }

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/profile";
import { SocialLinks } from "@/components/common/SocialLinks";
import { scrollToSection } from "@/lib/utils";
import { VisitorMap } from "@/sections/VisitorMap";

const footerLinks = ["Privacy Policy", "Terms of Use"];

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t nav-surface">
      <div className="absolute inset-x-0 top-0 h-0.5 dashboard-accent-line" aria-hidden="true" />
      <VisitorMap />

      <div className="relative z-10 border-t nav-subtle-surface">
        <div className="container mx-auto px-3 py-6 sm:px-6 sm:py-7 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F7A5A] to-[#0B6A4E] shadow-md">
                <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="type-card-title text-[#0B2545]">{SITE_CONFIG.name}</p>
                <p className="type-caption mt-1 max-w-2xl text-[#4A5A6A]">
                  Academic portfolio for research, teaching, scholarly service, and professional engagement.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
              <a
                className="footer-link w-fit"
                href={`mailto:${SITE_CONFIG.emails[0]}`}
                aria-label={`Email ${SITE_CONFIG.name}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact
              </a>
              <SocialLinks links={SOCIAL_LINKS} size="sm" className="gap-3" />
            </div>
          </div>

          <div className="mt-6 h-px bg-linear-to-r from-transparent via-[#0F7A5A]/20 to-transparent" />

          <div className="flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-caption text-[#4A5A6A]">
              &copy; {currentYear} <span className="font-semibold text-[#0B2545]">{SITE_CONFIG.name}</span>. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-1">
              {footerLinks.map((label) => (
                <motion.button
                key={label}
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="footer-link"
              >
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                {label}
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
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0F7A5A]/20 bg-white/95 text-[#0B2545] shadow-lg shadow-[#0B2545]/10 backdrop-blur-md transition-all duration-200 hover:border-[#0F7A5A]/35 hover:bg-[#0F7A5A]/5 hover:text-[#0F7A5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F7A5A]/30"
            >
              <ArrowUp className="h-5 w-5" aria-hidden="true" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
