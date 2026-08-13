export type Store = {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  state: string;
  // Confirmed fields only: 05-seo-performance.md §6 documents the brand's
  // existing association with "Cama Retrátil SP" and a location in Pompéia.
  // Everything below is genuinely unconfirmed — 07-development-rules.md §117
  // forbids inventing it, so these stay undefined until real data arrives.
  address?: string; // TODO: confirmar endereço completo antes do deploy
  phone?: string; // TODO: confirmar telefone antes do deploy
  whatsapp?: string; // TODO: confirmar WhatsApp oficial antes do deploy (número em formato internacional, ex: 5511999999999)
  hours?: string; // TODO: confirmar horário de funcionamento antes do deploy
};

export const stores: Store[] = [
  {
    id: "pompeia",
    name: "Moduflexa Pompéia",
    neighborhood: "Pompéia",
    city: "São Paulo",
    state: "SP",
  },
];
