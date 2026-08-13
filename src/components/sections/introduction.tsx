import { Container } from "@/components/layout/container";

export function Introduction() {
  return (
    <section id="ambientes" aria-labelledby="introduction-title" className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-[65ch] flex-col gap-6 text-center">
          <h2
            id="introduction-title"
            className="text-[clamp(2rem,4vw,4.5rem)] leading-[1.05] font-bold text-brand-navy"
          >
            Seu espaço não precisa ter uma única função
          </h2>
          <p className="text-lg leading-relaxed text-text-muted">
            A casa muda ao longo do dia. Ela pode ser trabalho pela manhã,
            convivência à tarde e descanso à noite. Os móveis também podem
            acompanhar essa mudança.
          </p>
          <p className="text-sm font-medium text-brand-orange">
            Veja o que acontece quando o espaço deixa de ser fixo
          </p>
        </div>
      </Container>
    </section>
  );
}
