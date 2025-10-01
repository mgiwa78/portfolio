"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced GSAP gradient animation
    if (heroRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(heroRef.current, {
        background:
          "radial-gradient(ellipse 100% 60% at 50% -10%, rgba(59, 130, 246, 0.15), transparent), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.12), transparent), radial-gradient(circle at 20% 60%, rgba(6, 182, 212, 0.08), transparent)",
        duration: 8,
        ease: "sine.inOut",
      }).to(heroRef.current, {
        background:
          "radial-gradient(ellipse 100% 60% at 50% -10%, rgba(168, 85, 247, 0.15), transparent), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.12), transparent), radial-gradient(circle at 80% 40%, rgba(6, 182, 212, 0.08), transparent)",
        duration: 8,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Enhanced Grid Pattern Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          {/* Badge - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/30 mb-6 sm:mb-8 backdrop-blur-xl shadow-lg shadow-blue-500/10"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Title with Enhanced Gradient */}
          <motion.h1
            className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.05] tracking-tight"
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="block mb-3 text-white drop-shadow-2xl"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Giwa Muhammad
            </motion.span>
            <motion.span
              className="block gradient-text drop-shadow-2xl"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                textShadow: "0 0 80px rgba(59, 130, 246, 0.3)",
              }}
            >
              Software Engineer
            </motion.span>
          </motion.h1>

          {/* Subtitle - Enhanced */}
          <motion.p
            className="text-base sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mb-4 sm:mb-6 font-medium leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I design and engineer scalable systems that blend{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              code
            </span>
            ,{" "}
            <span className="font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              creativity
            </span>
            , and{" "}
            <span className="font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              impact
            </span>
            .
          </motion.p>

          {/* Sub-copy */}
          <motion.p
            className="text-sm sm:text-base text-text-tertiary max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            From real-time applications to academic platforms, I craft solutions
            that delight users and scale with ambition.
          </motion.p>

          {/* CTA Buttons */}

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="/Software-Engineer-Giwa-Muhammad-1.pdf"
              download="Giwa-Muhammad-Resume.pdf"
              className="btn-primary w-full sm:w-auto sm:min-w-[200px] inline-flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Download Resume</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
            </motion.a>

            <motion.a
              href="#journey"
              className="btn-secondary w-full sm:w-auto sm:min-w-[200px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Journey</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.6 },
          y: { delay: 2, duration: 2, repeat: Infinity },
        }}
      >
        <div className="flex flex-col items-center gap-2 text-text-tertiary">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
