import { includedItems, notIncludedItems } from "@/data/booking";

export interface FaqContent {
  type: "paragraph" | "list";
  text?: string;
  items?: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  content: FaqContent[];
  afterList?: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "getting-there",
    question: "How do I get to Quibdó?",
    content: [
      {
        type: "paragraph",
        text: "Getting to Quibdó is easier than most people expect.",
      },
      {
        type: "paragraph",
        text: "Participants are responsible for arranging their travel to Colombia. We advise that travelers purchase their international flight into Medellín and from there, we can assist with travel to Quibdó. The short domestic flight to Quibdó is included in the price of the trip.",
      },
      {
        type: "paragraph",
        text: "We can cover the domestic flight to Quibdó from any of the major cities in Colombia. However, our tour officially begins in Medellín, and our team will be available to assist you throughout the process.",
      },
    ],
  },
  {
    id: "accommodations",
    question: "Where will we stay?",
    content: [
      {
        type: "paragraph",
        text: "We'll stay at one of Quibdó's best hotels, selected for its comfort, cleanliness, security, and convenient location.",
      },
      {
        type: "paragraph",
        text: "Specific hotel details will be shared with participants prior to departure.",
      },
      {
        type: "paragraph",
        text: "Please note that participants are responsible for covering any accomodation prior to arrival in Quibdó.",
      },
    ],
  },
  {
    id: "safety",
    question: "Is it safe to travel to Quibdó?",
    content: [
      {
        type: "paragraph",
        text: "In a word, yes. It is safe to travel to Quibdó. Like any destination, Quibdó requires awareness and common-sense precautions.",
      },
      {
        type: "paragraph",
        text: "Our hosts have extensive experience living and working in the region and will provide guidance throughout the trip to help ensure a safe and enjoyable experience.",
      },
      {
        type: "paragraph",
        text: "The areas and activities included in our itinerary have been carefully selected, and you'll be accompanied by local hosts who know the city and community well.",
      },
    ],
  },
  {
    id: "reservation-process",
    question: "How do I reserve my spot and how does payment work?",
    content: [
      {
        type: "paragraph",
        text: "Reserving your spot is simple. Complete the booking form with your details and choose your occupancy preference, then submit a non-refundable $300 deposit to hold your place. The remaining balance is due by September 10, 2026 at the very latest.",
      },
      {
        type: "paragraph",
        text: "You can pay your deposit and balance two ways:",
      },
      {
        type: "list",
        items: [
          "Zelle — no processing fee. Send to (510) 807-3300 or jevon.cochran@gmail.com, then submit the booking form so we can match your reservation.",
          "Credit or debit card — securely processed through Stripe. A card processing fee is added at checkout, which is the fee our payment processor charges and is passed on to you.",
        ],
      },
      {
        type: "paragraph",
        text: "The trip price itself is the same regardless of how you pay — the only difference is the card processing fee, which you can avoid entirely by paying with Zelle.",
      },
      {
        type: "paragraph",
        text: "Once your deposit is received, we'll email you to confirm your spot along with next steps and the payment schedule for your remaining balance.",
      },
    ],
  },
  {
    id: "included",
    question: "What's included in the trip?",
    content: [
      { type: "paragraph", text: "Your tour package includes:" },
      {
        type: "list",
        items: includedItems,
      },
    ],
  },
  {
    id: "not-included",
    question: "What's not included?",
    content: [
      { type: "paragraph", text: "The following are not included:" },
      {
        type: "list",
        items: notIncludedItems,
      },
    ],
  },
  {
    id: "group-size",
    question: "What is the group size?",
    content: [
      {
        type: "paragraph",
        text: "We intentionally keep our groups small.",
      },
      {
        type: "paragraph",
        text: "Our tours are designed for meaningful connection, cultural immersion, and personalized attention rather than large-group tourism.",
      },
      {
        type: "paragraph",
        text: "Exact group sizes may vary, but we expect this experience to be limited to approximately 10–15 participants.",
      },
    ],
  },
  {
    id: "is-this-for-me",
    question: "Is this trip for me?",
    content: [
      {
        type: "paragraph",
        text: "This trip is ideal for travelers who value authentic cultural experiences over traditional tourism.",
      },
      { type: "paragraph", text: "You may enjoy this experience if you:" },
      {
        type: "list",
        items: [
          "Love learning about new cultures",
          "Enjoy meeting local people",
          "Appreciate music, food, and community",
          "Prefer meaningful travel over resort vacations",
          "Are open-minded, curious, and adaptable",
        ],
      },
    ],
    afterList:
      "This trip may not be the best fit if you're looking for luxury resorts, all-inclusive amenities, or a highly structured sightseeing itinerary.",
  },
  {
    id: "packing",
    question: "What should I pack?",
    content: [
      { type: "paragraph", text: "We recommend packing:" },
      {
        type: "list",
        items: [
          "Lightweight clothing",
          "Comfortable walking shoes",
          "Rain jacket or poncho",
          "Sunscreen",
          "Insect repellent",
          "Reusable water bottle",
          "Portable charger",
          "Swimsuit",
          "Hat and sunglasses",
        ],
      },
    ],
    afterList:
      "Quibdó is located in one of the rainiest regions in the world, so it's always a good idea to be prepared for occasional rain.",
  },
  {
    id: "payment",
    question: "What is the payment and cancellation policy?",
    content: [
      {
        type: "paragraph",
        text: "A non-refundable deposit is required to reserve your spot.",
      },
      {
        type: "paragraph",
        text: "The remaining balance must be paid prior to departure according to the payment schedule provided during registration.",
      },
      {
        type: "paragraph",
        text: "Because we make commitments to hotels, transportation providers, guides, and local partners in advance, refunds may be limited once final payments have been made.",
      },
      {
        type: "paragraph",
        text: "Full payment details, cancellation terms, and deadlines will be provided before booking.",
      },
    ],
  },
  {
    id: "spanish",
    question: "Do I need to speak Spanish?",
    content: [
      { type: "paragraph", text: "Not at all." },
      {
        type: "paragraph",
        text: "Your tour hosts are bilingual and will help facilitate communication throughout the trip. While knowing a few basic Spanish phrases can enhance the experience, it is not required.",
      },
    ],
  },
  {
    id: "why-quibdo",
    question: "Why Quibdó?",
    content: [
      {
        type: "paragraph",
        text: "Quibdó is one of Colombia's most culturally rich yet least-visited cities.",
      },
      {
        type: "paragraph",
        text: "Located in the Pacific region of Chocó, it is known for its vibrant Afro-Colombian culture, music, food, traditions, natural beauty, and the world-famous San Pacho Festival.",
      },
      {
        type: "paragraph",
        text: "Our mission is to create opportunities for travelers to experience the real Quibdó while supporting local businesses, guides, artists, and community members.",
      },
    ],
  },
  {
    id: "tour-hosts",
    question: "Who are the tour hosts?",
    content: [
      {
        type: "paragraph",
        text: "True Culture Tours was founded by Edi Moya and Jevon Cochran. Please visit the about page to learn more about our tour hosts.",
      },
    ],
  },
];
