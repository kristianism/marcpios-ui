"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";

interface BackgroundDotsProps {
  dotSize?: number;
  opacity?: number;
}

export function BackgroundDots({
  dotSize = 1.5,
  opacity = 0.15,
}: BackgroundDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const spacing = 28;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.classList.contains("dark");
    const color = isDark
      ? `rgba(255,255,255,${opacity})`
      : `rgba(0,0,0,${opacity * 0.6})`;

    for (let x = 0; x < window.innerWidth; x += spacing) {
      for (let y = 0; y < window.innerHeight; y += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
    }
  }, [dotSize, opacity]);

  useEffect(() => {
    draw();
    window.addEventListener("resize", draw);

    // Redraw when theme changes
    const observer = new MutationObserver(draw);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", draw);
      observer.disconnect();
    };
  }, [draw]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  );
}

export function BackgroundGradient() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div className="absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/8 via-transparent to-transparent blur-3xl dark:from-cyan-400/8" />
    </motion.div>
  );
}
