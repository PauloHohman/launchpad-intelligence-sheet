
import { motion } from 'framer-motion';
import { Check, Zap, Star, Clock } from 'lucide-react';

const PricingSection = () => {
  const features = [
    "✅ Dashboards automáticos e interativos",
    "✅ Controle financeiro completo",
    "✅ Relatórios visuais profissionais",
    "✅ Automação de cálculos complexos",
    "✅ Templates prontos para usar",
    "✅ Suporte técnico por WhatsApp",
    "✅ Atualizações gratuitas por 1 ano",
    "✅ Garantia de 7 dias ou seu dinheiro de volta"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-accent to-dark-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-20 w-64 h-64 border border-dark-highlight/10 rounded-full"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-dark-highlight mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Oferta por tempo limitado</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-dark-light mb-6">
            Invista no seu
            <span className="text-dark-highlight block">Crescimento Profissional</span>
          </h2>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-0 right-8 bg-gradient-to-r from-dark-cta to-dark-highlight text-white px-6 py-2 rounded-b-lg font-bold text-sm">
              🔥 MAIS VENDIDO
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dark-light mb-4">Planilha Gestão Inteligente</h3>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-2xl text-dark-medium line-through">De R$97</span>
                  <span className="text-5xl md:text-6xl font-bold text-dark-highlight">R$47</span>
                </div>
                <div className="text-dark-cta font-semibold">
                  💥 Desconto de 52% - HOJE APENAS!
                </div>
              </div>
              
              {/* Urgency timer */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 rgba(239, 137, 155, 0)",
                    "0 0 20px rgba(239, 137, 155, 0.3)",
                    "0 0 0 rgba(239, 137, 155, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
                className="glass-light p-4 rounded-xl mb-8"
              >
                <div className="flex items-center justify-center gap-2 text-dark-highlight mb-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-bold">OFERTA EXPIRA EM:</span>
                </div>
                <div className="text-2xl font-bold text-dark-light">
                  23:47:12
                </div>
              </motion.div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold text-dark-light text-center mb-6">
                🚀 O que você vai receber:
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-dark-light"
                  >
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-dark-cta to-dark-highlight text-white font-bold text-xl py-6 rounded-2xl shadow-2xl hover:shadow-dark-highlight/30 transition-all duration-300 mb-6 animate-glow"
            >
              🚀 QUERO ACELERAR MINHA GESTÃO AGORA
            </motion.button>
            
            <div className="text-center space-y-2">
              <p className="text-dark-light flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-dark-highlight fill-current" />
                <span className="text-sm">Pagamento 100% seguro via Mercado Pago</span>
              </p>
              <p className="text-dark-medium text-sm">
                ⚡ Download imediato • 🛡️ Garantia de 7 dias • 🎯 Suporte incluso
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="flex items-center justify-center gap-8 text-dark-medium">
            <div className="text-center">
              <div className="text-3xl font-bold text-dark-highlight">500+</div>
              <div className="text-sm">Clientes satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-dark-highlight">4.9/5</div>
              <div className="text-sm">Avaliação média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-dark-highlight">98%</div>
              <div className="text-sm">Recomendam</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
