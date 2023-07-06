/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    productApi: "https://64a73357096b3f0fcc812948.mockapi.io/products",
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
