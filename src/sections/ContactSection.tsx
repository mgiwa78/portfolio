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
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        {/* Main headline */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-heading leading-[1.05]"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
              maxWidth: "16ch",
            }}
          >
            Let&apos;s build something worth shipping.
          </h2>
        </motion.div>

        {/* Vision text */}
        <motion.p
          className="text-sm leading-loose max-w-lg mb-12"
          style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Open to senior and lead engineering roles, systems work, and
          projects that need someone comfortable owning a problem from
          architecture through to production.
        </motion.p>

        {/* Rule */}
        <motion.div
          className="mb-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {/* Social links + CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className="group flex items-center gap-3"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <span
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  {link.icon}
                </span>
                <div className="flex flex-col">
                  <span
                    className="text-[10px]"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-text-tertiary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {link.name}
                  </span>
                  <span
                    className="text-xs mt-0.5 transition-colors duration-200 group-hover:text-white"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    {link.label}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:mgiwa78@gmail.com"
            className="btn-primary flex-shrink-0"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Send a Message
          </motion.a>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-text-tertiary)" }}
          >
            © {new Date().getFullYear()} Giwa Muhammad
          </p>
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-tertiary)",
            }}
          >
            mgiwa78@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
