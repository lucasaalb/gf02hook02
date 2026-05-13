import { MessageCircle, Instagram, Facebook } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-primary-dark text-white pt-16 pb-10 px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-6">
          Ele não vai ser pequeno pra sempre.
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Ele pode esquecer muita coisa. Mas não esquece quem sentou ao seu lado quando aprender parecia difícil.
        </p>
        <div className="space-y-4">
          <a 
            href="#preco" 
            className="inline-block w-full sm:w-auto bg-accent text-primary-dark font-extrabold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            QUERO ESTAR COM ELE NESSA FASE
          </a>
          <p className="text-white/60 text-xs">Transformando segurança em carinho e presença.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left pt-10 border-t border-white/10">
        <div>
          <h3 className="font-script text-3xl mb-1 text-accent">
            Aprendendo
          </h3>
          <p className="font-heading font-extrabold text-sm mb-2 text-white/90">
            Kit Grafismo Fonético
          </p>
          <p className="text-white/70 text-xs">Transformando aprendizado em conexão.</p>
        </div>

        <div className="flex justify-center gap-3">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary-dark transition flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary-dark transition flex items-center justify-center"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary-dark transition flex items-center justify-center"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <div className="text-xs text-white/70 space-y-1 md:text-right">
          <a href="#" className="block hover:text-accent">Política de Privacidade</a>
          <a href="#" className="block hover:text-accent">Termos de Uso</a>
          <a href="https://wa.me/5511999999999" className="block hover:text-accent">Contato WhatsApp</a>
        </div>
      </div>

      <div className="mt-8 pt-5 text-center text-[11px] text-white/60">
        © {new Date().getFullYear()} Kit Grafismo Fonético. Todos os direitos reservados.
        <br />
        Este produto não garante resultados — eles dependem do uso correto do material.
      </div>
    </div>
  </footer>
);

export default FooterSection;
