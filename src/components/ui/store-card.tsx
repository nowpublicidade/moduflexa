import Image from "next/image";
import { buildWhatsappHref, type Store } from "@/data/stores";
import { withBasePath } from "@/lib/base-path";

type StoreCardProps = {
  store: Store;
};

// Card de duas colunas (README §13): foto à esquerda, dados à direita.
// WhatsApp só renderiza com número real (07-development-rules.md §77);
// "Como chegar" usa o endereço completo quando disponível, com fallback de
// busca por nome+bairro+cidade quando não houver (nunca inventa coordenada).
export function StoreCard({ store }: StoreCardProps) {
  const whatsappHref = store.whatsapp ? buildWhatsappHref(store.whatsapp) : undefined;

  const directionsQuery = store.address
    ? `${store.name}, ${store.address}`
    : `${store.name}, ${store.neighborhood}, ${store.city} - ${store.state}`;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(directionsQuery)}`;

  return (
    <div
      className="grid overflow-hidden border bg-white"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        borderColor: "var(--color-hairline-10)",
      }}
    >
      <div className="group relative min-h-[320px] overflow-hidden">
        <Image
          src={withBasePath("/unidades/perdizes.jpg")}
          alt={`Fachada da unidade ${store.name}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
        />
      </div>

      <div
        className="flex flex-col gap-6"
        style={{ padding: "clamp(28px,4vw,56px)" }}
      >
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold tracking-[0.16em] text-brand-orange uppercase">
            Unidade 01
          </span>
          <h3 className="font-heading text-2xl font-medium text-brand-navy">
            {store.name}
          </h3>
          <p className="text-sm text-text-tertiary">
            {store.neighborhood}, {store.city} – {store.state}
          </p>
        </div>

        <div
          className="grid gap-6 border-t pt-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            borderColor: "var(--color-hairline-10)",
          }}
        >
          {store.address ? (
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-[0.14em] text-text-tertiary uppercase">
                Endereço
              </span>
              <address className="text-sm font-light text-text-body not-italic">
                {store.address}
              </address>
            </div>
          ) : null}

          {store.hours ? (
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-[0.14em] text-text-tertiary uppercase">
                Horário
              </span>
              <p className="text-sm font-light text-text-body">{store.hours}</p>
            </div>
          ) : null}

          {store.phone ? (
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-[0.14em] text-text-tertiary uppercase">
                Telefone
              </span>
              <a
                href={`tel:+55${store.phone}`}
                className="text-sm font-light text-text-body hover:text-brand-orange"
              >
                (11) 4179-0610
              </a>
            </div>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3">
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-pill bg-brand-orange px-6 text-[13px] font-semibold text-white transition-colors hover:bg-brand-orange-dark"
            >
              Falar no WhatsApp
            </a>
          ) : null}

          <a
            href={directionsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-pill border border-brand-navy px-6 text-[13px] font-semibold text-brand-navy transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white"
          >
            Como chegar
          </a>
        </div>
      </div>
    </div>
  );
}
