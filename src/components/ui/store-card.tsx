import type { Store } from "@/data/stores";

type StoreCardProps = {
  store: Store;
};

// 02-design-system.md §52. WhatsApp only renders once a real number exists
// (07-development-rules.md §77 — hide, never render a dead href). "Como
// chegar" stays always-on: a Maps *search* for name + neighborhood/city is
// honest even without a stored street address, per 00 §77 / 05 §77.
export function StoreCard({ store }: StoreCardProps) {
  const whatsappHref = store.whatsapp
    ? `https://wa.me/${store.whatsapp}`
    : undefined;

  const directionsQuery = store.address
    ? `${store.name}, ${store.address}`
    : `${store.name}, ${store.neighborhood}, ${store.city} - ${store.state}`;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(directionsQuery)}`;

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-white p-6 md:p-8">
      <div>
        <h3 className="text-xl font-bold text-brand-navy">{store.name}</h3>
        <p className="text-sm text-text-muted">
          {store.neighborhood}, {store.city} – {store.state}
        </p>
      </div>

      {store.address ? (
        <address className="text-sm text-text not-italic">
          {store.address}
        </address>
      ) : null}

      {store.hours ? <p className="text-sm text-text">{store.hours}</p> : null}

      <div className="flex flex-wrap gap-3 pt-2">
        {whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-pill bg-brand-orange px-6 text-sm font-bold text-white transition-colors hover:bg-brand-orange-dark"
          >
            Falar no WhatsApp
          </a>
        ) : null}

        <a
          href={directionsHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-pill border border-brand-navy px-6 text-sm font-bold text-brand-navy"
        >
          Como chegar
        </a>
      </div>

      {!whatsappHref ? (
        <p className="text-xs text-text-muted">
          WhatsApp desta unidade em confirmação.
        </p>
      ) : null}
    </div>
  );
}
