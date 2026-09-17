// src/components/sections/ProjectGrid.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Project from './Project';
// import SectionHeading from '../layout/SectionHeading'; // Uncomment once ported

interface ProjectData {
  title: string;
  desc: string;
  tech: string;
  imageUrl?: string;
}

const ProjectGrid: React.FC = () => {
  const { t } = useTranslation();

  // Dynamically fetch the localized projects array
  const projects = t('projects', { returnObjects: true }) as ProjectData[];

  return (
    <section 
      id="projects" 
      className="scroll-mt-28 mb-28 max-w-5xl mx-auto text-center"
    >
      {/* Fallback heading until SectionHeading is ported */}
      <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-teal-400">
        {t('headings.featured')}
      </h2>
      
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            {/* The spread operator passes title, desc, tech, and imageUrl down to the card */}
            <Project {...project} /> 
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;
