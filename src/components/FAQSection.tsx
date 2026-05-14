import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso saber ensinar?", a: "Não. Foi feito para ser simples. Você só precisa acompanhar o material ao lado do seu neto." },
  { q: "Precisa muito tempo?", a: "Não. Alguns minutos por dia já ajudam muito no desenvolvimento dele." },
  { q: "Serve para netos pequenos?", a: "Principalmente para quem está começando a aprender as primeiras letras e sons." },
  { q: "É difícil usar?", a: "Não. Tudo pensado para facilitar sua rotina e ser intuitivo para você e para ele." },
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