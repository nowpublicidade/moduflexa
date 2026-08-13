import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { FloorSection } from "@/components/sections/floor-section";
import { Floor04 } from "@/components/sections/floor-04";
import { Floor05 } from "@/components/sections/floor-05";
import { BrandStatement } from "@/components/sections/brand-statement";
import { Solutions } from "@/components/sections/solutions";
import { Stores } from "@/components/sections/stores";
import { Contact } from "@/components/sections/contact";
import { floors } from "@/data/floors";

const floor01 = floors.find((floor) => floor.id === "floor-01")!;
const floor02 = floors.find((floor) => floor.id === "floor-02")!;
const floor03 = floors.find((floor) => floor.id === "floor-03")!;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <FloorSection floor={floor01} layout="split" theme="light" />
        <FloorSection
          floor={floor02}
          layout="split"
          reverse
          theme="white"
        />
        <FloorSection floor={floor03} layout="full" theme="light" />
        <Floor04 />
        <Floor05 />
        <BrandStatement />
        <Solutions />
        <Stores />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
