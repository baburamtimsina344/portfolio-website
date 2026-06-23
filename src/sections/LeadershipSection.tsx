import { motion } from "framer-motion";
import { Crown, Users, Lightbulb, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/common/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
import { LEADERSHIP_ROLES } from "@/data/leadership";

const typeConfig = {
  leadership: { label: "Leadership", icon: Crown, color: "text-primary" },
  membership: { label: "Membership", icon: Users, color: "text-secondary" },
  advisory: { label: "Advisory", icon: Lightbulb, color: "text-accent" },
  institutional: { label: "Institutional", icon: Building, color: "text-primary" },
};

export function LeadershipSection() {
  return (
    <section id="leadership" className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeading
          label="Leadership"
          title="External & Leadership Roles"
          subtitle="Leadership positions, professional memberships, advisory roles, and institutional responsibilities."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {LEADERSHIP_ROLES.map((role) => {
              const config = typeConfig[role.type];
              const Icon = config.icon;
              return (
                <motion.div key={role.id} variants={staggerItem} className="relative pl-12 md:pl-16">
                  <div className="absolute left-2.5 md:left-4 top-6 h-3 w-3 rounded-full border-2 border-primary bg-background ring-4 ring-primary/10" />
                  <Card className="glass-card border-0 hover-lift">
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline">{role.period}</Badge>
                        <Badge variant="secondary" className="gap-1">
                          <Icon className={`h-3 w-3 ${config.color}`} />
                          {config.label}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{role.title}</CardTitle>
                      <p className="text-sm font-medium text-primary/80">{role.organization}</p>
                    </CardHeader>
                    {role.description && (
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
