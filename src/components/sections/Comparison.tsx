"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Minus } from "lucide-react";

const rows = [
  "Low in Sugar",
  "High Electrolytes",
  "Eco Glass Bottling",
  "No Preservatives",
  "Dietary Friendly",
  "Certified Quality",
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Comparison() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <h2 className="text-3xl font-semibold text-forest-800 sm:text-4xl">
          Cap Pure vs. the Rest
        </h2>
        <p className="mt-3 max-w-xl text-forest-600">
          See how Cap Pure stacks up against regular, mass-market coconut
          water.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-10 flex flex-col gap-3"
        >
          <div className="grid grid-cols-[1.3fr_0.9fr_0.9fr] items-center gap-2 px-1 sm:gap-4">
            <span />
            <span className="text-center text-xs font-semibold uppercase tracking-wide text-forest-500 sm:text-sm">
              Regular
            </span>
            <span className="text-center text-xs font-semibold uppercase tracking-wide text-forest-800 sm:text-sm">
              Cap Pure
            </span>
          </div>

          {rows.map((label) => (
            <motion.div
              key={label}
              variants={rowVariant}
              className="grid grid-cols-[1.3fr_0.9fr_0.9fr] items-stretch gap-2 sm:gap-4"
            >
              <div className="flex items-center text-sm font-medium text-forest-800 sm:text-base">
                {label}
              </div>
              <div className="flex items-center justify-center rounded-xl bg-sand-200/50 py-3">
                <Minus size={18} className="text-forest-400" />
              </div>
              <div className="flex items-center justify-center rounded-xl bg-forest-800 py-3 text-cream-100">
                <CheckCircle2 size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
