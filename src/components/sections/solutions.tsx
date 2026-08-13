import { Container } from "@/components/layout/container";

// Copy transcribed verbatim from 03-storytelling.md §36-39.
const differentiators = [
  {
    number: "01",
    title: "O espaço trabalha melhor",
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
      className="bg-white py-16 md:py-24"
    >
      <Container>
        <h2
          id="solutions-title"
          className="max-w-[20ch] text-[clamp(2rem,4vw,4.5rem)] leading-[1.05] font-bold text-brand-navy"
        >
          Soluções pensadas para transformar a rotina
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <div key={item.number} className="flex flex-col gap-3">
              <span className="text-sm font-extrabold tracking-[0.08em] text-brand-orange">
                {item.number}
              </span>
              <h3 className="text-xl font-bold text-brand-navy">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
