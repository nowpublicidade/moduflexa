"use client";

import { useRef } from "react";
import { useParallax } from "@/lib/motion/use-parallax";

type FloorNumeralProps = {
  number: string;
  /** "giant" nos andares 01/02/04; "small" no 03 e no 05 (README §5-9). */
  size?: "giant" | "small";
  /** Só o andar 05 preenche em laranja sólido — os demais são contorno. */
  filled?: boolean;
  className?: string;
};

const SIZE_STYLES: Record<"giant" | "small", { fontSize: string; lineHeight: number; letterSpacing: string }> = {
  giant: {
    fontSize: "clamp(110px,14vw,210px)",
    lineHeight: 0.8,
    letterSpacing: "-0.045em",
  },
  small: {
    fontSize: "clamp(64px,8vw,132px)",
    lineHeight: 0.78,
    letterSpacing: "-0.05em",
  },
};

// Numerais em parallax reverso (README "Efeitos ligados ao scroll"): cada
// numeral se desloca até ±70px conforme a distância do seu centro ao centro
// da viewport (fator 0.12) — mais devagar que o conteúdo ao redor.
export function FloorNumeral({
  number,
  size = "giant",
  filled = false,
  className,
}: FloorNumeralProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useParallax(({ viewportHeight }) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const elCenter = rect.top + rect.height / 2;
    const distance = elCenter - viewportHeight / 2;
    const offset = Math.max(-70, Math.min(70, -distance * 0.12));
    el.style.transform = `translateY(${offset}px)`;
  });

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`font-heading block font-bold will-change-transform ${className ?? ""}`}
      style={{
        ...SIZE_STYLES[size],
        color: filled ? "var(--color-brand-orange)" : "transparent",
        WebkitTextStroke: filled ? undefined : "1px rgba(250,107,9,0.55)",
      }}
    >
      {number}
    </span>
  );
}
