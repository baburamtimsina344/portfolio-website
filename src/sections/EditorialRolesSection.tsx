// import { staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
// import { motion } from "framer-motion";
// import { BookOpen, CheckCircle, ChevronRight, Edit, FileText, Users, Award } from "lucide-react";

// // ─── DATA ────────────────────────────────────────────────────────────────────
// const navLinks = ["Journal Editing", "Reviewing", "Editorial Boards"];

// const editorialData = {
//   journalEditing: [
//     "Associate Editor – Innovation in Language Learning and Teaching",
//     "Editorial Board Member – Review of Education",
//     "Editorial Board Member – Research in Applied Linguistics",
//     "Guest Editor – Special Issue on Language Assessment",
//     "Consulting Editor – TESOL Journal",
//   ],
//   reviewing: [
//     "Peer Reviewer – TESOL Quarterly",
//     "Reviewer – Language Teaching Research",
//     "Reviewer – Applied Linguistics",
//     "Reviewer – International Journal of Educational Research",
//     "Reviewer – System",
//   ],
//   editorialBoards: [
//     "Editorial Advisory Board – Journal of Educational Research",
//     "International Advisory Board – Language Education and Assessment",
//     "Board of Reviewers – Modern Language Journal",
//   ],
// };

// // Footer categories (editorial‑relevant)
// const categories = [
//   {
//     title: "Journals",
//     items: [
//       "Innovation in Language Learning and Teaching",
//       "Review of Education",
//       "Research in Applied Linguistics",
//     ],
//   },
//   {
//     title: "Reviewing",
//     items: [
//       "TESOL Quarterly",
//       "Language Teaching Research",
//       "Applied Linguistics",
//     ],
//   },
//   {
//     title: "Editorial Boards",
//     items: [
//       "Journal of Educational Research",
//       "Language Education and Assessment",
//       "Modern Language Journal",
//     ],
//   },
//   {
//     title: "Contributions",
//     items: [
//       "Special Issue Editor",
//       "Consulting Editor",
//       "Guest Editor",
//     ],
//   },
// ];

// // ─── COMPONENT ────────────────────────────────────────────────────────────────
// export default function EditorialRolesSection() {
//   // ── Animation variants ──
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.08, delayChildren: 0.2 },
//     },
//   };

//   const listItemVariants = {
//     hidden: { opacity: 0, x: -12 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
//   };

//   return (
//     <div
//       id="editorial-roles"
//       className="min-h-screen bg-[#F8F9FA] text-black font-sans"
//     >
//       {/* ── Hero ── */}
//       <div
//         className="relative h-[500px] lg:h-[600px] overflow-hidden bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/edi.jpg')" }}
//       >
//         {/* Green gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/80 via-[#0F7A5A]/40 to-transparent" />
//         <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-16">
//           <div className="max-w-2xl">
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
//             >
//               Editorial <br />
//               <span className="text-[#0F7A5A]">Roles</span>
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               className="mt-4 text-lg text-white/80 max-w-xl"
//             >
//               Shaping academic discourse through editorial leadership and peer review.
//             </motion.p>
//           </div>
//         </div>
//         <div className="absolute bottom-3 left-3 z-10 bg-black/40 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
//           Editorial
//         </div>
//       </div>

//       {/* ── Sticky Nav ── */}
//       <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-[#0F7A5A]/20 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-stretch md:items-center justify-between py-4 md:py-0">
//           <div className="py-3 md:py-4 flex-shrink-0">
//             <h2 className="text-2xl font-bold text-black">
//               Editorial <span className="text-[#0F7A5A]">Roles</span>
//             </h2>
//           </div>
//           <nav className="flex flex-wrap items-center gap-2 md:gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-[#0F7A5A]/10">
//             {navLinks.map((link) => (
//               <button
//                 key={link}
//                 className="btn btn-ghost btn-pill group gap-1.5 px-4 py-2 text-sm"
//               >
//                 {link}
//                 <ChevronRight size={16} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* ── Main Content ── */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-40px" }}
//         variants={containerVariants}
//         className="max-w-7xl mx-auto px-6 lg:px-10 py-16"
//       >
//         <div className="space-y-16">
//           {/* Journal Editing */}
//           <motion.div variants={listItemVariants}>
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//               <div>
//                 <h3 className="text-2xl font-bold text-black">
//                   Journal Editing
//                 </h3>
//                 <p className="text-sm text-black">Associate & Board Memberships</p>
//               </div>
//             </div>

//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {editorialData.journalEditing.map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3 text-black leading-relaxed group hover:text-black transition-colors"
//                   >
//                     <Edit className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>

//           {/* Reviewing */}
//           <motion.div variants={listItemVariants}>
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//               <div>
//                 <h3 className="text-2xl font-bold text-black">
//                   Reviewing
//                 </h3>
//                 <p className="text-sm text-black">Peer Review Contributions</p>
//               </div>
//             </div>

//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {editorialData.reviewing.map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3 text-black leading-relaxed group hover:text-black transition-colors"
//                   >
//                     <FileText className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>

//           {/* Editorial Boards */}
//           <motion.div variants={listItemVariants}>
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//               <div>
//                 <h3 className="text-2xl font-bold text-black">
//                   Editorial Boards
//                 </h3>
//                 <p className="text-sm text-black">Advisory & Review Boards</p>
//               </div>
//             </div>

//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {editorialData.editorialBoards.map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3 text-black leading-relaxed group hover:text-black transition-colors"
//                   >
//                     <Users className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* ── Category Footer ── */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="bg-[#0B5E4A] mt-12"
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
//           <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">
//             Explore <span className="text-[#A8E6CF]">Editorial Areas</span>
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((cat, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(168,230,207,0.2)" }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hover:border-[#A8E6CF]/40 group"
//               >
//                 <div className="p-6">
//                   <div className="text-xs font-bold uppercase tracking-wider mb-4 text-[#A8E6CF] flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[#A8E6CF]" />
//                     {cat.title}
//                   </div>
//                   <ul className="space-y-2">
//                     {cat.items.map((item, j) => (
//                       <li key={j} className="text-sm text-white/80 hover:text-white transition-colors border-b border-white/5 py-2 last:border-0">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }



import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronRight,
  Users,
  Briefcase,
  Star,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const navLinks = ["Certifications", "Awards & Memberships", "Professional Development"];

// Professional Certifications (LinkedIn Learning, 2020)
const certifications = [
  "Advice for Leaders During a Crisis - LinkedIn Learning (2020)",
  "Counterintuitive Leadership Strategies for a VUCA Environment - LinkedIn Learning (2020)",
  "Digital Transformation in Practice: Virtual Collaboration Tools - LinkedIn Learning (2020)",
  "Managing Stress for Positive Change - LinkedIn Learning (2020)",
  "Master In-Demand Professional Soft Skills - LinkedIn Learning (2020)",
  "Recharge Your Energy for Peak Performance - LinkedIn Learning (2020)",
  "Teamwork Foundations - LinkedIn Learning (2020)",
  "Digital Networking Strategies - LinkedIn Learning (2020)",
  "Leading in Crisis - LinkedIn Learning (2020)",
  "Recession-Proof Career Strategies - LinkedIn Learning (2020)",
];

// Awards and Honors
const award = {
  title: "Dean's Award",
  institution: "Institute of Advanced Communication, Education, and Research (IACER), Pokhara University",
  description: "Awarded in recognition of outstanding academic performance.",
};

// Professional Associations & Memberships
const associations = [
  {
    name: "Nepal English Language Teachers' Association (NELTA)",
    status: "Life Member",
    focus: "English Language Education & Professional Development",
  },
  {
    name: "Management Association of Nepal (MAN)",
    status: "Life Member",
    focus: "Management Education, Leadership & Research",
  },
  {
    name: "Human Resources Society Nepal (HRSN)",
    status: "Life Member",
    focus: "Human Resource Management & Organizational Development",
  },
];

// Professional Development
const internationalCourses = [
  "Higher Education Leadership – MRU University (2023)",
  "Conflict Resolution – Duke University (2022)",
  "Strategic Management – King's College London (2021)",
  "Professional Communication and Leadership Courses – LinkedIn Learning (2024)",
  "50+ short courses and crash certifications from leading global learning platforms.",
];

const conferencesDescription = `
  Participated in and contributed to over 100 scholarly conferences, seminars, workshops, webinars, and academic forums.
  Engaged in interdisciplinary discussions on higher education, leadership, organizational behavior, sustainability,
  research methodology, and educational innovation. Participated in multiple international conferences on
  Sustainability and Artificial Intelligence in Education through the Whova Conference Platform (2020–2024).
`;

const resourcePersonTopics = [
  "Public Speaking and Communication Skills",
  "Leadership Development",
  "Research and Academic Writing",
  "Professional and Personal Growth",
  "Higher Education and Institutional Leadership",
];

const statistics = {
  events: "100+",
  certifications: "50+",
  platforms: "5+",
  engagements: "Multiple",
};

// Footer categories (achievements summary)
const categories = [
  {
    title: "Certifications",
    items: certifications.slice(0, 4).map((c) => c.replace(" - LinkedIn Learning (2020)", "")),
  },
  {
    title: "Awards",
    items: [award.title],
  },
  {
    title: "Memberships",
    items: associations.map((a) => a.name),
  },
  {
    title: "Development",
    items: [
      "International Courses",
      "100+ Conferences",
      "Resource Person",
      "Curriculum Innovation",
    ],
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function ProfessionalAchievements() {
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
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      id="editorial-roles"
      className="bg-[#F8F9FA] text-black font-sans"
    >
      {/* ── Hero ── */}
      <div
        className="relative h-[500px] lg:h-[600px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/edi.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/80 via-[#0F7A5A]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-16">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Professional <br />
              <span className="text-[#0F7A5A]">Achievements</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-lg text-white/80 max-w-xl"
            >
              Certifications, awards, memberships, and ongoing professional development.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 z-10 bg-black/40 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
          Achievements
        </div>
      </div>

      {/* ── Sticky Nav ── */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-[#0F7A5A]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-stretch md:items-center justify-between py-4 md:py-0">
          <div className="py-3 md:py-4 flex-shrink-0">
            <h2 className="text-2xl font-bold text-black">
              Professional <span className="text-[#0F7A5A]">Highlights</span>
            </h2>
          </div>
          <nav className="flex flex-wrap items-center gap-2 md:gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-[#0F7A5A]/10">
            {navLinks.map((link) => (
              <button
                key={link}
                className="btn btn-ghost btn-pill group gap-1.5 px-4 py-2 text-sm"
              >
                {link}
                <ChevronRight
                  size={16}
                  className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
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
        className="max-w-7xl mx-auto px-6 lg:px-10 py-10"
      >
        <div className="space-y-10">
          {/* ── 1. Certifications ── */}
          <motion.div variants={listItemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Professional Certifications
                </h3>
                <p className="text-sm text-black">LinkedIn Learning (2020)</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-black leading-relaxed group hover:text-black transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── 2. Awards & Memberships ── */}
          <motion.div variants={listItemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Awards & Memberships
                </h3>
                <p className="text-sm text-black">Recognition & Professional Affiliations</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Dean's Award */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-[#0F7A5A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-semibold text-black">{award.title}</h4>
                    <p className="text-sm text-black">{award.institution}</p>
                    <p className="text-sm text-black mt-1">{award.description}</p>
                  </div>
                </div>
              </div>

              {/* Associations */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#0F7A5A]" />
                  Professional Associations
                </h4>
                <ul className="space-y-4">
                  {associations.map((assoc, i) => (
                    <li key={i} className="border-b border-[#0B2545]/5 last:border-0 pb-3 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                        <span className="font-medium text-black">{assoc.name}</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0F7A5A]/10 text-[#0F7A5A] w-fit">
                          {assoc.status}
                        </span>
                      </div>
                      <p className="text-sm text-black mt-0.5">{assoc.focus}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── 3. Professional Development ── */}
          <motion.div variants={listItemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Professional Development & Engagements
                </h3>
                <p className="text-sm text-black">Lifelong Learning & Academic Leadership</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* International Courses */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#0F7A5A]" />
                  International Courses & Certifications
                </h4>
                <ul className="space-y-3">
                  {internationalCourses.map((course, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-black hover:text-black transition-colors"
                    >
                      <CheckCircle className="h-4 w-4 text-[#0F7A5A] flex-shrink-0 mt-0.5" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conferences */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#0F7A5A]" />
                  Conferences, Workshops & Scholarly Events
                </h4>
                <p className="text-black leading-relaxed whitespace-pre-line">
                  {conferencesDescription}
                </p>
              </div>

              {/* Resource Person */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[#0F7A5A]" />
                  Resource Person & Invited Engagements
                </h4>
                <p className="text-black leading-relaxed mb-3">
                  Served as Resource Person, Facilitator, Judge, and Invited Speaker in various academic and professional development programs focusing on:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {resourcePersonTopics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-black">
                      <span className="text-[#0F7A5A]">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Statistics */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#0F7A5A]" />
                  Curriculum Innovation & Evaluation Statistics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#0F7A5A]">{statistics.events}</p>
                    <p className="text-xs text-black">Scholarly Events</p>
                  </div>
                  <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#0F7A5A]">{statistics.certifications}</p>
                    <p className="text-xs text-black">Certifications Earned</p>
                  </div>
                  <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#0F7A5A]">{statistics.platforms}</p>
                    <p className="text-xs text-black">International Platforms</p>
                  </div>
                  <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#0F7A5A]">{statistics.engagements}</p>
                    <p className="text-xs text-black">Facilitation Engagements</p>
                  </div>
                </div>
              </div>
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
        className="bg-[#0B5E4A] mt-8"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">
            Explore <span className="text-[#A8E6CF]">Achievement Areas</span>
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
                      <li
                        key={j}
                        className="text-sm text-white/80 hover:text-white transition-colors border-b border-white/5 py-2 last:border-0"
                      >
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
