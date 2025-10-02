import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Joakim Eskils - Software Engineer",
  description: "Software Engineer at Bricco AB specializing in server-side development, database management, functional programming, and distributed systems architecture.",
  keywords: "Joakim Eskils, software engineer, full-stack developer, Node.js, TypeScript, Scala, Haskell, React, MongoDB, PostgreSQL, AWS, functional programming, distributed systems",
  authors: [{ name: "Joakim Eskils" }],
  creator: "Joakim Eskils",
  publisher: "Joakim Eskils",
  robots: "index, follow",
  openGraph: {
    title: "Joakim Eskils - Software Engineer",
    description: "Software Engineer at Bricco AB specializing in server-side development, database management, functional programming, and distributed systems architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Joakim Eskils Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joakim Eskils - Software Engineer",
    description: "Software Engineer at Bricco AB specializing in server-side development, database management, functional programming, and distributed systems architecture.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1d4ed8" }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} bg-slate-900 text-slate-200 antialiased`} style={{ backgroundColor: '#0f172a', color: '#e2e8f0' }}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
