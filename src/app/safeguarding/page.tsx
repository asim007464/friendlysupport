import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Company Policy | Friendly Support Limited",
  description:
    "Company service, safeguarding and professional conduct policy for Friendly Support Limited.",
};

export default function SafeguardingPage() {
  redirect("/privacy");
}
