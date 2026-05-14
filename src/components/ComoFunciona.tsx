const ComoFunciona = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-dark mb-6">
        Criado para aproximar gerações… de um jeito simples.
      </h2>
      <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
        Esse material foi pensado para mostrar que ensinar não depende de idade. Depende de presença.
      </p>
      <div className="bg-accent/10 p-8 rounded-3xl border-2 border-dashed border-accent mb-12">
        <p className="text-xl md:text-2xl font-bold text-primary-dark italic">
          "Simples pra você usar. Importante pra vida dele. Você não precisa entender tecnologia."
        </p>
      </div>
      <div className="flex justify-center">
        <a 
          href="#preco" 
          className="bg-accent text-primary-dark font-extrabold px-10 py-5 rounded-full shadow-xl hover:scale-105 transition-transform text-lg"
        >
          QUERO RECEBER AGORA
        </a>
      </div>
    </div>
  </section>
);

export default ComoFunciona;