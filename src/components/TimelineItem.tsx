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
  isLeft,
}: TimelineItemProps) {
  return (
    <div className="relative flex items-center w-full mb-16 md:mb-20">
      {/* Content Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -50 : 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          group relative
          w-full md:w-[calc(50%-3rem)] 
          bg-surface/50 backdrop-blur-xl
          border border-black/[0.08]
          rounded-lg p-8
          transition-all duration-300
          hover:border-black/[0.12] hover:bg-surface/70
          ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}
        `}
        whileHover={{ y: -4 }}
      >
        <div className="relative z-10">
          {/* Dates Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-blue/10 border border-accent-blue/20 mb-4 ${isLeft ? "md:ml-auto" : ""
              }`}
          >
            <span className="text-xs font-semibold text-accent-blue uppercase tracking-wide">
              {dates}
            </span>
          </div>

          {/* Role */}
          <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary mb-2 leading-tight">
            {role}
          </h3>

          {/* Company */}
          <h4 className="text-base md:text-lg font-semibold text-text-secondary mb-4">
            {company}
          </h4>

          {/* Description */}
          <p className="text-sm text-text-tertiary leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>

      {/* Timeline Dot */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.15 + 0.2,
          type: "spring",
          stiffness: 200,
        }}
      >
        <div className="w-4 h-4 rounded-full bg-accent-blue border-4 border-background shadow-lg shadow-accent-blue/30" />
      </motion.div>
    </div>
  );
}
