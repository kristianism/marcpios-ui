"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { gallery } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-h-[80vh] max-w-[80vw] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-[60vh] w-[60vw] items-center justify-center bg-neutral-900 text-neutral-500">
                <div className="text-center">
                  <svg
                    className="mx-auto mb-4 h-16 w-16 opacity-40"
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
                  <p className="text-sm">{gallery.images[lightboxIndex].alt}</p>
                </div>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              >
                ×
              </button>
              {/* Nav arrows */}
              {lightboxIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(lightboxIndex - 1);
                  }}
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                >
                  ‹
                </button>
              )}
              {lightboxIndex < gallery.images.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(lightboxIndex + 1);
                  }}
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
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
  image: { orientation: string; alt: string };
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
          className={`w-full bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 transition-transform duration-700 group-hover:scale-105 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 ${
            image.orientation === "vertical" ? "aspect-[3/4]" : "aspect-[4/3]"
          }`}
        >
          <div className="flex h-full items-center justify-center text-neutral-400 dark:text-neutral-500">
            <svg
              className="h-10 w-10 opacity-30"
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
        </div>
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </button>
    </motion.div>
  );
}
