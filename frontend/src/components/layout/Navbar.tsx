import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all">
      <div className="bg-white/80 dark:bg-[#1a1b26]/60 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-sm dark:shadow-none rounded-full p-1.5 flex items-center space-x-1 text-sm font-medium text-slate-500 dark:text-slate-400">
        <a href="#home" className="px-5 py-2.5 bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white rounded-full transition-colors">Home</a>
        <a href="#about" className="px-5 py-2.5 hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
        <a href="#projects" className="px-5 py-2.5 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="px-5 py-2.5 hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
        <a href="#experience" className="px-5 py-2.5 hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
        <a href="#contact" className="px-5 py-2.5 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
        
        {/* Flag Selector Dropdown */}
        <div className="pl-4 pr-2 border-l border-slate-200 dark:border-white/10">
          <select 
            value={i18n.language} 
            onChange={handleLanguageChange}
            className="bg-transparent text-slate-700 dark:text-slate-300 font-medium py-1 outline-none cursor-pointer"
          >
            <option value="en" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">🇺🇸 EN</option>
            <option value="es" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">🇪🇸 ES</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
