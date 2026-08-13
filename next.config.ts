import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pins the workspace root to this project — a stray package-lock.json in
  // the parent home directory otherwise makes Turbopack's root detection
  // ambiguous.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
