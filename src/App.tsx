

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MainLayout } from "@/layouts/MainLayout";
import { SEO } from "@/components/common/SEO";
import { Skeleton } from "@/components/ui/skeleton";
// import KnowledgeExchange from "./sections/KnowledgeExchangeSection";
import { HeroSection } from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import { NewsSection } from "./sections/NewsSection";
import { PublicationsSection } from "./sections/PublicationsSection";
import TeachingSection from "./sections/TeachingSection";


import  EditorialRolesSection  from "./sections/EditorialRolesSection";
import { ContactSection } from "./sections/ContactSection";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "@/lib/utils";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Projects from "./sections/Projects";
import AwardsAndCertifications from "./sections/awards&certifications";
import CV from "./sections/cv";

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
      {/* <Suspense fallback={<SectionFallback />}>
        <TeachingSection />
      </Suspense> */}
      {/* <Suspense fallback={<SectionFallback />}>
        <EditorialRolesSection />
      </Suspense> */}
      {/* <Suspense fallback={<SectionFallback />}>
        <LeadershipSection />
      </Suspense> */}
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
          {/* <Route path="/knowledge-exchange" element={<MainLayout><KnowledgeExchange /></MainLayout>} /> */}
          <Route path="/teaching" element={<MainLayout><TeachingSection /></MainLayout>} />
          <Route path="/editorial-roles" element={<MainLayout><EditorialRolesSection /></MainLayout>} />
                    <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
                    <Route path="/awards&certifications" element={<MainLayout><AwardsAndCertifications /></MainLayout>} />
                    <Route path="/cv" element={<MainLayout><CV /></MainLayout>} />

          {/* <Route path="/leadershipSection" element={<MainLayout><LeadershipSection /></MainLayout>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}