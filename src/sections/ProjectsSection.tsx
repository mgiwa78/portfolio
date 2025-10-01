"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

interface Project {
  id: number;
  title: string;
  tagline: string;
  story: string;
  stack: string[];
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Skorlar™",
    tagline:
      "Academic supervision was fragmented, slow, and paper-driven. I built Skorlar™, an end-to-end collaboration platform where supervisors and students could manage research seamlessly.",
    story:
      "Academic supervision was fragmented, slow, and paper-driven. I built Skorlar™, an end-to-end collaboration platform where supervisors and students could manage research seamlessly.\n\nTech: Next.js, Node.js, MongoDB, JWT Auth, Docker, CI/CD\n\nImpact: Streamlined document sharing, progress tracking, and communication for dozens of academic projects — reducing delays and increasing completion rates.",
    stack: ["Next.js", "Node.js", "MongoDB", "JWT Auth", "Docker", "CI/CD"],
    features: [
      "Real-time communication between supervisors and students",
      "Progress tracking with milestone management",
      "Document management with version control",
      "Secure JWT-based authentication and authorization",
      "Role-based access control (RBAC)",
      "Automated email notifications",
      "Deployed with Docker containers and CI/CD pipelines",
    ],
  },
  {
    id: 2,
    title: "Logistics Management System",
    tagline:
      "In fast-moving logistics, clarity is everything. I designed a system that unified vendors, customers, drivers, and admins into one seamless flow.",
    story:
      "In fast-moving logistics, clarity is everything. I designed a system that unified vendors, customers, drivers, and admins into one seamless flow.\n\nTech: Vue.js frontend, Laravel backend\n\nImpact: Enabled real-time order tracking, secure payments, and transparent role-based operations — empowering logistics providers to scale and deliver with confidence.",
    stack: ["Vue.js", "Laravel", "MySQL", "REST API", "Redis", "WebSockets"],
    features: [
      "Unified dashboard for vendors, customers, drivers, and admins",
      "Order management with real-time status updates",
      "Payment processing with multiple gateways",
      "Real-time tracking with WebSockets",
      "Role-specific dashboards and permissions",
      "Analytics and reporting for business insights",
      "Mobile-responsive design for all devices",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
        className="relative min-h-screen py-10 flex items-center justify-center overflow-hidden"
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
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 tracking-tight"
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
                These aren&apos;t just codebases — they&apos;re products that
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
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>

            {/* Additional Projects Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <p className="text-text-secondary mb-6">
                Want to see more? Check out my GitHub for additional projects.
              </p>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </motion.div>
          </div>{" "}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          tagline={selectedProject.tagline}
          story={selectedProject.story}
          stack={selectedProject.stack}
          features={selectedProject.features}
        />
      )}
    </>
  );
}
