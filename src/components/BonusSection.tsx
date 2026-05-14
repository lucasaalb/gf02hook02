import bonusFichas from "@/assets/bonus-fichas-silabicas.webp";
import bonusReforco from "@/assets/bonus-reforco-escolar.webp";
import bonusJogos from "@/assets/bonus-mini-jogos.webp";

const bonuses = [
  { img: bonusFichas, title: "Atividades extras para variar a rotina", desc: "Para você sempre ter uma nova opção quando quiser sentar com ele." },
  { img: bonusReforco, title: "Páginas prontas para imprimir", desc: "Para usar aos poucos, com calma, no ritmo da criança." },
  { img: bonusJogos, title: "Material visual e fácil de acompanhar", desc: "Para você conduzir o momento com mais confiança, mesmo sem experiência." },
];

const BonusSection = () => (
  <section className="py-14 md:py-20 relative overflow-hidden bg-section-alt">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-10 left-10 text-6xl">🎁</div>
      <div className="absolute bottom-10 right-10 text-6xl">⭐</div>
      <div className="absolute top-1/2 right-1/3 text-5xl">✨</div>
    </div>

    <div className="container mx-auto px-4 max-w-5xl relative">
        <span className="block text-center text-xs font-extrabold text-primary mb-2 uppercase tracking-wider">
          BÔNUS ESPECIAIS
        </span>
        <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-center text-primary-dark mb-3 text-balance">
          Bônus para deixar esse momento mais leve e seguro.
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm md:text-base">
          Materiais extras para você ter mais opções e não ficar sem saber o que fazer.
        </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {bonuses.map(({ img, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-white/40 text-center flex flex-col"
          >
            <div className="bg-gradient-to-br from-secondary/30 to-background rounded-xl p-2 mb-4">
              <img src={img} alt={title} loading="lazy" className="w-full h-40 object-contain" />
            </div>
            <span className="inline-block self-center bg-accent/90 text-primary-dark font-extrabold text-[10px] px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
              PRESENTE GRÁTIS
            </span>
            <h3 className="font-heading font-extrabold text-primary-dark text-base mb-2 leading-tight">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-base md:text-lg italic text-primary-dark/80 mt-10 max-w-xl mx-auto font-medium">
        Não é sobre fazer perfeito. É sobre fazer junto.
      </p>
    </div>
  </section>
);

export default BonusSection;
