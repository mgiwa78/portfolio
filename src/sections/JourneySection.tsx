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
            Five roles, one thread: owning a system from architecture to
            deployment, not just the parts that show up in a demo.
          </motion.p>
        </div>

        {/* Timeline */}
        <div>
          <TimelineItem
            role="Systems Engineer"
            company="Aptfuel"
            dates="May 2025 to present"
            description="Own the full application lifecycle across mobile, backend, and frontend. Built CI/CD pipelines, managed deployments, and broke down complex features across applications while driving technical decisions."
            index={0}
          />
          <TimelineItem
            role="Software Engineer"
            company="Freelance"
            dates="Dec 2024 to May 2025"
            description="Full-stack development across React frontends and Node.js/Express/MongoDB backends. Built mobile applications with React Native and Expo, shipping complete features from API to interface."
            index={1}
          />
          <TimelineItem
            role="Frontend Engineer"
            company="Raffles Energies"
            dates="Jun 2024 to Dec 2024"
            description="Built and maintained production React applications, resolved performance issues, and converted designs into high-quality, production-ready interfaces."
            index={2}
          />
          <TimelineItem
            role="Full Stack Engineer"
            company="Alphatrol Limited"
            dates="Jan 2023 to Dec 2024"
            description="Took Guardtrol, a real-time multi-location monitoring system, from concept to production. Built the React frontend, integrated it with a Node.js and MongoDB backend, and set up the CI/CD pipeline that kept deployments seamless."
            index={3}
          />
          <TimelineItem
            role="Full Stack Web Engineer"
            company="Bariansystems"
            dates="May 2023 to Nov 2023"
            description="Led frontend development on a large-scale project in Vue.js and Laravel, translating Figma designs into functional components and building backend APIs with Laravel and MySQL."
            index={4}
          />
        </div>
      </div>
    </section>
  );
}
