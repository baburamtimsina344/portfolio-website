"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { NEWS_ITEMS, NEWS_CATEGORY_LABELS } from "@/data/news";
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect, useRef } from 'react';

export function NewsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 },
        }
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const featured = NEWS_ITEMS.filter((n) => n.featured);
    const regularNews = NEWS_ITEMS.filter((n) => !n.featured);
    const allNews = [...featured, ...regularNews];

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    const startAutoplay = useCallback(() => {
        if (!emblaApi) return;
        // Respect users who ask for reduced motion: no auto-advancing slides.
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
            if (emblaApi) emblaApi.scrollNext();
        }, 3000);
    }, [emblaApi]);

    const stopAutoplay = useCallback(() => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        startAutoplay();
        return () => stopAutoplay();
    }, [emblaApi, startAutoplay, stopAutoplay]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => { emblaApi.off('select', onSelect); };
    }, [emblaApi, onSelect]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section
            id="news"
            aria-label="News and Events"
            style={{
                position: 'relative',
                    // padding: 'var(--section-y) 0',
                    // padding: '40px 0 var(--section-y)',
                    padding: '20px 0 40px',
                background: 'var(--off-white)',
                overflow: 'hidden',
            }}
        >
            {/* ── Top divider ──────────────────────────────────── */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'var(--line)',
            }} />


            {/* ── Container ────────────────────────────────────── */}
            <div style={{
                position: 'relative', zIndex: 10,
                width: '100%', maxWidth: 1200,
                margin: '0 auto',
                padding: '0 clamp(20px, 5vw, 56px)',
            }}>

                {/* ── Section Header ───────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    style={{ marginBottom: 32, textAlign: 'center' }}
                >
                    {/* Section label */}
                    <div style={{ marginBottom: 10 }}>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: 'var(--green)',
                          fontFamily: 'var(--font-app)',
                        }}
                      >
                        Research
                      </span>
                    </div>

                    {/* Main heading */}
                    <h2 style={{
                        fontSize: 'clamp(30px, 4.5vw, 48px)',
                        fontWeight: 700,
                        letterSpacing: 'var(--tracking-display)',
                        lineHeight: 1.1,
                        color: 'var(--ink)',
                        margin: 0,
                        fontFamily: 'var(--font-heading)',
                    }}>
                      Core  Research Areas
                        
                         {/* Research Areas */}
                    </h2>

                </motion.div>

                {/* ── Carousel ─────────────────────────────────── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    style={{ position: 'relative' }}
                    onMouseEnter={stopAutoplay}
                    onMouseLeave={startAutoplay}
                >
                    {/* Track */}
                    <div
                        ref={emblaRef}
                        style={{ overflow: 'hidden', borderRadius: 12 }}
                    >
                        <div style={{ display: 'flex' }}>
                            {allNews.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    style={{
                                        flex: '0 0 100%', minWidth: 0,
                                        padding: '0 10px',
                                    }}
                                    className="news-slide"
                                >
                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ boxShadow: '0 8px 24px -10px rgba(15,27,45,0.18)' }}
                                        transition={{ duration: 0.32 }}
                                        style={{
                                            position: 'relative',
                                            height: '100%',
                                            display: 'flex', flexDirection: 'column',
                                            background: '#FFFFFF',
                                            borderRadius: 12,
                                            border: '1px solid var(--line)',
                                            boxShadow: '0 1px 2px 0 rgba(15,27,45,0.05)',
                                            padding: 'clamp(18px, 2.5vw, 24px)',
                                            overflow: 'hidden',
                                            transition: 'box-shadow 0.32s',
                                        }}
                                    >



                                        {/* ── Card content ─────────────── */}
                                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>

                                            {/* Tags + Date row */}
                                            <div style={{
                                                display: 'flex', flexWrap: 'wrap',
                                                alignItems: 'center', gap: 8,
                                                marginBottom: 12,
                                            }}>
                                                {item.featured && (
                                                    <span style={{
                                                        padding: '4px 12px',
                                                        fontSize: 13, fontWeight: 600,
                                                        letterSpacing: '0',
                                                        background: 'var(--navy)',
                                                        color: '#FFFFFF',
                                                        borderRadius: 100,
                                                        border: '1px solid var(--line)',
                                                        fontFamily: 'var(--font-app)',
                                                        boxShadow: '0 1px 2px 0 rgba(15,27,45,0.05)',
                                                    }}>
                                                        Featured
                                                    </span>
                                                )}
                                                <span style={{
                                                    padding: '4px 12px',
                                                    fontSize: 13, fontWeight: 600,
                                                    letterSpacing: '0',
                                                    background: 'rgba(15,122,90,0.09)',
                                                    color: 'var(--ink)',
                                                    borderRadius: 100,
                                                    border: '1px solid var(--line)',
                                                    fontFamily: 'var(--font-app)',
                                                }}>
                                                    {NEWS_CATEGORY_LABELS[item.category]}
                                                </span>
                                               
                                            </div>

                                            {/* Divider */}
                                            <div style={{
                                                height: 1, marginBottom: 12,
                                                background: 'var(--line)',
                                            }} />

                                            {/* Title */}
                                            <h4
                                                style={{
                                                    fontSize: 'clamp(16px, 2vw, 19px)',
                                                    fontWeight: 700,
                                                    color: 'var(--ink)',
                                                    lineHeight: 1.35,
                                                    letterSpacing: 'var(--tracking-heading)',
                                                    marginBottom: 10,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    transition: 'color 0.25s',
                                                    fontFamily: 'var(--font-heading)',
                                                }}
                                            >
                                                {item.title}
                                            </h4>

                                            {/* Excerpt */}
                                            <p style={{
                                                fontSize: 'clamp(14px, 1.6vw, 16px)',
                                                lineHeight: 1.7,
                                                color: 'var(--ink-soft)',
                                                margin: 0,
                                                fontWeight: 400,
                                                fontFamily: 'var(--font-app)',
                                                letterSpacing: '0',
                                            }}>
                                                {item.excerpt}
                                            </p>

                                            {/* Read More */}
                                            <div style={{
                                                marginTop: 'auto',
                                                paddingTop: 12,
                                                borderTop: '1px solid var(--line)',
                                            }}>
                                                <motion.a
                                                    href={item.link || '#'}
                                                    whileHover={{ x: 4 }}
                                                    transition={{ duration: 0.22 }}
                                                    style={{
                                                        display: 'inline-flex', alignItems: 'center', gap: 6,
                                                        fontSize: 13, fontWeight: 600,
                                                        letterSpacing: '0',
                                                        color: 'var(--ink)',
                                                        textDecoration: 'none',
                                                        fontFamily: 'var(--font-app)',
                                                        borderBottom: '1px solid var(--line)',
                                                        paddingBottom: 2,
                                                        transition: 'color 0.22s, border-color 0.22s',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        (e.currentTarget as HTMLElement).style.color = 'var(--green)'
                                                        ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--green)'
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        (e.currentTarget as HTMLElement).style.color = 'var(--navy)'
                                                        ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(15,122,90,0.40)'
                                                    }}
                                                >
                                                    Read More
                                                    <ArrowRight style={{ width: 13, height: 13 }} />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ── Nav: Prev ───────────────────────────── */}
                    <motion.button
                        onClick={scrollPrev}
                        whileHover={{ boxShadow: '0 4px 14px -6px rgba(15,27,45,0.25)' }}
                        whileTap={{ scale: 0.93 }}
                        aria-label="Previous news" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F7A5A]"
                        style={{
                            position: 'absolute', left: -20, top: '50%',
                            transform: 'translateY(-50%)',
                            width: 44, height: 44, borderRadius: '50%',
                            background: '#FFFFFF',
                            border: '1px solid var(--line-strong)',
                            boxShadow: '0 1px 2px 0 rgba(15,27,45,0.05)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', zIndex: 10, padding: 0,
                            transition: 'box-shadow 0.25s',
                        }}
                    >
                        <ChevronLeft style={{ width: 20, height: 20, color: 'var(--ink)' }} />
                    </motion.button>

                    {/* ── Nav: Next ───────────────────────────── */}
                    <motion.button
                        onClick={scrollNext}
                        whileHover={{ boxShadow: '0 4px 14px -6px rgba(15,27,45,0.25)' }}
                        whileTap={{ scale: 0.93 }}
                        aria-label="Next news" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F7A5A]"
                        style={{
                            position: 'absolute', right: -20, top: '50%',
                            transform: 'translateY(-50%)',
                            width: 44, height: 44, borderRadius: '50%',
                            background: '#FFFFFF',
                            border: '1px solid var(--line-strong)',
                            boxShadow: '0 1px 2px 0 rgba(15,27,45,0.05)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', zIndex: 10, padding: 0,
                            transition: 'box-shadow 0.25s',
                        }}
                    >
                        <ChevronRight style={{ width: 20, height: 20, color: 'var(--ink)' }} />
                    </motion.button>

                    {/* ── Dot Indicators ──────────────────────── */}
                    <div style={{
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'center', gap: 10, marginTop: 24,
                    }}>
                        {emblaApi &&
                            emblaApi.scrollSnapList().map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => emblaApi.scrollTo(index)}
                                    whileHover={{ scale: 1.2 }}
                                    aria-label={`Go to slide group ${index + 1}`}
                                    className="relative after:absolute after:-inset-4 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F7A5A]"
                                    style={{
                                        height: 8,
                                        width: index === selectedIndex ? 32 : 8,
                                        borderRadius: 100,
                                        background: index === selectedIndex
                                            ? 'var(--green)'
                                            : 'rgba(11,37,69,0.18)',
                                        border: 'none', cursor: 'pointer', padding: 0,
                                        transition: 'width 0.35s ease, background 0.35s ease',
                                        boxShadow: 'none',
                                    }}
                                />
                            ))}
                    </div>
                </motion.div>
            </div>


            {/* ── Responsive slide widths ──────────────────────── */}
            <style>{`
                .news-slide {
                    flex: 0 0 100%;
                }
                @media (min-width: 768px) {
                    .news-slide { flex: 0 0 50%; }
                }
                @media (min-width: 1024px) {
                    .news-slide { flex: 0 0 33.333%; }
                }
            `}</style>
        </section>
    );
}
