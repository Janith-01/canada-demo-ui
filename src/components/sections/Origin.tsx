"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxImage({
  src,
  alt,
  className,
  range = [-30, 30],
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  range?: [number, number];
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], range);

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ y }} className="absolute inset-[-10%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

export default function Origin() {
  return (
    <>
      <section id="origin" className="bg-cream-100 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16">
          <ParallaxImage
            src="/images/coconuts-harvest.webp"
            alt="Freshly harvested king coconuts in Sri Lanka"
            className="relative aspect-[4/5] w-full rounded-3xl"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />

          <div className="max-w-lg">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-coconut-600">
              Our Origin
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-forest-800 sm:text-4xl">
              From the tropical heart of Sri Lanka
            </h2>
            <p className="mt-6 text-forest-600">
              Every bottle starts with the King Coconut — a variety native to
              Sri Lanka&apos;s southern coast, prized for its naturally
              sweet, electrolyte-rich water. We work directly with
              smallholder farmers who hand-harvest each coconut at peak
              ripeness, then cold-press and bottle it within hours — never
              from concentrate.
            </p>
            <p className="mt-4 text-forest-600">
              No orchard is more than a day&apos;s drive from our bottling
              line, keeping every bottle as close to straight-from-the-husk
              as it gets.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden sm:h-[85vh]">
        <ParallaxImage
          src="/images/bottle-condensation-macro.webp"
          alt="Macro detail of a condensation-covered Cap Pure bottle"
          className="absolute inset-0 h-full w-full"
          range={[-50, 50]}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/20 to-forest-900/20" />
        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <p className="font-display text-4xl font-semibold text-cream-100 sm:text-5xl lg:text-6xl">
            Clean. Green. Goodness.
          </p>
        </div>
      </section>
    </>
  );
}
