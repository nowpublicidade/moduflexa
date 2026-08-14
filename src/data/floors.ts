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

// Copy transcribed verbatim from 03-storytelling.md §18-30, with floor-01's
// description updated per design_handoff_moduflexa_onepage/README.md §5-9
// (redesign copy is final/authoritative where it differs) — not invented.
export const floors: Floor[] = [
  {
    id: "floor-01",
    number: "01",
    title: "Uma sala pode esconder um quarto completo",
    description:
      "Durante o dia, sala. Quando você precisa, quarto. A função muda. O espaço continua o mesmo.",
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
      {
        label: "Ambiente organizado, sem estação de trabalho à vista",
        images: {
          desktop: {
            avif: "/floors/floor-02/closed-desktop.avif",
            webp: "/floors/floor-02/closed-desktop.webp",
          },
          mobile: {
            avif: "/floors/floor-02/closed-mobile.avif",
            webp: "/floors/floor-02/closed-mobile.webp",
          },
        },
      },
      {
        label: "Mesmo ambiente com home office retrátil aberto",
        images: {
          desktop: {
            avif: "/floors/floor-02/open-desktop.avif",
            webp: "/floors/floor-02/open-desktop.webp",
          },
          mobile: {
            avif: "/floors/floor-02/open-mobile.avif",
            webp: "/floors/floor-02/open-mobile.webp",
          },
        },
      },
    ],
  },
  {
    id: "floor-03",
    number: "03",
    title: "Receber alguém não precisa exigir um quarto vazio o ano inteiro",
    description:
      "O ambiente funciona para a sua rotina todos os dias e se transforma quando alguém chega.",
    states: [
      {
        label: "Ambiente no uso cotidiano",
        images: {
          desktop: {
            avif: "/floors/floor-03/everyday.avif",
            webp: "/floors/floor-03/everyday.webp",
          },
          mobile: {
            avif: "/floors/floor-03/everyday.avif",
            webp: "/floors/floor-03/everyday.webp",
          },
        },
      },
      {
        label: "Mesmo ambiente pronto para receber visitas",
        images: {
          desktop: {
            avif: "/floors/floor-03/hosting.avif",
            webp: "/floors/floor-03/hosting.webp",
          },
          mobile: {
            avif: "/floors/floor-03/hosting.avif",
            webp: "/floors/floor-03/hosting.webp",
          },
        },
      },
    ],
  },
  {
    id: "floor-04",
    number: "04",
    title: "O mesmo ambiente pode acompanhar diferentes momentos do seu dia",
    description: "O espaço continua o mesmo. O jeito de usar muda com você.",
    states: [
      {
        label: "Manhã — trabalho",
        images: {
          desktop: {
            avif: "/floors/floor-04/morning.avif",
            webp: "/floors/floor-04/morning.webp",
          },
          mobile: {
            avif: "/floors/floor-04/morning.avif",
            webp: "/floors/floor-04/morning.webp",
          },
        },
      },
      {
        label: "Tarde — convivência",
        images: {
          desktop: {
            avif: "/floors/floor-04/afternoon.avif",
            webp: "/floors/floor-04/afternoon.webp",
          },
          mobile: {
            avif: "/floors/floor-04/afternoon.avif",
            webp: "/floors/floor-04/afternoon.webp",
          },
        },
      },
      {
        label: "Noite — descanso",
        images: {
          desktop: {
            avif: "/floors/floor-04/night.avif",
            webp: "/floors/floor-04/night.webp",
          },
          mobile: {
            avif: "/floors/floor-04/night.avif",
            webp: "/floors/floor-04/night.webp",
          },
        },
      },
    ],
  },
  {
    id: "floor-05",
    number: "05",
    title: "Quando os móveis mudam, a metragem deixa de ser o limite",
    description:
      "Não é sobre encaixar mais móveis. É sobre pensar o ambiente inteiro para que cada elemento tenha uma função quando você precisa e libere espaço quando não precisa.",
    states: [
      {
        label: "Projeto completo Moduflexa",
        images: {
          desktop: {
            avif: "/floors/floor-05/hero-desktop.avif",
            webp: "/floors/floor-05/hero-desktop.webp",
          },
          mobile: {
            avif: "/floors/floor-05/hero-mobile.avif",
            webp: "/floors/floor-05/hero-mobile.webp",
          },
        },
      },
    ],
  },
];
