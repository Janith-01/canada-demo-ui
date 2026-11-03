"use client";

import { motion, type Variants } from "framer-motion";
import { BadgeCheck, Star } from "lucide-react";

const testimonials = [
  {
    name: "Amara J.",
    quote:
      "Lighter and sweeter than any coconut water I've had — tastes like it was bottled an hour ago.",
  },
  {
    name: "Devin R.",
    quote:
      "My go-to after every ride. No weird aftertaste, no crash, just clean hydration.",
  },
  {
    name: "Priya K.",
    quote:
      "The glass bottle alone sold me, but the taste is what kept me ordering every month.",
  },
  {
    name: "Marcus T.",
    quote:
      "Finally a coconut water that doesn't taste like it came from a can. Genuinely pure.",
  },
  {
    name: "Soo-Jin L.",
    quote:
      "Replaced my sports drink entirely. My electrolytes have never been happier.",
  },
  {
    name: "Elena V.",
    quote:
      "Gifted a case to my whole yoga studio — everyone asked where to buy it the next day.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-sand-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="max-w-2xl text-3xl font-semibold text-forest-800 sm:text-4xl">
          Don&apos;t Just Take Our Word For It
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3"
        >
          {testimonials.map(({ name, quote }) => (
            <motion.div
              key={name}
              variants={item}
              className="mb-6 break-inside-avoid rounded-2xl border border-coconut-500/20 bg-cream-50 p-6"
            >
              <div className="flex gap-0.5 text-coconut-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-forest-700">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-2">
                <span className="text-sm font-semibold text-forest-800">
                  {name}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-forest-800/5 px-2 py-0.5 text-xs font-medium text-forest-600">
                  <BadgeCheck size={12} />
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
