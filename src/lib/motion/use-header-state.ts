"use client";

import { useEffect, useState } from "react";
import { scrollEngine } from "@/lib/motion/scroll-engine";

// Dois estados do header (README §1), limiar scrollY > alturaDoHero - 120.
// Não é desligado por prefers-reduced-motion: é uma troca de legibilidade,
// não uma animação — só o `transition` CSS que a acompanha fica mais curto.
export function useHeaderState(heroId: string): boolean {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById(heroId);
    if (!heroElement) return;

    return scrollEngine.subscribe(({ scrollY }) => {
      const threshold = heroElement.offsetHeight - 120;
      const shouldBeSolid = scrollY > threshold;
      setSolid((current) =>
        current === shouldBeSolid ? current : shouldBeSolid,
      );
    });
  }, [heroId]);

  return solid;
}
