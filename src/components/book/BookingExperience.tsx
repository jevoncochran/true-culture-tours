"use client";

import { useState } from "react";
import { Occupancy, occupancyOptions, earlyBird } from "@/data/booking";
import OccupancyOption from "@/components/book/OccupancyOption";
import IncludedLists from "@/components/book/IncludedLists";
import PaymentInfoBox from "@/components/book/PaymentInfoBox";
import BookingForm from "@/components/book/BookingForm";

export default function BookingExperience() {
  const [travelers, setTravelers] = useState(1);
  const [occupancy, setOccupancy] = useState<Occupancy>("private");

  // Double (shared) occupancy requires an even number of travelers — we won't
  // pair strangers or eat the discount on an odd group. So the traveler count
  // options adapt to the chosen occupancy.
  const travelerOptions =
    occupancy === "shared" ? [2, 4, 6] : [1, 2, 3, 4, 5, 6];

  const handleTravelersChange = (next: number) => {
    setTravelers(next);
  };

  const handleOccupancyChange = (next: Occupancy) => {
    setOccupancy(next);
    // When switching to double occupancy, snap an odd count up to the next even.
    if (next === "shared" && travelers % 2 !== 0) {
      setTravelers(travelers + 1);
    }
  };

  return (
    <section className="bg-[#050505] px-6 md:px-16 lg:px-24 py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left column */}
        <div>
          <h2 className="font-sans text-xl tracking-[0.05em] uppercase text-[#C8A04D] mb-6">
            Choose Your Experience
          </h2>
          {earlyBird.active && (
            <p className="font-sans text-sm text-[#B7B7B0] leading-relaxed mb-6">
              <span className="text-[#C8A04D] font-semibold tracking-[0.05em] uppercase text-xs">
                Early Bird Pricing —{" "}
              </span>
              reserve by {earlyBird.deadline} to lock in these rates. Prices
              increase after the early bird period ends.
            </p>
          )}
          <div className="space-y-4 mb-10">
            {occupancyOptions.map((opt) => (
              <OccupancyOption
                key={opt.id}
                option={opt}
                selected={occupancy === opt.id}
                onSelect={() => handleOccupancyChange(opt.id)}
              />
            ))}
          </div>
          <IncludedLists />
          <div className="mt-10">
            <PaymentInfoBox />
          </div>
        </div>

        {/* Right column */}
        <div>
          <BookingForm
            occupancy={occupancy}
            onOccupancyChange={handleOccupancyChange}
            travelers={travelers}
            onTravelersChange={handleTravelersChange}
            travelerOptions={travelerOptions}
          />
        </div>
      </div>
    </section>
  );
}
