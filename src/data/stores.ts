export type Store = {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  state: string;
  address?: string;
  phone?: string;
  whatsapp?: string;
  hours?: string;
};

// Dados confirmados via design_handoff_moduflexa_onepage/README.md
// (2026-08-14): endereço, horário, telefone e WhatsApp da unidade Perdizes.
export const stores: Store[] = [
  {
    id: "perdizes",
    name: "Moduflexa Perdizes",
    neighborhood: "Perdizes",
    city: "São Paulo",
    state: "SP",
    address: "Rua Desembargador do Vale, 1014, São Paulo, Brazil 0501040",
    phone: "1141790610",
    whatsapp: "5511936233568",
    hours: "Segunda a Sábado, 09h00 às 18h00",
  },
];

export const whatsappMessage =
  "Vi o site da moduflexa e gostaria de mais informacoes.";

export function buildWhatsappHref(whatsapp: string) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
}
