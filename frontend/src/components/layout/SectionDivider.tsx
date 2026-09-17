// src/components/layout/SectionDivider.tsx
import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider: React.FC = () => {
  return (
    <motion.div
      className="bg-slate-200 dark:bg-slate-800 my-24 h-16 w-1 rounded-full hidden sm:block mx-auto transition-colors duration-300"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
};

export default SectionDivider;
