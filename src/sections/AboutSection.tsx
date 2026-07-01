

// 'use client'
// import { motion } from 'framer-motion'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { useRef, useState, useEffect } from 'react'
// import { Separator } from "@/components/ui/separator"
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'

// const BIOGRAPHY =
//   "Dr. Baburam Timsina is a distinguished academic researcher, educator, and scholar at the School of Management, Tribhuvan University, Nepal. With extensive expertise in management sciences, entrepreneurship, sustainable development, and organizational behavior, he has contributed significantly to advancing knowledge in business education and research in South Asia. His scholarly work spans empirical research in small and medium enterprises, innovation ecosystems, sustainable business practices, and policy-oriented studies that bridge academia with real-world impact. Dr. Timsina is committed to fostering evidence-based decision-making among policymakers, industry leaders, and the next generation of business professionals"

// const RESEARCH_INTERESTS = [
//   'Sustainable Development',
//   'Entrepreneurship',
//   'Management Strategy',
//   'Innovation Systems',
//   'Organizational Behavior',
//   'Knowledge Transfer',
// ]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
// }

// // Carousel slides data
// const carouselSlides = [
//   {
//     id: 1,
//     title: 'Innovation in Language Learning and Teaching',
//     role: 'ASSOCIATE EDITOR',
//     image: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
//     accentImage: 'bg-gradient-to-br from-teal-700 to-teal-900',
//   },
//   {
//     id: 2,
//     title: 'Research in Educational Innovation',
//     role: 'EDITOR',
//     image: 'bg-gradient-to-br from-green-500 to-green-600',
//     accentImage: 'bg-gradient-to-br from-cyan-700 to-cyan-900',
//   },
//   {
//     id: 3,
//     title: 'Sustainable Development in Education',
//     role: 'ASSOCIATE EDITOR',
//     image: 'bg-gradient-to-br from-emerald-400 to-emerald-500',
//     accentImage: 'bg-gradient-to-br from-blue-800 to-blue-900',
//   },
// ]

// export function AboutSection() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [selectedIndex, setSelectedIndex] = useState(0)
//   const [isClient, setIsClient] = useState(false)

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: 'center',
//       slidesToScroll: 1,
//       containScroll: 'trimSnaps',
//     },
//     [Autoplay({ delay: 5000, stopOnInteraction: true })]
//   )

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   useEffect(() => {
//     if (!emblaApi) return

//     const onSelect = () => {
//       setSelectedIndex(emblaApi.selectedScrollSnap())
//     }

//     emblaApi.on('select', onSelect)

//     return () => {
//       emblaApi.off('select', onSelect)
//     }
//   }, [emblaApi])

//   const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
//   const scrollNext = () => emblaApi && emblaApi.scrollNext()

//   return (
//     <section
//       ref={containerRef}
//       id="about"
//       className="relative py-24 bg-[#F8F9FA] overflow-hidden"
//     >
//       <Separator className="bg-[#0F7A5A]/20" />

//       {/* Premium Background Decor – Green & Navy Orbs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#0F7A5A]/20 via-[#0B2545]/5 to-transparent rounded-full blur-3xl" />
//         <div className="absolute bottom-0 -left-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#0B2545]/10 via-[#0F7A5A]/5 to-transparent rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0F7A5A]/5 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 container mx-auto px-6 max-w-7xl">
//         {/* Section Header with Green Accent */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="mb-12"
//         >
//           <div className="flex items-center gap-4">
//             <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#0F7A5A]/40" />
//             <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0F7A5A]">
//               About Me
//             </span>
//             <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#0F7A5A]/40" />
//           </div>
//         </motion.div>

//         {/* Main Grid Layout: 2 Columns */}
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
//           {/* LEFT COLUMN - About Bio */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl shadow-[#0B2545]/5 p-8 lg:p-10 transition-all duration-300 hover:shadow-[#0B2545]/10 hover:border-[#0F7A5A]/30">
//               {/* Green accent line */}
//               <div className="absolute top-0 left-0 w-1.5 h-24 bg-gradient-to-b from-[#0F7A5A] to-transparent rounded-tl-2xl" />

//               <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0B2545] mb-6 tracking-tight">
//                 About <span className="text-[#0F7A5A]">Dr. Timsina</span>
//               </h2>

//               <div className="text-[#4A5A6A] leading-relaxed text-sm lg:text-base space-y-4">
//                 <p>{BIOGRAPHY}</p>
//               </div>

//               {/* Research Interests Tags */}
//               <div className="mt-8 flex flex-wrap gap-2">
//                 {RESEARCH_INTERESTS.map((interest) => (
//                   <span
//                     key={interest}
//                     className="px-3 py-1 text-xs font-medium rounded-full bg-[#0F7A5A]/10 text-[#0F7A5A] border border-[#0F7A5A]/20"
//                   >
//                     {interest}
//                   </span>
//                 ))}
//               </div>

//              <motion.a
//   href="https://www.linkedin.com/in/baburam-timsina-9a0b169b/"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#0F7A5A] hover:bg-[#0B6A4E] text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
//   whileHover={{ x: 4 }}
// >
//   More About Me
//   <ChevronRight className="w-4 h-4" />
// </motion.a>
//             </div>
//           </motion.div>

//           {/* RIGHT COLUMN - Featured News + Carousel */}
//           <motion.div
//             className="flex flex-col gap-8"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             {/* Featured News Card */}
//             <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl shadow-[#0B2545]/5 p-8 transition-all duration-300 hover:shadow-[#0B2545]/10 hover:border-[#0F7A5A]/30">
//               <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#0F7A5A] rounded-full flex items-center justify-center shadow-lg">
//                 <span className="text-white text-xs font-bold">NEWS</span>
//               </div>

//               <div className="ml-8">
//                 <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#0B2545] mb-3 leading-tight">
//                   Keynote Address at International Conference on Sustainable Business
//                 </h3>

//                 <p className="text-[#4A5A6A]/80 leading-relaxed text-sm lg:text-base">
//                   Dr. Timsina delivered a keynote presentation on sustainable
//                   entrepreneurship and SME development in South Asian economies at the
//                   International Conference on Sustainable Business, Kathmandu.
//                 </p>

//                 <div className="flex justify-end mt-4">
//                   <motion.a
//                     href="#"
//                     className="inline-flex items-center gap-2 text-sm font-medium text-[#0F7A5A] hover:text-[#0B6A4E] transition-colors"
//                     whileHover={{ x: 4 }}
//                   >
//                     Read More
//                     <ChevronRight className="w-4 h-4" />
//                   </motion.a>
//                 </div>
//               </div>
//             </div>

//             {/* Carousel Section */}
//             <div className="relative">
//               <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
//                 <div className="flex">
//                   {carouselSlides.map((slide) => (
//                     <div key={slide.id} className="flex-[0_0_100%] min-w-0">
//                       <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden h-[240px] lg:h-[280px] shadow-xl">
//                         {/* Left - Gradient with Title */}
//                         <div
//                           className={`${slide.image} flex items-center justify-center p-6 relative`}
//                         >
//                           <div className="absolute inset-0 bg-black/20" />
//                           <h4 className="relative z-10 text-white text-center font-serif text-lg lg:text-xl leading-snug font-bold drop-shadow-md">
//                             {slide.title}
//                           </h4>
//                         </div>

//                         {/* Right - Accent with Role */}
//                         <div
//                           className={`${slide.accentImage} flex flex-col items-center justify-center p-6 text-white relative`}
//                         >
//                           <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
//                             {slide.role.split(' ')[0]} IN
//                           </p>
//                           <p className="text-center font-bold text-sm lg:text-lg leading-tight">
//                             {slide.role}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Navigation Buttons – Green Accent */}
//               <button
//                 onClick={scrollPrev}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-5 bg-white hover:bg-[#F8F9FA] text-[#0B2545] p-2 rounded-full shadow-lg border-2 border-[#0F7A5A]/40 hover:border-[#0F7A5A] transition-all z-10"
//                 aria-label="Previous slide"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>

//               <button
//                 onClick={scrollNext}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-5 bg-white hover:bg-[#F8F9FA] text-[#0B2545] p-2 rounded-full shadow-lg border-2 border-[#0F7A5A]/40 hover:border-[#0F7A5A] transition-all z-10"
//                 aria-label="Next slide"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>

//               {/* Dot Indicators – Green */}
//               <div className="flex justify-center gap-3 mt-6">
//                 {carouselSlides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => emblaApi && emblaApi.scrollTo(index)}
//                     className={`h-2.5 rounded-full transition-all duration-300 ${
//                       selectedIndex === index
//                         ? 'bg-[#0F7A5A] w-10'
//                         : 'bg-[#0F7A5A]/30 w-2.5 hover:bg-[#0F7A5A]/60'
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AboutSection



'use client'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, Newspaper } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// ─── Content ─────────────────────────────────────────────────────────
const BIOGRAPHY =
    "Dr. Baburam Timsina is a distinguished academic researcher, educator, and scholar at the School of Management, Tribhuvan University, Nepal. With extensive expertise in management sciences, entrepreneurship, sustainable development, and organizational behavior, he has contributed significantly to advancing knowledge in business education and research in South Asia. His scholarly work spans empirical research in small and medium enterprises, innovation ecosystems, sustainable business practices, and policy-oriented studies that bridge academia with real-world impact. Dr. Timsina is committed to fostering evidence-based decision-making among policymakers, industry leaders, and the next generation of business professionals."

const RESEARCH_INTERESTS = [
    'Sustainable Development',
    'Entrepreneurship',
    'Management Strategy',
    'Innovation Systems',
    'Organizational Behavior',
    'Knowledge Transfer',
]

const carouselSlides = [
    {
        id: 1,
        title: 'Innovation in Language Learning and Teaching',
        role: 'ASSOCIATE EDITOR',
        leftGradient: 'linear-gradient(135deg, #1A4080 0%, #0B2545 100%)',
        rightGradient: 'linear-gradient(135deg, #0B2545 0%, #071830 100%)',
    },
    {
        id: 2,
        title: 'Research in Educational Innovation',
        role: 'EDITOR',
        leftGradient: 'linear-gradient(135deg, #1A5CB8 0%, #1A4080 100%)',
        rightGradient: 'linear-gradient(135deg, #0F2F56 0%, #0B2545 100%)',
    },
    {
        id: 3,
        title: 'Sustainable Development in Education',
        role: 'ASSOCIATE EDITOR',
        leftGradient: 'linear-gradient(135deg, #00B894  0%, #B8941F 100%)',
        rightGradient: 'linear-gradient(135deg, #0B2545 0%, #1A4080 100%)',
    },
]

// ─── Animation Variants ──────────────────────────────────────────────
const fadeInUp = {
    hidden:   { opacity: 0, y: 32 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
}

// ─── Component ───────────────────────────────────────────────────────
export function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'center', slidesToScroll: 1, containScroll: 'trimSnaps' },
        [Autoplay({ delay: 5000, stopOnInteraction: true })]
    )

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        return () => { emblaApi.off('select', onSelect) }
    }, [emblaApi])

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    return (
        <section
            ref={containerRef}
            id="about"
            aria-label="About Dr. Baburam Timsina"
            style={{
                position: 'relative',
                padding: 'clamp(72px, 10vw, 120px) 0',
                background: 'var(--off-white)',
                overflow: 'hidden',
            }}
        >
            {/* ── Section Divider ─────────────────────────────── */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.30), rgba(11,37,69,0.12), transparent)',
            }} />

            {/* ── Background Orbs ─────────────────────────────── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{
                    position: 'absolute', top: '-15%', right: '-15%',
                    width: 600, height: 600, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, rgba(26,64,128,0.05) 50%, transparent 75%)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-20%', left: '-15%',
                    width: 700, height: 700, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(11,37,69,0.07) 0%, rgba(26,92,184,0.04) 50%, transparent 70%)',
                }} />
                {/* Dot grid */}
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.022,
                    backgroundImage: 'radial-gradient(circle, #0B2545 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                }} />
            </div>

            {/* ── Container ───────────────────────────────────── */}
            <div style={{
                position: 'relative', zIndex: 10,
                width: '100%', maxWidth: 1200,
                margin: '0 auto',
                padding: '0 clamp(20px, 5vw, 56px)',
            }}>

                {/* ── Section Header ──────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{ marginBottom: 64, textAlign: 'center' }}
                >
                    {/* Eyebrow */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 10,
                        marginBottom: 20,
                        padding: '7px 20px',
                        borderRadius: 100,
                        background: 'rgba(212,175,55,0.08)',
                        border: '1px solid rgba(212,175,55,0.22)',
                    }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'var(--gold)' }} />
                        <span style={{
                            fontSize: 10.5, fontWeight: 700,
                            letterSpacing: '0.22em', textTransform: 'uppercase',
                            color: 'var(--navy)', fontFamily: 'Inter, sans-serif',
                        }}>
                            About Me
                        </span>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'var(--gold)' }} />
                    </div>

                    {/* Heading */}
                    <h2
                        className="font-display"
                        style={{
                            fontSize: 'clamp(30px, 4.5vw, 48px)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1,
                            color: 'var(--navy)',
                            margin: 0,
                        }}
                    >
                        Scholar.{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Educator.
                        </span>
                        {' '}Leader.
                    </h2>

                    {/* Gold rule */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 22 }}>
                        <div style={{ height: 1, width: 64, background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.50))' }} />
                        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--gold)', opacity: 0.7 }} />
                        <div style={{ height: 1, width: 64, background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.50))' }} />
                    </div>
                </motion.div>

                {/* ── Two-column grid ─────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                        gap: 'clamp(32px, 4vw, 56px)',
                        alignItems: 'start',
                    }}
                >

                    {/* ── LEFT: Bio Card ──────────────────────── */}
                    <motion.div variants={fadeInUp}>
                        <motion.div
                            whileHover={{ y: -4, boxShadow: '0 20px 56px rgba(11,37,69,0.14)' }}
                            transition={{ duration: 0.35 }}
                            style={{
                                position: 'relative',
                                background: '#FFFFFF',
                                borderRadius: 24,
                                border: '1.5px solid rgba(212,175,55,0.15)',
                                boxShadow: '0 8px 32px rgba(11,37,69,0.09), 0 2px 8px rgba(11,37,69,0.05)',
                                padding: 'clamp(28px, 4vw, 44px)',
                                overflow: 'hidden',
                                transition: 'box-shadow 0.35s',
                            }}
                        >
                            {/* Gold left accent bar */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0,
                                width: 4, height: 96,
                                background: 'linear-gradient(to bottom, var(--gold), rgba(212,175,55,0.10))',
                                borderRadius: '0 0 4px 0',
                            }} />

                            {/* Faint background quote mark */}
                            <div aria-hidden style={{
                                position: 'absolute', top: -8, right: 20,
                                fontSize: 180, lineHeight: 1,
                                fontFamily: 'Georgia, serif',
                                color: 'var(--navy)',
                                opacity: 0.025,
                                pointerEvents: 'none', userSelect: 'none',
                                transform: 'rotate(180deg)',
                            }}>
                                &ldquo;
                            </div>

                            {/* Icon label */}
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24,
                            }}>
                                <div style={{
                                    width: 38, height: 38, borderRadius: 12,
                                    background: 'linear-gradient(135deg, rgba(212,175,55,0.14), rgba(212,175,55,0.05))',
                                    border: '1px solid rgba(212,175,55,0.22)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <BookOpen style={{ width: 16, height: 16, color: 'var(--gold)' }} />
                                </div>
                                <span style={{
                                            fontSize: 'clamp(14px, 1.6vw, 16px)',
                                            lineHeight: 1.8,
                                            color: 'var(--text-secondary)',
                                            margin: 0,
                                            fontWeight: 500,
                                            fontFamily: 'Inter, sans-serif',
                                            letterSpacing: '0.3px',
                                        }}>
                                    Biography
                                </span>
                            </div>

                            {/* Heading */}
                            <h3
                                className="font-display"
                                style={{
                                    fontSize: 'clamp(22px, 3vw, 30px)',
                                    fontWeight: 700,
                                    color: 'var(--navy)',
                                    lineHeight: 1.2,
                                    letterSpacing: '-0.02em',
                                    marginBottom: 20,
                                }}
                            >
                                About{' '}
                                <span style={{
                                    background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>
                                    Dr. Timsina
                                </span>
                            </h3>

                            {/* Bio text */}
                            <div style={{
                                borderLeft: '2.5px solid rgba(212,175,55,0.30)',
                                paddingLeft: 18,
                                marginBottom: 28,
                            }}>
                                <p style={{
                                            fontSize: 'clamp(14px, 1.6vw, 16px)',
                                            lineHeight: 1.8,
                                            color: 'var(--text-secondary)',
                                            margin: 0,
                                            fontWeight: 500,
                                            fontFamily: 'Inter, sans-serif',
                                            letterSpacing: '0.3px',
                                             textAlign: 'justify',
                                        }}>
                                    {BIOGRAPHY}
                                </p>
                            </div>

                            {/* Research Interest Tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                                {RESEARCH_INTERESTS.map((interest) => (
                                    <motion.span
                                        key={interest}
                                        whileHover={{ y: -2, backgroundColor: 'rgba(212,175,55,0.14)' }}
                                        transition={{ duration: 0.2 }}
                                        style={{
                                            padding: '5px 14px',
                                            borderRadius: 100,
                                            fontSize: 11.5, fontWeight: 500,
                                            fontFamily: 'Inter, sans-serif',
                                            color: 'var(--navy)',
                                            background: 'rgba(212,175,55,0.08)',
                                            border: '1px solid rgba(212,175,55,0.22)',
                                            cursor: 'default',
                                            transition: 'background 0.2s',
                                            display: 'inline-block',
                                        }}
                                    >
                                        {interest}
                                    </motion.span>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.a
                                href="https://www.linkedin.com/in/baburam-timsina-9a0b169b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(11,37,69,0.28)' }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.25 }}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 8,
                                    padding: '11px 24px',
                                    borderRadius: 100,
                                    background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
                                    border: '1px solid rgba(212,175,55,0.22)',
                                    color: '#FFFFFF',
                                    fontSize: 13, fontWeight: 600,
                                    letterSpacing: '0.02em',
                                    textDecoration: 'none',
                                    fontFamily: 'Inter, sans-serif',
                                    boxShadow: '0 4px 18px rgba(11,37,69,0.28)',
                                    transition: 'box-shadow 0.25s',
                                }}
                            >
                                More About Me
                                <ChevronRight style={{ width: 15, height: 15, opacity: 0.8 }} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT: News + Carousel ───────────────── */}
                    <motion.div
                        variants={fadeInUp}
                        style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
                    >
                        {/* Featured News Card */}
                        <motion.div
                            whileHover={{ y: -4, boxShadow: '0 20px 56px rgba(11,37,69,0.14)' }}
                            transition={{ duration: 0.35 }}
                            style={{
                                position: 'relative',
                                background: '#FFFFFF',
                                borderRadius: 24,
                                border: '1.5px solid rgba(11,37,69,0.08)',
                                boxShadow: '0 8px 32px rgba(11,37,69,0.08)',
                                padding: 'clamp(24px, 3vw, 36px)',
                                overflow: 'hidden',
                                transition: 'box-shadow 0.35s',
                            }}
                        >
                            {/* Gold top accent bar */}
                            <div style={{
                                position: 'absolute', top: 0, left: 32, right: 32, height: 3,
                                background: 'linear-gradient(90deg, transparent, var(--gold), rgba(212,175,55,0.20), transparent)',
                                borderRadius: '0 0 4px 4px',
                            }} />

                            {/* News badge */}
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                marginBottom: 18,
                                padding: '6px 14px',
                                borderRadius: 100,
                                background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                                border: '1px solid rgba(212,175,55,0.20)',
                                boxShadow: '0 3px 12px rgba(11,37,69,0.22)',
                            }}>
                                <Newspaper style={{ width: 12, height: 12, color: 'var(--gold)' }} />
                                <span style={{
                                    fontSize: 9.5, fontWeight: 700,
                                    letterSpacing: '0.20em', textTransform: 'uppercase',
                                    color: '#FFFFFF', fontFamily: 'Inter, sans-serif',
                                }}>
                                    Latest News
                                </span>
                            </div>

                            <h3
                                className="font-display"
                                style={{
                                    fontSize: 'clamp(17px, 2.2vw, 22px)',
                                    fontWeight: 700,
                                    color: 'var(--navy)',
                                    lineHeight: 1.3,
                                    letterSpacing: '-0.01em',
                                    marginBottom: 14,
                                }}
                            >
                                Keynote Address at International Conference on Sustainable Business
                            </h3>

                            <p style={{
                                            fontSize: 'clamp(14px, 1.6vw, 16px)',
                                            lineHeight: 1.8,
                                            color: 'var(--text-secondary)',
                                            margin: 0,
                                            fontWeight: 500,
                                            fontFamily: 'Inter, sans-serif',
                                            letterSpacing: '0.3px',
                                             textAlign: 'justify',
                                        }}>
                                Dr. Timsina delivered a keynote presentation on sustainable
                                entrepreneurship and SME development in South Asian economies at the
                                International Conference on Sustainable Business, Kathmandu.
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <motion.a
                                    href="#"
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.22 }}
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 6,
                                        fontSize: 12.5, fontWeight: 600,
                                        color: 'var(--navy)',
                                        textDecoration: 'none',
                                        fontFamily: 'Inter, sans-serif',
                                        letterSpacing: '0.03em',
                                        borderBottom: '1.5px solid rgba(212,175,55,0.45)',
                                        paddingBottom: 2,
                                    }}
                                >
                                    Read More
                                    <ChevronRight style={{ width: 13, height: 13 }} />
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* ── Carousel ───────────────────────── */}
                        <div style={{ position: 'relative' }}>
                            {/* Carousel wrapper */}
                            <div
                                ref={emblaRef}
                                style={{
                                    overflow: 'hidden',
                                    borderRadius: 24,
                                    boxShadow: '0 12px 48px rgba(11,37,69,0.18)',
                                }}
                            >
                                <div style={{ display: 'flex' }}>
                                    {carouselSlides.map((slide) => (
                                        <div
                                            key={slide.id}
                                            style={{ flex: '0 0 100%', minWidth: 0 }}
                                        >
                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                height: 'clamp(200px, 26vw, 280px)',
                                                borderRadius: 24,
                                                overflow: 'hidden',
                                            }}>
                                                {/* Left panel */}
                                                <div style={{
                                                    background: slide.leftGradient,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    padding: 'clamp(20px, 3vw, 32px)',
                                                    position: 'relative',
                                                }}>
                                                    {/* Diagonal shimmer */}
                                                    <div style={{
                                                        position: 'absolute', inset: 0,
                                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)',
                                                        pointerEvents: 'none',
                                                    }} />
                                                    <h4
                                                        className="font-display"
                                                        style={{
                                                            color: '#FFFFFF',
                                                            fontSize: 'clamp(14px, 2vw, 18px)',
                                                            fontWeight: 700,
                                                            lineHeight: 1.35,
                                                            textAlign: 'center',
                                                            textShadow: '0 2px 8px rgba(0,0,0,0.30)',
                                                            position: 'relative', zIndex: 1,
                                                        }}
                                                    >
                                                        {slide.title}
                                                    </h4>
                                                </div>

                                                {/* Right panel */}
                                                <div style={{
                                                    background: slide.rightGradient,
                                                    display: 'flex', flexDirection: 'column',
                                                    alignItems: 'center', justifyContent: 'center',
                                                    padding: 'clamp(20px, 3vw, 32px)',
                                                    position: 'relative',
                                                    gap: 14,
                                                }}>
                                                    {/* Gold accent icon */}
                                                    <div style={{
                                                        width: 40, height: 40, borderRadius: 12,
                                                        background: 'rgba(212,175,55,0.15)',
                                                        border: '1px solid rgba(212,175,55,0.30)',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    }}>
                                                        <Sparkles style={{ width: 18, height: 18, color: 'var(--gold)' }} />
                                                    </div>
                                                    <div style={{ textAlign: 'center' }}>
                                                        <p style={{
                                                            fontSize: 9, fontWeight: 700,
                                                            letterSpacing: '0.22em', textTransform: 'uppercase',
                                                            color: 'rgba(212,175,55,0.70)',
                                                            fontFamily: 'Inter, sans-serif',
                                                            marginBottom: 6,
                                                        }}>
                                                            Role
                                                        </p>
                                                        <p style={{
                                                            fontSize: 'clamp(11px, 1.5vw, 14px)',
                                                            fontWeight: 700,
                                                            color: '#FFFFFF',
                                                            fontFamily: 'Inter, sans-serif',
                                                            lineHeight: 1.3,
                                                            textAlign: 'center',
                                                            letterSpacing: '0.04em',
                                                        }}>
                                                            {slide.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Prev button */}
                            <motion.button
                                onClick={scrollPrev}
                                whileHover={{ scale: 1.08, boxShadow: '0 8px 24px rgba(11,37,69,0.22)' }}
                                whileTap={{ scale: 0.94 }}
                                aria-label="Previous slide"
                                style={{
                                    position: 'absolute', left: -18, top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: 40, height: 40,
                                    borderRadius: '50%',
                                    background: '#FFFFFF',
                                    border: '1.5px solid rgba(212,175,55,0.30)',
                                    boxShadow: '0 4px 16px rgba(11,37,69,0.16)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', zIndex: 10,
                                    transition: 'box-shadow 0.25s',
                                }}
                            >
                                <ChevronLeft style={{ width: 18, height: 18, color: 'var(--navy)' }} />
                            </motion.button>

                            {/* Next button */}
                            <motion.button
                                onClick={scrollNext}
                                whileHover={{ scale: 1.08, boxShadow: '0 8px 24px rgba(11,37,69,0.22)' }}
                                whileTap={{ scale: 0.94 }}
                                aria-label="Next slide"
                                style={{
                                    position: 'absolute', right: -18, top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: 40, height: 40,
                                    borderRadius: '50%',
                                    background: '#FFFFFF',
                                    border: '1.5px solid rgba(212,175,55,0.30)',
                                    boxShadow: '0 4px 16px rgba(11,37,69,0.16)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', zIndex: 10,
                                    transition: 'box-shadow 0.25s',
                                }}
                            >
                                <ChevronRight style={{ width: 18, height: 18, color: 'var(--navy)' }} />
                            </motion.button>

                            {/* Dot indicators */}
                            <div style={{
                                display: 'flex', justifyContent: 'center',
                                alignItems: 'center', gap: 10, marginTop: 20,
                            }}>
                                {carouselSlides.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => emblaApi?.scrollTo(index)}
                                        whileHover={{ scale: 1.2 }}
                                        aria-label={`Go to slide ${index + 1}`}
                                        style={{
                                            height: 8,
                                            width: selectedIndex === index ? 32 : 8,
                                            borderRadius: 100,
                                            background: selectedIndex === index
                                                ? 'linear-gradient(90deg, var(--gold), var(--gold-light))'
                                                : 'rgba(11,37,69,0.18)',
                                            border: 'none', cursor: 'pointer',
                                            padding: 0, transition: 'width 0.35s ease, background 0.35s ease',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* ── Bottom section divider ───────────────────────── */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(212,175,55,0.20), transparent)',
            }} />
        </section>
    )
}

export default AboutSection
