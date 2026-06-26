

// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { motion } from "framer-motion";
// import {
//   Copy,
//   Check,
//   Download,
//   Mail,
//   MapPin,
//   Send,
//   Loader2,
// } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { SocialLinks } from "@/components/common/SocialLinks";
// import { ScrollReveal } from "@/components/common/ScrollReveal";
// import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/profile";
// import { copyToClipboard } from "@/lib/utils";
// import emailjs from "@emailjs/browser";

// // EmailJS credentials (replace with your own)
// const EMAILJS_SERVICE_ID = "service_eeucu19";
// const EMAILJS_TEMPLATE_ID = "template_2urn3aj";
// const EMAILJS_PUBLIC_KEY = "OaLXvoiJ7vQTimi3i";

// const contactSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email address"),
//   subject: z.string().min(3, "Subject must be at least 3 characters"),
//   message: z.string().min(10, "Message must be at least 10 characters"),
// });

// type ContactFormValues = z.infer<typeof contactSchema>;

// export function ContactSection() {
//   const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [isSending, setIsSending] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const form = useForm<ContactFormValues>({
//     resolver: zodResolver(contactSchema),
//     defaultValues: { name: "", email: "", subject: "", message: "" },
//   });

//   const handleCopyEmail = async (email: string) => {
//     const success = await copyToClipboard(email);
//     if (success) {
//       setCopiedEmail(email);
//       setTimeout(() => setCopiedEmail(null), 2000);
//     }
//   };

//   const onSubmit = async (data: ContactFormValues) => {
//     setIsSending(true);
//     setError(null);

//     try {
//       const templateParams = {
//         from_name: data.name,
//         from_email: data.email,
//         subject: data.subject,
//         message: data.message,
//         to_email: "baburamtimsina344@gmail.com", // Updated recipient email
//       };

//       await emailjs.send(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         templateParams,
//         EMAILJS_PUBLIC_KEY,
//       );

//       setSubmitted(true);
//       form.reset();
//       setTimeout(() => setSubmitted(false), 5000);
//     } catch (err) {
//       console.error("Email send error:", err);
//       setError("Failed to send message. Please try again later.");
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative py-24 bg-[#F8F9FA] overflow-hidden"
//     >
//       {/* Background Decor – Green & Navy Orbs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#0F7A5A]/20 via-[#0B2545]/5 to-transparent rounded-full blur-3xl" />
//         <div className="absolute bottom-0 -left-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#0B2545]/10 via-[#0F7A5A]/5 to-transparent rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0F7A5A]/5 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         {/* ─── Section Header (Green Accent) ─── */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <div className="relative inline-flex items-center">
//             <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-[#0F7A5A]/40 hidden lg:block" />

//             <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/60 shadow-lg">
//               <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0F7A5A]">
//                 Connect
//               </span>
//               <div className="w-px h-6 bg-[#0F7A5A]/30" />
//               <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight">
//                 Get In <span className="text-[#0F7A5A]">Touch</span>
//               </h2>
//             </div>

//             <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-[#0F7A5A]/40 hidden lg:block" />
//           </div>
//           <p className="mt-4 text-[#4A5A6A]/70 max-w-xl mx-auto text-sm">
//             For academic collaborations, speaking engagements, or research
//             inquiries.
//           </p>
//           <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-[#0F7A5A] to-[#0B2545] rounded-full" />
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
//           {/* ─── LEFT COLUMN: Contact Info ─── */}
//           <ScrollReveal className="lg:col-span-2 space-y-6">
//             <Card className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl shadow-xl shadow-[#0B2545]/5 hover:shadow-[#0B2545]/10 transition-all duration-300 hover:border-[#0F7A5A]/30 h-full">
//               {/* Green accent bar */}
//               <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-[#0F7A5A] to-transparent rounded-tl-2xl" />

//               <CardHeader>
//                 <CardTitle className="font-serif text-xl text-[#0B2545]">
//                   Contact Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-5">
//                 <div className="flex items-start gap-3">
//                   <div className="h-9 w-9 rounded-full bg-[#0F7A5A]/10 flex items-center justify-center shrink-0 border border-[#0F7A5A]/20">
//                     <MapPin className="h-4 w-4 text-[#0F7A5A]" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-[#0B2545]">
//                       {SITE_CONFIG.institution}
//                     </p>
//                     <p className="text-sm text-[#4A5A6A]/70">
//                       {SITE_CONFIG.location}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   {SITE_CONFIG.emails.map((email) => (
//                     <div
//                       key={email}
//                       className="flex items-center justify-between gap-2 p-3 rounded-xl bg-[#0F7A5A]/5 border border-[#0F7A5A]/10 hover:border-[#0F7A5A]/30 transition-colors"
//                     >
//                       <a
//                         href={`mailto:${email}`}
//                         className="flex items-center gap-2 text-sm text-[#0B2545] hover:text-[#0F7A5A] transition-colors"
//                       >
//                         <Mail className="h-4 w-4 text-[#0F7A5A] shrink-0" />
//                         <span className="break-all">{email}</span>
//                       </a>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         className="shrink-0 h-8 w-8 rounded-full hover:bg-[#0F7A5A]/10 hover:text-[#0F7A5A] transition-colors"
//                         onClick={() => handleCopyEmail(email)}
//                         aria-label={`Copy ${email}`}
//                       >
//                         {copiedEmail === email ? (
//                           <Check className="h-4 w-4 text-[#0F7A5A]" />
//                         ) : (
//                           <Copy className="h-4 w-4" />
//                         )}
//                       </Button>
//                     </div>
//                   ))}
//                 </div>

//                 <SocialLinks links={SOCIAL_LINKS} className="pt-2" />

//                 <Button
//                   variant="outline"
//                   className="w-full rounded-full border-[#0F7A5A]/30 text-[#0F7A5A] hover:bg-[#0F7A5A] hover:text-white hover:border-[#0F7A5A] transition-all duration-300"
//                   asChild
//                 >
//                   <a href="/cv.pdf" download>
//                     <Download className="h-4 w-4" />
//                     Download CV
//                   </a>
//                 </Button>
//               </CardContent>
//             </Card>
//           </ScrollReveal>

//           {/* ─── RIGHT COLUMN: Contact Form ─── */}
//           <ScrollReveal className="lg:col-span-3" delay={0.15}>
//             <Card className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl shadow-xl shadow-[#0B2545]/5 hover:shadow-[#0B2545]/10 transition-all duration-300 hover:border-[#0F7A5A]/30">
//               {/* Green accent bar */}
//               <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-[#0F7A5A] to-transparent rounded-tl-2xl" />

//               <CardHeader>
//                 <CardTitle className="font-serif text-xl text-[#0B2545]">
//                   Send a Message
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {submitted && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mb-6"
//                   >
//                     <Alert className="bg-[#0F7A5A]/10 border-[#0F7A5A]/30 text-[#0F7A5A] rounded-xl">
//                       <Check className="h-4 w-4" />
//                       <AlertTitle className="font-semibold">
//                         Message sent successfully!
//                       </AlertTitle>
//                       <AlertDescription>
//                         Thank you for reaching out. Your inquiry has been sent to
//                         baburamtimsina344@gmail.com and you will receive a response as soon as possible.
//                       </AlertDescription>
//                     </Alert>
//                   </motion.div>
//                 )}

//                 {error && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mb-6"
//                   >
//                     <Alert variant="destructive" className="rounded-xl">
//                       <AlertTitle>Error</AlertTitle>
//                       <AlertDescription>{error}</AlertDescription>
//                     </Alert>
//                   </motion.div>
//                 )}

//                 <Form {...form}>
//                   <form
//                     onSubmit={form.handleSubmit(onSubmit)}
//                     className="space-y-5"
//                   >
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                       <FormField
//                         control={form.control}
//                         name="name"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-[#0B2545] font-medium">
//                               Full Name
//                             </FormLabel>
//                             <FormControl>
//                               <Input
//                                 placeholder="Your name"
//                                 {...field}
//                                 className="rounded-xl border-gray-200 focus:border-[#0F7A5A] focus:ring-[#0F7A5A]/30 bg-white/50"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                       <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-[#0B2545] font-medium">
//                               Email
//                             </FormLabel>
//                             <FormControl>
//                               <Input
//                                 type="email"
//                                 placeholder="your@email.com"
//                                 {...field}
//                                 className="rounded-xl border-gray-200 focus:border-[#0F7A5A] focus:ring-[#0F7A5A]/30 bg-white/50"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>
//                     <FormField
//                       control={form.control}
//                       name="subject"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-[#0B2545] font-medium">
//                             Subject
//                           </FormLabel>
//                           <FormControl>
//                             <Input
//                               placeholder="Subject of your message"
//                               {...field}
//                               className="rounded-xl border-gray-200 focus:border-[#0F7A5A] focus:ring-[#0F7A5A]/30 bg-white/50"
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <FormField
//                       control={form.control}
//                       name="message"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-[#0B2545] font-medium">
//                             Message
//                           </FormLabel>
//                           <FormControl>
//                             <Textarea
//                               placeholder="Write your message here..."
//                               rows={5}
//                               {...field}
//                               className="rounded-xl border-gray-200 focus:border-[#0F7A5A] focus:ring-[#0F7A5A]/30 bg-white/50 resize-none"
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <Button
//                       type="submit"
//                       disabled={isSending}
//                       className="px-8 py-3 bg-[#0F7A5A] hover:bg-[#0B6A4E] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
//                     >
//                       {isSending ? (
//                         <>
//                           <Loader2 className="h-4 w-4 animate-spin" />
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <Send className="h-4 w-4" />
//                           Send Message
//                         </>
//                       )}
//                     </Button>
//                   </form>
//                 </Form>
//               </CardContent>
//             </Card>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import {
    Copy,
    Check,
    Download,
    Mail,
    MapPin,
    Send,
    Loader2,
} from 'lucide-react'
import { SocialLinks } from '@/components/common/SocialLinks'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/data/profile'
import { copyToClipboard } from '@/lib/utils'
import emailjs from '@emailjs/browser'

// EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_eeucu19'
const EMAILJS_TEMPLATE_ID = 'template_2urn3aj'
const EMAILJS_PUBLIC_KEY = 'OaLXvoiJ7vQTimi3i'

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(3, 'Subject must be at least 3 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof contactSchema>

// ─── Animation Variants ──────────────────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
}

export function ContactSection() {
    const [copiedEmail, setCopiedEmail] = useState<string | null>(null)
    const [submitted, setSubmitted] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: '', email: '', subject: '', message: '' },
    })

    const handleCopyEmail = async (email: string) => {
        const success = await copyToClipboard(email)
        if (success) {
            setCopiedEmail(email)
            setTimeout(() => setCopiedEmail(null), 2000)
        }
    }

    const onSubmit = async (data: ContactFormValues) => {
        setIsSending(true)
        setError(null)

        try {
            const templateParams = {
                from_name: data.name,
                from_email: data.email,
                subject: data.subject,
                message: data.message,
                to_email: 'baburamtimsina344@gmail.com',
            }

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            )

            setSubmitted(true)
            form.reset()
            setTimeout(() => setSubmitted(false), 5000)
        } catch (err) {
            console.error('Email send error:', err)
            setError('Failed to send message. Please try again later.')
        } finally {
            setIsSending(false)
        }
    }

    return (
        <section
            id="contact"
            aria-label="Contact Section"
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
                            Get In Touch
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
                        Let's{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Connect.
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p style={{
                        fontSize: 'clamp(13.5px, 1.5vw, 15px)',
                        lineHeight: 1.75,
                        color: 'var(--gray-600)',
                        margin: '20px auto 0',
                        fontWeight: 300,
                        fontFamily: 'Inter, sans-serif',
                        maxWidth: 480,
                    }}>
                        For academic collaborations, speaking engagements, research inquiries, or simply to discuss ideas.
                    </p>

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
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                        gap: 'clamp(32px, 4vw, 56px)',
                        alignItems: 'start',
                    }}
                >

                    {/* ── LEFT: Contact Info ──────────────────────── */}
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
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {/* Gold left accent bar */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0,
                                width: 4, height: 96,
                                background: 'linear-gradient(to bottom, var(--gold), rgba(212,175,55,0.10))',
                                borderRadius: '0 0 4px 0',
                            }} />

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
                                    <Mail style={{ width: 16, height: 16, color: 'var(--gold)' }} />
                                </div>
                                <span style={{
                                    fontSize: 10.5, fontWeight: 700,
                                    letterSpacing: '0.20em', textTransform: 'uppercase',
                                    color: 'rgba(11,37,69,0.40)',
                                    fontFamily: 'Inter, sans-serif',
                                }}>
                                    Contact Info
                                </span>
                            </div>

                            {/* Heading */}
                            <h3
                                className="font-display"
                                style={{
                                    fontSize: 'clamp(22px, 3vw, 28px)',
                                    fontWeight: 700,
                                    color: 'var(--navy)',
                                    lineHeight: 1.2,
                                    letterSpacing: '-0.02em',
                                    marginBottom: 28,
                                }}
                            >
                                Reach Out
                            </h3>

                            {/* Location */}
                            <div style={{ marginBottom: 28 }}>
                                <div style={{
                                    display: 'flex', alignItems: 'flex-start', gap: 12,
                                    marginBottom: 12,
                                }}>
                                    <div style={{
                                        width: 32, height: 32, borderRadius: 10,
                                        background: 'linear-gradient(135deg, rgba(212,175,55,0.10), rgba(212,175,55,0.05))',
                                        border: '1px solid rgba(212,175,55,0.20)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <MapPin style={{ width: 14, height: 14, color: 'var(--gold)' }} />
                                    </div>
                                    <div>
                                        <p style={{
                                            fontSize: 12, fontWeight: 700,
                                            letterSpacing: '0.08em', textTransform: 'uppercase',
                                            color: 'rgba(11,37,69,0.40)',
                                            fontFamily: 'Inter, sans-serif',
                                            margin: '0 0 6px 0',
                                        }}>
Kirtipur, Nepal                                        </p>
                                        <p style={{
                                            fontSize: 14, fontWeight: 500,
                                            color: 'var(--navy)',
                                            fontFamily: 'Inter, sans-serif',
                                            margin: 0,
                                            lineHeight: 1.5,
                                        }}>
                                            {SITE_CONFIG.institution}
                                        </p>
                                        <p style={{
                                            fontSize: 13, fontWeight: 400,
                                            color: 'var(--gray-600)',
                                            fontFamily: 'Inter, sans-serif',
                                            margin: '4px 0 0 0',
                                        }}>
                                            {SITE_CONFIG.location}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Email addresses */}
                            {/* Email addresses */}
<div style={{ marginBottom: 28, flex: 1 }}>
    <p style={{
        fontSize: 12, fontWeight: 700,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: 'rgba(11,37,69,0.40)',
        fontFamily: 'Inter, sans-serif',
        margin: '0 0 12px 0',
    }}>
        Email
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {SITE_CONFIG.emails.map((email) => (
            <motion.div
                key={email}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: 12,
                    borderRadius: 14,
                    background: 'rgba(212,175,55,0.06)',
                    border: '1px solid rgba(212,175,55,0.15)',
                    transition: 'all 0.3s',
                }}
            >
                <a
                    href={`mailto:${email}`}
                    style={{
                        fontSize: 12.5,
                        color: 'var(--navy)',
                        textDecoration: 'none',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        wordBreak: 'break-all',
                    }}
                >
                    {email}
                </a>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopyEmail(email)}
                    aria-label={`Copy ${email}`}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 6,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: copiedEmail === email ? 'var(--gold)' : 'var(--navy)',
                        transition: 'color 0.2s',
                        flexShrink: 0,
                    }}
                >
                    {copiedEmail === email ? (
                        <Check style={{ width: 14, height: 14 }} />
                    ) : (
                        <Copy style={{ width: 14, height: 14 }} />
                    )}
                </motion.button>
            </motion.div>
        ))}
    </div>
</div>
                            {/* </div> */}

                            {/* Social Links */}
                            <div style={{ marginBottom: 24 }}>
                                <SocialLinks links={SOCIAL_LINKS} />
                            </div>

                            {/* Download CV Button */}
                            <motion.a
                                href="/cv.pdf"
                                download
                                whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(11,37,69,0.28)' }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.25 }}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
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
                                    width: '100%',
                                    textAlign: 'center',
                                }}
                            >
                                <Download style={{ width: 15, height: 15, opacity: 0.8 }} />
                                Download CV
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT: Contact Form ──────────────────────── */}
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
                                    <Send style={{ width: 16, height: 16, color: 'var(--gold)' }} />
                                </div>
                                <span style={{
                                    fontSize: 10.5, fontWeight: 700,
                                    letterSpacing: '0.20em', textTransform: 'uppercase',
                                    color: 'rgba(11,37,69,0.40)',
                                    fontFamily: 'Inter, sans-serif',
                                }}>
                                    Send Message
                                </span>
                            </div>

                            {/* Heading */}
                            <h3
                                className="font-display"
                                style={{
                                    fontSize: 'clamp(22px, 3vw, 28px)',
                                    fontWeight: 700,
                                    color: 'var(--navy)',
                                    lineHeight: 1.2,
                                    letterSpacing: '-0.02em',
                                    marginBottom: 28,
                                }}
                            >
                                Send a{' '}
                                <span style={{
                                    background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>
                                    Message
                                </span>
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
                                        background: 'linear-gradient(135deg, rgba(212,175,55,0.10), rgba(212,175,55,0.05))',
                                        border: '1px solid rgba(212,175,55,0.30)',
                                        marginBottom: 20,
                                    }}
                                >
                                    <div style={{
                                        display: 'flex', alignItems: 'flex-start', gap: 12,
                                    }}>
                                        <div style={{
                                            width: 24, height: 24, borderRadius: '50%',
                                            background: 'var(--gold)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0,
                                        }}>
                                            <Check style={{ width: 14, height: 14, color: '#FFFFFF' }} />
                                        </div>
                                        <div>
                                            <p style={{
                                                fontSize: 14, fontWeight: 600,
                                                color: 'var(--navy)',
                                                margin: '0 0 4px 0',
                                                fontFamily: 'Inter, sans-serif',
                                            }}>
                                                Message sent successfully!
                                            </p>
                                            <p style={{
                                                fontSize: 13, fontWeight: 400,
                                                color: 'var(--gray-600)',
                                                margin: 0,
                                                fontFamily: 'Inter, sans-serif',
                                                lineHeight: 1.5,
                                            }}>
                                                Thank you for reaching out. Your message has been sent and you will receive a response as soon as possible.
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
                                        background: 'linear-gradient(135deg, rgba(220,38,38,0.10), rgba(220,38,38,0.05))',
                                        border: '1px solid rgba(220,38,38,0.30)',
                                        marginBottom: 20,
                                    }}
                                >
                                    <div style={{
                                        display: 'flex', alignItems: 'flex-start', gap: 12,
                                    }}>
                                        <div style={{
                                            width: 24, height: 24, borderRadius: '50%',
                                            background: '#DC2626', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0,
                                        }}>
                                            <span style={{
                                                color: '#FFFFFF', fontSize: 16,
                                                fontWeight: 700,
                                            }}>!</span>
                                        </div>
                                        <div>
                                            <p style={{
                                                fontSize: 14, fontWeight: 600,
                                                color: '#DC2626',
                                                margin: '0 0 4px 0',
                                                fontFamily: 'Inter, sans-serif',
                                            }}>
                                                Error
                                            </p>
                                            <p style={{
                                                fontSize: 13, fontWeight: 400,
                                                color: 'var(--gray-600)',
                                                margin: 0,
                                                fontFamily: 'Inter, sans-serif',
                                            }}>
                                                {error}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Form */}
                            <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                                {/* Name & Email Row */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                                    gap: 14,
                                }}>
                                    {/* Name Field */}
                                    <div>
                                        <label style={{
                                            display: 'block',
                                            fontSize: 12, fontWeight: 600,
                                            letterSpacing: '0.08em', textTransform: 'uppercase',
                                            color: 'rgba(11,37,69,0.50)',
                                            fontFamily: 'Inter, sans-serif',
                                            marginBottom: 8,
                                        }}>
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            {...form.register('name')}
                                            style={{
                                                width: '100%',
                                                padding: 'clamp(10px, 1.5vw, 12px) 14px',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                border: '1.5px solid rgba(212,175,55,0.15)',
                                                borderRadius: 12,
                                                background: 'rgba(212,175,55,0.04)',
                                                color: 'var(--navy)',
                                                transition: 'all 0.25s',
                                                boxSizing: 'border-box',
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = 'rgba(212,175,55,0.40)'
                                                e.target.style.background = 'rgba(212,175,55,0.08)'
                                                e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.08)'
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = 'rgba(212,175,55,0.15)'
                                                e.target.style.background = 'rgba(212,175,55,0.04)'
                                                e.target.style.boxShadow = 'none'
                                            }}
                                        />
                                        {form.formState.errors.name && (
                                            <p style={{
                                                fontSize: 11, color: '#DC2626',
                                                marginTop: 6, fontFamily: 'Inter, sans-serif',
                                            }}>
                                                {form.formState.errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label style={{
                                            display: 'block',
                                            fontSize: 12, fontWeight: 600,
                                            letterSpacing: '0.08em', textTransform: 'uppercase',
                                            color: 'rgba(11,37,69,0.50)',
                                            fontFamily: 'Inter, sans-serif',
                                            marginBottom: 8,
                                        }}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            {...form.register('email')}
                                            style={{
                                                width: '100%',
                                                padding: 'clamp(10px, 1.5vw, 12px) 14px',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                border: '1.5px solid rgba(212,175,55,0.15)',
                                                borderRadius: 12,
                                                background: 'rgba(212,175,55,0.04)',
                                                color: 'var(--navy)',
                                                transition: 'all 0.25s',
                                                boxSizing: 'border-box',
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = 'rgba(212,175,55,0.40)'
                                                e.target.style.background = 'rgba(212,175,55,0.08)'
                                                e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.08)'
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = 'rgba(212,175,55,0.15)'
                                                e.target.style.background = 'rgba(212,175,55,0.04)'
                                                e.target.style.boxShadow = 'none'
                                            }}
                                        />
                                        {form.formState.errors.email && (
                                            <p style={{
                                                fontSize: 11, color: '#DC2626',
                                                marginTop: 6, fontFamily: 'Inter, sans-serif',
                                            }}>
                                                {form.formState.errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <label style={{
                                        display: 'block',
                                        fontSize: 12, fontWeight: 600,
                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                        color: 'rgba(11,37,69,0.50)',
                                        fontFamily: 'Inter, sans-serif',
                                        marginBottom: 8,
                                    }}>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Subject of your message"
                                        {...form.register('subject')}
                                        style={{
                                            width: '100%',
                                            padding: 'clamp(10px, 1.5vw, 12px) 14px',
                                            fontSize: 14,
                                            fontFamily: 'Inter, sans-serif',
                                            border: '1.5px solid rgba(212,175,55,0.15)',
                                            borderRadius: 12,
                                            background: 'rgba(212,175,55,0.04)',
                                            color: 'var(--navy)',
                                            transition: 'all 0.25s',
                                            boxSizing: 'border-box',
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = 'rgba(212,175,55,0.40)'
                                            e.target.style.background = 'rgba(212,175,55,0.08)'
                                            e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.08)'
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = 'rgba(212,175,55,0.15)'
                                            e.target.style.background = 'rgba(212,175,55,0.04)'
                                            e.target.style.boxShadow = 'none'
                                        }}
                                    />
                                    {form.formState.errors.subject && (
                                        <p style={{
                                            fontSize: 11, color: '#DC2626',
                                            marginTop: 6, fontFamily: 'Inter, sans-serif',
                                        }}>
                                            {form.formState.errors.subject.message}
                                        </p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label style={{
                                        display: 'block',
                                        fontSize: 12, fontWeight: 600,
                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                        color: 'rgba(11,37,69,0.50)',
                                        fontFamily: 'Inter, sans-serif',
                                        marginBottom: 8,
                                    }}>
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Write your message here..."
                                        rows={5}
                                        {...form.register('message')}
                                        style={{
                                            width: '100%',
                                            padding: 'clamp(10px, 1.5vw, 12px) 14px',
                                            fontSize: 14,
                                            fontFamily: 'Inter, sans-serif',
                                            border: '1.5px solid rgba(212,175,55,0.15)',
                                            borderRadius: 12,
                                            background: 'rgba(212,175,55,0.04)',
                                            color: 'var(--navy)',
                                            transition: 'all 0.25s',
                                            resize: 'none',
                                            boxSizing: 'border-box',
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = 'rgba(212,175,55,0.40)'
                                            e.target.style.background = 'rgba(212,175,55,0.08)'
                                            e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.08)'
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = 'rgba(212,175,55,0.15)'
                                            e.target.style.background = 'rgba(212,175,55,0.04)'
                                            e.target.style.boxShadow = 'none'
                                        }}
                                    />
                                    {form.formState.errors.message && (
                                        <p style={{
                                            fontSize: 11, color: '#DC2626',
                                            marginTop: 6, fontFamily: 'Inter, sans-serif',
                                        }}>
                                            {form.formState.errors.message.message}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSending}
                                    whileHover={!isSending ? { y: -2, boxShadow: '0 12px 36px rgba(11,37,69,0.28)' } : {}}
                                    whileTap={!isSending ? { scale: 0.97 } : {}}
                                    transition={{ duration: 0.25 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                                        padding: '12px 28px',
                                        marginTop: 8,
                                        borderRadius: 100,
                                        background: isSending
                                            ? 'linear-gradient(135deg, rgba(212,175,55,0.30), rgba(212,175,55,0.20))'
                                            : 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
                                        border: '1px solid rgba(212,175,55,0.22)',
                                        color: isSending ? 'rgba(255,255,255,0.60)' : '#FFFFFF',
                                        fontSize: 13, fontWeight: 600,
                                        letterSpacing: '0.02em',
                                        fontFamily: 'Inter, sans-serif',
                                        boxShadow: '0 4px 18px rgba(11,37,69,0.28)',
                                        transition: 'all 0.25s',
                                        cursor: isSending ? 'not-allowed' : 'pointer',
                                        opacity: isSending ? 0.7 : 1,
                                    }}
                                >
                                    {isSending ? (
                                        <>
                                            <Loader2 style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send style={{ width: 16, height: 16, opacity: 0.9 }} />
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
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(11,37,69,0.10), rgba(212,175,55,0.20), transparent)',
            }} />
        </section>
    )
}

export default ContactSection