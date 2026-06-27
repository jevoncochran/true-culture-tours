import { OccupancyOptionData } from "@/data/booking";

function GroupIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="#C8A04D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <circle cx="17" cy="16" r="5" />
      <circle cx="31" cy="16" r="5" />
      <path d="M7 36 Q7 26 17 26 Q27 26 27 36" />
      <path d="M25 27 Q31 24 41 28 Q41 30 41 36" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="#C8A04D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <circle cx="24" cy="16" r="6" />
      <path d="M10 38 Q10 26 24 26 Q38 26 38 38" />
    </svg>
  );
}

interface OccupancyOptionProps {
  option: OccupancyOptionData;
  selected: boolean;
  onSelect: () => void;
}

export default function OccupancyOption({ option, selected, onSelect }: OccupancyOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left border p-5 flex items-center gap-5 transition-colors ${
        selected ? "border-[#C8A04D]" : "border-[#C8A04D]/25 hover:border-[#C8A04D]/50"
      }`}
    >
      {option.id === "shared" ? <GroupIcon /> : <PersonIcon />}

      <div className="flex-1">
        <p className="font-serif text-xl text-[#F8F8F5]">{option.label}</p>
        <p className="font-sans text-xs text-[#B7B7B0]">{option.description}</p>
      </div>

      <div className="text-right">
        <div className="flex items-baseline justify-end gap-2">
          <span className="font-sans text-xs text-[#B7B7B0] line-through">
            ${option.regularPrice.toLocaleString()}
          </span>
          <span className="font-serif text-xl text-[#F8F8F5]">
            ${option.price.toLocaleString()}
          </span>
        </div>
        <p className="font-sans text-xs text-[#B7B7B0]">{option.priceUnit}</p>
      </div>

      <span
        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
          selected ? "border-[#C8A04D] bg-[#C8A04D]" : "border-[#B7B7B0]/50"
        }`}
      >
        {selected && (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </span>
    </button>
  );
}
