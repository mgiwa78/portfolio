"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  role: string;
  company: string;
  dates: string;
  description: string;
  index: number;
}

export default function TimelineItem({
  role,
  company,
  dates,
  description,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-2 md:gap-8 py-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Dates column */}
      <span
        className="text-xs pt-1"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-tertiary)" }}
      >
        {dates}
      </span>

      {/* Content */}
      <div>
        <h3
          className="font-heading mb-1 transition-colors duration-300"
          style={{
            fontSize: "1.375rem",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {role}
        </h3>
        <p
          className="mb-4"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "var(--color-accent-bright)",
            letterSpacing: "0.03em",
          }}
        >
          {company}
        </p>
        <p
          className="text-sm leading-relaxed max-w-2xl"
          style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
