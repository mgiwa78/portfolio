"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneBoundary from "@/components/three/SceneBoundary";
import SceneFallback from "@/components/three/SceneFallback";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DynamicSystemScene = dynamic(() => import("@/components/three/SystemScene"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const reduceMotion = !!useReducedMotion();
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    // Skip mounting the WebGL scene on narrow viewports entirely (not just
    // hiding it) so phones don't pay for a render loop they never see.
    const mq = window.matchMedia("(min-width: 768px)");
    setShowScene(mq.matches);
    const handler = (e: MediaQueryListEvent) => setShowScene(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          scrollProgress.current = self.progress;
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden pt-24"
    >
      {/* 3D system scene, right-aligned, faded under the text column. Desktop only:
          on mobile the text column runs full width and would overlap the scene, so
          it's not mounted at all below the md breakpoint. */}
      {showScene && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[85vw] max-w-xl aspect-square">
            <SceneBoundary fallback={<SceneFallback />}>
              <Suspense fallback={<SceneFallback />}>
                <DynamicSystemScene reduceMotion={reduceMotion} scrollProgress={scrollProgress} />
              </Suspense>
            </SceneBoundary>
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--color-background) 38%, rgba(10,10,12,0.65) 58%, transparent 82%)",
            }}
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 lg:px-10 xl:px-16">
        <div className="max-w-2xl">
          {/* Availability */}
          <motion.div
            className="flex items-center gap-2.5 mb-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="section-label">Open to new roles</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5.2vw, 4.25rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            I build the systems
            <br />
            behind the product.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base leading-relaxed mb-10 max-w-lg"
            style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            I design and build production software end to end: multi-tenant
            platforms, marketplaces, and the payments and infrastructure
            underneath them.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/work" className="btn-primary">
              View My Work
            </Link>
            <a
              href="/Software-Engineer-Giwa-Muhammad-1.pdf"
              download="Giwa-Muhammad-Resume.pdf"
              className="btn-secondary"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
