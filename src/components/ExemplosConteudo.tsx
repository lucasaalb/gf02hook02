import { useRef } from "react";
import { ChevronLeft, ChevronRight, Check, UserPlus, Clock, Gift, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import ex1 from "@/assets/grafismo-exemplo-1.webp";
import ex2 from "@/assets/grafismo-exemplo-2.webp";
import ex3 from "@/assets/grafismo-exemplo-3.webp";
import exFonologica from "@/assets/exemplo-fonologica.webp";
import exGrafismo from "@/assets/exemplo-grafismo.webp";
import exFormacao from "@/assets/exemplo-formacao-palavras.webp";

const examples = [
  { src: ex1, label: "Grafismo e Coordenação" },
  { src: ex2, label: "Letras e Fonemas" },
  { src: ex3, label: "Formação de Palavras" },
  { src: exFonologica, label: "Sons e Imagens" },
  { src: exGrafismo, label: "Coordenação Motora" },
  { src: exFormacao, label: "Letras e Associações" },
];

const cards = [
  { icon: UserPlus, text: "Conexão", color: "text-rose-500", bg: "bg-rose-50/50" },
  { icon: Clock, text: "Presença", color: "text-amber-500", bg: "bg-amber-50/50" },
  { icon: Gift, text: "Confiança", color: "text-emerald-500", bg: "bg-emerald-50/50" },
  { icon: BookOpen, text: "Diferença", color: "text-sky-500", bg: "bg-sky-50/50" },
];

const ExemplosConteudo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 via-white to-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Parte: O que a avó se torna */}
        <div className="text-center mb-12 max-w-3xl mx-auto animate-fade-in">
          <span className="inline-block text-[10px] md:text-xs font-black text-primary/60 mb-6 uppercase tracking-[0.2em] bg-primary/5 px-4 py-1.5 rounded-full">
            SEU PAPEL É ÚNICO
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-dark mb-8 leading-[1.15] text-balance">
            Feito para quem achou que não acompanhava mais… <span className="text-primary block md:inline mt-2 md:mt-0">mas ainda tem muito para oferecer.</span>
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            <p>Enquanto tanta coisa tenta chamar a atenção dele, você ainda pode chamar ele para perto.</p>
            
            <div className="py-4">
              <p className="font-medium text-primary-dark/70 mb-8 italic">No fundo, o que ele sente é que tem você por perto:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {cards.map((item) => (
                  <div 
                    key={item.text} 
                    className={`${item.bg} p-6 rounded-[1.5rem] border border-[#F1F0FB] shadow-sm flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color} mb-3`} strokeWidth={2.5} />
                    <span className="text-xs font-bold text-primary-dark/60 uppercase tracking-widest">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-4">
              <p>Uma pausa simples para ele olhar para você e para o papel.</p>
              <p className="font-heading font-extrabold text-primary-dark text-2xl">Só presença.</p>
            </div>
          </div>
        </div>

        {/* Transição Emocional */}
        <div className="py-8 md:py-12 flex justify-center">
          <div className="max-w-2xl w-full text-center px-6">
            <p className="text-xl md:text-2xl font-medium italic text-primary-dark/80 leading-relaxed">
              "Basta criar um momento que seja de vocês. Sem pressão. Sem briga. Só vocês dois."
            </p>
          </div>
        </div>

        {/* Bloco das Atividades */}
        <div className="mb-16 animate-fade-in pt-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-dark mb-6 leading-tight">
              Simples pra você usar. <span className="text-primary italic">Importante pra vida dele.</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Atividades prontas para usar em casa, sem complicação e sem pressa.
            </p>
          </div>
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur shadow-xl items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur shadow-xl items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 md:px-2"
          >
            {examples.map((ex) => (
              <div
                key={ex.label}
                className="snap-center flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[31%] bg-white rounded-[2.5rem] shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-primary/5 overflow-hidden group/card"
              >
                <div className="bg-gradient-to-br from-secondary/30 to-white p-4 md:p-6 pb-0 overflow-hidden">
                  <img
                    src={ex.src}
                    alt={`Atividade: ${ex.label}`}
                    loading="lazy"
                    className="w-full h-auto rounded-2xl shadow-sm transition-transform duration-700 group-hover/card:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8 text-center">
                  <p className="font-heading font-extrabold text-primary-dark text-base md:text-lg">{ex.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm font-medium text-primary/40 mt-6 md:hidden">← Deslize para ver os exemplos →</p>

        <div className="mt-20 md:mt-24 text-center">
          <div className="inline-block p-1 bg-primary/5 rounded-[2.5rem] mb-6">
             <p className="font-heading font-extrabold text-primary-dark text-lg md:text-xl px-8 py-2">
              Cada atividade pode ser um pequeno encontro entre vocês.
            </p>
          </div>
          <br />
          <Button variant="cta" size="sm" className="w-full sm:w-auto text-base px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform" asChild>
            <a href="#preco" className="whitespace-normal h-auto py-2 leading-tight flex items-center gap-3">
              <span>QUERO RECEBER AGORA</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </Button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 text-xs md:text-sm text-foreground/60 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-support-green" />
              <span>Material pronto para usar</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-support-green" />
              <span>Leve e sem complicação</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-support-green" />
              <span>Vínculo e carinho</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExemplosConteudo;