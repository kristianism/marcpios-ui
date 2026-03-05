"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { home, person } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headlineRef.current) return;

    // Parallax fade on scroll
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      y: -60,
      ease: "none",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center px-6 py-32"
    >
      <div className="flex max-w-2xl flex-col items-center text-center">
        {home.featured.display && (
          <Reveal delay={0} y={0} blur>
            <a
              href={home.featured.href}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-medium text-cyan-600 transition-colors hover:bg-cyan-500/10 dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-400 dark:hover:bg-cyan-400/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              {home.featured.title}
            </a>
          </Reveal>
        )}

        <Reveal delay={0.1} y={8}>
          <h1
            ref={headlineRef}
            className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            {home.headline}
          </h1>
        </Reveal>

        <Reveal delay={0.25} y={12}>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
            {home.subline}
          </p>
        </Reveal>

        <Reveal delay={0.4} y={16}>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="#about"
              className="group flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-900/20 transition-all hover:bg-neutral-800 hover:shadow-xl dark:bg-white dark:text-neutral-900 dark:shadow-white/10 dark:hover:bg-neutral-100"
            >
              <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-neutral-700 text-xs font-bold text-white dark:bg-neutral-300 dark:text-neutral-800">
                {person.firstName[0]}
                {person.lastName[0]}
              </div>
              About me
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#projects"
              className="rounded-full border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800/50"
            >
              View work
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <Reveal delay={0.8} y={0} className="absolute bottom-12">
        <motion.div
          className="flex flex-col items-center gap-2 text-neutral-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-neutral-400 to-transparent" />
        </motion.div>
      </Reveal>
    </section>
  );
}
