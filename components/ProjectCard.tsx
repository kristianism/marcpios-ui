"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

interface ProjectCardProps {
  title: string;
  summary: string;
  image: string;
  tags: string[];
  link: string;
  year: string;
  index: number;
}

export function ProjectCard({
  title,
  summary,
  image,
  tags,
  link,
  year,
  index,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group"
    >
      <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-shadow duration-500 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/50">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <motion.div
            ref={imageRef}
            style={{ y: imageY }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 text-neutral-400 transition-transform duration-700 group-hover:scale-105 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 dark:text-neutral-500">
              <svg
                className="h-16 w-16 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                />
              </svg>
            </div>
          </motion.div>
          <div className="absolute bottom-3 right-3 rounded-lg bg-white/80 px-2.5 py-1 text-xs font-medium text-neutral-600 backdrop-blur-sm dark:bg-neutral-900/80 dark:text-neutral-400">
            {year}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {summary}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={link}
              className="group/link flex items-center gap-1.5 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              View project
              <motion.span
                className="inline-block transition-transform group-hover/link:translate-x-0.5"
              >
                →
              </motion.span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
