const MemoriaQueFica = () => (
  <section className="py-16 md:py-24 bg-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />

    <div className="container mx-auto px-4 max-w-4xl relative">
      <div className="text-center mb-12">
        <span className="inline-block bg-accent/10 text-accent font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
          IDENTIFICAÇÃO
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-dark mb-6 text-balance leading-[1.1]">
          Você quer ajudar… mas às vezes fica com medo de atrapalhar.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p className="text-xl md:text-2xl font-medium text-primary-dark leading-snug">
            Tem avó que olha o neto com o lápis na mão e sente vontade de sentar junto. Mas trava. Porque acha que não sabe explicar. Porque estudou de outro jeito. Porque a escola ensina diferente.
          </p>
          <p className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary italic text-primary-dark/90">
            E, sem perceber, ela acaba deixando passar um momento bonito. Não por falta de amor. Mas por insegurança.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { text: "Sentar junto", icon: "🪑" },
            { text: "Tentar com calma", icon: "🤝" },
            { text: "Sem cobrança", icon: "💛" },
            { text: "Estar presente", icon: "❤️" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group bg-background p-5 rounded-2xl border border-border/60 flex flex-col items-center justify-center text-center transition-all hover:shadow-xl hover:-translate-y-1 hover:border-accent/30"
            >
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-primary-dark font-bold text-sm sm:text-base leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border/50 text-center">
        <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-primary-dark mb-4">
          Você não precisa saber tudo para fazer diferença.
        </h3>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto italic">
          Uma criança nem sempre precisa de uma explicação perfeita. Às vezes, ela só precisa de alguém dizendo: "vamos tentar juntos?"
        </p>
      </div>
    </div>
  </section>
);

export default MemoriaQueFica;
