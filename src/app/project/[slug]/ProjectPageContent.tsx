"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectPageContentProps {
  project: Project;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectPageContent({ project }: ProjectPageContentProps) {
  const { title, tagline, story, stack, features } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-accent-blue mb-4 block">
        Project
      </span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight mb-4">
        {title}
      </h1>
      <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10">
        {tagline}
      </p>

      <section className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-4">
          Overview
        </h2>
        <p className="text-text-secondary leading-relaxed whitespace-pre-line">
          {story}
        </p>
      </section>

      {features.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-4">
            Key features
          </h2>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 gap-3"
          >
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                variants={item}
                className="flex items-start gap-3 text-text-secondary text-sm sm:text-base"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      )}

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-4">
          Tech stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 text-sm font-medium text-text-primary bg-black/[0.04] border border-black/[0.08] rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </motion.article>
  );
}
