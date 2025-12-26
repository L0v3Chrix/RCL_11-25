import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GeminiChat from "@/components/chat/GeminiChat";

// Display heading font - modern readable display (Mockup spec)
const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Body font - clean and readable
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Handwritten captions - for polaroid labels and accents
const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recovery Centered Living | High Accountability Recovery Living in Austin, TX",
  description: "High Accountability Recovery Living in Austin, TX. Recovery Centered Living is a clean, recovery-centered community with a spiritual environment—built for people who are ready to show up and rebuild with support.",
};

import { Providers } from "./providers";

import GlobalModal from "@/components/ui/GlobalModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${caveat.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <GeminiChat />
          <GlobalModal />
        </Providers>
      </body>
    </html>
  );
}
