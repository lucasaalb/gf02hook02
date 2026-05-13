import { lazy, Suspense } from "react";

import HeroSection from "@/components/HeroSection";
import MemoriaQueFica from "@/components/MemoriaQueFica";
import DoresSecao from "@/components/DoresSecao";

const OQueVoceRecebe = lazy(() => import("@/components/OQueVoceRecebe"));

const ExemplosConteudo = lazy(() => import("@/components/ExemplosConteudo"));
const BonusSection = lazy(() => import("@/components/BonusSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const GarantiaSection = lazy(() => import("@/components/GarantiaSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ComoFunciona = lazy(() => import("@/components/ComoFunciona"));
const InfanciaPassaRapido = lazy(() => import("@/components/InfanciaPassaRapido"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Fallback = () => <div className="min-h-[200px]" aria-hidden="true" />;

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      
      <HeroSection />
      <MemoriaQueFica />
      <DoresSecao />
      <Suspense fallback={<Fallback />}>
        <OQueVoceRecebe />
        <ExemplosConteudo />
        <BonusSection />
        <PricingSection />
        <GarantiaSection />
        <TestimonialsSection />
        <ComoFunciona />
        {/* InfanciaPassaRapido removed */}
        <FAQSection />
        <FooterSection />
      </Suspense>
    </main>
  );
};

export default Index;
