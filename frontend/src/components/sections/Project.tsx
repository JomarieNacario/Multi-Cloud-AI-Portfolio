// src/components/sections/Project.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectProps {
  title: string;
  desc: string;
  tech: string;
  imageUrl?: string; 
}

const Project: React.FC<ProjectProps> = ({ title, desc, tech, imageUrl }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Convert your comma-separated tech string from i18n into an array for the badges
  const tags = tech.split(',').map(t => t.trim());

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-6 sm:mb-8 last:mb-0"
    >
      <section className="
        bg-slate-50 
        max-w-[42rem] mx-auto
        border border-slate-200 
        rounded-xl 
        overflow-hidden 
        sm:pr-8 relative 
        sm:h-[20rem] hover:bg-slate-100 
        transition-colors duration-300
        sm:group-even:pl-8 
        dark:text-white dark:bg-slate-850 dark:border-slate-800 dark:hover:bg-slate-800
        shadow-sm hover:shadow-md
        ">
        <div className="
          pt-4 pb-7 px-5 
          sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
          flex flex-col h-full 
          sm:group-even:ml-[18rem]
          ">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {title}
          </h3>
          
          <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300 flex-grow">
            {desc}
          </p>
          
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="
                  bg-teal-500/10 
                  px-3 py-1 
                  text-[0.7rem] 
                  uppercase 
                  tracking-wider 
                  text-teal-700
                  dark:text-teal-300 
                  border border-teal-500/20
                  rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40"
          />
        )}
      </section>
    </motion.div>
  );
}

export default Project;
