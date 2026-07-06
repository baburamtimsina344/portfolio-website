

import type { NavItem, SocialLink, Stat } from "@/types";

export const SITE_CONFIG = {
  name: "Baburam Timsina",
  title: "Academic Researcher | Educator | Scholar",
  description:
    "Baburam Timsina is an academic researcher, educator, and scholar specializing in management, entrepreneurship, and sustainable development at Tribhuvan University, Nepal.",
  url: "https://baburamtimsina.edu.np",
  ogImage: "/og-image.jpg",
  emails: ["brtimsina05@gmail.com", "baburam.timsina@som.tu.edu.np"],
  // institution: "School of Management, Tribhuvan University",
  // location: "Kathmandu, Nepal",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "news", label: "Research" }, //pahila news page ho yo
  { id: "publications", label: "Publications" },
  // {
  //   id: "knowledge-exchange",
  //   label: "Knowledge Exchange",
  //   path: "/knowledge-exchange",   // ✅ Added this line
  // },
  { id: "teaching", 
    label: "Teaching",
    path:"/teaching"

   },
  { id: "editorial-roles", 
    label: "Editorial & Academic Service ",
    path:"/editorial-roles"
   },
   { id: "projects", 
    label: "Projects ",
    path:"/projects"
   },
   { id: "awards&certifications ", 
    label: "Awards & Certifications  ",
    path:"/awards&certifications"
   },
   { id: "cv", 
    label: "CV",
    path:"/cv"
   },
  // { id: "leadership", 
  //   label: "External / Leadership Roles",
  // path:"/leadershipSection" },
  { id: "contact",
    label: "Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "ResearchGate",
    url: "https://www.researchgate.net/profile/Baburam-Timsina-3",
    icon: "researchgate",
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ",
    icon: "scholar",
  },
  {
    name: "ORCID",
    url: "https://orcid.org/0009-0001-9593-4222", // TODO: replace with actual ORCID iD
    icon: "orcid",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/babusri.timsina", // TODO: replace with actual profile URL
    icon: "facebook",
  },
  {
    name: "Email",
    url: "mailto:brtimsina05@gmail.com",
    icon: "email",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/baburam-timsina-9a0b169b/",
    icon: "linkedin",
  },
];
export const RESEARCH_STATS: Stat[] = [
  { label: "Publications", value: "45+" },
  { label: "Citations", value: "850+" },
  { label: "H-Index", value: "14" },
  { label: "Research Projects", value: "12+" },
];

export const GOOGLE_SCHOLAR_URL =
  "https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ";

export const BIOGRAPHY = `Dr. Baburam Timsina is a distinguished academic researcher, educator, and scholar at the School of Management, Tribhuvan University, Nepal. With extensive expertise in management sciences, entrepreneurship, sustainable development, and organizational behavior, he has contributed significantly to advancing knowledge in business education and research in South Asia.

His scholarly work spans empirical research in small and medium enterprises, innovation ecosystems, sustainable business practices, and policy-oriented studies that bridge academia with real-world impact. Dr. Timsina is committed to fostering evidence-based decision-making among policymakers, industry leaders, and the next generation of business professionals.`;

export const RESEARCH_INTERESTS = [
  "Entrepreneurship & SME Development",
  "Sustainable Business Practices",
  "Innovation & Technology Management",
  "Organizational Behavior",
  "Policy Research & Knowledge Translation",
  "Higher Education Management",
  "Research Methodology",
  "Community-Based Participatory Research",
];

export const EDUCATION: import("@/types").TimelineItem[] = [
  {
    id: "phd",
    year: "2018",
    title: "Ph.D. in Management",
    organization: "Tribhuvan University, Nepal",
    description:
      "Dissertation on entrepreneurship and sustainable business development in emerging economies.",
  },
  {
    id: "masters",
    year: "2012",
    title: "Master of Business Administration (MBA)",
    organization: "Tribhuvan University, Nepal",
    description:
      "Specialization in Strategic Management and Organizational Development.",
  },
  {
    id: "bachelors",
    year: "2008",
    title: "Bachelor of Business Studies (BBS)",
    organization: "Tribhuvan University, Nepal",
    description:
      "Foundation in business administration, economics, and accounting.",
  },
];

export const EXPERIENCE: import("@/types").TimelineItem[] = [
  {
    id: "exp1",
    year: "2020 – Present",
    title: "Associate Professor",
    organization: "School of Management, Tribhuvan University",
    description:
      "Leading research initiatives, supervising graduate students, and teaching advanced management courses.",
  },
  {
    id: "exp2",
    year: "2015 – 2020",
    title: "Assistant Professor",
    organization: "School of Management, Tribhuvan University",
    description:
      "Conducted research on entrepreneurship and SME development; published in peer-reviewed journals.",
  },
  {
    id: "exp3",
    year: "2012 – 2015",
    title: "Lecturer",
    organization: "School of Management, Tribhuvan University",
    description:
      "Taught undergraduate and graduate courses in management and research methodology.",
  },
  {
    id: "exp4",
    year: "2010 – 2012",
    title: "Research Associate",
    organization: "Centre for Economic Development and Administration (CEDA)",
    description:
      "Contributed to policy research projects on economic development and business environment.",
  },
];

export const TEACHING_PHILOSOPHY = `I believe education should transform learners into critical thinkers, ethical leaders, and responsible citizens. My teaching philosophy centers on experiential learning, research-informed pedagogy, and fostering intellectual curiosity. I strive to create inclusive classroom environments where students engage with real-world business challenges and develop the analytical skills needed for scholarly and professional excellence.`;

export const MENTORSHIP = [
  "Supervised 15+ Master's thesis projects in management and entrepreneurship",
  "Mentored early-career researchers in academic writing and publication",
  "Guided doctoral candidates in research methodology and data analysis",
  "Facilitated student research presentations at national conferences",
];

export const CURRICULUM = [
  "Redesigned MBA entrepreneurship course with case-based learning modules",
  "Developed research methodology curriculum for graduate programs",
  "Integrated sustainability frameworks into core management courses",
  "Created online learning resources for hybrid teaching delivery",
];