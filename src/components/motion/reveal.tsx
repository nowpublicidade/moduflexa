"use client";

import { useRef, useState, type ReactNode } from "react";
import { useScrollReveal } from "@/lib/motion/use-scroll-reveal";

type RevealProps = {
  children: ReactNode;
  /** Posição dentro do grupo escalonado — 85ms por passo, teto de 5. */
  index?: number;
  className?: string;
};

const MAX_STAGGER_STEPS = 5;
const STAGGER_MS = 85;

// Título, parágrafo, figura, campo de formulário — qualquer bloco que deva
// entrar com opacity:0 → 1 + translateY(26px) → 0 ao cruzar a viewport.
// Excluído por design do header/nav/hero (sequência própria) e dos
// numerais (têm parallax) — não envolva esses em <Reveal>.
export function Reveal({ children, index = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useScrollReveal(ref, () => setRevealed(true));

  const delay = Math.min(index, MAX_STAGGER_STEPS - 1) * STAGGER_MS;

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(26px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
