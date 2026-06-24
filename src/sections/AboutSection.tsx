

'use client'
import { motion } from 'framer-motion'
import {  ChevronLeft, ChevronRight } from 'lucide-react'
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


