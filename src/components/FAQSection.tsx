import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "E se eu nunca ensinei criança antes?", a: "Não tem problema. O material foi feito para ser simples e fácil de aplicar, mesmo que você nunca tenha feito isso antes." },
  { q: "E se eu não souber mexer muito em celular/computador?", a: "Não se preocupe. Você recebe o material de forma simples e pode imprimir em casa ou em qualquer gráfica rápida." },
  { q: "Quanto tempo por dia precisa?", a: "Apenas alguns minutos com constância já fazem uma diferença enorme na evolução dele." },
  { q: "Serve para qual idade?", a: "Ele é focado principalmente em crianças que estão no início da alfabetização e precisam treinar coordenação e as primeiras letras." },
  { q: "Preciso imprimir tudo de uma vez?", a: "Não. Você pode escolher as atividades aos poucos e imprimir conforme o ritmo de vocês." },
  { q: "O acesso é imediato?", a: "Sim, assim que o pagamento for confirmado, você recebe o acesso digital para começar a usar." },
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