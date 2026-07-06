

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link?: string
}

// const projects: Project[] = [
//   {
//     id: 1,
//     title: 'Research Portfolio Website',
//     description:
//       'A personal academic portfolio showcasing publications, citations, and research metrics.',
//     technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
//     link: '#',
//   },
//   {
//     id: 2,
//     title: 'AI Document Analyzer',
//     description:
//       'An AI-powered application to extract and analyze information from PDF documents.',
//     technologies: ['Next.js', 'OpenAI API', 'Python'],
//     link: '#',
//   },
//   {
//     id: 3,
//     title: 'Student Management System',
//     description:
//       'A web application for managing student records, attendance, and grades.',
//     technologies: ['React', 'Node.js', 'MongoDB'],
//     link: '#',
//   },
// ]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          My Projects
        </h2>

        {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-medium hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}