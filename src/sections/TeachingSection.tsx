import { BookOpen, Heart, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
import { COURSES } from "@/data/teaching";
import { TEACHING_PHILOSOPHY, MENTORSHIP, CURRICULUM } from "@/data/profile";
import { motion } from "framer-motion";

export function TeachingSection() {
  return (
    <section id="teaching" className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeading
          label="Teaching"
          title="Education & Mentorship"
          subtitle="Courses taught, teaching philosophy, student mentorship, and curriculum development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ScrollReveal>
            <Card className="glass-card border-0 h-full hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Teaching Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{TEACHING_PHILOSOPHY}</p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="mentorship">
                <AccordionTrigger className="text-base font-semibold">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Student Mentorship
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {MENTORSHIP.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="curriculum">
                <AccordionTrigger className="text-base font-semibold">
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    Curriculum Development
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {CURRICULUM.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Courses Taught
          </h3>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {COURSES.map((course) => (
            <motion.div key={course.id} variants={staggerItem}>
              <Card className="h-full glass-card border-0 hover-lift">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="default">{course.code}</Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <p className="text-sm text-primary/80">{course.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                  {course.semesters && (
                    <div className="flex flex-wrap gap-1.5">
                      {course.semesters.map((sem) => (
                        <Badge key={sem} variant="accent" className="text-xs">{sem}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
