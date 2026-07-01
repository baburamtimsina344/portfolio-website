import { staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
import { motion } from "framer-motion";
import { ChevronRight, Crown, Users, Lightbulb, Building, Calendar } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const navLinks = ["Leadership", "Memberships", "Advisory"];

const leadershipRoles = [
  {
    id: 1,
    title: "Head of Department",
    organization: "School of Management, Tribhuvan University",
    period: "2020 – Present",
    type: "leadership",
    description: "Leading academic programs, faculty development, and strategic planning for the department.",
  },
  {
    id: 2,
    title: "Director of Research",
    organization: "Centre for Educational Innovation",
    period: "2018 – Present",
    type: "leadership",
    description: "Overseeing research initiatives, grant acquisition, and international research collaborations.",
  },
  {
    id: 3,
    title: "Advisory Board Member",
    organization: "National Education Council, Nepal",
    period: "2019 – Present",
    type: "advisory",
    description: "Providing strategic guidance on education policy and curriculum reform at the national level.",
  },
  {
    id: 4,
    title: "Member – Board of Studies",
    organization: "University Grants Commission",
    period: "2017 – 2022",
    type: "membership",
    description: "Contributing to quality assurance and accreditation standards for higher education institutions.",
  },
  {
    id: 5,
    title: "Institutional Representative",
    organization: "South Asian Association for Regional Cooperation (SAARC)",
    period: "2016 – 2020",
    type: "institutional",
    description: "Representing the university in regional academic networks and policy dialogues.",
  },
  {
    id: 6,
    title: "Editorial Board Member",
    organization: "Journal of Educational Research and Practice",
    period: "2015 – Present",
    type: "advisory",
    description: "Serving as a peer reviewer and editorial advisor for scholarly publications.",
  },
];

const typeConfig = {
  leadership: { label: "Leadership", icon: Crown, color: "#00B894" },
  membership: { label: "Membership", icon: Users, color: "#0F7A5A" },
  advisory: { label: "Advisory", icon: Lightbulb, color: "#0B2545" },
  institutional: { label: "Institutional", icon: Building, color: "#4A6A8F" },
};

// Footer categories
const categories = [
  {
    title: "Leadership",
    items: [
      "Head of Department",
      "Director of Research",
      "Program Coordinator",
    ],
  },
  {
    title: "Memberships",
    items: [
      "UGC Board of Studies",
      "SAARC Representative",
      "BERA Member",
    ],
  },
  {
    title: "Advisory",
    items: [
      "National Education Council",
      "Editorial Board",
      "Policy Advisory Group",
    ],
  },
  {
    title: "Institutional",
    items: [
      "University Senate",
      "Research Committee",
      "Faculty Council",
    ],
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function LeadershipSection() {
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
      id="leadership"
      className="min-h-screen bg-[#F8F9FA] text-[#0B2545] font-['Inter',system-ui,sans-serif]"
    >
      {/* ── Hero ── */}
      <div
        className="relative h-[500px] lg:h-[600px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/led.jpg')" }}
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
              Leadership & <br />
              <span className="text-[#00B894]">External Roles</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-lg text-white/80 max-w-xl"
            >
              Driving academic excellence through governance, advisory, and institutional leadership.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 z-10 bg-black/40 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
          Leadership
        </div>
      </div>

      {/* ── Sticky Nav ── */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-[#0F7A5A]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-stretch md:items-center justify-between py-4 md:py-0">
          <div className="py-3 md:py-4 flex-shrink-0">
            <h2 className="text-2xl font-bold text-[#0B2545] tracking-tight">
              Leadership <span className="text-[#0F7A5A]">Roles</span>
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

      {/* ── Main Content (Timeline) ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 lg:px-10 py-16"
      >
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0F7A5A] via-[#00B894]/50 to-transparent" />

          <div className="space-y-8">
            {leadershipRoles.map((role) => {
              const config = typeConfig[role.type];
              const Icon = config.icon;
              return (
                <motion.div
                  key={role.id}
                  variants={listItemVariants}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot with icon */}
                  <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-2 border-[#0F7A5A] shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <Icon className="h-5 w-5" style={{ color: config.color }} />
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 hover:border-[#0F7A5A]/30 transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-xs font-medium text-[#0F7A5A] bg-[#0F7A5A]/10 px-3 py-1 rounded-full border border-[#0F7A5A]/20">
                            {config.label}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-[#4A5A6A]/70">
                            <Calendar className="h-3.5 w-3.5" />
                            {role.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0B2545] group-hover:text-[#0F7A5A] transition-colors">
                          {role.title}
                        </h3>
                        <p className="text-sm font-medium text-[#4A5A6A] mt-1">
                          {role.organization}
                        </p>
                        {role.description && (
                          <p className="text-sm text-[#4A5A6A]/80 leading-relaxed mt-3 border-l-2 border-[#0F7A5A]/30 pl-3">
                            {role.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
            Explore <span className="text-[#A8E6CF]">Leadership Areas</span>
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