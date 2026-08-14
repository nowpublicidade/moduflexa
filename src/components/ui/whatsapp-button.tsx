import { buildWhatsappHref } from "@/data/stores";

type WhatsappButtonProps = {
  whatsapp: string;
};

// Botão flutuante (README §16): pílula que expande no hover revelando o
// rótulo. Só renderiza com número real — 07-development-rules.md §77.
export function WhatsappButton({ whatsapp }: WhatsappButtonProps) {
  return (
    <a
      href={buildWhatsappHref(whatsapp)}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Moduflexa no WhatsApp"
      className="group fixed z-[80] flex items-center overflow-hidden rounded-pill text-white shadow-[var(--shadow-whatsapp)] transition-shadow duration-[450ms] hover:shadow-[0_14px_38px_rgba(21,42,70,0.36)]"
      style={{
        right: "clamp(16px,2.5vw,32px)",
        bottom: "clamp(16px,2.5vw,32px)",
        height: 60,
        padding: "0 18px",
        gap: 0,
        backgroundColor: "var(--color-whatsapp)",
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        width={26}
        height={26}
        fill="currentColor"
        className="shrink-0"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.696 4.61 1.897 6.484L4 29l7.72-1.865A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.988 16.99c-.297.836-1.47 1.56-2.415 1.762-.643.137-1.482.246-4.31-.926-3.62-1.5-5.95-5.163-6.13-5.402-.178-.24-1.474-1.963-1.474-3.745 0-1.782.933-2.656 1.264-3.02.331-.365.724-.456.965-.456.24 0 .482.003.693.014.223.011.522-.085.816.622.297.717 1.01 2.478 1.098 2.658.089.18.148.393.03.633-.12.24-.18.39-.356.6-.178.21-.374.469-.535.63-.178.178-.363.371-.156.73.208.36.923 1.523 1.982 2.466 1.362 1.216 2.51 1.593 2.87 1.772.36.178.57.15.78-.09.208-.24.892-1.04 1.13-1.397.238-.359.476-.3.803-.18.328.12 2.08.982 2.437 1.16.357.18.594.267.682.417.09.15.09.87-.207 1.706Z" />
      </svg>

      <span
        className="max-w-0 overflow-hidden text-[13px] font-semibold whitespace-nowrap opacity-0 transition-[max-width,opacity,margin-left] duration-[450ms] group-hover:ml-[10px] group-hover:max-w-[190px] group-hover:opacity-100"
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      >
        Fale com a gente
      </span>
    </a>
  );
}
