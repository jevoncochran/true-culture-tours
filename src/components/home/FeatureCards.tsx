"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GoldDivider from "@/components/ui/GoldDivider";
import AuthenticCultureIcon from "@/components/icons/AuthenticCultureIcon";
import SmallGroupIcon from "@/components/icons/SmallGroupIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import { ElementType } from "react";

const features: {
  Icon: ElementType;
  title: string;
  body: string;
}[] = [
  {
    Icon: AuthenticCultureIcon,
    title: "Authentic Culture",
    body: "Experience the real Quibdó through its people, traditions, music, and cuisine.",
  },
  {
    Icon: SmallGroupIcon,
    title: "Small Group Access",
    body: "Intimate group sizes that unlock genuine connections and exclusive experiences.",
  },
  {
    Icon: HeartIcon,
    title: "Meaningful Connection",
    body: "More than a trip—build relationships, create impact, and take memories home.",
  },
];

export default function FeatureCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#050505] py-20 md:py-28">
      {/* Desktop: 3-column with vertical gold dividers */}
      <div className="hidden md:flex max-w-[1280px] mx-auto px-20 divide-x divide-[#C8A04D]/25">
        {features.map(({ Icon, title, body }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center text-center px-10 xl:px-14"
          >
            <Icon className="text-[#C8A04D] mb-5" size={48} />
            <GoldDivider className="mb-5" width="w-8" />
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F8F8F5] mb-3">
              {title}
            </h3>
            <p className="font-sans text-sm text-[#B7B7B0] leading-relaxed max-w-[210px]">
              {body}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: stacked rows with horizontal gold dividers, icon left */}
      <div className="flex md:hidden flex-col px-6 divide-y divide-[#C8A04D]/25">
        {features.map(({ Icon, title, body }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
            className="flex items-start gap-6 py-10"
          >
            <Icon className="text-[#C8A04D] shrink-0 mt-1" size={40} />
            <div>
              <GoldDivider className="mb-3" width="w-6" />
              <h3 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F8F8F5] mb-2">
                {title}
              </h3>
              <p className="font-sans text-sm text-[#B7B7B0] leading-relaxed">
                {body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
