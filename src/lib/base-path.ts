// Prefixo de caminho do deploy, definido no build por NEXT_PUBLIC_BASE_PATH.
//
// - Coolify (domínio próprio, na raiz): variável ausente -> "".
// - GitHub Pages (nowpublicidade.github.io/moduflexa): "/moduflexa", setado
//   pelo workflow em .github/workflows/deploy.yml.
//
// O prefixo NEXT_PUBLIC_ é obrigatório: o valor também é lido em componentes
// de cliente, e só variáveis NEXT_PUBLIC_ são embutidas no bundle. Como o
// valor é inlinado em tempo de build, cada deploy carrega o seu.
//
// Usado pelo next.config.ts e por todo <img>/<picture>/next-image que aponta
// para /public — next/image não aplica basePath sozinho (docs:
// 01-app/03-api-reference/05-config/01-next-config-js/basePath.md, "Images").
const raw = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim();

export const basePath = raw === "/" ? "" : raw.replace(/\/+$/, "");

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
