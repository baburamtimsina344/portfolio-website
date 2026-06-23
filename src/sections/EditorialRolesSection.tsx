import { motion } from "framer-motion";
import { PenLine, Eye, Users, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/common/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
import { EDITORIAL_ROLES } from "@/data/editorial";

const typeConfig = {
  editor: { label: "Editor", icon: PenLine, variant: "default" as const },
  reviewer: { label: "Reviewer", icon: Eye, variant: "secondary" as const },
  board: { label: "Board Member", icon: Users, variant: "accent" as const },
  committee: { label: "Committee", icon: Shield, variant: "outline" as const },
};

export function EditorialRolesSection() {
  return (
    <section id="editorial-roles" className="section-padding bg-muted/5">
      <div className="container-wide">
        <SectionHeading
          label="Editorial Roles"
          title="Academic Service"
          subtitle="Journal editorship, peer review, editorial board membership, and academic committee roles."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {EDITORIAL_ROLES.map((role) => {
            const config = typeConfig[role.type];
            const Icon = config.icon;
            return (
              <motion.div key={role.id} variants={staggerItem}>
                <Card className="h-full glass-card border-0 hover-lift group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{role.role}</CardTitle>
                          <p className="text-sm text-primary/80 mt-0.5">{role.journal}</p>
                        </div>
                      </div>
                      <Badge variant={config.variant}>{config.label}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-xs">{role.period}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
