import {
  PaymentMethod,
  calculateCardTotal,
  zelleDetails,
} from "@/data/booking";

const labelClass = "block font-sans text-sm text-[#F8F8F5] mb-2";

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

const methods: { id: PaymentMethod; label: string; note: string }[] = [
  { id: "card", label: "Credit / Debit Card", note: "Processing fee applies" },
  { id: "zelle", label: "Zelle", note: "No fee" },
];

function money(n: number) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

interface PaymentSectionProps {
  depositAmount: number;
  perPerson: number;
  travelers: number;
  method: PaymentMethod;
  onMethodChange: (m: PaymentMethod) => void;
  agreed: boolean;
  onAgreedChange: (value: boolean) => void;
}

export default function PaymentSection({
  depositAmount,
  perPerson,
  travelers,
  method,
  onMethodChange,
  agreed,
  onAgreedChange,
}: PaymentSectionProps) {
  const card = calculateCardTotal(depositAmount, "domestic");
  const breakdown =
    travelers > 1 ? `$${perPerson} × ${travelers} travelers` : `$${perPerson} per traveler`;

  const termsCheckbox = (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={agreed}
        onChange={(e) => onAgreedChange(e.target.checked)}
        className="mt-1 w-4 h-4 accent-[#C8A04D] shrink-0"
        required
      />
      <span className="font-sans text-sm text-[#B7B7B0] leading-relaxed">
        I agree to the{" "}
        <a href="/faq" className="text-[#C8A04D] hover:brightness-110">terms and conditions</a>{" "}
        and understand the deposit is non-refundable.
      </span>
    </label>
  );

  return (
    <div className="space-y-5">
      <div>
        <span className={labelClass}>Payment Method</span>
        <div className="grid grid-cols-2 gap-3">
          {methods.map((m) => {
            const selected = method === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => onMethodChange(m.id)}
                className={`border px-4 py-3 text-left transition-colors ${
                  selected ? "border-[#C8A04D]" : "border-[#C8A04D]/25 hover:border-[#C8A04D]/50"
                }`}
              >
                <span className="block font-sans text-sm text-[#F8F8F5]">{m.label}</span>
                <span className="block font-sans text-[11px] text-[#B7B7B0]">{m.note}</span>
              </button>
            );
          })}
        </div>
      </div>

      {method === "card" ? (
        <>
          <div className="border border-[#C8A04D]/25 p-4 space-y-2">
            <div className="flex justify-between font-sans text-sm text-[#B7B7B0]">
              <span>
                Deposit
                <span className="block text-[11px] text-[#B7B7B0]/70">{breakdown}</span>
              </span>
              <span>${money(card.base)}</span>
            </div>
            <div className="flex justify-between font-sans text-sm text-[#B7B7B0]">
              <span>Card processing fee</span>
              <span>${money(card.fee)}</span>
            </div>
            <div className="h-px bg-[#C8A04D]/20 my-1" />
            <div className="flex justify-between font-sans text-sm text-[#F8F8F5]">
              <span className="font-semibold">Total today</span>
              <span className="font-semibold">${money(card.total)}</span>
            </div>
          </div>

          {termsCheckbox}

          <button
            type="submit"
            className="w-full bg-[#C8A04D] text-[#050505] px-8 py-4 font-sans text-sm font-semibold tracking-[0.08em] uppercase hover:brightness-110 transition-all"
          >
            Secure My Spot – ${money(card.total)}
          </button>

          <p className="font-sans text-[11px] text-[#B7B7B0]/80 leading-relaxed text-center">
            We charge our trip price; the card processing fee is what our payment
            processor (Stripe) charges and is passed on to you. International
            cards incur a higher fee, which will be reflected before your payment
            is confirmed. Avoid the fee by paying with Zelle.
          </p>

          <p className="flex items-center justify-center gap-2 font-sans text-xs text-[#B7B7B0]">
            <LockIcon />
            Secure payment powered by Stripe
          </p>
        </>
      ) : (
        <>
          <div className="border border-[#C8A04D]/25 p-4 space-y-2">
            <div className="flex justify-between font-sans text-sm text-[#F8F8F5]">
              <span className="font-semibold">
                Deposit due
                <span className="block text-[11px] font-normal text-[#B7B7B0]">{breakdown}</span>
              </span>
              <span className="font-semibold">${money(depositAmount)}.00</span>
            </div>
            <p className="font-sans text-[11px] text-[#B7B7B0] leading-relaxed pt-1">
              No processing fee. Send your deposit via Zelle to one of the
              following, then submit this form so we can match your reservation:
            </p>
            <div className="pt-1 font-sans text-sm text-[#C8A04D]">
              <p>{zelleDetails.phone}</p>
              <p>{zelleDetails.email}</p>
            </div>
          </div>

          {termsCheckbox}

          <button
            type="submit"
            className="w-full bg-[#C8A04D] text-[#050505] px-8 py-4 font-sans text-sm font-semibold tracking-[0.08em] uppercase hover:brightness-110 transition-all"
          >
            Reserve My Spot
          </button>

          <p className="font-sans text-[11px] text-[#B7B7B0]/80 leading-relaxed text-center">
            Your spot is held once we confirm your Zelle deposit. We&apos;ll email
            you to confirm.
          </p>
        </>
      )}
    </div>
  );
}
