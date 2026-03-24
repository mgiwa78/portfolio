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
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectPageContent({ project }: ProjectPageContentProps) {
  const { title, tagline, story, stack, features } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Label */}
      <span
        className="section-label mb-5 block"
        style={{ color: "var(--color-accent)" }}
      >
        Project
      </span>

      {/* Title */}
      <h1
        className="font-heading mb-4"
        style={{
          fontSize: "clamp(2.25rem, 6vw, 4rem)",
          fontWeight: 600,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h1>

      {/* Tagline */}
      <p
        className="text-base leading-relaxed mb-10 font-body"
        style={{ color: "var(--color-text-secondary)", maxWidth: "42rem" }}
      >
        {tagline}
      </p>

      {/* Rule */}
      <div className="rule-accent mb-10" />

      {/* Overview */}
      <section className="mb-12">
        <h2
          className="section-label mb-5"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          Overview
        </h2>
        <p
          className="text-sm leading-loose whitespace-pre-line font-body"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {story}
        </p>
      </section>

      {/* Features */}
      {features.length > 0 && (
        <section className="mb-12">
          <h2
            className="section-label mb-5"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Key Features
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
                className="flex items-start gap-3 text-sm leading-relaxed font-body"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <span
                  className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: "var(--color-accent)" }}
                />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      )}

      {/* Tech stack */}
      <section>
        <h2
          className="section-label mb-5"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 text-xs font-medium rounded-sm font-body"
              style={{
                color: "var(--color-text-secondary)",
                background: "rgba(201,169,110,0.06)",
                border: "1px solid rgba(201,169,110,0.15)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </motion.article>
  );
}
