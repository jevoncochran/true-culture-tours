import { tripDetails } from "@/data/booking";

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A04D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default function PaymentInfoBox() {
  return (
    <div className="border border-[#C8A04D]/30 p-6">
      <div className="flex items-center gap-3 mb-3">
        <CalendarIcon />
        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#C8A04D]">
          Payment Information
        </h3>
      </div>
      <p className="font-sans text-sm text-[#B7B7B0] leading-relaxed mb-4">
        Secure your spot with a non-refundable ${tripDetails.depositAmount}{" "}
        deposit. The remaining balance is due by {tripDetails.balanceDueDate}.
      </p>
      <a
        href="/faq"
        className="font-sans text-sm text-[#C8A04D] hover:brightness-110 transition inline-flex items-center gap-2"
      >
        View full payment &amp; cancellation policy →
      </a>
    </div>
  );
}
