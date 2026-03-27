import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joakim Eskils — Software Engineer",
  description:
    "Software Engineer at Bricco AB based in Stockholm. I build scalable backend systems, distributed architecture, and enjoy functional programming.",
  keywords: [
    "Joakim Eskils",
    "Software Engineer",
    "TypeScript",
    "Scala",
    "Haskell",
    "React",
    "Stockholm",
    "Backend",
    "Distributed Systems",
  ],
  authors: [{ name: "Joakim Eskils" }],
  creator: "Joakim Eskils",
  openGraph: {
    title: "Joakim Eskils — Software Engineer",
    description:
      "Software Engineer based in Stockholm building scalable systems and distributed architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Joakim Eskils",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joakim Eskils — Software Engineer",
    description:
      "Software Engineer based in Stockholm building scalable systems and distributed architecture.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a192f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
