import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StoreCard } from "@/components/ui/store-card";
import { stores } from "@/data/stores";

// H2/parágrafo per design_handoff_moduflexa_onepage/README.md §13 (copy
// final, substitui a versão anterior "Conheça a Moduflexa de perto").
export function Stores() {
  return (
    <section
      id="unidades"
      aria-labelledby="stores-title"
      className="bg-off-white"
      style={{ paddingBlock: "var(--section-padding-y)" }}
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[60ch] text-center">
            <h2
              id="stores-title"
              className="font-heading font-medium text-brand-navy"
              style={{
                fontSize: "clamp(30px,3.8vw,56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Agora imagine isso na sua casa
            </h2>
            <p
              className="mt-4 font-light text-text-body"
              style={{ fontSize: "clamp(16px,1.25vw,19px)", lineHeight: 1.7 }}
            >
              Conheça uma unidade Moduflexa e veja as soluções funcionando de
              perto.
            </p>
          </div>
        </Reveal>

        <Reveal index={1} className="mx-auto mt-16 max-w-3xl">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
