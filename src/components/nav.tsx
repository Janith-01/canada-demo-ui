"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Nutrition", href: "#nutrition" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Shop", href: "#shop" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-6"
    >
      <nav className="flex items-center gap-1 rounded-full border border-forest-800/10 bg-cream-50/70 px-2 py-2 shadow-sm backdrop-blur-md">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-2 text-sm font-medium text-forest-700 transition-colors hover:bg-forest-800/5 hover:text-forest-900"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
