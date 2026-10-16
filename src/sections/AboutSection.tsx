"use client";

import { motion } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";
import type { CSSProperties } from "react";

// ─── Animation Variants ──────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const paragraphStyle: CSSProperties = {
  fontSize: "clamp(14px, 1.6vw, 16px)",
  lineHeight: 1.85,
  color: "var(--ink-soft)",
  margin: 0,
  fontWeight: 400,
  fontFamily: "var(--font-app)",
  letterSpacing: "0",
  textAlign: "justify",
};

// ─── Component ───────────────────────────────────────────────────────
export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Baburam Timsina"
      style={{
        position: "relative",
        padding: "40px 0 var(--section-y)",
        background: "var(--off-white)",
        overflow: "hidden",
      }}
    >
      {/* ── Section Divider ─────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "var(--line)",
        }}
      />

      {/* ── Container ───────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1500,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 56px)",
        }}
      >
        {/* ── Section Header ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 32, textAlign: "center" }}
        >
          {/* <div style={{ marginBottom: 10 }}>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--green)",
                fontFamily: "var(--font-app)",
              }}
            >
              About
            </span>
          </div> */}

          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "var(--tracking-display)",
              lineHeight: 1.1,
              color: "var(--ink)",
              margin: 0,
              fontFamily: "var(--font-heading)",
            }}
          >
            Biography
          </h2>
        </motion.div>

        {/* ── Bio Card ────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          style={{ maxWidth: 920, margin: "0 auto" }}
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ boxShadow: "0 8px 24px -10px rgba(15,27,45,0.18)" }}
            transition={{ duration: 0.32 }}
            style={{
              position: "relative",
              background: "#FFFFFF",
              borderRadius: 12,
              border: "1px solid var(--line)",
              boxShadow: "0 1px 2px 0 rgba(15,27,45,0.05)",
              padding: "clamp(20px, 3vw, 32px)",
              overflow: "hidden",
              transition: "box-shadow 0.32s",
            }}
          >
          

            {/* Divider */}
            <div
              style={{ height: 1, marginBottom: 24, background: "var(--line)" }}
            />

            {/* Biography paragraphs */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                borderLeft: "2px solid var(--green)",
                paddingLeft: "clamp(16px, 2.5vw, 24px)",
              }}
            >
              <p style={paragraphStyle}>
                Advancing scholarship and institutional transformation in higher
                education, I work at the intersection of higher education
                leadership, governance, internationalization, and organizational
                development. My scholarly interests focus on how leadership,
                institutional structures, governance, and strategic
                decision-making shape the effectiveness, inclusiveness, and
                future directions of higher education systems, particularly in
                emerging economies.
              </p>
              <p style={paragraphStyle}>
                My research extends across higher education leadership and
                management, institutional transformation, educational
                governance, organizational behavior, and corporate social
                responsibility. Through interdisciplinary inquiry, I seek to
                understand how universities can strengthen institutional
                capacity, advance international engagement, improve
                decision-making, and respond to the evolving demands of a
                knowledge-driven society. My broader research agenda connects
                institutional reform with the changing global higher education
                ecosystem, emphasizing evidence-informed leadership, sustainable
                development, and future-oriented educational systems.
              </p>
              <p style={paragraphStyle}>
                Beyond research and teaching, I contribute to scholarly
                publishing through editorial leadership, peer review, and
                academic collaboration. I serve as Chair of the Journal
                Management Committee at{" "}
                <a
                  href="https://mssrnpress.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--green)",
                    fontWeight: 600,
                    textDecoration: "underline",
                    textUnderlineOffset: 2,
                  }}
                >
                  MSSRNPRESS.ORG
                </a>{" "}
                and contribute to the editorial and peer-review activities of
                several scholarly journals. Through these engagements, I support
                responsible scholarly communication, collaborative knowledge
                production, and the development of research communities.
              </p>
              <p style={paragraphStyle}>
                My academic mission is to connect research, leadership, policy,
                and institutional practice to advance higher education
                transformation and internationalization. My overarching aim is
                to contribute to a more responsive, globally connected, and
                sustainable higher education ecosystem through scholarship that
                informs institutional change and shapes the future of
                universities.
              </p>
            </div>

            {/* CTA Button */}
            <div style={{ display: "flex", marginTop: 24 }}>
              <motion.a
                href="https://www.linkedin.com/in/baburam-timsina-9a0b169b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline px-6 py-3 text-sm"
              >
                More About Me
                <ChevronRight style={{ width: 15, height: 15, opacity: 0.8 }} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
