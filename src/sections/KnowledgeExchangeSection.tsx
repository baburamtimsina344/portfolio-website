import { motion } from "framer-motion";
import { Users, Landmark, Building2, Presentation, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
import { KNOWLEDGE_ITEMS, KNOWLEDGE_STATS } from "@/data/knowledge";

const typeIcons = {
  community: Users,
  policy: Landmark,
  industry: Building2,
  workshop: Presentation,
  training: GraduationCap,
};

const typeLabels = {
  community: "Community Engagement",
  policy: "Policy Impact",
  industry: "Industry Collaboration",
  workshop: "Workshop",
  training: "Training",
};

export function KnowledgeExchangeSection() {
  return (
    <section id="knowledge-exchange" className="section-padding bg-muted/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-wide relative">
        <SectionHeading
          label="Knowledge Exchange"
          title="Impact Beyond Academia"
          subtitle="Community engagement, policy impact, industry collaboration, workshops, and trainings."
        />

        <ScrollReveal className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {KNOWLEDGE_STATS.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-6 text-center hover-lift">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-6">
            {KNOWLEDGE_ITEMS.map((item, index) => {
              const Icon = typeIcons[item.type];
              return (
                <motion.div key={item.id} variants={staggerItem} className="relative md:pl-16">
                  <div className="absolute left-4 md:left-6 top-6 h-4 w-4 rounded-full gradient-primary hidden md:block ring-4 ring-primary/10" />
                  <Card className={`glass-card border-0 hover-lift ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline">{item.year}</Badge>
                        <Badge variant="secondary" className="gap-1">
                          <Icon className="h-3 w-3" />
                          {typeLabels[item.type]}
                        </Badge>
                        {item.impact && <Badge variant="success">{item.impact}</Badge>}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
