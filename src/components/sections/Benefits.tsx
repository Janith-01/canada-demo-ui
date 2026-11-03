"use client";

import { motion, type Variants } from "framer-motion";
import {
  BadgeCheck,
  Droplets,
  GlassWater,
  HeartHandshake,
  Leaf,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Single Ingredient",
    description: "Nothing but coconut water in the bottle — no concentrates, no blends, no fillers.",
  },
  {
    icon: Droplets,
    title: "Naturally Superior Hydration",
    description: "Rich in natural electrolytes that replenish faster than engineered sports drinks.",
  },
  {
    icon: GlassWater,
    title: "Eco-Friendly Glass Bottling",
    description: "Packaged in reusable glass to keep plastic out of the ocean and off the shelf.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Quality Excellence",
    description: "HACCP, GMP, and ISO 22000 certified from source to seal.",
  },
  {
    icon: BadgeCheck,
    title: "Dietary Friendly & Clean",
    description: "Vegan, gluten-free, and non-GMO — built to fit any clean-eating lifestyle.",
  },
  {
    icon: HeartHandshake,
    title: "200% Satisfaction Guarantee",
    description: "Love it or we'll refund you twice over — no questions asked.",
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

export default function Benefits() {
  return (
    <section id="benefits" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="max-w-2xl text-3xl font-semibold text-forest-800 sm:text-4xl">
          Standards for Modern Wellness Living
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="rounded-2xl bg-sand-200 p-8 transition-[transform,box-shadow] duration-300 lg:hover:-translate-y-1 lg:hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-cream-100">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-forest-800">
                {title}
              </h3>
              <p className="mt-2 text-sm text-forest-600">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
