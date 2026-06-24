

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { motion } from "framer-motion";
// import { Copy, Check, Download, Mail, MapPin, Send, Loader2 } from "lucide-react";
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
// import { SectionHeading } from "@/components/common/SectionHeading";
// import { SocialLinks } from "@/components/common/SocialLinks";
// import { ScrollReveal } from "@/components/common/ScrollReveal";
// import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/profile";
// import { copyToClipboard } from "@/lib/utils";
// import emailjs from "@emailjs/browser";

// // EmailJS credentials (replace with your own)
// const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
// const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
// const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

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
//         // to_email: "brtimsina05@gmail.com", // or use SITE_CONFIG.emails[0]
//               to_email: "brtimsina05@gmail.com", // or use SITE_CONFIG.emails[0]

//       };

//       await emailjs.send(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         templateParams,
//         EMAILJS_PUBLIC_KEY
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
//     <section id="contact" className="section-padding bg-muted/5 relative">
//       <div className="container-wide">
//         <SectionHeading
//           label="Contact"
//           title="Get In Touch"
//           subtitle="For academic collaborations, speaking engagements, or research inquiries."
//           align="center"
//         />

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
//           <ScrollReveal className="lg:col-span-2 space-y-6">
//             <Card className="glass-card border-0">
//               <CardHeader>
//                 <CardTitle className="text-lg">Contact Information</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
//                   <p>Kathmandu, Nepal</p>
//                   <div>
//                     <p className="font-medium">{SITE_CONFIG.institution}</p>
//                     <p className="text-sm text-muted-foreground">{SITE_CONFIG.location}</p>
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   {SITE_CONFIG.emails.map((email) => (
//                     <div key={email} className="flex items-center justify-between gap-2 p-3 rounded-lg bg-primary/5">
//                       <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
//                         <Mail className="h-4 w-4 text-primary shrink-0" />
//                         <span className="break-all">{email}</span>
//                       </a>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         className="shrink-0 h-8 w-8"
//                         onClick={() => handleCopyEmail(email)}
//                         aria-label={`Copy ${email}`}
//                       >
//                         {copiedEmail === email ? (
//                           <Check className="h-4 w-4 text-success" />
//                         ) : (
//                           <Copy className="h-4 w-4" />
//                         )}
//                       </Button>
//                     </div>
//                   ))}
//                 </div>

//                 <SocialLinks links={SOCIAL_LINKS} className="pt-2" />

//                 <Button variant="outline" className="w-full mt-4" asChild>
//                   <a href="/cv.pdf" download>
//                     <Download className="h-4 w-4" />
//                     Download CV
//                   </a>
//                 </Button>
//               </CardContent>
//             </Card>
//           </ScrollReveal>

//           <ScrollReveal className="lg:col-span-3" delay={0.15}>
//             <Card className="glass-card border-0">
//               <CardHeader>
//                 <CardTitle className="text-lg">Send a Message</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {submitted && (
//                   <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
//                     <Alert variant="success">
//                       <Check className="h-4 w-4" />
//                       <AlertTitle>Message sent successfully!</AlertTitle>
//                       <AlertDescription>
//                         Thank you for reaching out. Dr. Timsina will respond to your inquiry as soon as possible.
//                       </AlertDescription>
//                     </Alert>
//                   </motion.div>
//                 )}

//                 {error && (
//                   <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
//                     <Alert variant="destructive">
//                       <AlertTitle>Error</AlertTitle>
//                       <AlertDescription>{error}</AlertDescription>
//                     </Alert>
//                   </motion.div>
//                 )}

//                 <Form {...form}>
//                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                       <FormField
//                         control={form.control}
//                         name="name"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Full Name</FormLabel>
//                             <FormControl>
//                               <Input placeholder="Your name" {...field} />
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
//                             <FormLabel>Email</FormLabel>
//                             <FormControl>
//                               <Input type="email" placeholder="your@email.com" {...field} />
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
//                           <FormLabel>Subject</FormLabel>
//                           <FormControl>
//                             <Input placeholder="Subject of your message" {...field} />
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
//                           <FormLabel>Message</FormLabel>
//                           <FormControl>
//                             <Textarea placeholder="Write your message here..." rows={5} {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <Button
//                       type="submit"
//                       disabled={isSending}
//                       className="px-6 py-2 bg-[#4dd0e1] hover:bg-[#26c6da] text-[#1f4567] font-bold rounded-full inline-flex items-center gap-2 transition-all text-sm"
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



import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Copy, Check, Download, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SocialLinks } from "@/components/common/SocialLinks";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/profile";
import { copyToClipboard } from "@/lib/utils";
import emailjs from "@emailjs/browser";

// EmailJS credentials (replace with your own)
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const handleCopyEmail = async (email: string) => {
    const success = await copyToClipboard(email);
    if (success) {
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
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
        to_email: "brtimsina05@gmail.com",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Email send error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#F8F9FA] overflow-hidden">
      
      {/* Background Decor – Green & Navy Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#0F7A5A]/20 via-[#0B2545]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#0B2545]/10 via-[#0F7A5A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0F7A5A]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* ─── Section Header (Green Accent) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="relative inline-flex items-center">
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-[#0F7A5A]/40 hidden lg:block" />
            
            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/60 shadow-lg">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0F7A5A]">Connect</span>
              <div className="w-px h-6 bg-[#0F7A5A]/30" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight">
                Get In <span className="text-[#0F7A5A]">Touch</span>
              </h2>
            </div>

            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-[#0F7A5A]/40 hidden lg:block" />
          </div>
          <p className="mt-4 text-[#4A5A6A]/70 max-w-xl mx-auto text-sm">
            For academic collaborations, speaking engagements, or research inquiries.
          </p>
          <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-[#0F7A5A] to-[#0B2545] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* ─── LEFT COLUMN: Contact Info ─── */}
          <ScrollReveal className="lg:col-span-2 space-y-6">
            <Card className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl shadow-xl shadow-[#0B2545]/5 hover:shadow-[#0B2545]/10 transition-all duration-300 hover:border-[#0F7A5A]/30 h-full">
              {/* Green accent bar */}
              <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-[#0F7A5A] to-transparent rounded-tl-2xl" />
              
              <CardHeader>
                <CardTitle className="font-serif text-xl text-[#0B2545]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#0F7A5A]/10 flex items-center justify-center shrink-0 border border-[#0F7A5A]/20">
                    <MapPin className="h-4 w-4 text-[#0F7A5A]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0B2545]">{SITE_CONFIG.institution}</p>
                    <p className="text-sm text-[#4A5A6A]/70">{SITE_CONFIG.location}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {SITE_CONFIG.emails.map((email) => (
                    <div
                      key={email}
                      className="flex items-center justify-between gap-2 p-3 rounded-xl bg-[#0F7A5A]/5 border border-[#0F7A5A]/10 hover:border-[#0F7A5A]/30 transition-colors"
                    >
                      <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 text-sm text-[#0B2545] hover:text-[#0F7A5A] transition-colors"
                      >
                        <Mail className="h-4 w-4 text-[#0F7A5A] shrink-0" />
                        <span className="break-all">{email}</span>
                      </a>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0 h-8 w-8 rounded-full hover:bg-[#0F7A5A]/10 hover:text-[#0F7A5A] transition-colors"
                        onClick={() => handleCopyEmail(email)}
                        aria-label={`Copy ${email}`}
                      >
                        {copiedEmail === email ? (
                          <Check className="h-4 w-4 text-[#0F7A5A]" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>

                <SocialLinks links={SOCIAL_LINKS} className="pt-2" />

                <Button
                  variant="outline"
                  className="w-full rounded-full border-[#0F7A5A]/30 text-[#0F7A5A] hover:bg-[#0F7A5A] hover:text-white hover:border-[#0F7A5A] transition-all duration-300"
                  asChild
                >
                  <a href="/cv.pdf" download>
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* ─── RIGHT COLUMN: Contact Form ─── */}
          <ScrollReveal className="lg:col-span-3" delay={0.15}>
            <Card className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl shadow-xl shadow-[#0B2545]/5 hover:shadow-[#0B2545]/10 transition-all duration-300 hover:border-[#0F7A5A]/30">
              {/* Green accent bar */}
              <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-[#0F7A5A] to-transparent rounded-tl-2xl" />

              <CardHeader>
                <CardTitle className="font-serif text-xl text-[#0B2545]">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <Alert className="bg-[#0F7A5A]/10 border-[#0F7A5A]/30 text-[#0F7A5A] rounded-xl">
                      <Check className="h-4 w-4" />
                      <AlertTitle className="font-semibold">Message sent successfully!</AlertTitle>
                      <AlertDescription>
                        Thank you for reaching out. Dr. Timsina will respond to your inquiry as soon as possible.
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <Alert variant="destructive" className="rounded-xl">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#0B2545] font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                className="rounded-xl border-gray-200 focus:border-[#0F7A5A] focus:ring-[#0F7A5A]/30 bg-white/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#0B2545] font-medium">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                                className="rounded-xl border-gray-200 focus:border-[#0F7A5A] focus:ring-[#0F7A5A]/30 bg-white/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0B2545] font-medium">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Subject of your message"
                              {...field}
                              className="rounded-xl border-gray-200 focus:border-[#0F7A5A] focus:ring-[#0F7A5A]/30 bg-white/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0B2545] font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write your message here..."
                              rows={5}
                              {...field}
                              className="rounded-xl border-gray-200 focus:border-[#0F7A5A] focus:ring-[#0F7A5A]/30 bg-white/50 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={isSending}
                      className="px-8 py-3 bg-[#0F7A5A] hover:bg-[#0B6A4E] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}