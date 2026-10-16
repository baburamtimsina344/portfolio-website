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
    <ScrollReveal className={cn("mb-6 md:mb-10", align === "center" && "text-center", className)}>
      {label && (
        <span className="type-kicker mb-2 inline-block">
          {label}
        </span>
      )}
      <h2 className="type-section-title text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("type-body mt-3 max-w-2xl text-muted-foreground", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
      <div className={cn("mt-4 h-0.5 w-10 rounded-full gradient-primary", align === "center" && "mx-auto")} />
    </ScrollReveal>
  );
}
