"use client";

import { useActiveFloor } from "@/lib/motion/use-active-floor";

const RAIL_ITEMS = [
  { id: "floor-01", number: "01", label: "Sala e quarto" },
  { id: "floor-02", number: "02", label: "Home office" },
  { id: "floor-03", number: "03", label: "Receber" },
  { id: "floor-04", number: "04", label: "Momentos do dia" },
  { id: "floor-05", number: "05", label: "Projeto completo" },
];

// Rail de andares (README §2). Só existe em >=1024px (hidden lg:flex) e só
// fica visível entre ~70% do hero e o fim do andar 05 — useActiveFloor
// decide os dois via IntersectionObserver, nunca por state por frame.
export function FloorRail() {
  const { activeFloorId, railVisible } = useActiveFloor({
    floorIds: RAIL_ITEMS.map((item) => item.id),
    heroId: "inicio",
    lastFloorId: "floor-05",
  });

  return (
    <nav
      aria-label="Navegação entre andares"
      className="fixed top-1/2 z-[58] hidden -translate-y-1/2 flex-col gap-[18px] transition-opacity duration-500 lg:flex"
      style={{
        right: "clamp(16px,2vw,32px)",
        opacity: railVisible ? 1 : 0,
        pointerEvents: railVisible ? "auto" : "none",
      }}
    >
      {RAIL_ITEMS.map((item) => {
        const active = item.id === activeFloorId;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex items-center justify-end gap-3"
          >
            <span
              className="text-[9px] uppercase tracking-[0.1em] text-brand-navy transition-opacity duration-300"
              style={{ opacity: active ? 1 : 0 }}
            >
              {item.label}
            </span>
            <span
              className="text-[10px] font-semibold tracking-[0.18em] transition-colors duration-300"
              style={{ color: active ? "var(--color-brand-orange)" : "rgba(21,42,70,0.32)" }}
            >
              {item.number}
            </span>
            <span
              className="h-px transition-[width,background-color] duration-300"
              style={{
                width: active ? 34 : 14,
                backgroundColor: active
                  ? "var(--color-brand-orange)"
                  : "rgba(21,42,70,0.32)",
              }}
            />
          </a>
        );
      })}
    </nav>
  );
}
