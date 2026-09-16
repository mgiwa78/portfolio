"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export default function ProjectsSection() {
  const featured = getFeaturedProjects();

  return (
    <section
      id="work"
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: "var(--color-background)" }}
    >
      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.h2
              className="font-heading mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Selected work
            </motion.h2>
            <motion.p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Four platforms that show the range: multi-tenant SaaS, a vetted
              marketplace, an institutional LMS, and a travel platform shipped
              in deliberate stages.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/work" className="btn-secondary">
              View My Work
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
