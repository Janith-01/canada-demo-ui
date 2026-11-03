"use client";

import { motion } from "framer-motion";

export default function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.3 }}
      className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-forest-500"
    >
      <span className="text-xs font-medium uppercase tracking-[0.25em]">
        Scroll
      </span>
      <motion.svg
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="m6 9 6 6 6-6" />
      </motion.svg>
    </motion.div>
  );
}
