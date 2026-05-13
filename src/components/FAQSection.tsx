import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Esse material ajuda a tirar a criança do celular?", a: "Ele ajuda a criar uma alternativa simples e mais interessante para alguns momentos do dia. A ideia não é proibir tudo, mas oferecer uma atividade leve para fazer junto." },
  { q: "Eu preciso saber ensinar para usar o material?", a: "Não. O material foi pensado para ser simples e visual. Você escolhe a atividade, senta com a criança e acompanha. O mais importante é estar presente." },
  { q: "Serve para avó usar com o neto em casa?", a: "Sim. Ele foi pensado para momentos simples em casa, sem precisar montar aula ou seguir algo complicado." },
  { q: "E se a criança tiver pouca paciência?", a: "Tudo bem. Comece com poucos minutos. Uma página, uma tentativa, um pequeno momento. Aos poucos, a criança pode se acostumar com essa pausa." },
  { q: "Preciso imprimir tudo?", a: "Não. Você pode escolher algumas páginas, imprimir aos poucos e usar conforme a rotina de vocês." },
  { q: "Esse material substitui a escola?", a: "Não. Ele é um apoio para praticar em casa e para a família participar mais desse momento de aprendizado." },
  { q: "Funciona mesmo se ele gostar muito de celular?", a: "Sim, porque a proposta não é competir com a tela o dia inteiro. É criar pequenos momentos de atenção, vínculo e atividade fora dela." },
  { q: "Por quanto tempo terei acesso?", a: "Você recebe acesso ao material digital e pode usar conforme as informações da página de compra." },
];

const FAQSection = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <span className="block text-center text-xs font-extrabold text-primary mb-2 uppercase tracking-wider">
        PERGUNTAS FREQUENTES
      </span>
      <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-center text-primary-dark mb-10">
        Ainda com dúvidas? ❓
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-card border border-border rounded-2xl px-5 shadow-card data-[state=open]:shadow-card-hover"
          >
            <AccordionTrigger className="text-left font-heading font-extrabold text-primary-dark text-sm md:text-base hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 text-sm leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;