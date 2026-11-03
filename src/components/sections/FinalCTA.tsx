"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FinalCTA() {
  return (
    <section
      id="shop"
      className="relative overflow-hidden bg-forest-800 py-24 text-cream-100 sm:py-32"
    >
      <div className="pointer-events-none absolute -right-6 bottom-0 hidden w-48 sm:block md:w-60 lg:w-72">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[3/4]"
        >
          <Image
            src="/images/hero-bottle-angle.webp"
            alt="Cap Pure bottle"
            fill
            sizes="300px"
            className="object-contain drop-shadow-[0_35px_45px_rgba(26,45,34,0.25)]"
          />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="relative mx-auto max-w-3xl px-6 text-center sm:px-10"
      >
        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Don&apos;t Just Crave It. Get It.
        </h2>
        <a
          href="#shop"
          className="mt-10 inline-block rounded-full bg-coconut-500 px-8 py-4 text-base font-semibold text-forest-900 transition-transform duration-300 hover:scale-105"
        >
          Buy Now
        </a>
      </motion.div>
    </section>
  );
}
