"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/container";
import { FloorNumeral } from "@/components/motion/floor-numeral";
import { Reveal } from "@/components/motion/reveal";
import { useParallax } from "@/lib/motion/use-parallax";
import { floors } from "@/data/floors";

const floor = floors.find((item) => item.id === "floor-05")!;
const headingId = `${floor.id}-title`;
const images = floor.states[0].images!;

const VEIL =
  "linear-gradient(180deg, rgba(21,42,70,0.15) 0%, rgba(21,42,70,0.88) 100%)";

// Seção escura, full-bleed, culminação da sequência de andares (README §5).
// Zoom-out: scale 1.15 → 1.0 conforme a seção atravessa a viewport.
export function Floor05() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useParallax(({ viewportHeight }) => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const rect = section.getBoundingClientRect();
    const p = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const clamped = Math.min(1, Math.max(0, p));
    const scale = 1.15 - clamped * 0.15;
    image.style.transform = `scale(${scale})`;
  });

  return (
    <section
      ref={sectionRef}
      id={floor.id}
      aria-labelledby={headingId}
      className="relative flex min-h-[min(94vh,960px)] items-center overflow-hidden bg-brand-navy-dark"
    >
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <picture>
          <source media="(min-width: 768px)" srcSet={images.desktop.avif} type="image/avif" />
          <source media="(min-width: 768px)" srcSet={images.desktop.webp} type="image/webp" />
          <source srcSet={images.mobile.avif} type="image/avif" />
          <source srcSet={images.mobile.webp} type="image/webp" />
          <img
            src={images.mobile.webp}
            alt={floor.states[0].label}
            className="h-full w-full object-cover"
          />
        </picture>
      </div>

      <div aria-hidden="true" className="absolute inset-0" style={{ background: VEIL }} />

      <Container className="relative z-10">
        <Reveal>
          <div className="flex max-w-[38ch] flex-col gap-6">
            <FloorNumeral number={floor.number} size="small" filled />
            <h2
              id={headingId}
              className="font-heading font-semibold text-white"
              style={{
                fontSize: "clamp(32px,4.2vw,64px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              {floor.title}
            </h2>
            <p
              className="font-light text-white/80"
              style={{ fontSize: "clamp(16px,1.25vw,19px)", lineHeight: 1.7 }}
            >
              {floor.description}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
