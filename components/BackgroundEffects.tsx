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
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const spacing = 28;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.clearRect(0, 0, w, h);
    const isDark = document.documentElement.classList.contains("dark");
    const color = isDark
      ? `rgba(255,255,255,${opacity})`
      : `rgba(0,0,0,${opacity * 0.6})`;

    ctx.fillStyle = color;
    const size = dotSize * 2;
    for (let x = 0; x < w; x += spacing) {
      for (let y = 0; y < h; y += spacing) {
        ctx.fillRect(x - dotSize, y - dotSize, size, size);
      }
    }
  }, [dotSize, opacity]);

  useEffect(() => {
    draw();

    const debouncedDraw = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(draw, 150);
    };

    window.addEventListener("resize", debouncedDraw);

    const observer = new MutationObserver(draw);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", debouncedDraw);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      observer.disconnect();
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
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
