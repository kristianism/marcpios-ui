"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";

// ── Content pools ────────────────────────────────────────────────────────────

const CODE_SNIPPETS = [
  'const portfolio = await optimize(assets);',
  'function calculateRisk(exposure) {',
  '  return alpha * beta + epsilon;',
  'SELECT SUM(revenue) FROM q4_earnings',
  'if (sharpeRatio > 1.5) execute();',
  'async fn reconcile(ledger: &mut Vec<Entry>)',
  'model.fit(X_train, y_train, epochs=50)',
  'npm run build && deploy --prod',
  'export const API = process.env.GATEWAY',
  'git commit -m "deploy v3.2.1"',
  'docker compose up -d --build',
  'const roi = (gain - cost) / cost;',
  'await db.transaction(async (tx) => {',
  '  INSERT INTO trades VALUES ($1, $2)',
  'pipe(filter(isValid), map(transform))',
  'kubectl apply -f deployment.yaml',
  'grep -r "TODO" src/ | wc -l',
  'const ws = new WebSocket(tickerUrl);',
  'reduce((sum, val) => sum + val, 0)',
  'import { useMarketData } from "@/hooks"',
];

const COMPUTATIONS = [
  { expr: "2847 × 1.035", result: "2,946.645" },
  { expr: "∑ R(t) / n", result: "0.0847" },
  { expr: "σ = √(Σ(xi−μ)²/n)", result: "12.34" },
  { expr: "NPV = −10000 + Σ CF/(1+r)ⁿ", result: "3,241.58" },
  { expr: "IRR", result: "14.7%" },
  { expr: "β = Cov(Ri,Rm)/Var(Rm)", result: "1.23" },
  { expr: "Sharpe = (Rp−Rf)/σp", result: "1.87" },
  { expr: "P/E = 142.50 / 8.23", result: "17.31" },
  { expr: "CAGR = (Vf/Vi)^(1/t)−1", result: "11.2%" },
  { expr: "Δ hedge ratio", result: "0.634" },
  { expr: "VaR (95%)", result: "$24,180" },
  { expr: "EPS = NI / shares", result: "$4.72" },
  { expr: "WACC", result: "8.35%" },
  { expr: "duration × Δy", result: "−2.14%" },
  { expr: "Σ(w_i × r_i)", result: "0.0923" },
];

// ── Types ────────────────────────────────────────────────────────────────────

interface FloatingItem {
  x: number;          // 0-1 horizontal position
  baseY: number;      // absolute Y in document space (px)
  depth: number;      // 0 = far (slow), 1 = close (fast parallax)
  opacity: number;    // base opacity
  fontSize: number;
  scrollStart: number; // scroll position (px) where typing begins
  scrollSpan: number;  // scroll distance (px) to fully type out
  type: "code" | "computation";
  text: string;        // full text to reveal
  result?: string;     // for computations
}

// ── Deterministic seeded PRNG ────────────────────────────────────────────────

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── Component ────────────────────────────────────────────────────────────────

interface ScrollingCodeBackgroundProps {
  /** Total items scattered across the page */
  itemCount?: number;
  /** How many page-heights worth of space to distribute items across */
  spread?: number;
}

export function ScrollingCodeBackground({
  itemCount = 100,
  spread = 6,
}: ScrollingCodeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const itemsRef = useRef<FloatingItem[]>([]);
  const rafRef = useRef<number>(0);
  const scrollRef = useRef<number>(0);

  // Build items once, deterministically
  const buildItems = useCallback(() => {
    const rng = mulberry32(42);
    const totalHeight = window.innerHeight * spread;
    const items: FloatingItem[] = [];

    for (let i = 0; i < itemCount; i++) {
      const isCode = rng() > 0.4; // 60% code, 40% computation
      const depth = 0.15 + rng() * 0.85;           // parallax depth
      const baseY = rng() * totalHeight - window.innerHeight * 0.3;
      const fontSize = 10 + rng() * 4;              // 10-14px

      if (isCode) {
        const idx = Math.floor(rng() * CODE_SNIPPETS.length);
        items.push({
          x: 0.02 + rng() * 0.92,
          baseY,
          depth,
          opacity: 0.08 + rng() * 0.14,
          fontSize,
          scrollStart: Math.max(0, baseY - window.innerHeight * 0.8),
          scrollSpan: 200 + rng() * 400,
          type: "code",
          text: CODE_SNIPPETS[idx],
        });
      } else {
        const idx = Math.floor(rng() * COMPUTATIONS.length);
        const comp = COMPUTATIONS[idx];
        items.push({
          x: 0.02 + rng() * 0.92,
          baseY,
          depth,
          opacity: 0.08 + rng() * 0.14,
          fontSize,
          scrollStart: Math.max(0, baseY - window.innerHeight * 0.8),
          scrollSpan: 200 + rng() * 400,
          type: "computation",
          text: comp.expr,
          result: comp.result,
        });
      }
    }

    itemsRef.current = items;
  }, [itemCount, spread]);

  // Render loop
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const isDark = document.documentElement.classList.contains("dark");
    const scroll = scrollRef.current;

    for (const item of itemsRef.current) {
      // Parallax: items with higher depth move faster relative to scroll
      const parallaxY = item.baseY - scroll * (0.3 + item.depth * 0.7);
      // Skip if off-screen
      if (parallaxY < -50 || parallaxY > h + 50) continue;

      // Typing progress based on scroll position
      const scrollProgress = Math.max(
        0,
        Math.min(1, (scroll - item.scrollStart) / item.scrollSpan),
      );

      // Build displayed text
      let displayText: string;
      if (item.type === "computation") {
        if (scrollProgress < 0.6) {
          // Show partial expression
          const exprChars = Math.ceil(
            (scrollProgress / 0.6) * item.text.length,
          );
          displayText = item.text.slice(0, exprChars);
          // Show blinking cursor effect
          if (exprChars < item.text.length && exprChars > 0) {
            displayText += "▌";
          }
        } else {
          // Show full expression + progressively reveal result
          const resultProgress = (scrollProgress - 0.6) / 0.4;
          const resultChars = Math.ceil(
            resultProgress * (item.result?.length ?? 0),
          );
          displayText =
            item.text + " = " + (item.result?.slice(0, resultChars) ?? "");
          if (resultChars < (item.result?.length ?? 0) && resultChars > 0) {
            displayText += "▌";
          }
        }
      } else {
        const chars = Math.ceil(scrollProgress * item.text.length);
        displayText = item.text.slice(0, chars);
        if (chars < item.text.length && chars > 0) {
          displayText += "▌";
        }
      }

      if (displayText.length === 0) continue;

      // Opacity fades in as text appears, fades out near edges
      const edgeFade =
        parallaxY < 60
          ? parallaxY / 60
          : parallaxY > h - 60
            ? (h - parallaxY) / 60
            : 1;
      const alpha = item.opacity * scrollProgress * Math.max(0, edgeFade);
      if (alpha < 0.005) continue;

      const lightAlpha = alpha * 2.5;
      const color = isDark
        ? `rgba(140, 220, 255, ${alpha})`
        : `rgba(15, 50, 80, ${lightAlpha})`;

      ctx.font = `${item.fontSize}px "Courier New", "Consolas", monospace`;
      ctx.fillStyle = color;
      ctx.fillText(displayText, item.x * w, parallaxY);
    }

    rafRef.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    buildItems();

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    // Initialise scroll position
    scrollRef.current = window.scrollY;

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", buildItems);

    rafRef.current = requestAnimationFrame(render);

    // Redraw on theme changes
    const observer = new MutationObserver(() => {});
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", buildItems);
      observer.disconnect();
    };
  }, [buildItems, render]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
  );
}
