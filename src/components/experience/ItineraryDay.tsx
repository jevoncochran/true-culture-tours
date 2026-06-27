"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GoldDivider from "@/components/ui/GoldDivider";
import { ItineraryDay as DayType } from "@/data/itinerary";

interface ItineraryDayProps {
  day: DayType;
  index: number;
}

function ActivityItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full border border-[#C8A04D] shrink-0" />
      <span className="font-sans text-sm text-[#B7B7B0]">{label}</span>
    </li>
  );
}

function DayImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full aspect-[4/3] overflow-hidden">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-[#161616] flex items-center justify-center">
          <span className="font-sans text-xs tracking-widest uppercase text-[#B7B7B0]/40">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}

function DayContent({ day }: { day: DayType }) {
  return (
    <div className="flex flex-col justify-center py-6 md:py-0 md:px-10">
      <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C8A04D] mb-2">
        Day {day.day}
      </span>
      <h2 className="font-serif text-3xl md:text-4xl font-light text-[#F8F8F5] mb-3">
        {day.title}
      </h2>
      <GoldDivider className="mb-4" width="w-8" />
      {day.description.split("\n\n").map((para, i) => (
        <p key={i} className="font-sans text-sm text-[#B7B7B0] leading-relaxed mb-3">
          {para}
        </p>
      ))}
      {day.activities.length > 0 && (
        <ul className="space-y-2 mt-2">
          {day.activities.map((activity) => (
            <ActivityItem key={activity} label={activity} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ItineraryDay({ day, index }: ItineraryDayProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const imageLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" as const }}
      className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]"
    >
      {/* Mobile: always stack image then content */}
      <div className="md:hidden">
        <DayImage src={day.image} alt={day.imageAlt} />
        <div className="py-8">
          <DayContent day={day} />
        </div>
      </div>

      {/* Desktop: alternating layout */}
      <div className="hidden md:contents">
        {imageLeft ? (
          <>
            <DayImage src={day.image} alt={day.imageAlt} />
            <DayCircle number={day.day} />
            <DayContent day={day} />
          </>
        ) : (
          <>
            <DayContent day={day} />
            <DayCircle number={day.day} />
            <DayImage src={day.image} alt={day.imageAlt} />
          </>
        )}
      </div>
    </motion.div>
  );
}

function DayCircle({ number }: { number: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex-1 w-px bg-[#C8A04D]/20" />
      <div className="w-10 h-10 rounded-full border border-[#C8A04D] flex items-center justify-center shrink-0 bg-[#050505] z-10">
        <span className="font-sans text-sm text-[#C8A04D]">{number}</span>
      </div>
      <div className="flex-1 w-px bg-[#C8A04D]/20" />
    </div>
  );
}
