

'use client'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { Separator } from "@/components/ui/separator"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const BIOGRAPHY =
  "Dr. Baburam Timsina is a distinguished academic researcher, educator, and scholar at the School of Management, Tribhuvan University, Nepal. With extensive expertise in management sciences, entrepreneurship, sustainable development, and organizational behavior, he has contributed significantly to advancing knowledge in business education and research in South Asia. His scholarly work spans empirical research in small and medium enterprises, innovation ecosystems, sustainable business practices, and policy-oriented studies that bridge academia with real-world impact. Dr. Timsina is committed to fostering evidence-based decision-making among policymakers, industry leaders, and the next generation of business professionals"

const RESEARCH_INTERESTS = [
  'Sustainable Development',
  'Entrepreneurship',
  'Management Strategy',
  'Innovation Systems',
  'Organizational Behavior',
  'Knowledge Transfer',
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

// Carousel slides data
const carouselSlides = [
  {
    id: 1,
    title: 'Innovation in Language Learning and Teaching',
    role: 'ASSOCIATE EDITOR',
    image: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    accentImage: 'bg-gradient-to-br from-teal-700 to-teal-900',
  },
  {
    id: 2,
    title: 'Research in Educational Innovation',
    role: 'EDITOR',
    image: 'bg-gradient-to-br from-green-500 to-green-600',
    accentImage: 'bg-gradient-to-br from-cyan-700 to-cyan-900',
  },
  {
    id: 3,
    title: 'Sustainable Development in Education',
    role: 'ASSOCIATE EDITOR',
    image: 'bg-gradient-to-br from-emerald-400 to-emerald-500',
    accentImage: 'bg-gradient-to-br from-blue-800 to-blue-900',
  },
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
      containScroll: 'trimSnaps',
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
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 bg-[#F8F9FA] overflow-hidden"
    >
      <Separator className="bg-[#0F7A5A]/20" />

      {/* Premium Background Decor – Green & Navy Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#0F7A5A]/20 via-[#0B2545]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#0B2545]/10 via-[#0F7A5A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0F7A5A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Section Header with Green Accent */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#0F7A5A]/40" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0F7A5A]">
              About Me
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#0F7A5A]/40" />
          </div>
        </motion.div>

        {/* Main Grid Layout: 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {/* LEFT COLUMN - About Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl shadow-[#0B2545]/5 p-8 lg:p-10 transition-all duration-300 hover:shadow-[#0B2545]/10 hover:border-[#0F7A5A]/30">
              {/* Green accent line */}
              <div className="absolute top-0 left-0 w-1.5 h-24 bg-gradient-to-b from-[#0F7A5A] to-transparent rounded-tl-2xl" />

              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0B2545] mb-6 tracking-tight">
                About <span className="text-[#0F7A5A]">Dr. Timsina</span>
              </h2>

              <div className="text-[#4A5A6A] leading-relaxed text-sm lg:text-base space-y-4">
                <p>{BIOGRAPHY}</p>
              </div>

              {/* Research Interests Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {RESEARCH_INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[#0F7A5A]/10 text-[#0F7A5A] border border-[#0F7A5A]/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>

             <motion.a
  href="https://www.linkedin.com/in/baburam-timsina-9a0b169b/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#0F7A5A] hover:bg-[#0B6A4E] text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
  whileHover={{ x: 4 }}
>
  More About Me
  <ChevronRight className="w-4 h-4" />
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
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl shadow-[#0B2545]/5 p-8 transition-all duration-300 hover:shadow-[#0B2545]/10 hover:border-[#0F7A5A]/30">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#0F7A5A] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">NEWS</span>
              </div>

              <div className="ml-8">
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#0B2545] mb-3 leading-tight">
                  Keynote Address at International Conference on Sustainable Business
                </h3>

                <p className="text-[#4A5A6A]/80 leading-relaxed text-sm lg:text-base">
                  Dr. Timsina delivered a keynote presentation on sustainable
                  entrepreneurship and SME development in South Asian economies at the
                  International Conference on Sustainable Business, Kathmandu.
                </p>

                <div className="flex justify-end mt-4">
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#0F7A5A] hover:text-[#0B6A4E] transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                  {carouselSlides.map((slide) => (
                    <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                      <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden h-[240px] lg:h-[280px] shadow-xl">
                        {/* Left - Gradient with Title */}
                        <div
                          className={`${slide.image} flex items-center justify-center p-6 relative`}
                        >
                          <div className="absolute inset-0 bg-black/20" />
                          <h4 className="relative z-10 text-white text-center font-serif text-lg lg:text-xl leading-snug font-bold drop-shadow-md">
                            {slide.title}
                          </h4>
                        </div>

                        {/* Right - Accent with Role */}
                        <div
                          className={`${slide.accentImage} flex flex-col items-center justify-center p-6 text-white relative`}
                        >
                          <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
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

              {/* Navigation Buttons – Green Accent */}
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-5 bg-white hover:bg-[#F8F9FA] text-[#0B2545] p-2 rounded-full shadow-lg border-2 border-[#0F7A5A]/40 hover:border-[#0F7A5A] transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-5 bg-white hover:bg-[#F8F9FA] text-[#0B2545] p-2 rounded-full shadow-lg border-2 border-[#0F7A5A]/40 hover:border-[#0F7A5A] transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dot Indicators – Green */}
              <div className="flex justify-center gap-3 mt-6">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      selectedIndex === index
                        ? 'bg-[#0F7A5A] w-10'
                        : 'bg-[#0F7A5A]/30 w-2.5 hover:bg-[#0F7A5A]/60'
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

export default AboutSection