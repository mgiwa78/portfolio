"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "var(--color-background)" }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          left: "-8%",
          width: "50vw",
          height: "60vh",
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          right: "-5%",
          width: "35vw",
          height: "40vh",
          background:
            "radial-gradient(ellipse, rgba(92,142,191,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div
              className="h-px w-8"
              style={{ background: "rgba(201,169,110,0.6)" }}
            />
            <span className="section-label">04 — Work</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              className="font-heading"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Flagship{" "}
              <span className="gradient-text italic">Projects</span>
            </motion.h2>

            <motion.p
              className="text-sm leading-relaxed max-w-sm"
              style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-body)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              These aren&apos;t just codebases — they&apos;re products that
              solved real problems for real users.
            </motion.p>
          </div>
        </div>

        {/* Thin rule */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rule-accent" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tagline={project.tagline}
              stack={project.stack}
              slug={project.slug}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
