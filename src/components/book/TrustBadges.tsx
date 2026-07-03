import { tripDetails } from "@/data/booking";

function ShieldIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="#C8A04D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4 L40 10 V24 Q40 38 24 44 Q8 38 8 24 V10 Z" />
      <path d="M17 24l5 5 9-9" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="#C8A04D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 26v-2a14 14 0 0 1 28 0v2" />
      <rect x="6" y="26" width="8" height="12" rx="2" />
      <rect x="34" y="26" width="8" height="12" rx="2" />
      <path d="M38 38v2a6 6 0 0 1-6 6h-6" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="#C8A04D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="13" r="5" />
      <circle cx="11" cy="17" r="4" />
      <circle cx="37" cy="17" r="4" />
      <path d="M14 36 Q14 26 24 26 Q34 26 34 36" />
      <path d="M2 34 Q2 27 11 27" />
      <path d="M46 34 Q46 27 37 27" />
    </svg>
  );
}

const badges = [
  {
    Icon: ShieldIcon,
    title: "Secure Booking",
    body: "Your payment is protected by Stripe.",
  },
  {
    Icon: HeadsetIcon,
    title: "Have Questions?",
    body: `We're here to help. ${tripDetails.contactEmail}`,
  },
  {
    Icon: GroupIcon,
    title: "Small Group Experience",
    body: "Limited spots available for a more personal journey.",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#050505] px-6 md:px-16 lg:px-24 pb-16">
      <div className="max-w-[1280px] mx-auto border-t border-[#C8A04D]/15 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 md:divide-x md:divide-[#C8A04D]/15">
          {badges.map(({ Icon, title, body }) => (
            <div key={title} className="flex items-start gap-4 md:px-8 first:md:pl-0">
              <Icon />
              <div>
                <h4 className="font-sans text-xs tracking-[0.18em] uppercase text-[#C8A04D] mb-2">
                  {title}
                </h4>
                <p className="font-sans text-sm text-[#B7B7B0] leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
