import { Shield } from "lucide-react";
import garantiaImg from "@/assets/garantia-7dias.webp";

const GarantiaSection = () => (
  <section className="py-12 md:py-20 bg-section-alt">
    <div className="container mx-auto px-4 max-w-2xl text-center">
      <img
        src={garantiaImg}
        alt="Garantia incondicional de 7 dias"
        loading="lazy"
        className="w-28 md:w-40 mx-auto mb-5"
      />
      <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary-dark mb-3">
        Pra você decidir tranquila.
      </h2>
      <p className="text-base md:text-xl font-extrabold text-primary mb-3">
        "Garantia Incondicional"
      </p>
      <p className="text-foreground/80 text-sm md:text-base leading-relaxed max-w-md mx-auto">
        Se sentir que não era o que esperava, pode pedir reembolso dentro do prazo. Sem risco. Sem complicação.
      </p>
      <div className="flex items-center justify-center gap-2 mt-5 text-xs text-muted-foreground">
        <Shield className="w-4 h-4 text-support-green" />
        <span>Se não gostar, você não corre nenhum risco. Sem complicação.</span>
      </div>
    </div>
  </section>
);

export default GarantiaSection;