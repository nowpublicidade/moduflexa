import { FloorNumeral } from "@/components/motion/floor-numeral";
import { ImageBeforeAfter } from "@/components/motion/image-before-after";
import { Reveal } from "@/components/motion/reveal";
import { floors } from "@/data/floors";

const floor = floors.find((item) => item.id === "floor-02")!;
const headingId = `${floor.id}-title`;

// Espelhado em relação ao Andar 01: imagens sangrando pela borda esquerda,
// texto à direita (README §5).
export function Floor02() {
  return (
    <section
      id={floor.id}
      aria-labelledby={headingId}
      className="overflow-x-clip bg-white"
      style={{ paddingBlock: "var(--section-padding-y)" }}
    >
      <div
        className="grid items-center gap-x-12 gap-y-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          paddingRight: "max(var(--page-padding), calc((100vw - var(--container-max)) / 2))",
        }}
      >
        <Reveal>
          {floor.states[0].images && floor.states[1].images ? (
            <ImageBeforeAfter
              closed={floor.states[0].images}
              open={floor.states[1].images}
              altClosed={floor.states[0].label}
              altOpen={floor.states[1].label}
              captionClosed="Fim do expediente"
              captionOpen="Home office aberto"
              aspectClassName="aspect-[4/3]"
              captionClassName="pl-[var(--page-padding)]"
            />
          ) : null}
        </Reveal>

        <Reveal index={1}>
          <div className="flex flex-col gap-6 pl-[var(--page-padding)]">
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
      </div>
    </section>
  );
}
