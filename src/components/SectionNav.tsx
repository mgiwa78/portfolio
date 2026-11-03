"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function SectionNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="In-page" className="hidden lg:block">
      <ul className="mt-14 space-y-1">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a href={`#${id}`} className="group flex items-center py-2.5">
                <span
                  className={`mr-4 h-0.5 transition-all duration-200 ${
                    isActive
                      ? "w-16 bg-fill"
                      : "w-8 bg-subtle group-hover:w-16 group-hover:bg-fill"
                  }`}
                />
                <span
                  className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                    isActive ? "text-fg" : "text-subtle group-hover:text-fg"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
