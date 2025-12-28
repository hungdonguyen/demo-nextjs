"use client"; // Bắt buộc vì lottie-react dùng hooks

import Lottie from "lottie-react";
import loadingData from "@/components/animations/loading-animation.json"; 

export default function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Component Lottie */}
      <div className="w-32 h-32"> {/* Chỉnh kích thước to nhỏ ở đây */}
        <Lottie 
          animationData={loadingData} 
          loop={true} // Cho phép lặp lại vô tận
          autoplay={true} // Tự động chạy
        />
      </div>
      
      {/* Dòng chữ loading (nếu thích) */}
      <p className="text-slate-500 text-sm mt-2 font-medium animate-pulse">
        Đang tải dữ liệu...
      </p>
    </div>
  );
}