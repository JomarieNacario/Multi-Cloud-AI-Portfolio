import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@heroui/react';

const HeroProfile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[60vh] flex flex-col justify-center">
      <p className="text-teal-400 font-medium mb-4">{t('hero.greeting')}</p>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
        Jomarie Nacario
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-600 dark:text-slate-400 mb-8">
        {t('hero.subtitle')}
      </h2>
      <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
        {t('hero.desc')}
      </p>
      
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <a href="#contact">
          <Button 
            className="px-8 h-14 bg-transparent border-2 border-teal-500 text-teal-600 dark:text-teal-400 font-medium hover:bg-teal-50 dark:hover:bg-teal-500/10 transition-all"
            radius="sm"
          >
            {t('hero.contact')}
          </Button>
        </a>
        
        {/* The Download Link */}
        <a 
          href="/Jomarie_Nacario_Resume.pdf" 
          download="Jomarie_Nacario_Resume.pdf"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            className="px-8 h-14 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold shadow-lg transition-all"
            radius="sm"
          >
            {t('hero.resume')}
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HeroProfile;
