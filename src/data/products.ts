export type Product = {
  id: string;
  line: string;
  name: string;
  description: string;
  size: string;
  image: string;
};

// Copy transcribed verbatim de design_handoff_moduflexa_onepage/README.md §12.
export const products: Product[] = [
  {
    id: "prime-casal",
    line: "Linha Prime",
    name: "Prime Casal",
    description:
      "O topo da linha Moduflexa. Acabamento em madeira nobre, mecanismo silencioso de alta precisão e design que eleva qualquer ambiente.",
    size: "Casal — 1,38m",
    image: "/produtos/prime-casal.png",
  },
  {
    id: "prime-solteiro",
    line: "Linha Prime",
    name: "Prime Solteiro",
    description: "A mesma sofisticação em tamanho compacto.",
    size: "Solteiro — 0,88m",
    image: "/produtos/prime-solteiro.png",
  },
];
