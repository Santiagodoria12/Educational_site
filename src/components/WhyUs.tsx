import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Puzzle, Zap, RefreshCw } from 'lucide-react';

const reasons = [
  {
    icon: <Award className="w-12 h-12" />,
    title: "Expertos en Automatización",
    description: "Especialistas en implementar soluciones de WhatsApp para el sector educativo."
  },
  {
    icon: <Puzzle className="w-12 h-12" />,
    title: "Soluciones Personalizadas",
    description: "Adaptamos nuestras herramientas a las necesidades específicas de tu institución."
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Integración Fluida",
    description: "Nuestras soluciones se integran sin problemas con tus sistemas actuales."
  },
  {
    icon: <RefreshCw className="w-12 h-12" />,
    title: "Mejora Continua",
    description: "Nos comprometemos a actualizar y optimizar constantemente nuestros servicios."
  }
];

export const WhyUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">¿Por Qué <span className="text-[#42b6f5]">Metalks</span>?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Nos convertimos en socios estratégicos para impulsar la comunicación y eficiencia de tu institución
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 text-center
                       transform hover:rotate-1 transition-all duration-300
                       border border-white/10 hover:border-[#42b6f5]/20
                       group hover:bg-[#42b6f5]/5"
            >
              <motion.div 
                className="text-[#42b6f5] mb-6 flex justify-center"
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#42b6f5] transition-colors">
                {reason.title}
              </h3>
              <p className="text-white/60 group-hover:text-white/80 transition-colors">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};