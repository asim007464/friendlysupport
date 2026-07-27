"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faq";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="rounded-xl border border-[#e8ecec] bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#f8fafb]"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-[16px] font-bold text-[#1a3d3d]">{item.question}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-[#1F7A7A] transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="space-y-3 border-t border-[#f0f0f0] px-5 py-4">
                {item.answer.split("\n\n").map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-[15px] leading-relaxed text-[#4a5568]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
