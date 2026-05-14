import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import d1 from "@/assets/depoimento-new-1.png";
import d2 from "@/assets/depoimento-new-2.png";
import d3 from "@/assets/depoimento-new-3.png";

const depoimentos = [d1, d2, d3];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-14 md:py-20 bg-section-alt">
      <div className="container mx-auto px-4 max-w-6xl">
        <span className="block text-center text-xs font-extrabold text-primary mb-2 uppercase tracking-wider">
          RECONHECIMENTO
        </span>
        <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-center text-primary-dark mb-3 text-balance">
          Avós que já cuidavam de tudo… e agora também participam ainda mais do aprendizado.
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto text-sm md:text-base">
          Criado para valorizar quem sempre esteve presente e faz muito.
        </p>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card shadow-card-hover items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card shadow-card-hover items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
          >
            {depoimentos.map((src, i) => (
              <div
                key={i}
                className="snap-center flex-shrink-0 w-[80%] sm:w-[46%] lg:w-[31%] bg-card rounded-2xl shadow-card hover:shadow-card-hover transition border border-border/60 overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Depoimento real de cliente ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4 md:hidden">← Arraste para ver mais →</p>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-medium italic text-primary-dark/80 leading-relaxed">
            “Eu já fazia papel de mãe. Isso me ajudou muito.”
          </p>
        </div>

        <div className="mt-4 text-center max-w-2xl mx-auto">
          <p className="text-lg md:text-xl font-medium italic text-primary-dark/80 leading-relaxed">
            “Agora ele senta comigo feliz. Me sinto mais útil vendo ele aprender.”
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-10 max-w-md mx-auto">
          {[
            { value: "2.300+", label: "famílias atendidas" },
            { value: "4.9 ⭐", label: "avaliação média" },
            { value: "7 dias", label: "de garantia" },
          ].map((s) => (
            <div key={s.label} className="text-center bg-card border border-border rounded-xl p-3 shadow-card">
              <p className="text-base md:text-2xl font-extrabold text-primary-dark">{s.value}</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;