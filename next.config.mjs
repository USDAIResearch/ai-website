/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
    serverActions: {
      bodySizeLimit: "3mb",
    },
  },
};

export default nextConfig;
