"use client"

import { motion } from "framer-motion"
import { BookOpen, FileText, Users } from "lucide-react"

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

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F7A5A] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0F7A5A]" />
            Books &amp; Research Preprints
          </div>
          <h2 className="text-4xl font-bold text-[#0B5E4A]">
            Research Projects
          </h2>
        </motion.div>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const { icon: TypeIcon, label } = typeStyles[project.type]
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(15,122,90,0.14)" }}
                className="group flex flex-col rounded-2xl border border-[#0F7A5A]/10 bg-[#0F7A5A]/5 p-7 transition-colors hover:border-[#0F7A5A]/30"
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
                <h3 className="text-lg font-bold text-[#0B5E4A] leading-snug mb-3">
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
                      className="rounded-full bg-white text-[#0F7A5A] text-xs font-semibold px-3 py-1 border border-[#0F7A5A]/20"
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
        </div>
      </div>
    </section>
  )
}