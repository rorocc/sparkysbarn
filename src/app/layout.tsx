import type { Metadata } from "next";
import { Sora, Rammetto_One, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import GooseProgressFlag from "@/components/art/GooseProgressFlag";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const rammettoOne = Rammetto_One({
  variable: "--font-rammetto-one",
  weight: "400",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: "900",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkysbarn.de"),
  title: {
    default: "SparkysBarn – Sticker mit Pride und gestaltet ohne KI",
    template: "%s | SparkysBarn – Sticker mit Pride und gestaltet ohne KI",
  },
  description: "Zeige klare Haltung mit unseren handgemachten Sticker über Pride und weitere Themen – hauptsache mit süßen Tieren und ganz ohne KI für dich gedruckt.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SparkysBarn – Sticker mit Pride und gestaltet ohne KI 🏳️‍🌈",
    description: "Zeige klare Haltung mit unseren handgemachten Sticker über Pride und weitere Themen – hauptsache mit süßen Tieren und ganz ohne KI für dich gedruckt.",
    url: "https://sparkysbarn.de",
    siteName: "SparkysBarn",
    locale: "de_DE",
    type: "website",
    images: [{
      url:'https://sparkysbarn.de/og-image.jpg',
      width: 1200,
      height: 630,
      alt: "Cute Sticker mit Pride und ohne KI"
    },{
      url:'https://sparkysbarn.de/og-image-square.jpg',
      width: 512,
      height: 512,
      alt: "Cute Sticker mit Pride und ohne KI"
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${rammettoOne.variable} min-h-screen flex flex-col justify-between antialiased`}
      >
        {children}
        <Footer/>
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </body>
    </html>
  );
}
