// import { lazy, Suspense } from "react";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
// import { Skeleton } from "@/components/ui/skeleton";
// import { HeroSection } from "@/sections/HeroSection";
// import { AboutSection } from "@/sections/AboutSection";

// const NewsSection = lazy(() => import("@/sections/NewsSection").then((m) => ({ default: m.NewsSection })));
// const PublicationsSection = lazy(() => import("@/sections/PublicationsSection").then((m) => ({ default: m.PublicationsSection })));
// const KnowledgeExchangeSection = lazy(() => import("@/sections/KnowledgeExchangeSection"));
// const TeachingSection = lazy(() => import("@/sections/TeachingSection").then((m) => ({ default: m.TeachingSection })));
// const EditorialRolesSection = lazy(() => import("@/sections/EditorialRolesSection").then((m) => ({ default: m.EditorialRolesSection })));
// const LeadershipSection = lazy(() => import("@/sections/LeadershipSection").then((m) => ({ default: m.LeadershipSection })));
// const ContactSection = lazy(() => import("@/sections/ContactSection").then((m) => ({ default: m.ContactSection })));

// function SectionFallback() {
//   return (
//     <div className="section-padding container-wide space-y-4">
//       <Skeleton className="h-8 w-48" />
//       <Skeleton className="h-4 w-full max-w-2xl" />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//         {[1, 2, 3].map((i) => (
//           <Skeleton key={i} className="h-48 rounded-xl" />
//         ))}
//       </div>
//     </div>
//   );
// }

// export function MainLayout() {
//   return (
//     <div className="min-h-screen flex flex-col overflow-x-hidden">
//       <Navbar />
//       <main className="flex-1">
//         <HeroSection />
//         <AboutSection />
//         <Suspense fallback={<SectionFallback />}>
//           <NewsSection />
//         </Suspense>
//         <Suspense fallback={<SectionFallback />}>
//           <PublicationsSection />
//         </Suspense>
//         {/* <Suspense fallback={<SectionFallback />}>
//           <KnowledgeExchangeSection />
//         </Suspense> */}
//         <Suspense fallback={<SectionFallback />}>
//           <TeachingSection />
//         </Suspense>
//         <Suspense fallback={<SectionFallback />}>
//           <EditorialRolesSection />
//         </Suspense>
//         <Suspense fallback={<SectionFallback />}>
//           <LeadershipSection />
//         </Suspense>
//         <Suspense fallback={<SectionFallback />}>
//           <ContactSection />
//         </Suspense>
//       </main>
//       <Footer />
//     </div>
//   );
// }


// layouts/MainLayout.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTrackVisit } from "@/hooks/useTrackVisit";

export function MainLayout({ children }: { children: React.ReactNode }) {
  useTrackVisit(); // Track visit on every page!
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32">{children}</main>
      <Footer />
    </div>
  );
}