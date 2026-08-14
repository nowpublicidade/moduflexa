"use client";

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { useHeaderState } from "@/lib/motion/use-header-state";

const navItems = [
  { href: "#ambientes", label: "Ambientes" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#produtos", label: "Produtos" },
  { href: "#unidades", label: "Unidades" },
  { href: "#contato", label: "Contato" },
];

const ctaHref = "#unidades";
const ctaLabel = "Encontre uma unidade";

// Dois estados por scroll (README §1): transparente sobre o hero, sólido
// depois. useHeaderState decide o limiar (alturaDoHero - 120); aqui só
// aplicamos as classes correspondentes.
export function Header() {
  const solid = useHeaderState("inicio");

  return (
    <>
      {/* Véu superior: garante legibilidade do header sobre a foto antes do
          fundo sólido entrar. Desliga junto com o estado sólido. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[55] h-40 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(180deg, rgba(21,42,70,0.62) 0%, rgba(21,42,70,0) 100%)",
          opacity: solid ? 0 : 1,
        }}
      />

      <header
        className="fixed inset-x-0 top-0 z-[60] border-b transition-[background-color,border-color] duration-500 ease-out"
        style={{
          height: "clamp(68px,8vw,84px)",
          backgroundColor: solid ? "rgba(247,245,242,0.94)" : "transparent",
          borderColor: solid ? "var(--color-hairline-10)" : "transparent",
        }}
      >
        <Container className="h-full">
          <div className="flex h-full items-center justify-between">
            <a href="#inicio" className="relative block h-[clamp(36px,4.4vw,52px)] shrink-0 w-[220px]">
              <Image
                src="/brand/logo-light.png"
                alt="Moduflexa"
                fill
                priority
                sizes="220px"
                className="object-contain object-left transition-opacity duration-[450ms]"
                style={{ opacity: solid ? 0 : 1 }}
              />
              <Image
                src="/brand/logo-primary.png"
                alt="Moduflexa"
                fill
                priority
                sizes="220px"
                className="object-contain object-left transition-opacity duration-[450ms]"
                style={{ opacity: solid ? 1 : 0 }}
              />
            </a>

            <nav aria-label="Navegação principal" className="hidden md:block">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[13px] font-medium tracking-[0.04em] transition-colors hover:text-brand-orange"
                      style={{
                        color: solid
                          ? "var(--color-brand-navy)"
                          : "rgba(255,255,255,0.9)",
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={ctaHref}
              className="hidden min-h-11 items-center justify-center rounded-pill border px-5 text-[13px] font-semibold transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white md:inline-flex"
              style={{
                borderColor: solid
                  ? "var(--color-brand-navy)"
                  : "rgba(255,255,255,0.45)",
                color: solid ? "var(--color-brand-navy)" : "rgba(255,255,255,0.9)",
              }}
            >
              {ctaLabel}
            </a>

            <div style={{ color: solid ? "var(--color-brand-navy)" : "#fff" }}>
              <MobileMenu items={navItems} ctaHref={ctaHref} ctaLabel={ctaLabel} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
