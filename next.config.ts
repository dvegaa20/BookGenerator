import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["covers.openlibrary.org"],
  },
};

export default nextConfig;
