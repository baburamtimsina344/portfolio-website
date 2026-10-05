import type { NavItem, SocialLink, Stat } from "@/types";

export const SITE_CONFIG = {
  name: "Baburam Timsin",
  title:
    "Baburam Timsina | Higher Education & Leadership Researcher Higher Education & Leadership Researcher | Institutional Development & Organizational Scholarship in Emerging Economies | JMC Chair – MSSRNPRESS.ORG |  Editorial Member (JINA | JHROS | JSMS | JISS )",
  description:
    "Advancing scholarship in higher education, educational leadership, and institutional transformation through research, teaching, and academic service.",
  url: "https://baburamtimsina.edu.np",
  ogImage: "/og-image.jpg",
  emails: ["brtimsina05@gmail.com", "baburam.timsina@som.tu.edu.np"],
  institution: "Tribhuvan University",
  location: "Kathmandu, Nepal",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "news", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "teaching", label: "Teaching", path: "/teaching" },
  {
    id: "editorial-roles",
    label: "Editorial & Academic Service",
    path: "/editorial-roles",
  },
  { id: "projects", label: "Projects", path: "/projects" },
  {
    id: "awards&certifications",
    label: "Awards & Certifications",
    path: "/awards&certifications",
  },
  //  { id: "cv",
  //   label: "CV",
  //   path:"/cv"
  //  },
  //  { id: "visitorMap",
  //   label: "Visitor Map",
  //   path:"/visitorMap"
  //  },
  { id: "contact", label: "Contact" },
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

export const BIOGRAPHY = `Advancing scholarship through research, leadership, and academic service, I am committed to fostering transformative learning and evidence-based practices in higher education.

Based in Kathmandu, Nepal, I serve as Scholar and Educator at Tribhuvan University while pursuing doctoral research in higher education and leadership. My scholarly work explores the intersection of higher education, leadership, organizational behavior, governance, and corporate social responsibility, particularly within emerging economies.

My research investigates how educational institutions, governance structures, service quality, ethical practices, and leadership approaches influence organizational effectiveness and individual decision-making. Through interdisciplinary and collaborative scholarship, I seek to contribute to the development of responsive, inclusive, and sustainable educational systems.

Beyond research and teaching, I actively contribute to the academic community through editorial leadership, peer review, and scholarly networking. I currently serve as Chair of the Journal Management Committee (JMC) at MSSRNPRESS.ORG and as an editorial board member of several peer-reviewed journals.

My broader academic mission is to bridge research, policy, and practice to strengthen higher education systems and promote impactful scholarship at both national and international levels.`;

export const RESEARCH_INTERESTS = [
  "Higher Education and Educational Leadership",
  "Higher Education Policy and Governance",
  "Organizational Behavior and Leadership",
  "Corporate Social Responsibility (CSR)",
  "Service Quality and Graduate Decision-Making",
  "Strategic Management and Organizational Development",
  "Ethics, Governance, and Emerging Economies",
  "Institutional Transformation and Academic Leadership",
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

export const TEACHING_PHILOSOPHY = `I believe that education should transcend the transmission of knowledge and inspire learners to question, innovate, collaborate, and contribute meaningfully to society. My pedagogical approach integrates theoretical rigor with practical relevance, fostering critical thinking, ethical awareness, and transformative leadership among students.`;

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
