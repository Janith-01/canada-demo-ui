"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Nutrition", href: "#nutrition" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Shop all", href: "#shop" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="font-display text-lg font-semibold text-forest-800"
        >
          Cap Pure
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-forest-800/10 bg-cream-100/70 px-2 py-2 shadow-sm backdrop-blur-md lg:flex"
        >
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

        <div className="hidden lg:block">
          <a
            href="#shop"
            className="rounded-full bg-forest-800 px-5 py-2.5 text-sm font-semibold text-cream-100 transition-colors hover:bg-forest-700"
          >
            Buy now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-800/10 bg-cream-100/70 text-forest-800 backdrop-blur-md lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-4 mb-4 flex flex-col gap-1 rounded-3xl border border-forest-800/10 bg-cream-100/90 p-3 shadow-sm backdrop-blur-md lg:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-3 text-sm font-medium text-forest-700 hover:bg-forest-800/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#shop"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-forest-800 px-4 py-3 text-center text-sm font-semibold text-cream-100 hover:bg-forest-700"
            >
              Buy now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
