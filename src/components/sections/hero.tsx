"use client";

import { useEffect, useRef, useState } from "react";
import { useParallax } from "@/lib/motion/use-parallax";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import { withBasePath } from "@/lib/base-path";

const HERO_VEIL =
  "linear-gradient(180deg, rgba(21,42,70,0.58) 0%, rgba(21,42,70,0.44) 32%, rgba(21,42,70,0.42) 55%, rgba(21,42,70,0.9) 100%)";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // queueMicrotask, não requestAnimationFrame: rAF fica suspenso em abas
    // sem foco/visibilidade, o que deixaria o hero permanentemente
    // invisível (opacity:0 / translateY) se a página carregar em segundo
    // plano. Microtask roda de qualquer forma, sem depender de um frame de
    // pintura — e ainda assim evita o setState síncrono direto no corpo do
    // effect.
    queueMicrotask(() => setMounted(true));
  }, []);

  useParallax(({ smoothedScrollY }) => {
    const heroHeight = sectionRef.current?.offsetHeight ?? 1;

    if (bgRef.current) {
      bgRef.current.style.transform = `translate3d(0, ${smoothedScrollY * 0.14}px, 0)`;
    }

    if (contentRef.current) {
      const opacity = Math.max(0, 1 - smoothedScrollY / (heroHeight * 0.75));
      contentRef.current.style.opacity = String(opacity);
      contentRef.current.style.transform = `translateY(${-smoothedScrollY * 0.05}px)`;
    }
  });

  const show = reduceMotion || mounted;

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex min-h-[min(94vh,960px)] flex-col overflow-hidden"
    >
      {/* Spacer com a altura do header fixo. */}
      <div style={{ height: "clamp(68px,8vw,84px)" }} aria-hidden="true" />

      <div
        ref={bgRef}
        className="absolute inset-x-0 will-change-transform"
        style={{ top: "-6%", height: "112%" }}
      >
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={withBasePath("/floors/floor-05/hero-desktop.webp")}
          />
          <img
            src={withBasePath("/floors/floor-05/hero-mobile.webp")}
            alt=""
            fetchPriority="high"
            loading="eager"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: HERO_VEIL }}
      />

      <div
        ref={contentRef}
        className="relative z-10 mt-auto w-full pb-[clamp(48px,7vw,96px)]"
      >
        <div className="mx-auto w-full" style={{ maxWidth: "var(--container-max)", paddingInline: "var(--page-padding)" }}>
          <div
            className="grid items-end gap-x-10 gap-y-8"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
          >
            <div className="flex flex-col gap-6">
              <p
                data-hero-anim
                className="font-heading text-[11px] font-semibold tracking-[0.2em] text-brand-orange uppercase transition-[opacity,transform] duration-1000"
                style={{
                  transitionDelay: "80ms",
                  transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                  opacity: show ? 1 : 0,
                  transform: show ? "translateY(0)" : "translateY(22px)",
                }}
              >
                Ambientes que se transformam
              </p>

              <div className="overflow-hidden">
                <h1
                  data-hero-anim
                  className="font-heading max-w-[19ch] font-semibold text-white"
                  style={{
                    fontSize: "clamp(40px,5.6vw,92px)",
                    lineHeight: 1.02,
                    letterSpacing: "-0.035em",
                    textWrap: "balance",
                    paddingBottom: "0.2em",
                    marginBottom: "-0.2em",
                    transitionProperty: "transform",
                    transitionDuration: "1.15s",
                    transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                    transitionDelay: "200ms",
                    transform: show ? "translateY(0)" : "translateY(105%)",
                  }}
                >
                  O espaço da sua casa pode fazer muito mais
                </h1>
              </div>

              <div
                data-hero-anim
                className="flex flex-col gap-4 transition-[opacity,transform] duration-1000 sm:flex-row sm:items-center"
                style={{
                  transitionDelay: "560ms",
                  transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                  opacity: show ? 1 : 0,
                  transform: show ? "translateY(0)" : "translateY(22px)",
                }}
              >
                <a
                  href="#ambientes"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-pill bg-brand-orange px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
                >
                  Explore as possibilidades
                </a>
                <a
                  href="#unidades"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-pill border px-8 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-navy"
                  style={{ borderColor: "rgba(255,255,255,0.45)" }}
                >
                  Encontre uma unidade
                </a>
              </div>
            </div>

            <p
              data-hero-anim
              className="max-w-[44ch] border-l pl-6 text-white/90 transition-[opacity,transform] duration-1000"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                transitionDelay: "720ms",
                transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(22px)",
              }}
            >
              Soluções retráteis e multifuncionais para transformar ambientes
              compactos conforme a sua rotina.
            </p>
          </div>
        </div>
      </div>

      {!reduceMotion ? (
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 z-10 h-14 w-px -translate-x-1/2 animate-[mf-cue_2.8s_ease-in-out_infinite]"
          style={{
            transformOrigin: "top",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
      ) : null}
    </section>
  );
}
