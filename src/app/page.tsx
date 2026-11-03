import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Benefits from "@/components/sections/Benefits";
import Comparison from "@/components/sections/Comparison";
import Origin from "@/components/sections/Origin";
import Testimonials from "@/components/sections/Testimonials";
import Lifestyle from "@/components/sections/Lifestyle";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Hero />
        <Marquee />
        <Benefits />
        <Comparison />
        <Origin />
        <Testimonials />
        <Lifestyle />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
