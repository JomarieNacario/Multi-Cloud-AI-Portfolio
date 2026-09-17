import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const { t } = useTranslation();
  const skills = (t('skills', { returnObjects: true }) as string[]) || [];

  return (
    <section id="skills" className="w-full pt-10 scroll-mt-32">
      <h2 className="text-2xl font-bold text-[#1a1b26] dark:text-white mb-8 text-center tracking-tight transition-colors">
        {t('headings.toolkit', 'Technical Toolkit')}
      </h2>

      <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto list-none p-0 m-0">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="px-5 py-2.5 bg-white/80 dark:bg-white/5 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-white dark:border-white/10 shadow-sm hover:border-slate-300 dark:hover:border-white/30 hover:text-[#1a1b26] dark:hover:text-white hover:-translate-y-0.5 transition-all cursor-default"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
