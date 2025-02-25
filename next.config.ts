// filepath: /C:/Users/Vizn/Desktop/projetoFilmes/moviesnext/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};
