"use client";

import { useRef } from "react";
import { useBeforeAfterCycle } from "@/lib/motion/use-before-after-cycle";
import { withBasePath } from "@/lib/base-path";

type ResponsiveSource = { avif: string; webp: string };
type StateImages = { desktop: ResponsiveSource; mobile: ResponsiveSource };

type ImageBeforeAfterProps = {
  closed: StateImages;
  open: StateImages;
  altClosed: string;
  altOpen: string;
  captionClosed: string;
  captionOpen: string;
  /** README §5–9: só o andar 01 tem a linha vertical laranja acompanhando p. */
  showDividerLine?: boolean;
  aspectClassName?: string;
  className?: string;
  /** Legenda respeita o container mesmo quando a imagem é full-bleed. */
  captionClassName?: string;
};

function PictureLayer({
  images,
  alt,
  className,
}: {
  images: StateImages;
  alt: string;
  className?: string;
}) {
  return (
    <picture className={className}>
      <source media="(min-width: 768px)" srcSet={withBasePath(images.desktop.avif)} type="image/avif" />
      <source media="(min-width: 768px)" srcSet={withBasePath(images.desktop.webp)} type="image/webp" />
      <source srcSet={withBasePath(images.mobile.avif)} type="image/avif" />
      <source srcSet={withBasePath(images.mobile.webp)} type="image/webp" />
      <img src={withBasePath(images.mobile.webp)} alt={alt} className="h-full w-full object-cover" />
    </picture>
  );
}

// Ciclo automático antes/depois — o efeito assinatura (README "Interactions
// & Behavior"). O container (não a camada recortada) é o alvo do
// IntersectionObserver dentro de useBeforeAfterCycle.
export function ImageBeforeAfter({
  closed,
  open,
  altClosed,
  altOpen,
  captionClosed,
  captionOpen,
  showDividerLine = false,
  aspectClassName = "aspect-[4/3]",
  className,
  captionClassName,
}: ImageBeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const openLayerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useBeforeAfterCycle(containerRef, (p) => {
    if (openLayerRef.current) {
      const hiddenPercent = (1 - p) * 100;
      openLayerRef.current.style.clipPath = `inset(0 ${hiddenPercent}% 0 0)`;
    }
    if (dividerRef.current) {
      dividerRef.current.style.left = `${p * 100}%`;
      dividerRef.current.style.opacity = p > 0.01 && p < 0.99 ? "1" : "0";
    }
  });

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden ${aspectClassName}`}
      >
        <PictureLayer images={closed} alt={altClosed} className="absolute inset-0" />
        <div
          ref={openLayerRef}
          data-before-after-open
          className="absolute inset-0"
          style={{ clipPath: "inset(0 100% 0 0)", transition: "none" }}
        >
          <PictureLayer images={open} alt={altOpen} className="absolute inset-0" />
        </div>

        {showDividerLine ? (
          <div
            ref={dividerRef}
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 w-[2px] bg-brand-orange"
            style={{
              left: "0%",
              opacity: 0,
              boxShadow: "var(--shadow-divider-glow)",
            }}
          />
        ) : null}
      </div>

      <div
        className={`mt-4 flex items-center gap-3 text-[11px] tracking-[0.08em] text-text-tertiary uppercase ${captionClassName ?? ""}`}
      >
        <span>{captionClosed}</span>
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "var(--color-hairline-14)" }} />
        <span className="text-brand-orange">{captionOpen}</span>
      </div>
    </div>
  );
}
