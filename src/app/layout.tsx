import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swale — Football Intelligence Dashboard",
  description:
    "Real-time football scores, player analytics, and AI-powered insights across 50+ leagues and international tournaments.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  keywords: [
    "football",
    "soccer",
    "live scores",
    "player stats",
    "world cup",
    "analytics",
    "xG",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
