import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tom Aoki — Builder, Engineer, Explorer",
  description:
    "Tom Aoki is a Japanese-born American software engineer based in Seattle. From systems to AI — a decade of evolving at the edge of technology.",
  keywords: [
    "Tom Aoki",
    "software engineer",
    "Seattle",
    "AI",
    "blockchain",
    "founder",
    "builder",
    "startup",
  ],
  openGraph: {
    title: "Tom Aoki — Builder, Engineer, Explorer",
    description:
      "From Tokyo to Seattle. From systems to AI. Always chasing what's next.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Aoki — Builder, Engineer, Explorer",
    description:
      "From Tokyo to Seattle. From systems to AI. Always chasing what's next.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable}`}
    >
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
