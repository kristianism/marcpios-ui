"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { navItems } from "@/lib/portfolio-data";
import { ThemeToggle } from "./ThemeToggle";
import { FiHome, FiUser, FiGrid, FiImage } from "react-icons/fi";
import { useLenis } from "@/app/providers";

const iconMap = {
  home: FiHome,
  person: FiUser,
  grid: FiGrid,
  gallery: FiImage,
} as const;

export function Header() {
  const [activeSection, setActiveSection] = useState(navItems[0].href);
  const headerRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const sectionEls = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    const visibleSections = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleSections.set(entry.target.id, entry.isIntersecting);
        }
        // Pick the last visible section in DOM order
        for (let i = navItems.length - 1; i >= 0; i--) {
          const id = navItems[i].href.slice(1);
          if (visibleSections.get(id)) {
            setActiveSection(navItems[i].href);
            return;
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    for (const el of sectionEls) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    headerRef.current.style.opacity = "0";
    headerRef.current.style.transform = "translateY(-20px)";
    requestAnimationFrame(() => {
      if (!headerRef.current) return;
      headerRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      headerRef.current.style.opacity = "1";
      headerRef.current.style.transform = "translateY(0)";
    });
  }, []);

  const handleNavClick = (href: string) => {
    if (lenis) {
      lenis.scrollTo(href);
    } else {
      document.querySelector(href)?.scrollIntoView();
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        ref={headerRef}
        className="fixed left-0 right-0 top-0 z-50 hidden items-center justify-center p-4 sm:flex"
      >
        <nav className="flex items-center gap-1 rounded-2xl border border-neutral-200/60 bg-white/80 px-2 py-1.5 shadow-lg shadow-black/[0.03] backdrop-blur-xl dark:border-neutral-700/60 dark:bg-neutral-900/80 dark:shadow-black/20">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-neutral-900 dark:text-white"
                    : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl bg-neutral-100 dark:bg-neutral-800"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={16} />
                  <span className="hidden lg:inline">{item.label}</span>
                </span>
              </button>
            );
          })}
          <div className="mx-1 h-5 w-px bg-neutral-200 dark:bg-neutral-700" />
          <ThemeToggle />
        </nav>
      </header>

      {/* Mobile Header */}
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center sm:hidden">
        <nav className="flex items-center gap-1 rounded-2xl border border-neutral-200/60 bg-white/80 px-2 py-1.5 shadow-lg shadow-black/[0.06] backdrop-blur-xl dark:border-neutral-700/60 dark:bg-neutral-900/80 dark:shadow-black/30">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative flex items-center rounded-xl p-2.5 transition-colors ${
                  isActive
                    ? "text-neutral-900 dark:text-white"
                    : "text-neutral-500 dark:text-neutral-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-mobile"
                    className="absolute inset-0 rounded-xl bg-neutral-100 dark:bg-neutral-800"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={18} className="relative z-10" />
              </button>
            );
          })}
          <div className="mx-0.5 h-5 w-px bg-neutral-200 dark:bg-neutral-700" />
          <ThemeToggle />
        </nav>
      </div>
    </>
  );
}
