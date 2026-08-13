# Moduflexa

Website institucional one-page da Moduflexa — móveis flexíveis e retráteis.

A documentação vigente do projeto (arquitetura, storytelling, design system, motion,
SEO/performance, assets e regras de desenvolvimento) está em [`/docs`](./docs). Ela é a
fonte de verdade: qualquer dúvida de implementação deve ser resolvida ali antes do código.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev         # servidor de desenvolvimento
npm run lint         # ESLint
npm run typecheck    # TypeScript (tsc --noEmit)
npm run build         # build de produção
```

Antes de considerar qualquer etapa concluída, `lint`, `typecheck` e `build` devem passar
sem erros (`docs/07-development-rules.md` §87).
