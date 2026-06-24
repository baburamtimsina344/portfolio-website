
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
      <main className="max-w-240 mx-auto px-8 py-10">
        <div className="bg-white border-2 border-[#1f4567] p-12 shadow-sm">
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