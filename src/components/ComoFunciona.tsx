const ComoFunciona = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <span className="block text-center text-xs font-extrabold text-primary mb-2 uppercase tracking-wider">
        CONHEÇA A CRIADORA
      </span>
      <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-center text-primary-dark mb-10">
        Criado para ajudar famílias a participarem mais 👩‍🏫
      </h2>

      <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center bg-section-alt rounded-3xl p-6 md:p-10 shadow-card border border-border/60">
        <div className="relative mx-auto">
          <div className="absolute -inset-2 bg-gradient-bonus rounded-[2rem] blur-md opacity-30" />
          <img
            src="https://qtbkvshbmqlszncxlcuc.supabase.co/storage/v1/object/public/dsl-uploads/JMNk0ffKBhRUfmaQlPxkiv042B83/5733601b-1c03-461b-a91a-36225df27818.png"
            alt="Prof Mariana Alves"
            loading="lazy"
            className="relative w-44 h-56 md:w-56 md:h-72 rounded-[2rem] object-cover border-4 border-card shadow-premium"
          />
        </div>
        <div>
          <p className="text-foreground/85 text-sm md:text-base leading-relaxed mb-4">
            "Depois de anos ajudando crianças com dificuldade na alfabetização, percebi que muitas famílias queriam participar mais, mas não sabiam por onde começar.
          </p>
          <p className="text-foreground/85 text-sm md:text-base leading-relaxed mb-5">
            Foi assim que nasceu o <strong>Kit Grafismo Fonético</strong>: um material simples, visual e acolhedor para ajudar a criança a aprender com mais leveza, carinho e vínculo."
          </p>
          <div className="border-l-4 border-accent pl-4">
            <p className="font-heading font-extrabold text-primary-dark text-base">Profª Mariana Alves</p>
            <p className="text-xs text-muted-foreground">Pedagoga • Especialista em alfabetização infantil</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ComoFunciona;