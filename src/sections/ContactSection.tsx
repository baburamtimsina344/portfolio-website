// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { motion } from "framer-motion";
// import { Copy, Check, Download, Mail, MapPin, Send } from "lucide-react";
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

//   const onSubmit = (_data: ContactFormValues) => {
//     setSubmitted(true);
//     form.reset();
//     setTimeout(() => setSubmitted(false), 5000);
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
//                     <Button type="submit" 
//                                       className="px-6 py-2 bg-[#4dd0e1] hover:bg-[#26c6da] text-[#1f4567] font-bold rounded-full inline-flex items-center gap-2 transition-all text-sm"
// >
//                       <Send className="h-4 w-4" />
//                       Send Message
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
        // to_email: "brtimsina05@gmail.com", // or use SITE_CONFIG.emails[0]
              to_email: "brtimsina05@gmail.com", // or use SITE_CONFIG.emails[0]

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
    <section id="contact" className="section-padding bg-muted/5 relative">
      <div className="container-wide">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          subtitle="For academic collaborations, speaking engagements, or research inquiries."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <ScrollReveal className="lg:col-span-2 space-y-6">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p>Kathmandu, Nepal</p>
                  <div>
                    <p className="font-medium">{SITE_CONFIG.institution}</p>
                    <p className="text-sm text-muted-foreground">{SITE_CONFIG.location}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {SITE_CONFIG.emails.map((email) => (
                    <div key={email} className="flex items-center justify-between gap-2 p-3 rounded-lg bg-primary/5">
                      <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                        <Mail className="h-4 w-4 text-primary shrink-0" />
                        <span className="break-all">{email}</span>
                      </a>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0 h-8 w-8"
                        onClick={() => handleCopyEmail(email)}
                        aria-label={`Copy ${email}`}
                      >
                        {copiedEmail === email ? (
                          <Check className="h-4 w-4 text-success" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>

                <SocialLinks links={SOCIAL_LINKS} className="pt-2" />

                <Button variant="outline" className="w-full mt-4" asChild>
                  <a href="/cv.pdf" download>
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3" delay={0.15}>
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-lg">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                    <Alert variant="success">
                      <Check className="h-4 w-4" />
                      <AlertTitle>Message sent successfully!</AlertTitle>
                      <AlertDescription>
                        Thank you for reaching out. Dr. Timsina will respond to your inquiry as soon as possible.
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                {error && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                    <Alert variant="destructive">
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
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
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
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Write your message here..." rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={isSending}
                      className="px-6 py-2 bg-[#4dd0e1] hover:bg-[#26c6da] text-[#1f4567] font-bold rounded-full inline-flex items-center gap-2 transition-all text-sm"
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