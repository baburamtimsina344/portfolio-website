import { staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, ChevronRight, Edit, FileText, Users, Award } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const navLinks = ["Journal Editing", "Reviewing", "Editorial Boards"];

const editorialData = {
  journalEditing: [
    "Associate Editor – Innovation in Language Learning and Teaching",
    "Editorial Board Member – Review of Education",
    "Editorial Board Member – Research in Applied Linguistics",
    "Guest Editor – Special Issue on Language Assessment",
    "Consulting Editor – TESOL Journal",
  ],
  reviewing: [
    "Peer Reviewer – TESOL Quarterly",
    "Reviewer – Language Teaching Research",
    "Reviewer – Applied Linguistics",
    "Reviewer – International Journal of Educational Research",
    "Reviewer – System",
  ],
  editorialBoards: [
    "Editorial Advisory Board – Journal of Educational Research",
    "International Advisory Board – Language Education and Assessment",
    "Board of Reviewers – Modern Language Journal",
  ],
};

// Footer categories (editorial‑relevant)
const categories = [
  {
    title: "Journals",
    items: [
      "Innovation in Language Learning and Teaching",
      "Review of Education",
      "Research in Applied Linguistics",
    ],
  },
  {
    title: "Reviewing",
    items: [
      "TESOL Quarterly",
      "Language Teaching Research",
      "Applied Linguistics",
    ],
  },
  {
    title: "Editorial Boards",
    items: [
      "Journal of Educational Research",
      "Language Education and Assessment",
      "Modern Language Journal",
    ],
  },
  {
    title: "Contributions",
    items: [
      "Special Issue Editor",
      "Consulting Editor",
      "Guest Editor",
    ],
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function EditorialRolesSection() {
  // ── Animation variants ──
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  return (
    <div
      id="editorial-roles"
      className="min-h-screen bg-[#F8F9FA] text-[#0B2545] font-['Inter',system-ui,sans-serif]"
    >
      {/* ── Hero ── */}
      <div
        className="relative h-[500px] lg:h-[600px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/edi.jpg')" }}
      >
        {/* Green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/80 via-[#0F7A5A]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-16">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Editorial <br />
              <span className="text-[#00B894]">Roles</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-lg text-white/80 max-w-xl"
            >
              Shaping academic discourse through editorial leadership and peer review.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 z-10 bg-black/40 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
          Editorial
        </div>
      </div>

      {/* ── Sticky Nav ── */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-[#0F7A5A]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-stretch md:items-center justify-between py-4 md:py-0">
          <div className="py-3 md:py-4 flex-shrink-0">
            <h2 className="text-2xl font-bold text-[#0B2545] tracking-tight">
              Editorial <span className="text-[#0F7A5A]">Roles</span>
            </h2>
          </div>
          <nav className="flex flex-wrap items-center gap-2 md:gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-[#0F7A5A]/10">
            {navLinks.map((link) => (
              <button
                key={link}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#0B2545] hover:text-[#0F7A5A] hover:bg-[#0F7A5A]/10 rounded-full transition-all duration-200 group"
              >
                {link}
                <ChevronRight size={16} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Main Content ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 lg:px-10 py-16"
      >
        <div className="space-y-16">
          {/* Journal Editing */}
          <motion.div variants={listItemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  Journal Editing
                </h3>
                <p className="text-sm text-[#4A5A6A]/70">Associate & Board Memberships</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {editorialData.journalEditing.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
                  >
                    <Edit className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Reviewing */}
          <motion.div variants={listItemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  Reviewing
                </h3>
                <p className="text-sm text-[#4A5A6A]/70">Peer Review Contributions</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {editorialData.reviewing.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
                  >
                    <FileText className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Editorial Boards */}
          <motion.div variants={listItemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  Editorial Boards
                </h3>
                <p className="text-sm text-[#4A5A6A]/70">Advisory & Review Boards</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {editorialData.editorialBoards.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
                  >
                    <Users className="h-5 w-5 text-[#00B894] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Category Footer ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#0B5E4A] mt-12"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">
            Explore <span className="text-[#A8E6CF]">Editorial Areas</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(168,230,207,0.2)" }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hover:border-[#A8E6CF]/40 group"
              >
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-wider mb-4 text-[#A8E6CF] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A8E6CF]" />
                    {cat.title}
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-sm text-white/80 hover:text-white transition-colors border-b border-white/5 py-2 last:border-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}