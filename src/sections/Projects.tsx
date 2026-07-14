// "use client"

// import { motion } from "framer-motion"
// import { BookOpen, FileText, Users } from "lucide-react"

// interface Project {
//   id: number
//   title: string
//   type: "Book" | "Preprint"
//   year: string
//   collaborators: string[]
//   description: string
//   focusAreas: string[]
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Entrepreneurship and Business Resource Mapping",
//     type: "Book",
//     year: "2025",
//     collaborators: ["B. Lingden", "P. Koirala", "D. Bhattarai"],
//     description:
//       "A collaborative study mapping entrepreneurial resources and support structures, examining how access to capital, knowledge, and networks shapes new-venture growth.",
//     focusAreas: ["Entrepreneurship", "Business Development"],
//   },
//   {
//     id: 2,
//     title: "Human Resource Management: Creating the Future Industry-Ready Workforce",
//     type: "Preprint",
//     year: "2025",
//     collaborators: ["P. Koirala", "D. Bhattarai", "U. Bhattarai"],
//     description:
//       "An examination of how human resource practices can be aligned with evolving industry demands to prepare a workforce ready for future organizational needs.",
//     focusAreas: ["Human Resource Management", "Workforce Development"],
//   },
//   {
//     id: 3,
//     title: "Contemporary Policy Frameworks and Future Directions in Nepal's Higher Education",
//     type: "Book",
//     year: "2025",
//     collaborators: ["U. Bhattarai", "P. Koirala"],
//     description:
//       "A policy-focused study analyzing current governance frameworks in Nepal's higher education system and proposing directions for institutional reform.",
//     focusAreas: ["Higher Education Policy", "Governance"],
//   },
//   {
//     id: 4,
//     title: "Unlocking or Obstructing Growth: Regional Trade Agreements and Nepal's Business Environment",
//     type: "Book",
//     year: "2025",
//     collaborators: ["Ujjwal Bhattarai", "P. Koirala"],
//     description:
//       "A critical assessment of how regional trade agreements influence Nepal's business environment, weighing their role as drivers of, or barriers to, growth.",
//     focusAreas: ["Trade Policy", "Business Environment"],
//   },
// ]

// const typeStyles: Record<Project["type"], { icon: typeof BookOpen; label: string }> = {
//   Book: { icon: BookOpen, label: "Book" },
//   Preprint: { icon: FileText, label: "Preprint" },
// }

// export default function Projects() {
//   return (
//     <section id="projects" className="py-32 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* ── Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F7A5A] mb-4">
//             <span className="w-2 h-2 rounded-full bg-[#0F7A5A]" />
//             Books &amp; Research Preprints
//           </div>
//           <h2 className="text-4xl font-bold text-[#0B5E4A]">
//             Research Projects
//           </h2>
//         </motion.div>

//         {/* ── Project Grid ── */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((project, i) => {
//             const { icon: TypeIcon, label } = typeStyles[project.type]
//             return (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
//                 whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(15,122,90,0.14)" }}
//                 className="group flex flex-col rounded-2xl border border-[#0F7A5A]/10 bg-[#0F7A5A]/5 p-7 transition-colors hover:border-[#0F7A5A]/30"
//               >
//                 {/* Type badge + year */}
//                 <div className="flex items-center justify-between mb-5">
//                   <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B5E4A] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#A8E6CF]">
//                     <TypeIcon className="h-3.5 w-3.5" strokeWidth={2} />
//                     {label}
//                   </span>
//                   <span className="text-xs font-semibold text-[#4A5A6A]">{project.year}</span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-bold text-[#0B5E4A] leading-snug mb-3">
//                   {project.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-sm text-[#4A5A6A] leading-relaxed mb-5">
//                   {project.description}
//                 </p>

//                 {/* Focus areas */}
//                 <div className="flex flex-wrap gap-2 mb-5">
//                   {project.focusAreas.map((area) => (
//                     <span
//                       key={area}
//                       className="rounded-full bg-white text-[#0F7A5A] text-xs font-semibold px-3 py-1 border border-[#0F7A5A]/20"
//                     >
//                       {area}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Collaborators */}
//                 <div className="mt-auto flex items-start gap-2 pt-4 border-t border-[#0F7A5A]/10">
//                   <Users className="h-4 w-4 text-[#0F7A5A] mt-0.5 flex-shrink-0" strokeWidth={2} />
//                   <p className="text-xs text-[#4A5A6A]">
//                     <span className="font-semibold text-[#0B5E4A]">Co-authors: </span>
//                     {project.collaborators.join(", ")}
//                   </p>
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, FileText, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

interface Project {
  id: number
  title: string
  type: "Book" | "Preprint"
  year: string
  collaborators: string[]
  description: string
  focusAreas: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Entrepreneurship and Business Resource Mapping",
    type: "Book",
    year: "2025",
    collaborators: ["B. Lingden", "P. Koirala", "D. Bhattarai"],
    description:
      "A collaborative study mapping entrepreneurial resources and support structures, examining how access to capital, knowledge, and networks shapes new-venture growth.",
    focusAreas: ["Entrepreneurship", "Business Development"],
  },
  {
    id: 2,
    title: "Human Resource Management: Creating the Future Industry-Ready Workforce",
    type: "Preprint",
    year: "2025",
    collaborators: ["P. Koirala", "D. Bhattarai", "U. Bhattarai"],
    description:
      "An examination of how human resource practices can be aligned with evolving industry demands to prepare a workforce ready for future organizational needs.",
    focusAreas: ["Human Resource Management", "Workforce Development"],
  },
  {
    id: 3,
    title: "Contemporary Policy Frameworks and Future Directions in Nepal's Higher Education",
    type: "Book",
    year: "2025",
    collaborators: ["U. Bhattarai", "P. Koirala"],
    description:
      "A policy-focused study analyzing current governance frameworks in Nepal's higher education system and proposing directions for institutional reform.",
    focusAreas: ["Higher Education Policy", "Governance"],
  },
  {
    id: 4,
    title: "Unlocking or Obstructing Growth: Regional Trade Agreements and Nepal's Business Environment",
    type: "Book",
    year: "2025",
    collaborators: ["Ujjwal Bhattarai", "P. Koirala"],
    description:
      "A critical assessment of how regional trade agreements influence Nepal's business environment, weighing their role as drivers of, or barriers to, growth.",
    focusAreas: ["Trade Policy", "Business Environment"],
  },
]

const typeStyles: Record<Project["type"], { icon: typeof BookOpen; label: string }> = {
  Book: { icon: BookOpen, label: "Book" },
  Preprint: { icon: FileText, label: "Preprint" },
}

// ─── BACKGROUND CAROUSEL ────────────────────────────────────────────────────
function BackgroundCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1)
    setIndex((next + 2) % 2)
  }, [index])

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setIndex((prev) => (prev + 1) % 2)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const backgroundImages = [
    { src: "/images/project1.jpeg", alt: "Research project background 1" },
    { src: "/images/project2.jpeg", alt: "Research project background 2" },
  ]

  const imageVariants = {
    enter: (dir: number) => ({ 
      opacity: 0, 
      scale: 1.08,
      x: dir > 0 ? 40 : -40 
    }),
    center: { 
      opacity: 1, 
      scale: 1, 
      x: 0 
    },
    exit: (dir: number) => ({ 
      opacity: 0, 
      scale: 1.02,
      x: dir > 0 ? -40 : 40 
    }),
  }

  return (
    <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
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
          <img
            src={backgroundImages[index].src}
            alt={backgroundImages[index].alt}
            className="w-full h-full object-contain object-center bg-[#0B2545]"
          />
          {/* Gradient overlay matching teaching component */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/80 via-[#0F7A5A]/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay on background */}
      <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-16 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#A8E6CF] mb-3">
              Books &amp; Research Preprints
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Research <br />
              <span className="text-[#00B894]">Projects</span>
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Exploring critical issues in entrepreneurship, policy, and organizational development
            </p>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        aria-label="Previous background"
        onClick={() => goTo(index - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        aria-label="Next background"
        onClick={() => goTo(index + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {[0, 1].map((i) => (
          <button
            key={i}
            aria-label={`Go to background ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-[#00B894]" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-3 left-3 z-10 bg-black/40 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
        Research
      </div>
    </div>
  )
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────
export default function Projects() {
  // ── Animation variants matching teaching component ──
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="min-h-screen bg-[#F8F9FA] text-[#0B2545] font-sans">
      {/* Background Carousel - Full width at top */}
      <BackgroundCarousel />

      {/* Project Information - Below the carousel */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Section header with teaching component styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-[#0F7A5A] rounded-full" />
            <div>
              <h2 className="text-2xl font-bold text-[#0B2545]">
                Publications &amp; <span className="text-[#0F7A5A]">Preprints</span>
              </h2>
              <p className="text-sm text-[#4A5A6A]/70">Featured Research</p>
            </div>
          </div>
        </motion.div>

        {/* ── Project Grid with teaching component styling ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => {
            const { icon: TypeIcon, label } = typeStyles[project.type]
            return (
              <motion.div
                key={project.id}
                variants={listItemVariants}
                whileHover={{ 
                  y: -4, 
                  boxShadow: "0 16px 40px rgba(15,122,90,0.14)" 
                }}
                className="group flex flex-col rounded-2xl border border-[#0F7A5A]/10 bg-white/80 backdrop-blur-sm p-7 transition-all hover:border-[#0F7A5A]/30 hover:shadow-lg"
              >
                {/* Type badge + year */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B5E4A] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#A8E6CF]">
                    <TypeIcon className="h-3.5 w-3.5" strokeWidth={2} />
                    {label}
                  </span>
                  <span className="text-xs font-semibold text-[#4A5A6A]">{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0B5E4A] leading-snug mb-3 group-hover:text-[#0B2545] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4A5A6A] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Focus areas */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-[#0F7A5A]/10 text-[#0F7A5A] text-xs font-semibold px-3 py-1 border border-[#0F7A5A]/20"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* Collaborators */}
                <div className="mt-auto flex items-start gap-2 pt-4 border-t border-[#0F7A5A]/10">
                  <Users className="h-4 w-4 text-[#0F7A5A] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <p className="text-xs text-[#4A5A6A]">
                    <span className="font-semibold text-[#0B5E4A]">Co-authors: </span>
                    {project.collaborators.join(", ")}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}