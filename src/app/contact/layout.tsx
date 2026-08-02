import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Free Consultation | Friendly Support Limited",
  description:
    "Request a free consultation with Friendly Support Limited. Email, call or send a message — we offer non-regulated home support across London, with no pressure and no obligation.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
