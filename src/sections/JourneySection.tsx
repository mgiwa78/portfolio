"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineItem from "@/components/TimelineItem";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function JourneySection() {
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP ScrollTrigger for timeline progress line
    if (timelineLineRef.current && timelineSectionRef.current) {
      gsap.fromTo(
        timelineLineRef.current,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineSectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={timelineSectionRef}
      id="journey"
      className="relative min-h-screen flex items-center justify-center bg-background py-16 sm:py-20 overflow-hidden"
    >
      <div className="container">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent-violet/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent-violet/10 border border-accent-violet/20 mb-5"
            >
              <span className="text-xs font-semibold text-accent-violet uppercase tracking-wider">
                Experience
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Career <span className="gradient-text">Journey</span>
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Every role has been a chapter each challenge sharpened my
              technical skills, leadership, and impact.
            </motion.p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-text-primary/5 transform -translate-x-1/2">
              {/* Progress Line */}
              <div
                ref={timelineLineRef}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-blue via-accent-violet to-accent-cyan origin-top shadow-lg shadow-accent-blue/20"
                style={{ height: "100%" }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-0">
              <TimelineItem
                role="Systems Engineer"
                company="Aptfuel"
                dates="May 2025 - Present"
                description="Oversaw the entire application lifecycle, including mobile, backend, and frontend development. Managed deployment tasks, building CI/CD pipelines, and ensuring smooth feature integration. Coordinated feature planning, breaking down complex features across applications, and driving technical innovation."
                index={0}
                isLeft={true}
              />
              <TimelineItem
                role="Software Engineer"
                company="Freelance"
                dates="Dec 2024  -  May 2025"
                description="Worked on full-stack development, handling both frontend (React) and backend (Node.js, Express, MongoDB) tasks. Developed mobile applications using React Native, Expo, and Tailwind. Successfully integrated frontend and backend components, ensuring seamless functionality."
                index={1}
                isLeft={false}
              />
              <TimelineItem
                role="Frontend Engineer"
                company="Raffles Energies"
                dates="Jun 2024  -  Dec 2024"
                description="Developed and maintained multiple web applications using React, ensuring high efficiency and production readiness. Resolved issues, implemented design conversions, and optimized frontend performance. Demonstrated expertise in React, delivering high-quality user interfaces and experiences."
                index={2}
                isLeft={true}
              />
              <TimelineItem
                role="Full Stack Engineer"
                company="Alphatrol Limited"
                dates="Jan 2023  -  Dec 2024"
                description="Brought Guardtrol, a real-time multi-location monitoring system, from concept to production. Built scalable front-end in React, integrated with Node.js + MongoDB backend, and established CI/CD pipelines that kept deployments seamless. Directly supported uptime across critical environments."
                index={3}
                isLeft={false}
              />
              <TimelineItem
                role="Full Stack Web Engineer"
                company="Bariansystems"
                dates="May 2023  -  Nov 2023"
                description="Led front-end development for a large-scale project using Vue.js and Laravel. Translated Figma designs into functional UI components, developed backend APIs with Laravel and MySQL, and actively participated in code reviews to ensure high-quality code and optimal application performance."
                index={4}
                isLeft={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
