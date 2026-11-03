"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import gsap, { ScrollTrigger } from "@/lib/gsap";

const stats = [
  { label: "Natural Electrolytes" },
  { label: "0% Added Sugar" },
  { label: "100% Pure" },
];

const statsContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const statItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !bottleRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        defaults: { ease: "none" },
      });

      tl.fromTo(
        bottleRef.current,
        {
          rotateY: -15,
          rotateX: 5,
          scale: 1,
          y: -40,
          "--shadow-blur": "22px",
          "--shadow-y": "26px",
          "--shadow-opacity": 0.18,
        },
        {
          rotateY: 15,
          rotateX: -5,
          scale: 1.08,
          y: 40,
          "--shadow-blur": "50px",
          "--shadow-y": "54px",
          "--shadow-opacity": 0.32,
        },
        0,
      );

      if (ringRef.current) {
        tl.fromTo(
          ringRef.current,
          { rotate: -7.5 },
          { rotate: 7.5 },
          0,
        );
      }
    }, sectionRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-cream-100"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center gap-10 px-6 py-28 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-16">
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="font-display font-semibold tracking-tight text-forest-800 [font-size:clamp(3rem,8vw,6.5rem)] [line-height:0.98]">
            Hydrate Your Flow
          </h1>
          <p className="mt-6 max-w-md text-lg text-forest-600">
            Single-origin coconut water, bottled at the source. No added
            sugar, no shortcuts — just pure hydration.
          </p>

          <motion.div
            variants={statsContainer}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap items-start justify-center gap-6 lg:justify-start"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statItem}
                className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-forest-800/15 bg-cream-50 p-3 text-center shadow-sm"
              >
                <span className="text-xs font-medium leading-tight text-forest-700">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative flex w-56 shrink-0 items-center justify-center [perspective:1000px] sm:w-72 lg:w-80">
          <div
            ref={ringRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto h-[130%] w-[130%] rounded-full border-[14px] border-coconut-500/20 bg-coconut-500/10"
          />

          <div
            ref={bottleRef}
            style={{ transformStyle: "preserve-3d" }}
            className="bottle-depth relative aspect-[3/4] w-full"
          >
            <Image
              src="/images/hero-bottle-front.webp"
              alt="Cap Pure coconut water bottle"
              fill
              preload
              sizes="(min-width: 1024px) 320px, 288px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-forest-500"
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 5L8 11L14 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
