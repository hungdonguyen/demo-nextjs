import type { NextConfig } from "next";
import createNextIntPlugin from "next-intl/plugin";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Cho phép tải ảnh từ Unsplash
      },
      // Nếu sau này dùng ảnh từ Facebook hay nơi khác thì thêm tiếp vào đây
    ],
  },
};
const withNextIntl = createNextIntPlugin({});
export default withNextIntl(nextConfig);
