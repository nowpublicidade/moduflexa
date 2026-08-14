"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type LightboxItem = {
  src: string;
  width: number;
  height: number;
  caption: string;
};

type LightboxProps = {
  item: LightboxItem | null;
  onClose: () => void;
};

// Modal do andar 04 (README §17). Abre com opacity 0→1 (.45s) e a figura de
// scale(0.96)→scale(1) (.55s); fecha por fundo, botão × ou Escape; trava o
// scroll do body enquanto aberto.
export function Lightbox({ item, onClose }: LightboxProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!item) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const id = requestAnimationFrame(() => setVisible(true));

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(id);
      setVisible(false);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={onClose}
      className="fixed inset-0 z-[90] flex cursor-zoom-out items-center justify-center transition-opacity duration-[450ms]"
      style={{
        padding: "clamp(20px,5vw,64px)",
        backgroundColor: "rgba(21,42,70,0.92)",
        opacity: visible ? 1 : 0,
      }}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label="Fechar"
        className="absolute top-[clamp(16px,4vw,32px)] right-[clamp(16px,4vw,32px)] flex h-12 w-12 items-center justify-center rounded-pill border text-white transition-colors hover:bg-brand-orange hover:border-brand-orange"
        style={{ borderColor: "rgba(255,255,255,0.35)" }}
      >
        <span aria-hidden="true" className="text-xl leading-none">
          ×
        </span>
      </button>

      <figure
        onClick={(event) => event.stopPropagation()}
        className="flex cursor-default flex-col items-center gap-4 transition-transform duration-[550ms]"
        style={{
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
          transform: visible ? "scale(1)" : "scale(0.96)",
        }}
      >
        <Image
          src={item.src}
          alt={item.caption}
          width={item.width}
          height={item.height}
          className="h-auto max-h-[78vh] w-auto object-contain"
        />
        <figcaption className="text-[11px] tracking-[0.14em] text-white/70 uppercase">
          {item.caption}
        </figcaption>
      </figure>
    </div>
  );
}
