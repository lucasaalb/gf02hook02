import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import mockup from "@/assets/mockup-grafismo.webp";
const heroImage = "https://qtbkvshbmqlszncxlcuc.supabase.co/storage/v1/object/public/dsl-uploads/JMNk0ffKBhRUfmaQlPxkiv042B83/e437a9be-22c2-45c3-a69f-a59afe29deb0.png";

const HeroSection = () => (
  <section className="relative overflow-hidden pt-8 pb-12 md:py-16 bg-gradient-to-b from-secondary/40 via-background to-background">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <span className="inline-block bg-[hsl(var(--price-badge))]/40 text-primary-dark font-extrabold text-[11px] sm:text-xs px-4 py-1.5 rounded-full mb-5 border border-[hsl(var(--price-badge))]/60">
        ✨ Para avós que querem participar com segurança
      </span>

      <h1 className="text-[1.85rem] leading-[1.1] sm:text-4xl lg:text-5xl font-heading font-extrabold text-primary-dark mb-4 text-balance px-1">
        Ela queria ajudar o neto a ler… mas tinha medo de ensinar errado.
      </h1>

      <p className="text-[0.95rem] sm:text-base lg:text-lg text-foreground/75 mb-8 max-w-xl mx-auto leading-relaxed px-4 italic">
        Muitas avós querem participar das tarefas, sentar ao lado, ensinar as primeiras letras… Mas travam por dentro pensando: "E se eu confundir mais do que ajudar?" Foi por isso que criamos um material simples, leve e fácil de usar… para você ensinar com carinho, sem insegurança e no seu tempo.
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
          "Ensinar de forma simples",
          "Participar da rotina escolar dele",
          "Criar tempo longe do celular",
          "Ajudar sem insegurança",
        ].map((item) => (
          <span key={item} className="flex items-start gap-2 text-foreground text-xs sm:text-sm font-bold">
            <Check className="w-4 h-4 text-support-green flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </span>
        ))}
      </div>

      <Button variant="cta" size="sm" className="w-full sm:w-auto text-[13px] sm:text-sm px-6 py-4 rounded-full shadow-lg text-primary-dark transition-all hover:scale-105" asChild>
        <a href="#preco" className="whitespace-normal h-auto py-2 leading-[1.2]">QUERO AJUDAR MEU NETO COM SEGURANÇA</a>
      </Button>

      <div className="mt-4 flex justify-center">
        <span className="inline-flex items-center gap-2 bg-support-green/15 text-primary-dark px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
          <MessageCircle className="w-4 h-4 text-support-green" />
          Acesso imediato para imprimir ou usar no celular.
        </span>
      </div>
    </div>
  </section>
);

export default HeroSection;