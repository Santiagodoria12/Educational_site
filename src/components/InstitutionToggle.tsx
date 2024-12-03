import React from 'react';
import { motion } from 'framer-motion';
import { useInstitution } from '../context/InstitutionContext';
import { School, GraduationCap } from 'lucide-react';

export const InstitutionToggle: React.FC = () => {
  const { institutionType, setInstitutionType } = useInstitution();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-4 right-4 z-50 bg-gray-800/50 backdrop-blur-md rounded-full p-2"
    >
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setInstitutionType('universidad')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            institutionType === 'universidad' ? 'bg-blue-600 text-white' : 'text-gray-300'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          Universidad
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setInstitutionType('colegio')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            institutionType === 'colegio' ? 'bg-blue-600 text-white' : 'text-gray-300'
          }`}
        >
          <School className="w-4 h-4" />
          Colegio
        </motion.button>
      </div>
    </motion.div>
  );
};