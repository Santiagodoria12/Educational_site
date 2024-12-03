import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const ShootingStar = () => (
  <motion.div
    initial={{ x: -100, y: -100, opacity: 0 }}
    animate={{ 
      x: [null, window.innerWidth + 100],
      y: [null, window.innerHeight + 100],
      opacity: [0, 1, 1, 0]
    }}
    transition={{ 
      duration: 2,
      times: [0, 0.1, 0.9, 1],
      repeat: Infinity,
      repeatDelay: 3
    }}
    className="absolute w-1 h-1 bg-[#42b6f5]"
    style={{
      boxShadow: '0 0 20px 2px #42b6f5',
      filter: 'blur(1px)'
    }}
  />
);

const StarField = () => {
  const stars = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 0.5 + Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`
          }}
          animate={{
            opacity: [0.2, 1, 0.2]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      <ShootingStar />
    </div>
  );
};

export const Hero: React.FC = () => {
  const [institution, setInstitution] = useState('Universidad');

  useEffect(() => {
    const interval = setInterval(() => {
      setInstitution(prev => prev === 'Universidad' ? 'Colegio' : 'Universidad');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <StarField />
      
      <div className="relative z-10 container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Transforma la Comunicación en tu{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={institution}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-[#42b6f5]"
              >
                {institution}
              </motion.span>
            </AnimatePresence>
            {' '}con WhatsApp
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Automatiza procesos clave, mejora la experiencia de tus clientes y simplifica 
            la gestión administrativa con nuestras soluciones innovadoras en WhatsApp.
          </motion.p>
          <a href ="https://calendly.com/metalks/metalks-sales-?month=2024-12" target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(66, 182, 245, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#42b6f5] text-white px-8 py-4 rounded-full font-semibold 
                     flex items-center gap-2 mx-auto hover:bg-[#42b6f5]/90 transition-all
                     shadow-lg hover:shadow-[#42b6f5]/50"
          >
            <MessageSquare className="w-5 h-5" />
            Solicita una Demo
          </motion.button>
          </a>
          <div className="mt-6">
            <img 
              src="https://metalks.co/images/Metalkslogocompletowhite.png" 
              alt="Logo de la empresa" 
              className="mx-auto w-24 h-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};