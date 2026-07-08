import { ScrollReveal } from "@/components/common/ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ label, title, subtitle, className, align = "left" }: SectionHeadingProps) {
  return (
    <ScrollReveal className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      {label && (
        <span className="type-kicker inline-block text-primary mb-3">
          {label}
        </span>
      )}
      <h2 className="type-section-title text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="type-body mt-4 text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={cn("mt-6 h-1 w-16 rounded-full gradient-primary", align === "center" && "mx-auto")} />
    </ScrollReveal>
  );
}
