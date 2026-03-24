"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiVuedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiFigma,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact color="#C9A96E" />, title: "React" },
  { node: <SiNextdotjs color="#EDE8DF" />, title: "Next.js" },
  { node: <SiTypescript color="#C9A96E" />, title: "TypeScript" },
  { node: <SiTailwindcss color="#EDE8DF" />, title: "Tailwind CSS" },
  { node: <SiNodedotjs color="#C9A96E" />, title: "Node.js" },
  { node: <SiPython color="#EDE8DF" />, title: "Python" },
  { node: <SiPostgresql color="#C9A96E" />, title: "PostgreSQL" },
  { node: <SiMongodb color="#EDE8DF" />, title: "MongoDB" },
  { node: <SiDocker color="#C9A96E" />, title: "Docker" },
  { node: <SiGit color="#EDE8DF" />, title: "Git" },
  { node: <SiFigma color="#C9A96E" />, title: "Figma" },
  { node: <SiVuedotjs color="#EDE8DF" />, title: "Vue.js" },
];

/* SVG icons for skill cards */
const FrontendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const BackendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="6" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const MobileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2.5" />
    <path d="M12 18h.01" />
  </svg>
);

const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 5v14c0 1.66-4.03 3-9 3S3 20.66 3 19V5" />
    <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
  </svg>
);

const ToolsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const DesignIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "var(--color-background)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8" style={{ background: "rgba(201,169,110,0.6)" }} />
            <span className="section-label">02 — Skills</span>
          </motion.div>

          <motion.h2
            className="font-heading mb-4"
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
            Arsenal of{" "}
            <span className="gradient-text italic">Skills</span>
          </motion.h2>

          <motion.p
            className="text-sm leading-relaxed max-w-xl"
            style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The tools and technologies I use to design, build, and scale modern software.
          </motion.p>
        </div>

        {/* Thin rule */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="rule-subtle" />
        </motion.div>
      </div>

      {/* Tech Logo Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mb-16 w-full"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          padding: "1.5rem 0",
          background: "rgba(13,15,22,0.4)",
        }}
      >
        <div className="relative h-10 flex items-center overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={38}
            direction="left"
            logoHeight={28}
            gap={44}
            pauseOnHover={false}
            scaleOnHover={false}
            fadeOut
            ariaLabel="Technology stack"
          />
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillCard
            category="Frontend"
            description="Crafting interfaces that feel as good as they look."
            skills={["React", "Next.js", "TypeScript", "Tailwind", "Vue"]}
            icon={<FrontendIcon />}
            index={0}
          />
          <SkillCard
            category="Backend"
            description="Designing scalable APIs and architectures that power products."
            skills={["Node.js", "Express", "Python", "Django", "REST"]}
            icon={<BackendIcon />}
            index={1}
          />
          <SkillCard
            category="Mobile"
            description="Delivering experiences in your pocket with React Native."
            skills={["React Native", "Expo", "iOS", "Android", "PWA"]}
            icon={<MobileIcon />}
            index={2}
          />
          <SkillCard
            category="Databases"
            description="Structuring data for speed, security, and reliability."
            skills={["PostgreSQL", "MongoDB", "Redis", "Firebase", "SQL"]}
            icon={<DatabaseIcon />}
            index={3}
          />
          <SkillCard
            category="Tools"
            description="From Git to Docker, I keep workflows clean and automated."
            skills={["Git", "Docker", "CI/CD", "AWS", "Linux"]}
            icon={<ToolsIcon />}
            index={4}
          />
          <SkillCard
            category="Design"
            description="Bridging aesthetics and functionality with modern design tools."
            skills={["Figma", "Adobe XD", "Framer", "Animation", "UX"]}
            icon={<DesignIcon />}
            index={5}
          />
        </div>
      </div>
    </section>
  );
}
