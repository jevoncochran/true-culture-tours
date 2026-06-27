import { includedItems, notIncludedItems } from "@/data/booking";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A04D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A04D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function IncludedLists() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#C8A04D] mb-4">
          What&apos;s Included
        </h3>
        <ul className="space-y-3">
          {includedItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon />
              <span className="font-sans text-sm text-[#F8F8F5]/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#C8A04D] mb-4">
          What&apos;s Not Included
        </h3>
        <ul className="space-y-3">
          {notIncludedItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CrossIcon />
              <span className="font-sans text-sm text-[#B7B7B0]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
