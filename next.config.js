/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Ativa o modo estrito do React
  swcMinify: true,        // Habilita a minificação do código com SWC
};

module.exports = nextConfig;
module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.minimize = false;
    }
    return config;
  }
};