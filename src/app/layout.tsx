import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shell/Navbar";
import Footer from "@/components/shell/Footer";

export const metadata: Metadata = {
  title: "True Culture Tours — Travel Beyond Tourism",
  description:
    "Immersive cultural journeys rooted in authenticity, connection, and unforgettable experiences in Quibdó, Colombia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-[#F8F8F5] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
