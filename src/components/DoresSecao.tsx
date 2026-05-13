const dores = [
  { text: "Ele acorda e já pede o celular", icon: "📱", color: "bg-orange-50 text-orange-600" },
  { text: "Ele diz “só mais um pouquinho”", icon: "⏳", color: "bg-blue-50 text-blue-600" },
  { text: "Ele perde a paciência longe da tela", icon: "🤯", color: "bg-purple-50 text-purple-600" },
  { text: "Ele não se interessa por coisas simples", icon: "🎨", color: "bg-rose-50 text-rose-600" },
  { text: "Você sente falta de participar", icon: "😢", color: "bg-emerald-50 text-emerald-600" },
];

const DoresSecao = () => (
  <section className="py-16 md:py-24 bg-[#FDFBF7]">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <span className="inline-block bg-destructive/10 text-destructive font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
          MOMENTOS QUE DOEM
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-dark mb-6 text-balance leading-[1.1]">
          Sabe aqueles momentos que parecem pequenos, <br className="hidden md:block" />
          mas <span className="text-destructive underline decoration-destructive/20 underline-offset-8">ocupam o lugar da conversa</span>?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {dores.slice(0, 3).map((d) => (
            <div
              key={d.text}
              className="bg-white border border-border/40 rounded-3xl px-6 py-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-2xl ${d.color}`}>
                {d.icon}
              </div>
              <span className="text-foreground/90 text-base md:text-lg font-medium leading-tight">{d.text}</span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {dores.slice(3).map((d) => (
            <div
              key={d.text}
              className="bg-white border border-border/40 rounded-3xl px-6 py-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-2xl ${d.color}`}>
                {d.icon}
              </div>
              <span className="text-foreground/90 text-base md:text-lg font-medium leading-tight">{d.text}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-primary-dark leading-tight">
          Às vezes, não é sobre tirar o celular.
        </h3>
        <p className="text-foreground/80 text-lg md:text-xl leading-relaxed">
          É sobre oferecer um momento melhor.
        </p>
        <p className="text-primary font-bold italic text-lg pt-2">
          A infância dele não precisa ser feita só de vídeos. Ela também pode ser feita de lembranças com você.
        </p>
      </div>
    </div>
  </section>
);

export default DoresSecao;