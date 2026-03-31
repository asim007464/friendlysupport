"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; text: string };

export default function SiteChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      text: "Hi — ask anything about Friendly Support Limited (services, areas, visits, booking). Answers are based on this website.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open, loading]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            text: "Something went wrong. Please try again or use Contact / Book now on the site.",
          },
        ]);
        return;
      }
      setMessages((m) => [
        ...m,
        { role: "assistant", text: data.reply as string },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: "Could not reach the server. Check your connection or open Contact / Book now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#1F7A7A] text-white shadow-lg transition-all hover:bg-[#1a6565] hover:shadow-xl md:bottom-8 md:right-8"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-5 z-[100] flex w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-2xl border border-[#e8ecec] bg-white shadow-2xl md:bottom-28 md:right-8"
          role="dialog"
          aria-label="Site assistant chat"
        >
          <div className="border-b border-[#e8ecec] bg-[#1a3d3d] px-4 py-3">
            <p className="font-heading text-base font-semibold text-white">
              Ask about our service
            </p>
            <p className="text-xs text-white/75">Answers from this website</p>
          </div>

          <div
            ref={listRef}
            className="max-h-[min(50vh,320px)] space-y-3 overflow-y-auto bg-[#F8FAFA] px-3 py-3"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[95%] rounded-2xl px-3 py-2 text-[14px] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#1F7A7A] text-white"
                      : "border border-[#e8ecec] bg-white text-[#374151]"
                  }`}
                >
                  {msg.text.split("\n\n").map((para, j) => (
                    <p key={j} className={j > 0 ? "mt-2" : ""}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-[#e8ecec] bg-white px-3 py-2 text-[14px] text-[#64748b]">
                  …
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-[#e8ecec] bg-white p-3">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void send();
                  }
                }}
                placeholder="Type a question…"
                rows={2}
                className="min-h-[44px] flex-1 resize-none rounded-xl border border-[#e0e6e8] bg-white px-3 py-2 text-[15px] text-[#1a3d3d] placeholder:text-[#94a3b8] focus:border-[#1F7A7A] focus:outline-none focus:ring-2 focus:ring-[#1F7A7A]/25"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => void send()}
                disabled={loading || !input.trim()}
                className="shrink-0 self-end rounded-xl bg-[#1F7A7A] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1a6565] disabled:opacity-40"
              >
                Send
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-[#94a3b8]">
              Not a live person —{" "}
              <Link href="/contact" className="font-medium text-[#1F7A7A] underline">
                Contact
              </Link>
              {" · "}
              <Link href="/book" className="font-medium text-[#1F7A7A] underline">
                Book now
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
