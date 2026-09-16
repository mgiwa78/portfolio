"use client";

import PageTransition from "@/components/PageTransition";
import HeroSection from "@/sections/HeroSection";
import ProofSection from "@/sections/ProofSection";
import SkillsSection from "@/sections/SkillsSection";
import JourneySection from "@/sections/JourneySection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <HeroSection />
        <ProofSection />
        <SkillsSection />
        <JourneySection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </PageTransition>
  );
}
