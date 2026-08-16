import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Apply — Companion & Home Support Worker | Friendly Support Limited",
  description:
    "Apply to join Friendly Support Limited as a Companion & Home Support Worker across London. No CV required — tell us about yourself in a few minutes.",
};

export default function ApplyLayout({ children }: { children: ReactNode }) {
  return children;
}
