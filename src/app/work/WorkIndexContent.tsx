"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects, getCategories } from "@/data/projects";

export default function WorkIndexContent() {
  const categories = useMemo(() => ["All", ...getCategories()], []);
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-32 pb-24" style={{ background: "var(--color-background)" }}>
      <div className="container mx-auto px-6 lg:px-10">
        {/* Back link */}
        <Link
          href="/"
          className="project-back-link inline-flex items-center gap-2 mb-10 transition-colors duration-200"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Home
        </Link>

        {/* Header */}
        <motion.h1
          className="font-heading mb-4"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 600,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work
        </motion.h1>
        <motion.p
          className="text-sm leading-relaxed max-w-lg mb-10"
          style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ten platforms, most of them built solo from schema to deployment.
          Filter by what a project actually is.
        </motion.p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className="text-xs px-3.5 py-1.5 transition-colors duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                border: "1px solid",
                borderColor:
                  active === category ? "var(--color-accent)" : "rgba(255,255,255,0.12)",
                color:
                  active === category
                    ? "var(--color-accent-bright)"
                    : "var(--color-text-tertiary)",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
