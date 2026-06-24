// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { MainLayout } from "@/layouts/MainLayout";
// import { SEO } from "@/components/common/SEO";
// import KnowledgeExchange from "./sections/KnowledgeExchangeSection";

// function HomePage() {
//   return (
//     <>
//       <SEO />
//       <MainLayout />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <TooltipProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//         </Routes>
//          <Routes>
//           <Route path="/knowledge-exchange" element={<KnowledgeExchange/>} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MainLayout } from "@/layouts/MainLayout";
import { SEO } from "@/components/common/SEO";
import { Skeleton } from "@/components/ui/skeleton";
import KnowledgeExchange from "./sections/KnowledgeExchangeSection";
import { HeroSection } from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import { NewsSection } from "./sections/NewsSection";
import { PublicationsSection } from "./sections/PublicationsSection";
import { TeachingSection } from "./sections/TeachingSection";
import { EditorialRolesSection } from "./sections/EditorialRolesSection";
import { LeadershipSection } from "./sections/LeadershipSection";
import { ContactSection } from "./sections/ContactSection";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "@/lib/utils";

function SectionFallback() {
  return (
    <div className="section-padding container-wide space-y-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-4 w-full max-w-2xl" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-48 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

function HomeContent() {
  const location = useLocation();

  useEffect(() => {
    // If we have a scrollTo state, scroll after a short delay to ensure sections are rendered
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <SEO />
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<SectionFallback />}>
        <NewsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PublicationsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TeachingSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <EditorialRolesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <LeadershipSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><HomeContent /></MainLayout>} />
          <Route path="/knowledge-exchange" element={<MainLayout><KnowledgeExchange /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}