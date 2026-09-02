import path from "node:path";
import type { NextConfig } from "next";
import { basePath } from "./src/lib/base-path";

const nextConfig: NextConfig = {
  // Export estático: serve tanto o GitHub Pages quanto o Coolify (build pack
  // Static, publish directory "out"). Atenção: com output:'export' o
  // "next start" falha por design — o próprio Next aborta pedindo para servir
  // a pasta "out" (docs: 01-app/02-guides/static-exports.md).
  //
  // basePath vem do ambiente: vazio na raiz de um domínio próprio, e
  // "/moduflexa" no GitHub Pages, que serve num subcaminho. Ver
  // src/lib/base-path.ts.
  //
  // Sem servidor Node, a otimização de imagem do next/image não está
  // disponível — daí o images.unoptimized.
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },

  // Pins the workspace root to this project — a stray package-lock.json in
  // the parent home directory otherwise makes Turbopack's root detection
  // ambiguous.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
