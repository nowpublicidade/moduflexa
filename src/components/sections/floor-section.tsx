import { Container } from "@/components/layout/container";
import { FloorHeading } from "@/components/sections/floor-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import type { Floor } from "@/data/floors";

type FloorSectionTheme = "light" | "white";

type FloorSectionProps = {
  floor: Floor;
  // "split": text + image side by side (01-page-structure.md §22, floors 01/02).
  // "full": text above a full-width image (§22, floor 03).
  layout: "split" | "full";
  reverse?: boolean;
  theme?: FloorSectionTheme;
};

const themeClasses: Record<FloorSectionTheme, string> = {
  light: "bg-off-white",
  white: "bg-white",
};

export function FloorSection({
  floor,
  layout,
  reverse = false,
  theme = "white",
}: FloorSectionProps) {
  const headingId = `${floor.id}-title`;

  return (
    <section
      id={floor.id}
      aria-labelledby={headingId}
      className={`${themeClasses[theme]} py-16 md:py-24`}
    >
      <Container>
        {layout === "split" ? (
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-16">
            <div className={reverse ? "md:order-2" : undefined}>
              <FloorHeading
                number={floor.number}
                title={floor.title}
                description={floor.description}
                headingId={headingId}
              />
            </div>
            <div
              className={`flex flex-col gap-4 ${reverse ? "md:order-1" : ""}`}
            >
              {floor.states.map((state) => (
                <ImagePlaceholder key={state.label} label={state.label} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <FloorHeading
              number={floor.number}
              title={floor.title}
              description={floor.description}
              headingId={headingId}
            />
            <div className="grid gap-4 md:grid-cols-2">
              {floor.states.map((state) => (
                <ImagePlaceholder
                  key={state.label}
                  label={state.label}
                  aspectClassName="aspect-[4/3]"
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
