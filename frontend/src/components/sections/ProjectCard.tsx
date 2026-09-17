import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  githubUrl,
}: ProjectData) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'], // Animates as the card enters the viewport
  });

  // Scale goes from 0.8 to 1; Opacity goes from 0.6 to 1
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8 last:mb-0 max-w-[42rem] w-full mx-auto"
    >
      <section className="bg-white/70 dark:bg-[#1a1b26]/70 border border-slate-200/80 dark:border-white/10 rounded-2xl overflow-hidden relative sm:h-[20rem] hover:bg-white/90 dark:hover:bg-[#1a1b26]/90 transition-colors backdrop-blur-md shadow-lg flex flex-col sm:flex-row">
        
        {/* Text Content */}
        <div className="pt-6 pb-7 px-6 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full text-left">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-4">
            {description}
          </p>

          {/* Tags */}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-slate-900/5 dark:bg-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 rounded-full border border-slate-900/10 dark:border-white/10"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Action Links */}
          {(demoUrl || githubUrl) && (
            <div className="flex gap-4 mt-4 pt-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  Live Demo ↗
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  Code →
                </a>
              )}
            </div>
          )}
        </div>

        {/* Floating / Angled Mockup Image */}
        <div className="sm:absolute sm:-right-10 sm:top-8 w-full sm:w-[28rem] rounded-t-lg sm:rounded-lg overflow-hidden transition-all duration-300
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          sm:group-even:right-[initial]
          sm:group-even:-left-10
          sm:group-even:group-hover:translate-x-3
          sm:group-even:group-hover:rotate-2">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 sm:h-auto object-cover object-top shadow-2xl rounded-t-lg sm:rounded-lg"
            />
          ) : (
            <div className="w-full h-48 sm:h-64 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 text-xs">
              Project Preview
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
