// // import { staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
// // import { SectionHeading } from "@/components/common/SectionHeading";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { motion } from "framer-motion";
// // import { Award, BookOpen, CheckCircle, ChevronRight, Users } from "lucide-react";

// // // ─── DATA ────────────────────────────────────────────────────────────────────
// // const navLinks = ["Courses taught", "Supervision", "Assessor & mentor of HEA fellowship"];

// // const teachingData = {
// //   courses: [
// //     "Language Testing and Assessment",
// //     "Educational Assessment",
// //     "Computer-Assisted Language Learning",
// //     "Research Methods for Educational Research",
// //     "Language Teaching Methodologies",
// //     "Being a Doctoral Practitioner",
// //     "Planning for Professional Projects",
// //     "Research Literacy for Teachers",
// //     "PGCE courses",
// //   ],
// //   supervision: [
// //     "MSc in TESOL",
// //     "MSc in Language Education",
// //     "MEd in Educational Studies",
// //     "EdD in TESOL",
// //     "DProf in TESOL",
// //     "PhD in Education",
// //   ],
// //   mentorship: [
// //     "Queen’s University Belfast",
// //     "University of Edinburgh",
// //     "University of St Andrews",
// //   ],
// // };

// // // Categories for footer (teaching‑relevant)
// // const categories = [
// //   {
// //     title: "Courses",
// //     items: [
// //       "Language Testing",
// //       "Educational Assessment",
// //       "Research Methods",
// //       "Language Teaching Methodologies",
// //     ],
// //   },
// //   {
// //     title: "Supervision",
// //     items: [
// //       "MSc in TESOL",
// //       "MEd in Educational Studies",
// //       "EdD in TESOL",
// //       "PhD in Education",
// //     ],
// //   },
// //   {
// //     title: "Mentorship",
// //     items: [
// //       "Queen’s University Belfast",
// //       "University of Edinburgh",
// //       "University of St Andrews",
// //     ],
// //   },
// //   {
// //     title: "Fellowship",
// //     items: [
// //       "HEA Fellowship Assessor",
// //       "HEA Fellowship Mentor",
// //       "Professional Development",
// //     ],
// //   },
// // ];

// // // ─── COMPONENT ────────────────────────────────────────────────────────────────
// // export default function TeachingSection() {
// //   // ── Animation variants ──
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.08, delayChildren: 0.2 },
// //     },
// //   };

// //   const listItemVariants = {
// //     hidden: { opacity: 0, x: -12 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
// //   };

// //   return (
// //     <div
// //       id="teaching"
// //       className="min-h-screen bg-[#F8F9FA] text-[#0B2545] font-sans"
// //     >
// //       {/* ── Hero ── */}
// //       <div
// //         className="relative h-[500px] lg:h-[600px] overflow-hidden bg-cover bg-center"
// //         style={{ backgroundImage: "url('/images/tech.jpg')" }}
// //       >
// //         {/* Overlay with green gradient */}
// //         <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/80 via-[#0F7A5A]/40 to-transparent" />
// //         <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-16">
// //           <div className="max-w-2xl">
// //             <motion.h1
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
// //               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
// //             >
// //               Teaching & <br />
// //               <span className="text-[#00B894]">Mentorship</span>
// //             </motion.h1>
// //             <motion.p
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
// //               className="mt-4 text-lg text-white/80 max-w-xl"
// //             >
// //               Inspiring the next generation of educators and researchers.
// //             </motion.p>
// //           </div>
// //         </div>
// //         <div className="absolute bottom-3 left-3 z-10 bg-black/40 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
// //           Teaching
// //         </div>
// //       </div>

// //       {/* ── Sticky Nav ── */}
// //       <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-[#0F7A5A]/20 shadow-sm">
// //         <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-stretch md:items-center justify-between py-4 md:py-0">
// //           <div className="py-3 md:py-4 flex-shrink-0">
// //             <h2 className="text-2xl font-bold text-[#0B2545]">
// //               Teaching <span className="text-[#0F7A5A]">Overview</span>
// //             </h2>
// //           </div>
// //           <nav className="flex flex-wrap items-center gap-2 md:gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-[#0F7A5A]/10">
// //             {navLinks.map((link) => (
// //               <button
// //                 key={link}
// //                 className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#0B2545] hover:text-[#0F7A5A] hover:bg-[#0F7A5A]/10 rounded-full transition-all duration-200 group"
// //               >
// //                 {link}
// //                 <ChevronRight size={16} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
// //               </button>
// //             ))}
// //           </nav>
// //         </div>
// //       </div>

// //       {/* ── Main Content ── */}
// //       <motion.section
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, margin: "-40px" }}
// //         variants={containerVariants}
// //         className="max-w-7xl mx-auto px-6 lg:px-10 py-16"
// //       >
// //         <div className="space-y-16">
// //           {/* Courses Taught */}
// //           <motion.div variants={listItemVariants}>
// //             <div className="flex items-center gap-3 mb-6">
// //               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
// //               <div>
// //                 <h3 className="text-2xl font-bold text-[#0B2545]">
// //                   Courses Taught
// //                 </h3>
// //                 <p className="text-sm text-[#4A5A6A]/70">Postgraduate Level</p>
// //               </div>
// //             </div>

// //             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
// //               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {teachingData.courses.map((item, i) => (
// //                   <li
// //                     key={i}
// //                     className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
// //                   >
// //                     <CheckCircle className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
// //                     <span>{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </motion.div>

// //           {/* Supervision */}
// //           <motion.div variants={listItemVariants}>
// //             <div className="flex items-center gap-3 mb-6">
// //               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
// //               <div>
// //                 <h3 className="text-2xl font-bold text-[#0B2545]">
// //                   Supervision
// //                 </h3>
// //                 <p className="text-sm text-[#4A5A6A]/70">Postgraduate Level</p>
// //               </div>
// //             </div>

// //             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
// //               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {teachingData.supervision.map((item, i) => (
// //                   <li
// //                     key={i}
// //                     className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
// //                   >
// //                     <Users className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
// //                     <span>{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </motion.div>

// //           {/* Assessor & Mentor */}
// //           <motion.div variants={listItemVariants}>
// //             <div className="flex items-center gap-3 mb-6">
// //               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
// //               <div>
// //                 <h3 className="text-2xl font-bold text-[#0B2545]">
// //                   Assessor & Mentor
// //                 </h3>
// //                 <p className="text-sm text-[#4A5A6A]/70">HEA Fellowship</p>
// //               </div>
// //             </div>

// //             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
// //               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {teachingData.mentorship.map((item, i) => (
// //                   <li
// //                     key={i}
// //                     className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
// //                   >
// //                     <Award className="h-5 w-5 text-[#00B894] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
// //                     <span>{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </motion.section>

// //       {/* ── Category Footer (dark green to match KnowledgeExchange) ── */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// //         className="bg-[#0B5E4A] mt-12"
// //       >
// //         <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
// //           <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">
// //             Explore <span className="text-[#A8E6CF]">Teaching Areas</span>
// //           </h3>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {categories.map((cat, i) => (
// //               <motion.div
// //                 key={i}
// //                 whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(168,230,207,0.2)" }}
// //                 transition={{ duration: 0.3 }}
// //                 className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hover:border-[#A8E6CF]/40 group"
// //               >
// //                 <div className="p-6">
// //                   <div className="text-xs font-bold uppercase tracking-wider mb-4 text-[#A8E6CF] flex items-center gap-2">
// //                     <span className="w-2 h-2 rounded-full bg-[#A8E6CF]" />
// //                     {cat.title}
// //                   </div>
// //                   <ul className="space-y-2">
// //                     {cat.items.map((item, j) => (
// //                       <li key={j} className="text-sm text-white/80 hover:text-white transition-colors border-b border-white/5 py-2 last:border-0">
// //                         {item}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }



// import { staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
// import { SectionHeading } from "@/components/common/SectionHeading";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import {
//   Award,
//   BookOpen,
//   CheckCircle,
//   ChevronRight,
//   Users,
//   Briefcase,
//   Building,
//   Quote,
// } from "lucide-react";

// // ─── DATA ────────────────────────────────────────────────────────────────────
// const navLinks = [
//   "Teaching Philosophy",
//   "Areas of Expertise",
//   "Current Roles",
//   "Previous Engagements",
// ];

// const teachingData = {
//   philosophy: `
//     I believe that education should transcend the transmission of knowledge and 
//     inspire learners to question, innovate, collaborate, and contribute meaningfully 
//     to society. My pedagogical approach integrates theoretical rigor with practical 
//     relevance, fostering critical thinking, ethical awareness, and transformative 
//     leadership among students.
//   `,
//   areas: [
//     "Higher Education Policy and Governance",
//     "Public Administration and Organizational Theory",
//     "Strategic Management",
//     "Organizational Behavior and Human Resource Management",
//     "Research Methods and Academic Writing",
//     "English Language and Literature",
//     "Academic Communication and Professional Writing",
//     "Conflict Studies and International Security",
//     "Western Intellectual Philosophy",
//     "Corporate Social Responsibility and Sustainability",
//     "Leadership and Organizational Development",
//   ],
//   currentAppointments: [
//     {
//       institution: "Public Administration Campus, Tribhuvan University",
//       description:
//         "Teaching undergraduate and graduate courses in Public Administration and related disciplines.",
//     },
//     {
//       institution: "School of Management, Tribhuvan University",
//       description:
//         "Contributing to Business & Managerial Communication education through graduate teaching, and academic mentoring.",
//     },
//   ],
//   previousEngagements: [
//     "Kathmandu Model College, Bagbazar",
//     "St. Lawrence College, Chabahil",
//     "Mangalodaya Multiple Campus, Thankot",
//     "Imperial Business College, Kamaladi",
//     "Caribbean College, Mahalaxmisthan",
//     "Universal College, Maitidevi",
//     "Prime Chartered Academy, New Baneshwor",
//     "Presidential Business School, Buddhanagar",
//     "Public Youth Campus, Tribhuvan University, Dhobichaur",
//     "Xavier International College, Kalopul",
//     "Bajra International College, Boudha",
//     "Kumari Multiple Campus, Boudha",
//     "Herald International College, Basundhara",
//     "International School of Travel and Tourism, Gyaneshwor",
//     "Nepal College of Travel and Tourism, Gyaneshwor",
//   ],
// };

// // Categories for the footer (additional summary)
// const categories = [
//   {
//     title: "Areas of Expertise",
//     items: teachingData.areas.slice(0, 6), // show first 6
//   },
//   {
//     title: "Current Appointments",
//     items: teachingData.currentAppointments.map(
//       (app) => `${app.institution}`
//     ),
//   },
//   {
//     title: "Previous Engagements (selected)",
//     items: teachingData.previousEngagements.slice(0, 6),
//   },
//   {
//     title: "Philosophy",
//     items: [
//       "Student‑centered learning",
//       "Critical inquiry",
//       "Ethical leadership",
//       "Experiential pedagogy",
//       "Transformative leadership",
//     ],
//   },
// ];

// // ─── COMPONENT ────────────────────────────────────────────────────────────────
// export default function TeachingSection() {
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
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.35, ease: "easeOut" },
//     },
//   };

//   const fadeUpVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   return (
//     <div
//       id="teaching"
//       className="min-h-screen bg-[#F8F9FA] text-[#0B2545] font-sans"
//     >
//       {/* ── Hero ── */}
//       <div
//         className="relative h-[500px] lg:h-[600px] overflow-hidden bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/techin1.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/80 via-[#0F7A5A]/40 to-transparent" />
//         <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-16">
//           <div className="max-w-2xl">
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
//             >
//               Teaching & <br />
//               <span className="text-[#00B894]">Mentorship</span>
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               className="mt-4 text-lg text-white/80 max-w-xl"
//             >
//               Scholar, Educator, and Mentor with over two decades of experience in
//               higher education.
//             </motion.p>
//           </div>
//         </div>
//         <div className="absolute bottom-3 left-3 z-10 bg-black/40 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
//           Teaching
//         </div>
//       </div>

//       {/* ── Sticky Nav ── */}
//       <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-[#0F7A5A]/20 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-stretch md:items-center justify-between py-4 md:py-0">
//           <div className="py-3 md:py-4 flex-shrink-0">
//             <h2 className="text-2xl font-bold text-[#0B2545]">
//               Teaching <span className="text-[#0F7A5A]">Overview</span>
//             </h2>
//           </div>
//           <nav className="flex flex-wrap items-center gap-2 md:gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-[#0F7A5A]/10">
//             {navLinks.map((link) => (
//               <button
//                 key={link}
//                 className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#0B2545] hover:text-[#0F7A5A] hover:bg-[#0F7A5A]/10 rounded-full transition-all duration-200 group"
//               >
//                 {link}
//                 <ChevronRight
//                   size={16}
//                   className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
//                 />
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
//           {/* Teaching Philosophy */}
//           <motion.div variants={listItemVariants} className="relative">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//               <div>
//                 <h3 className="text-2xl font-bold text-[#0B2545]">
//                   Teaching Philosophy
//                 </h3>
//                 <p className="text-sm text-[#4A5A6A]/70">Core principles</p>
//               </div>
//             </div>
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300 relative">
//               <Quote className="absolute top-4 right-4 h-8 w-8 text-[#0F7A5A]/20" />
//               <p className="text-[#4A5A6A] leading-relaxed text-lg italic">
//                 {teachingData.philosophy}
//               </p>
//             </div>
//           </motion.div>

//           {/* Areas of Expertise */}
//           <motion.div variants={listItemVariants}>
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//               <div>
//                 <h3 className="text-2xl font-bold text-[#0B2545]">
//                   Areas of Expertise
//                 </h3>
//                 <p className="text-sm text-[#4A5A6A]/70">Teaching and Supervision</p>
//               </div>
//             </div>
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {teachingData.areas.map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
//                   >
//                     <BookOpen className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>

//           {/* Current Roles */}
//           <motion.div variants={listItemVariants}>
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//               <div>
//                 <h3 className="text-2xl font-bold text-[#0B2545]">
//                   Current Academic Appointments
//                 </h3>
//                 <p className="text-sm text-[#4A5A6A]/70">Present roles</p>
//               </div>
//             </div>
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
//               <ul className="grid grid-cols-1 gap-6">
//                 {teachingData.currentAppointments.map((app, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-4 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
//                   >
//                     <Building className="h-6 w-6 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
//                     <div>
//                       <span className="font-semibold text-[#0B2545] block">
//                         {app.institution}
//                       </span>
//                       <span>{app.description}</span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>

//           {/* Previous Engagements */}
//           <motion.div variants={listItemVariants}>
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
//               <div>
//                 <h3 className="text-2xl font-bold text-[#0B2545]">
//                   Previous Teaching Engagements
//                 </h3>
//                 <p className="text-sm text-[#4A5A6A]/70">Diverse institutions</p>
//               </div>
//             </div>
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
//               <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {teachingData.previousEngagements.map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
//                   >
//                     <Briefcase className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
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
//             Explore <span className="text-[#A8E6CF]">Teaching Highlights</span>
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
//                       <li
//                         key={j}
//                         className="text-sm text-white/80 hover:text-white transition-colors border-b border-white/5 py-2 last:border-0"
//                       >
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


import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  Award,
  BookOpen,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Users,
  Briefcase,
  Building,
  Quote,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const navLinks = [
  "Teaching Philosophy",
  "Areas of Expertise",
  "Current Roles",
  "Previous Engagements",
];

// Hero carousel images — drop teaching1.jpeg and teaching2.jpeg into /public/images
const heroSlides = [
  {
    image: "/images/teaching1.jpeg",
    eyebrow: "Teaching",
    title: "Teaching &",
    highlight: "Mentorship",
    subtitle:
      "Scholar, Educator, and Mentor with over two decades of experience in higher education.",
  },
  {
    image: "/images/teaching2.jpeg",
    eyebrow: "In the classroom",
    title: "Shaping",
    highlight: "Future Leaders",
    subtitle:
      "Guiding postgraduate scholars across Public Administration, Management, and Language Education.",
  },
];

const teachingData = {
  philosophy: `
    I believe that education should transcend the transmission of knowledge and 
    inspire learners to question, innovate, collaborate, and contribute meaningfully 
    to society. My pedagogical approach integrates theoretical rigor with practical 
    relevance, fostering critical thinking, ethical awareness, and transformative 
    leadership among students.
  `,
  areas: [
    "Higher Education Policy and Governance",
    "Public Administration and Organizational Theory",
    "Strategic Management",
    "Organizational Behavior and Human Resource Management",
    "Research Methods and Academic Writing",
    "English Language and Literature",
    "Academic Communication and Professional Writing",
    "Conflict Studies and International Security",
    "Western Intellectual Philosophy",
    "Corporate Social Responsibility and Sustainability",
    "Leadership and Organizational Development",
  ],
  currentAppointments: [
    {
      institution: "Public Administration Campus, Tribhuvan University",
      description:
        "Teaching undergraduate and graduate courses in Public Administration and related disciplines.",
    },
    {
      institution: "School of Management, Tribhuvan University",
      description:
        "Contributing to Business & Managerial Communication education through graduate teaching, and academic mentoring.",
    },
  ],
  previousEngagements: [
    "Kathmandu Model College, Bagbazar",
    "St. Lawrence College, Chabahil",
    "Mangalodaya Multiple Campus, Thankot",
    "Imperial Business College, Kamaladi",
    "Caribbean College, Mahalaxmisthan",
    "Universal College, Maitidevi",
    "Prime Chartered Academy, New Baneshwor",
    "Presidential Business School, Buddhanagar",
    "Public Youth Campus, Tribhuvan University, Dhobichaur",
    "Xavier International College, Kalopul",
    "Bajra International College, Boudha",
    "Kumari Multiple Campus, Boudha",
    "Herald International College, Basundhara",
    "International School of Travel and Tourism, Gyaneshwor",
    "Nepal College of Travel and Tourism, Gyaneshwor",
  ],
};

// Categories for the footer (additional summary)
const categories = [
  {
    title: "Areas of Expertise",
    items: teachingData.areas.slice(0, 6), // show first 6
  },
  {
    title: "Current Appointments",
    items: teachingData.currentAppointments.map((app) => `${app.institution}`),
  },
  {
    title: "Previous Engagements (selected)",
    items: teachingData.previousEngagements.slice(0, 6),
  },
  {
    title: "Philosophy",
    items: [
      "Student‑centered learning",
      "Critical inquiry",
      "Ethical leadership",
      "Experiential pedagogy",
      "Transformative leadership",
    ],
  },
];

// ─── HERO CAROUSEL ────────────────────────────────────────────────────────────
function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((next) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + heroSlides.length) % heroSlides.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  const imageVariants = {
    enter: (dir) => ({ opacity: 0, scale: 1.08, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, scale: 1.02, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <div className="relative h-[500px] lg:h-[600px] overflow-hidden mt-40 lg:mt-20">
      {/* ── Sliding backgrounds with full image ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {/* Use img tag or background with contain to show full image */}
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-contain object-center"
          />
          {/* Alternative: use background with contain */}
          {/* <div 
            className="w-full h-full"
            style={{ 
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          /> */}
        </motion.div>
      </AnimatePresence>

      {/* Overlay with green gradient — stays fixed above the sliding images */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/80 via-[#0F7A5A]/40 to-transparent" />

      {/* ── Text content ── */}
      <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-16">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#A8E6CF] mb-3">
                {slide.eyebrow}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {slide.title} <br />
                <span className="text-[#00B894]">{slide.highlight}</span>
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-xl">
                {slide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Prev / Next controls ── */}
      <button
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-[#00B894]" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-3 left-3 z-10 bg-black/40 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
        Teaching
      </div>
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function TeachingSection() {
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

  return (
    <div
      id="teaching"
      className="min-h-screen bg-[#F8F9FA] text-[#0B2545] font-sans"
    >
      {/* ── Hero Carousel ── */}
      <HeroCarousel />

      {/* ── Sticky Nav ── */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-[#0F7A5A]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-stretch md:items-center justify-between py-4 md:py-0">
          <div className="py-3 md:py-4 flex-shrink-0">
            <h2 className="text-2xl font-bold text-[#0B2545]">
              Teaching <span className="text-[#0F7A5A]">Overview</span>
            </h2>
          </div>
          <nav className="flex flex-wrap items-center gap-2 md:gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-[#0F7A5A]/10">
            {navLinks.map((link) => (
              <button
                key={link}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#0B2545] hover:text-[#0F7A5A] hover:bg-[#0F7A5A]/10 rounded-full transition-all duration-200 group"
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
        className="max-w-7xl mx-auto px-6 lg:px-10 py-16"
      >
        <div className="space-y-16">
          {/* Teaching Philosophy */}
          <motion.div variants={listItemVariants} className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  Teaching Philosophy
                </h3>
                <p className="text-sm text-[#4A5A6A]/70">Core principles</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-[#0F7A5A]/20" />
              <p className="text-[#4A5A6A] leading-relaxed text-lg italic">
                {teachingData.philosophy}
              </p>
            </div>
          </motion.div>

          {/* Areas of Expertise */}
          <motion.div variants={listItemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  Areas of Expertise
                </h3>
                <p className="text-sm text-[#4A5A6A]/70">Teaching and Supervision</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teachingData.areas.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
                  >
                    <BookOpen className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Current Roles */}
          <motion.div variants={listItemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  Current Academic Appointments
                </h3>
                <p className="text-sm text-[#4A5A6A]/70">Present roles</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
              <ul className="grid grid-cols-1 gap-6">
                {teachingData.currentAppointments.map((app, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
                  >
                    <Building className="h-6 w-6 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-semibold text-[#0B2545] block">
                        {app.institution}
                      </span>
                      <span>{app.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Previous Engagements */}
          <motion.div variants={listItemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  Previous Teaching Engagements
                </h3>
                <p className="text-sm text-[#4A5A6A]/70">Diverse institutions</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-[#0B2545]/5 p-8 hover:shadow-[#0B2545]/10 transition-all duration-300">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teachingData.previousEngagements.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#4A5A6A] leading-relaxed group hover:text-[#0B2545] transition-colors"
                  >
                    <Briefcase className="h-5 w-5 text-[#0F7A5A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
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
            Explore <span className="text-[#A8E6CF]">Teaching Highlights</span>
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