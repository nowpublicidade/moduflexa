import Image from "next/image";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col">
      <div
        className="group relative aspect-square overflow-hidden"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
        />
      </div>

      <div
        className="flex flex-col gap-2 border-t pt-5"
        style={{ borderColor: "var(--color-hairline-12)" }}
      >
        <span className="text-[10px] font-semibold tracking-[0.16em] text-brand-orange uppercase">
          {product.line}
        </span>
        <h3 className="font-heading text-[20px] font-medium text-brand-navy">
          {product.name}
        </h3>
        <p className="max-w-[34ch] text-[15px] leading-relaxed font-light text-text-body">
          {product.description}
        </p>
        <span className="mt-1 text-[11px] font-semibold tracking-[0.1em] text-text-tertiary uppercase">
          {product.size}
        </span>

        <a
          href="#contato"
          className="mt-4 inline-flex min-h-11 w-fit items-center justify-center rounded-pill border border-brand-navy px-6 text-[13px] font-semibold text-brand-navy transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white"
        >
          Solicitar orçamento
        </a>
      </div>
    </article>
  );
}
