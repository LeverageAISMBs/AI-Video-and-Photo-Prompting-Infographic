
import React from 'react';
import { motion } from 'framer-motion';

export const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -4, borderColor: '#38bdf8' }}
    className={`bg-[#1e293b] border border-[#334155] rounded-xl p-6 shadow-lg transition-colors duration-200 ${className}`}
  >
    {children}
  </motion.div>
);

export const SectionHeader: React.FC<{ number: string, title: string, color: string }> = ({ number, title, color }) => (
  <div className="mb-10">
    <h2 className="text-3xl font-bold text-white mb-4">
      <span className={color}>{number}.</span> {title}
    </h2>
  </div>
);

export const GradientText: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <span className={`bg-gradient-to-right from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block ${className}`}>
    {children}
  </span>
);
