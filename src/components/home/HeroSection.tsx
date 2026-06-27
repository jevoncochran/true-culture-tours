"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

function HeroOrnament() {
  return (
    <svg
      width="36"
      height="44"
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 1 L38 7 L38 27 Q38 40 20 47 Q2 40 2 27 L2 7 Z"
        stroke="#C8A04D"
        strokeWidth="0.8"
        fill="none"
        opacity="0.35"
      />
      <line x1="20" y1="5" x2="20" y2="37" stroke="#C8A04D" strokeWidth="1.2" />
      <line x1="13" y1="11" x2="13" y2="22" stroke="#C8A04D" strokeWidth="1.2" />
      <line x1="27" y1="11" x2="27" y2="22" stroke="#C8A04D" strokeWidth="1.2" />
      <path
        d="M11 5 L13 11 L15 5"
        stroke="#C8A04D"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M25 5 L27 11 L29 5"
        stroke="#C8A04D"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="13" y1="22" x2="27" y2="22" stroke="#C8A04D" strokeWidth="1.2" />
      <path
        d="M16 37 L20 43 L24 37"
        stroke="#C8A04D"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Hero video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://pub-2b760584230e42dbb44c98d7d0ee442e.r2.dev/true_culture_tours_hero_poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://pub-2b760584230e42dbb44c98d7d0ee442e.r2.dev/true_culture_tours_hero_video.mp4"
          type="video/mp4"
        />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-8 max-w-4xl mx-auto pt-24">
        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-serif text-[clamp(3.2rem,8vw,8rem)] font-light leading-[1.05] tracking-tight text-[#F8F8F5] sm:whitespace-nowrap"
        >
          Travel Beyond Tourism.
        </motion.h1>

        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="my-6 flex items-center gap-4"
        >
          <div className="h-px w-16 sm:w-48 bg-[#C8A04D]" />
          <HeroOrnament />
          <div className="h-px w-16 sm:w-48 bg-[#C8A04D]" />
        </motion.div>

        <motion.p
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-sans text-base md:text-xl text-[#F8F8F5]/90 leading-relaxed w-full max-w-2xl"
        >
          Immersive cultural journeys rooted in authenticity, connection, and unforgettable experiences.
        </motion.p>

        <motion.div
          custom={0.85}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
        >
          <Button variant="primary" href="/experience" className="w-full sm:w-auto">
            Explore Tours&nbsp;&nbsp;→
          </Button>
          <Button variant="secondary" href="/book" className="w-full sm:w-auto">
            Book Now&nbsp;&nbsp;→
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
