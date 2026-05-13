import { BookOpen, Brain, PenTool, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    bar: "bg-primary",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    title: "250+ atividades já organizadas por etapa",
    desc: "Sem precisar pesquisar no YouTube nem adaptar nada. Você imprime e já começa hoje.",
    tag: "economiza tempo",
  },
  {
    icon: Brain,
    bar: "bg-support-blue",
    iconBg: "bg-support-blue/15",
    iconColor: "text-support-blue",
    title: "Seu filho aprende enquanto brinca",
    desc: "As atividades são lúdicas e prendem a atenção. Acabou a briga pra sentar e estudar.",
    tag: "sem resistência da criança",
  },
  {
    icon: PenTool,
    bar: "bg-support-green",
    iconBg: "bg-support-green/15",
    iconColor: "text-support-green",
    title: "Evolução visível em poucos dias",
    desc: "Método fônico + grafismo juntos. As mães relatam progresso já na primeira semana.",
    tag: "resultado rápido",
  },
  {
    icon: Sparkles,
    bar: "bg-accent-strong",
    iconBg: "bg-accent-strong/15",
    iconColor: "text-accent-strong",
    title: "Funciona em qualquer rotina, mesmo corrida",
    desc: "Cada atividade dura de 10 a 20 minutos. Dá pra encaixar antes do jantar, no fim de semana, em qualquer horário.",
    tag: "flexível",
  },
];

const PorQueEscolher = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <span className="block text-center text-xs font-extrabold text-primary mb-2 uppercase tracking-wider">
        Por que escolher
      </span>
      <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-center text-primary-dark mb-10">
        Tudo que sua criança precisa para ler com confiança 🚀
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map(({ icon: Icon, bar, iconBg, iconColor, title, desc, tag }) => (
          <div
            key={title}
            className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-border/60"
          >
            <div className={`h-2 ${bar}`} />
            <div className="p-6 text-center flex flex-col items-center">
              <div className={`w-14 h-14 mx-auto rounded-2xl ${iconBg} flex items-center justify-center mb-4`}>
                <Icon className={`w-7 h-7 ${iconColor}`} />
              </div>
              <h3 className="font-heading font-extrabold text-primary-dark text-base mb-2 leading-tight">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{desc}</p>
              <span className="inline-block bg-support-green/15 text-support-green text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PorQueEscolher;
