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
              "O celular prende a atenção.<br />
              Mas a sua presença cria a memória."
            </p>
          </div>
        </div>
        <span className="block text-center text-xs font-extrabold text-primary mb-2 uppercase tracking-wider">
          MENOS TELA, MAIS VÍNCULO
        </span>
        <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-center text-primary-dark mb-3 text-balance">
          Escolha como quer começar a criar momentos fora da tela com seu neto. 💛
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm md:text-base">
          Você pode começar de forma simples e transformar alguns minutos do dia em aprendizado, carinho e presença.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Essencial */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-border/50 flex flex-col hover:shadow-md transition-all">
            <h3 className="text-lg md:text-xl font-heading font-extrabold text-primary-dark mb-1 text-center">Kit Essencial</h3>
            <p className="text-center text-muted-foreground text-xs md:text-sm mb-6 bg-accent/10 py-1 rounded-full px-4 inline-block mx-auto font-bold text-accent">Para começar agora</p>

            <ul className="space-y-3 mb-6 flex-1">
              {[
                "Atividades de grafismo",
                "Exercícios de coordenação",
                "Atividades com letras e sons",
                "Material pronto para usar",
                "Acesso digital imediato",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <div className="text-center mb-5">
              <span className="text-destructive line-through text-sm">De R$ 47,00</span>
              <p className="text-[11px] text-muted-foreground mt-0.5">Hoje por apenas</p>
              <div className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-1">R$ 9,90</div>
              <p className="text-[11px] text-muted-foreground mt-1">Pagamento único</p>
            </div>

            <Button
              variant="ctaOutline"
              size="sm"
              className="w-full text-sm sm:text-base py-4 rounded-full border-2 shadow-sm text-primary-dark transition-all hover:scale-105"
              onClick={handleEssencialClick}
            >
              <span className="whitespace-normal leading-[1.2]">QUERO COMEÇAR COM O ESSENCIAL →</span>
            </Button>
          </div>

          {/* Completo - Destacado */}
          <div className="relative bg-card rounded-3xl p-6 md:p-8 border-[3px] border-accent flex flex-col shadow-premium md:scale-105 animate-pulse-destaque">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F3D58A] text-primary-dark px-5 py-1.5 rounded-full text-xs md:text-sm font-extrabold flex items-center gap-1 whitespace-nowrap shadow-lg uppercase tracking-wide">
              <Crown className="w-4 h-4" /> 🔥 Melhor escolha
            </div>

            <h3 className="text-lg md:text-xl font-heading font-extrabold text-primary-dark mb-1 text-center mt-3">Kit Completo</h3>
            <p className="text-center text-muted-foreground text-xs md:text-sm mb-5">Tudo para criar uma rotina especial longe das telas</p>

            <ul className="space-y-3 mb-6 flex-1">
              {[
                "Tudo do Kit Essencial",
                "Mais atividades para variar os dias",
                "🎁 Bônus: Atividades Extras",
                "🎁 Bônus: Páginas para Imprimir",
                "🎁 Bônus: Momentos de Leveza",
                "Acesso Vitalício (pague uma vez só)",
                "Suporte prioritário via WhatsApp",
                "Garantia Incondicional de 7 dias",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground text-sm font-semibold">
                  <Check className="w-4 h-4 text-support-green mt-0.5 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <div className="text-center mb-5 bg-accent/10 rounded-2xl py-4 px-3">
              <span className="text-destructive line-through text-sm">De R$ 97,00</span>
              <p className="text-[11px] text-muted-foreground mt-0.5">Hoje por apenas</p>
              <div className="text-4xl md:text-5xl font-extrabold text-primary-dark mt-1">R$ 19,90</div>
              <p className="text-xs text-support-green font-extrabold mt-1">Melhor custo-benefício</p>
            </div>

            <Button variant="cta" size="sm" className="w-full text-sm sm:text-base py-4 rounded-full shadow-lg text-primary-dark transition-all hover:scale-105" asChild>
              <a href={COMPLETO_URL} className="whitespace-normal h-auto py-2 leading-[1.2]">QUERO O KIT COMPLETO →</a>
            </Button>

            <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-muted-foreground">
              <Shield className="w-3.5 h-3.5" />
              <span>Acesso digital. Use pelo celular, tablet ou imprima em casa.</span>
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