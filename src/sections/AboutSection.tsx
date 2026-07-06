'use client'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, Newspaper } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// ─── Content ─────────────────────────────────────────────────────────
const BIOGRAPHY =
    "Advancing scholarship through research, leadership, and academic service, I am committed to fostering transformative learning and evidence-based practices in higher education.Based in Kathmandu, Nepal, I serve as Scholar and Educator at Tribhuvan University while pursuing doctoral research in higher education and leadership. My scholarly work explores the intersection of higher education, leadership, organizational behavior, governance, and corporate social responsibility, particularly within emerging economies.My research investigates how educational institutions, governance structures, service quality, ethical practices, and leadership approaches influence organizational effectiveness and individual decision-making. Through interdisciplinary and collaborative scholarship, I seek to contribute to the development of responsive, inclusive, and sustainable educational systems.Beyond research and teaching, I actively contribute to the academic community through editorial leadership, peer review, and scholarly networking. I currently serve as Chair of the Journal Management Committee (JMC) at MSSRNPRESS.ORG and as an editorial board member of several peer-reviewed journals.My broader academic mission is to bridge research, policy, and practice to strengthen higher education systems and promote impactful scholarship at both national and international levels."

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
        leftGradient: 'linear-gradient(135deg, #00B894 0%, #00856A 100%)', // Changed to green shades
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
            aria-label="About Baburam Timsina"
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
                background: 'linear-gradient(90deg, transparent, rgba(0,184,148,0.30), rgba(11,37,69,0.12), transparent)',
            }} />

            {/* ── Background Orbs ─────────────────────────────── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{
                    position: 'absolute', top: '-15%', right: '-15%',
                    width: 600, height: 600, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,184,148,0.07) 0%, rgba(26,64,128,0.05) 50%, transparent 75%)',
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
                                border: '1.5px solid rgba(0,184,148,0.15)',
                                boxShadow: '0 8px 32px rgba(11,37,69,0.09), 0 2px 8px rgba(11,37,69,0.05)',
                                padding: 'clamp(28px, 4vw, 44px)',
                                overflow: 'hidden',
                                transition: 'box-shadow 0.35s',
                            }}
                        >
                            {/* Green left accent bar */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0,
                                width: 4, height: 96,
                                background: 'linear-gradient(to bottom, var(--green), rgba(0,184,148,0.10))',
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
                                    background: 'linear-gradient(135deg, rgba(0,184,148,0.14), rgba(0,184,148,0.05))',
                                    border: '1px solid rgba(0,184,148,0.22)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <BookOpen style={{ width: 16, height: 16, color: 'var(--green)' }} />
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
                                style={{
                                    fontSize: 'clamp(22px, 3vw, 30px)',
                                    fontWeight: 700,
                                    color: 'var(--navy)',
                                    lineHeight: 1.2,
                                    letterSpacing: '-0.02em',
                                    marginBottom: 20,
                                    fontFamily: 'Inter, sans-serif',
                                }}
                            >
                                About{' '}
                                <span style={{
                                    background: 'linear-gradient(90deg, var(--green), var(--green-light))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>
                                    Timsina
                                </span>
                            </h3>

                            {/* Bio text */}
                            {/* <div style={{
                                borderLeft: '2.5px solid rgba(0,184,148,0.30)',
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
                                }}> */}

                          <div className="
  border-l-[2.5px] border-green-400/30 
  pl-5 mb-7 
  transition-all duration-300 
  hover:border-green-500/60 hover:pl-6
">
  <p className="
    text-[clamp(12px,1.2vw,14px)] 
    leading-relaxed 
    text-slate-700 
    font-medium 
    tracking-[0.2px] 
    text-justify 
    m-0
  ">
    {BIOGRAPHY}
  </p>
</div>
                                  

                            {/* Research Interest Tags */}
                            {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                                {RESEARCH_INTERESTS.map((interest) => (
                                    <motion.span
                                        key={interest}
                                        whileHover={{ y: -2, backgroundColor: 'rgba(0,184,148,0.14)' }}
                                        transition={{ duration: 0.2 }}
                                        style={{
                                            padding: '5px 14px',
                                            borderRadius: 100,
                                            fontSize: 11.5, fontWeight: 500,
                                            fontFamily: 'Inter, sans-serif',
                                            color: 'var(--navy)',
                                            background: 'rgba(0,184,148,0.08)',
                                            border: '1px solid rgba(0,184,148,0.22)',
                                            cursor: 'default',
                                            transition: 'background 0.2s',
                                            display: 'inline-block',
                                        }}
                                    >
                                        {interest}
                                    </motion.span>
                                ))}
                            </div> */}

                            {/* CTA Button */}
                           <div
    style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20, // optional
    }}
>
    <motion.a
        href="https://www.linkedin.com/in/baburam-timsina-9a0b169b/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(11,37,69,0.28)' }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25 }}
        style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '11px 24px',
            borderRadius: 100,
            background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
            border: '1px solid rgba(0,184,148,0.22)',
            color: '#FFFFFF',
            fontSize: 13,
            fontWeight: 600,
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
</div>
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
                            {/* Green top accent bar */}
                            <div style={{
                                position: 'absolute', top: 0, left: 32, right: 32, height: 3,
                                background: 'linear-gradient(90deg, transparent, var(--green), rgba(0,184,148,0.20), transparent)',
                                borderRadius: '0 0 4px 4px',
                            }} />

                            {/* News badge */}
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                marginBottom: 18,
                                padding: '6px 14px',
                                borderRadius: 100,
                                background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                                border: '1px solid rgba(0,184,148,0.20)',
                                boxShadow: '0 3px 12px rgba(11,37,69,0.22)',
                            }}>
                                <Newspaper style={{ width: 12, height: 12, color: 'var(--green)' }} />
                                <span style={{
                                    fontSize: 9.5, fontWeight: 700,
                                    letterSpacing: '0.20em', textTransform: 'uppercase',
                                    color: '#FFFFFF', fontFamily: 'Inter, sans-serif',
                                }}>
                                    Latest News
                                </span>
                            </div>

                            <h3
                                style={{
                                    fontSize: 'clamp(17px, 2.2vw, 22px)',
                                    fontWeight: 700,
                                    color: 'var(--navy)',
                                    lineHeight: 1.3,
                                    letterSpacing: '-0.01em',
                                    marginBottom: 14,
                                    fontFamily: 'Inter, sans-serif',
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
                                Timsina delivered a keynote presentation on sustainable
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
                                        borderBottom: '1.5px solid rgba(0,184,148,0.45)',
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
                                                        style={{
                                                            color: '#FFFFFF',
                                                            fontSize: 'clamp(14px, 2vw, 18px)',
                                                            fontWeight: 700,
                                                            lineHeight: 1.35,
                                                            textAlign: 'center',
                                                            textShadow: '0 2px 8px rgba(0,0,0,0.30)',
                                                            position: 'relative', zIndex: 1,
                                                            fontFamily: 'Inter, sans-serif',
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
                                                    {/* Green accent icon */}
                                                    <div style={{
                                                        width: 40, height: 40, borderRadius: 12,
                                                        background: 'rgba(0,184,148,0.15)',
                                                        border: '1px solid rgba(0,184,148,0.30)',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    }}>
                                                        <Sparkles style={{ width: 18, height: 18, color: 'var(--green)' }} />
                                                    </div>
                                                    <div style={{ textAlign: 'center' }}>
                                                        <p style={{
                                                            fontSize: 9, fontWeight: 700,
                                                            letterSpacing: '0.22em', textTransform: 'uppercase',
                                                            color: 'rgba(0,184,148,0.70)',
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
                                    border: '1.5px solid rgba(0,184,148,0.30)',
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
                                    border: '1.5px solid rgba(0,184,148,0.30)',
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
                                                ? 'linear-gradient(90deg, var(--green), var(--green-light))'
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
                background: 'linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(0,184,148,0.20), transparent)',
            }} />
        </section>
    )
}

export default AboutSection
