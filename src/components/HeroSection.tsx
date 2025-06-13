
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Zap } from 'lucide-react';
import RocketIcon from './RocketIcon';
import FloatingElements from './FloatingElements';

const HeroSection = () => {
  // Links configuráveis e seguros
  const linkcompra = "https://produtos.foguetewill.com.br/pay/pre-venda-planilha-will";

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-dark-primary via-dark-accent to-dark-primary overflow-hidden pt-20">
      <FloatingElements />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDQwaDQwdjQwSDB6Ii8+PGNpcmNsZSBmaWxsPSJyZ2JhKDIzOSwgMTM3LCAxNTUsIDAuMSkiIGN4PSI0MCIgY3k9IjQwIiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-dark-highlight"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Criada por quem vive o dia a dia de um restaurante</span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-light leading-tight"
            >
              <span className="text-dark-light">Planilha</span>
              <span className="text-dark-highlight block">Gestão</span>
              <span className="text-dark-cta">Inteligente</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-dark-medium leading-relaxed"
            >
              Chegou a planilha que <strong className="text-dark-highlight">donos de restaurantes de verdade</strong> usam para sair do caos e conquistar clareza financeira, mesmo sem ser especialista em números.
            </motion.p>
            
            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: TrendingUp, text: "Simples" },
                { icon: Zap, text: "Prática" },
                { icon: Rocket, text: "Pronta para usar" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 glass-light px-4 py-2 rounded-lg">
                  <item.icon className="w-5 h-5 text-dark-highlight" />
                  <span className="text-dark-light text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Social proof text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="glass-light p-4 rounded-xl"
            >
              <p className="text-dark-light text-center">
                <strong className="text-dark-highlight">Desenvolvida e usada</strong> por quem vive o dia a dia do seu negócio.<br />
                <span className="text-dark-medium">Funciona para qualquer tipo de restaurante.</span>
              </p>
            </motion.div>
            
            {/* Price and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl text-dark-medium line-through">R$97</span>
                <span className="text-5xl font-bold text-dark-highlight">R$47</span>
                <span className="glass px-3 py-1 rounded-full text-dark-cta text-sm font-semibold">
                  OFERTA LIMITADA
                </span>
              </div>
              
              <motion.a
                href={linkcompra}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full md:w-auto bg-gradient-to-r from-dark-cta to-dark-highlight text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-dark-highlight/25 transition-all duration-300 animate-glow text-center"
              >
                🚀 QUERO ACELERAR MINHA GESTÃO AGORA
              </motion.a>
              
              <p className="text-dark-medium text-sm">
                ⚡ Download imediato após o pagamento • 🛡️ Garantia de 14 dias
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Rocket */}
            <div className="relative">
              <RocketIcon className="w-48 h-48 md:w-64 md:h-64 animate-float" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-dark-highlight/30 to-transparent rounded-full blur-3xl"></div>
            </div>
            
            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute top-20 -left-10 glass p-4 rounded-xl"
            >
              <div className="text-dark-highlight text-2xl font-bold">+500%</div>
              <div className="text-dark-light text-sm">Eficiência</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-20 -right-10 glass p-4 rounded-xl"
            >
              <div className="text-dark-highlight text-2xl font-bold">-48%</div>
              <div className="text-dark-light text-sm">Prejuízo</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
