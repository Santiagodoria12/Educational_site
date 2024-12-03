import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquareHeart, SquarePen, BarChart, MessageCirclePlus} from 'lucide-react';

const features = [
  {
    icon: <MessageSquareHeart className="w-10 h-10" />,
    title: "Es el canal favorito de los Colombianos",
    description: "WhatsApp cuenta con más de 30 Millones de usuarios activos en Colombia."
  },
  {
    icon: <SquarePen className="w-10 h-10" />,
    title: "Permite crear productos personalizados para empresas",
    description: "Posibilita la personalización acorde a las necesidades de las empresas"
  },
  {
    icon: <MessageCirclePlus className="w-10 h-10" />,
    title: "Facilita la creación de canales conversacionales",
    description: "Canales valiosos para la empresa y el cliente. Las empresas pueden crear comunicaciones masivas y automatizaciones. Los clientes pueden tener un canal facilitador"
  },
  {
    icon: <BarChart className="w-10 h-10" />,
    title: "Aumenta la eficiencia en la gestión administrativa",
    description: "Optimiza procesos en hasta un 65% y aumenta la satisfacción de cliente"
  }
];

export const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          ¿Por Qué WhatsApp?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl bg-white/5 p-6 group"
            >
              {/* Animated border effect */}
              <div className="absolute inset-0 bg-[#42b6f5] opacity-5 group-hover:opacity-10 transition-opacity" />
              
              {/* Glowing circle behind icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#42b6f5] blur-xl opacity-10 group-hover:opacity-20 transition-opacity rounded-full" />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="relative text-[#42b6f5] mb-6 p-3 bg-[#42b6f5]/10 rounded-full w-fit"
                >
                  {feature.icon}
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 relative">
                {feature.title}
              </h3>
              <p className="text-white/60 relative">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-[#42b6f5]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};