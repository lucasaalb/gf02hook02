import { Button } from "@/components/ui/button";

const InfanciaPassaRapido = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-section-alt via-background to-secondary/30">
    <div className="container mx-auto px-4 max-w-2xl text-center">
      <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-dark mb-8 text-balance">
        A infância passa rápido. ⏳
      </h2>

      <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed mb-10">
        <p>Um dia ele vai crescer.</p>
        <p>Vai parar de pedir ajuda.</p>
        <p>Vai deixar os desenhos, os lápis e os cadernos.</p>
        <p className="font-bold text-primary-dark text-lg md:text-xl pt-3">
          Mas talvez exista uma coisa que ele nunca esqueça:
        </p>
        <p className="text-primary-dark text-lg md:text-2xl font-heading font-extrabold text-balance">
          quem esteve ao lado dele no começo. ❤️
        </p>
      </div>

      <Button variant="cta" size="xl" className="w-full sm:w-auto text-[1.05rem] sm:text-lg px-6 py-7 sm:px-10 animate-pulse-cta rounded-2xl shadow-lg" asChild>
        <a href="#preco" className="whitespace-normal h-auto py-2 leading-[1.2]">QUERO ENSINAR MEU NETO DE UM JEITO ESPECIAL →</a>
      </Button>
      <p className="text-xs md:text-sm text-muted-foreground mt-4">
        Acesso imediato após a compra • Garantia de 7 dias
      </p>
    </div>
  </section>
);

export default InfanciaPassaRapido;
