"use client";

import { useEffect, type RefObject } from "react";
import { scrollEngine } from "@/lib/motion/scroll-engine";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";

const WORD_SELECTOR = "[data-kinetic-word]";

// Manifesto cinético (README): progresso conforme a posição do contêiner na
// viewport decide quantas palavras (da esquerda) já "pintaram". A cor em si
// transiciona via CSS (`transition: color .45s` no elemento da palavra) —
// aqui só ligamos/desligamos um data-attribute por frame; nunca vira state
// React (re-renderizar a cada pixel de scroll custaria caro).
export function useKineticText(containerRef: RefObject<HTMLElement | null>) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = Array.from(
      container.querySelectorAll<HTMLElement>(WORD_SELECTOR),
    );
    if (words.length === 0) return;

    if (reduceMotion) {
      words.forEach((word) => {
        word.dataset.kineticActive = "true";
      });
      return;
    }

    return scrollEngine.subscribe(({ viewportHeight }) => {
      const top = container.getBoundingClientRect().top;
      const p = (0.85 * viewportHeight - top) / (0.5 * viewportHeight);
      const clamped = Math.min(1, Math.max(0, p));
      const activeCount = Math.round(clamped * words.length);

      words.forEach((word, index) => {
        const shouldBeActive = index < activeCount;
        const isActive = word.dataset.kineticActive === "true";
        if (shouldBeActive !== isActive) {
          word.dataset.kineticActive = shouldBeActive ? "true" : "false";
        }
      });
    });
  }, [reduceMotion, containerRef]);
}
