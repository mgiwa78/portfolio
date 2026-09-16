"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import LogoLoop from "@/components/LogoLoop";
import {
  Layout,
  Plugs,
  Database,
  CreditCard,
  Lightning,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiStripe,
  SiSocketdotio,
  SiGo,
} from "react-icons/si";

const techLogos = [
  { node: <SiNextdotjs color="#EDEDEF" />, title: "Next.js" },
  { node: <SiReact color="#4C7CFF" />, title: "React" },
  { node: <SiTypescript color="#4C7CFF" />, title: "TypeScript" },
  { node: <SiNodedotjs color="#EDEDEF" />, title: "Node.js" },
  { node: <SiGo color="#4C7CFF" />, title: "Go" },
  { node: <SiPostgresql color="#EDEDEF" />, title: "PostgreSQL" },
  { node: <SiRedis color="#4C7CFF" />, title: "Redis" },
  { node: <SiDocker color="#EDEDEF" />, title: "Docker" },
  { node: <SiStripe color="#4C7CFF" />, title: "Stripe" },
  { node: <SiSocketdotio color="#EDEDEF" />, title: "Socket.io" },
  { node: <SiTailwindcss color="#4C7CFF" />, title: "Tailwind CSS" },
];

export default function SkillsSection() {
  return (
    <section
      id="capabilities"
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: "var(--color-background)" }}
    >
      <div className="container mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-14">
          <motion.h2
            className="font-heading mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What I actually build with
          </motion.h2>

          <motion.p
            className="text-sm leading-relaxed max-w-xl"
            style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Not a skills wishlist, the stack that actually shows up across the
            ten platforms on this site.
          </motion.p>
        </div>

        {/* Tech Logo Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 w-full"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "1.5rem 0",
          }}
        >
          <div className="relative h-8 flex items-center overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={34}
              direction="left"
              logoHeight={24}
              gap={44}
              pauseOnHover={false}
              scaleOnHover={false}
              fadeOut
              fadeOutColor="#0a0a0c"
              ariaLabel="Technology stack"
            />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillCard
            category="Frontend"
            description="Interfaces built with Next.js and React for real product complexity, not static pages."
            skills={["Next.js", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS"]}
            icon={<Layout size={20} weight="light" />}
            index={0}
          />
          <SkillCard
            category="Backend & APIs"
            description="Service architecture and REST APIs in Node.js, modeled around real domains."
            skills={["Node.js", "Express", "TypeORM", "Go", "REST"]}
            icon={<Plugs size={20} weight="light" />}
            index={1}
          />
          <SkillCard
            category="Data & Storage"
            description="Schema design and query performance for systems that hold real records."
            skills={["PostgreSQL", "MySQL", "Redis", "MongoDB"]}
            icon={<Database size={20} weight="light" />}
            index={2}
          />
          <SkillCard
            category="Payments & Commerce"
            description="Stripe, Stripe Connect, and Paystack, including escrow and split-payment logic."
            skills={["Stripe", "Stripe Connect", "Paystack", "Escrow logic"]}
            icon={<CreditCard size={20} weight="light" />}
            index={3}
          />
          <SkillCard
            category="Realtime & Background Work"
            description="Sockets and job queues for the parts of a product that can't wait on a request."
            skills={["Socket.io", "BullMQ", "RabbitMQ", "Webhooks"]}
            icon={<Lightning size={20} weight="light" />}
            index={4}
          />
          <SkillCard
            category="Infrastructure & DevOps"
            description="From Dockerfile to CI/CD to a server I actually deployed it on."
            skills={["Docker", "CI/CD", "Cloudflare Workers", "Nginx"]}
            icon={<Stack size={20} weight="light" />}
            index={5}
          />
        </div>
      </div>
    </section>
  );
}
