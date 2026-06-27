export interface Host {
  name: string;
  roles: [string, string][];
  bio: string[];
  languages: string;
  image: string;
  imageAlt: string;
  photoSide: "left" | "right";
  objectPosition?: string;
}

export const hosts: Host[] = [
  {
    name: "Jevon Cochran",
    roles: [
      ["CO-FOUNDER", "PHOTOGRAPHER"],
      ["VIDEOGRAPHER", "STORYTELLER"],
    ],
    bio: [
      "Originally from Detroit, Jevon first visited Quibdó in 2019 during the San Pacho Festival. What began as a single trip quickly became a life-changing connection.",
      "Captivated by the city's culture, community, and energy, Jevon eventually made Quibdó his second home and has spent years living in and returning to the region.",
      "As a photographer, videographer, and content creator, Jevon has documented communities and cultures throughout the United States, Brazil, and Colombia.",
    ],
    languages: "Fluent in English, Spanish, French & Portuguese",
    image: "/images/about/jevon_in_quibdo.jpg",
    imageAlt: "Jevon Cochran",
    photoSide: "left",
    objectPosition: "95% center",
  },
  {
    name: "Edi Moya",
    roles: [
      ["CO-FOUNDER", "ATTORNEY"],
      ["TOUR GUIDE", "CULTURAL HISTORIAN"],
    ],
    bio: [
      "Born and raised in Quibdó, Edi brings deep local knowledge and over a decade of experience guiding travelers throughout Colombia's Pacific region.",
      "An attorney by profession and cultural ambassador by passion, he specializes in Afro-Colombian history, culture, and community-based tourism.",
      "Fluent in both English and Spanish, he serves as a bridge between travelers and the local communities they encounter.",
    ],
    languages: "Fluent in English & Spanish",
    image: "",
    imageAlt: "Edi Moya",
    photoSide: "right",
  },
];
