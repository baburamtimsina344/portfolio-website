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
// //               fontFamily: "Inter, sans-serif",
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
// //                   fontFamily: "Inter, sans-serif",
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
//               fontFamily: "Inter, sans-serif",
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
//                   fontFamily: "Inter, sans-serif",
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
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/data/profile";
import { scrollToSection } from "@/lib/utils";
import { VisitorMap } from "@/sections/VisitorMap";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      style={{
        position: "relative",
        background: "#ffffff", // clean white background
        borderTop: "1px solid rgba(0,0,0,0.06)", // subtle top border
        overflow: "hidden",
      }}
    >
      <VisitorMap />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(32px, 4vw, 56px) clamp(20px, 5vw, 56px) 0",
        }}
      >
        {/* Divider - light gray */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)",
          }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            padding: "clamp(14px, 2vw, 20px) 0",
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: "rgba(0,0,0,0.6)", // dark gray for copyright
              margin: 0,
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
            }}
          >
            &copy; {currentYear}{" "}
            <span style={{ color: "rgba(0,0,0,0.8)", fontWeight: 500 }}>
              {SITE_CONFIG.name}
            </span>
            . All rights reserved.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {["Privacy Policy", "Terms of Use"].map((label, i) => (
              <motion.button
                key={label}
                transition={{ duration: 0.15 }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 12px",
                  fontSize: 11.5,
                  color: "rgba(0,0,0,0.6)", // dark gray
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  transition: "color 0.2s",
                  borderRight:
                    i === 0 ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(0,0,0,0.9)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(0,0,0,0.6)")
                }
              >
                {label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button - light version */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            style={{ position: "fixed", bottom: 28, right: 28, zIndex: 50 }}
          >
            <motion.button
              whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
              whileTap={{ scale: 0.93 }}
              transition={{ duration: 0.22 }}
              onClick={() => scrollToSection("home")}
              aria-label="Back to top"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.10)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "box-shadow 0.22s",
              }}
            >
              <ArrowUp style={{ width: 18, height: 18, color: "#1A3A6B" }} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}