import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Shield, Crown, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const COMPLETO_URL = "https://ggcheckout.app/checkout/v2/42XeRTtQSIfeRRDs24CJ";
const ESSENCIAL_URL = "https://ggcheckout.app/checkout/v2/OEwZ3gqKmwq1XzMSgDeN";
// Link de checkout do Plano Completo com desconto (R$14)
const COMPLETO_DESCONTO_URL = "https://ggcheckout.app/checkout/v2/JfMC5DoTNnlBVpNAVXRL";

const PricingSection = () => {
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  const handleEssencialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDiscountModal(true);
  };

  const continuarPlanoBasico = () => {
    setShowDiscountModal(false);
    window.location.href = ESSENCIAL_URL;
  };

  return (
    <section id="preco" className="py-14 md:py-20 bg-gradient-to-b from-section-alt via-background to-section-alt">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-destructive/5 border border-destructive/20 rounded-3xl p-6 md:p-8 text-center shadow-sm relative overflow-hidden group hover:border-destructive/40 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive/20" />
            <p className="text-xl md:text-2xl font-heading font-extrabold text-primary-dark leading-tight">
              "Sabe o que machuca mais?<br />
              É querer ajudar e travar."
            </p>
          </div>
        </div>
        <span className="block text-center text-xs font-extrabold text-primary mb-2 uppercase tracking-wider">
          ACESSO IMEDIATO
        </span>
        <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-center text-primary-dark mb-3 text-balance">
          Escolha como quer começar a ajudar hoje. 💛
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm md:text-base">
          Acesso imediato ao material completo. Para imprimir em casa e usar quantas vezes quiser. Sem mensalidade. Sem dificuldade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Essencial */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-primary/5 border border-primary/5 flex flex-col hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-heading font-extrabold text-primary-dark mb-2">Kit Essencial</h3>
              <span className="inline-block bg-accent/10 text-accent text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">
                Para começar agora
              </span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Atividades de grafismo",
                "Exercícios de coordenação",
                "Atividades com letras e sons",
                "Material pronto para usar",
                "Acesso digital imediato",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80 text-sm md:text-base font-medium">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-center mb-8 pt-6 border-t border-border/50">
              <span className="text-muted-foreground/50 line-through text-sm font-bold">De R$ 47,00</span>
              <div className="flex flex-col items-center mt-1">
                <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1">Por apenas</span>
                <div className="text-4xl md:text-5xl font-extrabold text-primary-dark tracking-tighter">R$ 9,90</div>
              </div>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-2">Pagamento único</p>
            </div>

            <Button
              variant="ctaOutline"
              size="sm"
              className="w-full text-sm md:text-base py-7 rounded-full border-2 border-primary/20 shadow-sm text-primary-dark transition-all hover:scale-105 hover:bg-primary/5 active:scale-95"
              onClick={handleEssencialClick}
            >
              <span className="whitespace-normal leading-tight font-extrabold">QUERO O ESSENCIAL →</span>
            </Button>
          </div>

          {/* Completo - Destacado */}
          <div className="relative bg-card rounded-[2.5rem] p-8 md:p-10 border-[4px] border-accent flex flex-col shadow-2xl shadow-accent/20 md:scale-105 transition-all duration-500 hover:scale-[1.07]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F3D58A] text-primary-dark px-6 py-2 rounded-full text-xs md:text-sm font-black flex items-center gap-2 whitespace-nowrap shadow-xl uppercase tracking-[0.1em] border-2 border-white">
              <Crown className="w-4 h-4 fill-primary-dark/20" /> 🔥 MELHOR ESCOLHA
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-xl md:text-2xl font-heading font-extrabold text-primary-dark mb-2">Kit Completo</h3>
              <p className="text-muted-foreground text-xs md:text-sm font-medium">Tudo para criar uma rotina especial longe das telas</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Tudo do Kit Essencial",
                "Mais atividades para variar os dias",
                "🎁 Bônus: 30 Desenhos Bíblicos",
                "🎁 Bônus: Planner de Rotina",
                "🎁 Bônus: Cartões de Incentivo",
                "Acesso Vitalício",
                "Suporte via WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground font-bold text-sm md:text-base">
                  <div className="w-5 h-5 rounded-full bg-support-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-support-green" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-center mb-8 pt-6 border-t border-accent/20 bg-accent/5 -mx-8 md:-mx-10 px-8 md:px-10 py-6">
              <span className="text-muted-foreground/50 line-through text-sm font-bold">De R$ 97,00</span>
              <div className="flex flex-col items-center mt-1">
                <span className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Por apenas</span>
                <div className="text-5xl md:text-6xl font-extrabold text-primary-dark tracking-tighter">R$ 19,90</div>
              </div>
              <p className="text-xs text-support-green font-black uppercase tracking-widest mt-2 animate-pulse">Preço Promocional</p>
            </div>

            <Button variant="cta" size="sm" className="w-full text-sm md:text-base py-8 rounded-full shadow-2xl shadow-accent/30 text-primary-dark transition-all hover:scale-105 active:scale-95 group" asChild>
              <a href={COMPLETO_URL} className="whitespace-normal h-auto py-2 leading-tight">
                <span className="block font-black text-lg">QUERO O KIT COMPLETO →</span>
                <span className="text-[10px] uppercase tracking-widest opacity-70 group-hover:opacity-100">Acesso imediato e vitalício</span>
              </a>
            </Button>

            <div className="flex items-center justify-center gap-2 mt-6 text-[11px] text-muted-foreground font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4 text-support-green" />
              <span>Pagamento 100% Seguro</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popup de Desconto */}
      <Dialog open={showDiscountModal} onOpenChange={setShowDiscountModal}>
        <DialogContent className="max-w-md p-0 overflow-hidden border-0 rounded-3xl bg-card">
          {/* Faixa superior */}
          <div className="bg-[hsl(var(--price-badge))] text-white py-3 px-5 text-center">
            <div className="flex items-center justify-center gap-2 font-extrabold text-sm md:text-base uppercase tracking-wide">
              <Sparkles className="w-4 h-4" />
              Oferta exclusiva pra você
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <div className="px-6 pt-5 pb-6">
            <DialogHeader className="text-center space-y-2 mb-4">
              <DialogTitle className="text-xl md:text-2xl font-heading font-extrabold text-primary-dark text-center">
                🎁 Leve o Kit Completo agora!
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground text-center">
                Liberamos um desconto especial para você começar hoje mesmo com seu neto.
              </DialogDescription>
            </DialogHeader>

            {/* Preço */}
            <div className="text-center bg-accent/10 rounded-2xl py-4 px-3 mb-4 border-2 border-dashed border-accent">
              <div className="flex items-center justify-center gap-2">
                <span className="text-muted-foreground line-through text-base">R$ 19,90</span>
                <span className="bg-support-green text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                  DESCONTO
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">Hoje por apenas</p>
              <div className="text-4xl md:text-5xl font-extrabold text-primary mt-1">R$ 14,00</div>
              <p className="text-xs text-support-green font-extrabold mt-1">Pagamento único</p>
            </div>

            {/* Benefícios */}
            <p className="text-xs font-extrabold text-primary-dark uppercase tracking-wider mb-2 text-center">
              Tudo isso incluso:
            </p>
            <ul className="space-y-2 mb-5">
              {[
                "Kit Completo de atividades",
                "🎁 Todos os bônus especiais",
                "🎁 Acesso Vitalício",
                "Suporte direto no WhatsApp",
                "Garantia de 7 dias",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground text-sm font-medium">
                  <Check className="w-4 h-4 text-support-green mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <Button
              variant="cta"
              size="sm"
              className="w-full text-sm sm:text-base py-4 mb-2 rounded-full shadow-lg text-primary-dark transition-all hover:scale-105"
              asChild
            >
              <a href={COMPLETO_DESCONTO_URL} className="whitespace-normal h-auto py-2 leading-[1.2]">QUERO COM DESCONTO →</a>
            </Button>

            <button
              type="button"
              onClick={continuarPlanoBasico}
              className="w-full text-center text-xs md:text-sm text-muted-foreground underline hover:text-foreground transition-colors py-2"
            >
              Continuar no Plano Básico
            </button>

            <div className="flex items-center justify-center gap-1.5 mt-2 text-[11px] text-muted-foreground">
              <Shield className="w-3.5 h-3.5" />
              <span>Pagamento seguro · Acesso imediato</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;