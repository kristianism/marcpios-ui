"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navItems } from "@/lib/portfolio-data";
import { ThemeToggle } from "./ThemeToggle";
import { FiHome, FiUser, FiGrid, FiImage, FiMenu, FiX } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  home: FiHome,
  person: FiUser,
  grid: FiGrid,
  gallery: FiImage,
} as const;

export function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observers = sections.map((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${entry.target.id}`);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      observer.observe(section);
      return observer;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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
