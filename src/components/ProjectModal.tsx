"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tagline: string;
  story: string;
  stack: string[];
  features?: string[];
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  tagline,
  story,
  stack,
  features = [],
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // GSAP scale-up animation
      gsap.fromTo(
        modalRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-lg"
            onClick={handleClose}
          />

          {/* Modal Content */}
          <div
            ref={modalRef}
            className="relative bg-background/95 backdrop-blur-sm border border-accent-violet/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-accent-violet/20"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 text-text-secondary hover:text-text-primary transition-colors duration-300"
              aria-label="Close modal"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="p-8 md:p-12">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-3"
              >
                {title}
              </motion.h2>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-accent-violet mb-6"
              >
                {tagline}
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-px bg-gradient-to-r from-accent-blue via-accent-violet to-transparent mb-8 origin-left"
              />

              {/* Story */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                  Project Story
                </h3>
                <p className="text-base text-text-secondary leading-relaxed whitespace-pre-line">
                  {story}
                </p>
              </motion.div>

              {/* Features (if provided) */}
              {features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-text-secondary"
                      >
                        <svg
                          className="w-5 h-5 mr-2 mt-1 text-accent-blue flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {stack.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-accent-blue/20 to-accent-violet/20 text-text-primary rounded-xl border border-accent-blue/30 font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <button className="btn-primary">View Live Demo</button>
                <button className="btn-secondary">View on GitHub</button>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
