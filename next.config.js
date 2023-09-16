/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['quantumone.b-cdn.net', 'unpkg.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
