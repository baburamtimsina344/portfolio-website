// import { motion } from "framer-motion";
// import {
//   Award,
//   BookOpen,
//   Calendar,
//   CheckCircle,
//   Users,
//   Briefcase,
//   Star,
// } from "lucide-react";

// // ─── DATA (from BRT Website Content) ─────────────────────────────────────────
// const certifications = [
//   "Advice for Leaders During a Crisis - LinkedIn Learning (2020)",
//   "Counterintuitive Leadership Strategies for a VUCA Environment - LinkedIn Learning (2020)",
//   "Digital Transformation in Practice: Virtual Collaboration Tools - LinkedIn Learning (2020)",
//   "Managing Stress for Positive Change - LinkedIn Learning (2020)",
//   "Master In-Demand Professional Soft Skills - LinkedIn Learning (2020)",
//   "Recharge Your Energy for Peak Performance - LinkedIn Learning (2020)",
//   "Teamwork Foundations - LinkedIn Learning (2020)",
//   "Digital Networking Strategies - LinkedIn Learning (2020)",
//   "Leading in Crisis - LinkedIn Learning (2020)",
//   "Recession-Proof Career Strategies - LinkedIn Learning (2020)",
// ];

// const award = {
//   title: "Dean's Award",
//   institution:
//     "Institute of Advanced Communication, Education, and Research (IACER), Pokhara University",
//   description: "Awarded in recognition of outstanding academic performance.",
// };

// const associations = [
//   {
//     name: "Nepal English Language Teachers' Association (NELTA)",
//     status: "Life Member",
//     focus: "English Language Education & Professional Development",
//   },
//   {
//     name: "Management Association of Nepal (MAN)",
//     status: "Life Member",
//     focus: "Management Education, Leadership & Research",
//   },
//   {
//     name: "Human Resources Society Nepal (HRSN)",
//     status: "Life Member",
//     focus: "Human Resource Management & Organizational Development",
//   },
// ];

// const internationalCourses = [
//   "Higher Education Leadership – MRU University (2023)",
//   "Conflict Resolution – Duke University (2022)",
//   "Strategic Management – King's College London (2021)",
//   "Professional Communication and Leadership Courses – LinkedIn Learning (2024)",
//   "50+ short courses and crash certifications from leading global learning platforms.",
// ];

// const conferencesDescription = `Participated in and contributed to over 100 scholarly conferences, seminars, workshops, webinars, and academic forums. Engaged in interdisciplinary discussions on higher education, leadership, organizational behavior, sustainability, research methodology, and educational innovation. Participated in multiple international conferences on Sustainability and Artificial Intelligence in Education through the Whova Conference Platform (2020–2024).`;

// const resourcePersonTopics = [
//   "Public Speaking and Communication Skills",
//   "Leadership Development",
//   "Research and Academic Writing",
//   "Professional and Personal Growth",
//   "Higher Education and Institutional Leadership",
// ];

// const statistics = {
//   events: "100+",
//   certifications: "50+",
//   platforms: "5+",
//   engagements: "Multiple",
// };

// // Navbar links suitable for this section (for the site's main nav / in-page jump links)
// export const awardsNavLinks = [
//   { label: "Professional Certifications", href: "#certifications" },
//   { label: "Awards & Honors", href: "#awards" },
//   { label: "Associations & Memberships", href: "#associations" },
//   { label: "Professional Development", href: "#development" },
// ];

// // ─── COMPONENT ────────────────────────────────────────────────────────────────
// export default function AwardsAndCertifications() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.08, delayChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="projects"
//       className="py-24 px-6 bg-[#F8F9FA] text-[#0B2545] font-sans"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* ── Section Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="mb-4 text-center md:text-left"
//         >
//           <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
//             <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//             <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545]">
//               Awards & <span className="text-[#0F7A5A]">Certifications</span>
//             </h2>
//           </div>
//           <p className="text-[#4A5A6A]/80 max-w-2xl mx-auto md:mx-0">
//             Certifications, honors, professional memberships, and ongoing academic
//             development.
//           </p>
//         </motion.div>

//         {/* ── In-section Nav ── */}
//         <div className="sticky top-0 z-20 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-[#0F7A5A]/20 mb-12">
//           <nav className="flex flex-wrap items-center gap-2 md:gap-4 py-4">
//             {awardsNavLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="px-4 py-2 text-sm font-medium text-[#0B2545] hover:text-[#0F7A5A] hover:bg-[#0F7A5A]/10 rounded-full transition-all duration-200"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>
//         </div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-40px" }}
//           variants={containerVariants}
//           className="space-y-16"
//         >
//           {/* ── Certifications ── */}
//           <motion.div id="certifications" variants={itemVariants} className="scroll-mt-24">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//               <div>
//                 <h3 className="text-2xl font-bold text-[#0B2545]">
//                   Professional Certifications
//                 </h3>
//                 <p className="text-sm text-[#4A5A6A]/70">LinkedIn Learning (2020)</p>
//               </div>
//             </div>

//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {certifications.map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
//                   >
//                     <CheckCircle className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>

//           {/* ── Awards & Honors ── */}
//           <motion.div id="awards" variants={itemVariants} className="scroll-mt-24">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//               <div>
//                 <h3 className="text-2xl font-bold text-[#0B2545]">Awards & Honors</h3>
//                 <p className="text-sm text-[#4A5A6A]/70">Recognition for academic excellence</p>
//               </div>
//             </div>

//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
//               <div className="flex items-start gap-4">
//                 <Award className="h-6 w-6 text-[#0F7A5A] flex-shrink-0 mt-0.5" />
//                 <div>
//                   <h4 className="text-lg font-semibold text-[#0B2545]">{award.title}</h4>
//                   <p className="text-sm text-[#4A5A6A]/80">{award.institution}</p>
//                   <p className="text-sm text-[#4A5A6A] mt-1">{award.description}</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* ── Associations & Memberships ── */}
//           <motion.div id="associations" variants={itemVariants} className="scroll-mt-24">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//               <div>
//                 <h3 className="text-2xl font-bold text-[#0B2545]">
//                   Professional Associations & Memberships
//                 </h3>
//                 <p className="text-sm text-[#4A5A6A]/70">
//                   Scholarly collaboration & academic advancement
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
//               <h4 className="text-lg font-semibold text-[#0B2545] mb-4 flex items-center gap-2">
//                 <Users className="h-5 w-5 text-[#0F7A5A]" />
//                 Associations
//               </h4>
//               <ul className="space-y-4">
//                 {associations.map((assoc, i) => (
//                   <li
//                     key={i}
//                     className="border-b border-[#0B2545]/5 last:border-0 pb-3 last:pb-0"
//                   >
//                     <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
//                       <span className="font-medium text-[#0B2545]">{assoc.name}</span>
//                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0F7A5A]/10 text-[#0F7A5A] w-fit">
//                         {assoc.status}
//                       </span>
//                     </div>
//                     <p className="text-sm text-[#4A5A6A]/80 mt-0.5">{assoc.focus}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>

//           {/* ── Professional Development ── */}
//           <motion.div id="development" variants={itemVariants} className="scroll-mt-24">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//               <div>
//                 <h3 className="text-2xl font-bold text-[#0B2545]">
//                   Professional Development & Engagements
//                 </h3>
//                 <p className="text-sm text-[#4A5A6A]/70">
//                   Lifelong learning & academic leadership
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-6">
//               {/* International Courses */}
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
//                 <h4 className="text-lg font-semibold text-[#0B2545] mb-4 flex items-center gap-2">
//                   <BookOpen className="h-5 w-5 text-[#0F7A5A]" />
//                   International Courses & Certifications
//                 </h4>
//                 <ul className="space-y-3">
//                   {internationalCourses.map((course, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-3 text-[#4A5A6A] hover:text-[#0B2545] transition-colors"
//                     >
//                       <CheckCircle className="h-4 w-4 text-[#0F7A5A] flex-shrink-0 mt-0.5" />
//                       <span>{course}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Conferences */}
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
//                 <h4 className="text-lg font-semibold text-[#0B2545] mb-3 flex items-center gap-2">
//                   <Calendar className="h-5 w-5 text-[#0F7A5A]" />
//                   Conferences, Workshops & Scholarly Events
//                 </h4>
//                 <p className="text-[#4A5A6A] leading-relaxed">{conferencesDescription}</p>
//               </div>

//               {/* Resource Person */}
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
//                 <h4 className="text-lg font-semibold text-[#0B2545] mb-3 flex items-center gap-2">
//                   <Briefcase className="h-5 w-5 text-[#0F7A5A]" />
//                   Resource Person & Invited Engagements
//                 </h4>
//                 <p className="text-[#4A5A6A] leading-relaxed mb-3">
//                   Served as Resource Person, Facilitator, Judge, and Invited Speaker in
//                   various academic and professional development programs focusing on:
//                 </p>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                   {resourcePersonTopics.map((topic, i) => (
//                     <li key={i} className="flex items-start gap-2 text-sm text-[#4A5A6A]">
//                       <span className="text-[#0F7A5A]">•</span>
//                       <span>{topic}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Statistics */}
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
//                 <h4 className="text-lg font-semibold text-[#0B2545] mb-4 flex items-center gap-2">
//                   <Star className="h-5 w-5 text-[#0F7A5A]" />
//                   Curriculum Innovation & Evaluation Statistics
//                 </h4>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
//                     <p className="text-2xl font-bold text-[#0F7A5A]">{statistics.events}</p>
//                     <p className="text-xs text-[#4A5A6A]">Scholarly Events</p>
//                   </div>
//                   <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
//                     <p className="text-2xl font-bold text-[#0F7A5A]">
//                       {statistics.certifications}
//                     </p>
//                     <p className="text-xs text-[#4A5A6A]">Certifications Earned</p>
//                   </div>
//                   <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
//                     <p className="text-2xl font-bold text-[#0F7A5A]">
//                       {statistics.platforms}
//                     </p>
//                     <p className="text-xs text-[#4A5A6A]">International Platforms</p>
//                   </div>
//                   <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
//                     <p className="text-2xl font-bold text-[#0F7A5A]">
//                       {statistics.engagements}
//                     </p>
//                     <p className="text-xs text-[#4A5A6A]">Facilitation Engagements</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Users,
  Briefcase,
  Star,
} from "lucide-react";

// ─── DATA (from BRT Website Content) ─────────────────────────────────────────
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

const award = {
  title: "Dean's Award",
  institution:
    "Institute of Advanced Communication, Education, and Research (IACER), Pokhara University",
  description: "Awarded in recognition of outstanding academic performance.",
};

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

const internationalCourses = [
  "Higher Education Leadership – MRU University (2023)",
  "Conflict Resolution – Duke University (2022)",
  "Strategic Management – King's College London (2021)",
  "Professional Communication and Leadership Courses – LinkedIn Learning (2024)",
  "50+ short courses and crash certifications from leading global learning platforms.",
];

const conferencesDescription = `Participated in and contributed to over 100 scholarly conferences, seminars, workshops, webinars, and academic forums. Engaged in interdisciplinary discussions on higher education, leadership, organizational behavior, sustainability, research methodology, and educational innovation. Participated in multiple international conferences on Sustainability and Artificial Intelligence in Education through the Whova Conference Platform (2020–2024).`;

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

// Navbar links suitable for this section (for the site's main nav / in-page jump links)
export const awardsNavLinks = [
  { label: "Professional Certifications", href: "#certifications" },
  { label: "Awards & Honors", href: "#awards" },
  { label: "Associations & Memberships", href: "#associations" },
  { label: "Professional Development", href: "#development" },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AwardsAndCertifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="bg-[#F8F9FA] text-[#0B2545] font-sans"
    >
      {/* ── Hero Banner ── */}
      <div
        className="relative h-[360px] md:h-[420px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/awards-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/85 via-[#0F7A5A]/50 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 lg:px-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-1 h-10 bg-[#00B894] rounded-full" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Awards & <span className="text-[#00B894]">Certifications</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              className="text-white/80 max-w-xl"
            >
              Certifications, honors, professional memberships, and ongoing academic
              development.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* ── In-section Nav ── */}
        <div className="sticky top-0 z-20 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-[#0F7A5A]/20 mb-12">
          <nav className="flex flex-wrap items-center gap-2 md:gap-4 py-4">
            {awardsNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#0B2545] hover:text-[#0F7A5A] hover:bg-[#0F7A5A]/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* ── Certifications ── */}
          <motion.div id="certifications" variants={itemVariants} className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  Professional Certifications
                </h3>
                <p className="text-sm text-[#4A5A6A]/70">LinkedIn Learning (2020)</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── Awards & Honors ── */}
          <motion.div id="awards" variants={itemVariants} className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-[#0B2545]">Awards & Honors</h3>
                <p className="text-sm text-[#4A5A6A]/70">Recognition for academic excellence</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-[#0F7A5A] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold text-[#0B2545]">{award.title}</h4>
                  <p className="text-sm text-[#4A5A6A]/80">{award.institution}</p>
                  <p className="text-sm text-[#4A5A6A] mt-1">{award.description}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Associations & Memberships ── */}
          <motion.div id="associations" variants={itemVariants} className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  Professional Associations & Memberships
                </h3>
                <p className="text-sm text-[#4A5A6A]/70">
                  Scholarly collaboration & academic advancement
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
              <h4 className="text-lg font-semibold text-[#0B2545] mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-[#0F7A5A]" />
                Associations
              </h4>
              <ul className="space-y-4">
                {associations.map((assoc, i) => (
                  <li
                    key={i}
                    className="border-b border-[#0B2545]/5 last:border-0 pb-3 last:pb-0"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                      <span className="font-medium text-[#0B2545]">{assoc.name}</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0F7A5A]/10 text-[#0F7A5A] w-fit">
                        {assoc.status}
                      </span>
                    </div>
                    <p className="text-sm text-[#4A5A6A]/80 mt-0.5">{assoc.focus}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── Professional Development ── */}
          <motion.div id="development" variants={itemVariants} className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  Professional Development & Engagements
                </h3>
                <p className="text-sm text-[#4A5A6A]/70">
                  Lifelong learning & academic leadership
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* International Courses */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-[#0B2545] mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#0F7A5A]" />
                  International Courses & Certifications
                </h4>
                <ul className="space-y-3">
                  {internationalCourses.map((course, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#4A5A6A] hover:text-[#0B2545] transition-colors"
                    >
                      <CheckCircle className="h-4 w-4 text-[#0F7A5A] flex-shrink-0 mt-0.5" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conferences */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-[#0B2545] mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#0F7A5A]" />
                  Conferences, Workshops & Scholarly Events
                </h4>
                <p className="text-[#4A5A6A] leading-relaxed">{conferencesDescription}</p>
              </div>

              {/* Resource Person */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-[#0B2545] mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[#0F7A5A]" />
                  Resource Person & Invited Engagements
                </h4>
                <p className="text-[#4A5A6A] leading-relaxed mb-3">
                  Served as Resource Person, Facilitator, Judge, and Invited Speaker in
                  various academic and professional development programs focusing on:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {resourcePersonTopics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4A5A6A]">
                      <span className="text-[#0F7A5A]">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Statistics */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-6 hover:shadow-[#0B2545]/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-[#0B2545] mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#0F7A5A]" />
                  Curriculum Innovation & Evaluation Statistics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#0F7A5A]">{statistics.events}</p>
                    <p className="text-xs text-[#4A5A6A]">Scholarly Events</p>
                  </div>
                  <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#0F7A5A]">
                      {statistics.certifications}
                    </p>
                    <p className="text-xs text-[#4A5A6A]">Certifications Earned</p>
                  </div>
                  <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#0F7A5A]">
                      {statistics.platforms}
                    </p>
                    <p className="text-xs text-[#4A5A6A]">International Platforms</p>
                  </div>
                  <div className="bg-[#0F7A5A]/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#0F7A5A]">
                      {statistics.engagements}
                    </p>
                    <p className="text-xs text-[#4A5A6A]">Facilitation Engagements</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
