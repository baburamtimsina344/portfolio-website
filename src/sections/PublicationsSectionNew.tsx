
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Calendar,
  ArrowRight,
  BookMarked,
  Filter,
} from "lucide-react";
import { PUBLICATIONS, PUBLICATION_YEARS } from "@/data/publications";
import type { Publication } from "@/types";

const CATEGORIES: Array<{ value: "all" | Publication["category"]; label: string }> = [
  { value: "all", label: "All" },
  { value: "journal", label: "Journal Articles" },
  { value: "book", label: "Books" },
  { value: "report", label: "Reports" },
  { value: "conference", label: "Conference Papers" },
];

export function PublicationsSection() {
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<"all" | Publication["category"]>("all");

  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      const matchesYear = selectedYear === "all" || pub.year === selectedYear;
      const matchesCategory = selectedCategory === "all" || pub.category === selectedCategory;
      return matchesYear && matchesCategory;
    });
  }, [selectedYear, selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="publications"
      aria-label="Publications"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 120px) 0",
        background: "var(--gray-50)",
        overflow: "hidden",
      }}
    >
      {/* ── Top divider ──────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(0,184,148,0.30), rgba(11,37,69,0.12), transparent)",
        }}
      />

      {/* ── Background ───────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-12%",
            right: "-12%",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,184,148,0.07) 0%, rgba(26,64,128,0.04) 50%, transparent 75%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-12%",
            width: 640,
            height: 640,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(11,37,69,0.06) 0%, rgba(26,92,184,0.03) 50%, transparent 70%)",
          }}
        />
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.022,
            backgroundImage: "radial-gradient(circle, #0B2545 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ── Container ────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 56px)",
        }}
      >
        {/* ── Section Header ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 48, textAlign: "center" }}
        >
          {/* Eyebrow pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
              padding: "7px 20px",
              borderRadius: 100,
              background: "rgba(0,184,148,0.08)",
              border: "1px solid rgba(0,184,148,0.22)",
            }}
          >
            <BookMarked style={{ width: 12, height: 12, color: "var(--green)" }} />
            <span
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--navy)",
                fontFamily: "var(--font-app)",
              }}
            >
              Research Output
            </span>
            <BookMarked style={{ width: 12, height: 12, color: "var(--green)" }} />
          </div>

          {/* Main heading */}
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "var(--tracking-normal)",
              lineHeight: 1.1,
              color: "var(--navy)",
              margin: 0,
              fontFamily: "var(--font-app)",
            }}
          >
            Scholarly{" "}
            <span
              style={{
                background: "linear-gradient(90deg, var(--green) 0%, var(--green-light) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Publications
            </span>
          </h2>

          {/* Green rule */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginTop: 22,
            }}
          >
            <div
              style={{
                height: 1,
                width: 64,
                background:
                  "linear-gradient(to right, transparent, rgba(0,184,148,0.50))",
              }}
            />
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--green)",
                opacity: 0.7,
              }}
            />
            <div
              style={{
                height: 1,
                width: 64,
                background:
                  "linear-gradient(to left, transparent, rgba(0,184,148,0.50))",
              }}
            />
          </div>
        </motion.div>

        {/* ── Filters ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginBottom: 48,
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Category Filter */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Filter
              style={{ width: 16, height: 16, color: "var(--navy)", opacity: 0.6 }}
            />
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 600,
                  background:
                    selectedCategory === cat.value
                      ? "linear-gradient(135deg, var(--navy), var(--navy-light))"
                      : "rgba(11,37,69,0.05)",
                  color: selectedCategory === cat.value ? "#FFFFFF" : "var(--navy)",
                  border:
                    selectedCategory === cat.value
                      ? "1px solid rgba(0,184,148,0.20)"
                      : "1px solid rgba(11,37,69,0.10)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "var(--font-app)",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Year Filter */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Calendar
              style={{ width: 16, height: 16, color: "var(--navy)", opacity: 0.6 }}
            />
            <button
              onClick={() => setSelectedYear("all")}
              style={{
                padding: "8px 16px",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                background:
                  selectedYear === "all"
                    ? "linear-gradient(135deg, var(--navy), var(--navy-light))"
                    : "rgba(11,37,69,0.05)",
                color: selectedYear === "all" ? "#FFFFFF" : "var(--navy)",
                border:
                  selectedYear === "all"
                    ? "1px solid rgba(0,184,148,0.20)"
                    : "1px solid rgba(11,37,69,0.10)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "var(--font-app)",
              }}
            >
              All Years
            </button>
            {PUBLICATION_YEARS.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 600,
                  background:
                    selectedYear === year
                      ? "linear-gradient(135deg, var(--navy), var(--navy-light))"
                      : "rgba(11,37,69,0.05)",
                  color: selectedYear === year ? "#FFFFFF" : "var(--navy)",
                  border:
                    selectedYear === year
                      ? "1px solid rgba(0,184,148,0.20)"
                      : "1px solid rgba(11,37,69,0.10)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "var(--font-app)",
                }}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Publications Grid ─────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
            gap: 24,
          }}
        >
          {filteredPublications.length === 0 ? (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "60px 20px",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-app)",
              }}
            >
              No publications found for this filter.
            </div>
          ) : (
            filteredPublications.map((pub) => (
              <motion.div
                key={pub.id}
                variants={itemVariants}
                className="pub-card"
                style={{ height: "100%" }}
              >
                <PublicationCard pub={pub} />
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Count line */}
        <p
          style={{
            textAlign: "center",
            fontSize: 12.5,
            fontWeight: 500,
            color: "var(--text-secondary)",
            fontFamily: "var(--font-app)",
            marginTop: 36,
            letterSpacing: "0.04em",
          }}
        >
          Showing {filteredPublications.length} of {PUBLICATIONS.length} publications
        </p>
      </div>

      {/* ── Bottom divider ───────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(0,184,148,0.20), transparent)",
        }}
      />
    </section>
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 24px 64px rgba(11,37,69,0.14), 0 8px 24px rgba(0,184,148,0.08)" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        borderRadius: 20,
        border: "1.5px solid rgba(11,37,69,0.08)",
        boxShadow: "0 4px 20px rgba(11,37,69,0.08)",
        padding: "clamp(20px, 2.5vw, 28px)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "box-shadow 0.35s, border-color 0.35s",
      }}
    >
      {/* Left green accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 4,
          height: 56,
          background:
            "linear-gradient(to bottom, var(--green), rgba(0,184,148,0.08))",
          borderRadius: "20px 0 0 0",
        }}
      />

      {/* Green top accent line (hover reveal) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background:
            "linear-gradient(90deg, var(--green), rgba(0,184,148,0.20), transparent)",
          borderRadius: "20px 20px 0 0",
          opacity: 0,
          transition: "opacity 0.35s",
        }}
        className="pub-top-bar"
      />

      {/* Hover glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 20,
          background:
            "radial-gradient(circle at top left, rgba(0,184,148,0.04) 0%, transparent 60%)",
          opacity: 0,
          transition: "opacity 0.35s",
          pointerEvents: "none",
        }}
        className="pub-hover-glow"
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Year + Badges row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-secondary)",
              fontFamily: "var(--font-app)",
            }}
          >
            <Calendar style={{ width: 14, height: 14, color: "var(--green)" }} />
            {pub.year}
          </span>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 100,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: "rgba(0,184,148,0.09)",
              color: "var(--navy)",
              border: "1px solid rgba(0,184,148,0.22)",
              fontFamily: "var(--font-app)",
            }}
          >
            {pub.category}
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            marginBottom: 14,
            background:
              "linear-gradient(to right, rgba(0,184,148,0.25), transparent)",
          }}
        />

        {/* Title */}
        <h4
          style={{
            fontSize: "clamp(16px, 1.8vw, 19px)",
            fontWeight: 700,
            color: "var(--navy)",
            lineHeight: 1.35,
            letterSpacing: "var(--tracking-normal)",
            marginBottom: 12,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            transition: "color 0.25s",
            fontFamily: "var(--font-app)",
          }}
        >
          {pub.title}
        </h4>

        {/* Authors */}
        <p
          style={{
            fontSize: "clamp(13px, 1.4vw, 15px)",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            margin: 0,
            fontWeight: 500,
            fontFamily: "var(--font-app)",
            marginBottom: 8,
          }}
        >
          {pub.authors}
        </p>

        {/* Journal */}
        {pub.journal && (
          <p
            style={{
              fontSize: 12.5,
              fontStyle: "italic",
              color: "var(--navy)",
              opacity: 0.6,
              fontFamily: "var(--font-app)",
              marginTop: 4,
              marginBottom: 16,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: 1.5,
            }}
          >
            {pub.journal}
          </p>
        )}

        {/* DOI link */}
        <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid rgba(11,37,69,0.06)" }}>
          {pub.doi ? (
            <motion.a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.22 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                color: "var(--navy)",
                textDecoration: "none",
                fontFamily: "var(--font-app)",
                borderBottom: "1.5px solid rgba(0,184,148,0.40)",
                paddingBottom: 2,
                transition: "color 0.22s, border-color 0.22s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--green)";
                (e.currentTarget as HTMLElement).style.borderBottomColor =
                  "var(--green)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--navy)";
                (e.currentTarget as HTMLElement).style.borderBottomColor =
                  "rgba(0,184,148,0.40)";
              }}
            >
              View Document
              <ExternalLink style={{ width: 13, height: 13 }} />
            </motion.a>
          ) : (
            <motion.a
              href="https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.22 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                color: "var(--navy)",
                textDecoration: "none",
                fontFamily: "var(--font-app)",
                borderBottom: "1.5px solid rgba(0,184,148,0.40)",
                paddingBottom: 2,
                transition: "color 0.22s, border-color 0.22s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--green)";
                (e.currentTarget as HTMLElement).style.borderBottomColor =
                  "var(--green)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--navy)";
                (e.currentTarget as HTMLElement).style.borderBottomColor =
                  "rgba(0,184,148,0.40)";
              }}
            >
              View on Google Scholar
              <ArrowRight style={{ width: 13, height: 13 }} />
            </motion.a>
          )}
        </div>
      </div>

      <style>{`
        .pub-card:hover .pub-top-bar { opacity: 1 !important; }
        .pub-card:hover .pub-hover-glow { opacity: 1 !important; }
        .pub-card:hover { border-color: rgba(0,184,148,0.15) !important; }
      `}</style>
    </motion.div>
  );
}

