// src/components/layout/SectionHeading.tsx
import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-teal-400 tracking-tight transition-colors">
      {children}
    </h2>
  );
};

export default SectionHeading;
