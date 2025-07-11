
import { motion } from 'framer-motion';
import { BarChart3, Zap, Target, TrendingUp, Shield, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Controle Financeiro Total",
      description: "Saiba exatamente quanto entra, quanto sai e principalmente quanto sobra no seu restaurante",
      color: "text-dark-highlight"
    },
    {
      icon: Zap,
      title: "Fácil de Usar",
      description: "Mesmo se você nunca usou Excel, vai conseguir usar. Foi feita para ser simples e prática",
      color: "text-dark-cta"
    },
    {
      icon: Target,
      title: "Para Qualquer Restaurante",
      description: "Hamburguerias, pizzarias, sushi, lanchonetes, padarias, buffets e cafeterias",
      color: "text-dark-highlight"
    },
    {
      icon: TrendingUp,
      title: "Resultados Imediatos",
      description: "Comece a usar hoje mesmo e veja a diferença na organização financeira",
      color: "text-dark-cta"
    },
    {
      icon: Shield,
      title: "Garantia Total",
      description: "14 dias de garantia incondicional. É risco zero para você",
      color: "text-dark-highlight"
    },
    {
      icon: Clock,
      title: "Suporte Completo",
      description: "Vídeo explicativo passo a passo e suporte para tirar suas dúvidas",
      color: "text-dark-cta"
    }
  ];

  // Links configuráveis
  const linkcompra = "https://produtos.foguetewill.com.br/pay/pre-venda-planilha-will";
  const linkzap = "https://wa.me/5511999999999";

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-dark-primary to-dark-accent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZzEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWY4OTliIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2cxKSIvPjwvc3ZnPg==')] repeat"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-light mb-6">
            Criada por quem entende
            <span className="text-dark-highlight block">o seu negócio</span>
          </h2>
          <p className="text-xl text-dark-medium max-w-3xl mx-auto">
            Não é só mais uma planilha. É a solução que <strong className="text-dark-highlight">funciona de verdade</strong> 
            para donos de restaurante que querem sair do caos financeiro.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="glass p-8 rounded-2xl group hover:shadow-2xl hover:shadow-dark-highlight/10 transition-all duration-300"
            >
              <div className={`${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-12 h-12" />
              </div>
              
              <h3 className="text-xl font-bold text-dark-light mb-4 group-hover:text-dark-highlight transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-dark-medium leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Hover effect line */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-dark-highlight to-dark-cta transition-all duration-500 mt-6"></div>
            </motion.div>
          ))}
        </div>

        {/* Creator testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            {/* Header with photo and name side by side */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/2e0ce9c8-37bb-472f-94b8-d6b58f6c91f7.png" 
                    alt="William Flores"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Enhanced floating glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-dark-highlight/30 to-transparent blur-xl animate-pulse"></div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-dark-highlight/20 via-dark-cta/20 to-dark-highlight/20 blur-lg animate-pulse"></div>
              </motion.div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-dark-highlight">William Flores</h3>
                <p className="text-dark-medium text-lg">Especialista em Gestão de Restaurantes</p>
              </div>
            </div>
            
            <p className="text-dark-light italic leading-relaxed text-lg mb-8">
              "Eu sei como é vender bem e mesmo assim não ver o dinheiro sobrar. Já passei por isso. 
              Foi por isso que criei essa planilha: para ajudar donos de restaurante como você a entender, 
              de forma clara e sem complicação, <strong className="text-dark-highlight">quanto entra, quanto sai e principalmente, quanto sobra.</strong>"
            </p>
            
            <motion.a
              href={linkcompra}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-dark-cta to-dark-highlight text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-dark-highlight/25 transition-all duration-300"
            >
              QUERO CONQUISTAR CLAREZA FINANCEIRA
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
