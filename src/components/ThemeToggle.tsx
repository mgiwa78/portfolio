"use client";

import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";

/**
 * Flips between light and dark and remembers the choice. The current theme lives on
 * <html data-theme>, set before paint by the script in layout.tsx, so the icon is
 * chosen with CSS (dark: variant) and never mismatches during hydration.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage blocked (private mode etc.): the switch still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className="fixed right-4 top-4 z-40 grid size-10 place-items-center rounded-full border border-border bg-bg/80 text-fg backdrop-blur transition-colors duration-150 hover:border-fill hover:text-accent md:right-6 md:top-6"
    >
      <Moon size={18} weight="bold" aria-hidden className="dark:hidden" />
      <Sun size={18} weight="bold" aria-hidden className="hidden dark:block" />
    </button>
  );
}
