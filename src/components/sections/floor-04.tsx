"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { FloorNumeral } from "@/components/motion/floor-numeral";
import { Lightbox, type LightboxItem } from "@/components/motion/lightbox";
import { Reveal } from "@/components/motion/reveal";
import { withBasePath } from "@/lib/base-path";
import { floors } from "@/data/floors";

const floor = floors.find((item) => item.id === "floor-04")!;
const headingId = `${floor.id}-title`;

// Dimensão real dos crops 3:4 (public/floors/floor-04/*), usada pelo
// next/image do lightbox — ver assets-source/prompts/floor-04.
const IMAGE_DIMENSIONS = { width: 768, height: 1024 };

// Degrau de margem superior progressivo (README §5) — intencional, não é bug.
const STAGGER_OFFSETS = ["0px", "clamp(24px,4vw,56px)", "clamp(48px,8vw,112px)"];

export function Floor04() {
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  return (
    <section
      id={floor.id}
      aria-labelledby={headingId}
      className="bg-white"
      style={{ paddingBlock: "var(--section-padding-y)" }}
    >
      <Container>
        <Reveal>
          <div
            className="grid items-end gap-x-12 gap-y-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
          >
            <FloorNumeral number={floor.number} />
            <div className="flex max-w-[52ch] flex-col gap-4 pb-2">
              <h2
                id={headingId}
                className="font-heading font-medium text-brand-navy"
                style={{
                  fontSize: "clamp(30px,3.4vw,50px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.025em",
                }}
              >
                {floor.title}
              </h2>
              <p
                className="font-light text-text-body"
                style={{ fontSize: "clamp(16px,1.25vw,19px)", lineHeight: 1.7 }}
              >
                {floor.description}
              </p>
            </div>
          </div>
        </Reveal>

        <div
          className="mt-16 grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {floor.states.map((state, index) => {
            const desktopSrc = state.images?.desktop.webp;
            if (!desktopSrc) return null;

            return (
              <Reveal key={state.label} index={index}>
                <figure
                  style={{ marginTop: STAGGER_OFFSETS[index] ?? "0px" }}
                  className="flex flex-col gap-3"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxItem({
                        src: withBasePath(desktopSrc),
                        ...IMAGE_DIMENSIONS,
                        caption: state.label,
                      })
                    }
                    className="group relative block aspect-[3/4] w-full overflow-hidden"
                  >
                    <picture>
                      <source srcSet={withBasePath(state.images!.mobile.avif)} type="image/avif" />
                      <source srcSet={withBasePath(state.images!.mobile.webp)} type="image/webp" />
                      <img
                        src={withBasePath(desktopSrc)}
                        alt={state.label}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </picture>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-4 text-[11px] font-medium tracking-[0.1em] text-white uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        height: "45%",
                        background:
                          "linear-gradient(180deg, rgba(21,42,70,0) 0%, rgba(21,42,70,0.75) 100%)",
                      }}
                    >
                      Clique para ver
                    </span>
                  </button>

                  <figcaption className="flex items-center gap-3 text-sm text-brand-navy">
                    <span
                      aria-hidden="true"
                      className="h-px w-5 bg-brand-orange"
                    />
                    {state.label}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </Container>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </section>
  );
}
