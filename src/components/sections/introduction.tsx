import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

export function Introduction() {
  return (
    <section
      id="ambientes"
      aria-labelledby="introduction-title"
      className="border-b bg-white"
      style={{
        borderColor: "var(--color-hairline-10)",
        paddingBlock: "var(--section-padding-y)",
      }}
    >
      <Container>
        <div
          className="grid items-start gap-x-12 gap-y-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          <Reveal>
            <h2
              id="introduction-title"
              className="font-heading font-medium text-brand-navy"
              style={{
                fontSize: "clamp(30px,3.8vw,56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Seu espaço não precisa ter uma única função
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p
              className="max-w-[52ch] font-light text-text-body"
              style={{ fontSize: "clamp(16px,1.25vw,19px)", lineHeight: 1.7 }}
            >
              A casa muda ao longo do dia. Ela pode ser trabalho pela manhã,
              convivência à tarde e descanso à noite. Os móveis também podem
              acompanhar essa mudança.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex items-center gap-6">
          <span
            aria-hidden="true"
            className="h-px flex-1"
            style={{ backgroundColor: "var(--color-hairline-12)" }}
          />
          <p className="min-w-0 shrink text-center text-[12px] font-semibold tracking-[0.18em] text-brand-orange uppercase">
            Uma mesma metragem. Novas possibilidades.
          </p>
          <span
            aria-hidden="true"
            className="h-px flex-1"
            style={{ backgroundColor: "var(--color-hairline-12)" }}
          />
        </div>
      </Container>
    </section>
  );
}
