"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { about, person } from "@/lib/portfolio-data";
import { Reveal, RevealGroup, RevealChild } from "./Reveal";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full px-6 py-12 select-none">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-700" />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-500">
              About
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-700" />
          </div>
        </Reveal>

        {/* Intro */}
        {about.intro.display && (
          <Reveal delay={0.1}>
            <div className="mb-15 flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:text-left">
              <div 
                className="relative h-30 w-30 shrink-0 overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={person.avatar}
                  alt={person.name}
                  fill
                  quality={75}
                  sizes="120px"
                  priority
                  draggable={false}
                  className="object-cover pointer-events-none"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {person.name}
                </h3>
                <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  {person.role}
                </p>
                <p className="max-w-lg text-sm leading-relaxed text-neutral-900 dark:text-neutral-400">
                  {about.intro.description}
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {/* Work Experience */}
        {about.work.display && (
          <div className="mb-20">
            <Reveal>
              <h3 className="mb-8 text-lg font-bold text-neutral-900 dark:text-white">
                {about.work.title}
              </h3>
            </Reveal>

            <div className="space-y-4">
              {about.work.experiences.map((exp, i) => (
                <Reveal key={exp.company} delay={i * 0.1}>
                  <div className="relative flex gap-6">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="z-10 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-cyan-500 bg-white dark:border-cyan-400 dark:bg-neutral-900" />
                      {i < about.work.experiences.length - 1 && (
                        <TimelineLine />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className="group -mt-1 flex-1 space-y-2 relative overflow-hidden rounded-xl border border-neutral-100 bg-white p-5 transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50"
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                      }}
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                        background: "radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6,182,212,0.06), transparent 60%)",
                      }} />
                      <div className="relative flex flex-wrap items-baseline gap-2">
                        <h4 className="font-semibold text-neutral-900 dark:text-white">
                          {exp.company}
                        </h4>
                        <span className="text-xs text-neutral-400 dark:text-neutral-500">
                          {exp.timeframe}
                        </span>
                      </div>
                      <p className="relative text-sm font-medium text-neutral-600 dark:text-neutral-300">
                        {exp.role}
                      </p>
                      <ul className="relative space-y-1.5 pt-1">
                        {exp.achievements.map((achievement, j) => (
                          <li
                            key={j}
                            className="flex gap-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Studies */}
        {about.studies.display && (
          <div className="mb-20">
            <Reveal>
              <h3 className="mb-8 text-lg font-bold text-neutral-900 dark:text-white">
                {about.studies.title}
              </h3>
            </Reveal>
            <RevealGroup className="space-y-4" staggerDelay={0.1}>
              {about.studies.institutions.map((inst) => (
                <RevealChild key={inst.name}>
                  <div
                    className="group relative overflow-hidden rounded-xl border border-neutral-100 bg-white p-5 transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                      e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                    }}
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                      background: "radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6,182,212,0.06), transparent 60%)",
                    }} />
                    <h4 className="relative font-semibold text-neutral-900 dark:text-white">
                      {inst.name}
                    </h4>
                    <p className="relative mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {inst.description}
                    </p>
                  </div>
                </RevealChild>
              ))}
            </RevealGroup>
          </div>
        )}

        {/* Technical Skills */}
        {about.technical.display && (
          <div>
            <Reveal>
              <h3 className="mb-8 text-lg font-bold text-neutral-900 dark:text-white">
                {about.technical.title}
              </h3>
            </Reveal>
            <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
              {about.technical.skills.map((skill) => (
                <RevealChild key={skill.title}>
                  <SkillCard {...skill} />
                </RevealChild>
              ))}
            </RevealGroup>
          </div>
        )}
      </div>
    </section>
  );
}

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      className="h-full w-px origin-top bg-neutral-200 dark:bg-neutral-700"
      initial={{ scaleY: 0 }}
      animate={isInView ? { scaleY: 1.10 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

function SkillCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="skill-card group relative overflow-hidden rounded-xl border border-neutral-100 bg-white p-5 transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
        background: "radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6,182,212,0.06), transparent 60%)",
      }} />
      <div className="relative space-y-3">
        <h4 className="font-semibold text-neutral-900 dark:text-white">{title}</h4>
        <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
