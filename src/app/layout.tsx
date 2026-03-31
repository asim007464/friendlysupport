import type { Metadata } from "next";
import { Libre_Baskerville, Open_Sans } from "next/font/google";
import SiteChat from "@/components/SiteChat";
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
  title: "Friendly Support Limited – Home Help in Barnet, Brent, Harrow & Ealing",
  description:
    "Friendly faces, practical help and time to talk – so you or your loved one can stay happily at home. Companionship, errands and light help across Barnet, Brent, Harrow and Ealing.",
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
        {children}
        <SiteChat />
      </body>
    </html>
  );
}
