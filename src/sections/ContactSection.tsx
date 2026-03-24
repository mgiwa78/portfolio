"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    label: "mgiwa78",
    href: "https://github.com/mgiwa78",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    label: "muhammad-giwa",
    href: "https://www.linkedin.com/in/muhammad-giwa-0b92011a6/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Email",
    label: "mgiwa78@gmail.com",
    href: "mailto:mgiwa78@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none dot-grid"
        style={{ opacity: 0.4 }}
      />

      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "60vh",
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div
            className="h-px w-8"
            style={{ background: "rgba(201,169,110,0.6)" }}
          />
          <span className="section-label">05 — Contact</span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2
            className="font-heading leading-none"
            style={{
              fontSize: "clamp(3rem, 8vw, 8rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
            }}
          >
            Let&apos;s Build
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px rgba(237,232,223,0.3)",
                color: "transparent",
              }}
            >
              Something
            </span>
            <br />
            <span className="gradient-text italic">Together.</span>
          </h2>
        </motion.div>

        {/* Vision text */}
        <motion.p
          className="text-sm leading-loose max-w-xl mb-16"
          style={{
            color: "var(--color-text-secondary)",
            fontFamily: "var(--font-body)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          I build systems that outlast me. My mission is to merge AI, cloud
          infrastructure, and intuitive design to empower businesses and users
          worldwide.
        </motion.p>

        {/* Rule */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rule-accent" />
        </motion.div>

        {/* Social links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="flex flex-col sm:flex-row gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="group flex items-center gap-3"
                style={{
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-text-secondary)";
                }}
              >
                <span
                  className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(201,169,110,0.06)",
                    border: "1px solid rgba(201,169,110,0.15)",
                  }}
                >
                  {link.icon}
                </span>
                <div className="flex flex-col">
                  <span
                    className="section-label"
                    style={{
                      color: "var(--color-text-tertiary)",
                      fontSize: "0.6rem",
                    }}
                  >
                    {link.name}
                  </span>
                  <span
                    className="text-xs mt-0.5"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="mailto:mgiwa78@gmail.com"
            className="btn-primary flex-shrink-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Send a Message</span>
          </motion.a>
        </div>

        {/* Footer copyright */}
        <motion.div
          className="mt-20 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p
              className="text-xs"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-text-tertiary)",
              }}
            >
              © {new Date().getFullYear()} Giwa Muhammad. Crafted with precision.
            </p>
            <p
              className="text-xs"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-text-tertiary)",
                letterSpacing: "0.06em",
              }}
            >
              Built with Next.js · Framer Motion · GSAP
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
