"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface SkillCardProps {
  category: string;
  description: string;
  skills: string[];
  icon: string;
  index: number;
}

export default function SkillCard({
  category,
  description,
  skills,
  icon,
  index,
}: SkillCardProps) {
  const iconRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current && iconRef.current) {
      const card = cardRef.current;
      const icon = iconRef.current;

      const handleMouseEnter = () => {
        gsap.to(icon, {
          y: -4,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(icon, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-surface/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-surface/70"
      whileHover={{ y: -4 }}
    >
      {/* Icon */}
      <div
        ref={iconRef}
        className="w-16 h-16 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-4xl mb-5 transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-white/[0.12]"
      >
        <span>{icon}</span>
      </div>

      {/* Category */}
      <h3 className="text-xl font-heading font-bold text-white mb-3">
        {category}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-secondary mb-5 leading-relaxed">
        {description}
      </p>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1.5 bg-white/[0.04] text-text-tertiary rounded-lg border border-white/[0.06] font-medium transition-all duration-200 hover:bg-white/[0.08] hover:text-text-secondary hover:border-white/[0.1]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
