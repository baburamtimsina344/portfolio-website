<<<<<<< HEAD

// 'use client'
// import { motion } from 'framer-motion'
// import { GraduationCap, Briefcase, Lightbulb, Award, BookOpen, Zap, Users, ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
// import { useRef, useState } from 'react'
// import { Separator } from "@/components/ui/separator"
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'

// const BIOGRAPHY = "Sin-Wang (Ph.D., PFHEA, FRSA) is an accomplished academic leader with extensive expertise in education, management, entrepreneurship, and sustainable development. With a proven track record of high-impact research and institutional leadership, I am committed to advancing academic excellence and fostering transformative learning environments."

// const RESEARCH_INTERESTS = [
//   'Sustainable Development', 'Entrepreneurship', 'Management Strategy',
//   'Innovation Systems', 'Organizational Behavior', 'Knowledge Transfer'
// ]

// const EDUCATION = [ /* ... keep your existing data ... */ ]
// const EXPERIENCE = [ /* ... keep your existing data ... */ ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
// }

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// }

// // Carousel slides data
// const carouselSlides = [
//   {
//     id: 1,
//     icon: Lightbulb,
//     title: "Research Interests",
//     content: (
//       <div className="flex flex-wrap gap-2">
//         {RESEARCH_INTERESTS.map((item, i) => (
//           <span key={i} className="text-sm px-4 py-2 bg-white border border-[#1f4567]/10 rounded-2xl text-[#1f4567]">
//             {item}
//           </span>
//         ))}
//       </div>
//     )
//   },
//   {
//     id: 2,
//     icon: Briefcase,
//     title: "Professional Journey",
//     content: (
//       <>
//         <p className="text-[#4a5a6a] mb-6">Professor & Research Lead at University of Excellence since 2020, with prior roles in leading academic institutions.</p>
//         <a href="#experience" className="text-[#1f4567] font-medium flex items-center gap-2 hover:gap-3 transition-all">
//           View Full Experience <ArrowRight className="w-4 h-4" />
//         </a>
//       </>
//     )
//   },
//   {
//     id: 3,
//     icon: Users,
//     title: "Impact at a Glance",
//     content: (
//       <div className="space-y-6">
//         <div className="flex justify-between items-center">
//           <span className="text-[#4a5a6a]">Publications</span>
//           <span className="font-bold text-3xl text-[#1f4567]">50+</span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-[#4a5a6a]">Students Mentored</span>
//           <span className="font-bold text-3xl text-[#1f4567]">100+</span>
//         </div>
//       </div>
//     )
//   },
//   // Add more slides if needed
//   {
//     id: 4,
//     icon: Award,
//     title: "Awards & Recognition",
//     content: (
//       <div className="space-y-4">
//         <div className="flex items-start gap-3">
//           <Award className="w-5 h-5 text-[#1f4567] mt-1 flex-shrink-0" />
//           <div>
//             <p className="font-semibold text-[#1f4567]">Best Researcher Award</p>
//             <p className="text-sm text-[#4a5a6a]">International Conference 2024</p>
//           </div>
//         </div>
//         <div className="flex items-start gap-3">
//           <Award className="w-5 h-5 text-[#1f4567] mt-1 flex-shrink-0" />
//           <div>
//             <p className="font-semibold text-[#1f4567]">Excellence in Teaching</p>
//             <p className="text-sm text-[#4a5a6a]">University of Excellence, 2023</p>
//           </div>
//         </div>
//       </div>
//     )
//   }
// ]

// export function AboutSection() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [selectedIndex, setSelectedIndex] = useState(0)
  
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: 'start',
//       slidesToScroll: 1,
//       breakpoints: {
//         '(min-width: 768px)': {
//           slidesToScroll: 1,
//         }
//       }
//     },
//     [Autoplay({ delay: 4000, stopOnInteraction: true })]
//   )

//   const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
//   const scrollNext = () => emblaApi && emblaApi.scrollNext()

//   // Update selected index on slide change
//   const onSelect = () => {
//     if (!emblaApi) return
//     setSelectedIndex(emblaApi.selectedScrollSnap())
//   }

//   if (emblaApi) {
//     emblaApi.on('select', onSelect)
//   }

//   return (
//     <section ref={containerRef} id="about" className="relative py-24 bg-gradient-to-br from-[#f8f9fa] via-[#f0f2f5] to-[#e8ecf0] overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#1f4567]/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 -left-40 w-[700px] h-[700px] bg-[#2a6b8f]/5 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 container mx-auto px-6 max-w-7xl">
//         {/* Top Stats - Google Scholar & ResearchGate */}
        

//         <div className="grid lg:grid-cols-12 gap-10">
//           {/* Main About Content */}
//           <motion.div className="lg:col-span-7" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <div className="bg-white p-10 border-2 border-[#1f4567]">
//               <h2 className="text-4xl font-serif font-semibold text-[#1f4567] mb-6">About</h2>
              
//               <div className="prose text-[#374151] leading-relaxed text-[17px]">
//                 <p>{BIOGRAPHY}</p>
//                 <p className="mt-4">With a deep commitment to <span className="font-semibold text-[#1f4567]">academic excellence</span> and institutional leadership, I have dedicated my career to advancing education, mentoring future educators, and fostering transformative learning environments that inspire innovation, growth, and lifelong learning.</p>
//               </div>

//               <motion.a
//                 href="#experience"
//                 className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1f4567] hover:text-[#2a6b8f] group"
//                 whileHover={{ x: 4 }}
//               >
//                 Learn more about my journey
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
//               </motion.a>
//             </div>
//           </motion.div>

//           {/* Featured Highlight Card (Similar to News) */}
//           <motion.div className="lg:col-span-5 -mt-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <div className="bg-white p-9 border-[#1f4567] border-2 flex flex-col">
//               <div className="inline-block px-4 py-1 bg-[#1f4567] text-white text-xs font-bold rounded-full mb-6">FEATURED NEWS</div>
              
//               <h3 className="text-2xl font-serif leading-tight text-[#1f4567] mb-4">
//                 Keynote Address at International Conference on Sustainable Business
//               </h3>
              
//               <p className="text-[#4a5a6a] leading-relaxed flex-1">
//                 Dr. Timsina delivered a keynote presentation on sustainable entrepreneurship and SME development in South Asian economies at the International Conference on Sustainable Business, Kathmandu.
//               </p>

//               <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-sm">
//                 <span className="text-[#2a6b8f]">November 15, 2025</span>
//                 <a href="#" className="inline-flex items-center gap-2 text-[#1f4567] hover:text-[#2a6b8f] font-medium">
//                   Read more <ArrowRight className="w-4 h-4" />
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Carousel Section */}
//         <motion.div 
//           className="mt-20"
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.div variants={fadeInUp} className="relative">
//             {/* Carousel Container */}
//             <div className="overflow-hidden" ref={emblaRef}>
//               <div className="flex">
//                 {carouselSlides.map((slide, index) => (
//                   <div 
//                     key={slide.id} 
//                     className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
//                   >
//                     <div className="bg-white backdrop-blur-md border-2 border-[#1f4567]  p-9 hover:shadow-2xl transition-all h-full">
//                       <div className="p-3 bg-[#1f4567]/10 w-fit rounded-2xl mb-6">
//                         <slide.icon className="w-7 h-7 text-[#1f4567]" />
//                       </div>
//                       <h3 className="text-2xl font-semibold text-[#1f4567] mb-6">{slide.title}</h3>
//                       {slide.content}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation Buttons */}
//             <button
//               onClick={scrollPrev}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/90 hover:bg-white text-[#1f4567] p-2 rounded-full shadow-lg border border-[#1f4567]/10 hover:shadow-xl transition-all z-10"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
            
//             <button
//               onClick={scrollNext}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/90 hover:bg-white text-[#1f4567] p-2 rounded-full shadow-lg border border-[#1f4567]/10 hover:shadow-xl transition-all z-10"
//               aria-label="Next slide"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>

//             {/* Dot Indicators */}
//             <div className="flex justify-center gap-2 mt-8">
//               {carouselSlides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => emblaApi && emblaApi.scrollTo(index)}
//                   className={`w-3 h-3 rounded-full transition-all ${
//                     selectedIndex === index 
//                       ? 'bg-[#1f4567] w-6' 
//                       : 'bg-[#1f4567]/30 hover:bg-[#1f4567]/50'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



'use client'
import { motion } from 'framer-motion'
import { Lightbulb, Briefcase, Award, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { Separator } from "@/components/ui/separator"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const BIOGRAPHY = "Sin-Wang (Ph.D., PFHEA, FRSA) is Director of Impact and Innovation and Director of Research at the International Education Research Institute, University of St Andrews. Sin-Wang founded the Centre for International, Language, and Teacher Education Research (CILTER) at the University of St Andrews and is the Inaugural Centre Director. Currently, he is Visiting Full Professor in Education at King's College London and the Education University of Hong Kong."

const RESEARCH_INTERESTS = [
  'Sustainable Development', 'Entrepreneurship', 'Management Strategy',
  'Innovation Systems', 'Organizational Behavior', 'Knowledge Transfer'
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

// Carousel slides data
const carouselSlides = [
  {
    id: 1,
    title: "Innovation in Language Learning and Teaching",
    role: "ASSOCIATE EDITOR",
    image: "bg-gradient-to-br from-red-500 to-red-600",
    accentImage: "bg-gradient-to-br from-blue-700 to-blue-900"
  },
  {
    id: 2,
    title: "Research in Educational Innovation",
    role: "EDITOR",
    image: "bg-gradient-to-br from-green-500 to-green-600",
    accentImage: "bg-gradient-to-br from-purple-700 to-purple-900"
  },
  {
    id: 3,
    title: "Sustainable Development in Education",
    role: "ASSOCIATE EDITOR",
    image: "bg-gradient-to-br from-orange-500 to-orange-600",
    accentImage: "bg-gradient-to-br from-indigo-700 to-indigo-900"
  }
]

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
      containScroll: 'trimSnaps'
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    
    emblaApi.on('select', onSelect)
    
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <section ref={containerRef} id="about" className="relative py-20 bg-gradient-to-br from-[#f8f9fa] via-[#f0f2f5] to-[#e8ecf0] overflow-hidden">
      <Separator />
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#1f4567]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[700px] h-[700px] bg-[#2a6b8f]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Main Grid Layout: 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - About Section */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            {/* About Box */}
            <div className="border-2 border-[#1f4567] bg-white p-10 flex flex-col h-full">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1f4567] uppercase mb-8 tracking-tight">
                About
              </h2>
              
              <div className="text-[#374151] leading-relaxed text-sm lg:text-base flex-1 mb-8">
                <p className="text-[#1f4567]">{BIOGRAPHY}</p>
              </div>

              {/* More About Me Button */}
              <motion.a
                href="#experience"
                className="self-center mt-auto px-8 py-3 bg-[#5b9dcc] hover:bg-[#4a8ab8] text-white font-semibold rounded-full inline-flex items-center gap-2 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MORE ABOUT ME
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Featured News + Carousel */}
          <motion.div 
            className="flex flex-col gap-8"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            
            {/* Featured News Card */}
            <div className="border-2 border-[#1f4567] bg-white p-8 flex flex-col">
              <div className="inline-flex items-center gap-2 mb-6 w-fit">
                <div className="px-3 py-3 bg-[#e91e8c] text-white text-xs font-bold rounded">
                  FEATURED NEWS
                </div>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-[#1f4567] mb-4 leading-tight">
                Keynote Address at International Conference on Sustainable Business
              </h3>
              
              <p className="text-[#4a5a6a] leading-relaxed text-sm lg:text-base flex-1 mb-6">
                Dr. Timsina delivered a keynote presentation on sustainable entrepreneurship and SME development in South Asian economies at the International Conference on Sustainable Business, Kathmandu.
              </p>

              {/* Read More Button */}
              <div className="flex justify-end">
                <motion.a
                  href="#"
                  className="px-6 py-2 bg-[#4dd0e1] hover:bg-[#26c6da] text-[#1f4567] font-bold rounded-full inline-flex items-center gap-2 transition-all text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  READ MORE
                </motion.a>
              </div>
            </div>

            {/* Carousel Section - Single Slide */}
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                <div className="flex">
                  {carouselSlides.map((slide) => (
                    <div 
                      key={slide.id} 
                      className="flex-[0_0_100%] min-w-0"
                    >
                      <div className="grid grid-cols-2 gap-0 rounded-lg overflow-hidden h-[280px] lg:h-[320px]">
                        {/* Left side - Image/Gradient */}
                        <div className={`${slide.image} flex items-center justify-center p-6`}>
                          <h4 className="text-white text-center font-serif text-lg lg:text-xl leading-snug">
                            {slide.title}
                          </h4>
                        </div>
                        
                        {/* Right side - Content */}
                        <div className={`${slide.accentImage} flex flex-col items-center justify-center p-6 text-white`}>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-2">
                            {slide.role.split(' ')[0]} IN
                          </p>
                          <p className="text-center font-bold text-sm lg:text-lg leading-tight">
                            {slide.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 bg-white hover:bg-gray-100 text-[#1f4567] p-2 rounded-full shadow-lg border-2 border-[#1f4567] hover:shadow-xl transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 bg-white hover:bg-gray-100 text-[#1f4567] p-2 rounded-full shadow-lg border-2 border-[#1f4567] hover:shadow-xl transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      selectedIndex === index 
                        ? 'bg-[#1f4567] w-8' 
                        : 'bg-[#1f4567]/30 w-2 hover:bg-[#1f4567]/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Make sure to export default as well if needed
export default AboutSection
=======
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
>>>>>>> 3a65e851bc07cbf279eeaa5a3b08beaee085fd34
