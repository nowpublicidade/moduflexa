import { FloorNumeral } from "@/components/motion/floor-numeral";
import { ImageBeforeAfter } from "@/components/motion/image-before-after";
import { Reveal } from "@/components/motion/reveal";
import { floors } from "@/data/floors";

const floor = floors.find((item) => item.id === "floor-01")!;
const headingId = `${floor.id}-title`;

// Texto à esquerda, par de imagens sangrando até a borda direita da
// viewport (README §5). O bleed é feito alinhando a borda esquerda com o
// container padrão e zerando o padding direito, em vez de usar 100vw puro
// (evita o overflow horizontal clássico desse truque).
export function Floor01() {
  return (
    <section
      id={floor.id}
      aria-labelledby={headingId}
      className="overflow-x-clip bg-off-white"
      style={{ paddingBlock: "var(--section-padding-y)" }}
    >
      <div
        className="grid items-center gap-x-12 gap-y-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          paddingLeft: "max(var(--page-padding), calc((100vw - var(--container-max)) / 2))",
        }}
      >
        <Reveal>
          <div className="flex flex-col gap-6 pr-[var(--page-padding)]">
            <FloorNumeral number={floor.number} />
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
              className="max-w-[46ch] font-light text-text-body"
              style={{ fontSize: "clamp(16px,1.25vw,19px)", lineHeight: 1.7 }}
            >
              {floor.description}
            </p>
          </div>
        </Reveal>

        <Reveal index={1}>
          {floor.states[0].images && floor.states[1].images ? (
            <ImageBeforeAfter
              closed={floor.states[0].images}
              open={floor.states[1].images}
              altClosed={floor.states[0].label}
              altOpen={floor.states[1].label}
              captionClosed="Fechada — sala"
              captionOpen="Aberta — quarto"
              showDividerLine
              aspectClassName="aspect-[4/3]"
            />
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
