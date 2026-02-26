"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="relative min-h-screen py-16 sm:py-20 flex items-center justify-center overflow-hidden"
      >
        <div className="container">
          {/* Animated Parallax Background */}
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-violet/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-3xl" />
          </motion.div>
          <div className="relative z-10 container mx-auto w-full">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-5"
              >
                <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider">
                  Work
                </span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Flagship <span className="gradient-text">Projects</span>
              </motion.h2>

              <motion.p
                className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                These aren&apos;t just codebases they&apos;re products that
                solved real problems for real users.
              </motion.p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          </div>{" "}
        </div>
      </section>
    </>
  );
}
