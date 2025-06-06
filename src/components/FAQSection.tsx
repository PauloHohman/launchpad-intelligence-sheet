
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Serve para qualquer tipo de restaurante?",
      answer: "Sim! A planilha é usada em hamburguerias, pizzarias, sushi, lanchonetes, padarias, buffets e até cafeterias."
    },
    {
      question: "Sou iniciante. Consigo usar?",
      answer: "Totalmente. Ela foi feita pra ser simples, mesmo pra quem nunca usou Excel."
    },
    {
      question: "Funciona no celular?",
      answer: "Funciona, mas recomendamos o uso em computador ou tablet para melhor visualização."
    },
    {
      question: "É só baixar e sair usando?",
      answer: "Sim! Assim que a compra for confirmada, você receberá a planilha e um vídeo explicando tudo passo a passo."
    },
    {
      question: "E se eu não gostar?",
      answer: "Você tem 7 dias de garantia incondicional. É risco zero pra você."
    },
    {
      question: "Como funciona após a compra?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um email com o link para download da planilha e acesso ao vídeo explicativo completo."
    },
    {
      question: "Preciso de conhecimento avançado em planilhas?",
      answer: "Não! A planilha foi desenvolvida para ser intuitiva. Todas as células de entrada estão claramente marcadas e há instruções passo a passo."
    },
    {
      question: "Meus dados ficam seguros?",
      answer: "Absolutamente! A planilha roda localmente no seu computador, seus dados nunca saem da sua máquina. Temos total respeito à sua privacidade e segurança."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-primary to-dark-accent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-light mb-6">
            FAQ — Perguntas
            <span className="text-dark-highlight block">Frequentes</span>
          </h2>
          <p className="text-xl text-dark-medium max-w-2xl mx-auto">
            Tire suas dúvidas sobre a Planilha Gestão Inteligente
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-dark-highlight/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-dark-light pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-dark-highlight flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-dark-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-light mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-dark-medium mb-6">
              Entre em contato conosco pelo WhatsApp e tire todas as suas dúvidas
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-colors duration-300 inline-flex items-center gap-2"
            >
              💬 Falar no WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
