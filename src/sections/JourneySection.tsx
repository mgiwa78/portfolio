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
      className="relative min-h-screen flex items-center justify-center bg-background py-10 overflow-hidden"
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
              Every role has been a chapter — each challenge sharpened my
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
                role="Front End Engineer"
                company="Raffles Energies"
                dates="2024 – 2025"
                description="Revitalized two flagship energy applications that were struggling with responsiveness. Re-engineered the front-end with React and RTK, cutting load times and boosting adoption. Collaborated closely with backend engineers to ensure smooth releases."
                index={0}
                isLeft={true}
              />
              <TimelineItem
                role="Front End Engineer"
                company="Nexlen Systems"
                dates="2024 – 2025"
                description="Modernized a legacy Laravel product by introducing Vue.js, breathing new life into its UI and performance. Translated Figma designs into responsive production components, accelerating delivery and future-proofing the platform."
                index={1}
                isLeft={false}
              />
              <TimelineItem
                role="Full Stack Engineer"
                company="Alphatrol Limited"
                dates="2023"
                description="Brought Guardtrol, a real-time multi-location monitoring system, from concept to production. Built scalable front-end in React, integrated with Node.js + MongoDB backend, and established CI/CD pipelines that kept deployments seamless. Directly supported uptime across critical environments."
                index={2}
                isLeft={true}
              />
              <TimelineItem
                role="Laravel Engineer"
                company="Centre for Innovation & Entrepreneurship"
                dates="2023 – 2024"
                description="Transformed a government LMS platform to support thousands of instructors and learners. Integrated role-based features and new responsive interfaces, creating a system that made education more accessible and efficient."
                index={3}
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
