import type { Metadata } from "next";
import { Geist, Geist_Mono, Modak } from "next/font/google";
import "./globals.css";
import GooseProgressFlag from "@/app/components/GooseProgressFlag";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const modak = Modak({
    variable: "--font-modak",
    weight: "400",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SparkysBarn – Sticker mit Pride und ohne KI",
  description: "Zeige klare Haltung mit unseren handgemachten Sticker über Pride und weitere Themen – hauptsache mit süßen TIeren und ganz ohne KI für dich gedruckt.",
  openGraph: {
    title: "SparkysBarn – Sticker mit Pride und ohne KI",
    description: "Zeige klare Haltung mit unseren handgemachten Sticker über Pride und weitere Themen – hauptsache mit süßen TIeren und ganz ohne KI für dich gedruckt.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${modak.variable} min-h-screen flex flex-col justify-between antialiased`}
    >
    {children}
    <Footer />
    </body>
    </html>
  );
}
