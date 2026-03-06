"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function SectionDivider() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-15%" });

  return (
    <div className="mx-auto w-full max-w-3xl px-6">
      <motion.div
        ref={lineRef}
        className="h-px w-full origin-left bg-gradient-to-r from-transparent to-transparent via-gray-300"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
