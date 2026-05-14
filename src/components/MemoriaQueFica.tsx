const MemoriaQueFica = () => (
  <section className="py-16 md:py-24 bg-white relative overflow-hidden">
    {/* Elementos decorativos sutis */}
    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />

    <div className="container mx-auto px-4 max-w-4xl relative">
      <div className="text-center mb-12">
        <span className="inline-block bg-accent/10 text-accent font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
          VOCÊ TAMBÉM SENTE?
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-dark mb-6 text-balance leading-[1.1]">
          Você também sente que ele está crescendo dentro de uma tela?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p className="text-xl md:text-2xl font-medium text-primary-dark leading-snug">
            E que, às vezes, está cada vez mais difícil viver momentos simples com ele.
          </p>
          <p className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary italic text-primary-dark/90">
            "Talvez você não queira tirar tudo dele. Só queira devolver alguns momentos de infância real."
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { text: "Mais conversa", icon: "💬" },
            { text: "Sentar junto", icon: "🪑" },
            { text: "Momentos reais", icon: "✨" },
            { text: "Participar mais", icon: "❤️" }
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
        <p className="text-xl md:text-3xl font-heading font-extrabold text-primary-dark text-balance italic opacity-90">
          "Uma folha na mesa pode parecer pouca coisa. Mas pode virar um momento."
        </p>
      </div>
    </div>
  </section>
);

export default MemoriaQueFica;