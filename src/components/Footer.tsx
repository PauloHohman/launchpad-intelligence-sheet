
import { motion } from 'framer-motion';
import { MessageCircle, Shield, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-accent border-t border-dark-highlight/20">
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
              Acelere sua produtividade com a planilha mais completa do mercado. 
              Transforme dados em resultados extraordinários.
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
                "Garantia e reembolso"
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Suporte
            </motion.button>
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
            🚀 Última chance de acelerar sua gestão!
          </h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-2xl text-dark-medium line-through">R$97</span>
            <span className="text-4xl font-bold text-dark-highlight">R$47</span>
            <span className="glass-light px-3 py-1 rounded-full text-dark-cta text-sm font-semibold">
              52% OFF
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-dark-cta to-dark-highlight text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-dark-highlight/25 transition-all duration-300"
          >
            GARANTIR MINHA PLANILHA AGORA
          </motion.button>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-dark-highlight/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-medium text-sm">
              © 2024 Planilha Gestão Inteligente. Todos os direitos reservados.
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
