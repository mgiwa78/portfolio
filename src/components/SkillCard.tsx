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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="card p-6"
    >
      {/* Icon */}
      <div
        className="w-10 h-10 flex items-center justify-center mb-5"
        style={{
          border: "1px solid rgba(255,255,255,0.1)",
          color: "var(--color-accent-bright)",
        }}
      >
        {icon}
      </div>

      {/* Category */}
      <h3
        className="mb-2 font-heading"
        style={{
          fontSize: "1.125rem",
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
      <div className="flex flex-wrap gap-x-3 gap-y-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-[11px]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-secondary)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
