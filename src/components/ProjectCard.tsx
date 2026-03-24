"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  tagline: string;
  stack: string[];
  slug: string;
  index: number;
}

export default function ProjectCard({
  title,
  tagline,
  stack,
  slug,
  index,
}: ProjectCardProps) {
  return (
    <Link href={`/project/${slug}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -6 }}
        className="relative rounded-md overflow-hidden cursor-pointer h-full"
        style={{
          background: "var(--color-surface)",
          border: "1px solid rgba(201,169,110,0.1)",
          transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(201,169,110,0.3)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 24px 60px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,169,110,0.08) inset";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(201,169,110,0.1)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        {/* Project number accent */}
        <div
          className="absolute top-0 right-6 font-heading select-none pointer-events-none"
          style={{
            fontSize: "5rem",
            fontWeight: 700,
            lineHeight: 1,
            color: "rgba(201,169,110,0.04)",
            top: "-0.5rem",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, rgba(201,169,110,0.5), rgba(201,169,110,0.1), transparent)",
          }}
        />

        <div className="relative z-10 p-7">
          {/* Stack preview (small, top) */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {stack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-0.5 rounded-sm"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "rgba(201,169,110,0.07)",
                  border: "1px solid rgba(201,169,110,0.15)",
                  color: "var(--color-accent-muted)",
                  letterSpacing: "0.05em",
                }}
              >
                {tech}
              </span>
            ))}
            {stack.length > 3 && (
              <span
                className="text-xs px-2 py-0.5 rounded-sm"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "var(--color-text-tertiary)",
                }}
              >
                +{stack.length - 3}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className="font-heading mb-3"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
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
            className="text-sm leading-relaxed mb-6"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            {tagline}
          </p>

          {/* CTA */}
          <div
            className="flex items-center gap-2 text-xs font-medium transition-all duration-300 group-hover:gap-3"
            style={{
              fontFamily: "var(--font-body)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            <span>View Case Study</span>
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
        </div>
      </motion.div>
    </Link>
  );
}
