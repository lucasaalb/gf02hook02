import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const OQueVoceRecebe = () => (
  <section className="py-14 md:py-20 bg-section-alt relative overflow-hidden">
    <div className="absolute top-10 left-10 text-5xl opacity-20">✏️</div>
    <div className="absolute bottom-10 right-10 text-5xl opacity-20">📚</div>

    <div className="container mx-auto px-4 max-w-3xl relative text-center">
      <span className="inline-flex items-center gap-2 bg-accent/30 text-primary-dark text-xs font-extrabold px-4 py-1.5 rounded-full mb-4 border border-accent uppercase tracking-wider">
        <Heart className="w-3.5 h-3.5" /> UMA AJUDA DE VERDADE PARA VOCÊ
      </span>
      <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary-dark mb-5 text-balance">
        Por isso criamos algo simples… pra te ajudar nessa fase tão importante.
      </h2>
      <img
        src="https://qtbkvshbmqlszncxlcuc.supabase.co/storage/v1/object/public/dsl-uploads/JMNk0ffKBhRUfmaQlPxkiv042B83/87fcd4bc-81a9-46e1-9ce4-380754d13241.png"
        alt="Mockup do Kit Grafismo Fonético"
        className="w-full max-w-[280px] md:max-w-xs mx-auto mb-6 drop-shadow-xl rounded-2xl md:rounded-[2.5rem] border-4 border-white shadow-xl"
        loading="lazy"
      />
      <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
        Algo leve, fácil e pronto. Pra você sentar com ele alguns minutos por dia… e transformar cuidado em aprendizado.
      </p>
      <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
        Sem complicação. Sem depender de ninguém. Sem precisar ser professora.
      </p>

      <div className="mt-8">
        <Button variant="cta" size="sm" className="w-full sm:w-auto text-[13px] sm:text-sm px-6 py-4 rounded-full shadow-lg text-primary-dark transition-all hover:scale-105" asChild>
          <a href="#preco" className="whitespace-normal h-auto py-2 leading-[1.2]">QUERO VER COMO FUNCIONA</a>
        </Button>
      </div>
    </div>
  </section>
);

export default OQueVoceRecebe;