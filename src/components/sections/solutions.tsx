import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

// Copy transcribed verbatim from design_handoff_moduflexa_onepage/README.md §11.
const differentiators = [
  {
    number: "01",
    title: "Melhor aproveitamento do espaço",
    description:
      "A solução é pensada para liberar ou transformar áreas do ambiente.",
  },
  {
    number: "02",
    title: "Função sem abrir mão do design",
    description:
      "A identidade da marca já estabelece esse equilíbrio entre funcionalidade e estética.",
  },
  {
    number: "03",
    title: "Soluções para diferentes rotinas",
    description:
      "Não existe apenas uma forma de utilizar um apartamento compacto.",
  },
  {
    number: "04",
    title: "Mais do que camas retráteis",
    description:
      "A comunicação atual da marca já contempla também mesas, armários e complementos.",
  },
];

export function Solutions() {
  return (
    <section
      id="solucoes"
      aria-labelledby="solutions-title"
      className="bg-white"
      style={{ paddingBlock: "var(--section-padding-y)" }}
    >
      <Container>
        <Reveal>
          <h2
            id="solutions-title"
            className="font-heading max-w-[20ch] font-medium text-brand-navy"
            style={{
              fontSize: "clamp(30px,3.8vw,56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Soluções pensadas para transformar a rotina
          </h2>
        </Reveal>

        <div
          className="mt-16 grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            columnGap: "clamp(32px,5vw,96px)",
            rowGap: "clamp(32px,4vw,64px)",
          }}
        >
          {differentiators.map((item, index) => (
            <Reveal key={item.number} index={index}>
              <div
                className="flex flex-col gap-3 border-t pt-6"
                style={{ borderColor: "var(--color-hairline-12)" }}
              >
                <span
                  className="font-heading font-bold"
                  style={{
                    fontSize: "44px",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(250,107,9,0.55)",
                  }}
                >
                  {item.number}
                </span>
                <h3 className="font-heading text-[22px] font-medium text-brand-navy">
                  {item.title}
                </h3>
                <p className="max-w-[34ch] text-[16px] font-light text-text-body">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
