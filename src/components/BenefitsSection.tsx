
import { motion } from 'framer-motion';
import { BarChart3, Zap, Target, TrendingUp, Shield, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Dashboards Visuais",
      description: "Gráficos automáticos que transformam seus dados em insights poderosos",
      color: "text-dark-highlight"
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Cálculos complexos executados automaticamente, sem erros manuais",
      color: "text-dark-cta"
    },
    {
      icon: Target,
      title: "Controle Financeiro",
      description: "Gerencie receitas, despesas e investimentos em um só lugar",
      color: "text-dark-highlight"
    },
    {
      icon: TrendingUp,
      title: "Análise de Crescimento",
      description: "Monitore seu progresso e identifique oportunidades de melhoria",
      color: "text-dark-cta"
    },
    {
      icon: Shield,
      title: "Dados Seguros",
      description: "Planilha local, seus dados permanecem 100% privados e seguros",
      color: "text-dark-highlight"
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize tarefas repetitivas e foque no que realmente importa",
      color: "text-dark-cta"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-primary to-dark-accent relative overflow-hidden">
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
            Por que escolher nossa
            <span className="text-dark-highlight block">Planilha Inteligente?</span>
          </h2>
          <p className="text-xl text-dark-medium max-w-3xl mx-auto">
            Desenvolvida para profissionais que querem <strong className="text-dark-highlight">resultados extraordinários</strong> 
            em menos tempo, com mais precisão e total controle.
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-light mb-4">
              Pronto para <span className="text-dark-highlight">acelerar</span> seus resultados?
            </h3>
            <p className="text-dark-medium mb-6">
              Junte-se a centenas de profissionais que já transformaram sua gestão
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-dark-cta to-dark-highlight text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-dark-highlight/25 transition-all duration-300"
            >
              QUERO MINHA PLANILHA AGORA
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
