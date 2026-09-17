// src/App.tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Skills from './components/sections/Skills';

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  desc: string;
}

interface ProjectItem {
  title: string;
  desc: string;
  tech: string;
}

export default function App() {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const skills = (t('skills', { returnObjects: true }) as string[]) || [];
  const experience = (t('experience', { returnObjects: true }) as ExperienceItem[]) || [];
  const projects = (t('projects', { returnObjects: true }) as ProjectItem[]) || [];

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gradient-to-b from-[#e8ddfa] via-[#fcfafc] to-white dark:from-[#3a2c5a] dark:via-[#1a1b26] dark:to-[#0f111a] text-[#1a1b26] dark:text-slate-100 font-sans selection:bg-[#1a1b26] dark:selection:bg-white selection:text-white dark:selection:text-[#1a1b26] pb-24">
      
      {/* Floating Pill Navbar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all">
        <div className="bg-white/80 dark:bg-[#1a1b26]/60 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-sm dark:shadow-none rounded-full p-1.5 flex items-center space-x-1 text-sm font-medium text-slate-500 dark:text-slate-400">
          <a href="#home" className="px-5 py-2.5 bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white rounded-full transition-colors">Home</a>
          <a href="#skills" className="px-5 py-2.5 hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="px-5 py-2.5 hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="px-5 py-2.5 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="px-5 py-2.5 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
          
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

      <main className="max-w-4xl mx-auto px-6 pt-48 flex flex-col items-center text-center">
        
        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center">
          <div className="relative mb-8">
            <div className="w-36 h-36 rounded-full border-4 border-white dark:border-white/10 shadow-xl overflow-hidden bg-slate-200 dark:bg-slate-800 transition-colors">
              <img src="/profile.jpg" alt="Jomarie" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-4xl md:text-[2.75rem] font-bold text-[#1a1b26] dark:text-white leading-snug tracking-tight mb-8 max-w-3xl transition-colors">
            {t('hero.part1')}
            <span className="font-extrabold">{t('hero.part2')}</span>
            {t('hero.part3')}
            <span className="underline decoration-slate-300 dark:decoration-slate-600 underline-offset-4">{t('hero.part4')}</span>
            {t('hero.part5')}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <a href="#contact" className="px-7 py-3.5 bg-[#1a1b26] dark:bg-[#0f111a] text-white font-medium rounded-full shadow-lg dark:border dark:border-white/10 hover:bg-slate-800 dark:hover:bg-[#1a1b26] hover:-translate-y-0.5 transition-all flex items-center gap-2">
              Contact
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>

            <a href="/Jomarie_Nacario_Resume.pdf" download="Jomarie_Nacario_Resume.pdf" className="px-7 py-3.5 bg-white dark:bg-white/5 text-[#1a1b26] dark:text-white font-medium border border-slate-200 dark:border-white/10 rounded-full shadow-sm hover:bg-slate-50 dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all flex items-center gap-2">
              Resume
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>

            <a href="https://linkedin.com/in/j-nacario" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 rounded-full shadow-sm hover:bg-slate-50 dark:hover:bg-white/10 hover:text-[#1a1b26] dark:hover:text-white hover:-translate-y-0.5 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>

            <a href="https://github.com/jomarienacario" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 rounded-full shadow-sm hover:bg-slate-50 dark:hover:bg-white/10 hover:text-[#1a1b26] dark:hover:text-white hover:-translate-y-0.5 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>

          <div className="h-16 w-[2px] bg-slate-200 dark:bg-slate-700 mb-16 transition-colors"></div>
        </section>

          {/* Subtle Vertical Divider */}
        <div className="h-16 w-[2px] bg-slate-200 dark:bg-slate-700 mb-16 transition-colors"></div>

        {/* About Section */}
        <section id="about" className="w-full max-w-3xl mx-auto mb-20 scroll-mt-32">
          <h2 className="text-2xl font-bold text-[#1a1b26] dark:text-white mb-8 text-center tracking-tight transition-colors">
            {t('about.title', 'About Me')}
          </h2>

          <div className="p-8 md:p-10 rounded-[2rem] bg-white/50 dark:bg-[#1a1b26]/50 backdrop-blur-md border border-white dark:border-white/10 shadow-sm space-y-5 text-left text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              {t(
                'about.p1',
                "I am a Cloud & Technical Support Specialist focused on AWS, Linux, networking, and automation. Currently an AWS re/Start Fellow at Per Scholas, I specialize in building hands-on cloud architectures and AI-powered workflows across AWS, Azure, and GCP."
              )}
            </p>
            <p>
              {t(
                'about.p2',
                "I enjoy solving complex technical problems, automating repetitive operations, and translating operational challenges into practical solutions. My recent projects span serverless applications, enterprise networking, and NetGuard AI—an intelligent tool engineered for automated security log analysis and Tier-1 incident triage."
              )}
            </p>
            <p>
              {t(
                'about.p3',
                "Outside of tech, I'm an avid Formula 1 fan, pickleball player, and long-distance hiker. Having thru-hiked both the Camino de Santiago and Camino Portugués, I bring the same endurance, disciplined focus, and curiosity to every technical challenge I tackle."
              )}
            </p>
          </div>
        </section>

        {/* Subtle Vertical Divider */}
          <div className="h-16 w-[2px] bg-slate-200 dark:bg-slate-700 mb-16 transition-colors"></div>

        {/* Skills Section */}
        <section id="skills" className="w-full pt-10 scroll-mt-32">
          <h2 className="text-2xl font-bold text-[#1a1b26] dark:text-white mb-8 text-center tracking-tight transition-colors">
            {t('headings.toolkit', 'Technical Toolkit')}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <span key={i} className="px-5 py-2.5 bg-white/80 dark:bg-white/5 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-white dark:border-white/10 shadow-sm hover:border-slate-300 dark:hover:border-white/30 hover:text-[#1a1b26] dark:hover:text-white hover:-translate-y-0.5 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full pt-32 scroll-mt-32">
          <h2 className="text-2xl font-bold text-[#1a1b26] dark:text-white mb-8 text-center tracking-tight transition-colors">
            {t('headings.worked', "Where I've Worked")}
          </h2>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/50 dark:bg-[#1a1b26]/50 backdrop-blur-md border border-white dark:border-white/10 shadow-sm hover:shadow-md transition-shadow duration-300 text-left">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                  <h3 className="text-xl font-bold text-[#1a1b26] dark:text-white">
                    {exp.role} <span className="text-blue-600 dark:text-blue-400 font-semibold">@ {exp.company}</span>
                  </h3>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-2 md:mt-0 bg-white dark:bg-white/5 px-4 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-white/10">{exp.date}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-2">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full pt-32 scroll-mt-32">
          <h2 className="text-2xl font-bold text-[#1a1b26] dark:text-white mb-8 text-center tracking-tight transition-colors">
            {t('headings.featured', 'Featured Projects')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {projects.map((project, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-white/50 dark:bg-[#1a1b26]/50 backdrop-blur-md border border-white dark:border-white/10 shadow-sm hover:shadow-lg hover:border-blue-100 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
                <h3 className="text-xl font-bold text-[#1a1b26] dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed">{project.desc}</p>
                <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  {project.tech}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Floating Theme Toggle (Sun/Moon) */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1b26] dark:bg-[#1a1b26]/80 border border-transparent dark:border-white/20 text-white shadow-lg hover:scale-110 transition-transform z-50 backdrop-blur-md"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        )}
      </button>

    </div>
  );
}
