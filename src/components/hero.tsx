"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-sand">
      <Image
        src="/images/bg-texture-gold.webp"
        alt=""
        fill
        priority
        className="object-cover opacity-60"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 py-24 sm:px-10 lg:flex-row lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-forest-500">
            Project shell — Phase 0
          </span>
          <h1 className="mt-4 text-4xl text-forest-800 sm:text-5xl">
            Pure coconut water, straight from the source.
          </h1>
          <p className="mt-6 max-w-md text-base text-forest-600">
            Design tokens, fonts, and assets are wired up. Sections build into
            this shell next.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative aspect-[3/4] w-56 shrink-0 sm:w-72"
        >
          <Image
            src="/images/hero-bottle-front.webp"
            alt="Bottle of coconut water"
            fill
            priority
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
