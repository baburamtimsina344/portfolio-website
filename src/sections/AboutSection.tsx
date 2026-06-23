import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Timeline } from "@/components/common/Timeline";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
import {
  BIOGRAPHY,
  RESEARCH_INTERESTS,
  EDUCATION,
  EXPERIENCE,
} from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="container-wide">
        <SectionHeading
          label="About"
          title="Academic Profile"
          subtitle="Dedicated to advancing knowledge in management, entrepreneurship, and sustainable development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollReveal className="lg:col-span-2">
            <Card className="glass-card border-0 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Biography
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base">{BIOGRAPHY}</p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="glass-card border-0 hover-lift h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Research Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {RESEARCH_INTERESTS.map((interest) => (
                    <motion.div key={interest} variants={staggerItem}>
                      <Badge variant="accent" className="text-xs py-1 px-3">
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-12" delay={0.1}>
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex">
              <TabsTrigger value="experience" className="gap-2">
                <Briefcase className="h-4 w-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="gap-2">
                <GraduationCap className="h-4 w-4" />
                Education
              </TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="mt-8">
              <Card className="glass-card border-0">
                <CardContent className="pt-6">
                  <Timeline items={EXPERIENCE} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education" className="mt-8">
              <Card className="glass-card border-0">
                <CardContent className="pt-6">
                  <Timeline items={EDUCATION} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
}
