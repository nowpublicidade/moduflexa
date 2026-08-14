"use client";

import { useEffect, useRef } from "react";
import { scrollEngine, type ScrollFrame } from "@/lib/motion/scroll-engine";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";

type ParallaxCallback = (frame: ScrollFrame) => void;

// Hook genérico por trás de todos os efeitos "transform/opacity conforme o
// scroll" do README (parallax do hero, dissolução do conteúdo, numerais em
// parallax reverso, zoom-out do andar 05): o consumidor decide o cálculo,
// o hook só garante a inscrição no motor de scroll compartilhado e escreve
// nada em state — quem grava no DOM é o callback, via refs.
export function useParallax(callback: ParallaxCallback) {
  const reduceMotion = useReducedMotion();
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (reduceMotion) return;
    return scrollEngine.subscribe((frame) => callbackRef.current(frame));
  }, [reduceMotion]);

  return reduceMotion;
}
