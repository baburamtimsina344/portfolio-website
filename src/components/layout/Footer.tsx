import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail, MapPin, ExternalLink } from "lucide-react";
import { SocialLinks } from "@/components/common/SocialLinks";
import { NAV_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from "@/data/profile";
import { scrollToSection } from "@/lib/utils";

// ─── Animation Variants ──────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.70, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

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
        background: "linear-gradient(135deg, #0B2545 0%, #1A3A6B 55%, #0B2545 100%)",
        overflow: "hidden",
      }}
    >
      {/* ── Top divider ── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(0,184,148,0.50), rgba(11,37,69,0.20), transparent)",
      }} />

      {/* ── Background Orbs ── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "-30%", right: "-8%",
          width: 520, height: 520, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,184,148,0.09) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-40%", left: "-10%",
          width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,92,184,0.14) 0%, transparent 70%)",
        }} />
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.025,
          backgroundImage: "radial-gradient(circle, rgba(0,184,148,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
      </div>

      {/* ── Main Footer Content ── */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1200, margin: "0 auto",
        padding: "clamp(56px, 7vw, 88px) clamp(20px, 5vw, 56px) 0",
      }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "clamp(36px, 5vw, 60px)",
            paddingBottom: "clamp(48px, 6vw, 72px)",
          }}
        >

          {/* ── Col 1: Brand ── */}
          <motion.div variants={fadeInUp} style={{ gridColumn: "span 1" }}>
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20,
              padding: "5px 14px",
              borderRadius: 100,
              background: "rgba(0,184,148,0.10)",
              border: "1px solid rgba(0,184,148,0.24)",
            }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#00B894" }} />
              <span style={{
                fontSize: 9.5, fontWeight: 700,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#00B894", fontFamily: "Inter, sans-serif",
              }}>
                Professor Portfolio
              </span>
            </div>

            {/* Name */}
            <h2 style={{
              fontSize: "clamp(22px, 2.5vw, 28px)",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              margin: "0 0 10px 0",
              fontFamily: "Inter, sans-serif",
            }}>
              {SITE_CONFIG.name}
            </h2>

            {/* Title */}
            <p style={{
              fontSize: 13, fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
              margin: "0 0 22px 0",
              lineHeight: 1.6,
              fontFamily: "Inter, sans-serif",
            }}>
              {SITE_CONFIG.title ?? "Professor & Academic Leader"}
            </p>

            {/* Green rule */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <div style={{ height: 1, width: 48, background: "linear-gradient(to right, #00B894, rgba(0,184,148,0.20))" }} />
              <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#00B894", opacity: 0.7 }} />
            </div>

            {/* Social Links – white icons */}
            <div className="[&_svg]:text-white">
              <SocialLinks links={SOCIAL_LINKS} />
            </div>
          </motion.div>

          {/* ── Col 2: Quick Links ── */}
          <motion.div variants={fadeInUp}>
            <p style={{
              fontSize: 10, fontWeight: 700,
              letterSpacing: "0.20em", textTransform: "uppercase",
              color: "#00B894",
              margin: "0 0 20px 0",
              fontFamily: "Inter, sans-serif",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 16, height: 1.5, background: "#00B894", display: "inline-block", borderRadius: 1 }} />
              Quick Links
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.18 }}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "7px 0",
                      fontSize: 13.5,
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.62)",
                      fontFamily: "Inter, sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "color 0.2s",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.62)")}
                  >
                    <span style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "rgba(0,184,148,0.40)",
                      flexShrink: 0,
                      transition: "background 0.2s",
                    }} />
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 3: Contact ── */}
          <motion.div variants={fadeInUp}>
            <p style={{
              fontSize: 10, fontWeight: 700,
              letterSpacing: "0.20em", textTransform: "uppercase",
              color: "#00B894",
              margin: "0 0 20px 0",
              fontFamily: "Inter, sans-serif",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 16, height: 1.5, background: "#00B894", display: "inline-block", borderRadius: 1 }} />
              Contact
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Location */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 9, flexShrink: 0,
                  background: "rgba(0,184,148,0.10)",
                  border: "1px solid rgba(0,184,148,0.20)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <MapPin style={{ width: 13, height: 13, color: "#00B894" }} />
                </div>
                <div>
                  <p style={{
                    fontSize: 11, fontWeight: 600,
                    color: "rgba(255,255,255,0.35)",
                    margin: "0 0 3px 0",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}>
                    Kirtipur, Nepal
                  </p>
                  <p style={{
                    fontSize: 13, fontWeight: 400,
                    color: "rgba(255,255,255,0.70)",
                    margin: 0,
                    fontFamily: "Inter, sans-serif",
                    lineHeight: 1.55,
                  }}>
                    {SITE_CONFIG.institution}
                    <br />
                    <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>
                      {SITE_CONFIG.location}
                    </span>
                  </p>
                </div>
              </div>

              {/* Emails */}
              {SITE_CONFIG.emails?.map((email) => (
                <div key={email} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: 9, flexShrink: 0,
                    background: "rgba(0,184,148,0.10)",
                    border: "1px solid rgba(0,184,148,0.20)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Mail style={{ width: 13, height: 13, color: "#00B894" }} />
                  </div>
                  <div style={{ paddingTop: 2 }}>
                    <p style={{
                      fontSize: 11, fontWeight: 600,
                      color: "rgba(255,255,255,0.35)",
                      margin: "0 0 3px 0",
                      fontFamily: "Inter, sans-serif",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}>
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.70)",
                        textDecoration: "none",
                        fontFamily: "Inter, sans-serif",
                        wordBreak: "break-all",
                        lineHeight: 1.5,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#00B894")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
                    >
                      {email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Col 4: CV Download CTA ── */}
          <motion.div variants={fadeInUp}>
            <p style={{
              fontSize: 10, fontWeight: 700,
              letterSpacing: "0.20em", textTransform: "uppercase",
              color: "#00B894",
              margin: "0 0 20px 0",
              fontFamily: "Inter, sans-serif",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 16, height: 1.5, background: "#00B894", display: "inline-block", borderRadius: 1 }} />
              Resources
            </p>

            {/* CV Card */}
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(11,37,69,0.40)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              style={{
                display: "block",
                background: "rgba(255,255,255,0.06)",
                border: "1.5px solid rgba(0,184,148,0.22)",
                borderRadius: 18,
                padding: "20px 22px",
                textDecoration: "none",
                marginBottom: 12,
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.25s",
              }}
            >
              {/* Top accent */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(90deg, #00B894, rgba(0,184,148,0.15))",
              }} />
              <p style={{
                fontSize: 10, fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#00B894",
                margin: "0 0 6px 0",
                fontFamily: "Inter, sans-serif",
              }}>
                Curriculum Vitae
              </p>
              <p style={{
                fontSize: 13.5, fontWeight: 600,
                color: "#FFFFFF",
                margin: "0 0 12px 0",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.4,
              }}>
                Download Full CV
              </p>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "6px 14px",
                borderRadius: 100,
                background: "linear-gradient(135deg, #00B894, #66D9A0)",
                fontSize: 11.5, fontWeight: 700,
                color: "#0B2545",
                letterSpacing: "0.04em",
                fontFamily: "Inter, sans-serif",
              }}>
                <ExternalLink style={{ width: 11, height: 11 }} />
                Download PDF
              </div>
            </motion.a>

            {/* Google Scholar quick link */}
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.18 }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 16px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,184,148,0.30)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <span style={{
                fontSize: 12.5, fontWeight: 500,
                color: "rgba(255,255,255,0.60)",
                fontFamily: "Inter, sans-serif",
              }}>
                Google Scholar Profile
              </span>
              <ExternalLink style={{ width: 12, height: 12, color: "rgba(0,184,148,0.60)" }} />
            </motion.a>
          </motion.div>

        </motion.div>

        {/* ── Divider ── */}
        <div style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,184,148,0.30), rgba(255,255,255,0.08), transparent)",
        }} />

        {/* ── Bottom Bar ── */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          padding: "clamp(18px, 2.5vw, 24px) 0",
        }}>
          <p style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.35)",
            margin: 0,
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
          }}>
            &copy; {currentYear}{" "}
            <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
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
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  transition: "color 0.2s",
                  borderRight: i === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Back to Top Button ── */}
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
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(11,37,69,0.35)" }}
              whileTap={{ scale: 0.93 }}
              transition={{ duration: 0.22 }}
              onClick={() => scrollToSection("home")}
              aria-label="Back to top"
              style={{
                width: 44, height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0B2545, #1A3A6B)",
                border: "1.5px solid rgba(0,184,148,0.40)",
                boxShadow: "0 6px 20px rgba(11,37,69,0.40)",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "box-shadow 0.22s",
              }}
            >
              <ArrowUp style={{ width: 18, height: 18, color: "#00B894" }} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}