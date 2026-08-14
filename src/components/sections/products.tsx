import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/data/products";

// Seção nova (não existe na versão anterior do site) —
// design_handoff_moduflexa_onepage/README.md §12.
export function Products() {
  return (
    <section
      id="produtos"
      aria-labelledby="products-title"
      className="border-t bg-off-white"
      style={{
        borderColor: "var(--color-hairline-10)",
        paddingBlock: "var(--section-padding-y)",
      }}
    >
      <Container>
        <div
          className="grid items-start gap-x-12 gap-y-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          <Reveal>
            <h2
              id="products-title"
              className="font-heading font-medium text-brand-navy"
              style={{
                fontSize: "clamp(30px,3.8vw,56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Nossos produtos
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p
              className="max-w-[52ch] font-light text-text-body"
              style={{ fontSize: "clamp(16px,1.25vw,19px)", lineHeight: 1.7 }}
            >
              Quatro configurações de cama retrátil, em versões casal e
              solteiro, para diferentes larguras de ambiente.
            </p>
          </Reveal>
        </div>

        <div
          className="mt-16 grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(20px,2.5vw,36px)",
          }}
        >
          {products.map((product, index) => (
            <Reveal key={product.id} index={index}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
