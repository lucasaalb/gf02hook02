import bonusFichas from "@/assets/bonus-fichas-silabicas.webp";
import bonusReforco from "@/assets/bonus-reforco-escolar.webp";
import bonusJogos from "@/assets/bonus-mini-jogos.webp";

const bonuses = [
  { img: bonusFichas, title: "Fácil de usar", desc: "Alguns minutos por dia já ajudam e aproximam vocês dois." },
  { img: bonusReforco, title: "Tira ele do celular", desc: "Ajuda no começo da leitura e tira ele das telas por um tempo." },
  { img: bonusJogos, title: "Mais segurança", desc: "Te dá mais segurança para ensinar seu neto com carinho." },
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
          PARA QUEM JÁ FAZ TANTO
        </span>
        <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-center text-primary-dark mb-3 text-balance">
          Feito para quem já faz tanto… e só queria uma ajuda de verdade.
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm md:text-base">
          Simples pra encaixar na sua rotina. Importante pra vida dele.
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
    </div>
  </section>
);

export default BonusSection;