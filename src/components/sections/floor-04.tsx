import { Container } from "@/components/layout/container";
import { FloorHeading } from "@/components/sections/floor-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { floors } from "@/data/floors";

const floor = floors.find((item) => item.id === "floor-04")!;
const headingId = `${floor.id}-title`;

// Three side-by-side states (manhã/tarde/noite) — 01-page-structure.md §10,
// 03-storytelling.md §26-28. Distinct enough from the closed/open pair
// pattern that it stays a standalone composition rather than a FloorSection
// layout variant.
export function Floor04() {
  return (
    <section id={floor.id} aria-labelledby={headingId} className="bg-white py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          <FloorHeading
            number={floor.number}
            title={floor.title}
            description={floor.description}
            headingId={headingId}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {floor.states.map((state) => (
              <div key={state.label} className="flex flex-col gap-3">
                <ImagePlaceholder
                  label={state.label}
                  aspectClassName="aspect-[3/4]"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
