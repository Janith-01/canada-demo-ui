"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  {
    label: "7 Electrolytes",
    icon: (
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    ),
  },
  {
    label: "HACCP · GMP · ISO",
    icon: (
      <path d="m9 12 2 2 4-4M12 3c2.5 1.5 5 2 8 2a9 9 0 0 1-8 15 9 9 0 0 1-8-15c3 0 5.5-.5 8-2Z" />
    ),
  },
  {
    label: "0g Added Sugar",
    icon: (
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 3.5 18 2c1.5 5 2 10-3 10M11 20a7 7 0 0 0 7-7M11 20c-1 0-1.5-.5-1.5-1.5" />
    ),
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.5 },
  },
};

const badge: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

export default function StatBadges() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
    >
      {stats.map((stat) => (
        <motion.li
          key={stat.label}
          variants={badge}
          className="flex items-center gap-2 rounded-full border border-forest-800/10 bg-cream-50/80 px-4 py-2 text-sm font-medium text-forest-700 shadow-sm backdrop-blur-sm"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-coconut-600"
          >
            {stat.icon}
          </svg>
          {stat.label}
        </motion.li>
      ))}
    </motion.ul>
  );
}
