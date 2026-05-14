const MemoriaQueFica = () => (
  <section className="py-16 md:py-24 bg-white relative overflow-hidden">
    {/* Elementos decorativos sutis */}
    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />

    <div className="container mx-auto px-4 max-w-4xl relative">
      <div className="text-center mb-12">
        <span className="inline-block bg-accent/10 text-accent font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
          O CUIDADO QUE NINGUÉM VÊ
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-dark mb-6 text-balance leading-[1.1]">
          Você também cuida de tudo… e ainda se preocupa com o futuro dele?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p className="text-xl md:text-2xl font-medium text-primary-dark leading-snug">
            Muitas avós hoje não são só avós. São apoio. São rotina. São colo. São presença diária.
          </p>
          <p className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary italic text-primary-dark/90">
            E uma das maiores dores é ver a criança crescer com dificuldade… sem saber exatamente como ajudar.
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
          Porque cuidar é importante. Mas participar do futuro dele marca ainda mais.
        </h3>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto italic">
          Tem momentos pequenos… que ficam pra sempre. Ele aprendendo uma palavra nova. Ele sorrindo porque conseguiu. Ele vindo correndo te mostrar. E você ali.
        </p>
      </div>
    </div>
  </section>
);

export default MemoriaQueFica;