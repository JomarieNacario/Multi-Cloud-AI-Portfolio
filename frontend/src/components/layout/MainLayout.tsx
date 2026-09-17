// src/components/layout/MainLayout.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChatWidget from '../ai/AIChatWidget';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    // The base wrapper handles the smooth theme transition between slate-50 (light) and slate-950 (dark)
    <div className="min-h-screen relative bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-200 selection:bg-teal-500/30 font-sans transition-colors duration-300">
      
      {/* Absolute background glow effects (optional, adds a nice cloud-like feel) */}
      <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-teal-500/10 dark:bg-teal-900/20 transition-colors"></div>
      <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-slate-300/50 dark:bg-slate-800/30 transition-colors"></div>

      {/* Navigation replaces the old Header */}
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex flex-col items-center px-4 pt-28 sm:pt-36 w-full">
        {children}
      </main>

      <Footer />
      
      {/* Floating Serverless AI Assistant */}
      <AIChatWidget />
      
    </div>
  );
};

export default MainLayout;
