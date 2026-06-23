import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
import { NEWS_ITEMS, NEWS_CATEGORY_LABELS } from "@/data/news";
import { formatDate } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

export function NewsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(NEWS_ITEMS.length / ITEMS_PER_PAGE);
  const paginatedItems = NEWS_ITEMS.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
  const featured = NEWS_ITEMS.filter((n) => n.featured);

  return (
    <section id="news" className="section-padding bg-muted/5 relative">
      <div className="container-wide">
        <SectionHeading
          label="News"
          title="Latest Updates"
          subtitle="Conferences, workshops, research updates, academic events, and awards."
        />

        {featured.length > 0 && (
          <div className="mb-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {featured.map((item) => (
                  <CarouselItem key={item.id} className="pl-4 md:basis-1/2">
                    <Card className="glass-card border-primary/20 hover-lift overflow-hidden group h-full">
                      <div className="h-1 gradient-primary" />
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="default">Featured</Badge>
                          <Badge variant="outline">{NEWS_CATEGORY_LABELS[item.category]}</Badge>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(item.date)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12" />
              <CarouselNext className="hidden sm:flex -right-4 lg:-right-12" />
            </Carousel>
          </div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paginatedItems.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <Card className="h-full hover-lift group border-0 glass-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{NEWS_CATEGORY_LABELS[item.category]}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-1 text-sm text-primary mt-3 hover:underline"
                    >
                      Read more <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {page + 1} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
