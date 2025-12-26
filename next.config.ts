import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Cho phép tải ảnh từ Unsplash
      },
      // Nếu sau này dùng ảnh từ Facebook hay nơi khác thì thêm tiếp vào đây
    ],
  },
};

export default nextConfig;
