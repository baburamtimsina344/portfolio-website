// // // import { motion } from "framer-motion";
// // // import { Users, Landmark, Building2, Presentation, GraduationCap } from "lucide-react";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { SectionHeading } from "@/components/common/SectionHeading";
// // // import { ScrollReveal, staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
// // // import { KNOWLEDGE_ITEMS, KNOWLEDGE_STATS } from "@/data/knowledge";

// // // const typeIcons = {
// // //   community: Users,
// // //   policy: Landmark,
// // //   industry: Building2,
// // //   workshop: Presentation,
// // //   training: GraduationCap,
// // // };

// // // const typeLabels = {
// // //   community: "Community Engagement",
// // //   policy: "Policy Impact",
// // //   industry: "Industry Collaboration",
// // //   workshop: "Workshop",
// // //   training: "Training",
// // // };

// // // export function KnowledgeExchangeSection() {
// // //   return (
// // //     <section id="knowledge-exchange" className="section-padding bg-muted/5 relative overflow-hidden">
// // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

// // //       <div className="container-wide relative">
// // //         <SectionHeading
// // //           label="Knowledge Exchange"
// // //           title="Impact Beyond Academia"
// // //           subtitle="Community engagement, policy impact, industry collaboration, workshops, and trainings."
// // //         />

// // //         <ScrollReveal className="mb-12">
// // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// // //             {KNOWLEDGE_STATS.map((stat) => (
// // //               <div key={stat.label} className="glass-card rounded-xl p-6 text-center hover-lift">
// // //                 <div className="text-3xl font-bold gradient-text">{stat.value}</div>
// // //                 <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </ScrollReveal>

// // //         <motion.div
// // //           variants={staggerContainer}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, margin: "-50px" }}
// // //           className="relative"
// // //         >
// // //           <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

// // //           <div className="space-y-6">
// // //             {KNOWLEDGE_ITEMS.map((item, index) => {
// // //               const Icon = typeIcons[item.type];
// // //               return (
// // //                 <motion.div key={item.id} variants={staggerItem} className="relative md:pl-16">
// // //                   <div className="absolute left-4 md:left-6 top-6 h-4 w-4 rounded-full gradient-primary hidden md:block ring-4 ring-primary/10" />
// // //                   <Card className={`glass-card border-0 hover-lift ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
// // //                     <CardHeader className="pb-3">
// // //                       <div className="flex flex-wrap items-center gap-2 mb-2">
// // //                         <Badge variant="outline">{item.year}</Badge>
// // //                         <Badge variant="secondary" className="gap-1">
// // //                           <Icon className="h-3 w-3" />
// // //                           {typeLabels[item.type]}
// // //                         </Badge>
// // //                         {item.impact && <Badge variant="success">{item.impact}</Badge>}
// // //                       </div>
// // //                       <CardTitle className="text-lg">{item.title}</CardTitle>
// // //                     </CardHeader>
// // //                     <CardContent>
// // //                       <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
// // //                     </CardContent>
// // //                   </Card>
// // //                 </motion.div>
// // //               );
// // //             })}
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import {Footer} from "@/sections/Footer"
// // import { ChevronRight } from "lucide-react";

// // // ─── DATA ────────────────────────────────────────────────────────────────────
// // const navLinks = ["Newspaper", "Blog posts", "Websites"];
// // const newspaper = [
// //   {
// //     text: "How can schools in poor areas attract more teachers?",
// //     date: "11 March 2024",
// //     publication: "Schools Week",
// //   },
// // ];
// // const blogPosts = [
// //   { text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 1)", date: "June 2022", publication: "HE Education Research Census" },
// //   { text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 2)", date: "June 2022", publication: "HE Education Research Census" },
// //   { text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 1)", date: "July 2022", publication: "BERA Blog (Reprint)" },
// //   { text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 2)", date: "July 2022", publication: "BERA Blog (Reprint)" },
// //   { text: "ECR Network Presents: Reflexivity in conducting qualitative educational research (with Muna Abuloushi, Nour Bemlakhdar, Rachel Wicaksono)", date: "Forthcoming", publication: "BERA Blog" },
// //   { text: "Don't be cruel: how to write a fair peer review report (with Shannon Mason)", date: "August 2022", publication: "Times Higher Education Campus" },
// //   { text: "It Takes More Than Financial Incentives: Strategies for Recruiting and Retaining Teachers in Schools (with Violeta Negrea)", date: "June 2024", publication: "HKU SCAFE Blog" },
// // ];
// // const websites = [
// //   { name: "TESOLgraphics website", description: "An online resource with infographic summaries of secondary research in language education for practitioners and teachers." },
// //   { name: "Scholarly Peers website", description: "An online space with resources, blog posts, and podcasts about journal peer review for doctoral students and early career researchers." },
// //   { name: "Thesis by Publication website", description: "A collection of resources for supporting doctoral researchers to publish during their candidature." },
// // ];
// // const categories = [
// //   {
// //     title: "Journal Editing",
// //     accent: "#a8c500",
// //     border: "#d4e500",
// //     items: ["Research in Applied Linguistics", "Review of Education", "Innovation in Language Learning and Teaching"],
// //   },
// //   {
// //     title: "Teacher Education",
// //     accent: "#d91e6e",
// //     border: "#e040a0",
// //     items: ["International Education and Lifelong Learning", "TESOL Graphics", "TESOL International"],
// //   },
// //   {
// //     title: "Research",
// //     accent: "#0056b3",
// //     border: "#5500ff",
// //     items: ["Google Scholar — 3,670 Citations, h-index 36", "ResearchCode — 2,792 R-Score, 2,885 Citations"],
// //   },
// //   {
// //     title: "Researcher Development",
// //     accent: "#00b8a9",
// //     border: "#1ddc9c",
// //     items: ["BERA", "What We're Doing", "Scholarly Peers Podcast", "Thesis by Publication", "Ready to Publish"],
// //   },
// // ];

// // // ─── STYLES (inline for portability) ────────────────────────────────────────
// // const styles = `
// //   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,700;1,300&display=swap');
// //   * { box-sizing: border-box; margin: 0; padding: 0; }
// //   .ke-root {
// //     font-family: 'Inter', system-ui, sans-serif;
// //     background: #e8f2f9;
// //     min-height: 100vh;
// //     color: #1a2332;
// //   }
// //   /* ── Hero ── */
// //   .ke-hero {
// //     position: relative;
// //     height: 280px;
// //     overflow: hidden;
// //   }
// //   .ke-hero img {
// //     width: 100%; height: 100%;
// //     object-fit: cover;
// //     display: block;
// //   }
// //   .ke-hero-overlay {
// //     position: absolute; inset: 0;
// //     background: linear-gradient(to right, rgba(15,30,55,0) 40%, rgba(15,30,55,0));
// //   }
// //   .ke-hero-label {
// //     position: absolute;
// //     bottom: 12px; left: 12px;
// //     background: rgba(0,0,0,0.3); color: #fff;
// //     font-size: 12px; padding: 4px 8px;
// //     border-radius: 3px; z-index: 10;
// //   }
// //   /* ── Header bar ── */
// //   .ke-header {
// //     background: #f9eff5;
// //     border-bottom: 1px solid #e8dce6;
// //     box-shadow: 0 1px 3px rgba(0,0,0,0.06);
// //   }
// //   .ke-header-inner {
// //     max-width: 960px; margin: 0 auto;
// //     padding: 0 32px;
// //     display: flex; align-items: stretch; justify-content: space-between; gap: 0;
// //   }
// //   .ke-brand {
// //     padding: 28px 0;
// //     flex-shrink: 0;
// //   }
// //   .ke-brand h2 {
// //     font-family: 'Merriweather', Georgia, serif;
// //     font-size: 24px; font-weight: 700; line-height: 1.2;
// //     color: #004b7a; letter-spacing: -0.01em;
// //   }
// //   .ke-nav {
// //     display: flex; flex-direction: column; align-items: flex-start;
// //     gap: 8px; padding-right: 0; border-left: 3px solid #d91e6e;
// //     padding-left: 16px; justify-content: center;
// //   }
// //   .ke-nav-btn {
// //     display: flex; align-items: center; gap: 8px;
// //     background: none; border: none; cursor: pointer;
// //     font-family: 'Inter', sans-serif;
// //     font-size: 14px; font-weight: 600; color: #004b7a;
// //     padding: 0;
// //     transition: color 0.15s;
// //     white-space: nowrap;
// //   }
// //   .ke-nav-btn:hover { color: #0070a0; }
// //   .ke-nav-icon { opacity: 0.8; }
// //   /* ── Main content area ── */
// //   .ke-main {
// //     max-width: 960px; margin: 0 auto;
// //     padding: 40px 32px;
// //   }
// //   .ke-panel {
// //     background: #fff;
// //     border: 1px solid #d0d8e0;
// //     border-radius: 0;
// //     padding: 48px 48px;
// //     box-shadow: 0 2px 8px rgba(0,0,0,0.04);
// //   }
// //   .ke-section-title {
// //     font-family: 'Inter', Georgia, serif;
// //     font-size: 18px; font-weight: 700;
// //     color: #004b7a; margin-bottom: 24px;
// //     padding-bottom: 0;
// //     border-bottom: none;
// //   }
// //   .ke-list {
// //     list-style: none; counter-reset: ke-counter;
// //     margin-bottom: 32px;
// //   }
// //   .ke-list-item {
// //     counter-increment: ke-counter;
// //     display: flex; gap: 14px;
// //     padding: 12px 0;
// //     border-bottom: none;
// //   }
// //   .ke-list-item:last-child { border-bottom: none; padding-bottom: 0; }
// //   .ke-list-num {
// //     flex-shrink: 0;
// //     width: 18px; height: 18px;
// //     background: transparent; border-radius: 50%;
// //     display: flex; align-items: center; justify-content: center;
// //     font-size: 13px; font-weight: 600; color: #004b7a;
// //     margin-top: 0;
// //   }
// //   .ke-list-body { flex: 1; }
// //   .ke-list-link {
// //     font-size: 14px; font-weight: 600; color: #0088cc;
// //     text-decoration: none; line-height: 1.4;
// //     display: inline;
// //   }
// //   .ke-list-link:hover { text-decoration: underline; }
// //   .ke-list-meta {
// //     font-size: 12px; color: #7a8fa8;
// //     margin-top: 4px;
// //   }
// //   .ke-list-pub {
// //     font-weight: 600; color: #5a6e88;
// //   }
// //   /* website variant */
// //   .ke-site-name {
// //     font-size: 14px; font-weight: 600; color: #0088cc;
// //     text-decoration: none;
// //   }
// //   .ke-site-name:hover { text-decoration: underline; }
// //   .ke-site-desc {
// //     font-size: 13px; color: #5a6a7e; line-height: 1.5;
// //     margin-top: 4px;
// //   }
// //   /* ── Footer grid ── */
// //   .ke-footer-section {
// //     background: #1a3a5a;
// //     margin-top: 0;
// //   }
// //   .ke-footer-grid {
// //     max-width: 960px; margin: 0 auto;
// //     padding: 40px 32px;
// //     display: grid; grid-template-columns: repeat(4, 1fr);
// //     gap: 20px;
// //   }
// //   .ke-cat-card {
// //     background: #fff;
// //     border-radius: 0;
// //     overflow: hidden;
// //     box-shadow: 0 2px 8px rgba(0,0,0,0.12);
// //     border-left: 4px solid;
// //   }
// //   .ke-cat-body { padding: 20px; }
// //   .ke-cat-title {
// //     font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
// //     text-transform: uppercase; margin-bottom: 12px;
// //     line-height: 1.4;
// //   }
// //   .ke-cat-items { list-style: none; }
// //   .ke-cat-item {
// //     font-size: 11px; color: #4a5a6e;
// //     padding: 6px 0;
// //     border-bottom: none;
// //     line-height: 1.4;
// //   }
// //   .ke-cat-item:last-child { border-bottom: none; }
// //   /* ── Footer bottom ── */
// //   .ke-footer-bottom {
// //     border-top: 1px solid rgba(255,255,255,0.10);
// //     padding: 18px 32px 22px;
// //     max-width: 960px; margin: 0 auto;
// //   }
// //   .ke-footer-row {
// //     display: flex; justify-content: space-between; align-items: center;
// //     margin-bottom: 8px;
// //   }
// //   .ke-footer-name {
// //     font-size: 11px; color: rgba(255,255,255,0.65); font-weight: 500;
// //   }
// //   .ke-footer-links { display: flex; gap: 20px; }
// //   .ke-footer-link {
// //     font-size: 11px; color: rgba(255,255,255,0.5);
// //     text-decoration: none; transition: color 0.15s;
// //   }
// //   .ke-footer-link:hover { color: rgba(255,255,255,0.85); }
// //   .ke-footer-note {
// //     font-size: 10px; color: rgba(255,255,255,0.35);
// //     line-height: 1.5;
// //   }
// //   @media (max-width: 768px) {
// //     .ke-hero { height: 200px; }
// //     .ke-header-inner { padding: 0 16px; }
// //     .ke-brand { padding: 18px 0; }
// //     .ke-brand h2 { font-size: 20px; }
// //     .ke-nav { padding-left: 12px; gap: 6px; }
// //     .ke-nav-btn { font-size: 13px; }
// //     .ke-main { padding: 24px 16px; }
// //     .ke-panel { padding: 24px 20px; }
// //     .ke-footer-grid { grid-template-columns: repeat(2,1fr); padding: 24px 16px; }
// //     .ke-footer-bottom { padding: 14px 16px 18px; }
// //     .ke-footer-row { flex-direction: column; align-items: flex-start; gap: 8px; }
// //   }
// // `;

// // // ─── COMPONENT ────────────────────────────────────────────────────────────────
// // export default function KnowledgeExchange() {
// //   return (
// //     <>
// //       <style>{styles}</style>
// //       <div className="ke-root">
// //         {/* ── Hero ── */}
// //         <div className="ke-hero">
// //           <div
// //   className="ke-hero"
// //   style={{
// //     backgroundImage: "url('/images/col.jpg')",
// //     backgroundSize: "cover",
// //     backgroundPosition: "center",
// //     backgroundRepeat: "no-repeat",
// //   }}
// // >
// //   <div className="ke-hero-overlay" />
// //   <div className="ke-hero-label">Knowledge Exchange</div>
// // </div>
// //           <div className="ke-hero-overlay" />
// //           <div className="ke-hero-label">Knowledge Exchange</div>
// //         </div>
// //         {/* ── Header + Nav ── */}
// //         <div className="ke-header">
// //           <div className="ke-header-inner">
// //             <div className="ke-brand">
// //               <h2>Knowledge<br />Exchange</h2>
// //             </div>
// //             <nav className="ke-nav">
// //               {navLinks.map((link) => (
// //                 <button
// //                   key={link}
// //                   className="ke-nav-btn"
// //                 >
// //                   {link}
// //                   <ChevronRight size={14} className="ke-nav-icon" />
// //                 </button>
// //               ))}
// //             </nav>
// //           </div>
// //         </div>
// //         {/* ── Content panel ── */}
// //         <main className="ke-main">
// //           <div className="ke-panel">
// //             <>
// //               <h3 className="ke-section-title">Newspaper</h3>
// //               <ol className="ke-list">
// //                 {newspaper.map((item, i) => (
// //                   <li key={i} className="ke-list-item">
// //                     <span className="ke-list-num">{i + 1}</span>
// //                     <div className="ke-list-body">
// //                       <a href="#" className="ke-list-link">{item.text}</a>
// //                       <div className="ke-list-meta">
// //                         ({item.date}) · <span className="ke-list-pub">{item.publication}</span>
// //                       </div>
// //                     </div>
// //                   </li>
// //                 ))}
// //               </ol>
// //             </>
// //             <>
// //               <h3 className="ke-section-title">Blog posts</h3>
// //               <ol className="ke-list">
// //                 {blogPosts.map((item, i) => (
// //                   <li key={i} className="ke-list-item">
// //                     <span className="ke-list-num">{i + 1}</span>
// //                     <div className="ke-list-body">
// //                       <a href="#" className="ke-list-link">{item.text}</a>
// //                       <div className="ke-list-meta">
// //                         ({item.date}) · <span className="ke-list-pub">{item.publication}</span>
// //                       </div>
// //                     </div>
// //                   </li>
// //                 ))}
// //               </ol>
// //             </>
// //             <>
// //               <h3 className="ke-section-title">Websites</h3>
// //               <ol className="ke-list">
// //                 {websites.map((item, i) => (
// //                   <li key={i} className="ke-list-item">
// //                     <span className="ke-list-num">{i + 1}</span>
// //                     <div className="ke-list-body">
// //                       <a href="#" className="ke-site-name">{item.name}</a>
// //                       <p className="ke-site-desc">{item.description}</p>
// //                     </div>
// //                   </li>
// //                 ))}
// //               </ol>
// //             </>
// //           </div>
// //         </main>
// //         {/* ── Category footer ── */}
// //         <div className="ke-footer-section">
// //           <div className="ke-footer-grid">
// //             {categories.map((cat, i) => (
// //               <div key={i} className="ke-cat-card" style={{ borderLeftColor: cat.border }}>
// //                 <div className="ke-cat-body">
// //                   <div className="ke-cat-title" style={{ color: cat.accent }}>
// //                     {cat.title}
// //                   </div>
// //                   <ul className="ke-cat-items">
// //                     {cat.items.map((item, j) => (
// //                       <li key={j} className="ke-cat-item">{item}</li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
         
// //         </div>
// //       </div>

// //     </>
// //   );
// // }


// import { Footer } from "@/components/layout/Footer";
// import { Navbar } from "@/components/layout/Navbar";
// import { ChevronRight } from "lucide-react";

// // ─── DATA ────────────────────────────────────────────────────────────────────
// const navLinks = ["Newspaper", "Blog posts", "Websites"];
// const newspaper = [
//   {
//     text: "How can schools in poor areas attract more teachers?",
//     date: "11 March 2024",
//     publication: "Schools Week",
//   },
// ];
// const blogPosts = [
//   { text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 1)", date: "June 2022", publication: "HE Education Research Census" },
//   { text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 2)", date: "June 2022", publication: "HE Education Research Census" },
//   { text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 1)", date: "July 2022", publication: "BERA Blog (Reprint)" },
//   { text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 2)", date: "July 2022", publication: "BERA Blog (Reprint)" },
//   { text: "ECR Network Presents: Reflexivity in conducting qualitative educational research (with Muna Abuloushi, Nour Bemlakhdar, Rachel Wicaksono)", date: "Forthcoming", publication: "BERA Blog" },
//   { text: "Don't be cruel: how to write a fair peer review report (with Shannon Mason)", date: "August 2022", publication: "Times Higher Education Campus" },
//   { text: "It Takes More Than Financial Incentives: Strategies for Recruiting and Retaining Teachers in Schools (with Violeta Negrea)", date: "June 2024", publication: "HKU SCAFE Blog" },
// ];
// const websites = [
//   { name: "TESOLgraphics website", description: "An online resource with infographic summaries of secondary research in language education for practitioners and teachers." },
//   { name: "Scholarly Peers website", description: "An online space with resources, blog posts, and podcasts about journal peer review for doctoral students and early career researchers." },
//   { name: "Thesis by Publication website", description: "A collection of resources for supporting doctoral researchers to publish during their candidature." },
// ];
// const categories = [
//   {
//     title: "Journal Editing",
//     accent: "#a8c500",
//     border: "#d4e500",
//     items: ["Research in Applied Linguistics", "Review of Education", "Innovation in Language Learning and Teaching"],
//   },
//   {
//     title: "Teacher Education",
//     accent: "#d91e6e",
//     border: "#e040a0",
//     items: ["International Education and Lifelong Learning", "TESOL Graphics", "TESOL International"],
//   },
//   {
//     title: "Research",
//     accent: "#0056b3",
//     border: "#5500ff",
//     items: ["Google Scholar — 3,670 Citations, h-index 36", "ResearchCode — 2,792 R-Score, 2,885 Citations"],
//   },
//   {
//     title: "Researcher Development",
//     accent: "#00b8a9",
//     border: "#1ddc9c",
//     items: ["BERA", "What We're Doing", "Scholarly Peers Podcast", "Thesis by Publication", "Ready to Publish"],
//   },
// ];

// // ─── COMPONENT ────────────────────────────────────────────────────────────────
// export default function KnowledgeExchange() {
//   return (
//     <div className="min-h-screen bg-[#e8f2f9] text-[#1a2332] font-['Inter',system-ui,sans-serif]">
//       {/* ── Hero ── */}
//       <Navbar/>
//       <div
//         className="relative h-[600px] overflow-hidden bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/col.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent" />
//         <div className="absolute bottom-3 left-3 z-10 bg-black/30 text-white text-xs px-2 py-1 rounded">
//           Knowledge Exchange
//         </div>
//       </div>

//       {/* ── Header + Nav ── */}
//       <div className="bg-[#f9eff5] border-b border-[#e8dce6] shadow-sm">
//         <div className="max-w-[960px] mx-auto px-8 flex items-stretch justify-between">
//           <div className="py-7 flex-shrink-0">
//             <h2 className="font-['Merriweather',Georgia,serif] text-2xl font-bold leading-tight text-[#004b7a] tracking-tight">
//               Knowledge<br />Exchange
//             </h2>
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
//       <main className="max-w-[960px] mx-auto px-8 py-10">
//         <div className="bg-white border border-[#d0d8e0] p-12 shadow-sm">
//           {/* Newspaper */}
//           <h3 className="font-['Inter',Georgia,serif] text-lg font-bold text-[#004b7a] mb-6">
//             Newspaper
//           </h3>
//           <ol className="list-none mb-8">
//             {newspaper.map((item, i) => (
//               <li key={i} className="flex gap-3.5 py-3 border-b-0">
//                 <span className="flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center text-sm font-semibold text-[#004b7a]">
//                   {i + 1}
//                 </span>
//                 <div className="flex-1">
//                   <a href="#" className="text-sm font-semibold text-[#0088cc] hover:underline inline">
//                     {item.text}
//                   </a>
//                   <div className="text-xs text-[#7a8fa8] mt-1">
//                     ({item.date}) · <span className="font-semibold text-[#5a6e88]">{item.publication}</span>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ol>

//           {/* Blog posts */}
//           <h3 className="font-['Inter',Georgia,serif] text-lg font-bold text-[#004b7a] mb-6">
//             Blog posts
//           </h3>
//           <ol className="list-none mb-8">
//             {blogPosts.map((item, i) => (
//               <li key={i} className="flex gap-3.5 py-3 border-b-0">
//                 <span className="flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center text-sm font-semibold text-[#004b7a]">
//                   {i + 1}
//                 </span>
//                 <div className="flex-1">
//                   <a href="#" className="text-sm font-semibold text-[#0088cc] hover:underline inline">
//                     {item.text}
//                   </a>
//                   <div className="text-xs text-[#7a8fa8] mt-1">
//                     ({item.date}) · <span className="font-semibold text-[#5a6e88]">{item.publication}</span>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ol>

//           {/* Websites */}
//           <h3 className="font-['Inter',Georgia,serif] text-lg font-bold text-[#004b7a] mb-6">
//             Websites
//           </h3>
//           <ol className="list-none">
//             {websites.map((item, i) => (
//               <li key={i} className="flex gap-3.5 py-3 border-b-0">
//                 <span className="flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center text-sm font-semibold text-[#004b7a]">
//                   {i + 1}
//                 </span>
//                 <div className="flex-1">
//                   <a href="#" className="text-sm font-semibold text-[#0088cc] hover:underline">
//                     {item.name}
//                   </a>
//                   <p className="text-sm text-[#5a6a7e] leading-relaxed mt-1">{item.description}</p>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </main>

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
//                 <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: cat.accent }}>
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
//       <Footer/>
//     </div>
//   );
// }

import { ChevronRight } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const navLinks = ["Newspaper", "Blog posts", "Websites"];

const newspaper = [
  {
    text: "How can schools in poor areas attract more teachers?",
    date: "11 March 2024",
    publication: "Schools Week",
  },
];

const blogPosts = [
  {
    text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 1)",
    date: "June 2022",
    publication: "HE Education Research Census",
  },
  {
    text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 2)",
    date: "June 2022",
    publication: "HE Education Research Census",
  },
  {
    text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 1)",
    date: "July 2022",
    publication: "BERA Blog (Reprint)",
  },
  {
    text: "Supporting doctoral students and early career researchers in journal peer review in educational research: Issues and suggestions (Part 2)",
    date: "July 2022",
    publication: "BERA Blog (Reprint)",
  },
  {
    text: "ECR Network Presents: Reflexivity in conducting qualitative educational research (with Muna Abuloushi, Nour Bemlakhdar, Rachel Wicaksono)",
    date: "Forthcoming",
    publication: "BERA Blog",
  },
  {
    text: "Don't be cruel: how to write a fair peer review report (with Shannon Mason)",
    date: "August 2022",
    publication: "Times Higher Education Campus",
  },
  {
    text: "It Takes More Than Financial Incentives: Strategies for Recruiting and Retaining Teachers in Schools (with Violeta Negrea)",
    date: "June 2024",
    publication: "HKU SCAFE Blog",
  },
];

const websites = [
  {
    name: "TESOLgraphics website",
    description:
      "An online resource with infographic summaries of secondary research in language education for practitioners and teachers.",
  },
  {
    name: "Scholarly Peers website",
    description:
      "An online space with resources, blog posts, and podcasts about journal peer review for doctoral students and early career researchers.",
  },
  {
    name: "Thesis by Publication website",
    description:
      "A collection of resources for supporting doctoral researchers to publish during their candidature.",
  },
];

const categories = [
  {
    title: "Journal Editing",
    accent: "#a8c500",
    border: "#d4e500",
    items: [
      "Research in Applied Linguistics",
      "Review of Education",
      "Innovation in Language Learning and Teaching",
    ],
  },
  {
    title: "Teacher Education",
    accent: "#d91e6e",
    border: "#e040a0",
    items: [
      "International Education and Lifelong Learning",
      "TESOL Graphics",
      "TESOL International",
    ],
  },
  {
    title: "Research",
    accent: "#0056b3",
    border: "#5500ff",
    items: [
      "Google Scholar — 3,670 Citations, h-index 36",
      "ResearchCode — 2,792 R-Score, 2,885 Citations",
    ],
  },
  {
    title: "Researcher Development",
    accent: "#00b8a9",
    border: "#1ddc9c",
    items: [
      "BERA",
      "What We're Doing",
      "Scholarly Peers Podcast",
      "Thesis by Publication",
      "Ready to Publish",
    ],
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function KnowledgeExchange() {
  return (
    <div id="knowledge-exchange" className="min-h-screen bg-[#e8f2f9] text-[#1a2332] font-['Inter',system-ui,sans-serif] ">
      {/* ── Hero ── */}
      <div
        className="relative h-[600px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/col.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 z-10 bg-black/30 text-white text-xs px-2 py-1 rounded">
          Knowledge Exchange
        </div>
      </div>

      {/* ── Header + Nav ── */}
      <div className="bg-[#f9eff5] border-b border-[#e8dce6] shadow-sm">
        <div className="max-w-[960px] mx-auto px-8 flex items-stretch justify-between">
          <div className="py-7 flex-shrink-0">
            <h2 className="font-['Merriweather',Georgia,serif] text-2xl font-bold leading-tight text-[#004b7a] tracking-tight">
              Knowledge<br />Exchange
            </h2>
          </div>
          <nav className="flex flex-col items-start gap-2 border-l-[3px] border-[#d91e6e] pl-4 justify-center">
            {navLinks.map((link) => (
              <button
                key={link}
                className="flex items-center gap-2 bg-none border-none cursor-pointer font-['Inter',sans-serif] text-sm font-semibold text-[#004b7a] hover:text-[#0070a0] transition-colors whitespace-nowrap p-0"
              >
                {link}
                <ChevronRight size={14} className="opacity-80" />
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Main content ── */}
      <main className="max-w-[960px] mx-auto px-8 py-10">
        <div className="bg-white border border-[#d0d8e0] p-12 shadow-sm">
          {/* Newspaper */}
          <h3 className="font-['Inter',Georgia,serif] text-lg font-bold text-[#004b7a] mb-6">
            Newspaper
          </h3>
          <ol className="list-none mb-8">
            {newspaper.map((item, i) => (
              <li key={i} className="flex gap-3.5 py-3 border-b-0">
                <span className="flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center text-sm font-semibold text-[#004b7a]">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <a
                    href="#"
                    className="text-sm font-semibold text-[#0088cc] hover:underline inline"
                  >
                    {item.text}
                  </a>
                  <div className="text-xs text-[#7a8fa8] mt-1">
                    ({item.date}) ·{" "}
                    <span className="font-semibold text-[#5a6e88]">
                      {item.publication}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Blog posts */}
          <h3 className="font-['Inter',Georgia,serif] text-lg font-bold text-[#004b7a] mb-6">
            Blog posts
          </h3>
          <ol className="list-none mb-8">
            {blogPosts.map((item, i) => (
              <li key={i} className="flex gap-3.5 py-3 border-b-0">
                <span className="flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center text-sm font-semibold text-[#004b7a]">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <a
                    href="#"
                    className="text-sm font-semibold text-[#0088cc] hover:underline inline"
                  >
                    {item.text}
                  </a>
                  <div className="text-xs text-[#7a8fa8] mt-1">
                    ({item.date}) ·{" "}
                    <span className="font-semibold text-[#5a6e88]">
                      {item.publication}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Websites */}
          <h3 className="font-['Inter',Georgia,serif] text-lg font-bold text-[#004b7a] mb-6">
            Websites
          </h3>
          <ol className="list-none">
            {websites.map((item, i) => (
              <li key={i} className="flex gap-3.5 py-3 border-b-0">
                <span className="flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center text-sm font-semibold text-[#004b7a]">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <a
                    href="#"
                    className="text-sm font-semibold text-[#0088cc] hover:underline"
                  >
                    {item.name}
                  </a>
                  <p className="text-sm text-[#5a6a7e] leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </main>

      {/* ── Category footer ── */}
      <div className="bg-[#1a3a5a]">
        <div className="max-w-[960px] mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white overflow-hidden shadow-md border-l-4"
              style={{ borderLeftColor: cat.border }}
            >
              <div className="p-5">
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: cat.accent }}
                >
                  {cat.title}
                </div>
                <ul className="list-none">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-xs text-[#4a5a6e] py-1.5 border-b-0">
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
  );
}