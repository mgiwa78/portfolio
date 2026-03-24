"use client";

import { motion } from "framer-motion";
import TimelineItem from "@/components/TimelineItem";

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Cross-grid background */}
      <div
        className="absolute inset-0 pointer-events-none cross-grid"
        style={{ opacity: 0.5 }}
      />

      {/* Atmospheric glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          right: "-10%",
          width: "45vw",
          height: "50vh",
          background:
            "radial-gradient(ellipse, rgba(92,142,191,0.06) 0%, transparent 70%)",
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
            <span className="section-label">03 — Experience</span>
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
            Career{" "}
            <span className="gradient-text italic">Journey</span>
          </motion.h2>

          <motion.p
            className="text-sm leading-relaxed max-w-xl"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every role has been a chapter — each challenge sharpened my technical
            skills, leadership, and impact.
          </motion.p>
        </div>

        {/* Rule */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rule-accent" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl">
          <TimelineItem
            role="Systems Engineer"
            company="Aptfuel"
            dates="May 2025 — Present"
            description="Oversaw the entire application lifecycle, including mobile, backend, and frontend development. Managed deployment tasks, building CI/CD pipelines, and ensuring smooth feature integration. Coordinated feature planning, breaking down complex features across applications, and driving technical innovation."
            index={0}
            isLeft={true}
          />
          <TimelineItem
            role="Software Engineer"
            company="Freelance"
            dates="Dec 2024 — May 2025"
            description="Worked on full-stack development, handling both frontend (React) and backend (Node.js, Express, MongoDB) tasks. Developed mobile applications using React Native, Expo, and Tailwind. Successfully integrated frontend and backend components, ensuring seamless functionality."
            index={1}
            isLeft={false}
          />
          <TimelineItem
            role="Frontend Engineer"
            company="Raffles Energies"
            dates="Jun 2024 — Dec 2024"
            description="Developed and maintained multiple web applications using React, ensuring high efficiency and production readiness. Resolved issues, implemented design conversions, and optimized frontend performance. Demonstrated expertise in React, delivering high-quality user interfaces and experiences."
            index={2}
            isLeft={true}
          />
          <TimelineItem
            role="Full Stack Engineer"
            company="Alphatrol Limited"
            dates="Jan 2023 — Dec 2024"
            description="Brought Guardtrol, a real-time multi-location monitoring system, from concept to production. Built scalable front-end in React, integrated with Node.js + MongoDB backend, and established CI/CD pipelines that kept deployments seamless."
            index={3}
            isLeft={false}
          />
          <TimelineItem
            role="Full Stack Web Engineer"
            company="Bariansystems"
            dates="May 2023 — Nov 2023"
            description="Led front-end development for a large-scale project using Vue.js and Laravel. Translated Figma designs into functional UI components, developed backend APIs with Laravel and MySQL, and actively participated in code reviews to ensure optimal application performance."
            index={4}
            isLeft={true}
          />
        </div>
      </div>
    </section>
  );
}
