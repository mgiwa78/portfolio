"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);

      const sections = ["home", "skills", "journey", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="group flex-shrink-0">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Monogram mark */}
              <div
                className="w-8 h-8 rounded flex items-center justify-center border"
                style={{
                  borderColor: "rgba(201,169,110,0.35)",
                  background: "rgba(201,169,110,0.06)",
                }}
              >
                <span
                  className="text-accent text-sm font-heading font-bold leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  GM
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-sm font-semibold text-text-primary leading-none mb-0.5"
                  style={{ fontFamily: "var(--font-body)", letterSpacing: "0.02em" }}
                >
                  Giwa Muhammad
                </span>
                <span className="section-label text-text-tertiary" style={{ fontSize: "0.6rem" }}>
                  Software Engineer
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 text-xs font-body transition-colors duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                  style={{
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 + 0.2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {item.name}
                  {/* Active underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-px bg-accent"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-secondary text-xs py-2 px-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              whileTap={{ scale: 0.96 }}
            >
              Get in Touch
              <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded"
            style={{
              border: "1px solid rgba(201,169,110,0.2)",
              background: "rgba(201,169,110,0.04)",
              color: "var(--color-text-primary)",
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                className="block h-px w-full bg-text-primary origin-center"
                animate={isMobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-px w-full bg-text-primary"
                animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px w-full bg-text-primary origin-center"
                animate={isMobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Accent glow line */}
      {isScrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t"
            style={{
              borderColor: "rgba(201,169,110,0.12)",
              background: "rgba(7,8,12,0.98)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between py-3 border-b"
                    style={{
                      borderColor: "rgba(255,255,255,0.04)",
                      color: isActive ? "var(--color-accent)" : "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-accent" />
                    )}
                  </motion.a>
                );
              })}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="btn-primary mt-4 justify-center"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
