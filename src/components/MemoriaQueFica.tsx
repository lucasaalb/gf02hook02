const MemoriaQueFica = () => (
  <section className="py-16 md:py-24 bg-white relative overflow-hidden">
    {/* Elementos decorativos sutis */}
    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />

    <div className="container mx-auto px-4 max-w-4xl relative">
      <div className="text-center mb-12">
        <span className="inline-block bg-accent/10 text-accent font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
          ALGO MUDOU
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-dark mb-6 text-balance leading-[1.1]">
          Você também cuida de tudo… e sente que o mundo mudou rápido demais?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p className="text-xl md:text-2xl font-medium text-primary-dark leading-snug">
            Tudo parece diferente. A escola mudou. O jeito de ensinar mudou. As crianças mudaram. A tecnologia tomou espaço.
          </p>
          <p className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary italic text-primary-dark/90">
            E no meio disso tudo, muita avó começou a pensar: "Será que ainda consigo ajudar em alguma coisa?"
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
        <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-primary-dark mb-4">
          O pior não é a tecnologia. É sentir que ficou de fora.
        </h3>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto italic">
          Você vê ele mexendo no celular. Vê ele aprendendo coisas novas. Vê tudo acontecendo rápido. E às vezes bate aquela sensação silenciosa: "não sei como ajudar hoje em dia".
        </p>
      </div>
    </div>
  </section>
);

export default MemoriaQueFica;