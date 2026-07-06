// "use client";

// import { useMemo, useState, useCallback, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   ExternalLink,
//   Quote,
//   Calendar,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   BookMarked,
//   Lock,
//   Unlock,
// } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import useEmblaCarousel from "embla-carousel-react";
// import { supabase } from "../lib/supabase";

// // ─── Types ────────────────────────────────────────────────────────────
// interface Publication {
//   id: string;
//   title: string;
//   authors: string;
//   journal: string;
//   year: number;
//   open_access: boolean;
//   citations?: number;
//   doi?: string;
// }

// // ─── Dataset ──────────────────────────────────────────────────────────

// const ITEMS_PER_SLIDE = 3;

// // ─── Publication Card (green-accented) ──────────────────────────────
// function PublicationCard({
//     pub,
//     onSelect,
// }: {
//     pub: Publication;
//     onSelect: (pub: Publication) => void;
// }) {
//     return (
//         <motion.div
//             whileHover={{ y: -6, boxShadow: '0 24px 64px rgba(11,37,69,0.14), 0 8px 24px rgba(0,184,148,0.08)' }}
//             transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//             onClick={() => onSelect(pub)}
//             style={{
//                 position: 'relative',
//                 height: '100%',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 background: '#FFFFFF',
//                 borderRadius: 20,
//                 border: '1.5px solid rgba(11,37,69,0.06)',
//                 boxShadow: '0 4px 20px rgba(11,37,69,0.06)',
//                 padding: 'clamp(20px, 2.5vw, 28px)',
//                 overflow: 'hidden',
//                 cursor: 'pointer',
//                 transition: 'box-shadow 0.35s, border-color 0.35s',
//             }}
//         >
//             {/* Left green accent bar */}
//             <div style={{
//                 position: 'absolute', top: 0, left: 0,
//                 width: 4, height: 64,
//                 background: 'linear-gradient(to bottom, var(--green), rgba(0,184,148,0.08))',
//                 borderRadius: '20px 0 0 0',
//             }} />

//             {/* Green top accent line (hover reveal) */}
//             <div style={{
//                 position: 'absolute', top: 0, left: 0, right: 0,
//                 height: 3,
//                 background: 'linear-gradient(90deg, var(--green), rgba(0,184,148,0.15), transparent)',
//                 borderRadius: '20px 20px 0 0',
//                 opacity: 0,
//                 transition: 'opacity 0.35s',
//             }} className="pub-top-bar" />

//             {/* Hover glow */}
//             <div style={{
//                 position: 'absolute', inset: 0, borderRadius: 20,
//                 background: 'radial-gradient(circle at top left, rgba(0,184,148,0.06) 0%, transparent 70%)',
//                 opacity: 0,
//                 transition: 'opacity 0.35s',
//                 pointerEvents: 'none',
//             }} className="pub-hover-glow" />

//             {/* Content */}
//             <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>

//                 {/* Year + Badges row */}
//                 <div style={{
//                     display: 'flex', flexWrap: 'wrap',
//                     alignItems: 'center', gap: 8,
//                     marginBottom: 16,
//                 }}>
//                     <span style={{
//                         display: 'inline-flex', alignItems: 'center', gap: 5,
//                         fontSize: 11.5, fontWeight: 500,
//                         color: 'var(--gray-400)',
//                         fontFamily: 'Inter, sans-serif',
//                     }}>
//                         <Calendar style={{ width: 12, height: 12, color: 'var(--green)' }} />
//                         {pub.year}
//                     </span>

//                     {pub.open_access ? (
//             <span style={{
//               marginLeft: 'auto',
//               display: 'inline-flex', alignItems: 'center', gap: 5,
//               padding: '3px 10px',
//               borderRadius: 100,
//               fontSize: 9.5, fontWeight: 700,
//               letterSpacing: '0.12em', textTransform: 'uppercase',
//               background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
//               color: '#FFFFFF',
//               border: '1px solid rgba(0,184,148,0.30)',
//               fontFamily: 'Inter, sans-serif',
//               boxShadow: '0 2px 8px rgba(11,37,69,0.20)',
//             }}>
//               <Unlock style={{ width: 9, height: 9, color: 'var(--green)' }} />
//               Open Access
//             </span>
//           ) : (
//             <span style={{
//               marginLeft: 'auto',
//               display: 'inline-flex', alignItems: 'center', gap: 5,
//               padding: '3px 10px',
//               borderRadius: 100,
//               fontSize: 9.5, fontWeight: 600,
//               letterSpacing: '0.10em', textTransform: 'uppercase',
//               background: 'rgba(11,37,69,0.05)',
//               color: 'var(--gray-600)',
//               border: '1px solid rgba(11,37,69,0.10)',
//               fontFamily: 'Inter, sans-serif',
//             }}>
//               <Lock style={{ width: 9, height: 9 }} />
//               Subscription
//             </span>
//           )}

//                     {pub.citations !== undefined && (
//                         <span style={{
//                             display: 'inline-flex', alignItems: 'center', gap: 5,
//                             padding: '3px 10px',
//                             borderRadius: 100,
//                             fontSize: 9.5, fontWeight: 600,
//                             background: 'rgba(0,184,148,0.08)',
//                             color: 'var(--navy)',
//                             border: '1px solid rgba(0,184,148,0.20)',
//                             fontFamily: 'Inter, sans-serif',
//                         }}>
//                             <Quote style={{ width: 9, height: 9, color: 'var(--green)' }} />
//                             {pub.citations} cited
//                         </span>
//                     )}
//                 </div>

//                 {/* Divider */}
//                 <div style={{
//                     height: 1, marginBottom: 14,
//                     background: 'linear-gradient(to right, rgba(0,184,148,0.25), transparent)',
//                 }} />

//                 {/* Title */}
//                 <h3 style={{
//                     fontSize: 'clamp(15px, 1.8vw, 18px)',
//                     fontWeight: 700,
//                     color: 'var(--navy)',
//                     lineHeight: 1.38,
//                     letterSpacing: '-0.01em',
//                     marginBottom: 12,
//                     display: '-webkit-box',
//                     WebkitLineClamp: 3,
//                     WebkitBoxOrient: 'vertical',
//                     overflow: 'hidden',
//                     transition: 'color 0.25s',
//                     fontFamily: 'Inter, sans-serif',
//                 }}>
//                     {pub.title}
//                 </h3>

//                 {/* Authors */}
//                 <p style={{
//                     fontSize: 'clamp(13px, 1.2vw, 14px)',
//                     lineHeight: 1.6,
//                     color: 'var(--gray-600)',
//                     margin: 0,
//                     fontWeight: 500,
//                     fontFamily: 'Inter, sans-serif',
//                 }}>
//                     {pub.authors}
//                 </p>

//                 {/* Journal */}
//                 <p style={{
//                     fontSize: 12.5,
//                     fontStyle: 'italic',
//                     color: 'var(--navy)',
//                     fontFamily: 'Inter, sans-serif',
//                     opacity: 0.60,
//                     marginTop: 4,
//                     marginBottom: 16,
//                     display: '-webkit-box',
//                     WebkitLineClamp: 2,
//                     WebkitBoxOrient: 'vertical',
//                     overflow: 'hidden',
//                     lineHeight: 1.5,
//                 }}>
//                     {pub.journal}
//                 </p>

//                 {/* DOI link */}
//                 {pub.doi && (
//                     <motion.a
//                         href={pub.doi.includes('.') ? `https://doi.org/${pub.doi}` : `https://www.researchgate.net/profile/Baburam-Timsina-3`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         onClick={(e) => e.stopPropagation()}
//                         whileHover={{ x: 3 }}
//                         transition={{ duration: 0.2 }}
//                         style={{
//                             display: 'inline-flex', alignItems: 'center', gap: 6,
//                             fontSize: 12, fontWeight: 600,
//                             color: 'var(--green)',
//                             textDecoration: 'none',
//                             fontFamily: 'Inter, sans-serif',
//                             opacity: 0.7,
//                             marginBottom: 4,
//                             transition: 'opacity 0.2s',
//                         }}
//                         onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '1'}
//                         onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
//                     >
//                         View Document
//                         <ExternalLink style={{ width: 12, height: 12 }} />
//                     </motion.a>
//                 )}

//                 {/* Footer: View Details */}
//                 <div style={{
//                     marginTop: 'auto',
//                     paddingTop: 16,
//                     borderTop: '1px solid rgba(11,37,69,0.06)',
//                 }}>
//                     <motion.button
//                         whileHover={{ x: 4 }}
//                         transition={{ duration: 0.22 }}
//                         onClick={(e) => { e.stopPropagation(); onSelect(pub); }}
//                         style={{
//                             display: 'inline-flex', alignItems: 'center', gap: 6,
//                             fontSize: 11.5, fontWeight: 700,
//                             letterSpacing: '0.09em', textTransform: 'uppercase',
//                             color: 'var(--navy)',
//                             background: 'none', border: 'none',
//                             padding: 0, cursor: 'pointer',
//                             fontFamily: 'Inter, sans-serif',
//                             borderBottom: '1.5px solid rgba(0,184,148,0.40)',
//                             paddingBottom: 2,
//                             transition: 'color 0.22s, border-color 0.22s',
//                         }}
//                         onMouseEnter={(e) => {
//                             (e.currentTarget as HTMLElement).style.color = 'var(--green)';
//                             (e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--green)';
//                         }}
//                         onMouseLeave={(e) => {
//                             (e.currentTarget as HTMLElement).style.color = 'var(--navy)';
//                             (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(0,184,148,0.40)';
//                         }}
//                     >
//                         View Details
//                         <ArrowRight style={{ width: 13, height: 13 }} />
//                     </motion.button>
//                 </div>
//             </div>

//             <style>{`
//                 .pub-card:hover .pub-top-bar   { opacity: 1 !important; }
//                 .pub-card:hover .pub-hover-glow { opacity: 1 !important; }
//                 .pub-card:hover { border-color: rgba(0,184,148,0.15) !important; }
//             `}</style>
//         </motion.div>
//     );
// }

// // ─── Main Component ──────────────────────────────────────────────────────
// export function PublicationsSection() {
//   const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
//   const [publications, setPublications] = useState<Publication[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPublications() {
//       try {
//         const { data } = await supabase.from('publications').select('*').order('year', { ascending: false });
//         if (data) setPublications(data);
//       } catch (err) {
//         console.error('Error fetching publications:', err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchPublications();
//   }, []);

//   const sortedPublications = useMemo(() =>
//     [...publications].sort((a, b) => b.year - a.year), [publications]);

//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const autoplayRef = useRef<NodeJS.Timeout | null>(null);

//     const slides = useMemo(() => {
//         const groups: Publication[][] = [];
//         for (let i = 0; i < sortedPublications.length; i += ITEMS_PER_SLIDE)
//             groups.push(sortedPublications.slice(i, i + ITEMS_PER_SLIDE));
//         return groups;
//     }, [sortedPublications]);

//     const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//     const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
//     const onSelect   = useCallback(() => { if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap()) }, [emblaApi]);

//     const startAutoplay = useCallback(() => {
//         if (!emblaApi || slides.length <= 1) return;
//         if (autoplayRef.current) clearInterval(autoplayRef.current);
//         autoplayRef.current = setInterval(() => emblaApi?.scrollNext(), 5000);
//     }, [emblaApi, slides.length]);

//     const stopAutoplay = useCallback(() => {
//         if (autoplayRef.current) { clearInterval(autoplayRef.current); autoplayRef.current = null; }
//     }, []);

//     useEffect(() => { if (!emblaApi || slides.length <= 1) return; startAutoplay(); return () => stopAutoplay(); }, [emblaApi, slides.length, startAutoplay, stopAutoplay]);
//     useEffect(() => { if (!emblaApi) return; onSelect(); emblaApi.on('select', onSelect); return () => { emblaApi.off('select', onSelect); }; }, [emblaApi, onSelect]);
//     useEffect(() => { if (emblaApi) { emblaApi.reInit(); setSelectedIndex(0); emblaApi.scrollTo(0); } }, [emblaApi, slides]);

//     const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
//     const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };

//     return (
//         <section
//             id="publications"
//             aria-label="Publications"
//             style={{
//                 position: 'relative',
//                 padding: 'clamp(72px, 10vw, 120px) 0',
//                 background: 'var(--gray-50)',
//                 overflow: 'hidden',
//             }}
//         >
//             {/* ── Top divider ──────────────────────────────────── */}
//             <div style={{
//                 position: 'absolute', top: 0, left: 0, right: 0, height: 1,
//                 background: 'linear-gradient(90deg, transparent, rgba(0,184,148,0.30), rgba(11,37,69,0.12), transparent)',
//             }} />

//             {/* ── Background ───────────────────────────────────── */}
//             <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
//                 <div style={{
//                     position: 'absolute', top: '-12%', right: '-12%',
//                     width: 600, height: 600, borderRadius: '50%',
//                     background: 'radial-gradient(circle, rgba(0,184,148,0.07) 0%, rgba(26,64,128,0.04) 50%, transparent 75%)',
//                 }} />
//                 <div style={{
//                     position: 'absolute', bottom: '-15%', left: '-12%',
//                     width: 680, height: 680, borderRadius: '50%',
//                     background: 'radial-gradient(circle, rgba(11,37,69,0.07) 0%, rgba(26,92,184,0.03) 50%, transparent 70%)',
//                 }} />
//                 <div style={{
//                     position: 'absolute', inset: 0, opacity: 0.022,
//                     backgroundImage: 'radial-gradient(circle, #0B2545 1px, transparent 1px)',
//                     backgroundSize: '36px 36px',
//                 }} />
//             </div>

//             {/* ── Container ────────────────────────────────────── */}
//             <div style={{
//                 position: 'relative', zIndex: 10,
//                 width: '100%', maxWidth: 1200,
//                 margin: '0 auto',
//                 padding: '0 clamp(20px, 5vw, 56px)',
//             }}>

//                 {/* ── Section Header ───────────────────────────── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 28 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
//                     style={{ marginBottom: 64, textAlign: 'center' }}
//                 >
//                     {/* Eyebrow pill */}
//                     <div style={{
//                         display: 'inline-flex', alignItems: 'center', gap: 10,
//                         marginBottom: 20,
//                         padding: '7px 20px',
//                         borderRadius: 100,
//                         background: 'rgba(0,184,148,0.08)',
//                         border: '1px solid rgba(0,184,148,0.22)',
//                     }}>
//                         <BookMarked style={{ width: 12, height: 12, color: 'var(--green)' }} />
//                         <span style={{
//                             fontSize: 10.5, fontWeight: 700,
//                             letterSpacing: '0.22em', textTransform: 'uppercase',
//                             color: 'var(--navy)', fontFamily: 'Inter, sans-serif',
//                         }}>
//                             Research Output
//                         </span>
//                         <BookMarked style={{ width: 12, height: 12, color: 'var(--green)' }} />
//                     </div>

//                     {/* Main heading */}
//                     <h2 style={{
//                         fontSize: 'clamp(30px, 4.5vw, 48px)',
//                         fontWeight: 700,
//                         letterSpacing: '-0.02em',
//                         lineHeight: 1.1,
//                         color: 'var(--navy)',
//                         margin: 0,
//                         fontFamily: 'Inter, sans-serif',
//                     }}>
//                         Scholarly{' '}
//                         <span style={{
//                             background: 'linear-gradient(90deg, var(--green) 0%, var(--green-light) 100%)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                             backgroundClip: 'text',
//                         }}>
//                             Publications
//                         </span>
//                     </h2>

//                     {/* Green rule */}
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 22 }}>
//                         <div style={{ height: 1, width: 64, background: 'linear-gradient(to right, transparent, rgba(0,184,148,0.50))' }} />
//                         <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--green)', opacity: 0.7 }} />
//                         <div style={{ height: 1, width: 64, background: 'linear-gradient(to left, transparent, rgba(0,184,148,0.50))' }} />
//                     </div>
//                 </motion.div>

//                 {/* ── Carousel ─────────────────────────────────── */}
//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: '-40px' }}
//                     style={{ position: 'relative' }}
//                     onMouseEnter={stopAutoplay}
//                     onMouseLeave={startAutoplay}
//                 >
//                     <div ref={emblaRef} style={{ overflow: 'hidden', borderRadius: 24 }}>
//                         <div style={{ display: 'flex' }}>
//                             {slides.map((slide, slideIndex) => (
//                                 <div key={slideIndex} style={{ flex: '0 0 100%', minWidth: 0, padding: '0 4px' }}>
//                                     <div style={{
//                                         display: 'grid',
//                                         gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
//                                         gap: 20,
//                                         alignItems: 'stretch',
//                                     }}>
//                                         {slide.map((pub) => (
//                                             <motion.div key={pub.id} variants={itemVariants} className="pub-card" style={{ height: '100%' }}>
//                                                 <PublicationCard pub={pub} onSelect={setSelectedPub} />
//                                             </motion.div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Nav Buttons */}
//                     {slides.length > 1 && (
//                         <>
//                             <motion.button
//                                 onClick={scrollPrev}
//                                 whileHover={{ scale: 1.10, boxShadow: '0 8px 28px rgba(11,37,69,0.16)' }}
//                                 whileTap={{ scale: 0.93 }}
//                                 aria-label="Previous publications"
//                                 style={{
//                                     position: 'absolute', left: -22, top: '50%',
//                                     transform: 'translateY(-50%)',
//                                     width: 44, height: 44, borderRadius: '50%',
//                                     background: '#FFFFFF',
//                                     border: '1.5px solid rgba(0,184,148,0.25)',
//                                     boxShadow: '0 4px 16px rgba(11,37,69,0.10)',
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                     cursor: 'pointer', zIndex: 10, padding: 0,
//                                     transition: 'box-shadow 0.25s',
//                                 }}
//                             >
//                                 <ChevronLeft style={{ width: 20, height: 20, color: 'var(--navy)' }} />
//                             </motion.button>

//                             <motion.button
//                                 onClick={scrollNext}
//                                 whileHover={{ scale: 1.10, boxShadow: '0 8px 28px rgba(11,37,69,0.16)' }}
//                                 whileTap={{ scale: 0.93 }}
//                                 aria-label="Next publications"
//                                 style={{
//                                     position: 'absolute', right: -22, top: '50%',
//                                     transform: 'translateY(-50%)',
//                                     width: 44, height: 44, borderRadius: '50%',
//                                     background: '#FFFFFF',
//                                     border: '1.5px solid rgba(0,184,148,0.25)',
//                                     boxShadow: '0 4px 16px rgba(11,37,69,0.10)',
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                     cursor: 'pointer', zIndex: 10, padding: 0,
//                                     transition: 'box-shadow 0.25s',
//                                 }}
//                             >
//                                 <ChevronRight style={{ width: 20, height: 20, color: 'var(--navy)' }} />
//                             </motion.button>
//                         </>
//                     )}

//                     {/* Dot Indicators */}
//                     {slides.length > 1 && (
//                         <div style={{
//                             display: 'flex', justifyContent: 'center',
//                             alignItems: 'center', gap: 10, marginTop: 36,
//                         }}>
//                             {emblaApi?.scrollSnapList().map((_, index) => (
//                                 <motion.button
//                                     key={index}
//                                     onClick={() => emblaApi.scrollTo(index)}
//                                     whileHover={{ scale: 1.2 }}
//                                     aria-label={`Go to slide group ${index + 1}`}
//                                     style={{
//                                         height: 8,
//                                         width: index === selectedIndex ? 32 : 8,
//                                         borderRadius: 100,
//                                         background: index === selectedIndex
//                                             ? 'linear-gradient(90deg, var(--green), var(--green-light))'
//                                             : 'rgba(11,37,69,0.18)',
//                                         border: 'none', cursor: 'pointer', padding: 0,
//                                         transition: 'width 0.35s ease, background 0.35s ease',
//                                         boxShadow: index === selectedIndex ? '0 2px 8px rgba(0,184,148,0.35)' : 'none',
//                                     }}
//                                 />
//                             ))}
//                         </div>
//                     )}
//                 </motion.div>

//                 {/* Count line */}
//                 <p style={{
//                     textAlign: 'center',
//                     fontSize: 12.5, fontWeight: 500,
//                     color: 'var(--gray-400)',
//                     fontFamily: 'Inter, sans-serif',
//                     marginTop: 28,
//                     letterSpacing: '0.04em',
//                 }}>
//                     Showing all {sortedPublications.length} publications
//                 </p>
//             </div>

//             {/* ── Bottom divider ───────────────────────────────── */}
//             <div style={{
//                 position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
//                 background: 'linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(0,184,148,0.20), transparent)',
//             }} />

//             {/* ── Detail Modal ─────────────────────────────────── */}
//             <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
//                 <DialogContent style={{
//                     maxWidth: 640,
//                     borderRadius: 24,
//                     border: '1.5px solid rgba(0,184,148,0.20)',
//                     boxShadow: '0 32px 80px rgba(11,37,69,0.20)',
//                     background: '#FFFFFF',
//                     padding: 'clamp(28px, 4vw, 44px)',
//                     overflow: 'hidden',
//                 }}>
//                     {selectedPub && (
//                         <>
//                             {/* Modal green top bar */}
//                             <div style={{
//                                 position: 'absolute', top: 0, left: 0, right: 0, height: 4,
//                                 background: 'linear-gradient(90deg, var(--green), rgba(0,184,148,0.30), transparent)',
//                                 borderRadius: '24px 24px 0 0',
//                             }} />

//                             <DialogHeader style={{ paddingTop: 8 }}>
//                                 <DialogTitle style={{
//                                     fontSize: 'clamp(18px, 2.5vw, 24px)',
//                                     fontWeight: 700,
//                                     color: 'var(--navy)',
//                                     lineHeight: 1.35,
//                                     letterSpacing: '-0.01em',
//                                     fontFamily: 'Inter, sans-serif',
//                                 }}>
//                                     {selectedPub.title}
//                                 </DialogTitle>
//                                 <DialogDescription style={{
//                                     fontSize: 13, fontWeight: 500,
//                                     color: 'var(--gray-600)',
//                                     fontFamily: 'Inter, sans-serif',
//                                     marginTop: 8,
//                                 }}>
//                                     {selectedPub.authors}
//                                 </DialogDescription>
//                             </DialogHeader>

//                             <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
//                                 <p style={{
//                                     fontSize: 13.5, fontStyle: 'italic',
//                                     color: 'var(--navy)', opacity: 0.65,
//                                     fontFamily: 'Inter, sans-serif',
//                                     borderLeft: '2.5px solid rgba(0,184,148,0.40)',
//                                     paddingLeft: 14,
//                                     margin: 0,
//                                 }}>
//                                     {selectedPub.journal}
//                                 </p>

//                                 {/* Badge row */}
//                                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
//                                     <span style={{
//                                         padding: '5px 14px', borderRadius: 100,
//                                         fontSize: 11, fontWeight: 600,
//                                         background: 'rgba(0,184,148,0.08)',
//                                         color: 'var(--navy)',
//                                         border: '1px solid rgba(0,184,148,0.20)',
//                                         fontFamily: 'Inter, sans-serif',
//                                     }}>
//                                         {selectedPub.year}
//                                     </span>

//                                     {selectedPub.open_access && (
//                         <span style={{
//                             display: 'inline-flex', alignItems: 'center', gap: 5,
//                             padding: '5px 14px', borderRadius: 100,
//                             fontSize: 11, fontWeight: 700,
//                             background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
//                             color: '#FFFFFF',
//                             border: '1px solid rgba(0,184,148,0.20)',
//                             fontFamily: 'Inter, sans-serif',
//                         }}>
//                             <Unlock style={{ width: 10, height: 10, color: 'var(--green)' }} />
//                             Open Access
//                         </span>
//                     )}

//                                     {selectedPub.citations !== undefined && (
//                                         <span style={{
//                                             display: 'inline-flex', alignItems: 'center', gap: 5,
//                                             padding: '5px 14px', borderRadius: 100,
//                                             fontSize: 11, fontWeight: 600,
//                                             background: 'rgba(0,184,148,0.08)',
//                                             color: 'var(--navy)',
//                                             border: '1px solid rgba(0,184,148,0.20)',
//                                             fontFamily: 'Inter, sans-serif',
//                                         }}>
//                                             <Quote style={{ width: 10, height: 10, color: 'var(--green)' }} />
//                                             {selectedPub.citations} Citations
//                                         </span>
//                                     )}
//                                 </div>

//                                 {/* CTA */}
//                                 {selectedPub.doi && (
//                                     <motion.a
//                                         href={selectedPub.doi.includes('.') ? `https://doi.org/${selectedPub.doi}` : `https://www.researchgate.net/profile/Baburam-Timsina-3`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(11,37,69,0.28)' }}
//                                         whileTap={{ scale: 0.97 }}
//                                         style={{
//                                             display: 'inline-flex', alignItems: 'center', gap: 8,
//                                             padding: '11px 24px',
//                                             borderRadius: 100,
//                                             background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
//                                             border: '1px solid rgba(0,184,148,0.22)',
//                                             color: '#FFFFFF',
//                                             fontSize: 13, fontWeight: 600,
//                                             textDecoration: 'none',
//                                             fontFamily: 'Inter, sans-serif',
//                                             boxShadow: '0 4px 18px rgba(11,37,69,0.28)',
//                                             alignSelf: 'flex-start',
//                                             transition: 'box-shadow 0.25s',
//                                         }}
//                                     >
//                                         <ExternalLink style={{ width: 14, height: 14 }} />
//                                         View Source Document
//                                     </motion.a>
//                                 )}
//                             </div>
//                         </>
//                     )}
//                 </DialogContent>
//             </Dialog>
//         </section>
//     );
// }



"use client";

import { useMemo, useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Quote,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BookMarked,
  Lock,
  Unlock,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useEmblaCarousel from "embla-carousel-react";
import { supabase } from "../lib/supabase";

// ─── Types ────────────────────────────────────────────────────────────
interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  open_access: boolean;
  citations?: number;
  doi?: string;
}

// ─── Dataset ──────────────────────────────────────────────────────────

const ITEMS_PER_SLIDE = 3;

// ─── Publication Card (green-accented) ──────────────────────────────
function PublicationCard({
    pub,
    onSelect,
}: {
    pub: Publication;
    onSelect: (pub: Publication) => void;
}) {
    return (
        <motion.div
            whileHover={{ y: -6, boxShadow: '0 24px 64px rgba(11,37,69,0.14), 0 8px 24px rgba(0,184,148,0.08)' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onSelect(pub)}
            style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: '#FFFFFF',
                borderRadius: 20,
                border: '1.5px solid rgba(11,37,69,0.06)',
                boxShadow: '0 4px 20px rgba(11,37,69,0.06)',
                padding: 'clamp(20px, 2.5vw, 28px)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'box-shadow 0.35s, border-color 0.35s',
            }}
        >
            {/* Left green accent bar */}
            <div style={{
                position: 'absolute', top: 0, left: 0,
                width: 4, height: 64,
                background: 'linear-gradient(to bottom, var(--green), rgba(0,184,148,0.08))',
                borderRadius: '20px 0 0 0',
            }} />

            {/* Green top accent line (hover reveal) */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 3,
                background: 'linear-gradient(90deg, var(--green), rgba(0,184,148,0.15), transparent)',
                borderRadius: '20px 20px 0 0',
                opacity: 0,
                transition: 'opacity 0.35s',
            }} className="pub-top-bar" />

            {/* Hover glow */}
            <div style={{
                position: 'absolute', inset: 0, borderRadius: 20,
                background: 'radial-gradient(circle at top left, rgba(0,184,148,0.06) 0%, transparent 70%)',
                opacity: 0,
                transition: 'opacity 0.35s',
                pointerEvents: 'none',
            }} className="pub-hover-glow" />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>

                {/* Year + Badges row */}
                <div style={{
                    display: 'flex', flexWrap: 'wrap',
                    alignItems: 'center', gap: 8,
                    marginBottom: 16,
                }}>
                    {/* <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        fontSize: 11.5, fontWeight: 500,
                        color: 'var(--gray-400)',
                        fontFamily: 'Inter, sans-serif',
                    }}>
                        <Calendar style={{ width: 12, height: 12, color: 'var(--green)' }} />
                        {pub.year}
                    </span> */}

                    {pub.open_access ? (
            <span style={{
              marginLeft: 'auto',
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 10px',
              borderRadius: 100,
              fontSize: 9.5, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
              color: '#FFFFFF',
              border: '1px solid rgba(0,184,148,0.30)',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 2px 8px rgba(11,37,69,0.20)',
            }}>
              {/* <Unlock style={{ width: 9, height: 9, color: 'var(--green)' }} /> */}
              {/* Open Access */}
            </span>
          ) : (
            <span style={{
              marginLeft: 'auto',
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 10px',
              borderRadius: 100,
              fontSize: 9.5, fontWeight: 600,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              background: 'rgba(11,37,69,0.05)',
              color: 'var(--gray-600)',
              border: '1px solid rgba(11,37,69,0.10)',
              fontFamily: 'Inter, sans-serif',
            }}>
              {/* <Lock style={{ width: 9, height: 9 }} /> */}
              {/* Subscription */}
            </span>
          )}

                    {/* {pub.citations !== undefined && (
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: 5,
                            padding: '3px 10px',
                            borderRadius: 100,
                            fontSize: 9.5, fontWeight: 600,
                            background: 'rgba(0,184,148,0.08)',
                            color: 'var(--navy)',
                            border: '1px solid rgba(0,184,148,0.20)',
                            fontFamily: 'Inter, sans-serif',
                        }}>
                            <Quote style={{ width: 9, height: 9, color: 'var(--green)' }} />
                            {pub.citations} cited
                        </span>
                    )} */}
                </div>

                {/* Divider */}
                <div style={{
                    height: 1, marginBottom: 14,
                    background: 'linear-gradient(to right, rgba(0,184,148,0.25), transparent)',
                }} />

                {/* Title */}
                <h3 style={{
                    fontSize: 'clamp(15px, 1.8vw, 18px)',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    lineHeight: 1.38,
                    letterSpacing: '-0.01em',
                    marginBottom: 12,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    transition: 'color 0.25s',
                    fontFamily: 'Inter, sans-serif',
                }}>
                    {pub.title}
                </h3>

                {/* Authors */}
                <p style={{
                    fontSize: 'clamp(13px, 1.2vw, 14px)',
                    lineHeight: 1.6,
                    color: 'var(--gray-600)',
                    margin: 0,
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                }}>
                    {pub.authors}
                </p>

                {/* Journal */}
                <p style={{
                    fontSize: 12.5,
                    fontStyle: 'italic',
                    color: 'var(--navy)',
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0.60,
                    marginTop: 4,
                    marginBottom: 16,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.5,
                }}>
                    {pub.journal}
                </p>

                {/* DOI link */}
                {/* {pub.doi && ( */}
                    {/* <motion.a
                        href={`https://www.researchgate.net/profile/Baburam-Timsina-3`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            fontSize: 12, fontWeight: 600,
                            color: 'var(--green)',
                            textDecoration: 'none',
                            fontFamily: 'Inter, sans-serif',
                            opacity: 0.7,
                            marginBottom: 4,
                            transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '1'}
                        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
                    >
                        View Document
                        <ExternalLink style={{ width: 12, height: 12 }} />
                    </motion.a> */}
                {/* )} */}

                {/* ── Footer: View Details (now opens document) ── */}
                <div style={{
                    marginTop: 'auto',
                    paddingTop: 16,
                    borderTop: '1px solid rgba(11,37,69,0.06)',
                }}>
                    <motion.a
                        href={
                           
                                 `https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.22 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            fontSize: 11.5, fontWeight: 700,
                            letterSpacing: '0.09em', textTransform: 'uppercase',
                            color: 'var(--navy)',
                            background: 'none', border: 'none',
                            padding: 0, cursor: 'pointer',
                            fontFamily: 'Inter, sans-serif',
                            borderBottom: '1.5px solid rgba(0,184,148,0.40)',
                            paddingBottom: 2,
                            textDecoration: 'none',
                            transition: 'color 0.22s, border-color 0.22s',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = 'var(--green)';
                            (e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--green)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = 'var(--navy)';
                            (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(0,184,148,0.40)';
                        }}
                    >
                        View Details
                        <ArrowRight style={{ width: 13, height: 13 }} />
                    </motion.a>
                </div>
            </div>

            <style>{`
                .pub-card:hover .pub-top-bar   { opacity: 1 !important; }
                .pub-card:hover .pub-hover-glow { opacity: 1 !important; }
                .pub-card:hover { border-color: rgba(0,184,148,0.15) !important; }
            `}</style>
        </motion.div>
    );
}

// ─── Main Component ──────────────────────────────────────────────────────
export function PublicationsSection() {
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPublications() {
      try {
        const { data } = await supabase.from('publications').select('*').order('year', { ascending: false });
        if (data) setPublications(data);
      } catch (err) {
        console.error('Error fetching publications:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPublications();
  }, []);

  const sortedPublications = useMemo(() =>
    [...publications].sort((a, b) => b.year - a.year), [publications]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const slides = useMemo(() => {
        const groups: Publication[][] = [];
        for (let i = 0; i < sortedPublications.length; i += ITEMS_PER_SLIDE)
            groups.push(sortedPublications.slice(i, i + ITEMS_PER_SLIDE));
        return groups;
    }, [sortedPublications]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const onSelect   = useCallback(() => { if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap()) }, [emblaApi]);

    const startAutoplay = useCallback(() => {
        if (!emblaApi || slides.length <= 1) return;
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => emblaApi?.scrollNext(), 5000);
    }, [emblaApi, slides.length]);

    const stopAutoplay = useCallback(() => {
        if (autoplayRef.current) { clearInterval(autoplayRef.current); autoplayRef.current = null; }
    }, []);

    useEffect(() => { if (!emblaApi || slides.length <= 1) return; startAutoplay(); return () => stopAutoplay(); }, [emblaApi, slides.length, startAutoplay, stopAutoplay]);
    useEffect(() => { if (!emblaApi) return; onSelect(); emblaApi.on('select', onSelect); return () => { emblaApi.off('select', onSelect); }; }, [emblaApi, onSelect]);
    useEffect(() => { if (emblaApi) { emblaApi.reInit(); setSelectedIndex(0); emblaApi.scrollTo(0); } }, [emblaApi, slides]);

    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
    const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };

    return (
        <section
            id="publications"
            aria-label="Publications"
            style={{
                position: 'relative',
                padding: 'clamp(72px, 10vw, 120px) 0',
                background: 'var(--gray-50)',
                overflow: 'hidden',
            }}
        >
            {/* ── Top divider ──────────────────────────────────── */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(0,184,148,0.30), rgba(11,37,69,0.12), transparent)',
            }} />

            {/* ── Background ───────────────────────────────────── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{
                    position: 'absolute', top: '-12%', right: '-12%',
                    width: 600, height: 600, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,184,148,0.07) 0%, rgba(26,64,128,0.04) 50%, transparent 75%)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-15%', left: '-12%',
                    width: 680, height: 680, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(11,37,69,0.07) 0%, rgba(26,92,184,0.03) 50%, transparent 70%)',
                }} />
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
                        <BookMarked style={{ width: 12, height: 12, color: 'var(--green)' }} />
                        <span style={{
                            fontSize: 10.5, fontWeight: 700,
                            letterSpacing: '0.22em', textTransform: 'uppercase',
                            color: 'var(--navy)', fontFamily: 'Inter, sans-serif',
                        }}>
                            Research Output
                        </span>
                        <BookMarked style={{ width: 12, height: 12, color: 'var(--green)' }} />
                    </div>

                    {/* Main heading */}
                    <h2 style={{
                        fontSize: 'clamp(30px, 4.5vw, 48px)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        color: 'var(--navy)',
                        margin: 0,
                        fontFamily: 'Inter, sans-serif',
                    }}>
                        Scholarly{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, var(--green) 0%, var(--green-light) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Publications
                        </span>
                    </h2>

                    {/* Green rule */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 22 }}>
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
                    <div ref={emblaRef} style={{ overflow: 'hidden', borderRadius: 24 }}>
                        <div style={{ display: 'flex' }}>
                            {slides.map((slide, slideIndex) => (
                                <div key={slideIndex} style={{ flex: '0 0 100%', minWidth: 0, padding: '0 4px' }}>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                                        gap: 20,
                                        alignItems: 'stretch',
                                    }}>
                                        {slide.map((pub) => (
                                            <motion.div key={pub.id} variants={itemVariants} className="pub-card" style={{ height: '100%' }}>
                                                <PublicationCard pub={pub} onSelect={setSelectedPub} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nav Buttons */}
                    {slides.length > 1 && (
                        <>
                            <motion.button
                                onClick={scrollPrev}
                                whileHover={{ scale: 1.10, boxShadow: '0 8px 28px rgba(11,37,69,0.16)' }}
                                whileTap={{ scale: 0.93 }}
                                aria-label="Previous publications"
                                style={{
                                    position: 'absolute', left: -22, top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: 44, height: 44, borderRadius: '50%',
                                    background: '#FFFFFF',
                                    border: '1.5px solid rgba(0,184,148,0.25)',
                                    boxShadow: '0 4px 16px rgba(11,37,69,0.10)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', zIndex: 10, padding: 0,
                                    transition: 'box-shadow 0.25s',
                                }}
                            >
                                <ChevronLeft style={{ width: 20, height: 20, color: 'var(--navy)' }} />
                            </motion.button>

                            <motion.button
                                onClick={scrollNext}
                                whileHover={{ scale: 1.10, boxShadow: '0 8px 28px rgba(11,37,69,0.16)' }}
                                whileTap={{ scale: 0.93 }}
                                aria-label="Next publications"
                                style={{
                                    position: 'absolute', right: -22, top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: 44, height: 44, borderRadius: '50%',
                                    background: '#FFFFFF',
                                    border: '1.5px solid rgba(0,184,148,0.25)',
                                    boxShadow: '0 4px 16px rgba(11,37,69,0.10)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', zIndex: 10, padding: 0,
                                    transition: 'box-shadow 0.25s',
                                }}
                            >
                                <ChevronRight style={{ width: 20, height: 20, color: 'var(--navy)' }} />
                            </motion.button>
                        </>
                    )}

                    {/* Dot Indicators */}
                    {slides.length > 1 && (
                        <div style={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center', gap: 10, marginTop: 36,
                        }}>
                            {emblaApi?.scrollSnapList().map((_, index) => (
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
                                        boxShadow: index === selectedIndex ? '0 2px 8px rgba(0,184,148,0.35)' : 'none',
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Count line */}
                <p style={{
                    textAlign: 'center',
                    fontSize: 12.5, fontWeight: 500,
                    color: 'var(--gray-400)',
                    fontFamily: 'Inter, sans-serif',
                    marginTop: 28,
                    letterSpacing: '0.04em',
                }}>
                    Showing all {sortedPublications.length} publications
                </p>
            </div>

            {/* ── Bottom divider ───────────────────────────────── */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(0,184,148,0.20), transparent)',
            }} />

            
        </section>
    );
}