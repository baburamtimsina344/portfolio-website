"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Award,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  Fingerprint,
} from "lucide-react";
import { useEffect, useState } from "react";

// ─── Motion presets ─────────────────────────────────────────────────
// One orchestrated page-load sequence; MotionConfig (App.tsx) honours
// prefers-reduced-motion.
const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
const stagger = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
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
      className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none"
    >
      <div className="surface aspect-square overflow-hidden">
        <picture className="block h-full w-full">
          <source srcSet="/images/profile-960.webp" type="image/webp" />
          <img
            src="/images/profile.png"
            alt="Baburam Timsina — Professor and Academic Leader"
            width={1254}
            height={1254}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>

      {/* Name plate below the photo */}
      <div className="mt-3 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-[26px] font-bold leading-tight tracking-tight text-[color:var(--ink)] sm:text-[30px]">
          Baburam Timsina
        </h1>
        <div className="mx-auto mt-2 h-px w-14 bg-[#0F7A5A]/50" aria-hidden="true" />
      </div>
    </motion.div>
  );
}

// ─── Name + title + credentials ─────────────────────────────────────
function Identity() {
  return (
    <motion.div variants={fadeUp} className="flex flex-col gap-4">
      <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)] sm:text-xl sm:leading-relaxed">
        Higher Education Leadership Scholar | Institutional Transformation &amp;
        Internationalization Researcher | Higher Education Futures Strategist
      </p>

      <div className="flex flex-wrap gap-2.5">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5">
          <Award className="h-4 w-4 text-[#0F7A5A]" aria-hidden="true" />
          <span className="text-[13px] font-semibold text-[color:var(--ink)]">
            JMC Chair <span className="mx-1 opacity-50">·</span>
            <span>MSSRNPRESS.ORG</span>
          </span>
        </div>

        <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-border bg-white py-1.5 pl-3.5 pr-2">
          <span className="text-[13px] font-semibold text-[color:var(--ink)]">
            Editorial Member
          </span>
          {JOURNALS.map((j) => (
            <span
              key={j}
              className="rounded-md bg-[#0B2545]/[0.06] px-2 py-0.5 text-xs font-semibold text-[color:var(--ink)]"
            >
              {j}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Quote ──────────────────────────────────────────────────────────
function QuoteCard() {
  return (
    <motion.div variants={fadeUp}>
      <blockquote className="m-0 max-w-2xl border-l-2 border-[#0F7A5A] pl-5 font-[family-name:var(--font-heading)] text-xl italic leading-snug text-[color:var(--ink)] sm:text-2xl sm:leading-snug text-justify">
        &ldquo;Advancing scholarship in higher education, educational leadership,
        and institutional transformation through research, teaching, and
        academic service.&rdquo;
      </blockquote>
    </motion.div>
  );
}

// ─── Counters ───────────────────────────────────────────────────────
function Counters({ heroStats }: { heroStats: any }) {
  const items = [
    { value: heroStats?.years_experience || "20+", label: "Years Experience" },
    { value: heroStats?.publications_count || "50+", label: "Publications" },
    { value: heroStats?.awards_honors || "15+", label: "Awards & Honors" },
  ];

  return (
    <motion.dl
      variants={fadeUp}
      className="m-0 grid grid-cols-3 divide-x divide-border border-y border-border"
    >
      {items.map((s) => (
        <div
          key={s.label}
          className="flex min-w-0 flex-col-reverse items-center gap-1.5 px-3 py-6 text-center sm:px-8 sm:py-7"
        >
          <dt className="text-balance text-[13px] font-medium leading-snug text-[color:var(--ink-soft)] sm:text-sm">
            {s.label}
          </dt>
          <dd className="m-0 font-[family-name:var(--font-heading)] text-3xl font-bold leading-none tabular-nums text-[color:var(--ink)] sm:text-5xl">
            {s.value}
          </dd>
        </div>
      ))}
    </motion.dl>
  );
}

// ─── CTA buttons ────────────────────────────────────────────────────
function CTAButtons() {
  return (
    <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
      <a href="#publications" className="btn btn-primary gap-2 px-6 py-3 text-sm">
        <BookOpen className="h-4 w-4" aria-hidden="true" />
        View Publications
        <ChevronRight className="h-4 w-4 opacity-70" aria-hidden="true" />
      </a>
      <a href="#contact" className="btn btn-outline px-6 py-3 text-sm">
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
      {profiles.map(({ name, href, Icon, stats: items }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="surface surface-hover flex flex-col gap-4 p-5"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0B2545] text-white">
              <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
            </div>
            <span className="min-w-0 flex-1 text-[15px] font-semibold text-[color:var(--ink)]">
              {name}
            </span>
            <ExternalLink className="h-4 w-4 shrink-0 text-[color:var(--ink-soft)]" aria-hidden="true" />
          </div>

          <div className={`grid gap-2 ${items.length === 4 ? "grid-cols-2" : "grid-cols-3"}`}>
            {items.map((s) => (
              <div
                key={s.label}
                className="flex min-h-[72px] min-w-0 flex-col items-center justify-center rounded-lg bg-background px-1.5 py-3 text-center"
              >
                <span className="font-[family-name:var(--font-heading)] text-xl font-bold leading-none tabular-nums text-[color:var(--ink)]">
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
                    className="mt-1.5 cursor-pointer break-words text-xs font-medium leading-tight text-[#0F7A5A] underline decoration-dotted underline-offset-2"
                  >
                    {s.label}
                  </span>
                ) : (
                  <span className="mt-1.5 break-words text-xs font-medium leading-tight text-[color:var(--ink-soft)]">
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
      className="relative text-[color:var(--ink)] antialiased"
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-6 sm:px-8 sm:pt-10 lg:px-14 lg:pb-16 lg:pt-12"
      >
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Photo */}
          <motion.div variants={stagger} className="lg:col-span-5">
            <ProfileImage />
          </motion.div>

          {/* Identity, primary actions, positioning statement */}
          <motion.div variants={stagger} className="flex flex-col gap-6 lg:col-span-7">
            <Identity />
            <CTAButtons />
            <QuoteCard />
          </motion.div>
        </div>

        <div className="mt-10 lg:mt-14">
          <Counters heroStats={heroStats} />
        </div>

        <div className="mt-8">
          <AcademicProfileCards />
        </div>
      </motion.div>
    </section>
  );
}
