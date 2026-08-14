"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/container";
import { useKineticText } from "@/lib/motion/use-kinetic-text";

const HEADLINE = "Não é sobre colocar mais coisas em menos espaço";

// Manifesto cinético (README): cada palavra é um <span data-kinetic-word>;
// useKineticText liga/desliga um data-attribute por palavra conforme o
// scroll, e a cor em si transiciona via CSS (globals.css).
export function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  useKineticText(containerRef);

  return (
    <section
      aria-labelledby="brand-statement-title"
      className="bg-off-white"
      style={{ paddingBlock: "var(--section-padding-y-loose)" }}
    >
      <Container>
        <div
          ref={containerRef}
          className="grid items-end gap-x-12 gap-y-10"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          <h2
            id="brand-statement-title"
            className="font-heading font-medium"
            style={{
              fontSize: "clamp(34px,4.6vw,72px)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
            }}
          >
            {HEADLINE.split(" ").map((word, index) => (
              <span key={`${word}-${index}`} data-kinetic-word>
                {word}{" "}
              </span>
            ))}
          </h2>

          <div
            className="border-t pt-6"
            style={{ borderColor: "var(--color-brand-orange)" }}
          >
            <p
              className="font-light text-text-body"
              style={{ fontSize: "clamp(19px,1.8vw,30px)", lineHeight: 1.4 }}
            >
              É sobre fazer cada metro quadrado trabalhar melhor para você.
            </p>
          </div>
        </div>

        <div
          className="mt-16 flex flex-wrap justify-between gap-4 border-t pt-6 text-[12px] tracking-[0.1em] uppercase"
          style={{ borderColor: "var(--color-hairline-10)" }}
        >
          <span style={{ color: "var(--color-brand-blue)" }}>
            Funcional quando precisa. Bonito o tempo inteiro.
          </span>
          <span style={{ color: "var(--color-text-tertiary)" }}>
            Inteligência de espaço sem abrir mão do design
          </span>
        </div>
      </Container>
    </section>
  );
}
