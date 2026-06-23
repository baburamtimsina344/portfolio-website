// import { BookOpen, Heart, Users, FileText } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { SectionHeading } from "@/components/common/SectionHeading";
// import { ScrollReveal, staggerContainer, staggerItem } from "@/components/common/ScrollReveal";
// import { COURSES } from "@/data/teaching";
// import { TEACHING_PHILOSOPHY, MENTORSHIP, CURRICULUM } from "@/data/profile";
// import { motion } from "framer-motion";

// export function TeachingSection() {
//   return (
//     <section id="teaching" className="section-padding bg-background">
//       <div className="container-wide">
//         <SectionHeading
//           label="Teaching"
//           title="Education & Mentorship"
//           subtitle="Courses taught, teaching philosophy, student mentorship, and curriculum development."
//         />

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           <ScrollReveal>
//             <Card className="glass-card border-0 h-full hover-lift">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Heart className="h-5 w-5 text-primary" />
//                   Teaching Philosophy
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground leading-relaxed">{TEACHING_PHILOSOPHY}</p>
//               </CardContent>
//             </Card>
//           </ScrollReveal>

//           <ScrollReveal delay={0.15}>
//             <Accordion type="single" collapsible className="w-full">
//               <AccordionItem value="mentorship">
//                 <AccordionTrigger className="text-base font-semibold">
//                   <span className="flex items-center gap-2">
//                     <Users className="h-4 w-4 text-primary" />
//                     Student Mentorship
//                   </span>
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <ul className="space-y-2">
//                     {MENTORSHIP.map((item) => (
//                       <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
//                         <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="curriculum">
//                 <AccordionTrigger className="text-base font-semibold">
//                   <span className="flex items-center gap-2">
//                     <FileText className="h-4 w-4 text-primary" />
//                     Curriculum Development
//                   </span>
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <ul className="space-y-2">
//                     {CURRICULUM.map((item) => (
//                       <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
//                         <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </ScrollReveal>
//         </div>

//         <ScrollReveal>
//           <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2">
//             <BookOpen className="h-5 w-5 text-primary" />
//             Courses Taught
//           </h3>
//         </ScrollReveal>

//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         >
//           {COURSES.map((course) => (
//             <motion.div key={course.id} variants={staggerItem}>
//               <Card className="h-full glass-card border-0 hover-lift">
//                 <CardHeader>
//                   <div className="flex flex-wrap items-center gap-2 mb-2">
//                     <Badge variant="default">{course.code}</Badge>
//                     <Badge variant="outline">{course.level}</Badge>
//                   </div>
//                   <CardTitle className="text-lg">{course.title}</CardTitle>
//                   <p className="text-sm text-primary/80">{course.institution}</p>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
//                   {course.semesters && (
//                     <div className="flex flex-wrap gap-1.5">
//                       {course.semesters.map((sem) => (
//                         <Badge key={sem} variant="accent" className="text-xs">{sem}</Badge>
//                       ))}
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, GraduationCap, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COURSES } from "@/data/teaching";
import { TEACHING_PHILOSOPHY, MENTORSHIP, CURRICULUM } from "@/data/profile";

export function TeachingSection() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="teaching" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Heading */}
        <div className="mb-20 pb-6 border-b border-gray-200/80 max-w-3xl">
          <p className="text-xs font-bold tracking-widest text-[#0B2545]/60 uppercase mb-2">
            Pedagogy & Supervision
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#0B2545] tracking-tight">
            Education & Mentorship
          </h2>
        </div>

        {/* Philosophy & Overview Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4 text-[#0B2545]">
              <Award className="h-4 w-4 stroke-[2.5]" />
              <h3 className="text-xs font-bold uppercase tracking-wider">
                Teaching Statement
              </h3>
            </div>
            <p className="text-gray-600 font-serif text-[16px] leading-relaxed max-w-3xl">
              {TEACHING_PHILOSOPHY}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#F9F9FA] border border-gray-200/60 p-6 rounded-xs">
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="mentorship" className="border-b border-gray-200/80">
                <AccordionTrigger className="text-sm font-medium text-[#0B2545] hover:no-underline py-3">
                  <span className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-[#0B2545]/70" />
                    Student Mentorship
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-4">
                  <ul className="space-y-3">
                    {MENTORSHIP.map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2.5 leading-relaxed">
                        <span className="text-[#0B2545] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="curriculum" className="border-b-0">
                <AccordionTrigger className="text-sm font-medium text-[#0B2545] hover:no-underline py-3">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#0B2545]/70" />
                    Curriculum Development
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-4">
                  <ul className="space-y-3">
                    {CURRICULUM.map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2.5 leading-relaxed">
                        <span className="text-[#0B2545] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Courses Subheading */}
        <div className="mb-8 flex items-center gap-2 border-b border-gray-100 pb-3">
          <BookOpen className="h-4 w-4 text-[#0B2545]/80" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B2545]">
            Selected Courses Taught
          </h3>
        </div>

        {/* Courses Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {COURSES.map((course) => (
            <motion.div key={course.id} variants={staggerItem}>
              <Card className="h-full bg-white border border-gray-200/70 shadow-2xs rounded-none transition-all hover:border-gray-400">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-1.5">
                      <Badge className="bg-[#0B2545] text-white hover:bg-[#0B2545] text-[10px] font-mono rounded-none px-1.5 py-0.5">
                        {course.code}
                      </Badge>
                      <Badge variant="outline" className="text-gray-500 border-gray-200 text-[10px] rounded-none px-1.5 py-0.5">
                        {course.level}
                      </Badge>
                    </div>
                    <ArrowUpRight className="h-3 w-3 text-gray-300" />
                  </div>
                  <CardTitle className="text-base font-serif font-medium text-[#0B2545] tracking-tight leading-snug">
                    {course.title}
                  </CardTitle>
                  <p className="text-xs text-gray-400 tracking-wide font-medium">
                    {course.institution}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {course.description}
                  </p>
                  {course.semesters && (
                    <div className="flex flex-wrap gap-1 border-t border-gray-100 pt-3">
                      {course.semesters.map((sem) => (
                        <span 
                          key={sem} 
                          className="bg-gray-100 text-gray-600 text-[10px] font-medium px-2 py-0.5"
                        >
                          {sem}
                        </span>
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