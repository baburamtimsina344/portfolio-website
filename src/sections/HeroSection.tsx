"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  BookOpen,
  Award,
  Quote,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  Star,
  Fingerprint,
} from "lucide-react";
import { useEffect, useState } from "react";

// ─── Motion presets ─────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const JOURNALS = ["JINA", "JHROS", "JSMS", "JISS"];

// ─── Helpers ────────────────────────────────────────────────────────
const num = (v: unknown, loading: boolean, decimals = 0) => {
  if (loading) return "…";
  const n = Number(v);
  return Number.isFinite(n)
    ? n.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : "—";
};

// ─── Profile image ──────────────────────────────────────────────────
function ProfileImage() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none mt-20"
    >
      <div className="absolute inset-0 translate-x-2 translate-y-2.5 rounded-3xl bg-gradient-to-br from-[#1A4080] to-[#1A5CB8] opacity-15" />
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-[#0F7A5A]/30 bg-white shadow-[0_20px_50px_rgba(11,37,69,0.18)]">
        <img
          src="/images/profile.png"
          alt="Baburam Timsina — Professor and Academic Leader"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B2545]/50 via-transparent to-transparent" />
      </div>
      <div className="absolute -right-3 -top-3 flex min-w-[68px] flex-col items-center rounded-2xl border border-[#0F7A5A]/25 bg-white px-4 py-2.5 shadow-lg">
        <span className="text-xl font-bold leading-none text-black">20+</span>
        <span className="mt-1 text-[9.5px] font-semibold uppercase tracking-widest text-black">
          Years
        </span>
      </div>
    </motion.div>
  );
}

// ─── Name + title + credentials ─────────────────────────────────────
function Identity() {
  return (
    <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-[clamp(30px,6vw,56px)] font-bold leading-tight tracking-tight text-black">
        Baburam{" "}
        <span className="relative inline-block bg-gradient-to-r from-[#0F7A5A] to-[#66D9A0] bg-clip-text text-transparent">
          Timsina
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-[#0F7A5A] via-[#66D9A0] to-transparent"
          />
        </span>
      </h1>

      <p className="w-full rounded-2xl border border-[#0F7A5A] bg-gradient-to-br from-[#0B2545] to-[#1A4080] px-5 py-5 text-center text-3xl leading-relaxed text-white shadow-[0_14px_36px_rgba(15,122,90,0.22)] sm:text-base text-justify">
        Higher Education Leadership Scholar | Institutional Transformation &amp;
        Internationalization Researcher | Higher Education Futures Strategist
      </p>

      <div className="flex flex-wrap justify-center gap-2.5">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A5A]/30 bg-gradient-to-br from-[#0B2545] to-[#1A4080] px-3.5 py-1.5 shadow-md">
          <Award className="h-3.5 w-3.5 text-[#0F7A5A]" />
          <span className="text-[11px] font-semibold tracking-wide text-white">
            JMC Chair <span className="mx-1 opacity-50">·</span>
            <span className="text-[#66D9A0]">MSSRNPRESS.ORG</span>
          </span>
        </div>

        <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#0F7A5A]/25 bg-white py-1.5 pl-3.5 pr-2 shadow-sm">
          <span className="text-[11px] font-semibold tracking-wide text-black">
            Editorial Member
          </span>
          {JOURNALS.map((j) => (
            <span
              key={j}
              className="rounded-full border border-[#0F7A5A]/20 bg-[#0F7A5A]/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-black"
            >
              {j}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Quote card ─────────────────────────────────────────────────────
function QuoteCard() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-2xl border border-[#0F7A5A]/20 bg-white p-6 ]"
    >
      <div className="absolute bottom-6 left-0 top-6 w-1 rounded-r bg-gradient-to-b from-[#0F7A5A] to-[#0F7A5A]/20" />
      <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg border border-[#0F7A5A]/20 bg-[#0F7A5A]/10">
        <Quote className="h-4 w-4 text-[#0F7A5A]" />
      </div>
      <blockquote className="m-0 pl-3 text-base font-semibold italic  text-black sm:text-lg">
        &ldquo;Advancing scholarship in higher education, educational leadership,
        and institutional transformation through research, teaching, and
        academic service.&rdquo;
      </blockquote>
    </motion.div>
  );
}

// ─── About teaser ───────────────────────────────────────────────────
function AboutTeaser() {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-[#0B2545]/10 bg-[#0B2545]/[0.03] px-5 py-4 transition-colors hover:border-[#0F7A5A]/30"
    >
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#0F7A5A]/30 bg-[#0F7A5A]/10">
          <BookOpen className="h-4 w-4 text-[#0F7A5A]" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
          About
        </span>
      </div>

      <p className="m-0 border-l-[3px] border-[#0F7A5A] py-1 pl-4 text-sm leading-relaxed text-black sm:text-[15px]">
        With a deep commitment to{" "}
        <strong className="font-semibold text-black">academic excellence</strong>{" "}
        and institutional leadership, I have dedicated my career to advancing
        education, mentoring future educators, and fostering transformative
        learning environments.
      </p>

      <a
        href="#about"
        className="group mt-3 inline-flex items-center gap-2 py-1 text-xs font-semibold uppercase tracking-wide text-black transition-colors hover:text-[#0F7A5A]"
      >
        Learn more
        <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
      </a>
    </motion.div>
  );
}

// ─── Counters ───────────────────────────────────────────────────────
function Counters({ heroStats }: { heroStats: any }) {
  const items = [
    { value: heroStats?.years_experience || "20+", label: "Years Experience", accent: false },
    { value: heroStats?.publications_count || "50+", label: "Publications", accent: true },
    { value: heroStats?.awards_honors || "15+", label: "Awards & Honors", accent: false },
  ];

  return (
    <motion.div variants={fadeUp} className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
      {items.map((s) => (
        <div
          key={s.label}
          className={`relative min-w-0 overflow-hidden rounded-2xl border-2 px-2 text-center transition-transform duration-300 hover:-translate-y-1 ${
            s.accent
              ? "border-[#0F7A5A] bg-gradient-to-br from-[#0B2545] to-[#1A4080] py-5 shadow-[0_14px_36px_rgba(15,122,90,0.25)]"
              : "border-[#0F7A5A]/15 bg-white py-4 shadow-md"
          }`}
        >
          {s.accent && (
            <Star className="mx-auto mb-1.5 h-5 w-5 fill-[#0F7A5A] text-[#0F7A5A]" />
          )}
          <div
            className={`font-extrabold leading-none ${
              s.accent ? "text-2xl text-[#0F7A5A] sm:text-3xl" : "text-xl text-black sm:text-2xl"
            }`}
          >
            {s.value}
          </div>
          <div
            className={`mt-2 break-words text-[9px] font-bold uppercase tracking-wider sm:text-[10px] ${
              s.accent ? "text-white/75" : "text-black"
            }`}
          >
            {s.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

// ─── CTA buttons ────────────────────────────────────────────────────
function CTAButtons() {
  return (
    <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
      <a
        href="#publications"
        className="btn btn-primary btn-pill gap-2 px-6 py-3 text-sm"
      >
        <BookOpen className="h-4 w-4" />
        View Publications
        <ChevronRight className="h-4 w-4 opacity-70" />
      </a>
      <a
        href="#contact"
        className="btn btn-outline btn-pill px-6 py-3 text-sm"
      >
        Get in Touch
      </a>
    </motion.div>
  );
}

// ─── Academic profile cards ─────────────────────────────────────────
function AcademicProfileCards() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { supabase } = await import("../lib/supabase");
        const { data } = await supabase.from("academic_stats").select("*").single();
        if (data) setStats(data);
      } catch (err) {
        console.error("Error fetching academic stats:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const profiles = [
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ",
      Icon: GraduationCap,
      badge: "from-[#4285F4] to-[#34A853]",
      border: "border-[#4285F4]/20",
      stats: [
        { value: num(stats?.google_scholar_citations, loading), label: "Citations" },
        { value: num(stats?.google_scholar_h_index, loading), label: "h-index" },
        { value: num(stats?.google_scholar_i10_index, loading), label: "i10-index" },
      ],
    },
    {
      name: "ResearchGate",
      href: "https://www.researchgate.net/profile/Baburam-Timsina-3",
      Icon: BookOpen,
      badge: "from-[#0F7A5A] to-[#00CEC9]",
      border: "border-[#0F7A5A]/20",
      stats: [
        { value: num(stats?.researchgate_publications, loading, 1), label: "RI-Score" },
        { value: num(stats?.researchgate_reads, loading), label: "Reads" },
        { value: num(stats?.researchgate_citations, loading), label: "Citations" },
      ],
    },
    {
      name: "Semantic Scholar",
      href: "https://www.semanticscholar.org/author/2326887337",
      Icon: Fingerprint,
      badge: "from-[#7C3AED] to-[#6366F1]",
      border: "border-[#7C3AED]/20",
      stats: [
        { value: num(stats?.semantic_scholar_publications, loading), label: "Publications" },
        {
          value: num(stats?.semantic_scholar_h_index, loading),
          label: "h-index",
          href: "https://www.semanticscholar.org/faq#h-index",
        },
        { value: num(stats?.semantic_scholar_citations, loading), label: "Citations" },
        {
          value: num(stats?.semantic_scholar_highly_influential_citations, loading),
          label: "Highly Influential Citations",
        },
      ],
    },
  ];

  return (
    <motion.div
      variants={fadeUp}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {profiles.map(({ name, href, Icon, badge, border, stats: items }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col gap-4 rounded-2xl border bg-white p-5 shadow-[0_8px_24px_rgba(11,37,69,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,37,69,0.14)] ${border}`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-md ${badge}`}
            >
              <Icon className="h-[17px] w-[17px] text-white" strokeWidth={2} />
            </div>
            <span className="min-w-0 flex-1 text-sm font-bold tracking-tight text-black">
              {name}
            </span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-black" />
          </div>

          <div className={`grid gap-2 ${items.length === 4 ? "grid-cols-2" : "grid-cols-3"}`}>
            {items.map((s) => (
              <div
                key={s.label}
                className="flex min-h-[64px] min-w-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 px-1.5 py-3 text-center"
              >
                <span className="text-lg font-extrabold leading-none tabular-nums text-black">
                  {s.value}
                </span>
                {"href" in s && s.href ? (
                  <span
                    role="link"
                    title="Learn what this metric means"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(s.href, "_blank", "noopener,noreferrer");
                    }}
                    className="mt-1.5 cursor-pointer break-words text-[9px] font-semibold uppercase leading-tight tracking-wider text-[#1A5CB8] underline decoration-dotted underline-offset-2"
                  >
                    {s.label}
                  </span>
                ) : (
                  <span className="mt-1.5 break-words text-[9px] font-semibold uppercase leading-tight tracking-wider text-black">
                    {s.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </a>
      ))}
    </motion.div>
  );
}

// ─── Main section ───────────────────────────────────────────────────
export function HeroSection() {
  const [heroStats, setHeroStats] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const { supabase } = await import("../lib/supabase");
        const { data } = await supabase.from("hero_stats").select("*").single();
        if (data) setHeroStats(data);
      } catch (err) {
        console.error("Error fetching hero stats:", err);
      }
    })();
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero — Baburam Timsina"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-[#FAFAF8] to-[#F0F4FA] text-black antialiased"
    >
      {/* Subtle background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(15,122,90,0.10),transparent_70%)]" />
        <div className="absolute -bottom-48 -left-48 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(11,37,69,0.07),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,#0B2545_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.025]" />
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-6 sm:px-8 sm:pt-8 lg:px-14 lg:pt-10"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left column */}
          <motion.div variants={stagger} className="flex flex-col gap-6">
            <ProfileImage />
            <Identity />
          </motion.div>

          {/* Right column */}
          <motion.div variants={stagger} className="flex flex-col gap-5">
            <QuoteCard />
            <AboutTeaser />
            <Counters heroStats={heroStats} />
            <CTAButtons />
          </motion.div>
        </div>

        <div className="mt-10">
          <AcademicProfileCards />
        </div>
      </motion.div>
    </section>
  );
}