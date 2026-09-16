"use client";

import { motion } from "framer-motion";
import TimelineItem from "@/components/TimelineItem";

export default function JourneySection() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-8">
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
            Experience
          </motion.h2>

          <motion.p
            className="text-sm leading-relaxed max-w-xl"
            style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Six roles, one thread: owning a system from architecture to
            deployment, not just the parts that show up in a demo.
          </motion.p>
        </div>

        {/* Timeline */}
        <div>
          <TimelineItem
            role="CTO"
            company="SmartEdu"
            dates="2026 to present"
            description="Leading product and engineering for a multi-tenant school-management SaaS platform serving schools across Africa. Own the architecture end to end: a subdomain-per-tenant Node.js and PostgreSQL backend, a Turborepo of Next.js frontends, and the Paystack billing model the business runs on."
            index={0}
          />
          <TimelineItem
            role="Systems Engineer"
            company="Aptfuel"
            dates="May 2025 to present"
            description="Own the full application lifecycle across mobile, backend, and frontend. Built CI/CD pipelines, managed deployments, and broke down complex features across applications while driving technical decisions."
            index={1}
          />
          <TimelineItem
            role="Senior Full Stack Engineer, Architecture Lead"
            company="Raffles Energies"
            dates="Jun 2024 to Apr 2025"
            description="Led end-to-end architecture and backend development for web and mobile platforms. Architected the Node.js backend and database schema from inception, implemented Redis caching and asynchronous job processing, and managed containerized production deployments."
            index={2}
          />
          <TimelineItem
            role="Backend Engineer"
            company="Centre for Innovation & Entrepreneurship"
            dates="Sep 2023 to Mar 2024"
            description="Scaled a Laravel-based learning management system supporting multi-center operations for a government organization, redesigning the relational schema to support expanded roles and institutional structure."
            index={3}
          />
          <TimelineItem
            role="Full Stack Engineer"
            company="Alphatrol Limited"
            dates="May 2023 to Aug 2023"
            description="Took Guardtrol, a real-time multi-location monitoring system, from concept to production. Designed RESTful APIs and MongoDB/MySQL schemas, and implemented JWT-based authentication and authorization."
            index={4}
          />
          <TimelineItem
            role="Frontend & Backend Engineer"
            company="Nexlen Systems"
            dates="Jan 2023 to Apr 2023"
            description="Migrated a legacy Laravel Blade codebase into a structured Vue.js frontend system, integrating it with backend APIs and reducing redundant requests to improve UI performance."
            index={5}
          />
        </div>
      </div>
    </section>
  );
}
