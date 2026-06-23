import type { NewsItem } from "@/types";

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-1",
    title: "Keynote Address at International Conference on Sustainable Business",
    excerpt:
      "Dr. Timsina delivered a keynote presentation on sustainable entrepreneurship and SME development in South Asian economies at the International Conference on Sustainable Business, Kathmandu.",
    date: "2025-11-15",
    category: "conference",
    featured: true,
  },
  {
    id: "news-2",
    title: "Research Paper Accepted in Top-Tier Management Journal",
    excerpt:
      "A collaborative research paper on innovation ecosystems and SME performance has been accepted for publication in a leading international management journal.",
    date: "2025-09-20",
    category: "research",
    featured: true,
  },
  {
    id: "news-3",
    title: "Workshop on Research Methodology for Graduate Students",
    excerpt:
      "Conducted a comprehensive two-day workshop on quantitative and qualitative research methodologies for Master's and Ph.D. students at Tribhuvan University.",
    date: "2025-08-10",
    category: "workshop",
  },
  {
    id: "news-4",
    title: "Excellence in Teaching Award 2025",
    excerpt:
      "Recognized with the School of Management Excellence in Teaching Award for outstanding contributions to student learning and academic mentorship.",
    date: "2025-07-01",
    category: "award",
  },
  {
    id: "news-5",
    title: "Policy Dialogue on Entrepreneurship Ecosystem in Nepal",
    excerpt:
      "Participated as an expert panelist in a national policy dialogue organized by the Ministry of Industry, Commerce and Supplies on strengthening entrepreneurship ecosystems.",
    date: "2025-05-22",
    category: "event",
  },
  {
    id: "news-6",
    title: "International Research Collaboration with UK University",
    excerpt:
      "Established a research collaboration with a leading UK university to study cross-border entrepreneurship and sustainable supply chain management.",
    date: "2025-03-18",
    category: "research",
  },
  {
    id: "news-7",
    title: "Guest Lecture Series on Digital Transformation",
    excerpt:
      "Delivered a guest lecture series on digital transformation strategies for SMEs at the Annual Business Education Summit.",
    date: "2025-01-30",
    category: "conference",
  },
  {
    id: "news-8",
    title: "Community Engagement Program Launch",
    excerpt:
      "Launched a community engagement program connecting business students with local entrepreneurs for mentorship and capacity building.",
    date: "2024-12-05",
    category: "event",
  },
  {
    id: "news-9",
    title: "Best Paper Award at National Management Conference",
    excerpt:
      "Received the Best Paper Award for research on organizational resilience and adaptive strategies during economic transitions.",
    date: "2024-10-12",
    category: "award",
  },
];

export const NEWS_CATEGORY_LABELS: Record<NewsItem["category"], string> = {
  conference: "Conference",
  workshop: "Workshop",
  research: "Research Update",
  event: "Academic Event",
  award: "Award",
};
