import React from 'react';
import { motion } from 'framer-motion';

interface IPhoneMockupProps {
  children: React.ReactNode;
}

export const IPhoneMockup: React.FC<IPhoneMockupProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[3rem] border-4 border-white/10
                 shadow-2xl shadow-[#42b6f5]/10"
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl" />
      
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-[25px] bg-black rounded-full" />
      
      {/* Screen */}
      <div className="absolute top-0 left-0 right-0 bottom-0 m-3 bg-black rounded-[2.5rem] overflow-hidden">
        {/* Status Bar */}
        <div className="h-12 bg-black flex justify-between items-center px-6">
          <span className="text-white text-xs">9:41</span>
          <div className="flex items-center gap-2">
            <span className="text-white text-xs">5G</span>
            <span className="text-white text-xs">100%</span>
          </div>
        </div>
        
        {/* Chat Header */}
        <div className="h-16 bg-black/50 backdrop-blur-lg border-b border-white/10 flex items-center px-4">
          <div className="w-8 h-8 rounded-full bg-[#42b6f5] flex items-center justify-center">
               <img 
              src="https://metalks.co/images/metalkslogowhite.png" 
                alt="Logo de la empresa" 
               className="w-full h-full object-cover rounded-full" 
              />
          </div>
          <div className="ml-3">
            <h3 className="text-white font-semibold">Metalks Assistant</h3>
            <p className="text-white/60 text-xs">En línea</p>
          </div>
        </div>
        
        {/* Chat Content */}
        <div className="flex-1 p-4 overflow-y-auto h-[calc(100%-7rem)]">
          {children}
        </div>
      </div>
    </motion.div>
  );
};