import { Container } from "@/components/layout/container";
import { FloorHeading } from "@/components/sections/floor-heading";
import { FloorStateVisual } from "@/components/sections/floor-section";
import { floors } from "@/data/floors";

const floor = floors.find((item) => item.id === "floor-05")!;
const headingId = `${floor.id}-title`;

// Culmination of the floors sequence — largest, most aspirational visual
// slot before the brand statement (01-page-structure.md §11, 06 §33).
// Full-bleed breaks the container intentionally (02-design-system.md §80).
export function Floor05() {
  return (
    <section
      id={floor.id}
      aria-labelledby={headingId}
      className="bg-off-white py-16 md:py-24"
    >
      <Container>
        <FloorHeading
          number={floor.number}
          title={floor.title}
          description={floor.description}
          headingId={headingId}
        />
      </Container>

      <div className="mx-[calc(50%-50vw)] mt-10">
        <FloorStateVisual
          state={floor.states[0]}
          aspectClassName="aspect-[4/5] md:aspect-[21/9]"
        />
      </div>
    </section>
  );
}
