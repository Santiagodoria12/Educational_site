import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Lleva la Comunicación de tu institución educativa al Siguiente Nivel
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contáctanos hoy y descubre cómo podemos transformar la comunicación en tu institución
          </p>
          <a href ="https://calendly.com/metalks/metalks-sales-?month=2024-12" target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold 
                     flex items-center gap-2 mx-auto hover:bg-blue-700 transition-colors"
          >
            <MessageSquare className="w-5 h-5"/>
            Solicitar Información
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};