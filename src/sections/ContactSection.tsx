// 'use client'

// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import { motion } from 'framer-motion'
// import {
//     Copy,
//     Check,
//     Download,
//     Mail,
//     MapPin,
//     Send,
//     Loader2,
// } from 'lucide-react'
// import { SocialLinks } from '@/components/common/SocialLinks'
// import { ScrollReveal } from '@/components/common/ScrollReveal'
// import { SITE_CONFIG, SOCIAL_LINKS } from '@/data/profile'
// import { copyToClipboard } from '@/lib/utils'
// import emailjs from '@emailjs/browser'

// // EmailJS credentials
// const EMAILJS_SERVICE_ID = 'service_eeucu19'
// const EMAILJS_TEMPLATE_ID = 'template_2urn3aj'
// const EMAILJS_PUBLIC_KEY = 'OaLXvoiJ7vQTimi3i'

// const contactSchema = z.object({
//     name: z.string().min(2, 'Name must be at least 2 characters'),
//     email: z.string().email('Please enter a valid email address'),
//     subject: z.string().min(3, 'Subject must be at least 3 characters'),
//     message: z.string().min(10, 'Message must be at least 10 characters'),
// })

// type ContactFormValues = z.infer<typeof contactSchema>

// // ─── Animation Variants ──────────────────────────────────────────────
// const fadeInUp = {
//     hidden: { opacity: 0, y: 32 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
// }

// const stagger = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
// }

// export function ContactSection() {
//     const [copiedEmail, setCopiedEmail] = useState<string | null>(null)
//     const [submitted, setSubmitted] = useState(false)
//     const [isSending, setIsSending] = useState(false)
//     const [error, setError] = useState<string | null>(null)

//     const form = useForm<ContactFormValues>({
//         resolver: zodResolver(contactSchema),
//         defaultValues: { name: '', email: '', subject: '', message: '' },
//     })

//     const handleCopyEmail = async (email: string) => {
//         const success = await copyToClipboard(email)
//         if (success) {
//             setCopiedEmail(email)
//             setTimeout(() => setCopiedEmail(null), 2000)
//         }
//     }

//     const onSubmit = async (data: ContactFormValues) => {
//         setIsSending(true)
//         setError(null)

//         try {
//             const templateParams = {
//                 from_name: data.name,
//                 from_email: data.email,
//                 subject: data.subject,
//                 message: data.message,
//                 to_email: 'baburamtimsina344@gmail.com',
//             }

//             await emailjs.send(
//                 EMAILJS_SERVICE_ID,
//                 EMAILJS_TEMPLATE_ID,
//                 templateParams,
//                 EMAILJS_PUBLIC_KEY
//             )

//             setSubmitted(true)
//             form.reset()
//             setTimeout(() => setSubmitted(false), 5000)
//         } catch (err) {
//             console.error('Email send error:', err)
//             setError('Failed to send message. Please try again later.')
//         } finally {
//             setIsSending(false)
//         }
//     }

//     return (
//         <section
//             id="contact"
//             aria-label="Contact Section"
//             style={{
//                 position: 'relative',
//                     padding: 'clamp(48px, 7vw, 80px) 0',
//                 background: 'var(--off-white)',
//                 overflow: 'hidden',
//             }}
//         >
//             {/* ── Section Divider ─────────────────────────────── */}
//             <div style={{
//                 position: 'absolute', top: 0, left: 0, right: 0, height: 1,
//                 background: 'linear-gradient(90deg, transparent, rgba(15,122,90,0.30), rgba(11,37,69,0.12), transparent)',
//             }} />

//             {/* ── Background Orbs ─────────────────────────────── */}
//             <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
//                 <div style={{
//                     position: 'absolute', top: '-15%', right: '-15%',
//                     width: 600, height: 600, borderRadius: '50%',
//                     background: 'radial-gradient(circle, rgba(15,122,90,0.07) 0%, rgba(26,64,128,0.05) 50%, transparent 75%)',
//                 }} />
//                 <div style={{
//                     position: 'absolute', bottom: '-20%', left: '-15%',
//                     width: 700, height: 700, borderRadius: '50%',
//                     background: 'radial-gradient(circle, rgba(11,37,69,0.07) 0%, rgba(26,92,184,0.04) 50%, transparent 70%)',
//                 }} />
//                 {/* Dot grid */}
//                 <div style={{
//                     position: 'absolute', inset: 0, opacity: 0.022,
//                     backgroundImage: 'radial-gradient(circle, #0B2545 1px, transparent 1px)',
//                     backgroundSize: '36px 36px',
//                 }} />
//             </div>

//             {/* ── Container ───────────────────────────────────── */}
//             <div style={{
//                 position: 'relative', zIndex: 10,
//                 width: '100%', maxWidth: 1200,
//                 margin: '0 auto',
//                 padding: '0 clamp(20px, 5vw, 56px)',
//             }}>

//                 {/* ── Section Header ──────────────────────────── */}
//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={fadeInUp}
//                     style={{ marginBottom: 64, textAlign: 'center' }}
//                 >
//                     {/* Eyebrow */}
//                     <div style={{
//                         display: 'inline-flex', alignItems: 'center', gap: 10,
//                         marginBottom: 20,
//                         padding: '7px 20px',
//                         borderRadius: 100,
//                         background: 'rgba(15,122,90,0.08)',
//                         border: '1px solid rgba(15,122,90,0.22)',
//                     }}>
//                         <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'var(--green)' }} />
//                         <span style={{
//                             fontSize: 10.5, fontWeight: 700,
//                             letterSpacing: '0.22em', textTransform: 'uppercase',
//                             color: '#000000', fontFamily: 'var(--font-app)',
//                         }}>
//                             Get In Touch
//                         </span>
//                         <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'var(--green)' }} />
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
//                         Let&apos;s{' '}
//                         {/* <span style={{
//                             background: 'linear-gradient(90deg, var(--green) 0%, var(--green-light) 100%)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                             backgroundClip: 'text',
//                         }}> */}
//                             Connect
//                         {/* </span> */}
//                     </h2>

//                     {/* Subtitle */}
//                     <p style={{
//                         fontSize: 'clamp(13.5px, 1.5vw, 15px)',
//                         lineHeight: 1.75,
//                         color: '#000000',
//                         margin: '20px auto 0',
//                         fontWeight: 400,
//                         fontFamily: 'var(--font-app)',
//                         maxWidth: 480,
//                     }}>
//                         For academic collaborations, speaking engagements, research inquiries, or simply to discuss ideas.
//                     </p>

//                     {/* Green rule */}
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 22 }}>
//                         <div style={{ height: 1, width: 64, background: 'linear-gradient(to right, transparent, rgba(15,122,90,0.50))' }} />
//                         <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--green)', opacity: 0.7 }} />
//                         <div style={{ height: 1, width: 64, background: 'linear-gradient(to left, transparent, rgba(15,122,90,0.50))' }} />
//                     </div>
//                 </motion.div>

//                 {/* ── Two-column grid ─────────────────────────── */}
//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={stagger}
//                     style={{
//                         display: 'grid',
//                         gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
//                         gap: 'clamp(32px, 4vw, 56px)',
//                         alignItems: 'start',
//                     }}
//                 >

//                     {/* ── LEFT: Contact Info ──────────────────────── */}
//                     <motion.div variants={fadeInUp}>
//                         <motion.div
//                             whileHover={{ y: -4, boxShadow: '0 20px 56px rgba(11,37,69,0.14)' }}
//                             transition={{ duration: 0.35 }}
//                             style={{
//                                 position: 'relative',
//                                 background: '#FFFFFF',
//                                 borderRadius: 24,
//                                 border: '1.5px solid rgba(15,122,90,0.15)',
//                                 boxShadow: '0 8px 32px rgba(11,37,69,0.09), 0 2px 8px rgba(11,37,69,0.05)',
//                                 padding: 'clamp(28px, 4vw, 44px)',
//                                 overflow: 'hidden',
//                                 transition: 'box-shadow 0.35s',
//                                 height: '100%',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                             }}
//                         >
//                             {/* Green left accent bar */}
//                             <div style={{
//                                 position: 'absolute', top: 0, left: 0,
//                                 width: 4, height: 96,
//                                 background: 'linear-gradient(to bottom, var(--green), rgba(15,122,90,0.10))',
//                                 borderRadius: '0 0 4px 0',
//                             }} />

//                             {/* Icon label */}
//                             <div style={{
//                                 display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24,
//                             }}>
//                                 <div style={{
//                                     width: 38, height: 38, borderRadius: 12,
//                                     background: 'linear-gradient(135deg, rgba(15,122,90,0.14), rgba(15,122,90,0.05))',
//                                     border: '1px solid rgba(15,122,90,0.22)',
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                 }}>
//                                     <Mail style={{ width: 16, height: 16, color: 'var(--green)' }} />
//                                 </div>
//                                 <span style={{
//                                     fontSize: 10.5, fontWeight: 700,
//                                     letterSpacing: '0.20em', textTransform: 'uppercase',
//                                     color: '#000000',
//                                     fontFamily: 'var(--font-app)',
//                                 }}>
//                                     Contact Info
//                                 </span>
//                             </div>

//                             {/* Heading */}
//                             <h3 style={{
//                                 fontSize: 'clamp(22px, 3vw, 28px)',
//                                 fontWeight: 700,
//                                 color: '#000000',
//                                 lineHeight: 1.2,
//                                 letterSpacing: 'var(--tracking-normal)',
//                                 marginBottom: 28,
//                                 fontFamily: 'var(--font-app)',
//                             }}>
//                                 Reach Out
//                             </h3>

//                             {/* Location */}
//                             <div style={{ marginBottom: 28 }}>
//                                 <div style={{
//                                     display: 'flex', alignItems: 'flex-start', gap: 12,
//                                     marginBottom: 12,
//                                 }}>
//                                     <div style={{
//                                         width: 32, height: 32, borderRadius: 10,
//                                         background: 'linear-gradient(135deg, rgba(15,122,90,0.10), rgba(15,122,90,0.05))',
//                                         border: '1px solid rgba(15,122,90,0.20)',
//                                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                         flexShrink: 0,
//                                     }}>
//                                         <MapPin style={{ width: 14, height: 14, color: 'var(--green)' }} />
//                                     </div>
//                                     <div>
//                                         <p style={{
//                                             fontSize: 12, fontWeight: 700,
//                                             letterSpacing: '0.08em', textTransform: 'uppercase',
//                                             color: '#000000',
//                                             fontFamily: 'var(--font-app)',
//                                             margin: '0 0 6px 0',
//                                         }}>
//                                             Kirtipur, Nepal
//                                         </p>
//                                         <p style={{
//                                             fontSize: 14, fontWeight: 500,
//                                             color: '#000000',
//                                             fontFamily: 'var(--font-app)',
//                                             margin: 0,
//                                             lineHeight: 1.5,
//                                         }}>
//                                             {SITE_CONFIG.institution}
//                                         </p>
//                                         <p style={{
//                                             fontSize: 13, fontWeight: 400,
//                                             color: '#000000',
//                                             fontFamily: 'var(--font-app)',
//                                             margin: '4px 0 0 0',
//                                         }}>
//                                             {SITE_CONFIG.location}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Email addresses */}
//                             <div style={{ marginBottom: 28, flex: 1 }}>
//                                 <p style={{
//                                     fontSize: 12, fontWeight: 700,
//                                     letterSpacing: '0.08em', textTransform: 'uppercase',
//                                     color: '#000000',
//                                     fontFamily: 'var(--font-app)',
//                                     margin: '0 0 12px 0',
//                                 }}>
//                                     Email
//                                 </p>
//                                 <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
//                                     {SITE_CONFIG.emails.map((email) => (
//                                         <motion.div
//                                             key={email}
//                                             whileHover={{ x: 4 }}
//                                             transition={{ duration: 0.2 }}
//                                             style={{
//                                                 display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                                                 padding: 12,
//                                                 borderRadius: 14,
//                                                 background: 'rgba(15,122,90,0.06)',
//                                                 border: '1px solid rgba(15,122,90,0.15)',
//                                                 transition: 'all 0.3s',
//                                             }}
//                                         >
//                                             <a
//                                                 href={`mailto:${email}`}
//                                                 style={{
//                                                     fontSize: 12.5,
//                                                     color: '#000000',
//                                                     textDecoration: 'none',
//                                                     fontFamily: 'var(--font-app)',
//                                                     fontWeight: 500,
//                                                     wordBreak: 'break-all',
//                                                 }}
//                                             >
//                                                 {email}
//                                             </a>
//                                             <motion.button
//                                                 whileHover={{ scale: 1.1 }}
//                                                 whileTap={{ scale: 0.95 }}
//                                                 onClick={() => handleCopyEmail(email)}
//                                                 aria-label={`Copy ${email}`}
//                                                 style={{
//                                                     background: 'none',
//                                                     border: 'none',
//                                                     cursor: 'pointer',
//                                                     padding: 6,
//                                                     display: 'flex',
//                                                     alignItems: 'center',
//                                                     justifyContent: 'center',
//                                                     color: copiedEmail === email ? 'var(--green)' : 'var(--navy)',
//                                                     transition: 'color 0.2s',
//                                                     flexShrink: 0,
//                                                 }}
//                                             >
//                                                 {copiedEmail === email ? (
//                                                     <Check style={{ width: 14, height: 14 }} />
//                                                 ) : (
//                                                     <Copy style={{ width: 14, height: 14 }} />
//                                                 )}
//                                             </motion.button>
//                                         </motion.div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Social Links */}
//                             <div style={{ marginBottom: 24 }}>
//                                 <SocialLinks links={SOCIAL_LINKS} />
//                             </div>

//                             {/* Download CV Button */}
//                             <motion.a
//                                 href="/cv.pdf"
//                                 download
//                                 whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(11,37,69,0.28)' }}
//                                 whileTap={{ scale: 0.97 }}
//                                 transition={{ duration: 0.25 }}
//                                 style={{
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
//                                     padding: '11px 24px',
//                                     borderRadius: 100,
//                                     background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
//                                     border: '1px solid rgba(15,122,90,0.22)',
//                                     color: 'black',
//                                     fontSize: 13, fontWeight: 600,
//                                     letterSpacing: '0.02em',
//                                     textDecoration: 'none',
//                                     fontFamily: 'var(--font-app)',
//                                     boxShadow: '0 4px 18px rgba(11,37,69,0.28)',
//                                     transition: 'box-shadow 0.25s',
//                                     width: '100%',
//                                     textAlign: 'center',

//                                 }}
//                             >
//                                 <Download style={{ width: 15, height: 15, opacity: 0.8 }} />
//                                 Download CV
//                             </motion.a>
//                         </motion.div>
//                     </motion.div>

//                     {/* ── RIGHT: Contact Form ──────────────────────── */}
//                     <motion.div variants={fadeInUp}>
//                         <motion.div
//                             whileHover={{ y: -4, boxShadow: '0 20px 56px rgba(11,37,69,0.14)' }}
//                             transition={{ duration: 0.35 }}
//                             style={{
//                                 position: 'relative',
//                                 background: '#FFFFFF',
//                                 borderRadius: 24,
//                                 border: '1.5px solid rgba(15,122,90,0.15)',
//                                 boxShadow: '0 8px 32px rgba(11,37,69,0.09), 0 2px 8px rgba(11,37,69,0.05)',
//                                 padding: 'clamp(28px, 4vw, 44px)',
//                                 overflow: 'hidden',
//                                 transition: 'box-shadow 0.35s',
//                             }}
//                         >
//                             {/* Green left accent bar */}
//                             <div style={{
//                                 position: 'absolute', top: 0, left: 0,
//                                 width: 4, height: 96,
//                                 background: 'linear-gradient(to bottom, var(--green), rgba(15,122,90,0.10))',
//                                 borderRadius: '0 0 4px 0',
//                             }} />

//                             {/* Icon label */}
//                             <div style={{
//                                 display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24,
//                             }}>
//                                 <div style={{
//                                     width: 38, height: 38, borderRadius: 12,
//                                     background: 'linear-gradient(135deg, rgba(15,122,90,0.14), rgba(15,122,90,0.05))',
//                                     border: '1px solid rgba(15,122,90,0.22)',
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                 }}>
//                                     <Send style={{ width: 16, height: 16, color: 'var(--green)' }} />
//                                 </div>
//                                 <span style={{
//                                     fontSize: 10.5, fontWeight: 700,
//                                     letterSpacing: '0.20em', textTransform: 'uppercase',
//                                     color: '#000000',
//                                     fontFamily: 'var(--font-app)',
//                                 }}>
//                                     Send Message
//                                 </span>
//                             </div>

//                             {/* Heading */}
//                             <h3 style={{
//                                 fontSize: 'clamp(22px, 3vw, 28px)',
//                                 fontWeight: 700,
//                                 color: '#000000',
//                                 lineHeight: 1.2,
//                                 letterSpacing: 'var(--tracking-normal)',
//                                 marginBottom: 28,
//                                 fontFamily: 'var(--font-app)',
//                             }}>
//                                 Send a

//                                     Message
//                             </h3>

//                             {/* Success Alert */}
//                             {submitted && (
//                                 <motion.div
//                                     initial={{ opacity: 0, y: -12 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     exit={{ opacity: 0, y: -12 }}
//                                     style={{
//                                         padding: 16,
//                                         borderRadius: 16,
//                                         background: 'linear-gradient(135deg, rgba(15,122,90,0.10), rgba(15,122,90,0.05))',
//                                         border: '1px solid rgba(15,122,90,0.30)',
//                                         marginBottom: 20,
//                                     }}
//                                 >
//                                     <div style={{
//                                         display: 'flex', alignItems: 'flex-start', gap: 12,
//                                     }}>
//                                         <div style={{
//                                             width: 24, height: 24, borderRadius: '50%',
//                                             background: 'var(--green)', display: 'flex',
//                                             alignItems: 'center', justifyContent: 'center',
//                                             flexShrink: 0,
//                                         }}>
//                                             <Check style={{ width: 14, height: 14, color: '#FFFFFF' }} />
//                                         </div>
//                                         <div>
//                                             <p style={{
//                                                 fontSize: 14, fontWeight: 600,
//                                                 color: '#000000',
//                                                 margin: '0 0 4px 0',
//                                                 fontFamily: 'var(--font-app)',
//                                             }}>
//                                                 Message sent successfully!
//                                             </p>
//                                             <p style={{
//                                                 fontSize: 13, fontWeight: 400,
//                                                 color: '#000000',
//                                                 margin: 0,
//                                                 fontFamily: 'var(--font-app)',
//                                                 lineHeight: 1.5,
//                                             }}>
//                                                 Thank you for reaching out. Your message has been sent and you will receive a response as soon as possible.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             )}

//                             {/* Error Alert */}
//                             {error && (
//                                 <motion.div
//                                     initial={{ opacity: 0, y: -12 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     exit={{ opacity: 0, y: -12 }}
//                                     style={{
//                                         padding: 16,
//                                         borderRadius: 16,
//                                         background: 'linear-gradient(135deg, rgba(220,38,38,0.10), rgba(220,38,38,0.05))',
//                                         border: '1px solid rgba(220,38,38,0.30)',
//                                         marginBottom: 20,
//                                     }}
//                                 >
//                                     <div style={{
//                                         display: 'flex', alignItems: 'flex-start', gap: 12,
//                                     }}>
//                                         <div style={{
//                                             width: 24, height: 24, borderRadius: '50%',
//                                             background: '#DC2626', display: 'flex',
//                                             alignItems: 'center', justifyContent: 'center',
//                                             flexShrink: 0,
//                                         }}>
//                                             <span style={{
//                                                 color: '#FFFFFF', fontSize: 16,
//                                                 fontWeight: 700,
//                                             }}>!</span>
//                                         </div>
//                                         <div>
//                                             <p style={{
//                                                 fontSize: 14, fontWeight: 600,
//                                                 color: '#DC2626',
//                                                 margin: '0 0 4px 0',
//                                                 fontFamily: 'var(--font-app)',
//                                             }}>
//                                                 Error
//                                             </p>
//                                             <p style={{
//                                                 fontSize: 13, fontWeight: 400,
//                                                 color: '#000000',
//                                                 margin: 0,
//                                                 fontFamily: 'var(--font-app)',
//                                             }}>
//                                                 {error}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             )}

//                             {/* Form */}
//                             <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
//                                 {/* Name & Email Row */}
//                                 <div style={{
//                                     display: 'grid',
//                                     gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
//                                     gap: 14,
//                                 }}>
//                                     {/* Name Field */}
//                                     <div>
//                                         <label style={{
//                                             display: 'block',
//                                             fontSize: 12, fontWeight: 600,
//                                             letterSpacing: '0.08em', textTransform: 'uppercase',
//                                             color: '#000000',
//                                             fontFamily: 'var(--font-app)',
//                                             marginBottom: 8,
//                                         }}>
//                                             Full Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             placeholder="Your name"
//                                             {...form.register('name')}
//                                             style={{
//                                                 width: '100%',
//                                                 padding: 'clamp(10px, 1.5vw, 12px) 14px',
//                                                 fontSize: 14,
//                                                 fontFamily: 'var(--font-app)',
//                                                 border: '1.5px solid rgba(15,122,90,0.15)',
//                                                 borderRadius: 12,
//                                                 background: 'rgba(15,122,90,0.04)',
//                                                 color: '#000000',
//                                                 transition: 'all 0.25s',
//                                                 boxSizing: 'border-box',
//                                             }}
//                                             onFocus={(e) => {
//                                                 e.target.style.borderColor = 'rgba(15,122,90,0.40)'
//                                                 e.target.style.background = 'rgba(15,122,90,0.08)'
//                                                 e.target.style.boxShadow = '0 0 0 3px rgba(15,122,90,0.08)'
//                                             }}
//                                             onBlur={(e) => {
//                                                 e.target.style.borderColor = 'rgba(15,122,90,0.15)'
//                                                 e.target.style.background = 'rgba(15,122,90,0.04)'
//                                                 e.target.style.boxShadow = 'none'
//                                             }}
//                                         />
//                                         {form.formState.errors.name && (
//                                             <p style={{
//                                                 fontSize: 11, color: '#DC2626',
//                                                 marginTop: 6, fontFamily: 'var(--font-app)',
//                                             }}>
//                                                 {form.formState.errors.name.message}
//                                             </p>
//                                         )}
//                                     </div>

//                                     {/* Email Field */}
//                                     <div>
//                                         <label style={{
//                                             display: 'block',
//                                             fontSize: 12, fontWeight: 600,
//                                             letterSpacing: '0.08em', textTransform: 'uppercase',
//                                             color: '#000000',
//                                             fontFamily: 'var(--font-app)',
//                                             marginBottom: 8,
//                                         }}>
//                                             Email
//                                         </label>
//                                         <input
//                                             type="email"
//                                             placeholder="your@email.com"
//                                             {...form.register('email')}
//                                             style={{
//                                                 width: '100%',
//                                                 padding: 'clamp(10px, 1.5vw, 12px) 14px',
//                                                 fontSize: 14,
//                                                 fontFamily: 'var(--font-app)',
//                                                 border: '1.5px solid rgba(15,122,90,0.15)',
//                                                 borderRadius: 12,
//                                                 background: 'rgba(15,122,90,0.04)',
//                                                 color: '#000000',
//                                                 transition: 'all 0.25s',
//                                                 boxSizing: 'border-box',
//                                             }}
//                                             onFocus={(e) => {
//                                                 e.target.style.borderColor = 'rgba(15,122,90,0.40)'
//                                                 e.target.style.background = 'rgba(15,122,90,0.08)'
//                                                 e.target.style.boxShadow = '0 0 0 3px rgba(15,122,90,0.08)'
//                                             }}
//                                             onBlur={(e) => {
//                                                 e.target.style.borderColor = 'rgba(15,122,90,0.15)'
//                                                 e.target.style.background = 'rgba(15,122,90,0.04)'
//                                                 e.target.style.boxShadow = 'none'
//                                             }}
//                                         />
//                                         {form.formState.errors.email && (
//                                             <p style={{
//                                                 fontSize: 11, color: '#DC2626',
//                                                 marginTop: 6, fontFamily: 'var(--font-app)',
//                                             }}>
//                                                 {form.formState.errors.email.message}
//                                             </p>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Subject Field */}
//                                 <div>
//                                     <label style={{
//                                         display: 'block',
//                                         fontSize: 12, fontWeight: 600,
//                                         letterSpacing: '0.08em', textTransform: 'uppercase',
//                                         color: '#000000',
//                                         fontFamily: 'var(--font-app)',
//                                         marginBottom: 8,
//                                     }}>
//                                         Subject
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="Subject of your message"
//                                         {...form.register('subject')}
//                                         style={{
//                                             width: '100%',
//                                             padding: 'clamp(10px, 1.5vw, 12px) 14px',
//                                             fontSize: 14,
//                                             fontFamily: 'var(--font-app)',
//                                             border: '1.5px solid rgba(15,122,90,0.15)',
//                                             borderRadius: 12,
//                                             background: 'rgba(15,122,90,0.04)',
//                                             color: '#000000',
//                                             transition: 'all 0.25s',
//                                             boxSizing: 'border-box',
//                                         }}
//                                         onFocus={(e) => {
//                                             e.target.style.borderColor = 'rgba(15,122,90,0.40)'
//                                             e.target.style.background = 'rgba(15,122,90,0.08)'
//                                             e.target.style.boxShadow = '0 0 0 3px rgba(15,122,90,0.08)'
//                                         }}
//                                         onBlur={(e) => {
//                                             e.target.style.borderColor = 'rgba(15,122,90,0.15)'
//                                             e.target.style.background = 'rgba(15,122,90,0.04)'
//                                             e.target.style.boxShadow = 'none'
//                                         }}
//                                     />
//                                     {form.formState.errors.subject && (
//                                         <p style={{
//                                             fontSize: 11, color: '#DC2626',
//                                             marginTop: 6, fontFamily: 'var(--font-app)',
//                                         }}>
//                                             {form.formState.errors.subject.message}
//                                         </p>
//                                     )}
//                                 </div>

//                                 {/* Message Field */}
//                                 <div>
//                                     <label style={{
//                                         display: 'block',
//                                         fontSize: 12, fontWeight: 600,
//                                         letterSpacing: '0.08em', textTransform: 'uppercase',
//                                         color: '#000000',
//                                         fontFamily: 'var(--font-app)',
//                                         marginBottom: 8,
//                                     }}>
//                                         Message
//                                     </label>
//                                     <textarea
//                                         placeholder="Write your message here..."
//                                         rows={5}
//                                         {...form.register('message')}
//                                         style={{
//                                             width: '100%',
//                                             padding: 'clamp(10px, 1.5vw, 12px) 14px',
//                                             fontSize: 14,
//                                             fontFamily: 'var(--font-app)',
//                                             border: '1.5px solid rgba(15,122,90,0.15)',
//                                             borderRadius: 12,
//                                             background: 'rgba(15,122,90,0.04)',
//                                             color: '#000000',
//                                             transition: 'all 0.25s',
//                                             resize: 'none',
//                                             boxSizing: 'border-box',
//                                         }}
//                                         onFocus={(e) => {
//                                             e.target.style.borderColor = 'rgba(15,122,90,0.40)'
//                                             e.target.style.background = 'rgba(15,122,90,0.08)'
//                                             e.target.style.boxShadow = '0 0 0 3px rgba(15,122,90,0.08)'
//                                         }}
//                                         onBlur={(e) => {
//                                             e.target.style.borderColor = 'rgba(15,122,90,0.15)'
//                                             e.target.style.background = 'rgba(15,122,90,0.04)'
//                                             e.target.style.boxShadow = 'none'
//                                         }}
//                                     />
//                                     {form.formState.errors.message && (
//                                         <p style={{
//                                             fontSize: 11, color: '#DC2626',
//                                             marginTop: 6, fontFamily: 'var(--font-app)',
//                                         }}>
//                                             {form.formState.errors.message.message}
//                                         </p>
//                                     )}
//                                 </div>

//                                 {/* Submit Button */}
//                                 <motion.button
//                                     type="submit"
//                                     disabled={isSending}
//                                     whileHover={!isSending ? { backgroundColor: '#0F7A5A', y: -1, boxShadow: '0 10px 24px rgba(11,37,69,0.26)' } : {}}
//                                     whileTap={!isSending ? { scale: 0.97 } : {}}
//                                     transition={{ duration: 0.22 }}
//                                     className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F7A5A]"
//                                     style={{
//                                         display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
//                                         padding: '12px 28px',
//                                         marginTop: 8,
//                                         borderRadius: 8,
//                                         border: '1px solid transparent',
//                                         background: '#0B2545',
//                                         color: '#FFFFFF',
//                                         fontSize: 14, fontWeight: 600,
//                                         letterSpacing: '0.01em',
//                                         fontFamily: 'var(--font-app)',
//                                         boxShadow: '0 4px 14px rgba(11,37,69,0.20)',
//                                         cursor: isSending ? 'not-allowed' : 'pointer',
//                                         opacity: isSending ? 0.65 : 1,
//                                     }}
//                                 >
//                                     {isSending ? (
//                                         <>
//                                             <Loader2 style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} />
//                                             <span>Sending...</span>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Send style={{ width: 16, height: 16, opacity: 0.9 }} />
//                                             <span>Send Message</span>
//                                         </>
//                                     )}
//                                 </motion.button>
//                             </form>
//                         </motion.div>
//                     </motion.div>
//                 </motion.div>
//             </div>

//             {/* ── Bottom section divider ───────────────────────── */}
//             <div style={{
//                 position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
//                 background: 'linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(15,122,90,0.20), transparent)',
//             }} />
//         </section>
//     )
// }

// export default ContactSection

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Copy,
  Check,
  Download,
  Mail,
  MapPin,
  Send,
  Loader2,
} from "lucide-react";
import { SocialLinks } from "@/components/common/SocialLinks";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/profile";
import { copyToClipboard } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaGoogleScholar,
  FaLinkedinIn,
  FaResearchgate,
} from "react-icons/fa6";
import { SiOrcid } from "react-icons/si";

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_eeucu19";
const EMAILJS_TEMPLATE_ID = "template_2urn3aj";
const EMAILJS_PUBLIC_KEY = "OaLXvoiJ7vQTimi3i";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// ─── Animation Variants ──────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleCopyEmail = async (email: string) => {
    const success = await copyToClipboard(email);

    if (success) {
      setCopiedEmail(email);

      setTimeout(() => {
        setCopiedEmail(null);
      }, 2000);
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSending(true);
    setError(null);

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "baburamtimsina344@gmail.com",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);
      form.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Email send error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  function setIsSearchOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      style={{
        position: "relative",
        padding: "clamp(48px, 7vw, 80px) 0",
        background: "var(--off-white)",
        overflow: "hidden",
      }}
    >
      {/* ── Section Divider ─────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(15,122,90,0.30), rgba(11,37,69,0.12), transparent)",
        }}
      />

      {/* ── Background Orbs ─────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "-15%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(15,122,90,0.07) 0%, rgba(26,64,128,0.05) 50%, transparent 75%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-15%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(11,37,69,0.07) 0%, rgba(26,92,184,0.04) 50%, transparent 70%)",
          }}
        />

        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.022,
            backgroundImage:
              "radial-gradient(circle, #0B2545 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ── Container ───────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 56px)",
        }}
      >
        {/* ── Section Header ──────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{
            marginBottom: 64,
            textAlign: "center",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
              padding: "7px 20px",
              borderRadius: 100,
              background: "rgba(15,122,90,0.08)",
              border: "1px solid rgba(15,122,90,0.22)",
            }}
          >
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                backgroundColor: "var(--green)",
              }}
            />

            <span
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#000000",
                fontFamily: "var(--font-app)",
              }}
            >
              Get In Touch
            </span>

            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                backgroundColor: "var(--green)",
              }}
            />
          </div>

          {/* Main heading */}
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "var(--tracking-display)",
              lineHeight: 1.1,
              color: "#000000",
              margin: 0,
              fontFamily: "var(--font-heading)",
            }}
          >
            Let&apos;s Connect
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(13.5px, 1.5vw, 15px)",
              lineHeight: 1.75,
              color: "#000000",
              margin: "20px auto 0",
              fontWeight: 400,
              fontFamily: "var(--font-app)",
              maxWidth: 480,
            }}
          >
            For academic collaborations, speaking engagements, research
            inquiries, or simply to discuss ideas.
          </p>

          {/* Green rule */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginTop: 22,
            }}
          >
            <div
              style={{
                height: 1,
                width: 64,
                background:
                  "linear-gradient(to right, transparent, rgba(15,122,90,0.50))",
              }}
            />

            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--green)",
                opacity: 0.7,
              }}
            />

            <div
              style={{
                height: 1,
                width: 64,
                background:
                  "linear-gradient(to left, transparent, rgba(15,122,90,0.50))",
              }}
            />
          </div>
        </motion.div>

        {/* ── Two-column grid ─────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: "clamp(32px, 4vw, 56px)",
            alignItems: "start",
          }}
        >
          {/* ── LEFT: Contact Info ──────────────────────── */}
          <motion.div variants={fadeInUp}>
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 20px 56px rgba(11,37,69,0.14)",
              }}
              transition={{ duration: 0.35 }}
              style={{
                position: "relative",
                background: "#FFFFFF",
                borderRadius: 24,
                border: "1.5px solid rgba(15,122,90,0.15)",
                boxShadow:
                  "0 8px 32px rgba(11,37,69,0.09), 0 2px 8px rgba(11,37,69,0.05)",
                padding: "clamp(28px, 4vw, 44px)",
                overflow: "hidden",
                transition: "box-shadow 0.35s",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Green left accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 4,
                  height: 96,
                  background:
                    "linear-gradient(to bottom, var(--green), rgba(15,122,90,0.10))",
                  borderRadius: "0 0 4px 0",
                }}
              />

              {/* Icon label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    background:
                      "linear-gradient(135deg, rgba(15,122,90,0.14), rgba(15,122,90,0.05))",
                    border: "1px solid rgba(15,122,90,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail
                    style={{
                      width: 16,
                      height: 16,
                      color: "var(--green)",
                    }}
                  />
                </div>

                <span
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: "0.20em",
                    textTransform: "uppercase",
                    color: "#000000",
                    fontFamily: "var(--font-app)",
                  }}
                >
                  Contact Info
                </span>
              </div>

              {/* Heading */}
              <h3
                style={{
                  fontSize: "clamp(22px, 3vw, 28px)",
                  fontWeight: 700,
                  color: "#000000",
                  lineHeight: 1.2,
                  letterSpacing: "var(--tracking-heading)",
                  marginBottom: 28,
                  fontFamily: "var(--font-heading)",
                }}
              >
                Reach Out
              </h3>

              {/* Location */}
              <div style={{ marginBottom: 28 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      background:
                        "linear-gradient(135deg, rgba(15,122,90,0.10), rgba(15,122,90,0.05))",
                      border: "1px solid rgba(15,122,90,0.20)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin
                      style={{
                        width: 14,
                        height: 14,
                        color: "var(--green)",
                      }}
                    />
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#000000",
                        fontFamily: "var(--font-app)",
                        margin: "0 0 6px 0",
                      }}
                    >
                      Kirtipur, Nepal
                    </p>

                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#000000",
                        fontFamily: "var(--font-app)",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {SITE_CONFIG.institution}
                    </p>

                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: "#000000",
                        fontFamily: "var(--font-app)",
                        margin: "4px 0 0 0",
                      }}
                    >
                      {SITE_CONFIG.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email addresses */}
              <div
                style={{
                  marginBottom: 28,
                  flex: 1,
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#000000",
                    fontFamily: "var(--font-app)",
                    margin: "0 0 12px 0",
                  }}
                >
                  Email
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {SITE_CONFIG.emails.map((email) => (
                    <motion.div
                      key={email}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 12,
                        borderRadius: 14,
                        background: "rgba(15,122,90,0.06)",
                        border: "1px solid rgba(15,122,90,0.15)",
                        transition: "all 0.3s",
                      }}
                    >
                      <a
                        href={`mailto:${email}`}
                        style={{
                          fontSize: 12.5,
                          color: "#000000",
                          textDecoration: "none",
                          fontFamily: "var(--font-app)",
                          fontWeight: 500,
                          wordBreak: "break-all",
                        }}
                      >
                        {email}
                      </a>

                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopyEmail(email)}
                        aria-label={`Copy ${email}`}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 6,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color:
                            copiedEmail === email
                              ? "var(--green)"
                              : "var(--navy)",
                          transition: "color 0.2s",
                          flexShrink: 0,
                        }}
                      >
                        {copiedEmail === email ? (
                          <Check
                            style={{
                              width: 14,
                              height: 14,
                            }}
                          />
                        ) : (
                          <Copy
                            style={{
                              width: 14,
                              height: 14,
                            }}
                          />
                        )}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div style={{ marginBottom: 24 }}>
                {/* <SocialLinks links={SOCIAL_LINKS} /> */}
                <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/baburam-timsina-9a0b169b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group flex h-8 w-8 items-center justify-center rounded-full text-[#0A66C2] transition-all duration-200 hover:bg-[#0A66C2]/10 hover:-translate-y-0.5"
                  >
                    <FaLinkedinIn className="h-[16px] w-[16px] transition-transform group-hover:scale-110" />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/babusri.timsina"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="group flex h-8 w-8 items-center justify-center rounded-full text-[#1877F2] transition-all duration-200 hover:bg-[#1877F2]/10 hover:-translate-y-0.5"
                  >
                    <FaFacebookF className="h-[16px] w-[16px] transition-transform group-hover:scale-110" />
                  </a>

                  {/* Instagram */}
                  {/* <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group flex h-8 w-8 items-center justify-center rounded-full text-[#E4405F] transition-all duration-200 hover:bg-[#E4405F]/10 hover:-translate-y-0.5"
                >
                  <FaInstagram className="h-[17px] w-[17px] transition-transform group-hover:scale-110" />
                </a> */}

                  {/* YouTube */}
                  {/* <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="group flex h-8 w-8 items-center justify-center rounded-full text-[#FF0000] transition-all duration-200 hover:bg-[#FF0000]/10 hover:-translate-y-0.5"
                >
                  <FaYoutube className="h-[17px] w-[17px] transition-transform group-hover:scale-110" />
                </a> */}

                  {/* ResearchGate */}
                  <a
                    href="https://www.researchgate.net/profile/Baburam-Timsina-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ResearchGate"
                    className="group flex h-8 w-8 items-center justify-center rounded-full text-[#00CCBB] transition-all duration-200 hover:bg-[#00CCBB]/10 hover:-translate-y-0.5"
                  >
                    <FaResearchgate className="h-[17px] w-[17px] transition-transform group-hover:scale-110" />
                  </a>

                  {/* ORCID */}
                  <a
                    href="https://orcid.org/0009-0001-9593-4222"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ORCID"
                    className="group flex h-8 w-8 items-center justify-center rounded-full text-[#A6CE39] transition-all duration-200 hover:bg-[#A6CE39]/10 hover:-translate-y-0.5"
                  >
                    <SiOrcid className="h-[18px] w-[18px] transition-transform group-hover:scale-110" />
                  </a>

                  {/* Google Scholar */}
                  <a
                    href="https://scholar.google.com/citations?hl=en&authuser=1&user=st9Ym1kAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Scholar"
                    className="group flex h-8 w-8 items-center justify-center rounded-full text-[#4285F4] transition-all duration-200 hover:bg-[#4285F4]/10 hover:-translate-y-0.5"
                  >
                    <FaGoogleScholar className="h-[17px] w-[17px] transition-transform group-hover:scale-110" />
                  </a>

                  {/* X */}
                  {/* <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="group flex h-8 w-8 items-center justify-center rounded-full text-black transition-all duration-200 hover:bg-gray-100 hover:-translate-y-0.5"
                >
                  <SiX className="h-[16px] w-[16px] transition-transform group-hover:scale-110" />
                </a> */}
                </div>
              </div>

              {/* Download CV Button */}
              {/* <motion.a
                href="/cv.pdf"
                download
                className="btn btn-outline btn-pill px-6 py-3 text-sm"
                whileHover={{
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <Download
                  style={{
                    width: 15,
                    height: 15,
                  }}
                />
                Download CV
              </motion.a> */}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Contact Form ──────────────────────── */}
          <motion.div variants={fadeInUp}>
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 20px 56px rgba(11,37,69,0.14)",
              }}
              transition={{ duration: 0.35 }}
              style={{
                position: "relative",
                background: "#FFFFFF",
                borderRadius: 24,
                border: "1.5px solid rgba(15,122,90,0.15)",
                boxShadow:
                  "0 8px 32px rgba(11,37,69,0.09), 0 2px 8px rgba(11,37,69,0.05)",
                padding: "clamp(28px, 4vw, 44px)",
                overflow: "hidden",
                transition: "box-shadow 0.35s",
              }}
            >
              {/* Green left accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 4,
                  height: 96,
                  background:
                    "linear-gradient(to bottom, var(--green), rgba(15,122,90,0.10))",
                  borderRadius: "0 0 4px 0",
                }}
              />

              {/* Icon label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    background:
                      "linear-gradient(135deg, rgba(15,122,90,0.14), rgba(15,122,90,0.05))",
                    border: "1px solid rgba(15,122,90,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Send
                    style={{
                      width: 16,
                      height: 16,
                      color: "var(--green)",
                    }}
                  />
                </div>

                <span
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: "0.20em",
                    textTransform: "uppercase",
                    color: "#000000",
                    fontFamily: "var(--font-app)",
                  }}
                >
                  Send Message
                </span>
              </div>

              {/* Heading */}
              <h3
                style={{
                  fontSize: "clamp(22px, 3vw, 28px)",
                  fontWeight: 700,
                  color: "#000000",
                  lineHeight: 1.2,
                  letterSpacing: "var(--tracking-heading)",
                  marginBottom: 28,
                  fontFamily: "var(--font-heading)",
                }}
              >
                Send a Message
              </h3>

              {/* Success Alert */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  style={{
                    padding: 16,
                    borderRadius: 16,
                    background:
                      "linear-gradient(135deg, rgba(15,122,90,0.10), rgba(15,122,90,0.05))",
                    border: "1px solid rgba(15,122,90,0.30)",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "var(--green)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Check
                        style={{
                          width: 14,
                          height: 14,
                          color: "#FFFFFF",
                        }}
                      />
                    </div>

                    <div>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#000000",
                          margin: "0 0 4px 0",
                          fontFamily: "var(--font-app)",
                        }}
                      >
                        Message sent successfully!
                      </p>

                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 400,
                          color: "#000000",
                          margin: 0,
                          fontFamily: "var(--font-app)",
                          lineHeight: 1.5,
                        }}
                      >
                        Thank you for reaching out. Your message has been sent
                        and you will receive a response as soon as possible.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error Alert */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  style={{
                    padding: 16,
                    borderRadius: 16,
                    background:
                      "linear-gradient(135deg, rgba(220,38,38,0.10), rgba(220,38,38,0.05))",
                    border: "1px solid rgba(220,38,38,0.30)",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "#DC2626",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          color: "#FFFFFF",
                          fontSize: 16,
                          fontWeight: 700,
                        }}
                      >
                        !
                      </span>
                    </div>

                    <div>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#DC2626",
                          margin: "0 0 4px 0",
                          fontFamily: "var(--font-app)",
                        }}
                      >
                        Error
                      </p>

                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 400,
                          color: "#000000",
                          margin: 0,
                          fontFamily: "var(--font-app)",
                        }}
                      >
                        {error}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Form */}
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {/* Name & Email Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: 14,
                  }}
                >
                  {/* Name Field */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#000000",
                        fontFamily: "var(--font-app)",
                        marginBottom: 8,
                      }}
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      {...form.register("name")}
                      style={{
                        width: "100%",
                        padding: "clamp(10px, 1.5vw, 12px) 14px",
                        fontSize: 14,
                        fontFamily: "var(--font-app)",
                        border: "1.5px solid rgba(15,122,90,0.15)",
                        borderRadius: 12,
                        background: "rgba(15,122,90,0.04)",
                        color: "#000000",
                        transition: "all 0.25s",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(15,122,90,0.40)";
                        e.target.style.background = "rgba(15,122,90,0.08)";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(15,122,90,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(15,122,90,0.15)";
                        e.target.style.background = "rgba(15,122,90,0.04)";
                        e.target.style.boxShadow = "none";
                      }}
                    />

                    {form.formState.errors.name && (
                      <p
                        style={{
                          fontSize: 11,
                          color: "#DC2626",
                          marginTop: 6,
                          fontFamily: "var(--font-app)",
                        }}
                      >
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#000000",
                        fontFamily: "var(--font-app)",
                        marginBottom: 8,
                      }}
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="your@email.com"
                      {...form.register("email")}
                      style={{
                        width: "100%",
                        padding: "clamp(10px, 1.5vw, 12px) 14px",
                        fontSize: 14,
                        fontFamily: "var(--font-app)",
                        border: "1.5px solid rgba(15,122,90,0.15)",
                        borderRadius: 12,
                        background: "rgba(15,122,90,0.04)",
                        color: "#000000",
                        transition: "all 0.25s",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(15,122,90,0.40)";
                        e.target.style.background = "rgba(15,122,90,0.08)";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(15,122,90,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(15,122,90,0.15)";
                        e.target.style.background = "rgba(15,122,90,0.04)";
                        e.target.style.boxShadow = "none";
                      }}
                    />

                    {form.formState.errors.email && (
                      <p
                        style={{
                          fontSize: 11,
                          color: "#DC2626",
                          marginTop: 6,
                          fontFamily: "var(--font-app)",
                        }}
                      >
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#000000",
                      fontFamily: "var(--font-app)",
                      marginBottom: 8,
                    }}
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Subject of your message"
                    {...form.register("subject")}
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 1.5vw, 12px) 14px",
                      fontSize: 14,
                      fontFamily: "var(--font-app)",
                      border: "1.5px solid rgba(15,122,90,0.15)",
                      borderRadius: 12,
                      background: "rgba(15,122,90,0.04)",
                      color: "#000000",
                      transition: "all 0.25s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(15,122,90,0.40)";
                      e.target.style.background = "rgba(15,122,90,0.08)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(15,122,90,0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(15,122,90,0.15)";
                      e.target.style.background = "rgba(15,122,90,0.04)";
                      e.target.style.boxShadow = "none";
                    }}
                  />

                  {form.formState.errors.subject && (
                    <p
                      style={{
                        fontSize: 11,
                        color: "#DC2626",
                        marginTop: 6,
                        fontFamily: "var(--font-app)",
                      }}
                    >
                      {form.formState.errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#000000",
                      fontFamily: "var(--font-app)",
                      marginBottom: 8,
                    }}
                  >
                    Message
                  </label>

                  <textarea
                    placeholder="Write your message here..."
                    rows={5}
                    {...form.register("message")}
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 1.5vw, 12px) 14px",
                      fontSize: 14,
                      fontFamily: "var(--font-app)",
                      border: "1.5px solid rgba(15,122,90,0.15)",
                      borderRadius: 12,
                      background: "rgba(15,122,90,0.04)",
                      color: "#000000",
                      transition: "all 0.25s",
                      resize: "none",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(15,122,90,0.40)";
                      e.target.style.background = "rgba(15,122,90,0.08)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(15,122,90,0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(15,122,90,0.15)";
                      e.target.style.background = "rgba(15,122,90,0.04)";
                      e.target.style.boxShadow = "none";
                    }}
                  />

                  {form.formState.errors.message && (
                    <p
                      style={{
                        fontSize: 11,
                        color: "#DC2626",
                        marginTop: 6,
                        fontFamily: "var(--font-app)",
                      }}
                    >
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSending}
                  className="btn btn-outline btn-pill px-6 py-3 text-sm"
                  whileHover={!isSending ? { y: -1 } : {}}
                  whileTap={!isSending ? { scale: 0.97 } : {}}
                  transition={{ duration: 0.22 }}
                >
                  {isSending ? (
                    <>
                      <Loader2
                        style={{
                          width: 16,
                          height: 16,
                          animation: "spin 1s linear infinite",
                        }}
                      />

                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send
                        style={{
                          width: 16,
                          height: 16,
                        }}
                      />

                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom section divider ───────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(15,122,90,0.20), transparent)",
        }}
      />
    </section>
  );
}

export default ContactSection;
