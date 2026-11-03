const PHRASE = "100% PURE · ZERO ADDITIVES · SRI LANKA SOURCED · ";
const REPEATED = PHRASE.repeat(6);

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-cream-100 py-20 sm:py-28">
      <div className="relative -mx-[8%] w-[116%] -rotate-2 overflow-hidden bg-forest-800 py-6 shadow-xl sm:py-8">
        <div className="rotate-2">
          <div
            aria-hidden="true"
            className="flex w-max animate-marquee items-center gap-0"
          >
            <span className="shrink-0 whitespace-nowrap text-2xl font-bold uppercase tracking-wide text-cream-100 sm:text-3xl">
              {REPEATED}
            </span>
            <span className="shrink-0 whitespace-nowrap text-2xl font-bold uppercase tracking-wide text-cream-100 sm:text-3xl">
              {REPEATED}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
