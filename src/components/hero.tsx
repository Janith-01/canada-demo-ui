"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import StatBadges from "@/components/stat-badges";
import ScrollCue from "@/components/scroll-cue";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-sand"
    >
      <Image
        src="/images/bg-texture-gold.webp"
        alt=""
        fill
        priority
        className="object-cover opacity-60"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 pt-28 pb-16 sm:px-10 lg:flex-row lg:gap-16 lg:pt-24">
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm font-medium uppercase tracking-[0.2em] text-forest-500"
          >
            100% Single-Origin Coconut Water
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-6xl leading-[0.95] tracking-tight text-forest-800 sm:text-7xl lg:text-8xl"
          >
            Hydrate
            <br />
            Your <span className="text-coconut-500">Flow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-6 max-w-md text-lg text-forest-600"
          >
            Harvested at peak freshness and bottled with nothing added.
            Natural electrolytes, zero sugar, every bottle.
          </motion.p>

          <StatBadges />
        </div>

        <motion.div
          style={{ y: parallaxY, scale: parallaxScale }}
          className="relative aspect-[3/4] w-56 shrink-0 sm:w-72 lg:w-80"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-full w-full"
          >
            <Image
              src="/images/hero-bottle-front.webp"
              alt="Bottle of coconut water"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      <ScrollCue />
    </section>
  );
}
