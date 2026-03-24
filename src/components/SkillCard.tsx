"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  category: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
}

export default function SkillCard({
  category,
  description,
  skills,
  icon,
  index,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="group relative rounded-md p-6 cursor-default overflow-hidden transition-all duration-400"
      style={{
        background: "var(--color-surface)",
        border: "1px solid rgba(201,169,110,0.1)",
        transition: "border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,169,110,0.28)";
        e.currentTarget.style.boxShadow =
          "0 20px 50px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,169,110,0.06) inset";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,169,110,0.1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Subtle corner accent */}
      <div
        className="absolute top-0 left-0 w-8 h-px"
        style={{ background: "var(--color-accent)", opacity: 0.5 }}
      />
      <div
        className="absolute top-0 left-0 h-8 w-px"
        style={{ background: "var(--color-accent)", opacity: 0.5 }}
      />

      {/* Icon */}
      <div
        className="w-10 h-10 rounded flex items-center justify-center mb-5"
        style={{
          background: "rgba(201,169,110,0.08)",
          border: "1px solid rgba(201,169,110,0.18)",
          color: "var(--color-accent)",
        }}
      >
        {icon}
      </div>

      {/* Category */}
      <h3
        className="mb-2 font-heading"
        style={{
          fontSize: "1.375rem",
          fontWeight: 600,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.01em",
        }}
      >
        {category}
      </h3>

      {/* Description */}
      <p
        className="text-xs leading-relaxed mb-5"
        style={{ color: "var(--color-text-tertiary)", fontFamily: "var(--font-body)" }}
      >
        {description}
      </p>

      {/* Skills tags */}
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="text-xs px-2.5 py-1 rounded-sm font-medium transition-colors duration-200"
            style={{
              fontFamily: "var(--font-body)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "var(--color-text-secondary)",
              letterSpacing: "0.02em",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
