"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";

// Reveals genéricos por scroll (README "Reveals por scroll"): threshold
// 0.15, rootMargin -8% embaixo, unobserve após revelar (dispara uma vez).
// Sob reduced motion, revela de imediato — o conteúdo nunca pode depender
// só da animação para aparecer.
export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  onReveal: () => void,
) {
  const reduceMotion = useReducedMotion();
  const onRevealRef = useRef(onReveal);
  useEffect(() => {
    onRevealRef.current = onReveal;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (reduceMotion) {
      onRevealRef.current();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onRevealRef.current();
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, [reduceMotion, ref]);
}
