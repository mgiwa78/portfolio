"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function WorkPageContent({ project }: { project: Project }) {
  const { title, category, year, role, tagline, problem, approach, highlights, outcome, stack } =
    project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Meta row */}
      <div
        className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-5"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}
      >
        <span>{category}</span>
        {year && (
          <>
            <span aria-hidden>/</span>
            <span>{year}</span>
          </>
        )}
        <span aria-hidden>/</span>
        <span>{role}</span>
      </div>

      {/* Title */}
      <h1
        className="font-heading mb-6"
        style={{
          fontSize: "clamp(2.25rem, 6vw, 4rem)",
          fontWeight: 600,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.025em",
          lineHeight: 1.05,
        }}
      >
        {title}
      </h1>

      {/* Tagline */}
      <p
        className="text-lg leading-relaxed mb-12 font-body"
        style={{ color: "var(--color-text-secondary)", maxWidth: "42rem" }}
      >
        {tagline}
      </p>

      <div className="rule-subtle mb-12" />

      {/* Problem */}
      <section className="mb-12 max-w-2xl">
        <h2 className="section-label mb-4">The problem</h2>
        <p className="text-sm leading-loose font-body" style={{ color: "var(--color-text-secondary)" }}>
          {problem}
        </p>
      </section>

      {/* Approach */}
      <section className="mb-12 max-w-2xl">
        <h2 className="section-label mb-4">Approach</h2>
        <p className="text-sm leading-loose font-body" style={{ color: "var(--color-text-secondary)" }}>
          {approach}
        </p>
      </section>

      {/* Highlights */}
      {highlights.length > 0 && (
        <section className="mb-12">
          <h2 className="section-label mb-5">What it does</h2>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl"
          >
            {highlights.map((highlight, idx) => (
              <motion.li
                key={idx}
                variants={item}
                className="flex items-start gap-3 text-sm leading-relaxed font-body"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <span
                  className="mt-2 w-1 h-1 flex-shrink-0"
                  style={{ background: "var(--color-accent)" }}
                />
                <span>{highlight}</span>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      )}

      {/* Outcome */}
      <section
        className="mb-12 max-w-2xl pl-5 py-1"
        style={{ borderLeft: "2px solid var(--color-accent-dim)" }}
      >
        <h2 className="section-label mb-3">Where it stands</h2>
        <p className="text-sm leading-loose font-body" style={{ color: "var(--color-text-secondary)" }}>
          {outcome}
        </p>
      </section>

      {/* Tech stack */}
      <section className="mb-16">
        <h2 className="section-label mb-5">Stack</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Footer nav */}
      <div className="flex items-center justify-between pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <Link href="/work" className="project-back-link inline-flex items-center gap-2">
          <svg className="w-3.5 h-3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          All work
        </Link>
        <a href="mailto:mgiwa78@gmail.com" className="btn-secondary text-xs py-2 px-5">
          Send a Message
        </a>
      </div>
    </motion.article>
  );
}
