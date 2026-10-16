'use client'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, Newspaper } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { BIOGRAPHY } from '@/data/profile'

// ─── Content ─────────────────────────────────────────────────────────
const carouselSlides = [
    {
        id: 1,
        title: 'Innovation in Language Learning and Teaching',
        role: 'ASSOCIATE EDITOR',
        leftGradient: '#13335D',
        rightGradient: '#0B2545',
    },
    {
        id: 2,
        title: 'Research in Educational Innovation',
        role: 'EDITOR',
        leftGradient: '#0F2F56',
        rightGradient: '#0B2545',
    },
    {
        id: 3,
        title: 'Sustainable Development in Education',
        role: 'ASSOCIATE EDITOR',
        leftGradient: '#0F7A5A',
        rightGradient: '#0B2545',
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
        [Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            // Respect users who ask for reduced motion: no auto-advancing slides.
            playOnInit: typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        })]
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
            aria-label="About Baburam Timsina"
            style={{
                position: 'relative',
                    // padding: 'var(--section-y) 0',
                    padding: '24px 0 var(--section-y)',
                background: 'var(--off-white)',
                overflow: 'hidden',
            }}
        >
            {/* ── Section Divider ─────────────────────────────── */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'var(--line)',
            }} />


            {/* ── Container ───────────────────────────────────── */}
            <div style={{
                position: 'relative', zIndex: 10,
                width: '100%', maxWidth: 1200,
                margin: '0 auto',
                padding: '0 clamp(20px, 5vw, 56px)',
            }}>

                {/* ── Section Header ──────────────────────────── */}
             

                {/* ── Two-column grid ─────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                        gap: 'clamp(24px, 3vw, 40px)',
                        alignItems: 'start',
                    }}
                >

                    {/* ── LEFT: Bio Card ──────────────────────── */}
                    <motion.div variants={fadeInUp}>
                        <motion.div
                            whileHover={{ boxShadow: '0 8px 24px -10px rgba(15,27,45,0.18)' }}
                            transition={{ duration: 0.35 }}
                            style={{
                                position: 'relative',
                                background: '#FFFFFF',
                                borderRadius: 12,
                                border: '1px solid var(--line)',
                                boxShadow: '0 1px 2px 0 rgba(15,27,45,0.05)',
                                padding: 'clamp(18px, 2.5vw, 24px)',
                                overflow: 'hidden',
                                transition: 'box-shadow 0.35s',
                            }}
                        >


                            {/* Icon label */}
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16,
                            }}>
                                <div style={{
                                    width: 38, height: 38, borderRadius: 12,
                                    background: 'rgba(11,37,69,0.05)',
                                    border: '1px solid var(--line)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <BookOpen style={{ width: 16, height: 16, color: 'var(--green)' }} />
                                </div>
                                <span style={{
                                    fontSize: 'clamp(14px, 1.6vw, 16px)',
                                    lineHeight: 1.7,
                                    color: 'var(--ink-soft)',
                                    margin: 0,
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-app)',
                                    letterSpacing: '0',
                                }}>
                                    Biography
                                </span>
                            </div>

                            {/* Heading */}
                            <h3
                                style={{
                                    fontSize: 'clamp(22px, 3vw, 30px)',
                                    fontWeight: 700,
                                    color: 'var(--ink)',
                                    lineHeight: 1.2,
                                    letterSpacing: 'var(--tracking-heading)',
                                    marginBottom: 16,
                                    fontFamily: 'var(--font-heading)',
                                }}
                            >
                                About{' '}
                                Timsina
                            </h3>

<div className="mb-5 border-l-2 border-border pl-5">
                              <p className="m-0 text-base leading-relaxed text-[color:var(--ink-soft)] text-justify">
                                {BIOGRAPHY}
                              </p>
                            </div>

                            {/* CTA Button */}
                           <div
    style={{
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: 16,
    }}
>
    <motion.a
        href="https://www.linkedin.com/in/baburam-timsina-9a0b169b/"
        target="_blank"
        rel="noopener noreferrer"
        
        // whileTap={{ scale: 0.97 }}
        // transition={{ duration: 0.25 }}
        // style={{
        //     display: 'inline-flex',
        //     alignItems: 'center',
        //     gap: 8,
        //     padding: '11px 24px',
        //     borderRadius: 100,
        //     background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
        //     border: '1px solid var(--line)',
        //     color: 'white',
        //     fontSize: 13,
        //     fontWeight: 600,
        //     letterSpacing: '0.02em',
        //     textDecoration: 'none',
        //     fontFamily: 'var(--font-app)',
        //     boxShadow: '0 1px 2px 0 rgba(15,27,45,0.05)',
        //     transition: 'box-shadow 0.25s',
        // }}
                className="btn btn-outline px-6 py-3 text-sm"

    >
        More About Me
        <ChevronRight style={{ width: 15, height: 15, opacity: 0.8 }} />
    </motion.a>
</div>
                        </motion.div>
                    </motion.div>

                  
                </motion.div>
            </div>

        </section>
    )
}

export default AboutSection
