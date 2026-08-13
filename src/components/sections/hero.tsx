import { Container } from "@/components/layout/container";

// Placeholder until final hero photography is approved — 06-asset-guide.md §92.
// Neutral block instead of a generated/stock image, per 06 §116.
function HeroImagePlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[4/5] w-full items-center justify-center rounded-lg border border-dashed border-border bg-surface md:aspect-[16/9]"
    >
      <span className="text-sm font-medium text-text-muted">
        Imagem do hero — placeholder
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="bg-off-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 md:items-center md:gap-12 md:py-24">
          <div className="flex flex-col gap-6">
            <h1 className="text-[clamp(2.7rem,5.5vw,6rem)] leading-none font-bold text-brand-navy">
              O espaço da sua casa pode fazer muito mais
            </h1>
            <p className="max-w-[42ch] text-[clamp(1.125rem,1.5vw,1.35rem)] leading-relaxed text-text-muted">
              Soluções retráteis e multifuncionais para transformar ambientes
              compactos conforme a sua rotina.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#ambientes"
                className="inline-flex min-h-12 items-center justify-center rounded-pill bg-brand-orange px-6 text-sm font-bold text-white transition-colors hover:bg-brand-orange-dark"
              >
                Explore as possibilidades
              </a>
              <a
                href="#unidades"
                className="inline-flex min-h-12 items-center justify-center rounded-pill border border-brand-navy px-6 text-sm font-bold text-brand-navy"
              >
                Encontre uma unidade
              </a>
            </div>
          </div>

          <HeroImagePlaceholder />
        </div>
      </Container>
    </section>
  );
}
