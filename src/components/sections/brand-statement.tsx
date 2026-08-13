import { Container } from "@/components/layout/container";

// Deliberate pause after the floors — minimal motion, most space, per
// 03-storytelling.md §32-34 and 04-motion-guide.md §32.
export function BrandStatement() {
  return (
    <section
      aria-labelledby="brand-statement-title"
      className="bg-brand-navy py-24 text-white md:py-40"
    >
      <Container>
        <div className="mx-auto flex max-w-[22ch] flex-col gap-6 text-center">
          <h2
            id="brand-statement-title"
            className="text-[clamp(2.2rem,4.5vw,5rem)] leading-[1.05] font-bold"
          >
            Não é sobre colocar mais coisas em menos espaço
          </h2>
          <p className="text-lg leading-relaxed text-white/70">
            É sobre fazer cada metro quadrado trabalhar melhor para você.
          </p>
        </div>
      </Container>
    </section>
  );
}
