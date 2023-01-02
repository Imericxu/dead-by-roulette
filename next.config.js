/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/roulette",
        destination: "/roulette/survivor",
        permanent: true,
      },
      {
        source: "/survivor",
        destination: "/roulette/survivor",
        permanent: true,
      },
      {
        source: "/killer",
        destination: "/roulette/killer",
        permanent: true,
      },
      {
        source: "/settings",
        destination: "/settings/survivor",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
