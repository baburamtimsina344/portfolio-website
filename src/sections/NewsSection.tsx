"use client";

import { motion } from "framer-motion";
import {ArrowRight, ChevronLeft, ChevronRight, Newspaper } from "lucide-react";
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
                padding: 'clamp(72px, 10vw, 120px) 0',
                background: 'var(--off-white)',
                overflow: 'hidden',
            }}
        >
            {/* ── Top divider ──────────────────────────────────── */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(0,184,148,0.30), rgba(11,37,69,0.12), transparent)',
            }} />

            {/* ── Background Orbs ──────────────────────────────── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{
                    position: 'absolute', top: '-10%', right: '-10%',
                    width: 560, height: 560, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,184,148,0.07) 0%, rgba(26,64,128,0.04) 50%, transparent 75%)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-15%', left: '-10%',
                    width: 640, height: 640, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(11,37,69,0.06) 0%, rgba(26,92,184,0.03) 50%, transparent 70%)',
                }} />
                {/* Dot grid */}
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.022,
                    backgroundImage: 'radial-gradient(circle, #0B2545 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                }} />
            </div>

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
                    style={{ marginBottom: 64, textAlign: 'center' }}
                >
                    {/* Eyebrow pill */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 10,
                        marginBottom: 20,
                        padding: '7px 20px',
                        borderRadius: 100,
                        background: 'rgba(0,184,148,0.08)',
                        border: '1px solid rgba(0,184,148,0.22)',
                    }}>
                        <Newspaper style={{ width: 12, height: 12, color: 'var(--green)' }} />
                        <span style={{
                            fontSize: 10.5, fontWeight: 700,
                            letterSpacing: '0.22em', textTransform: 'uppercase',
                            color: 'var(--navy)', fontFamily: 'var(--font-app)',
                        }}>
                            Research
                        </span>
                        <Newspaper style={{ width: 12, height: 12, color: 'var(--green)' }} />
                    </div>

                    {/* Main heading */}
                    <h2 style={{
                        fontSize: 'clamp(30px, 4.5vw, 48px)',
                        fontWeight: 700,
                        letterSpacing: 'var(--tracking-normal)',
                        lineHeight: 1.1,
                        color: 'var(--navy)',
                        margin: 0,
                        fontFamily: 'var(--font-app)',
                    }}>
                      Core  Research Areas
                        <span style={{
                            background: 'linear-gradient(90deg, var(--green) 0%, var(--green-light) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                        </span>
                         {/* Research Areas */}
                    </h2>

                    {/* Green rule */}
                    <div style={{
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', gap: 12, marginTop: 22,
                    }}>
                        <div style={{ height: 1, width: 64, background: 'linear-gradient(to right, transparent, rgba(0,184,148,0.50))' }} />
                        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--green)', opacity: 0.7 }} />
                        <div style={{ height: 1, width: 64, background: 'linear-gradient(to left, transparent, rgba(0,184,148,0.50))' }} />
                    </div>
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
                        style={{ overflow: 'hidden', borderRadius: 24 }}
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
                                        whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(11,37,69,0.16)' }}
                                        transition={{ duration: 0.32 }}
                                        style={{
                                            position: 'relative',
                                            height: '100%',
                                            display: 'flex', flexDirection: 'column',
                                            background: '#FFFFFF',
                                            borderRadius: 20,
                                            border: '1.5px solid rgba(11,37,69,0.08)',
                                            boxShadow: '0 4px 20px rgba(11,37,69,0.08)',
                                            padding: 'clamp(20px, 3vw, 28px)',
                                            overflow: 'hidden',
                                            transition: 'box-shadow 0.32s',
                                        }}
                                    >
                                        {/* Green top accent line */}
                                        <div style={{
                                            position: 'absolute', top: 0, left: 0, right: 0,
                                            height: 3,
                                            background: 'linear-gradient(90deg, var(--green), rgba(0,184,148,0.20), transparent)',
                                            borderRadius: '20px 20px 0 0',
                                            opacity: 0,
                                            transition: 'opacity 0.32s',
                                        }}
                                            className="card-top-bar"
                                        />

                                        {/* Navy left accent bar */}
                                        <div style={{
                                            position: 'absolute', top: 0, left: 0,
                                            width: 4, height: 56,
                                            background: 'linear-gradient(to bottom, var(--navy), rgba(11,37,69,0.08))',
                                            borderRadius: '20px 0 0 0',
                                        }} />

                                        {/* Hover glow overlay */}
                                        <div style={{
                                            position: 'absolute', inset: 0, borderRadius: 20,
                                            background: 'linear-gradient(135deg, rgba(0,184,148,0.04) 0%, transparent 60%)',
                                            opacity: 0, transition: 'opacity 0.32s',
                                            pointerEvents: 'none',
                                        }}
                                            className="card-hover-glow"
                                        />

                                        {/* ── Card content ─────────────── */}
                                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>

                                            {/* Tags + Date row */}
                                            <div style={{
                                                display: 'flex', flexWrap: 'wrap',
                                                alignItems: 'center', gap: 8,
                                                marginBottom: 16,
                                            }}>
                                                {item.featured && (
                                                    <span style={{
                                                        padding: '4px 12px',
                                                        fontSize: 9.5, fontWeight: 700,
                                                        letterSpacing: '0.15em', textTransform: 'uppercase',
                                                        background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                                                        color: '#FFFFFF',
                                                        borderRadius: 100,
                                                        border: '1px solid rgba(0,184,148,0.20)',
                                                        fontFamily: 'var(--font-app)',
                                                        boxShadow: '0 2px 8px rgba(11,37,69,0.22)',
                                                    }}>
                                                        Featured
                                                    </span>
                                                )}
                                                <span style={{
                                                    padding: '4px 12px',
                                                    fontSize: 9.5, fontWeight: 600,
                                                    letterSpacing: '0.12em', textTransform: 'uppercase',
                                                    background: 'rgba(0,184,148,0.09)',
                                                    color: 'var(--navy)',
                                                    borderRadius: 100,
                                                    border: '1px solid rgba(0,184,148,0.22)',
                                                    fontFamily: 'var(--font-app)',
                                                }}>
                                                    {NEWS_CATEGORY_LABELS[item.category]}
                                                </span>
                                               
                                            </div>

                                            {/* Divider */}
                                            <div style={{
                                                height: 1, marginBottom: 14,
                                                background: 'linear-gradient(to right, rgba(0,184,148,0.25), transparent)',
                                            }} />

                                            {/* Title */}
                                            <h4
                                                style={{
                                                    fontSize: 'clamp(16px, 2vw, 19px)',
                                                    fontWeight: 700,
                                                    color: 'var(--navy)',
                                                    lineHeight: 1.35,
                                                    letterSpacing: 'var(--tracking-normal)',
                                                    marginBottom: 12,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    transition: 'color 0.25s',
                                                    fontFamily: 'var(--font-app)',
                                                }}
                                            >
                                                {item.title}
                                            </h4>

                                            {/* Excerpt */}
                                            <p style={{
                                                fontSize: 'clamp(14px, 1.6vw, 16px)',
                                                lineHeight: 1.8,
                                                color: 'var(--text-secondary)',
                                                margin: 0,
                                                fontWeight: 500,
                                                fontFamily: 'var(--font-app)',
                                                letterSpacing: '0.3px',
                                                textAlign: 'justify',
                                            }}>
                                                {item.excerpt}
                                            </p>

                                            {/* Read More */}
                                            <div style={{
                                                marginTop: 'auto',
                                                paddingTop: 16,
                                                borderTop: '1px solid rgba(11,37,69,0.07)',
                                            }}>
                                                <motion.a
                                                    href={item.link || '#'}
                                                    whileHover={{ x: 4 }}
                                                    transition={{ duration: 0.22 }}
                                                    style={{
                                                        display: 'inline-flex', alignItems: 'center', gap: 6,
                                                        fontSize: 12, fontWeight: 700,
                                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                                        color: 'var(--navy)',
                                                        textDecoration: 'none',
                                                        fontFamily: 'var(--font-app)',
                                                        borderBottom: '1.5px solid rgba(0,184,148,0.40)',
                                                        paddingBottom: 2,
                                                        transition: 'color 0.22s, border-color 0.22s',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        (e.currentTarget as HTMLElement).style.color = 'var(--green)'
                                                        ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--green)'
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        (e.currentTarget as HTMLElement).style.color = 'var(--navy)'
                                                        ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(0,184,148,0.40)'
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
                        whileHover={{ scale: 1.10, boxShadow: '0 8px 28px rgba(11,37,69,0.20)' }}
                        whileTap={{ scale: 0.93 }}
                        aria-label="Previous news"
                        style={{
                            position: 'absolute', left: -20, top: '50%',
                            transform: 'translateY(-50%)',
                            width: 44, height: 44, borderRadius: '50%',
                            background: '#FFFFFF',
                            border: '1.5px solid rgba(0,184,148,0.28)',
                            boxShadow: '0 4px 16px rgba(11,37,69,0.14)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', zIndex: 10, padding: 0,
                            transition: 'box-shadow 0.25s',
                        }}
                    >
                        <ChevronLeft style={{ width: 20, height: 20, color: 'var(--navy)' }} />
                    </motion.button>

                    {/* ── Nav: Next ───────────────────────────── */}
                    <motion.button
                        onClick={scrollNext}
                        whileHover={{ scale: 1.10, boxShadow: '0 8px 28px rgba(11,37,69,0.20)' }}
                        whileTap={{ scale: 0.93 }}
                        aria-label="Next news"
                        style={{
                            position: 'absolute', right: -20, top: '50%',
                            transform: 'translateY(-50%)',
                            width: 44, height: 44, borderRadius: '50%',
                            background: '#FFFFFF',
                            border: '1.5px solid rgba(0,184,148,0.28)',
                            boxShadow: '0 4px 16px rgba(11,37,69,0.14)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', zIndex: 10, padding: 0,
                            transition: 'box-shadow 0.25s',
                        }}
                    >
                        <ChevronRight style={{ width: 20, height: 20, color: 'var(--navy)' }} />
                    </motion.button>

                    {/* ── Dot Indicators ──────────────────────── */}
                    <div style={{
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'center', gap: 10, marginTop: 36,
                    }}>
                        {emblaApi &&
                            emblaApi.scrollSnapList().map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => emblaApi.scrollTo(index)}
                                    whileHover={{ scale: 1.2 }}
                                    aria-label={`Go to slide group ${index + 1}`}
                                    style={{
                                        height: 8,
                                        width: index === selectedIndex ? 32 : 8,
                                        borderRadius: 100,
                                        background: index === selectedIndex
                                            ? 'linear-gradient(90deg, var(--green), var(--green-light))'
                                            : 'rgba(11,37,69,0.18)',
                                        border: 'none', cursor: 'pointer', padding: 0,
                                        transition: 'width 0.35s ease, background 0.35s ease',
                                        boxShadow: index === selectedIndex
                                            ? '0 2px 8px rgba(0,184,148,0.35)'
                                            : 'none',
                                    }}
                                />
                            ))}
                    </div>
                </motion.div>
            </div>

            {/* ── Bottom divider ───────────────────────────────── */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(0,184,148,0.20), transparent)',
            }} />

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
