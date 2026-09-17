import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="mb-10 px-4 text-center text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-8 mt-20">
      <small className="block mb-2 text-sm">
        <span>{t('footer.designedBy')} &copy; {currentYear} {t('footer.rights')}</span>
        <p className="text-xs sm:text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {t('footer.aboutTitle')}:{" "}
          </span> 
          {t('footer.techStack')}
        </p>
      </small>
    </footer>
  );
}
