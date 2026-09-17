import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about"
      className="w-full pt-16 scroll-mt-32 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="text-2xl font-bold text-[#1a1b26] dark:text-white mb-8 text-center tracking-tight transition-colors">
        {t('headings.about', 'About Me')}
      </h2>

      <div className="p-8 md:p-10 rounded-[2rem] bg-white/50 dark:bg-[#1a1b26]/50 backdrop-blur-md border border-white dark:border-white/10 shadow-sm space-y-5 text-left text-slate-600 dark:text-slate-300 leading-relaxed text-base">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
      </div>
    </motion.section>
  );
}
