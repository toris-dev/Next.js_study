/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.daumcdn.net",
        port: "",
        pathname: "/thumb/**",
      },
    ],
  },
  productionSourceMaps: true,
  swcMinify: true,
};

export default nextConfig;
