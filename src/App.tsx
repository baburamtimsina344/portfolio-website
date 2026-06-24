import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MainLayout } from "@/layouts/MainLayout";
import { SEO } from "@/components/common/SEO";
import KnowledgeExchange from "./sections/KnowledgeExchangeSection";

function HomePage() {
  return (
    <>
      <SEO />
      <MainLayout />
    </>
  );
}

export default function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
         <Routes>
          <Route path="/knowledge-exchange" element={<KnowledgeExchange/>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}
