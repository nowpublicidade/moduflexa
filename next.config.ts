import path from "node:path";
import type { NextConfig } from "next";
import { basePath } from "./src/lib/base-path";

const nextConfig: NextConfig = {
  // Publicado como repositório de projeto no GitHub Pages
  // (nowpublicidade.github.io/moduflexa), não como user/organization page —
  // por isso precisa de output:'export' + basePath/assetPrefix. Sem servidor
  // Node no GitHub Pages, a otimização de imagem do next/image também não
  // está disponível (docs: 01-app/02-guides/static-exports.md).
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
