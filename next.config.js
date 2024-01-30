/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
  {
    source: "/public/resume.html",
    destination: "/app/api/resume.js",
  },
],
  images : {
    domains : ['quantumone.b-cdn.net', 'unpkg.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
