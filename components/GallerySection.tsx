"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "motion/react";
import { gallery } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null && i < gallery.images.length - 1 ? i + 1 : i,
    );
  }, []);

  const close = useCallback(() => setLightboxIndex(null), []);

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, close, goPrev, goNext]);

  return (
    <section ref={sectionRef} id="gallery" className="relative w-full px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-700" />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-500">
              Gallery
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-700" />
          </div>
        </Reveal>

        {/* Masonry Grid */}
        <div className="columns-2 gap-4 md:columns-3">
          {gallery.images.map((image, index) => (
            <GalleryItem
              key={index}
              image={image}
              index={index}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery.images[lightboxIndex].src}
                alt={gallery.images[lightboxIndex].alt}
                className="w-full object-contain"
              />
              <button
                onClick={close}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                aria-label="Close lightbox"
              >
                ×
              </button>
              {/* Nav arrows */}
              {lightboxIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}
              {lightboxIndex < gallery.images.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                  aria-label="Next image"
                >
                  ›
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface GalleryItemProps {
  image: { src: string; orientation: string; alt: string };
  index: number;
  onClick: () => void;
}

function GalleryItem({ image, index, onClick }: GalleryItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const colOffset = index % 3;

  return (
    <motion.div
      ref={ref}
      className="mb-4 break-inside-avoid"
      initial={{ opacity: 0, y: 40 + colOffset * 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: colOffset * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <button
        onClick={onClick}
        className="group relative w-full overflow-hidden rounded-xl"
      >
        <div
          className={`relative w-full overflow-hidden transition-transform duration-700 group-hover:scale-105 ${
            image.orientation === "vertical" ? "aspect-[3/4]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </button>
    </motion.div>
  );
}
