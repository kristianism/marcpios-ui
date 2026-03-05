"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SectionDivider() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl px-6">
      <div
        ref={lineRef}
        className="h-px w-full origin-left bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800"
      />
    </div>
  );
}
