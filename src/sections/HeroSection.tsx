"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none dot-grid"
        style={{ opacity: 0.6 }}
      />

      {/* Atmospheric glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "-5%",
          width: "55vw",
          height: "70vh",
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0",
          right: "-5%",
          width: "40vw",
          height: "50vh",
          background:
            "radial-gradient(ellipse, rgba(92,142,191,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-10 xl:px-16">
        {/* Top meta row */}
        <motion.div
          className="flex items-center justify-between mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <div
              className="h-px w-8"
              style={{ background: "rgba(201,169,110,0.5)" }}
            />
            <span className="section-label" style={{ color: "var(--color-text-tertiary)" }}>
              01
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="section-label" style={{ color: "var(--color-text-tertiary)" }}>
              2026
            </span>
            <div
              className="h-px w-8"
              style={{ background: "rgba(201,169,110,0.5)" }}
            />
          </div>
        </motion.div>

        {/* Main name — editorial display */}
        <div className="mb-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-heading leading-[0.85] tracking-[-0.03em] select-none"
              style={{
                fontSize: "clamp(4.5rem, 13.5vw, 13rem)",
                fontWeight: 600,
              }}
            >
              <span className="block text-text-primary">GIWA</span>
              <span
                className="block"
                style={{
                  WebkitTextStroke: "1.5px rgba(237,232,223,0.35)",
                  color: "transparent",
                }}
              >
                MUHAMMAD
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-8 md:my-10"
          initial={{ scaleX: 0, originX: "left" }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rule-accent" />
        </motion.div>

        {/* Role / description row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12 md:mb-14">
          {/* Left: Role + availability */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
              </span>
              <span className="section-label">Available for opportunities</span>
            </div>
            <p
              className="font-heading italic leading-relaxed"
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                fontWeight: 300,
                color: "var(--color-text-secondary)",
              }}
            >
              Software Engineer &amp; Systems Architect
            </p>
          </motion.div>

          {/* Right: Description */}
          <motion.p
            className="text-text-secondary leading-relaxed max-w-xs text-sm"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            I design and engineer scalable systems that blend code, creativity,
            and impact — from real-time platforms to academic infrastructure.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href="/Software-Engineer-Giwa-Muhammad-1.pdf"
            download="Giwa-Muhammad-Resume.pdf"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            <span>Download Resume</span>
          </motion.a>

          <motion.a
            href="#journey"
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Explore Journey</span>
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <span
            className="section-label"
            style={{ color: "var(--color-text-tertiary)", fontSize: "0.6rem" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-8"
            style={{
              background:
                "linear-gradient(to bottom, rgba(201,169,110,0.5), transparent)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
