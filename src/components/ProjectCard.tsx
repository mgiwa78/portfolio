"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, category, year, tagline, stack, slug } = project;

  return (
    <Link href={`/work/${slug}`} className="block group h-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
        className="card relative overflow-hidden cursor-pointer h-full flex flex-col p-7"
      >
        {/* Meta row */}
        <div className="flex items-center justify-between mb-6">
          <span
            className="text-[11px]"
            style={{
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-text-tertiary)",
            }}
          >
            {category}
          </span>
          {year && (
            <span
              className="text-[11px]"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-tertiary)" }}
            >
              {year}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="font-heading mb-3"
          style={{
            fontSize: "1.625rem",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          {title}
        </h3>

        {/* Tagline */}
        <p
          className="text-sm leading-relaxed mb-6 flex-1"
          style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
        >
          {tagline}
        </p>

        {/* Stack preview */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6">
          {stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px]"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-text-tertiary)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-xs font-medium pt-5 transition-all duration-300 group-hover:gap-3"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-accent-bright)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <span>View case study</span>
          <svg
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}
