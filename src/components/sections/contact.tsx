import { Container } from "@/components/layout/container";

// WhatsApp/telefone ficam pendentes até existir número oficial confirmado
// (07-development-rules.md §77 — esconder, nunca renderizar href quebrado).
// O formulário (01-page-structure.md §16) foi adiado: sem destino de envio
// definido (sem backend/API no escopo do MVP), implementá-lo agora criaria
// uma interação que não funciona de verdade.
export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="bg-white py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto flex max-w-[55ch] flex-col gap-6 text-center">
          <h2
            id="contact-title"
            className="text-[clamp(2rem,4vw,4.5rem)] leading-[1.05] font-bold text-brand-navy"
          >
            Quer entender qual solução combina com o seu espaço?
          </h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Fale com a Moduflexa e descubra o que cabe na sua rotina.
          </p>
          <p className="text-sm text-text-muted">
            Canais diretos de contato (WhatsApp e telefone) estão em
            confirmação. Enquanto isso,{" "}
            <a href="#unidades" className="font-medium text-brand-orange">
              encontre uma unidade
            </a>{" "}
            para falar com a Moduflexa de perto.
          </p>
        </div>
      </Container>
    </section>
  );
}
