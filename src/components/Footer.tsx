
import { motion } from 'framer-motion';
import { MessageCircle, Shield, Clock } from 'lucide-react';

const Footer = () => {
  // Links configuráveis
  const linkcompra = "https://produtos.foguetewill.com.br/pay/pre-venda-planilha-will";
  const linkzap = "https://wa.me/5541999225894";

  return (
    <footer id="footer" className="bg-dark-accent border-t border-dark-highlight/20">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-dark-highlight mb-4">
              Planilha Gestão Inteligente
            </h3>
            <p className="text-dark-medium mb-6">
              A planilha que donos de restaurantes de verdade usam para conquistar clareza financeira 
              e eliminar prejuízos.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-dark-light">
                <Shield className="w-4 h-4 text-dark-highlight" />
                <span className="text-sm">Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-dark-light">
                <Clock className="w-4 h-4 text-dark-highlight" />
                <span className="text-sm">Download Imediato</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-dark-light mb-4">Links Úteis</h4>
            <ul className="space-y-3">
              {[
                "Como usar a planilha",
                "Suporte técnico",
                "Política de privacidade", 
                "Termos de uso",
                "Garantia de 14 dias"
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-dark-medium hover:text-dark-highlight transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-dark-light mb-4">Suporte</h4>
            <p className="text-dark-medium mb-4">
              Precisa de ajuda? Nossa equipe está pronta para te atender!
            </p>
            <motion.a
              href={linkzap}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Suporte
            </motion.a>
            <p className="text-dark-medium text-sm mt-3">
              📞 Atendimento de seg. à sex., 9h às 18h
            </p>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass p-8 rounded-2xl text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-dark-light mb-4">
            🚀 Última chance de eliminar os prejuízos!
          </h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-2xl text-dark-medium line-through">R$97</span>
            <span className="text-4xl font-bold text-dark-highlight">R$47</span>
            <span className="glass-light px-3 py-1 rounded-full text-dark-cta text-sm font-semibold">
              52% OFF
            </span>
          </div>
          <motion.a
            href={linkcompra}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-gradient-to-r from-dark-cta to-dark-highlight text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-dark-highlight/25 transition-all duration-300"
          >
            GARANTIR MINHA PLANILHA AGORA
          </motion.a>
        </motion.div>

        {/* Anti-piracy notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-light p-6 rounded-xl mb-8"
        >
          <h4 className="text-lg font-bold text-dark-cta mb-4 text-center">⚠️ PIRATARIA É CRIME</h4>
          <div className="text-dark-medium text-sm space-y-2">
            <p>
              A venda da planilha <strong className="text-dark-light">Caixa Blindado</strong> só pode ser realizada através deste site, 
              registrado em nome de <strong className="text-dark-highlight">EVENTO FOODVERSO</strong>. Qualquer outro local em que você 
              encontre esse produto é falsificação e infringe a lei.
            </p>
            <p>
              Evite conteúdos pirateados. Não apoiamos cópias ilegais e não nos responsabilizamos por compras feitas fora deste ambiente oficial.
            </p>
            <p>
              A planilha foi desenvolvida com base em anos de operação real, estudos de gestão, e prática direta no campo.
            </p>
            <p className="text-dark-cta font-semibold">
              Não se engane com cópias baratas que não entregam resultado.
            </p>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-dark-highlight/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-medium text-sm">
              © 2024 EVENTO FOODVERSO. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-dark-medium">
              <a href="#" className="hover:text-dark-highlight transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-dark-highlight transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-dark-highlight transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
