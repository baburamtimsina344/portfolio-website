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
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn("mt-6 h-1 w-16 rounded-full gradient-primary", align === "center" && "mx-auto")} />
    </ScrollReveal>
  );
}
