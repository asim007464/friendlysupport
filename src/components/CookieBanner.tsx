"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

const STORAGE_KEY = "fs-cookie-consent";

const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  const onStorage = () => onStoreChange();
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

function notifyConsentChange() {
  listeners.forEach((listener) => listener());
}

function getConsentSnapshot() {
  return localStorage.getItem(STORAGE_KEY) === "accepted";
}

function getServerConsentSnapshot() {
  return false;
}

export default function CookieBanner() {
  const accepted = useSyncExternalStore(
    subscribe,
    getConsentSnapshot,
    getServerConsentSnapshot
  );

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    notifyConsentChange();
  };

  if (accepted) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-[#e8ecec] bg-white p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] leading-relaxed text-[#4a5568]">
          We use essential cookies so the site works. See our{" "}
          <Link href="/privacy" className="font-semibold text-[#1F7A7A] hover:underline">
            privacy policy
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-lg bg-[#1F7A7A] px-6 py-2.5 text-[14px] font-semibold text-white hover:bg-[#1a6565]"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
