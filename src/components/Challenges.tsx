import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertCircle, Clock, FileText, Info } from 'lucide-react';

const challenges = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Procesos Administrativos Lentos",
    description: "Trámites burocráticos que consumen tiempo y recursos tanto para la empresa como para el cliente. Además de esto muchos de estos procesos tienden a ser complicados de cara al cliente."
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    title: "Respuestas Tardías",
    description: "Demoras en la atención a consultas de estudiantes y aspirantes. Que puede traer consigo una insatisfacción del cliente."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Experiencia del cliente fragmentada",
    description: "Los clientes deben usar múltiples canales para procesos simples, generando frustración, confusión y disminuyendo su compromiso."
  },
  {
    icon: <Info className="w-8 h-8" />,
    title: "Falta de comunicación efectiva",
    description: "Dificultad para mantener a la comunidad informada sobre eventos y novedades. La falta de comunicación es uno de los principales factores a la hora de perder clientes."
  }
];

export const Challenges: React.FC = () => {
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

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >   
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Desafíos Actuales en las{' '}
            <span className="text-[#42b6f5]">
              Instituciones educativas
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-4">
        Conocemos tus problemas como institución educativa.
           </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative group h-[200px]"
            >
              <div className="absolute inset-0 bg-[#42b6f5]/10 rounded-2xl blur-xl group-hover:opacity-100 transition-opacity opacity-0" />
              
              <div className="relative h-full bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10
                            hover:border-[#42b6f5]/20 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 rounded-xl bg-[#42b6f5]/10"
                  >
                    <div className="text-[#42b6f5]">
                      {challenge.icon}
                    </div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#42b6f5] transition-colors">
                      {challenge.title}
                    </h3>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};