import React from 'react';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  delay: number;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-2xl ${
          isUser
            ? 'bg-[#42b6f5] text-white rounded-br-none'
            : 'bg-white/10 text-white rounded-bl-none'
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
    </motion.div>
  );
};