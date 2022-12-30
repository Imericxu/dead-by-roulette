/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
