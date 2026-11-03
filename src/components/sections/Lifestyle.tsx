"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const images = [
  {
    src: "/images/bottle-lifestyle-hand.webp",
    alt: "Hand holding a Cap Pure bottle backlit at golden hour",
    caption: "Fuel Your Flow",
  },
  {
    src: "/images/bottle-flatlay-wellness.webp",
    alt: "Cap Pure bottle flatlay beside a rolled yoga mat",
    caption: "Hydration for Every Moment",
  },
];

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Lifestyle() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:px-10 lg:grid-cols-2 lg:gap-8">
        {images.map(({ src, alt, caption }) => (
          <div
            key={src}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand-200"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariant}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-900/70 via-forest-900/0 to-transparent" />
            <span className="absolute bottom-6 left-6 font-display text-2xl font-semibold text-cream-100 sm:text-3xl">
              {caption}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
