import type { Metadata } from "next";
import { Crimson_Pro, Inter, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GeminiChat from "@/components/chat/GeminiChat";

const crimsonPro = Crimson_Pro({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recovery Centered Living | Sober Living Homes in Austin, TX",
  description: "Find your path to recovery in Austin. Recovery Centered Living offers supportive sober living homes where you're seen, supported, and empowered to rebuild your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.variable} ${inter.variable} ${caveat.variable} font-body antialiased text-brand-text bg-brand-light selection:bg-brand-accent/30 selection:text-brand-primary`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <GeminiChat />
      </body>
    </html>
  );
}
