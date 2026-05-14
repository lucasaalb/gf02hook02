import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import mockup from "@/assets/mockup-grafismo.webp";
const heroImage = "https://qtbkvshbmqlszncxlcuc.supabase.co/storage/v1/object/public/dsl-uploads/JMNk0ffKBhRUfmaQlPxkiv042B83/e437a9be-22c2-45c3-a69f-a59afe29deb0.png";

const HeroSection = () => (
  <section className="relative overflow-hidden pt-8 pb-12 md:py-16 bg-gradient-to-b from-secondary/40 via-background to-background">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <span className="inline-block bg-[hsl(var(--price-badge))]/40 text-primary-dark font-extrabold text-[11px] sm:text-xs px-4 py-1.5 rounded-full mb-5 border border-[hsl(var(--price-badge))]/60">
        ✨ Para quem achou que não acompanhava mais
      </span>

      <h1 className="text-[1.85rem] leading-[1.1] sm:text-4xl lg:text-5xl font-heading font-extrabold text-primary-dark mb-4 text-balance px-1">
        Eu achei que tinha ficado pra trás…<br />até perceber que ele ainda precisava de mim.
      </h1>

      <p className="text-[0.95rem] sm:text-base lg:text-lg text-foreground/75 mb-8 max-w-xl mx-auto leading-relaxed px-4 italic">
        Hoje é celular. É internet. É tela o tempo todo. E muitas avós começaram a sentir que já não conseguem acompanhar essa geração. Mas tem uma coisa que tecnologia nenhuma substitui: alguém presente ao lado da criança.
      </p>

      <div className="relative mb-8 px-2">
        <div className="absolute -top-4 left-1/4 w-20 h-20 bg-accent/30 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <img
          src={heroImage}
          alt="Kit de atividades para avós ensinarem os netos a ler"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="640"
          height="640"
          className="relative w-full max-w-md mx-auto drop-shadow-2xl animate-float rounded-2xl md:rounded-[2.5rem] border-4 border-white shadow-xl"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-md mx-auto mb-6 text-left">
        {[
          "Atividades simples para chamar a criança para perto",
          "Ajuda nas primeiras letras, sons e coordenação",
          "Ideal para criar pausas longe das telas",
          "Um jeito leve de transformar aprendizado em tempo junto",
        ].map((item) => (
          <span key={item} className="flex items-start gap-2 text-foreground text-xs sm:text-sm font-bold">
            <Check className="w-4 h-4 text-support-green flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </span>
        ))}
      </div>

      <Button variant="cta" size="sm" className="w-full sm:w-auto text-[13px] sm:text-sm px-6 py-4 rounded-full shadow-lg text-primary-dark transition-all hover:scale-105" asChild>
        <a href="#preco" className="whitespace-normal h-auto py-2 leading-[1.2]">QUERO ESTAR MAIS PRESENTE COM MEU NETO</a>
      </Button>

      <div className="mt-4 flex justify-center">
        <span className="inline-flex items-center gap-2 bg-support-green/15 text-primary-dark px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
          <MessageCircle className="w-4 h-4 text-support-green" />
          Acesso simples pelo celular ou para imprimir em casa.
        </span>
      </div>
    </div>
  </section>
);

export default HeroSection;