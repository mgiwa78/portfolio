"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tagline: string;
  stack: string[];
  index: number;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  tagline,
  stack,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group relative bg-surface/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:bg-surface/70 hover:border-white/[0.12]"
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-2xl font-heading font-bold text-white mb-3">
          {title}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-text-secondary mb-6 leading-relaxed">
          {tagline}
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {stack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1.5 bg-white/[0.04] text-text-tertiary rounded-lg border border-white/[0.06] font-medium"
            >
              {tech}
            </span>
          ))}
          {stack.length > 4 && (
            <span className="text-xs px-3 py-1.5 bg-white/[0.04] text-text-tertiary rounded-lg border border-white/[0.06] font-medium">
              +{stack.length - 4} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <motion.div
          className="flex items-center text-accent-blue group-hover:text-accent-violet transition-colors duration-300 font-medium text-sm"
          whileHover={{ x: 4 }}
        >
          <span>View Details</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
