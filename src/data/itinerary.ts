export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  image: string;
  imageAlt: string;
}

export const itineraryDays: ItineraryDay[] = [
  {
    day: 0,
    title: "Medellín Arrival",
    description:
      "Arrive in Medellín and settle in before the journey to Colombia's Pacific Coast.\n\nJoin us for an optional welcome meetup at night to meet your fellow travelers and tour hosts over drinks and conversation.",
    activities: [],
    image: "",
    imageAlt: "Medellín cityscape at sunset",
  },
  {
    day: 1,
    title: "Welcome to Quibdó",
    description:
      "Explore the heart of Quibdó, connect with the community, and experience your first San Pacho Festival.",
    activities: [
      "Flight from Medellín to Quibdó",
      "Quibdó walking city tour",
      "lunch at Paila Mi Abuela restaurant",
      "San Pacho parade",
      "Welcome dinner",
    ],
    image: "",
    imageAlt: "San Pacho Festival celebration",
  },
  {
    day: 2,
    title: "The Spirit of the Pacific",
    description:
      "Dive into the history and cultural significance of viche, a traditional beverage of the region, before celebrating at the festival.",
    activities: [
      "Breakfast at hotel",
      "Viche tour & tasting experience",
      "Traditional lunch",
      "San Pacho parade",
    ],
    image: "",
    imageAlt: "Traditional viche bottles",
  },
  {
    day: 3,
    title: "Flavors of Chocó",
    description:
      "Discover the rich flavors of Chocó, enjoy a peaceful sunset on the river, and experience Quibdó's vibrant nightlife.",
    activities: [
      "Breakfast at hotel",
      "Chocó cooking class",
      "Traditional lunch",
      "Sunset on the Atrato (river excursion)",
      "Zona Rosa bar hopping",
    ],
    image: "",
    imageAlt: "Sunset on the Atrato river",
  },
  {
    day: 4,
    title: "Tutunendo Escape",
    description:
      "Escape to the natural beauty of Tutunendo for a day of rivers, rainforest, and relaxation.",
    activities: [
      "Breakfast at hotel",
      "Day trip to Tutunendo",
      "Nature & river experiences",
      "Farewell dinner in Quibdó",
    ],
    image: "",
    imageAlt: "Tutunendo jungle and waterfall",
  },
  {
    day: 5,
    title: "Until Next Time",
    description:
      "Enjoy a final breakfast together before heading back to Medellín with memories that will last a lifetime.",
    activities: ["Breakfast at hotel", "Checkout", "Flight back to Medellín"],
    image: "",
    imageAlt: "Sunset departure",
  },
];
