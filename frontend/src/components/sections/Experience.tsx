// src/components/sections/Experience.tsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SectionHeading from '../layout/SectionHeading'; // Uncomment once ported

interface ExperienceData {
  role: string;
  company: string;
  date: string;
  desc: string;
}

export default function Experience() {
  const { t } = useTranslation();
  
  // Dynamically fetch the translated experience array
  const experience = t('experience', { returnObjects: true }) as ExperienceData[];
  
  // State to track dark mode for the inline styles required by the timeline library
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    // Function to check if the HTML element has the 'dark' class
    const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    
    // Run immediately on mount
    checkTheme(); 
    
    // Observe the HTML element for class changes triggered by your ThemeToggle
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 max-w-5xl mx-auto">
      {/* Fallback heading until SectionHeading is ported */}
      <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-teal-400">
        {t('headings.worked')}
      </h2>
      
      {/* Timeline line color: slate-700 for dark, slate-200 for light */}
      <VerticalTimeline lineColor={isDark ? "#334155" : "#e2e8f0"}>
        {experience.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: isDark ? "#1e293b" : "#f8fafc", // slate-800 or slate-50
                boxShadow: "none",
                border: isDark ? "1px solid #334155" : "1px solid #e2e8f0", 
                textAlign: "left",
                padding: "1.5rem",
              }}
              contentArrowStyle={{
                borderRight: isDark ? "0.4rem solid #1e293b" : "0.4rem solid #f8fafc",
              }}
              date={item.date}
              // Tailwind handles the date text color outside the inline styles
              dateClassName="text-slate-600 dark:text-slate-400 font-medium mx-4 sm:mx-0"
              iconStyle={{
                background: isDark ? "#14b8a6" : "#0f172a", // teal-500 or slate-900
                color: "#fff",
                boxShadow: isDark 
                  ? "0 0 0 4px #0f172a, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)" 
                  : "0 0 0 4px #ffffff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"
              }}
              // icon={<YourIconComponent />} // Add your icons back here when ready
            >
              <h3 className="font-bold text-xl text-slate-900 dark:text-white capitalize">
                {item.role}
              </h3>
              <h4 className="font-semibold text-teal-600 dark:text-teal-400 mt-1">
                {item.company}
              </h4>
              <p className="!mt-4 !font-normal text-slate-700 dark:text-slate-300">
                {item.desc}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
