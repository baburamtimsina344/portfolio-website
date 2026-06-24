// import { staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
// import { motion } from "framer-motion";
// import { Award, BookOpen, CheckCircle, ChevronRight, Users } from "lucide-react";

// // ─── DATA ────────────────────────────────────────────────────────────────────
// const navLinks = ["Courses taught", "Supervision", "Assessor & mentor of HEA fellowship"];

// const newspaper = [
//   {
//     text: "How can schools in poor areas attract more teachers?",
//     date: "11 March 2024",
//     publication: "Schools Week",
//   },
// ];

// const teachingData = {
//   courses: [
//     "Language Testing and Assessment",
//     "Educational Assessment",
//     "Computer-Assisted Language Learning",
//     "Research Methods for Educational Research",
//     "Language Teaching Methodologies",
//     "Being a Doctoral Practitioner",
//     "Planning for Professional Projects",
//     "Research Literacy for Teachers",
//     "PGCE courses",
//   ],
//   supervision: [
//     "MSc in TESOL",
//     "MSc in Language Education",
//     "MEd in Educational Studies",
//     "EdD in TESOL",
//     "DProf in TESOL",
//     "PhD in Education",
//   ],
//   mentorship: [
//     "Queen’s University Belfast",
//     "University of Edinburgh",
//     "University of St Andrews",
//   ],
// };

// const blogPosts = [
//   {
//     text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 1)",
//     date: "June 2022",
//     publication: "HE Education Research Census",
//   },
//   {
//     text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 2)",
//     date: "June 2022",
//     publication: "HE Education Research Census",
//   },
//   {
//     text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 1)",
//     date: "July 2022",
//     publication: "BERA Blog (Reprint)",
//   },
//   {
//     text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 2)",
//     date: "July 2022",
//     publication: "BERA Blog (Reprint)",
//   },
//   {
//     text: "ECR Network Presents: Reflexivity in conducting qualitative educational research (with Muna Abuloushi, Nour Bemlakhdar, Rachel Wicaksono)",
//     date: "Forthcoming",
//     publication: "BERA Blog",
//   },
//   {
//     text: "Don't be cruel: how to write a fair peer review report (with Shannon Mason)",
//     date: "August 2022",
//     publication: "Times Higher Education Campus",
//   },
//   {
//     text: "It Takes More Than Financial Incentives: Strategies for Recruiting and Retaining Teachers in Schools (with Violeta Negrea)",
//     date: "June 2024",
//     publication: "HKU SCAFE Blog",
//   },
// ];

// const websites = [
//   {
//     name: "TESOLgraphics website",
//     description:
//       "An online resource with infographic summaries of secondary research in language education for practitioners and teachers.",
//   },
//   {
//     name: "Scholarly Peers website",
//     description:
//       "An online space with resources, blog posts, and podcasts about journal peer review for doctoral students and early career researchers.",
//   },
//   {
//     name: "Thesis by Publication website",
//     description:
//       "A collection of resources for supporting doctoral researchers to publish during their candidature.",
//   },
// ];

// const categories = [
//   {
//     title: "Journal Editing",
//     accent: "#a8c500",
//     border: "#d4e500",
//     items: [
//       "Research in Applied Linguistics",
//       "Review of Education",
//       "Innovation in Language Learning and Teaching",
//     ],
//   },
//   {
//     title: "Teacher Education",
//     accent: "#d91e6e",
//     border: "#e040a0",
//     items: [
//       "International Education and Lifelong Learning",
//       "TESOL Graphics",
//       "TESOL International",
//     ],
//   },
//   {
//     title: "Research",
//     accent: "#0056b3",
//     border: "#5500ff",
//     items: [
//       "Google Scholar — 3,670 Citations, h-index 36",
//       "ResearchCode — 2,792 R-Score, 2,885 Citations",
//     ],
//   },
//   {
//     title: "Researcher Development",
//     accent: "#00b8a9",
//     border: "#1ddc9c",
//     items: [
//       "BERA",
//       "What We're Doing",
//       "Scholarly Peers Podcast",
//       "Thesis by Publication",
//       "Ready to Publish",
//     ],
//   },
// ];

// // ─── COMPONENT ────────────────────────────────────────────────────────────────
// export default function EditorialRolesSection() {
//   return (
//     <div id="editorial-roles" className="min-h-screen bg-[#e8f2f9] text-[#1a2332] font-['Inter',system-ui,sans-serif] ">
//       {/* ── Hero ── */}
//       <div
//         className="relative h-[600px] overflow-hidden bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/edi.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent" />
//         <div className="absolute bottom-3 left-3 z-10 bg-black/30 text-white text-xs px-2 py-1 rounded">
//           Editor Roles
//         </div>
//       </div>

//       {/* ── Header + Nav ── */}
//       <div className="bg-[#f9eff5] border-b border-[#e8dce6] shadow-sm">
//         <div className="max-w-[960px] mx-auto px-8 flex items-stretch justify-between">
//           <div className="py-7 flex-shrink-0">
//             <h2 className="font-['Merriweather',Georgia,serif] text-2xl font-bold leading-tight text-[#004b7a] tracking-tight">
// Editor Roles           </h2>
//           </div>
//           <nav className="flex flex-col items-start gap-2 border-l-[3px] border-[#d91e6e] pl-4 justify-center">
//             {navLinks.map((link) => (
//               <button
//                 key={link}
//                 className="flex items-center gap-2 bg-none border-none cursor-pointer font-['Inter',sans-serif] text-sm font-semibold text-[#004b7a] hover:text-[#0070a0] transition-colors whitespace-nowrap p-0"
//               >
//                 {link}
//                 <ChevronRight size={14} className="opacity-80" />
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* ── Main content ── */}
//  <section id="teaching" className="max-w-[960px] mx-auto px-8 py-10 ">
//       {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" /> */}
//         <div className="bg-white border border-2 border-[#1f4567] p-12 shadow-sm">

//       <div>
        

//        <motion.div
//   variants={staggerContainer}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true, margin: "-50px" }}
//   className="space-y-12"
// >
//   {/* Courses Taught */}
//   <motion.div variants={staggerItem}>
//     <div className="flex items-center gap-3 mb-5">
//       <BookOpen className="h-6 w-6 text-[#1f4567]" />
//       <h3 className="text-2xl font-serif font-bold text-[#1f4567]">
// Editor        <span className="block text-sm font-normal text-muted-foreground">
//           (Postgraduate Level)
//         </span>
//       </h3>
//     </div>

//     <ul className="space-y-3 pl-2">
//       {teachingData.courses.map((item, i) => (
//         <li
//           key={i}
//           className="flex items-start gap-3 text-[#334155] leading-relaxed"
//         >
//           <CheckCircle className="h-5 w-5 text-[#2a6b8f] flex-shrink-0 mt-1" />
//           <span>{item}</span>
//         </li>
//       ))}
//     </ul>
//   </motion.div>

//   {/* Supervision */}
//   <motion.div variants={staggerItem}>
//     <div className="flex items-center gap-3 mb-5">
//       <Users className="h-6 w-6 text-[#1f4567]" />
//       <h3 className="text-2xl font-serif font-bold text-[#1f4567]">
//         Supervision
//         <span className="block text-sm font-normal text-muted-foreground">
//           (Postgraduate Level)
//         </span>
//       </h3>
//     </div>

//     <ul className="space-y-3 pl-2">
//       {teachingData.supervision.map((item, i) => (
//         <li
//           key={i}
//           className="flex items-start gap-3 text-[#334155] leading-relaxed"
//         >
//           <CheckCircle className="h-5 w-5 text-[#4a7a9c] flex-shrink-0 mt-1" />
//           <span>{item}</span>
//         </li>
//       ))}
//     </ul>
//   </motion.div>

//   {/* Assessor & Mentor */}
//   <motion.div variants={staggerItem}>
//     <div className="flex items-center gap-3 mb-5">
//       <Award className="h-6 w-6 text-[#1f4567]" />
//       <h3 className="text-2xl font-serif font-bold text-[#1f4567]">
//         Assessor & Mentor
//         <span className="block text-sm font-normal text-muted-foreground">
//           of HEA Fellowship
//         </span>
//       </h3>
//     </div>

//     <ul className="space-y-3 pl-2">
//       {teachingData.mentorship.map((item, i) => (
//         <li
//           key={i}
//           className="flex items-start gap-3 text-[#334155] leading-relaxed"
//         >
//           <CheckCircle className="h-5 w-5 text-[#1f4567] flex-shrink-0 mt-1" />
//           <span>{item}</span>
//         </li>
//       ))}
//     </ul>
//   </motion.div>
// </motion.div>
//       </div>
//       </div>
//     </section>
//       {/* ── Category footer ── */}
//       <div className="bg-[#1a3a5a]">
//         <div className="max-w-[960px] mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-5">
//           {categories.map((cat, i) => (
//             <div
//               key={i}
//               className="bg-white overflow-hidden shadow-md border-l-4"
//               style={{ borderLeftColor: cat.border }}
//             >
//               <div className="p-5">
//                 <div
//                   className="text-xs font-bold uppercase tracking-wider mb-3"
//                   style={{ color: cat.accent }}
//                 >
//                   {cat.title}
//                 </div>
//                 <ul className="list-none">
//                   {cat.items.map((item, j) => (
//                     <li key={j} className="text-xs text-[#4a5a6e] py-1.5 border-b-0">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



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
  return (
    <div id="editorial-roles" className="min-h-screen bg-[#F8F9FA] text-[#0B2545] font-['Inter',system-ui,sans-serif]">
      {/* ── Hero ── */}
      <div
        className="relative h-[500px] lg:h-[600px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/edi.jpg')" }}
      >
        {/* Green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/80 via-[#0F7A5A]/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-16">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Editorial <br />
              <span className="text-[#D4AF37]">Roles</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
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
            <h2 className="font-serif text-2xl font-bold text-[#0B2545] tracking-tight">
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-16"
        >
          {/* Journal Editing */}
          <motion.div variants={staggerItem}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0B2545]">
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
          <motion.div variants={staggerItem}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0B2545]">
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
          <motion.div variants={staggerItem}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0B2545]">
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
                    <Users className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Category Footer ── */}
      <div className="bg-[#0B2545] mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          <h3 className="font-serif text-2xl font-bold text-white mb-8 text-center md:text-left">
            Explore <span className="text-[#D4AF37]">Editorial Areas</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15 hover:border-[#0F7A5A]/30 group"
              >
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-wider mb-4 text-[#D4AF37] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}