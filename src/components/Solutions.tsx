import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Brain, Megaphone, Calendar, Bell } from 'lucide-react';

const solutions = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Automatización de solicitudes recurrentes",
    description: "Creamos un canal para que tus clientes puedan hacer la solicitud de certificados y trámites 100% digital.."
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Atención con IA",
    description: "Chatbots inteligentes que manejan consultas de clientes 24/7"
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Campañas Masivas & Automatizaciones",
    description: "Envío de información sobre eventos, promociones y actualizaciones.Además de envíos de comunicación automatizada que puede estar conectadas a herramientas de la institución."
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Carga de documentos y validación de identidad",
    description: "Facilita los procesos de registro automático y de solicitudes verificando la identidad de tus clientes y permitiendoles subir documentos a través de WhatsApp."
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Actualización de bases de datos",
    description: "Solicita datos a tus clientes para diferentes procesos y manten al día tu base de datos actualizada en automático."
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Recordatorios Personalizados",
    description: "Notificaciones sobre pagos, fechas de inscripción y plazos importantes."
  }
];

export const Solutions: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras Soluciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos la comunicación universitaria con soluciones innovadoras
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="text-blue-600 mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};