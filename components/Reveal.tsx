"use client";

import { useRef } from "react";
import { motion, useInView, type Variant } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  once?: boolean;
  blur?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 24,
  x = 0,
  once = true,
  blur = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const hidden: Variant = {
    opacity: 0,
    y,
    x,
    filter: blur ? "blur(4px)" : "blur(0px)",
  };

  const visible: Variant = {
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
  };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealChild({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
