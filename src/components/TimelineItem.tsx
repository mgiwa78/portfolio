"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  role: string;
  company: string;
  dates: string;
  description: string;
  index: number;
  isLeft: boolean;
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex gap-6 md:gap-10 pb-12"
    >
      {/* Left: index + timeline line */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Index number */}
        <div
          className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 relative z-10"
          style={{
            background: "var(--color-surface-2)",
            border: "1px solid rgba(201,169,110,0.25)",
          }}
        >
          <span
            className="font-heading"
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--color-accent)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        {/* Vertical connector (except last item) */}
        <div
          className="w-px flex-1 mt-2"
          style={{
            background:
              "linear-gradient(to bottom, rgba(201,169,110,0.25), rgba(201,169,110,0.05))",
            minHeight: "3rem",
          }}
        />
      </div>

      {/* Right: Content */}
      <div
        className="flex-1 rounded-md p-6 mb-2 transition-all duration-400 group-hover:-translate-y-1"
        style={{
          background: "var(--color-surface)",
          border: "1px solid rgba(201,169,110,0.1)",
          transition: "border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(201,169,110,0.25)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 16px 48px -16px rgba(0,0,0,0.5)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(201,169,110,0.1)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        {/* Date */}
        <span
          className="inline-block mb-3 section-label"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          {dates}
        </span>

        {/* Role */}
        <h3
          className="font-heading mb-1"
          style={{
            fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {role}
        </h3>

        {/* Company */}
        <p
          className="mb-4 font-body"
          style={{
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: "var(--color-accent)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {company}
        </p>

        {/* Description */}
        <p
          className="text-sm leading-relaxed font-body"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
