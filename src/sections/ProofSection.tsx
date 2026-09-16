"use client";

import { motion } from "framer-motion";

const proofPoints = [
  {
    value: "6",
    label: "production platforms built solo, schema to CI/CD",
  },
  {
    value: "Stripe / Paystack",
    label: "payment and escrow systems integrated end to end",
  },
  {
    value: "Multi-tenant",
    label: "SaaS architecture serving many tenants on one codebase",
  },
  {
    value: "Docker to CI/CD",
    label: "infrastructure and deployment owned, not handed off",
  },
];

export default function ProofSection() {
  return (
    <section className="relative py-16 md:py-20" style={{ background: "var(--color-background)" }}>
      <div className="container mx-auto px-6 lg:px-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          {proofPoints.map((point, index) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="py-6 px-0 lg:px-6"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="mb-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--color-accent-bright)",
                  letterSpacing: "-0.01em",
                }}
              >
                {point.value}
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--color-text-tertiary)", fontFamily: "var(--font-body)" }}
              >
                {point.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
