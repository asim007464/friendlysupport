import type { Metadata } from "next";
import { Libre_Baskerville, Open_Sans } from "next/font/google";
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
  title: "Friendly Support Limited | Home Help & Companionship in London",
  description:
    "Practical home help and companionship across London. Friendly Support Limited offers errands, light domestic support and live-in home support (no personal care). Book a free consultation.",
  applicationName: "Friendly Support Limited",
  metadataBase: new URL("https://friendlysupportlimited.co.uk"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Friendly Support Limited",
    description:
      "Warm, reliable home support across London. Companionship, errands and light domestic help.",
    siteName: "Friendly Support Limited",
    images: [{ url: "/fs-logo.png", alt: "Friendly Support Limited" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Friendly Support Limited",
    description:
      "Warm, reliable home support across London. Companionship, errands and light domestic help.",
    images: ["/fs-logo.png"],
  },
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
      </body>
    </html>
  );
}
