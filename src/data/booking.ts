export type Occupancy = "shared" | "private";

export interface OccupancyOptionData {
  id: Occupancy;
  label: string;
  description: string;
  /** Current (early bird) price */
  price: number;
  /** Regular price, shown struck through while early bird pricing is active */
  regularPrice: number;
  priceUnit: string;
}

export const occupancyOptions: OccupancyOptionData[] = [
  {
    id: "shared",
    label: "Shared Occupancy",
    description: "Share a room with another traveler",
    price: 897,
    regularPrice: 1097,
    priceUnit: "per person",
  },
  {
    id: "private",
    label: "Private Occupancy",
    description: "Enjoy a private room",
    price: 997,
    regularPrice: 1197,
    priceUnit: "per person",
  },
];

export const earlyBird = {
  active: true,
  deadline: "July 31, 2026",
};

// Single source of truth for what the trip price covers. Both the booking
// page and the FAQ page render these lists.
export const includedItems = [
  "Hotel accommodations in Quibdó",
  "Daily breakfast",
  "Daily lunch",
  "Welcome dinner",
  "Farewell dinner",
  "Guided city tour",
  "Viche cultural experience",
  "Chocoano cooking class",
  "Sunset on the Atrato river excursion",
  "Day trip to Tutunendo",
  "San Pacho parade and festival experiences",
  "Local guides and tour hosts",
  "Travel insurance",
  "Pre-trip support and planning assistance",
];

export const notIncludedItems = [
  "International airfare",
  "Personal purchases and souvenirs",
  "Meals not specifically listed as included",
  "Any additional purchases or services at hotel",
];

export const tripDetails = {
  dates: "September 24 – 28, 2026",
  location: "Quibdó, Chocó, Colombia",
  depositAmount: 300,
  balanceDueDate: "September 10, 2026",
  contactEmail: "info@trueculturetours.com",
};

export const zelleDetails = {
  phone: "(510) 807-3300",
  email: "jevon.cochran@gmail.com",
};

export type PaymentMethod = "card" | "zelle";
export type CardOrigin = "domestic" | "international";

/**
 * Stripe US standard pricing. These are the fees Stripe charges us, which we
 * pass on to the customer when they pay by card.
 *  - domestic:      2.9% + $0.30
 *  - international:  4.4% + $0.30  (2.9% + 1.5% international card surcharge)
 *
 * NOTE: a card's origin can only be reliably determined server-side once
 * Stripe processes it (PaymentMethod.card.country). The UI defaults to the
 * domestic rate; the international rate is applied at the Stripe step.
 */
export const stripeFees: Record<
  CardOrigin,
  { percent: number; fixed: number }
> = {
  domestic: { percent: 0.029, fixed: 0.3 },
  international: { percent: 0.044, fixed: 0.3 },
};

/**
 * Gross up a base price so that, after Stripe deducts its fee, we still
 * net the full base price. Returns dollar amounts rounded to cents.
 */
export function calculateCardTotal(
  basePrice: number,
  origin: CardOrigin = "domestic",
) {
  const { percent, fixed } = stripeFees[origin];
  const total = (basePrice + fixed) / (1 - percent);
  const roundedTotal = Math.ceil(total * 100) / 100;
  return {
    base: basePrice,
    fee: Math.round((roundedTotal - basePrice) * 100) / 100,
    total: roundedTotal,
  };
}
