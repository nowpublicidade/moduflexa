import { Container } from "@/components/layout/container";
import { StoreCard } from "@/components/ui/store-card";
import { stores } from "@/data/stores";

export function Stores() {
  return (
    <section
      id="unidades"
      aria-labelledby="stores-title"
      className="bg-off-white py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-[65ch] text-center">
          <p className="text-sm font-medium text-brand-orange">
            Agora imagine isso na sua casa
          </p>
          <h2
            id="stores-title"
            className="mt-3 text-[clamp(2rem,4vw,4.5rem)] leading-[1.05] font-bold text-brand-navy"
          >
            Conheça a Moduflexa de perto
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Encontre uma unidade e veja as soluções funcionando pessoalmente.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-6">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </Container>
    </section>
  );
}
