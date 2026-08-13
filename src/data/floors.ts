export type FloorState = {
  label: string;
  images?: {
    desktop: { avif: string; webp: string };
    mobile: { avif: string; webp: string };
  };
};

export type Floor = {
  id: string;
  number: string;
  title: string;
  description: string;
  // Placeholder labels for each visual state (closed/open, or the three
  // moments in Floor 04). Doubles as future alt-text source once real
  // photography exists — 06-asset-guide.md §88.
  states: FloorState[];
};

// Copy transcribed verbatim from 03-storytelling.md §18-30 — not invented.
export const floors: Floor[] = [
  {
    id: "floor-01",
    number: "01",
    title: "Uma sala pode esconder um quarto completo",
    description:
      "Durante o dia, sala. Quando você precisa, quarto. A cama aparece só quando faz sentido para a rotina.",
    states: [
      {
        label: "Sala com cama retrátil fechada",
        images: {
          desktop: {
            avif: "/floors/floor-01/closed-desktop.avif",
            webp: "/floors/floor-01/closed-desktop.webp",
          },
          mobile: {
            avif: "/floors/floor-01/closed-mobile.avif",
            webp: "/floors/floor-01/closed-mobile.webp",
          },
        },
      },
      {
        label: "Mesmo ambiente com a cama retrátil aberta",
        images: {
          desktop: {
            avif: "/floors/floor-01/open-desktop.avif",
            webp: "/floors/floor-01/open-desktop.webp",
          },
          mobile: {
            avif: "/floors/floor-01/open-mobile.avif",
            webp: "/floors/floor-01/open-mobile.webp",
          },
        },
      },
    ],
  },
  {
    id: "floor-02",
    number: "02",
    title: "Seu escritório não precisa ocupar espaço o dia inteiro",
    description:
      "Trabalhe quando precisar. Depois, devolva o ambiente para a casa.",
    states: [
      { label: "Ambiente organizado, sem estação de trabalho à vista" },
      { label: "Mesmo ambiente com home office retrátil aberto" },
    ],
  },
  {
    id: "floor-03",
    number: "03",
    title: "Receber alguém não precisa exigir um quarto vazio o ano inteiro",
    description:
      "O ambiente funciona para a sua rotina todos os dias e se transforma quando alguém chega.",
    states: [
      { label: "Ambiente no uso cotidiano" },
      { label: "Mesmo ambiente pronto para receber visitas" },
    ],
  },
  {
    id: "floor-04",
    number: "04",
    title: "O mesmo ambiente pode acompanhar diferentes momentos do seu dia",
    description: "O espaço continua o mesmo. O jeito de usar muda com você.",
    states: [
      { label: "Manhã — trabalho" },
      { label: "Tarde — convivência" },
      { label: "Noite — descanso" },
    ],
  },
  {
    id: "floor-05",
    number: "05",
    title: "Quando os móveis mudam, a metragem deixa de ser o limite",
    description:
      "Não é sobre encaixar mais móveis. É sobre pensar o ambiente inteiro para que cada elemento tenha uma função quando você precisa e libere espaço quando não precisa.",
    states: [{ label: "Projeto completo Moduflexa" }],
  },
];
