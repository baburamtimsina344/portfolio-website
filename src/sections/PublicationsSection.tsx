import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Quote, Search, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PUBLICATIONS, PUBLICATION_YEARS } from "@/data/publications";
import { GOOGLE_SCHOLAR_URL } from "@/data/profile";
import type { PublicationCategory, SortOption } from "@/types";

const CATEGORY_LABELS: Record<PublicationCategory, string> = {
  all: "All",
  journal: "Journal Articles",
  conference: "Conference Papers",
  book: "Book Chapters",
  report: "Research Reports",
};

function PublicationCard({ pub, onSelect }: { pub: (typeof PUBLICATIONS)[0]; onSelect: (pub: (typeof PUBLICATIONS)[0]) => void }) {
  return (
    <Card className="glass-card border-0 hover-lift group cursor-pointer" onClick={() => onSelect(pub)}>
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="outline">{pub.year}</Badge>
          <Badge variant="secondary">{CATEGORY_LABELS[pub.category]}</Badge>
          {pub.openAccess && <Badge variant="success">Open Access</Badge>}
          {pub.citations !== undefined && (
            <Badge variant="accent" className="gap-1">
              <Quote className="h-3 w-3" />
              {pub.citations} citations
            </Badge>
          )}
        </div>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
          {pub.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2">{pub.authors}</p>
        <p className="text-sm text-primary/80 mt-1 italic">{pub.journal}</p>
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary mt-3 hover:underline"
          >
            DOI: {pub.doi} <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}

export function PublicationsSection() {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("year-desc");
  const [activeTab, setActiveTab] = useState<PublicationCategory>("all");
  const [selectedPub, setSelectedPub] = useState<(typeof PUBLICATIONS)[0] | null>(null);

  const filtered = useMemo(() => {
    let results = [...PUBLICATIONS];

    if (activeTab !== "all") {
      results = results.filter((p) => p.category === activeTab);
    }
    if (yearFilter !== "all") {
      results = results.filter((p) => p.year === Number(yearFilter));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.journal.toLowerCase().includes(q)
      );
    }

    results.sort((a, b) => {
      switch (sort) {
        case "year-asc": return a.year - b.year;
        case "citations-desc": return (b.citations ?? 0) - (a.citations ?? 0);
        case "title-asc": return a.title.localeCompare(b.title);
        default: return b.year - a.year;
      }
    });

    return results;
  }, [search, yearFilter, sort, activeTab]);

  return (
    <section id="publications" className="section-padding bg-background relative">
      <div className="container-wide">
        <SectionHeading
          label="Publications"
          title="Research Output"
          subtitle="Peer-reviewed journal articles, conference papers, book chapters, and research reports."
        />

        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search publications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
                aria-label="Search publications"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="w-[140px]" aria-label="Filter by year">
                  <Filter className="h-4 w-4 mr-1" />
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {PUBLICATION_YEARS.map((y) => (
                    <SelectItem key={y} value={String(y)}>{y}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
                <SelectTrigger className="w-[160px]" aria-label="Sort publications">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year-desc">Newest First</SelectItem>
                  <SelectItem value="year-asc">Oldest First</SelectItem>
                  <SelectItem value="citations-desc">Most Cited</SelectItem>
                  <SelectItem value="title-asc">Title A-Z</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" asChild>
                <a href={GOOGLE_SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Google Scholar
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as PublicationCategory)}>
          <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-transparent p-0 mb-8">
            {(Object.keys(CATEGORY_LABELS) as PublicationCategory[]).map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4"
              >
                {CATEGORY_LABELS[cat]}
              </TabsTrigger>
            ))}
          </TabsList>

          {(Object.keys(CATEGORY_LABELS) as PublicationCategory[]).map((cat) => (
            <TabsContent key={cat} value={cat} className="mt-0">
              {filtered.length === 0 ? (
                <p className="text-center text-muted-foreground py-12">No publications found matching your criteria.</p>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {filtered.map((pub, i) => (
                    <motion.div
                      key={pub.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <PublicationCard pub={pub} onSelect={setSelectedPub} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Showing {filtered.length} of {PUBLICATIONS.length} publications
        </p>

        <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
          <DialogContent className="max-w-2xl">
            {selectedPub && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl leading-snug">{selectedPub.title}</DialogTitle>
                  <DialogDescription>{selectedPub.authors}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-2">
                  <p className="text-sm italic text-primary/80">{selectedPub.journal}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{selectedPub.year}</Badge>
                    <Badge variant="secondary">{CATEGORY_LABELS[selectedPub.category]}</Badge>
                    {selectedPub.openAccess && <Badge variant="success">Open Access</Badge>}
                    {selectedPub.citations !== undefined && (
                      <Badge variant="accent">{selectedPub.citations} citations</Badge>
                    )}
                  </div>
                  {selectedPub.doi && (
                    <Button variant="outline" asChild>
                      <a href={`https://doi.org/${selectedPub.doi}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View on DOI
                      </a>
                    </Button>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
