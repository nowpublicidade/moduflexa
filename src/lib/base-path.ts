// Fonte única do basePath do GitHub Pages (repositório de projeto, não
// user/organization page). Usado tanto pelo next.config.ts quanto pelos
// componentes que referenciam assets via <img>/<picture> em vez de
// next/image — este último já aplica o basePath sozinho.
export const basePath = "/moduflexa";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
