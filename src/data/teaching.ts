import type { Course } from "@/types";

export const COURSES: Course[] = [
  {
    id: "course-1",
    code: "MGT 601",
    title: "Advanced Research Methodology",
    level: "Ph.D. / M.Phil.",
    institution: "School of Management, TU",
    description:
      "Advanced course covering quantitative and qualitative research designs, statistical analysis, and academic writing for doctoral students.",
    semesters: ["Spring 2025", "Fall 2024", "Spring 2024"],
  },
  {
    id: "course-2",
    code: "MGT 502",
    title: "Entrepreneurship and Innovation",
    level: "MBA",
    institution: "School of Management, TU",
    description:
      "Explores entrepreneurial mindset, opportunity recognition, business model innovation, and startup ecosystem dynamics.",
    semesters: ["Fall 2025", "Spring 2025", "Fall 2024"],
  },
  {
    id: "course-3",
    code: "MGT 401",
    title: "Organizational Behavior",
    level: "MBA / MBS",
    institution: "School of Management, TU",
    description:
      "Examines individual and group behavior in organizations, leadership, motivation, and organizational culture.",
    semesters: ["Spring 2025", "Fall 2024"],
  },
  {
    id: "course-4",
    code: "MGT 301",
    title: "Strategic Management",
    level: "MBA",
    institution: "School of Management, TU",
    description:
      "Covers strategic analysis, competitive positioning, corporate strategy, and strategic implementation frameworks.",
    semesters: ["Fall 2025", "Spring 2024"],
  },
  {
    id: "course-5",
    code: "MGT 201",
    title: "Business Research Methods",
    level: "MBS",
    institution: "School of Management, TU",
    description:
      "Introduces research design, data collection methods, basic statistical analysis, and report writing for graduate students.",
    semesters: ["Spring 2025", "Fall 2023"],
  },
  {
    id: "course-6",
    code: "MGT 101",
    title: "Principles of Management",
    level: "BBS / BBA",
    institution: "School of Management, TU",
    description:
      "Foundation course on management principles, planning, organizing, leading, and controlling in business organizations.",
    semesters: ["Fall 2025", "Spring 2025", "Fall 2024"],
  },
];
