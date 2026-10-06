// "use client";

// import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import type { ReactNode } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   BookMarked,
//   Calendar,
//   CheckCircle2,
//   Download,
//   ExternalLink,
//   FileDown,
//   FileText,
//   Library,
//   Lock,
//   Quote,
//   Sparkles,
//   Unlock,
//   ChevronLeft,
//   ChevronRight,
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
// import {
//   downloadCitation,
//   downloadPublication,
//   downloadPublicationLibrary,
//   publicationFileBase,
//   resolveDocumentUrl,
// } from "../lib/publicationExport";
// import type { CitationFormat, DownloadOutcome, PublicationRecord } from "../lib/publicationExport";

// // ─── Types ────────────────────────────────────────────────────────────────
// type Publication = PublicationRecord;

// // ─── Dataset ──────────────────────────────────────────────────────────────

// const ITEMS_PER_SLIDE = 3;

// type ToastState = { id: number; ok: boolean; message: string };

// function StatChip({
//   icon,
//   value,
//   label,
// }: {
//   icon: ReactNode;
//   value: string;
//   label: string;
// }) {
//   return (
//     <div
//       style={{
//         display: 'inline-flex', alignItems: 'center', gap: 10,
//         padding: '9px 18px',
//         borderRadius: 100,
//         background: 'rgba(255,255,255,0.72)',
//         border: '1px solid rgba(11,37,69,0.08)',
//         boxShadow: '0 4px 18px rgba(11,37,69,0.05)',
//         backdropFilter: 'blur(8px)',
//       }}
//     >
//       <span
//         style={{
//           display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
//           width: 28, height: 28, borderRadius: 8,
//           background: 'rgba(15,122,90,0.10)',
//           color: 'var(--green)',
//         }}
//       >
//         {icon}
//       </span>
//       <span style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
//         <span style={{
//           fontSize: 16, fontWeight: 800, color: '#000000',
//           fontFamily: 'var(--font-app)', letterSpacing: '-0.01em',
//         }}>
//           {value}
//         </span>
//         <span style={{
//           fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
//           textTransform: 'uppercase', color: '#000000',
//           fontFamily: 'var(--font-app)',
//         }}>
//           {label}
//         </span>
//       </span>
//     </div>
//   );
// }

// function DownloadMenu({
//   onCitation,
// }: {
//   onCitation: (format: CitationFormat) => void;
// }) {
//   const [open, setOpen] = useState(false);
//   const wrapperRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!open) return;

//     const handlePointerDown = (event: MouseEvent | TouchEvent) => {
//       if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
//     };
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") setOpen(false);
//     };

//     document.addEventListener('mousedown', handlePointerDown);
//     document.addEventListener('touchstart', handlePointerDown);
//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('mousedown', handlePointerDown);
//       document.removeEventListener('touchstart', handlePointerDown);
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [open]);

//   const options: Array<{ format: CitationFormat; label: string; hint: string }> = [
//     { format: 'bibtex', label: 'BibTeX', hint: '.bib' },
//     { format: 'ris', label: 'RIS', hint: '.ris' },
//     { format: 'text', label: 'Plain text', hint: '.txt' },
//   ];

//   return (
//     <div ref={wrapperRef} style={{ position: 'relative', display: 'inline-flex' }}>
//       <motion.button
//         type="button"
//         onClick={() => setOpen((prev) => !prev)}
//         aria-haspopup="menu"
//         aria-expanded={open}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.96 }}
//         title="More citation formats"
//         style={{
//           display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
//           width: 30, height: 30, borderRadius: 9,
//           background: open ? 'rgba(15,122,90,0.14)' : 'rgba(11,37,69,0.05)',
//           border: '1px solid rgba(11,37,69,0.08)',
//           color: '#000000',
//           cursor: 'pointer', padding: 0,
//           transition: 'background 0.2s, border-color 0.2s',
//         }}
//       >
//         <Download style={{ width: 13, height: 13 }} aria-hidden />
//       </motion.button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             role="menu"
//             initial={{ opacity: 0, y: 6, scale: 0.96 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 6, scale: 0.96 }}
//             transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
//             style={{
//               position: 'absolute', bottom: 'calc(100% + 8px)', right: 0,
//               zIndex: 30, minWidth: 168,
//               padding: 6, borderRadius: 14,
//               background: '#FFFFFF',
//               border: '1px solid rgba(11,37,69,0.08)',
//               boxShadow: '0 18px 46px rgba(11,37,69,0.18)',
//             }}
//           >
//             {options.map((option) => (
//               <button
//                 key={option.format}
//                 type="button"
//                 role="menuitem"
//                 onClick={() => {
//                   setOpen(false);
//                   onCitation(option.format);
//                 }}
//                 style={{
//                   display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                   gap: 12, width: '100%',
//                   padding: '8px 10px', borderRadius: 9,
//                   background: 'transparent', border: 'none',
//                   cursor: 'pointer', textAlign: 'left',
//                   fontFamily: 'var(--font-app)',
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLElement).style.background = 'rgba(15,122,90,0.08)';
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLElement).style.background = 'transparent';
//                 }}
//               >
//                 <span style={{
//                   display: 'inline-flex', alignItems: 'center', gap: 8,
//                   fontSize: 12.5, fontWeight: 700, color: '#000000',
//                 }}>
//                   <FileDown style={{ width: 13, height: 13, color: 'var(--green)' }} />
//                   {option.label}
//                 </span>
//                 <span style={{
//                   fontSize: 10.5, fontWeight: 600, color: '#000000',
//                 }}>
//                   {option.hint}
//                 </span>
//               </button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // ─── Publication Card (green-accented) ─────────────────────────────────────
// function PublicationCard({
//     pub,
//     index,
//     onSelect,
//     onDownload,
//     onCitation,
// }: {
//     pub: Publication;
//     index: number;
//     onSelect: (pub: Publication) => void;
//     onDownload: (pub: Publication) => void;
//     onCitation: (pub: Publication, format: CitationFormat) => void;
// }) {
//     const sourceUrl = resolveDocumentUrl(pub);

//     return (
//         <motion.div
//             whileHover={{ y: -6, boxShadow: '0 24px 64px rgba(11,37,69,0.14), 0 8px 24px rgba(15,122,90,0.08)' }}
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
//                 background: 'linear-gradient(to bottom, var(--green), rgba(15,122,90,0.08))',
//                 borderRadius: '20px 0 0 0',
//             }} />

//             {/* Watermark index */}
//             <span aria-hidden="true" style={{
//                 position: 'absolute', top: 6, right: 14,
//                 fontSize: 76, fontWeight: 800, lineHeight: 1,
//                 color: '#000000', opacity: 0.035,
//                 letterSpacing: '-0.04em',
//                 fontFamily: 'var(--font-app)',
//                 pointerEvents: 'none',
//                 userSelect: 'none',
//             }}>
//                 {String(index + 1).padStart(2, '0')}
//             </span>

//             {/* Green top accent line (hover reveal) */}
//             <div style={{
//                 position: 'absolute', top: 0, left: 0, right: 0,
//                 height: 3,
//                 background: 'linear-gradient(90deg, var(--green), rgba(15,122,90,0.15), transparent)',
//                 borderRadius: '20px 20px 0 0',
//                 opacity: 0,
//                 transition: 'opacity 0.35s',
//             }} className="pub-top-bar" />

//             {/* Hover glow */}
//             <div style={{
//                 position: 'absolute', inset: 0, borderRadius: 20,
//                 background: 'radial-gradient(circle at top left, rgba(15,122,90,0.06) 0%, transparent 70%)',
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
//                     paddingRight: 74,
//                 }}>
//                     <span style={{
//                         display: 'inline-flex', alignItems: 'center', gap: 5,
//                         fontSize: 11.5, fontWeight: 500,
//                         color: '#000000',
//                         fontFamily: 'var(--font-app)',
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
//               border: '1px solid rgba(15,122,90,0.30)',
//               fontFamily: 'var(--font-app)',
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
//               color: '#000000',
//               border: '1px solid rgba(11,37,69,0.10)',
//               fontFamily: 'var(--font-app)',
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
//                             background: 'rgba(15,122,90,0.08)',
//                             color: '#000000',
//                             border: '1px solid rgba(15,122,90,0.20)',
//                             fontFamily: 'var(--font-app)',
//                         }}>
//                             <Quote style={{ width: 9, height: 9, color: 'var(--green)' }} />
//                             {pub.citations} cited
//                         </span>
//                     )}
//                 </div>

//                 {/* Download controls */}
//                 <div
//                     onClick={(e) => e.stopPropagation()}
//                     style={{
//                         position: 'absolute', top: 18, right: 20,
//                         display: 'flex', alignItems: 'center', gap: 6,
//                         zIndex: 3,
//                     }}
//                 >
//                     <motion.button
//                         type="button"
//                         onClick={() => onDownload(pub)}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         title={`Download ${publicationFileBase(pub)}`}
//                         aria-label={`Download ${pub.title}`}
//                         style={{
//                             display: 'inline-flex', alignItems: 'center', gap: 6,
//                             padding: '6px 12px', borderRadius: 9,
//                             background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
//                             border: '1px solid rgba(15,122,90,0.25)',
//                             color: '#FFFFFF',
//                             fontSize: 10.5, fontWeight: 700,
//                             letterSpacing: '0.09em', textTransform: 'uppercase',
//                             cursor: 'pointer',
//                             fontFamily: 'var(--font-app)',
//                             boxShadow: '0 4px 14px rgba(11,37,69,0.22)',
//                         }}
//                     >
//                         <FileDown style={{ width: 12, height: 12, color: 'var(--green-light)' }} />
//                         PDF
//                     </motion.button>

//                     <DownloadMenu onCitation={(format) => onCitation(pub, format)} />
//                 </div>

//                 {/* Divider */}
//                 <div style={{
//                     height: 1, marginBottom: 14,
//                     background: 'linear-gradient(to right, rgba(15,122,90,0.25), transparent)',
//                 }} />

//                 {/* Title */}
//                 <h3 style={{
//                     fontSize: 'clamp(15px, 1.8vw, 18px)',
//                     fontWeight: 700,
//                     color: '#000000',
//                     lineHeight: 1.38,
//                     letterSpacing: 'var(--tracking-normal)',
//                     marginBottom: 12,
//                     display: '-webkit-box',
//                     WebkitLineClamp: 3,
//                     WebkitBoxOrient: 'vertical',
//                     overflow: 'hidden',
//                     transition: 'color 0.25s',
//                     fontFamily: 'var(--font-app)',
//                 }}>
//                     {pub.title}
//                 </h3>

//                 {/* Authors */}
//                 <p style={{
//                     fontSize: 'clamp(13px, 1.2vw, 14px)',
//                     lineHeight: 1.6,
//                     color: '#000000',
//                     margin: 0,
//                     fontWeight: 500,
//                     fontFamily: 'var(--font-app)',
//                 }}>
//                     {pub.authors}
//                 </p>

//                 {/* Journal */}
//                 <p style={{
//                     fontSize: 12.5,
//                     fontStyle: 'italic',
//                     color: '#000000',
//                     fontFamily: 'var(--font-app)',
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

//                 {/* Source links */}
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
//                     {sourceUrl && (
//                         <motion.a
//                             href={sourceUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             onClick={(e) => e.stopPropagation()}
//                             whileHover={{ x: 3 }}
//                             transition={{ duration: 0.2 }}
//                             style={{
//                                 display: 'inline-flex', alignItems: 'center', gap: 6,
//                                 fontSize: 12, fontWeight: 600,
//                                 color: 'var(--green)',
//                                 textDecoration: 'none',
//                                 fontFamily: 'var(--font-app)',
//                                 opacity: 0.7,
//                                 transition: 'opacity 0.2s',
//                             }}
//                             onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '1'}
//                             onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
//                         >
//                             Source <ArrowUpRight style={{ width: 12, height: 12 }} />
//                         </motion.a>
//                     )}
//                     {(pub as any).google_scholar_url && (
//                         <motion.a
//                             href={(pub as any).google_scholar_url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             onClick={(e) => e.stopPropagation()}
//                             whileHover={{ x: 3 }}
//                             transition={{ duration: 0.2 }}
//                             style={{
//                                 display: 'inline-flex', alignItems: 'center', gap: 6,
//                                 fontSize: 12, fontWeight: 600,
//                                 color: '#000000',
//                                 textDecoration: 'none',
//                                 fontFamily: 'var(--font-app)',
//                                 opacity: 0.7,
//                                 transition: 'opacity 0.2s',
//                             }}
//                             onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '1'}
//                             onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
//                         >
//                             Google Scholar <ArrowUpRight style={{ width: 12, height: 12 }} />
//                         </motion.a>
//                     )}
//                     {(pub as any).researchgate_url && (
//                         <motion.a
//                             href={(pub as any).researchgate_url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             onClick={(e) => e.stopPropagation()}
//                             whileHover={{ x: 3 }}
//                             transition={{ duration: 0.2 }}
//                             style={{
//                                 display: 'inline-flex', alignItems: 'center', gap: 6,
//                                 fontSize: 12, fontWeight: 600,
//                                 color: '#000000',
//                                 textDecoration: 'none',
//                                 fontFamily: 'var(--font-app)',
//                                 opacity: 0.7,
//                                 transition: 'opacity 0.2s',
//                             }}
//                             onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '1'}
//                             onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
//                         >
//                             ResearchGate <ArrowUpRight style={{ width: 12, height: 12 }} />
//                         </motion.a>
//                     )}
//                 </div>

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
//                             color: '#000000',
//                             background: 'none', border: 'none',
//                             padding: 0, cursor: 'pointer',
//                             fontFamily: 'var(--font-app)',
//                             borderBottom: '1.5px solid rgba(15,122,90,0.40)',
//                             paddingBottom: 2,
//                             transition: 'color 0.22s, border-color 0.22s',
//                         }}
//                         onMouseEnter={(e) => {
//                             (e.currentTarget as HTMLElement).style.color = 'var(--green)';
//                             (e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--green)';
//                         }}
//                         onMouseLeave={(e) => {
//                             (e.currentTarget as HTMLElement).style.color = 'var(--navy)';
//                             (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(15,122,90,0.40)';
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
//                 .pub-card:hover { border-color: rgba(15,122,90,0.15) !important; }
//             `}</style>
//         </motion.div>
//     );
// }

// function PublicationSkeleton() {
//     return (
//         <div
//             aria-hidden="true"
//             style={{
//                 height: '100%',
//                 minHeight: 340,
//                 borderRadius: 20,
//                 border: '1.5px solid rgba(11,37,69,0.05)',
//                 background: '#FFFFFF',
//                 padding: 'clamp(20px, 2.5vw, 28px)',
//                 display: 'flex', flexDirection: 'column', gap: 14,
//             }}
//         >
//             {[68, 22, 92, 74, 58].map((width, i) => (
//                 <div
//                     key={i}
//                     style={{
//                         width: `${width}%`,
//                         height: i === 0 ? 18 : 11,
//                         borderRadius: 6,
//                         background: 'linear-gradient(90deg, rgba(11,37,69,0.05), rgba(15,122,90,0.10), rgba(11,37,69,0.05))',
//                         backgroundSize: '200% 100%',
//                         animation: 'pub-skeleton 1.4s ease-in-out infinite',
//                     }}
//                 />
//             ))}
//             <div style={{ flex: 1 }} />
//             <div style={{
//                 width: '38%', height: 11, borderRadius: 6,
//                 background: 'rgba(11,37,69,0.05)',
//             }} />
//         </div>
//     );
// }

// // ─── Main Component ────────────────────────────────────────────────────────
// export function PublicationsSection() {
//   const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
//   const [publications, setPublications] = useState<Publication[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [toasts, setToasts] = useState<ToastState[]>([]);
//   const toastIdRef = useRef(0);

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

//   const pushToast = useCallback((outcome: DownloadOutcome) => {
//     toastIdRef.current += 1;
//     const toast: ToastState = { id: toastIdRef.current, ok: outcome.ok, message: outcome.message };
//     setToasts((prev) => [...prev.slice(-2), toast]);
//     window.setTimeout(() => {
//       setToasts((prev) => prev.filter((item) => item.id !== toast.id));
//     }, 3600);
//   }, []);

//   const handleDownload = useCallback(async (pub: Publication) => {
//     pushToast(await downloadPublication(pub));
//   }, [pushToast]);

//   const handleCitation = useCallback((pub: Publication, format: CitationFormat) => {
//     pushToast(downloadCitation(pub, format));
//   }, [pushToast]);

//   const handleDownloadAll = useCallback(() => {
//     pushToast(downloadPublicationLibrary(publications));
//   }, [publications, pushToast]);

//   const sortedPublications = useMemo(() =>
//     [...publications].sort((a, b) => b.year - a.year), [publications]);

//   const totalCitations = useMemo(
//     () => sortedPublications.reduce((sum, pub) => sum + (pub.citations ?? 0), 0),
//     [sortedPublications],
//   );
//   const openAccessCount = useMemo(
//     () => sortedPublications.filter((pub) => pub.open_access).length,
//     [sortedPublications],
//   );

//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
//                 background: 'linear-gradient(90deg, transparent, rgba(15,122,90,0.30), rgba(11,37,69,0.12), transparent)',
//             }} />

//             {/* ── Background ───────────────────────────────────── */}
//             <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
//                 <div style={{
//                     position: 'absolute', top: '-12%', right: '-12%',
//                     width: 600, height: 600, borderRadius: '50%',
//                     background: 'radial-gradient(circle, rgba(15,122,90,0.07) 0%, rgba(26,64,128,0.04) 50%, transparent 75%)',
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
//                     style={{ marginBottom: 52, textAlign: 'center' }}
//                 >
//                     {/* Eyebrow pill */}
//                     <div style={{
//                         display: 'inline-flex', alignItems: 'center', gap: 10,
//                         marginBottom: 20,
//                         padding: '7px 20px',
//                         borderRadius: 100,
//                         background: 'rgba(15,122,90,0.08)',
//                         border: '1px solid rgba(15,122,90,0.22)',
//                     }}>
//                         <BookMarked style={{ width: 12, height: 12, color: 'var(--green)' }} />
//                         <span style={{
//                             fontSize: 10.5, fontWeight: 700,
//                             letterSpacing: '0.22em', textTransform: 'uppercase',
//                             color: '#000000', fontFamily: 'var(--font-app)',
//                         }}>
//                             Research Output
//                         </span>
//                         <BookMarked style={{ width: 12, height: 12, color: 'var(--green)' }} />
//                     </div>

//                     {/* Main heading */}
//                     <h2 style={{
//                         fontSize: 'clamp(30px, 4.5vw, 48px)',
//                         fontWeight: 700,
//                         letterSpacing: 'var(--tracking-normal)',
//                         lineHeight: 1.1,
//                         color: '#000000',
//                         margin: 0,
//                         fontFamily: 'var(--font-app)',
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

//                     {/* Sub-copy */}
                    

//                     {/* Green rule */}
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 22 }}>
//                         <div style={{ height: 1, width: 64, background: 'linear-gradient(to right, transparent, rgba(15,122,90,0.50))' }} />
//                         <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--green)', opacity: 0.7 }} />
//                         <div style={{ height: 1, width: 64, background: 'linear-gradient(to left, transparent, rgba(15,122,90,0.50))' }} />
//                     </div>

//                     {/* Stats row */}
//                     {!loading && sortedPublications.length > 0 && (
//                         <motion.div
//                             initial={{ opacity: 0, y: 14 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: 0.12 }}
//                             style={{
//                                 display: 'flex', flexWrap: 'wrap', gap: 10,
//                                 justifyContent: 'center', marginTop: 28,
//                             }}
//                         >
//                             <StatChip
//                                 icon={<Library style={{ width: 14, height: 14 }} />}
//                                 value={String(sortedPublications.length)}
//                                 label="Publications"
//                             />
//                             <StatChip
//                                 icon={<Unlock style={{ width: 14, height: 14 }} />}
//                                 value={String(openAccessCount)}
//                                 label="Open Access"
//                             />
//                             <StatChip
//                                 icon={<Quote style={{ width: 14, height: 14 }} />}
//                                 value={totalCitations.toLocaleString('en-US')}
//                                 label="Citations"
//                             />
//                         </motion.div>
//                     )}
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
//                             {loading
//                                 ? [0, 1, 2].map((key) => (
//                                     <div key={key} style={{ flex: '0 0 100%', minWidth: 0, padding: '0 4px' }}>
//                                         <PublicationSkeleton />
//                                     </div>
//                                 ))
//                                 : slides.map((slide, slideIndex) => (
//                                 <div key={slideIndex} style={{ flex: '0 0 100%', minWidth: 0, padding: '0 4px' }}>
//                                     <div style={{
//                                         display: 'grid',
//                                         gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
//                                         gap: 20,
//                                         alignItems: 'stretch',
//                                     }}>
//                                         {slide.map((pub, pubIndex) => (
//                                             <motion.div
//                                                 key={pub.id}
//                                                 initial="hidden"
//                                                 whileInView="visible"
//                                                 viewport={{ once: true }}
//                                                 className="pub-card"
//                                                 style={{ height: '100%' }}
//                                             >
//                                                 <PublicationCard
//                                                     pub={pub}
//                                                     index={slideIndex * ITEMS_PER_SLIDE + pubIndex}
//                                                     onSelect={setSelectedPub}
//                                                     onDownload={handleDownload}
//                                                     onCitation={handleCitation}
//                                                 />
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
//                                     border: '1.5px solid rgba(15,122,90,0.25)',
//                                     boxShadow: '0 4px 16px rgba(11,37,69,0.10)',
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                     cursor: 'pointer', zIndex: 10, padding: 0,
//                                     transition: 'box-shadow 0.25s',
//                                 }}
//                             >
//                                 <ChevronLeft style={{ width: 20, height: 20, color: '#000000' }} />
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
//                                     border: '1.5px solid rgba(15,122,90,0.25)',
//                                     boxShadow: '0 4px 16px rgba(11,37,69,0.10)',
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                     cursor: 'pointer', zIndex: 10, padding: 0,
//                                     transition: 'box-shadow 0.25s',
//                                 }}
//                             >
//                                 <ChevronRight style={{ width: 20, height: 20, color: '#000000' }} />
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
//                                         boxShadow: index === selectedIndex ? '0 2px 8px rgba(15,122,90,0.35)' : 'none',
//                                     }}
//                                 />
//                             ))}
//                         </div>
//                     )}
//                 </motion.div>

//                 {/* Footer bar */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     style={{
//                         display: 'flex', flexWrap: 'wrap', alignItems: 'center',
//                         justifyContent: 'space-between', gap: 16,
//                         marginTop: 32, padding: '16px 22px',
//                         borderRadius: 18,
//                         background: 'rgba(255,255,255,0.72)',
//                         border: '1px solid rgba(11,37,69,0.06)',
//                         boxShadow: '0 6px 26px rgba(11,37,69,0.05)',
//                     }}
//                 >
//                     <p style={{
//                         display: 'inline-flex', alignItems: 'center', gap: 8,
//                         fontSize: 12.5, fontWeight: 500,
//                         color: '#000000',
//                         fontFamily: 'var(--font-app)',
//                         letterSpacing: '0.04em',
//                         margin: 0,
//                     }}>
//                         <FileText style={{ width: 14, height: 14, color: 'var(--green)' }} />
//                         Showing all {sortedPublications.length} publications
//                         <span style={{ color: '#000000' }}>•</span>
//                         {openAccessCount} open access
//                     </p>

//                     <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                         <motion.button
//                             type="button"
//                             onClick={handleDownloadAll}
//                             disabled={sortedPublications.length === 0}
//                             whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(11,37,69,0.24)' }}
//                             whileTap={{ scale: 0.97 }}
//                             style={{
//                                 display: 'inline-flex', alignItems: 'center', gap: 8,
//                                 padding: '10px 20px', borderRadius: 100,
//                                 background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
//                                 border: '1px solid rgba(15,122,90,0.25)',
//                                 color: '#FFFFFF',
//                                 fontSize: 11.5, fontWeight: 700,
//                                 letterSpacing: '0.10em', textTransform: 'uppercase',
//                                 cursor: sortedPublications.length === 0 ? 'not-allowed' : 'pointer',
//                                 opacity: sortedPublications.length === 0 ? 0.5 : 1,
//                                 fontFamily: 'var(--font-app)',
//                                 boxShadow: '0 6px 20px rgba(11,37,69,0.20)',
//                             }}
//                         >
//                             <Download style={{ width: 13, height: 13, color: 'var(--green-light)' }} />
//                             Download All
//                         </motion.button>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* ── Bottom divider ───────────────────────────────── */}
//             <div style={{
//                 position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
//                 background: 'linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(15,122,90,0.20), transparent)',
//             }} />

//             {/* ── Toasts ─────────────────────────────────────────── */}
//             <div
//                 role="status"
//                 aria-live="polite"
//                 style={{
//                     position: 'fixed', left: 0, right: 0, bottom: 24,
//                     zIndex: 90, display: 'flex', flexDirection: 'column',
//                     alignItems: 'center', gap: 8, pointerEvents: 'none',
//                 }}
//             >
//                 <AnimatePresence>
//                     {toasts.map((toast) => (
//                         <motion.div
//                             key={toast.id}
//                             initial={{ opacity: 0, y: 18, scale: 0.96 }}
//                             animate={{ opacity: 1, y: 0, scale: 1 }}
//                             exit={{ opacity: 0, y: 12, scale: 0.96 }}
//                             transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
//                             style={{
//                                 display: 'inline-flex', alignItems: 'center', gap: 10,
//                                 maxWidth: 'min(92vw, 460px)',
//                                 padding: '11px 20px', borderRadius: 100,
//                                 background: 'rgba(11,37,69,0.95)',
//                                 border: '1px solid rgba(15,122,90,0.30)',
//                                 boxShadow: '0 18px 44px rgba(11,37,69,0.32)',
//                                 color: '#FFFFFF',
//                                 fontSize: 12.5, fontWeight: 600,
//                                 fontFamily: 'var(--font-app)',
//                             }}
//                         >
//                             {toast.ok ? (
//                                 <CheckCircle2 style={{ width: 15, height: 15, color: 'var(--green-light)' }} />
//                             ) : (
//                                 <Sparkles style={{ width: 15, height: 15, color: '#F5C86B' }} />
//                             )}
//                             {toast.message}
//                         </motion.div>
//                     ))}
//                 </AnimatePresence>
//             </div>

//             {/* ── Detail Modal ─────────────────────────────────── */}
//             <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
//                 <DialogContent style={{
//                     maxWidth: 640,
//                     borderRadius: 24,
//                     border: '1.5px solid rgba(15,122,90,0.20)',
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
//                                 background: 'linear-gradient(90deg, var(--green), rgba(15,122,90,0.30), transparent)',
//                                 borderRadius: '24px 24px 0 0',
//                             }} />

//                             <DialogHeader style={{ paddingTop: 8 }}>
//                                 <DialogTitle style={{
//                                     fontSize: 'clamp(18px, 2.5vw, 24px)',
//                                     fontWeight: 700,
//                                     color: '#000000',
//                                     lineHeight: 1.35,
//                                     letterSpacing: 'var(--tracking-normal)',
//                                     fontFamily: 'var(--font-app)',
//                                 }}>
//                                     {selectedPub.title}
//                                 </DialogTitle>
//                                 <DialogDescription style={{
//                                     fontSize: 13, fontWeight: 500,
//                                     color: '#000000',
//                                     fontFamily: 'var(--font-app)',
//                                     marginTop: 8,
//                                 }}>
//                                     {selectedPub.authors}
//                                 </DialogDescription>
//                             </DialogHeader>

//                             <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
//                                 <p style={{
//                                     fontSize: 13.5, fontStyle: 'italic',
//                                     color: '#000000', opacity: 0.65,
//                                     fontFamily: 'var(--font-app)',
//                                     borderLeft: '2.5px solid rgba(15,122,90,0.40)',
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
//                                         background: 'rgba(15,122,90,0.08)',
//                                         color: '#000000',
//                                         border: '1px solid rgba(15,122,90,0.20)',
//                                         fontFamily: 'var(--font-app)',
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
//                             border: '1px solid rgba(15,122,90,0.20)',
//                             fontFamily: 'var(--font-app)',
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
//                                             background: 'rgba(15,122,90,0.08)',
//                                             color: '#000000',
//                                             border: '1px solid rgba(15,122,90,0.20)',
//                                             fontFamily: 'var(--font-app)',
//                                         }}>
//                                             <Quote style={{ width: 10, height: 10, color: 'var(--green)' }} />
//                                             {selectedPub.citations} Citations
//                                         </span>
//                                     )}
//                                 </div>

//                                 {/* CTAs */}
//                                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
//                                     <motion.button
//                                         type="button"
//                                         onClick={() => handleDownload(selectedPub)}
//                                         whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(11,37,69,0.28)' }}
//                                         whileTap={{ scale: 0.97 }}
//                                         style={{
//                                             display: 'inline-flex', alignItems: 'center', gap: 8,
//                                             padding: '11px 24px',
//                                             borderRadius: 100,
//                                             background: 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)',
//                                             border: '1px solid rgba(15,122,90,0.30)',
//                                             color: '#FFFFFF',
//                                             fontSize: 13, fontWeight: 700,
//                                             textDecoration: 'none',
//                                             fontFamily: 'var(--font-app)',
//                                             boxShadow: '0 6px 20px rgba(15,122,90,0.28)',
//                                             cursor: 'pointer',
//                                             transition: 'box-shadow 0.25s',
//                                         }}
//                                     >
//                                         <FileDown style={{ width: 14, height: 14 }} />
//                                         Download Document
//                                     </motion.button>

//                                     <motion.button
//                                         type="button"
//                                         onClick={() => handleCitation(selectedPub, 'bibtex')}
//                                         whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(11,37,69,0.22)' }}
//                                         whileTap={{ scale: 0.97 }}
//                                         style={{
//                                             display: 'inline-flex', alignItems: 'center', gap: 8,
//                                             padding: '11px 22px',
//                                             borderRadius: 100,
//                                             background: 'rgba(11,37,69,0.04)',
//                                             border: '1px solid rgba(11,37,69,0.12)',
//                                             color: '#000000',
//                                             fontSize: 13, fontWeight: 600,
//                                             fontFamily: 'var(--font-app)',
//                                             cursor: 'pointer',
//                                             transition: 'background 0.25s',
//                                         }}
//                                     >
//                                         <FileText style={{ width: 14, height: 14, color: 'var(--green)' }} />
//                                         Cite (BibTeX)
//                                     </motion.button>

//                                     {selectedPub.doi && (
//                                         <motion.a
//                                             href={selectedPub.doi.startsWith('http://') || selectedPub.doi.startsWith('https://') ? selectedPub.doi : `https://doi.org/${selectedPub.doi}`}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(11,37,69,0.28)' }}
//                                             whileTap={{ scale: 0.97 }}
//                                             style={{
//                                                 display: 'inline-flex', alignItems: 'center', gap: 8,
//                                                 padding: '11px 24px',
//                                                 borderRadius: 100,
//                                                 background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
//                                                 border: '1px solid rgba(15,122,90,0.22)',
//                                                 color: '#FFFFFF',
//                                                 fontSize: 13, fontWeight: 600,
//                                                 textDecoration: 'none',
//                                                 fontFamily: 'var(--font-app)',
//                                                 boxShadow: '0 4px 18px rgba(11,37,69,0.28)',
//                                                 alignSelf: 'flex-start',
//                                                 transition: 'box-shadow 0.25s',
//                                             }}
//                                         >
//                                             <ArrowUpRight style={{ width: 14, height: 14 }} />
//                                             Publisher Page
//                                         </motion.a>
//                                     )}
//                                     {(selectedPub as any).google_scholar_url && (
//                                         <motion.a
//                                             href={(selectedPub as any).google_scholar_url}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             whileHover={{ y: -2 }}
//                                             whileTap={{ scale: 0.97 }}
//                                             style={{
//                                                 display: 'inline-flex', alignItems: 'center', gap: 8,
//                                                 padding: '11px 22px',
//                                                 borderRadius: 100,
//                                                 background: 'rgba(255,255,255,0.70)',
//                                                 border: '1px solid rgba(11,37,69,0.10)',
//                                                 color: '#000000',
//                                                 fontSize: 13, fontWeight: 600,
//                                                 textDecoration: 'none',
//                                                 fontFamily: 'var(--font-app)',
//                                                 boxShadow: '0 4px 16px rgba(11,37,69,0.08)',
//                                             }}
//                                         >
//                                             <ExternalLink style={{ width: 14, height: 14, color: 'var(--green)' }} />
//                                             Google Scholar
//                                         </motion.a>
//                                     )}
//                                     {(selectedPub as any).researchgate_url && (
//                                         <motion.a
//                                             href={(selectedPub as any).researchgate_url}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             whileHover={{ y: -2 }}
//                                             whileTap={{ scale: 0.97 }}
//                                             style={{
//                                                 display: 'inline-flex', alignItems: 'center', gap: 8,
//                                                 padding: '11px 22px',
//                                                 borderRadius: 100,
//                                                 background: 'rgba(255,255,255,0.70)',
//                                                 border: '1px solid rgba(11,37,69,0.10)',
//                                                 color: '#000000',
//                                                 fontSize: 13, fontWeight: 600,
//                                                 textDecoration: 'none',
//                                                 fontFamily: 'var(--font-app)',
//                                                 boxShadow: '0 4px 16px rgba(11,37,69,0.08)',
//                                             }}
//                                         >
//                                             <ExternalLink style={{ width: 14, height: 14, color: 'var(--green)' }} />
//                                             ResearchGate
//                                         </motion.a>
//                                     )}
//                                     {((selectedPub as any).download_url || (selectedPub as any).file_url || (selectedPub as any).pdf_url) && (
//                                         <motion.a
//                                             href={(selectedPub as any).download_url || (selectedPub as any).file_url || (selectedPub as any).pdf_url}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             whileHover={{ y: -2 }}
//                                             whileTap={{ scale: 0.97 }}
//                                             style={{
//                                                 display: 'inline-flex', alignItems: 'center', gap: 8,
//                                                 padding: '11px 22px',
//                                                 borderRadius: 100,
//                                                 background: 'rgba(255,255,255,0.70)',
//                                                 border: '1px solid rgba(11,37,69,0.10)',
//                                                 color: '#000000',
//                                                 fontSize: 13, fontWeight: 600,
//                                                 textDecoration: 'none',
//                                                 fontFamily: 'var(--font-app)',
//                                                 boxShadow: '0 4px 16px rgba(11,37,69,0.08)',
//                                             }}
//                                         >
//                                             <Download style={{ width: 14, height: 14, color: 'var(--green)' }} />
//                                             Download PDF
//                                         </motion.a>
//                                     )}
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </DialogContent>
//             </Dialog>

//             <style>{`
//                 @keyframes pub-skeleton {
//                     0%   { background-position: 200% 0; }
//                     100% { background-position: -200% 0; }
//                 }
//             `}</style>
//         </section>
//     );
// }



"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlignLeft,
  ArrowRight,
  ArrowUpRight,
  BookMarked,
  Building2,
  Calendar,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  FileDown,
  FileText,
  Layers,
  Library,
  Link2,
  Lock,
  Quote,
  ScrollText,
  Sparkles,
  Tags,
  Unlock,
  Users,
  ChevronLeft,
  ChevronRight,
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
import {
  buildFormattedCitation,
  citationKey,
  cleanDoi,
  downloadCitation,
  downloadPublication,
  resolveDocumentUrl,
  resolveDoiUrl,
} from "../lib/publicationExport";
import type { CitationFormat, DownloadOutcome, PublicationRecord } from "../lib/publicationExport";

// ─── Types ────────────────────────────────────────────────────────────────
type Publication = PublicationRecord;

const ITEMS_PER_SLIDE = 3;

type ToastState = { id: number; ok: boolean; message: string };

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Field helpers ────────────────────────────────────────────────────────

/** Normalises any Supabase column value into displayable text. */
function fieldText(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  return String(value).trim();
}

/** Keywords arrive as a Postgres text[] or a comma/semicolon separated string. */
function keywordList(value: unknown): string[] {
  const raw = Array.isArray(value) ? value : fieldText(value).split(/[;,|]/);
  const seen = new Set<string>();
  const result: string[] = [];

  for (const item of raw) {
    const keyword = fieldText(item);
    if (!keyword) continue;
    const key = keyword.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(keyword);
  }

  return result;
}

/** "Volume 12, Issue 3, pp. 45-67" — only the parts that actually exist. */
function bibliographicLine(pub: Publication): string {
  const parts: string[] = [];

  const volume = fieldText(pub.volume);
  const issue = fieldText(pub.issue);
  const pages = fieldText(pub.pages);

  if (volume && issue) parts.push(`Volume ${volume}, Issue ${issue}`);
  else if (volume) parts.push(`Volume ${volume}`);
  else if (issue) parts.push(`Issue ${issue}`);

  if (pages) parts.push(`pp. ${pages}`);

  return parts.join(" · ");
}

/** Related research is free text: honour newlines, bullets and semicolons. */
function relatedLines(value: unknown): string[] {
  return fieldText(value)
    .split(/\r?\n|;|•|(?=\s-\s)/)
    .map((line) => line.replace(/^[\s\-–—•*\d.)\]]+/, "").trim())
    .filter(Boolean);
}

/** Falls back to a generated APA-ish citation when the record has none stored. */
function citationText(pub: Publication): string {
  const stored = fieldText(pub.citation);
  if (stored) return stored;
  const fallback = buildFormattedCitation(pub).trim();
  return fallback && fallback !== "." ? fallback : "";
}

// ─── Stat chip ────────────────────────────────────────────────────────────
function StatChip({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <div className="pubs-stat">
      <span className="pubs-stat-icon">{icon}</span>
      <span className="pubs-stat-text">
        <span className="pubs-stat-value">{value}</span>
        <span className="pubs-stat-label">{label}</span>
      </span>
    </div>
  );
}

// ─── Citation download menu ───────────────────────────────────────────────
function DownloadMenu({ onCitation }: { onCitation: (format: CitationFormat) => void }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const options: Array<{ format: CitationFormat; label: string; hint: string }> = [
    { format: "bibtex", label: "BibTeX", hint: ".bib" },
    { format: "ris", label: "RIS", hint: ".ris" },
    { format: "text", label: "Plain text", hint: ".txt" },
  ];

  return (
    <div ref={wrapperRef} className="pubs-menu-wrap">
      <button
        type="button"
        className={`pubs-icon-btn${open ? " is-open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="More citation formats"
        title="More citation formats"
      >
        <Download size={14} aria-hidden />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            className="pubs-menu"
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: EASE }}
          >
            {options.map((option) => (
              <button
                key={option.format}
                type="button"
                role="menuitem"
                className="pubs-menu-item"
                onClick={() => {
                  setOpen(false);
                  onCitation(option.format);
                }}
              >
                <span className="pubs-menu-item-label">
                  <FileDown size={14} aria-hidden />
                  {option.label}
                </span>
                <span className="pubs-menu-item-hint">{option.hint}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Publication card ─────────────────────────────────────────────────────
function PublicationCard({
  pub,
  index,
  onSelect,
  onCitation,
}: {
  pub: Publication;
  index: number;
  onSelect: (pub: Publication) => void;
  onCitation: (pub: Publication, format: CitationFormat) => void;
}) {
  const sourceUrl = resolveDocumentUrl(pub);
  const scholarUrl = fieldText(pub.google_scholar_url);
  const researchGateUrl = fieldText(pub.researchgate_url);
  const biblio = bibliographicLine(pub);
  const abstract = fieldText(pub.abstract);
  const keywords = keywordList(pub.keywords);
  const doiUrl = resolveDoiUrl(pub.doi);

  return (
    <article className="pubs-card" onClick={() => onSelect(pub)}>
      <span className="pubs-card-accent" aria-hidden="true" />
      <span className="pubs-card-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Meta row */}
      <div className="pubs-card-meta">
        <span className="pubs-year">
          <Calendar size={13} aria-hidden />
          {pub.year}
        </span>

        <div className="pubs-badges">
          {pub.citations !== undefined && (
            <span className="pubs-badge pubs-badge-cited">
              <Quote size={10} aria-hidden />
              {pub.citations} cited
            </span>
          )}
          {pub.open_access ? (
            <span className="pubs-badge pubs-badge-open">
              <Unlock size={10} aria-hidden />
              Open Access
            </span>
          ) : (
            <span className="pubs-badge pubs-badge-sub">
              <Lock size={10} aria-hidden />
              Subscription
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="pubs-card-body">
        <p className="pubs-card-label">
          <FileText size={10} aria-hidden />
          Title
        </p>
        <h3 className="pubs-card-title">{pub.title}</h3>

        <p className="pubs-card-label">
          <Users size={10} aria-hidden />
          Authors
        </p>
        <p className="pubs-card-authors">{pub.authors}</p>

        <p className="pubs-card-label">
          <BookMarked size={10} aria-hidden />
          Journal
        </p>
        <p className="pubs-card-journal">{pub.journal}</p>

        {biblio && (
          <p className="pubs-card-biblio">
            <Library size={12} aria-hidden />
            <span>{biblio}</span>
          </p>
        )}

        {abstract && (
          <>
            <p className="pubs-card-label">
              <AlignLeft size={10} aria-hidden />
              Abstract
            </p>
            <p className="pubs-card-abstract">{abstract}</p>
          </>
        )}

        {keywords.length > 0 && (
          <>
            <p className="pubs-card-label">
              <Tags size={10} aria-hidden />
              Keywords
            </p>
            <ul className="pubs-card-keywords">
              {keywords.slice(0, 4).map((keyword) => (
                <li key={keyword} className="pubs-keyword">
                  {keyword}
                </li>
              ))}
              {keywords.length > 4 && (
                <li className="pubs-keyword pubs-keyword-more">+{keywords.length - 4}</li>
              )}
            </ul>
          </>
        )}

        {doiUrl && (
          <a
            href={doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pubs-card-doi"
            onClick={(e) => e.stopPropagation()}
          >
            <Link2 size={12} aria-hidden />
            <span>DOI {cleanDoi(pub.doi)}</span>
          </a>
        )}
      </div>

      {/* Source links */}
      {(sourceUrl || scholarUrl || researchGateUrl) && (
        <div className="pubs-links">
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pubs-link pubs-link-green"
              onClick={(e) => e.stopPropagation()}
            >
              Source <ArrowUpRight size={13} aria-hidden />
            </a>
          )}
          {scholarUrl && (
            <a
              href={scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pubs-link"
              onClick={(e) => e.stopPropagation()}
            >
              Google Scholar <ArrowUpRight size={13} aria-hidden />
            </a>
          )}
          {researchGateUrl && (
            <a
              href={researchGateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pubs-link"
              onClick={(e) => e.stopPropagation()}
            >
              ResearchGate <ArrowUpRight size={13} aria-hidden />
            </a>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="pubs-card-footer">
        <button
          type="button"
          className="pubs-details-btn"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(pub);
          }}
        >
          View Details
          <ArrowRight size={14} aria-hidden />
        </button>

        {/* <div className="pubs-card-actions" onClick={(e) => e.stopPropagation()}>
          <DownloadMenu onCitation={(format) => onCitation(pub, format)} />
        </div> */}













      </div>
    </article>
  );
}

function PublicationSkeleton() {
  return (
    <div aria-hidden="true" className="pubs-skeleton">
      {[68, 22, 92, 74, 58].map((width, i) => (
        <div
          key={i}
          className="pubs-skeleton-line"
          style={{ width: `${width}%`, height: i === 0 ? 18 : 11 }}
        />
      ))}
      <div style={{ flex: 1 }} />
      <div className="pubs-skeleton-foot" />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────
export function PublicationsSection() {
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState<ToastState[]>([]);
  const toastIdRef = useRef(0);

  useEffect(() => {
    async function fetchPublications() {
      try {
        const { data } = await supabase
          .from("publications")
          .select("*")
          .order("year", { ascending: false });
        if (data) setPublications(data);
      } catch (err) {
        console.error("Error fetching publications:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPublications();
  }, []);

  const pushToast = useCallback((outcome: DownloadOutcome) => {
    toastIdRef.current += 1;
    const toast: ToastState = { id: toastIdRef.current, ok: outcome.ok, message: outcome.message };
    setToasts((prev) => [...prev.slice(-2), toast]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== toast.id));
    }, 3600);
  }, []);

  const handleDownload = useCallback(
    async (pub: Publication) => {
      pushToast(await downloadPublication(pub));
    },
    [pushToast],
  );

  const handleCitation = useCallback(
    (pub: Publication, format: CitationFormat) => {
      pushToast(downloadCitation(pub, format));
    },
    [pushToast],
  );

  const sortedPublications = useMemo(
    () => [...publications].sort((a, b) => b.year - a.year),
    [publications],
  );

  const totalCitations = useMemo(
    () => sortedPublications.reduce((sum, pub) => sum + (pub.citations ?? 0), 0),
    [sortedPublications],
  );
  const openAccessCount = useMemo(
    () => sortedPublications.filter((pub) => pub.open_access).length,
    [sortedPublications],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides = useMemo(() => {
    const groups: Publication[][] = [];
    for (let i = 0; i < sortedPublications.length; i += ITEMS_PER_SLIDE)
      groups.push(sortedPublications.slice(i, i + ITEMS_PER_SLIDE));
    return groups;
  }, [sortedPublications]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    if (!emblaApi || slides.length <= 1) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => emblaApi?.scrollNext(), 5000);
  }, [emblaApi, slides.length]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi || slides.length <= 1) return;
    startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi, slides.length, startAutoplay, stopAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setSelectedIndex(0);
      emblaApi.scrollTo(0);
    }
  }, [emblaApi, slides]);

  const handleCopy = useCallback(
    async (value: string, label: string) => {
      const text = value.trim();
      if (!text) {
        pushToast({ ok: false, kind: "citation", message: `Nothing to copy for the ${label}` });
        return;
      }

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const area = document.createElement("textarea");
          area.value = text;
          area.setAttribute("readonly", "");
          area.style.position = "fixed";
          area.style.opacity = "0";
          document.body.appendChild(area);
          area.select();
          document.execCommand("copy");
          area.remove();
        }
        pushToast({ ok: true, kind: "citation", message: `${label} copied to clipboard` });
      } catch {
        pushToast({ ok: false, kind: "citation", message: `Could not copy the ${label}` });
      }
    },
    [pushToast],
  );

  const doiHref = selectedPub ? resolveDoiUrl(selectedPub.doi) : null;
  const selPdfUrl = selectedPub
    ? fieldText(selectedPub.download_url) || fieldText(selectedPub.file_url) || fieldText(selectedPub.pdf_url)
    : null;
  const selAbstract = fieldText(selectedPub?.abstract);
  const selKeywords = keywordList(selectedPub?.keywords);
  const selBiblio = selectedPub ? bibliographicLine(selectedPub) : "";
  const selPublisher = fieldText(selectedPub?.publisher);
  const selPages = fieldText(selectedPub?.pages);
  const selVolume = fieldText(selectedPub?.volume);
  const selIssue = fieldText(selectedPub?.issue);
  const selCitation = selectedPub ? citationText(selectedPub) : "";
  const selBibKey = selectedPub ? citationKey(selectedPub) : "";
  const selRelated = relatedLines(selectedPub?.related_research);

  return (
    <section id="publications" aria-label="Publications" className="pubs-section">
      <div className="pubs-divider-top" />

      {/* Background */}
      <div aria-hidden="true" className="pubs-bg">
        <div className="pubs-bg-orb pubs-bg-orb-1" />
        <div className="pubs-bg-orb pubs-bg-orb-2" />
        <div className="pubs-bg-dots" />
      </div>

      <div className="pubs-container">
        {/* ── Header ── */}
        <motion.header
          className="pubs-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="pubs-eyebrow">
            <BookMarked size={13} aria-hidden />
            <span>Research Output</span>
            <BookMarked size={13} aria-hidden />
          </div>

          <h2 className="pubs-heading">
            Scholarly Publications
          </h2>

          <div className="pubs-rule" aria-hidden="true">
            <span className="pubs-rule-line pubs-rule-left" />
            <span className="pubs-rule-dot" />
            <span className="pubs-rule-line pubs-rule-right" />
          </div>

          {!loading && sortedPublications.length > 0 && (
            <div className="pubs-stats">
              <StatChip
                icon={<Library size={15} />}
                value={String(sortedPublications.length)}
                label="Publications"
              />
              <StatChip icon={<Unlock size={15} />} value={String(openAccessCount)} label="Open Access" />
              <StatChip
                icon={<Quote size={15} />}
                value={totalCitations.toLocaleString("en-US")}
                label="Citations"
              />
            </div>
          )}
        </motion.header>

        {/* ── Carousel ── */}
        <div
          className="pubs-carousel"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          onFocus={stopAutoplay}
          onBlur={startAutoplay}
        >
          <div ref={emblaRef} className="pubs-viewport">
            <div className="pubs-track">
              {loading
                ? [0, 1, 2].map((key) => (
                    <div key={key} className="pubs-slide">
                      <PublicationSkeleton />
                    </div>
                  ))
                : slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className="pubs-slide">
                      <div className="pubs-grid">
                        {slide.map((pub, pubIndex) => (
                          <PublicationCard
                            key={pub.id}
                            pub={pub}
                            index={slideIndex * ITEMS_PER_SLIDE + pubIndex}
                            onSelect={setSelectedPub}
                            onCitation={handleCitation}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          {/* Controls */}
          {slides.length > 1 && (
            <div className="pubs-controls">
              <button
                type="button"
                className="pubs-nav-btn"
                onClick={scrollPrev}
                aria-label="Previous publications"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="pubs-dots">
                {emblaApi?.scrollSnapList().map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`pubs-dot${index === selectedIndex ? " is-active" : ""}`}
                    onClick={() => emblaApi.scrollTo(index)}
                    aria-label={`Go to slide group ${index + 1}`}
                    aria-current={index === selectedIndex}
                  />
                ))}
              </div>

              <button
                type="button"
                className="pubs-nav-btn"
                onClick={scrollNext}
                aria-label="Next publications"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* ── Footer bar ── */}
        {/* <motion.div
          className="pubs-footbar"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="pubs-footbar-text">
            <FileText size={15} aria-hidden />
            Showing all {sortedPublications.length} publications
            <span className="pubs-footbar-sep">•</span>
            {openAccessCount} open access
          </p>

          <button
            type="button"
            className="pubs-all-btn"
            onClick={handleDownloadAll}
            disabled={sortedPublications.length === 0}
          >
            <Download size={14} aria-hidden />
            Download All
          </button>
        </motion.div> */}
      </div>

      <div className="pubs-divider-bottom" />

      {/* ── Toasts ── */}
      <div role="status" aria-live="polite" className="pubs-toasts">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              className="pubs-toast"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.24, ease: EASE }}
            >
              {toast.ok ? (
                <CheckCircle2 size={16} style={{ color: "var(--green-light)", flexShrink: 0 }} />
              ) : (
                <Sparkles size={16} style={{ color: "#F5C86B", flexShrink: 0 }} />
              )}
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Detail modal ── */}
      <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
        <DialogContent className="pubs-modal">
          {selectedPub && (
            <>
              <div className="pubs-modal-bar" aria-hidden="true" />

              <DialogHeader className="pubs-modal-header">
                <div className="pubs-modal-badges">
                  <span className="pubs-badge pubs-badge-cited">{selectedPub.year}</span>
                  {selectedPub.open_access && (
                    <span className="pubs-badge pubs-badge-open">
                      <Unlock size={10} aria-hidden />
                      Open Access
                    </span>
                  )}
                  {selectedPub.citations !== undefined && (
                    <span className="pubs-badge pubs-badge-cited">
                      <Quote size={10} aria-hidden />
                      {selectedPub.citations} Citations
                    </span>
                  )}
                </div>

                <DialogTitle className="pubs-modal-title">{selectedPub.title}</DialogTitle>
                <DialogDescription className="pubs-modal-authors">{selectedPub.authors}</DialogDescription>
              </DialogHeader>

              {/* Journal / imprint */}
              <div className="pubs-modal-source">
                <p className="pubs-modal-journal">
                  <BookMarked size={14} aria-hidden />
                  <span>{fieldText(selectedPub.journal)}</span>
                </p>
                {selPublisher && (
                  <p className="pubs-modal-publisher">
                    <Building2 size={13} aria-hidden />
                    <span>Published by {selPublisher}</span>
                  </p>
                )}
                {selBiblio && (
                  <p className="pubs-modal-biblio">
                    <Library size={13} aria-hidden />
                    <span>{selBiblio}</span>
                  </p>
                )}
              </div>

              {/* Volume · Issue · Pages · Year · Citations */}
              {(selVolume || selIssue || selPages || selectedPub.year) && (
                <dl className="pubs-meta">
                  {selVolume && (
                    <div className="pubs-meta-item">
                      <dt>
                        <Library size={11} aria-hidden />
                        Volume
                      </dt>
                      <dd>{selVolume}</dd>
                    </div>
                  )}
                  {selIssue && (
                    <div className="pubs-meta-item">
                      <dt>
                        <Layers size={11} aria-hidden />
                        Issue
                      </dt>
                      <dd>{selIssue}</dd>
                    </div>
                  )}
                  {selPages && (
                    <div className="pubs-meta-item">
                      <dt>
                        <ScrollText size={11} aria-hidden />
                        Pages
                      </dt>
                      <dd>{selPages}</dd>
                    </div>
                  )}
                  <div className="pubs-meta-item">
                    <dt>
                      <Calendar size={11} aria-hidden />
                      Year
                    </dt>
                    <dd>{selectedPub.year}</dd>
                  </div>
                  {selectedPub.citations !== undefined && selectedPub.citations !== null && (
                    <div className="pubs-meta-item">
                      <dt>
                        <Quote size={11} aria-hidden />
                        Citations
                      </dt>
                      <dd>{selectedPub.citations}</dd>
                    </div>
                  )}
                </dl>
              )}

              {/* Abstract */}
              {selAbstract && (
                <section className="pubs-block">
                  <h4 className="pubs-block-title">
                    <AlignLeft size={13} aria-hidden />
                    Abstract
                  </h4>
                  <p className="pubs-abstract">{selAbstract}</p>
                </section>
              )}

              {/* Keywords */}
              {selKeywords.length > 0 && (
                <section className="pubs-block">
                  <h4 className="pubs-block-title">
                    <Tags size={13} aria-hidden />
                    Keywords
                  </h4>
                  <ul className="pubs-keywords">
                    {selKeywords.map((keyword) => (
                      <li key={keyword} className="pubs-keyword">
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* DOI */}
              {doiHref && (
                <section className="pubs-block">
                  <h4 className="pubs-block-title">
                    <Link2 size={13} aria-hidden />
                    DOI
                  </h4>
                  <div className="pubs-doi">
                    <a href={doiHref} target="_blank" rel="noopener noreferrer" className="pubs-doi-link">
                      {cleanDoi(selectedPub.doi) || doiHref}
                      <ArrowUpRight size={12} aria-hidden />
                    </a>
                    <button
                      type="button"
                      className="pubs-copy-btn"
                      onClick={() => handleCopy(doiHref, "DOI")}
                      aria-label="Copy DOI"
                    >
                      <Copy size={12} aria-hidden />
                      Copy
                    </button>
                  </div>
                </section>
              )}

              {/* Citation */}
              <section className="pubs-block">
                <h4 className="pubs-block-title">
                  <Quote size={13} aria-hidden />
                  Citation
                </h4>
                {selCitation ? (
                  <blockquote className="pubs-citation">{selCitation}</blockquote>
                ) : (
                  <p className="pubs-empty">No citation text stored for this record.</p>
                )}
                <div className="pubs-citation-actions">
                  <button
                    type="button"
                    className="pubs-chip-btn"
                    onClick={() => handleCitation(selectedPub, "bibtex")}
                  >
                    <FileDown size={12} aria-hidden />
                    BibTeX
                  </button>
                  <button
                    type="button"
                    className="pubs-chip-btn"
                    onClick={() => handleCitation(selectedPub, "ris")}
                  >
                    <FileDown size={12} aria-hidden />
                    RIS
                  </button>
                  <button
                    type="button"
                    className="pubs-chip-btn"
                    onClick={() => handleCitation(selectedPub, "text")}
                  >
                    <FileText size={12} aria-hidden />
                    Plain text
                  </button>
                  <button
                    type="button"
                    className="pubs-chip-btn"
                    onClick={() => handleCopy(selCitation, "citation")}
                    disabled={!selCitation}
                  >
                    <Copy size={12} aria-hidden />
                    Copy
                  </button>
                  {selBibKey && <code className="pubs-bibkey">{selBibKey}</code>}
                </div>
              </section>

              {/* Related research */}
              {selRelated.length > 0 && (
                <section className="pubs-block">
                  <h4 className="pubs-block-title">
                    <Layers size={13} aria-hidden />
                    Related Research
                  </h4>
                  <ul className="pubs-related">
                    {selRelated.map((line, lineIndex) => (
                      <li key={`${line}-${lineIndex}`}>{line}</li>
                    ))}
                  </ul>
                </section>
              )}

              <div className="pubs-modal-ctas">
                <button type="button" className="pubs-cta pubs-cta-green" onClick={() => handleDownload(selectedPub)}>
                  <FileDown size={15} aria-hidden />
                  Download Document
                </button>

                {selPdfUrl && (
                  <a href={selPdfUrl} target="_blank" rel="noopener noreferrer" className="pubs-cta pubs-cta-outline">
                    <Download size={15} aria-hidden />
                    Download PDF
                  </a>
                )}

                {doiHref && (
                  <a href={doiHref} target="_blank" rel="noopener noreferrer" className="pubs-cta pubs-cta-navy">
                    <ArrowUpRight size={15} aria-hidden />
                    Publisher Page
                  </a>
                )}

                {fieldText(selectedPub.google_scholar_url) && (
                  <a
                    href={fieldText(selectedPub.google_scholar_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pubs-cta pubs-cta-outline"
                  >
                    <ExternalLink size={15} aria-hidden />
                    Google Scholar
                  </a>
                )}

                {fieldText(selectedPub.researchgate_url) && (
                  <a
                    href={fieldText(selectedPub.researchgate_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pubs-cta pubs-cta-outline"
                  >
                    <ExternalLink size={15} aria-hidden />
                    ResearchGate
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <style>{`
        .pubs-section {
          position: relative;
          padding: clamp(48px, 7vw, 80px) 0;
          background: var(--gray-50);
          overflow: hidden;
          font-family: var(--font-app);
          -webkit-font-smoothing: antialiased;
        }
        .pubs-section *, .pubs-section *::before, .pubs-section *::after { box-sizing: border-box; }
        .pubs-section button, .pubs-section a { font-family: var(--font-app); }
        .pubs-section button:focus-visible,
        .pubs-section a:focus-visible,
        .pubs-modal button:focus-visible,
        .pubs-modal a:focus-visible {
          outline: 2px solid var(--green);
          outline-offset: 3px;
        }

        /* Dividers + background */
        .pubs-divider-top, .pubs-divider-bottom { position: absolute; left: 0; right: 0; height: 1px; }
        .pubs-divider-top { top: 0; background: linear-gradient(90deg, transparent, rgba(15,122,90,0.30), rgba(11,37,69,0.12), transparent); }
        .pubs-divider-bottom { bottom: 0; background: linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(15,122,90,0.20), transparent); }
        .pubs-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
        .pubs-bg-orb { position: absolute; border-radius: 50%; }
        .pubs-bg-orb-1 { top: -12%; right: -12%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(15,122,90,0.07) 0%, rgba(26,64,128,0.04) 50%, transparent 75%); }
        .pubs-bg-orb-2 { bottom: -15%; left: -12%; width: 680px; height: 680px; background: radial-gradient(circle, rgba(11,37,69,0.07) 0%, rgba(26,92,184,0.03) 50%, transparent 70%); }
        .pubs-bg-dots { position: absolute; inset: 0; opacity: 0.022; background-image: radial-gradient(circle, #0B2545 1px, transparent 1px); background-size: 36px 36px; }

        .pubs-container {
          position: relative; z-index: 10;
          width: 100%; max-width: 1240px; margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 56px);
        }

        /* Header */
        .pubs-header { margin-bottom: clamp(36px, 5vw, 56px); text-align: center; }
        .pubs-eyebrow {
          display: inline-flex; align-items: center;
          gap: 10px; margin-bottom: 20px; padding: 8px 20px; border-radius: 100px;
          background: rgba(15,122,90,0.08); border: 1px solid rgba(15,122,90,0.22);
          color: var(--green);
        }
        .pubs-eyebrow span { font-size: 11px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #000000; }
        .pubs-heading { margin: 0; font-size: clamp(32px, 4.8vw, 52px); font-weight: 700; line-height: 1.1; letter-spacing: var(--tracking-display); color: #000000; }
        .pubs-heading-accent { background: linear-gradient(90deg, var(--green) 0%, var(--green-light) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .pubs-rule { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 24px; }
        .pubs-rule-line { height: 1px; width: 64px; }
        .pubs-rule-left { background: linear-gradient(to right, transparent, rgba(15,122,90,0.50)); }
        .pubs-rule-right { background: linear-gradient(to left, transparent, rgba(15,122,90,0.50)); }
        .pubs-rule-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); opacity: 0.7; }

        /* Stats */
        .pubs-stats { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 32px; }
        .pubs-stat {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 10px 20px 10px 12px; border-radius: 100px;
          background: rgba(255,255,255,0.8); border: 1px solid rgba(11,37,69,0.08);
          box-shadow: 0 4px 18px rgba(11,37,69,0.05); backdrop-filter: blur(8px);
        }
        .pubs-stat-icon { display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; background: rgba(15,122,90,0.10); color: var(--green); }
        .pubs-stat-text { display: flex; align-items: baseline; gap: 8px; }
        .pubs-stat-value { font-size: 17px; font-weight: 800; color: #000000; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; }
        .pubs-stat-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #000000; }

        /* Carousel */
        .pubs-carousel { position: relative; }
        .pubs-viewport { overflow: hidden; margin: -16px -12px; padding: 16px 12px 28px; }
        .pubs-track { display: flex; }
        .pubs-slide { flex: 0 0 100%; min-width: 0; padding: 0 4px; }
        .pubs-grid {
          display: grid; gap: 22px; align-items: stretch;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
        }

        /* Card */
        .pubs-card {
          position: relative; display: flex; flex-direction: column; height: 100%;
          padding: clamp(22px, 2.4vw, 30px);
          background: #FFFFFF; border-radius: 20px; overflow: hidden; cursor: pointer;
          border: 1px solid rgba(11,37,69,0.07);
          box-shadow: 0 1px 2px rgba(11,37,69,0.04), 0 8px 28px rgba(11,37,69,0.06);
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s, border-color 0.35s;
        }
        .pubs-card:hover {
          transform: translateY(-6px);
          border-color: rgba(15,122,90,0.22);
          box-shadow: 0 24px 64px rgba(11,37,69,0.14), 0 8px 24px rgba(15,122,90,0.08);
        }
        .pubs-card-accent {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--green), rgba(15,122,90,0.15), transparent);
          transform: scaleX(0.18); transform-origin: left; opacity: 0.9;
          transition: transform 0.5s cubic-bezier(.22,1,.36,1);
        }
        .pubs-card:hover .pubs-card-accent { transform: scaleX(1); }
        .pubs-card-index {
          position: absolute; right: 18px; bottom: 54px;
          font-size: 84px; font-weight: 800; line-height: 1; letter-spacing: -0.04em;
          color: #000000; opacity: 0.035; pointer-events: none; user-select: none;
        }

        .pubs-card-meta { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 18px; }
        .pubs-year { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; color: #000000; font-variant-numeric: tabular-nums; }
        .pubs-year svg { color: var(--green); }
        .pubs-badges { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }

        .pubs-badge {
          display: inline-flex; align-items: center; gap: 5px; padding: 4px 11px; border-radius: 100px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; white-space: nowrap;
        }
        .pubs-badge-open { background: linear-gradient(135deg, var(--navy), var(--navy-light)); color: #FFFFFF; border: 1px solid rgba(15,122,90,0.30); box-shadow: 0 2px 8px rgba(11,37,69,0.20); }
        .pubs-badge-open svg { color: var(--green); }
        .pubs-badge-sub { background: rgba(11,37,69,0.05); color: #000000; border: 1px solid rgba(11,37,69,0.10); font-weight: 600; }
        .pubs-badge-cited { background: rgba(15,122,90,0.08); color: #000000; border: 1px solid rgba(15,122,90,0.20); font-weight: 600; letter-spacing: 0.02em; text-transform: none; font-size: 11px; }
        .pubs-badge-cited svg { color: var(--green); }

        .pubs-card-body { position: relative; flex: 1; padding-top: 18px; border-top: 1px solid transparent; border-image: linear-gradient(to right, rgba(15,122,90,0.30), transparent) 1; }
        .pubs-card-label {
          display: inline-flex; align-items: center; gap: 6px; width: fit-content;
          margin: 0 0 8px; padding: 3px 11px 3px 8px; border-radius: 100px;
          background: linear-gradient(135deg, rgba(15,122,90,0.11), rgba(15,122,90,0.04));
          border: 1px solid rgba(15,122,90,0.18);
          font-size: 9.5px; font-weight: 700; line-height: 1.6; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--green); white-space: nowrap;
          box-shadow: 0 1px 3px rgba(15,122,90,0.06);
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .pubs-card-label svg { flex-shrink: 0; }
        .pubs-card-label::before {
          content: ""; flex: none; width: 5px; height: 5px; border-radius: 50%;
          background: var(--green); box-shadow: 0 0 0 3px rgba(15,122,90,0.16);
        }
        .pubs-card:hover .pubs-card-label {
          background: linear-gradient(135deg, rgba(15,122,90,0.20), rgba(15,122,90,0.07));
          border-color: rgba(15,122,90,0.34);
          box-shadow: 0 3px 10px rgba(15,122,90,0.14);
        }
        .pubs-card-title {
          margin: 0 0 18px; font-size: clamp(16px, 1.7vw, 18.5px); font-weight: 700; line-height: 1.38;
          letter-spacing: var(--tracking-heading); color: #000000;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
          transition: color 0.25s;
        }
        .pubs-card:hover .pubs-card-title { color: var(--green); }
        .pubs-card-authors { margin: 0 0 18px; font-size: 13.5px; font-weight: 500; line-height: 1.6; color: #000000; }
        .pubs-card-journal {
          margin: 6px 0 0; font-size: 12.5px; font-style: italic; line-height: 1.5; color: #000000; opacity: 0.6;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .pubs-card-biblio {
          display: flex; align-items: flex-start; gap: 7px;
          margin: 6px 0 18px; font-size: 11.5px; font-weight: 600; letter-spacing: 0.02em;
          color: var(--green); font-variant-numeric: tabular-nums;
        }
        .pubs-card-biblio svg { flex-shrink: 0; margin-top: 2px; }
        .pubs-card-abstract {
          margin: 6px 0 18px; font-size: 12.5px; font-weight: 400; line-height: 1.65; color: #000000;
          display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;
        }
        .pubs-card-keywords { display: flex; flex-wrap: wrap; gap: 6px; margin: 6px 0 0; padding: 0; list-style: none; }
        .pubs-card-doi {
          display: inline-flex; align-items: center; gap: 6px; margin-top: 16px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.02em; color: #000000; opacity: 0.72;
          text-decoration: none; word-break: break-word; transition: color 0.2s, opacity 0.2s;
        }
        .pubs-card-doi svg { color: var(--green); flex-shrink: 0; }
        .pubs-card-doi:hover { color: var(--green); opacity: 1; }

        .pubs-links { position: relative; display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
        .pubs-link {
          display: inline-flex; align-items: center; gap: 4px; padding: 5px 11px; border-radius: 8px;
          font-size: 12px; font-weight: 600; text-decoration: none; color: #000000;
          background: rgba(11,37,69,0.04); border: 1px solid rgba(11,37,69,0.06);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .pubs-link:hover { background: rgba(15,122,90,0.10); border-color: rgba(15,122,90,0.25); }
        .pubs-link-green { color: var(--green); background: rgba(15,122,90,0.06); border-color: rgba(15,122,90,0.18); }
        .pubs-link svg { transition: transform 0.2s; }
        .pubs-link:hover svg { transform: translate(2px, -2px); }

        .pubs-card-footer {
          position: relative; display: flex; align-items: center; justify-content: space-between; gap: 12px;
          margin-top: 22px; padding-top: 16px; border-top: 1px solid rgba(11,37,69,0.07);
        }
        .pubs-details-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: 8px; cursor: pointer;
          background: #FFFFFF; border: 1px solid rgba(11,37,69,0.18);
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: #000000;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .pubs-details-btn:hover { color: var(--green); background: rgba(15,122,90,0.08); border-color: rgba(15,122,90,0.45); }
        .pubs-details-btn:active { transform: scale(0.98); }
        .pubs-card-actions { display: flex; align-items: center; gap: 8px; }

        .pubs-pdf-btn {
          display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 13px; border-radius: 8px; cursor: pointer;
          background: var(--navy);
          border: 1px solid transparent; color: #FFFFFF;
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase;
          box-shadow: 0 4px 14px rgba(11,37,69,0.20);
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .pubs-pdf-btn svg { color: var(--green-light); }
        .pubs-pdf-btn:hover { background: var(--green); transform: translateY(-1px); box-shadow: 0 8px 20px rgba(15,122,90,0.28); }
        .pubs-pdf-btn:active { transform: scale(0.97); }

        .pubs-icon-btn {
          display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; padding: 0; border-radius: 8px; cursor: pointer;
          background: rgba(11,37,69,0.05); border: 1px solid rgba(11,37,69,0.08); color: #000000;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .pubs-icon-btn:hover, .pubs-icon-btn.is-open { background: rgba(15,122,90,0.14); border-color: rgba(15,122,90,0.30); }
        .pubs-icon-btn:active { transform: scale(0.96); }

        .pubs-menu-wrap { position: relative; display: inline-flex; }
        .pubs-menu {
          position: absolute; bottom: calc(100% + 8px); right: 0; z-index: 30; min-width: 172px; padding: 6px; border-radius: 14px;
          background: #FFFFFF; border: 1px solid rgba(11,37,69,0.08); box-shadow: 0 18px 46px rgba(11,37,69,0.18);
        }
        .pubs-menu-item {
          display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%;
          padding: 9px 10px; border-radius: 9px; background: transparent; border: none; cursor: pointer; text-align: left;
          transition: background 0.15s;
        }
        .pubs-menu-item:hover, .pubs-menu-item:focus-visible { background: rgba(15,122,90,0.08); }
        .pubs-menu-item-label { display: inline-flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 700; color: #000000; }
        .pubs-menu-item-label svg { color: var(--green); }
        .pubs-menu-item-hint { font-size: 10.5px; font-weight: 600; color: #000000; }

        /* Skeleton */
        .pubs-skeleton {
          height: 100%; min-height: 340px; display: flex; flex-direction: column; gap: 14px;
          padding: clamp(22px, 2.4vw, 30px); border-radius: 20px; background: #FFFFFF;
          border: 1px solid rgba(11,37,69,0.06); box-shadow: 0 8px 28px rgba(11,37,69,0.05);
        }
        .pubs-skeleton-line {
          border-radius: 6px; background-size: 200% 100%;
          background-image: linear-gradient(90deg, rgba(11,37,69,0.05), rgba(15,122,90,0.10), rgba(11,37,69,0.05));
          animation: pubs-skeleton 1.4s ease-in-out infinite;
        }
        .pubs-skeleton-foot { width: 38%; height: 11px; border-radius: 6px; background: rgba(11,37,69,0.05); }

        /* Controls */
        .pubs-controls { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 4px; }
        .pubs-nav-btn {
          display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; padding: 0; border-radius: 50%; cursor: pointer;
          background: #FFFFFF; border: 1.5px solid rgba(15,122,90,0.25); color: #000000;
          box-shadow: 0 4px 16px rgba(11,37,69,0.10);
          transition: transform 0.2s, box-shadow 0.25s, background 0.2s, border-color 0.2s;
        }
        .pubs-nav-btn:hover { transform: scale(1.08); border-color: var(--green); box-shadow: 0 8px 28px rgba(11,37,69,0.16); }
        .pubs-nav-btn:active { transform: scale(0.94); }
        .pubs-dots { display: flex; align-items: center; gap: 10px; }
        .pubs-dot {
          height: 8px; width: 8px; padding: 0; border: none; border-radius: 100px; cursor: pointer; background: rgba(11,37,69,0.18);
          transition: width 0.35s ease, background 0.35s ease;
        }
        .pubs-dot:hover { background: rgba(11,37,69,0.32); }
        .pubs-dot.is-active { width: 32px; background: linear-gradient(90deg, var(--green), var(--green-light)); box-shadow: 0 2px 8px rgba(15,122,90,0.35); }

        /* Footer bar */
        .pubs-footbar {
          display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;
          margin-top: 36px; padding: 16px 22px; border-radius: 18px;
          background: rgba(255,255,255,0.8); border: 1px solid rgba(11,37,69,0.07);
          box-shadow: 0 6px 26px rgba(11,37,69,0.05); backdrop-filter: blur(8px);
        }
        .pubs-footbar-text { display: inline-flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 0; font-size: 12.5px; font-weight: 500; letter-spacing: 0.04em; color: #000000; }
        .pubs-footbar-text svg { color: var(--green); }
        .pubs-footbar-sep { color: #000000; }
        .pubs-all-btn {
          display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; border-radius: 8px; cursor: pointer;
          background: var(--navy);
          border: 1px solid transparent; color: #FFFFFF;
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 6px 20px rgba(11,37,69,0.20);
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .pubs-all-btn svg { color: var(--green-light); }
        .pubs-all-btn:hover:not(:disabled) { background: var(--green); box-shadow: 0 10px 26px rgba(15,122,90,0.28); }
        .pubs-all-btn:active:not(:disabled) { transform: scale(0.98); }
        .pubs-all-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        /* Toasts */
        .pubs-toasts { position: fixed; left: 0; right: 0; bottom: 24px; z-index: 90; display: flex; flex-direction: column; align-items: center; gap: 8px; pointer-events: none; padding: 0 16px; }
        .pubs-toast {
          display: inline-flex; align-items: center; gap: 10px; max-width: min(92vw, 460px); padding: 12px 20px; border-radius: 100px;
          background: rgba(11,37,69,0.95); border: 1px solid rgba(15,122,90,0.30); box-shadow: 0 18px 44px rgba(11,37,69,0.32);
          color: #FFFFFF; font-size: 12.5px; font-weight: 600; font-family: var(--font-app); backdrop-filter: blur(10px);
        }

        /* Modal */
        .pubs-modal {
          max-width: 680px; width: calc(100% - 32px); max-height: 90vh; overflow-x: hidden; overflow-y: auto;
          padding: clamp(28px, 4vw, 44px); border-radius: 24px; background: #FFFFFF;
          border: 1.5px solid rgba(15,122,90,0.20); box-shadow: 0 32px 80px rgba(11,37,69,0.20);
          font-family: var(--font-app);
        }
        .pubs-modal-bar { position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--green), rgba(15,122,90,0.30), transparent); }
        .pubs-modal-header { padding-top: 8px; text-align: left; }
        .pubs-modal-badges { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .pubs-modal-title { margin: 0; font-size: clamp(19px, 2.5vw, 25px); font-weight: 700; line-height: 1.35; letter-spacing: var(--tracking-heading); color: #000000; font-family: var(--font-heading); }
        .pubs-modal-authors { margin: 10px 0 0; font-size: 13.5px; font-weight: 500; line-height: 1.6; color: #000000; font-family: var(--font-app); }
        .pubs-modal-source { margin: 22px 0 0; padding-left: 14px; border-left: 2.5px solid rgba(15,122,90,0.40); }
        .pubs-modal-journal {
          display: flex; align-items: flex-start; gap: 8px; margin: 0;
          font-size: 13.5px; font-style: italic; line-height: 1.6; color: #000000; opacity: 0.7;
        }
        .pubs-modal-journal svg { flex-shrink: 0; margin-top: 3px; color: var(--green); opacity: 1; }
        .pubs-modal-publisher {
          display: flex; align-items: center; gap: 7px; margin: 6px 0 0;
          font-size: 12px; font-weight: 600; letter-spacing: 0.04em; color: #000000;
        }
        .pubs-modal-publisher svg { flex-shrink: 0; color: var(--green); }
        .pubs-modal-biblio {
          display: flex; align-items: center; gap: 7px; margin: 7px 0 0;
          font-size: 11.5px; font-weight: 600; letter-spacing: 0.03em; color: var(--green);
          font-variant-numeric: tabular-nums;
        }
        .pubs-modal-biblio svg { flex-shrink: 0; }

        .pubs-meta {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
          gap: 10px; margin: 24px 0 0; padding: 16px 18px; border-radius: 16px;
          background: rgba(11,37,69,0.035); border: 1px solid rgba(11,37,69,0.06);
        }
        .pubs-meta-item { min-width: 0; }
        .pubs-meta-item dt {
          display: flex; align-items: center; gap: 5px;
          font-size: 9.5px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #000000;
        }
        .pubs-meta-item dt svg { flex-shrink: 0; color: var(--green); }
        .pubs-meta-item dd {
          margin: 5px 0 0; font-size: 13.5px; font-weight: 700; line-height: 1.4; color: #000000;
          font-variant-numeric: tabular-nums; word-break: break-word;
        }

        .pubs-block { margin: 26px 0 0; }
        .pubs-block-title {
          display: inline-flex; align-items: center; gap: 7px; margin: 0 0 12px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--green);
        }
        .pubs-block-title svg { flex-shrink: 0; }
        .pubs-abstract { margin: 0; font-size: 13.5px; font-weight: 400; line-height: 1.75; color: #000000; white-space: pre-line; }
        .pubs-empty { margin: 0; font-size: 12.5px; font-style: italic; color: #000000; }

        .pubs-keywords { display: flex; flex-wrap: wrap; gap: 7px; margin: 0; padding: 0; list-style: none; }
        .pubs-keyword {
          padding: 5px 12px; border-radius: 100px; font-size: 11.5px; font-weight: 600; letter-spacing: 0.02em;
          color: #000000; background: rgba(15,122,90,0.08); border: 1px solid rgba(15,122,90,0.20);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .pubs-keyword:hover { color: var(--green); background: rgba(15,122,90,0.14); border-color: rgba(15,122,90,0.34); }
        .pubs-keyword-more { color: var(--green); background: rgba(15,122,90,0.04); }

        .pubs-doi { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
        .pubs-doi-link {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 8px;
          font-size: 12.5px; font-weight: 600; color: #000000; text-decoration: none; word-break: break-all;
          background: rgba(11,37,69,0.04); border: 1px solid rgba(11,37,69,0.08);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .pubs-doi-link svg { color: var(--green); flex-shrink: 0; }
        .pubs-doi-link:hover { color: var(--green); background: rgba(15,122,90,0.08); border-color: rgba(15,122,90,0.30); }
        .pubs-copy-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 13px; border-radius: 8px; cursor: pointer;
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #000000;
          background: #FFFFFF; border: 1px solid rgba(11,37,69,0.14);
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .pubs-copy-btn svg { color: var(--green); }
        .pubs-copy-btn:hover { background: rgba(15,122,90,0.08); border-color: rgba(15,122,90,0.35); color: var(--green); }
        .pubs-copy-btn:active { transform: scale(0.98); }

        .pubs-citation {
          margin: 0; padding: 14px 16px; border-radius: 14px;
          font-size: 12.5px; font-style: italic; line-height: 1.7; color: #000000;
          background: rgba(11,37,69,0.035); border: 1px solid rgba(11,37,69,0.06);
          border-left: 2.5px solid rgba(15,122,90,0.40); white-space: pre-line;
        }
        .pubs-citation-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 14px; }
        .pubs-chip-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border-radius: 8px; cursor: pointer;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #000000;
          background: #FFFFFF; border: 1px solid rgba(11,37,69,0.14);
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .pubs-chip-btn svg { color: var(--green); }
        .pubs-chip-btn:hover:not(:disabled) { background: rgba(15,122,90,0.08); border-color: rgba(15,122,90,0.32); color: var(--green); }
        .pubs-chip-btn:active:not(:disabled) { transform: scale(0.98); }
        .pubs-chip-btn:disabled { opacity: 0.45; cursor: not-allowed; }
        .pubs-bibkey {
          margin-left: auto; padding: 4px 10px; border-radius: 8px;
          font-family: var(--font-app); font-size: 10.5px; letter-spacing: 0.02em;
          color: var(--green); background: rgba(15,122,90,0.07); border: 1px dashed rgba(15,122,90,0.28);
        }

        .pubs-related { margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 8px; }
        .pubs-related li { font-size: 13px; font-weight: 500; line-height: 1.65; color: #000000; }
        .pubs-related li::marker { color: var(--green); }

        .pubs-modal-ctas { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; padding-top: 24px; border-top: 1px solid rgba(11,37,69,0.07); }

        .pubs-cta {
          display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; border-radius: 8px; cursor: pointer;
          border: 1px solid transparent;
          font-size: 13px; font-weight: 600; text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s;
        }
        .pubs-cta:active { transform: scale(0.98); }
        .pubs-cta-green { background: var(--green); color: #FFFFFF; font-weight: 700; box-shadow: 0 6px 18px rgba(15,122,90,0.25); }
        .pubs-cta-green:hover { background: #0B5E4A; box-shadow: 0 10px 24px rgba(15,122,90,0.32); }
        .pubs-cta-soft { background: rgba(11,37,69,0.05); border-color: rgba(11,37,69,0.12); color: #000000; }
        .pubs-cta-soft:hover { background: rgba(11,37,69,0.09); border-color: rgba(11,37,69,0.22); }
        .pubs-cta-soft svg, .pubs-cta-outline svg { color: var(--green); }
        .pubs-cta-navy { background: var(--navy); color: #FFFFFF; box-shadow: 0 6px 18px rgba(11,37,69,0.24); }
        .pubs-cta-navy:hover { background: var(--green); box-shadow: 0 10px 24px rgba(15,122,90,0.30); }
        .pubs-cta-outline { background: #FFFFFF; border-color: rgba(11,37,69,0.18); color: #000000; box-shadow: 0 4px 16px rgba(11,37,69,0.06); }
        .pubs-cta-outline:hover { border-color: rgba(15,122,90,0.45); color: var(--green); background: rgba(15,122,90,0.05); }

        /* Consistent keyboard focus for every Publications control */
        .pubs-details-btn:focus-visible, .pubs-pdf-btn:focus-visible, .pubs-icon-btn:focus-visible,
        .pubs-nav-btn:focus-visible, .pubs-dot:focus-visible, .pubs-all-btn:focus-visible,
        .pubs-copy-btn:focus-visible, .pubs-chip-btn:focus-visible, .pubs-cta:focus-visible,
        .pubs-link:focus-visible, .pubs-doi-link:focus-visible, .pubs-menu-item:focus-visible,
        .pubs-keyword:focus-visible {
          outline: 2px solid rgba(15,122,90,0.55); outline-offset: 2px;
        }

        @keyframes pubs-skeleton {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── Responsive: large desktops ── */
        @media (min-width: 1440px) {
          .pubs-container { max-width: 1320px; }
          .pubs-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .pubs-modal { max-width: 760px; }
          .pubs-meta { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        }

        /* ── Responsive: small laptops / tablets landscape ── */
        @media (max-width: 1100px) {
          .pubs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .pubs-slide { padding: 0 2px; }
        }

        /* ── Responsive: tablets portrait ── */
        @media (max-width: 860px) {
          .pubs-section { padding: clamp(40px, 7vw, 56px) 0; }
          .pubs-header { margin-bottom: clamp(28px, 5vw, 40px); }
          .pubs-heading { font-size: clamp(28px, 5.6vw, 40px); }
          .pubs-stats { gap: 10px; margin-top: 26px; }
          .pubs-stat { padding: 9px 16px 9px 10px; gap: 10px; }
          .pubs-stat-icon { width: 28px; height: 28px; }
          .pubs-stat-value { font-size: 15.5px; }
          .pubs-stat-label { font-size: 9.5px; letter-spacing: 0.13em; }
          .pubs-rule-line { width: 48px; }
          .pubs-viewport { margin: -12px -8px; padding: 12px 8px 24px; }
          .pubs-card-index { font-size: 68px; bottom: 50px; }
          .pubs-modal { max-width: 640px; padding: clamp(24px, 3.6vw, 34px); }
          .pubs-modal-ctas { margin-top: 24px; padding-top: 20px; }
          .pubs-block { margin-top: 22px; }
          .pubs-meta { margin-top: 20px; padding: 14px 15px; }
        }

        /* ── Responsive: large phones / small tablets ── */
        @media (max-width: 640px) {
          .pubs-section { padding: clamp(36px, 7vw, 48px) 0; }
          .pubs-container { padding: 0 clamp(14px, 4.5vw, 24px); }
          .pubs-eyebrow { padding: 7px 15px; gap: 8px; margin-bottom: 16px; }
          .pubs-eyebrow span { font-size: 10px; letter-spacing: 0.18em; }
          .pubs-heading { font-size: clamp(25px, 7.4vw, 34px); }
          .pubs-rule { margin-top: 18px; gap: 10px; }
          .pubs-rule-line { width: 38px; }
          .pubs-stats { gap: 8px; margin-top: 22px; }
          .pubs-stat { padding: 8px 14px 8px 9px; gap: 9px; }
          .pubs-stat-icon { width: 26px; height: 26px; }
          .pubs-stat-value { font-size: 14.5px; }
          .pubs-stat-label { font-size: 9px; letter-spacing: 0.11em; }

          .pubs-grid { grid-template-columns: minmax(0, 1fr); gap: 18px; }
          .pubs-viewport { margin: -10px -4px; padding: 10px 4px 22px; }
          .pubs-card { padding: 20px 18px; border-radius: 18px; }
          .pubs-card:hover { transform: none; }
          .pubs-card-title { font-size: 16.5px; -webkit-line-clamp: 4; }
          .pubs-card-abstract { -webkit-line-clamp: 5; font-size: 12.5px; }
          .pubs-card-index { font-size: 56px; right: 14px; bottom: 46px; }
          .pubs-card-meta { margin-bottom: 14px; }
          .pubs-links { gap: 6px; margin-top: 14px; }
          .pubs-link { padding: 6px 10px; font-size: 11.5px; }

          .pubs-card-footer { flex-wrap: wrap; margin-top: 18px; padding-top: 14px; }
          .pubs-controls { gap: 12px; margin-top: 6px; }
          .pubs-nav-btn { width: 40px; height: 40px; }
          .pubs-dots { gap: 8px; }

          .pubs-modal {
            max-width: 100%; width: calc(100% - 20px); max-height: 92dvh;
            padding: clamp(22px, 5vw, 28px); border-radius: 20px;
          }
          .pubs-modal-title { font-size: clamp(17px, 5vw, 21px); }
          .pubs-modal-authors { font-size: 12.5px; }
          .pubs-modal-source { margin-top: 18px; padding-left: 12px; }
          .pubs-modal-journal { font-size: 12.5px; }
          .pubs-modal-publisher { font-size: 11.5px; }
          .pubs-meta { grid-template-columns: repeat(auto-fit, minmax(84px, 1fr)); gap: 12px 10px; padding: 14px; }
          .pubs-meta-item dt { font-size: 9px; letter-spacing: 0.12em; }
          .pubs-meta-item dd { font-size: 13px; }
          .pubs-block { margin-top: 22px; }
          .pubs-block-title { font-size: 9.5px; letter-spacing: 0.15em; margin-bottom: 10px; }
          .pubs-abstract { font-size: 13px; line-height: 1.7; }
          .pubs-keywords { gap: 6px; }
          .pubs-keyword { padding: 5px 10px; font-size: 11px; }
          .pubs-doi { gap: 8px; }
          .pubs-doi-link { flex: 1 1 100%; font-size: 12px; }
          .pubs-copy-btn { flex: 1 1 auto; justify-content: center; }
          .pubs-citation { padding: 12px 13px; font-size: 12px; }
          .pubs-citation-actions { gap: 7px; margin-top: 12px; }
          .pubs-chip-btn { flex: 1 1 calc(50% - 4px); justify-content: center; padding: 9px 10px; font-size: 10.5px; }
          .pubs-bibkey { margin-left: 0; flex: 1 1 100%; text-align: center; }
          .pubs-related li { font-size: 12.5px; }

          .pubs-cta { flex: 1 1 100%; justify-content: center; padding: 12px 18px; font-size: 12.5px; }
          .pubs-modal-ctas { gap: 8px; }
          .pubs-footbar { flex-direction: column; text-align: center; justify-content: center; gap: 12px; }
          .pubs-toasts { bottom: 16px; padding: 0 12px; }
          .pubs-toast { font-size: 11.5px; padding: 11px 16px; }
          .pubs-menu { min-width: 156px; }
        }

        /* ── Responsive: small phones ── */
        @media (max-width: 400px) {
          .pubs-container { padding: 0 12px; }
          .pubs-eyebrow { padding: 6px 12px; }
          .pubs-heading { font-size: clamp(22px, 7.6vw, 28px); }
          .pubs-stats { flex-direction: column; align-items: stretch; }
          .pubs-stat { justify-content: flex-start; }
          .pubs-card { padding: 18px 15px; }
          .pubs-card-title { font-size: 15.5px; }
          .pubs-badge { font-size: 9px; padding: 4px 9px; letter-spacing: 0.08em; }
          .pubs-meta { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .pubs-chip-btn { flex: 1 1 100%; }
          .pubs-nav-btn { width: 36px; height: 36px; }
          .pubs-dots { gap: 6px; }
          .pubs-dot { height: 7px; width: 7px; }
          .pubs-dot.is-active { width: 24px; }
        }

        /* ── Responsive: short/landscape phones ── */
        @media (max-height: 520px) and (orientation: landscape) {
          .pubs-modal { max-height: 94dvh; padding: 20px 22px; }
          .pubs-modal-ctas { margin-top: 18px; padding-top: 16px; }
          .pubs-block { margin-top: 16px; }
          .pubs-meta { margin-top: 16px; padding: 12px 14px; }
        }

        /* ── Touch devices: no hover lift, larger tap targets ── */
        @media (hover: none) {
          .pubs-card:hover { transform: none; box-shadow: 0 1px 2px rgba(11,37,69,0.04), 0 8px 28px rgba(11,37,69,0.06); }
          .pubs-nav-btn:hover, .pubs-cta:hover { transform: none; }
          .pubs-icon-btn, .pubs-chip-btn, .pubs-copy-btn, .pubs-cta { min-height: 44px; }
          .pubs-chip-btn, .pubs-copy-btn { padding-top: 11px; padding-bottom: 11px; }
          .pubs-cta { padding-top: 13px; padding-bottom: 13px; }
          .pubs-nav-btn { width: 46px; height: 46px; }
          .pubs-dot::after { content: ""; display: block; width: 100%; height: 100%; transform: scale(2.2); }
        }

        /* ── Coarse pointers: prevent long-press callouts on links ── */
        @media (pointer: coarse) {
          .pubs-card-doi, .pubs-link, .pubs-doi-link { -webkit-tap-highlight-color: rgba(15,122,90,0.18); }
        }

        @media (prefers-reduced-motion: reduce) {
          .pubs-section *, .pubs-modal * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
          .pubs-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}