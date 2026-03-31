"use client";

import { useMemo, useState } from "react";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function padMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const dow = first.getDay();
  const mondayIndex = dow === 0 ? 6 : dow - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: ({ day: number; inMonth: boolean; iso: string } | null)[] = [];
  for (let i = 0; i < mondayIndex; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({ day: d, inMonth: true, iso });
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

type Props = {
  selectedDates: string[];
  onChange: (dates: string[]) => void;
};

export default function TwoMonthCalendar({ selectedDates, onChange }: Props) {
  const [anchor, setAnchor] = useState(() => {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), 1);
  });

  const m1 = useMemo(() => {
    const y = anchor.getFullYear();
    const m = anchor.getMonth();
    return { y, m, label: anchor.toLocaleString("en-GB", { month: "long", year: "numeric" }) };
  }, [anchor]);

  const m2 = useMemo(() => {
    const d = new Date(anchor.getFullYear(), anchor.getMonth() + 1, 1);
    const y = d.getFullYear();
    const m = d.getMonth();
    return { y, m, label: d.toLocaleString("en-GB", { month: "long", year: "numeric" }) };
  }, [anchor]);

  const grid1 = useMemo(() => padMonth(m1.y, m1.m), [m1.y, m1.m]);
  const grid2 = useMemo(() => padMonth(m2.y, m2.m), [m2.y, m2.m]);

  const toggle = (iso: string) => {
    if (selectedDates.includes(iso)) {
      onChange(selectedDates.filter((d) => d !== iso));
    } else {
      onChange([...selectedDates, iso].sort());
    }
  };

  const shift = (delta: number) => {
    setAnchor((a) => new Date(a.getFullYear(), a.getMonth() + delta, 1));
  };

  const renderMonth = (label: string, grid: ReturnType<typeof padMonth>) => (
    <div className="min-w-0 flex-1">
      <p className="mb-2 text-center text-sm font-semibold text-[#1a3d3d]">{label}</p>
      <div className="grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-[#94a3b8] sm:text-[11px]">
        {WEEKDAYS.map((w) => (
          <div key={w} className="py-1">
            {w}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {grid.map((cell, i) => {
          if (!cell) {
            return <div key={`e-${i}`} className="aspect-square p-0.5" />;
          }
          const selected = selectedDates.includes(cell.iso);
          return (
            <button
              key={cell.iso}
              type="button"
              onClick={() => toggle(cell.iso)}
              className={`aspect-square rounded-lg p-0.5 text-[12px] font-medium transition-colors sm:text-[13px] ${
                selected
                  ? "bg-[#1F7A7A] text-white shadow-sm"
                  : "bg-white text-[#374151] hover:bg-[#1F7A7A]/15"
              }`}
            >
              {cell.day}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="rounded-2xl border border-[#e8ecec] bg-[#F8FAFA] p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => shift(-1)}
          className="rounded-lg border border-[#e8ecec] bg-white px-3 py-1.5 text-sm font-medium text-[#1F7A7A] hover:bg-[#1F7A7A]/5"
          aria-label="Previous months"
        >
          ←
        </button>
        <span className="text-center text-[12px] text-[#64748b]">Tap days</span>
        <button
          type="button"
          onClick={() => shift(1)}
          className="rounded-lg border border-[#e8ecec] bg-white px-3 py-1.5 text-sm font-medium text-[#1F7A7A] hover:bg-[#1F7A7A]/5"
          aria-label="Next months"
        >
          →
        </button>
      </div>
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        {renderMonth(m1.label, grid1)}
        {renderMonth(m2.label, grid2)}
      </div>
      {selectedDates.length > 0 && (
        <button
          type="button"
          onClick={() => onChange([])}
          className="mt-3 text-sm font-medium text-[#1F7A7A] underline hover:no-underline"
        >
          Clear selected dates
        </button>
      )}
    </div>
  );
}
