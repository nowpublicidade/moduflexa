import { Container } from "@/components/layout/container";
import { FloorNumeral } from "@/components/motion/floor-numeral";
import { ImageBeforeAfter } from "@/components/motion/image-before-after";
import { Reveal } from "@/components/motion/reveal";
import { floors } from "@/data/floors";

const floor = floors.find((item) => item.id === "floor-03")!;
const headingId = `${floor.id}-title`;

// Cabeçalho em linha (numeral menor + texto) seguido de imagem full-bleed
// 21:9 (README §5).
export function Floor03() {
  return (
    <section
      id={floor.id}
      aria-labelledby={headingId}
      className="bg-off-white"
      style={{ paddingBlock: "var(--section-padding-y)" }}
    >
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
            <FloorNumeral number={floor.number} size="small" />
            <div className="flex max-w-[46ch] flex-col gap-4 pb-2">
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
      </Container>

      <Reveal index={1} className="mt-12">
        {floor.states[0].images && floor.states[1].images ? (
          <ImageBeforeAfter
            closed={floor.states[0].images}
            open={floor.states[1].images}
            altClosed={floor.states[0].label}
            altOpen={floor.states[1].label}
            captionClosed="Uso cotidiano"
            captionOpen="Pronto para receber"
            // 21:9 é um banner editorial que só funciona em tela larga: em
            // 375px daria 161px de altura. Abaixo de md a caixa vira 4:3 e
            // recebe um recorte próprio da imagem — mesmo breakpoint em que o
            // <picture> troca de arte (min-width: 768px).
            aspectClassName="aspect-[4/3] md:aspect-[21/9]"
            captionClassName="px-[var(--page-padding)]"
          />
        ) : null}
      </Reveal>
    </section>
  );
}
