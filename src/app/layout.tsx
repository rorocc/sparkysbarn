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
  title: "SparkysBarn",
  description: "",
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
