/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static exports
  webpack: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        extensionAlias: {
          ".js": [".js", ".ts"],
          ".jsx": [".jsx", ".tsx"],
        },
      },
    };
  },
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
