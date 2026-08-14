"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";

const CYCLE_MS = 6200;
const OPEN_START = 300;
const OPEN_END = 1700;
const HOLD_END = 4600;
// CLOSE_END = 6200 (= CYCLE_MS)

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function progressForElapsed(elapsed: number): number {
  const t = elapsed % CYCLE_MS;
  if (t < OPEN_START) return 0;
  if (t < OPEN_END) return easeInOutQuad((t - OPEN_START) / (OPEN_END - OPEN_START));
  if (t < HOLD_END) return 1;
  return 1 - easeInOutQuad((t - HOLD_END) / (CYCLE_MS - HOLD_END));
}

// Ciclo automático antes/depois (README "Interactions & Behavior"). Relógio
// próprio por par: o IntersectionObserver observa o CONTÊINER (nunca a
// imagem recortada por clip-path — ela tem retângulo de interseção nulo e
// o observer nunca dispararia). O tempo só avança enquanto visível; ao
// sair de vista, pausa e retoma do ponto em que parou.
export function useBeforeAfterCycle(
  containerRef: RefObject<HTMLElement | null>,
  onProgress: (p: number) => void,
) {
  const reduceMotion = useReducedMotion();
  const onProgressRef = useRef(onProgress);
  useEffect(() => {
    onProgressRef.current = onProgress;
  });

  useEffect(() => {
    if (reduceMotion) {
      onProgressRef.current(1);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    let activeElapsed = 0;
    let lastTimestamp: number | null = null;

    const tick = (now: number) => {
      if (lastTimestamp !== null) {
        activeElapsed += now - lastTimestamp;
      }
      lastTimestamp = now;
      onProgressRef.current(progressForElapsed(activeElapsed));
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafId !== null) return;
      lastTimestamp = null;
      rafId = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
      lastTimestamp = null;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.01, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      stop();
    };
  }, [reduceMotion, containerRef]);
}
