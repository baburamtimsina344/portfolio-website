// import type { NewsItem } from "@/types";

// export const NEWS_ITEMS: NewsItem[] = [
//   {
//     id: "news-1",
//     title: "Keynote Address at International Conference on Sustainable Business",
//     excerpt:
//       "Dr. Timsina delivered a keynote presentation on sustainable entrepreneurship and SME development in South Asian economies at the International Conference on Sustainable Business, Kathmandu.",
//     date: "2025-11-15",
//     category: "conference",
//     featured: true,
//   },
//   {
//     id: "news-2",
//     title: "Research Paper Accepted in Top-Tier Management Journal",
//     excerpt:
//       "A collaborative research paper on innovation ecosystems and SME performance has been accepted for publication in a leading international management journal.",
//     date: "2025-09-20",
//     category: "research",
//     featured: true,
//   },
//   {
//     id: "news-3",
//     title: "Workshop on Research Methodology for Graduate Students",
//     excerpt:
//       "Conducted a comprehensive two-day workshop on quantitative and qualitative research methodologies for Master's and Ph.D. students at Tribhuvan University.",
//     date: "2025-08-10",
//     category: "workshop",
//   },
//   {
//     id: "news-4",
//     title: "Excellence in Teaching Award 2025",
//     excerpt:
//       "Recognized with the School of Management Excellence in Teaching Award for outstanding contributions to student learning and academic mentorship.",
//     date: "2025-07-01",
//     category: "award",
//   },
//   {
//     id: "news-5",
//     title: "Policy Dialogue on Entrepreneurship Ecosystem in Nepal",
//     excerpt:
//       "Participated as an expert panelist in a national policy dialogue organized by the Ministry of Industry, Commerce and Supplies on strengthening entrepreneurship ecosystems.",
//     date: "2025-05-22",
//     category: "event",
//   },
//   {
//     id: "news-6",
//     title: "International Research Collaboration with UK University",
//     excerpt:
//       "Established a research collaboration with a leading UK university to study cross-border entrepreneurship and sustainable supply chain management.",
//     date: "2025-03-18",
//     category: "research",
//   },
//   {
//     id: "news-7",
//     title: "Guest Lecture Series on Digital Transformation",
//     excerpt:
//       "Delivered a guest lecture series on digital transformation strategies for SMEs at the Annual Business Education Summit.",
//     date: "2025-01-30",
//     category: "conference",
//   },
//   {
//     id: "news-8",
//     title: "Community Engagement Program Launch",
//     excerpt:
//       "Launched a community engagement program connecting business students with local entrepreneurs for mentorship and capacity building.",
//     date: "2024-12-05",
//     category: "event",
//   },
//   {
//     id: "news-9",
//     title: "Best Paper Award at National Management Conference",
//     excerpt:
//       "Received the Best Paper Award for research on organizational resilience and adaptive strategies during economic transitions.",
//     date: "2024-10-12",
//     category: "award",
//   },
// ];

// export const NEWS_CATEGORY_LABELS: Record<NewsItem["category"], string> = {
//   conference: "Conference",
//   workshop: "Workshop",
//   research: "Research Update",
//   event: "Academic Event",
//   award: "Award",
// };

import type { NewsItem } from "@/types";

export const NEWS_ITEMS: NewsItem[] = [
  // ─── Core Research Areas ──────────────────────────────────────────────
  {
    id: "research-1",
    title: "Higher Education and Educational Leadership",
    excerpt:
      "Exploring the dynamics of leadership in higher education institutions, focusing on institutional transformation, academic governance, and capacity building.",
    date: "",
    category: "research",
    featured: true,
  },
  {
    id: "research-2",
    title: "Higher Education Policy and Governance",
    excerpt:
      "Investigating policy frameworks, regulatory mechanisms, and governance structures that shape higher education systems in developing economies.",
    date: "",
    category: "research",
    featured: false,
  },
  {
    id: "research-3",
    title: "Organizational Behavior and Leadership",
    excerpt:
      "Research on organizational culture, employee motivation, leadership styles, and their impact on performance and innovation in public and private sectors.",
    date: "",
    category: "research",
    featured: false,
  },
  {
    id: "research-4",
    title: "Corporate Social Responsibility (CSR)",
    excerpt:
      "Examining CSR practices, stakeholder engagement, and sustainability strategies in emerging economies, with a focus on ethical business conduct.",
    date: "",
    category: "research",
    featured: false,
  },
  {
    id: "research-5",
    title: "Service Quality and Graduate Decision-Making",
    excerpt:
      "Analyzing the relationship between service quality in educational institutions and the decision‑making processes of graduate students.",
    date: "",
    category: "research",
    featured: false,
  },
  {
    id: "research-6",
    title: "Strategic Management and Organizational Development",
    excerpt:
      "Developing strategic frameworks for organizational growth, change management, and sustainable competitive advantage in diverse contexts.",
    date: "",
    category: "research",
    featured: false,
  },
  {
    id: "research-7",
    title: "Ethics, Governance, and Emerging Economies",
    excerpt:
      "Exploring ethical challenges, governance reforms, and institutional resilience in rapidly developing economic environments.",
    date: "",
    category: "research",
    featured: false,
  },
  {
    id: "research-8",
    title: "Institutional Transformation and Academic Leadership",
    excerpt:
      "Investigating strategies for transforming academic institutions, fostering innovation, and enhancing leadership effectiveness in higher education.",
    date: "",
    category: "research",
    featured: true,
  },

  // ─── Professional Highlights ──────────────────────────────────────────
  {
    id: "prof-1",
    title: "Higher Education & Leadership Researcher",
    excerpt:
      "Dedicated researcher with a focus on higher education leadership, policy, and organizational behavior, contributing to scholarly publications and policy briefs.",
    date: "",
    category: "professional",
    featured: true,
  },
  {
    id: "prof-2",
    title: "PhD Scholar in Higher Education and Leadership Studies",
    excerpt:
      "Currently pursuing doctoral research on leadership and institutional transformation, with a strong emphasis on evidence‑based policy and practice.",
    date: "",
    category: "professional",
    featured: false,
  },
  {
    id: "prof-3",
    title: "Chair, Journal Management Committee (JMC), MSSRNPRESS.ORG",
    excerpt:
      "Leading the editorial operations and strategic development of the Journal Management Committee at MSSRNPRESS, ensuring quality and ethical standards.",
    date: "",
    category: "professional",
    featured: false,
  },
  {
    id: "prof-4",
    title: "Editorial Board Member of Multiple Peer‑Reviewed Journals",
    excerpt:
      "Serving on editorial boards of several international journals, contributing to the advancement of knowledge in education, management, and social sciences.",
    date: "",
    category: "professional",
    featured: false,
  },
  {
    id: "prof-5",
    title:
      "Author and Co‑Author of Research on Higher Education, CSR, Leadership, and Entrepreneurship",
    excerpt:
      "Published and co‑published numerous articles and book chapters on higher education, corporate social responsibility, leadership, and entrepreneurship.",
    date: "",
    category: "professional",
    featured: false,
  },
  {
    id: "prof-6",
    title: "Active International Research Collaborator and Reviewer",
    excerpt:
      "Engaged in collaborative research projects with international scholars and actively serving as a peer reviewer for renowned academic journals.",
    date: "",
    category: "professional",
    featured: false,
  },
];

export const NEWS_CATEGORY_LABELS: Record<NewsItem["category"], string> = {
  conference: "Conference",
  workshop: "Workshop",
  research: "Core Research Area",
  event: "Academic Event",
  award: "Award",
  professional: "Professional Highlight",
};
