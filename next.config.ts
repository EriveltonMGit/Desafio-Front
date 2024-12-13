import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  // Habilita o modo estrito do React para identificar problemas.
  webpack(config, { isServer }) {
    // Se você estiver usando customizações no Webpack, pode ser configurado aqui.
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

export default nextConfig;
