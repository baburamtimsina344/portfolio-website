import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { TimelineItem } from "@/types";

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-12 md:pl-16"
          >
            <div className="absolute left-2.5 md:left-4 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
            <span className="mb-1 inline-block text-sm font-semibold text-accent">
              {item.year}
            </span>
            <h4 className="text-base sm:text-lg font-semibold text-foreground">{item.title}</h4>
            <p className="mt-0.5 text-sm font-medium text-muted-foreground">{item.organization}</p>
            {item.description && (
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
