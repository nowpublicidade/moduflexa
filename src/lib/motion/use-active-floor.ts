"use client";

import { useEffect, useState } from "react";

type UseActiveFloorOptions = {
  floorIds: string[];
  /** Id do elemento cujo fim de visibilidade (70% da altura) liga o rail. */
  heroId: string;
  /** Id do último andar — o rail desliga ao passar do fim desta seção. */
  lastFloorId: string;
};

type UseActiveFloorResult = {
  activeFloorId: string | null;
  railVisible: boolean;
};

// Rail de andares (README §2): ativo = andar mais próximo do centro vertical
// da viewport; visível só entre ~70% do hero e o fim do andar 05. Ambos são
// booleans/strings que mudam raramente — cabem bem como state React comum
// (README "State Management": activeFloor é estado legítimo, ao contrário
// do progresso contínuo de parallax/ciclo).
export function useActiveFloor({
  floorIds,
  heroId,
  lastFloorId,
}: UseActiveFloorOptions): UseActiveFloorResult {
  const [activeFloorId, setActiveFloorId] = useState<string | null>(null);
  const [heroPassed, setHeroPassed] = useState(false);
  const [pastLastFloor, setPastLastFloor] = useState(false);

  useEffect(() => {
    const floorElements = floorIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (floorElements.length === 0) return;

    // Andar ativo: faixa fina no centro vertical da viewport.
    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActiveFloorId(topMost.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    floorElements.forEach((el) => activeObserver.observe(el));

    // Visibilidade do rail: liga ~70% do hero, desliga ao fim do andar 05.
    const heroElement = document.getElementById(heroId);
    const heroObserver = heroElement
      ? new IntersectionObserver(
          ([entry]) => setHeroPassed(entry.intersectionRatio <= 0.3),
          { threshold: [0, 0.3, 1] },
        )
      : null;
    if (heroElement && heroObserver) heroObserver.observe(heroElement);

    const lastFloorElement = document.getElementById(lastFloorId);
    const lastFloorObserver = lastFloorElement
      ? new IntersectionObserver(
          ([entry]) =>
            setPastLastFloor(
              entry.boundingClientRect.bottom < 0 && !entry.isIntersecting,
            ),
          { threshold: 0 },
        )
      : null;
    if (lastFloorElement && lastFloorObserver) {
      lastFloorObserver.observe(lastFloorElement);
    }

    return () => {
      activeObserver.disconnect();
      heroObserver?.disconnect();
      lastFloorObserver?.disconnect();
    };
  }, [floorIds, heroId, lastFloorId]);

  return {
    activeFloorId,
    railVisible: heroPassed && !pastLastFloor,
  };
}
