import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IPhoneMockup } from './chat/IPhoneMockup';
import { ChatMessage } from './chat/ChatMessage';

const messages = [
  {
    text: "Hola quiero solicitar un certificado de notas",
    isUser: true,
  },
  {
    text: "Perfecto por favor comparteme la siguiente información\nNombre, cedula, correo y número celular",
    isUser: false,
  },
  {
    text: "Andres Perez,101010101, andres@perez.com, 3505189292",
    isUser: true,
  },
  {
    text: "Muchas gracias en unos momentos te estará llegando tu certificado al correo electrónico",
    isUser: false,
  },
];

export const ChatDemo: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Experiencia de Usuario <span className="text-[#42b6f5]">Simplificada</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Gestiona trámites académicos de manera rápida y eficiente a través de WhatsApp
          </p>
        </motion.div>

        <div className="flex justify-center items-center">
          <IPhoneMockup>
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isUser={message.isUser}
                delay={index * 0.5}
              />
            ))}
          </IPhoneMockup>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#42b6f5]/10 rounded-full filter blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#42b6f5]/5 rounded-full filter blur-3xl translate-y-1/2 translate-x-1/2" />
    </section>
  );
};