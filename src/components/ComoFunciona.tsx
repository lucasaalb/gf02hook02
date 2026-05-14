const ComoFunciona = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-dark mb-6">
        Um jeito simples de ajudar, mesmo sem saber por onde começar.
      </h2>
      <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
        Atividades prontas para usar em casa, no ritmo de vocês. Você escolhe uma página, chama a criança, senta junto e acompanha o processo.
      </p>
      <div className="bg-accent/10 p-8 rounded-3xl border-2 border-dashed border-accent mb-12">
        <p className="text-xl md:text-2xl font-bold text-primary-dark italic">
          "O medo diminui quando você tem um caminho simples para seguir. Talvez você não estivesse incapaz. Só precisava de um jeito mais simples de começar."
        </p>
      </div>
      <div className="flex justify-center">
        <a 
          href="#preco" 
          className="bg-accent text-primary-dark font-extrabold px-10 py-5 rounded-full shadow-xl hover:scale-105 transition-transform text-lg"
        >
          QUERO AJUDAR SEM COMPLICAR
        </a>
      </div>
    </div>
  </section>
);

export default ComoFunciona;
