"use client";

import { useState } from "react";
import {
  Occupancy,
  PaymentMethod,
  occupancyOptions,
  tripDetails,
} from "@/data/booking";
import PaymentSection from "@/components/book/PaymentSection";

const inputClass =
  "w-full bg-[#0d0d0d] border border-[#C8A04D]/25 px-4 py-3 font-sans text-sm text-[#F8F8F5] placeholder:text-[#B7B7B0]/50 focus:border-[#C8A04D] focus:outline-none transition-colors";

const labelClass = "block font-sans text-sm text-[#F8F8F5] mb-2";

interface BookingFormProps {
  occupancy: Occupancy;
  onOccupancyChange: (value: Occupancy) => void;
  travelers: number;
  onTravelersChange: (value: number) => void;
  travelerOptions: number[];
}

export default function BookingForm({
  occupancy,
  onOccupancyChange,
  travelers,
  onTravelersChange,
  travelerOptions,
}: BookingFormProps) {
  const [agreed, setAgreed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const totalDeposit = tripDetails.depositAmount * travelers;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to Stripe / backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-sans text-xl tracking-[0.05em] uppercase text-[#C8A04D] mb-2">
        Reserve Your Spot
      </h2>
      <p className="font-sans text-sm text-[#B7B7B0] mb-8">
        Fill out the form below to get started.
      </p>

      <div className="space-y-5">
        <div>
          <label className={labelClass} htmlFor="fullName">Full Name</label>
          <input id="fullName" name="fullName" type="text" required placeholder="Enter your full name" className={inputClass} />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required placeholder="Enter your email address" className={inputClass} />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" placeholder="Enter your phone number" className={inputClass} />
        </div>

        <div>
          <label className={labelClass} htmlFor="travelers">Number of Travelers</label>
          <select
            id="travelers"
            name="travelers"
            className={inputClass}
            value={travelers}
            onChange={(e) => onTravelersChange(Number(e.target.value))}
          >
            {travelerOptions.map((n) => (
              <option key={n} value={n}>
                {n} Traveler{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className={labelClass}>Occupancy Preference</span>
          <div className="space-y-3">
            {occupancyOptions.map((opt) => {
              const isSelected = occupancy === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onOccupancyChange(opt.id)}
                  className={`w-full text-left border px-4 py-3.5 flex items-center justify-between transition-colors ${
                    isSelected ? "border-[#C8A04D]" : "border-[#C8A04D]/25 hover:border-[#C8A04D]/50"
                  }`}
                >
                  <span className="font-sans text-sm text-[#F8F8F5]">{opt.label}</span>
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? "border-[#C8A04D] bg-[#C8A04D]" : "border-[#B7B7B0]/50"
                    }`}
                  >
                    {isSelected && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <PaymentSection
          depositAmount={totalDeposit}
          perPerson={tripDetails.depositAmount}
          travelers={travelers}
          method={paymentMethod}
          onMethodChange={setPaymentMethod}
          agreed={agreed}
          onAgreedChange={setAgreed}
        />
      </div>
    </form>
  );
}
