"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiVuedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiFigma,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiPython />, title: "Python" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiGit />, title: "Git" },
  { node: <SiFigma />, title: "Figma" },
  { node: <SiVuedotjs />, title: "Vue.js" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-surface overflow-hidden"
    >
      <div className="container">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent-violet/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-5"
            >
              <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider">
                Expertise
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Arsenal of <span className="gradient-text">Skills</span>
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The tools and technologies I use to design, build, and scale
              modern software.
            </motion.p>
          </div>
        </div>
      </div>
      {/* Tech Logo Loop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-20 w-full  md:py-20"
      >
        <div className="relative h-20 flex items-center overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={52}
            gap={40}
            pauseOnHover={false}
            scaleOnHover={false}
            fadeOut
            fadeOutColor="#050714"
            ariaLabel="Technology stack"
          />
        </div>
      </motion.div>
      <div className="container">
        <div className="relative z-10 container mx-auto w-full">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              category="Frontend"
              description="Crafting interfaces that feel as good as they look."
              skills={["React", "Next.js", "TypeScript", "Tailwind", "Vue"]}
              icon="⚡"
              index={0}
            />
            <SkillCard
              category="Backend"
              description="Designing scalable APIs and architectures that power products."
              skills={["Node.js", "Express", "Python", "Django", "REST"]}
              icon="🔧"
              index={1}
            />
            <SkillCard
              category="Mobile"
              description="Delivering experiences in your pocket with React Native."
              skills={["React Native", "Expo", "iOS", "Android", "PWA"]}
              icon="📱"
              index={2}
            />
            <SkillCard
              category="Databases"
              description="Structuring data for speed, security, and reliability."
              skills={["PostgreSQL", "MongoDB", "Redis", "Firebase", "SQL"]}
              icon="🗄️"
              index={3}
            />
            <SkillCard
              category="Tools"
              description="From Git to Docker, I keep workflows clean and automated."
              skills={["Git", "Docker", "CI/CD", "AWS", "Linux"]}
              icon="🛠️"
              index={4}
            />
            <SkillCard
              category="Design"
              description="Bridging aesthetics and functionality with modern design tools."
              skills={["Figma", "Adobe XD", "Framer", "Animation", "UX"]}
              icon="🎨"
              index={5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
