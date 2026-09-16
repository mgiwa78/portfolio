"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHome) return;
      const sections = ["home", "capabilities", "experience", "work", "contact"];
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Work", href: "/work" },
    { name: "Experience", href: isHome ? "#experience" : "/#experience" },
    { name: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document
        .getElementById(href.substring(1))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen ? "glass-effect" : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group flex-shrink-0">
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 flex items-center justify-center flex-shrink-0"
                style={{
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <span
                  className="text-xs font-semibold leading-none"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent-bright)" }}
                >
                  GM
                </span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span
                  className="text-sm font-medium text-text-primary leading-none"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Giwa Muhammad
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const key = item.href.replace("/#", "").replace("#", "").replace("/", "");
              const isActive = isHome
                ? activeSection === key
                : pathname.startsWith(item.href.replace("/#", "/"));
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className={`relative px-4 py-2 text-[13px] transition-colors duration-200 ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 + 0.15 }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-px"
                      style={{ background: "var(--color-accent)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="/Software-Engineer-Giwa-Muhammad-1.pdf"
              download="Giwa-Muhammad-Resume.pdf"
              className="btn-secondary text-xs py-2 px-5"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                className="block h-px w-full bg-text-primary origin-center"
                animate={isMobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block h-px w-full bg-text-primary"
                animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px w-full bg-text-primary origin-center"
                animate={isMobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="py-3 border-b text-sm"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="/Software-Engineer-Giwa-Muhammad-1.pdf"
                download="Giwa-Muhammad-Resume.pdf"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="btn-primary mt-4 justify-center"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
