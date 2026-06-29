import type { Metadata } from "next";
import { Libre_Baskerville, Open_Sans } from "next/font/google";
import SiteChat from "@/components/SiteChat";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Friendly Support Limited | Home Help & Companionship in Greater London",
  description:
    "Practical home help and companionship across Greater London. Friendly Support Limited offers errands, light domestic support and live-in home care (no personal care). Book a free consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${openSans.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#1F7A7A] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
        <SiteChat />
        <CookieBanner />
      </body>
    </html>
  );
}
