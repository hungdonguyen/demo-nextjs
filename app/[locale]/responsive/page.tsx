export default function ReponsivePage() {
  return (
    <div className="p-10 space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">Bài 1: Tắc kè hoa</h2>
        <p>Thử co giãn trình duyệt của bạn từ to xuống nhỏ xem!</p>
        <div
          className="
          w-full h-32 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg
          bg-red-500        
          md:bg-yellow-500  
          lg:bg-green-500   
        "
        >
          <span className="block md:hidden">📱 Đây là Mobile (Đỏ)</span>
          <span className="hidden md:block lg:hidden">
            iPad / Tablet (Vàng)
          </span>
          <span className="hidden lg:block">💻 Laptop / PC (Xanh)</span>
        </div>
      </div>
      {/* BÀI 2: LAYOUT LƯỚI */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Bài 2: Chia cột thông minh</h2>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-40 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border-2 border-slate-300"
            >
              Item {item}
            </div>
          ))}
        </div>
      </div>

      {/* BÀI 3: ẨN HIỆN NỘI DUNG */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Bài 3: Ẩn hiện nội dung</h2>

        <div className="flex gap-4 border p-4 rounded-xl">
          {/* Ảnh Avatar: Chỉ hiện trên Tablet trở lên */}
          <div className="hidden md:block w-20 h-20 bg-blue-200 rounded-full flex-shrink-0"></div>

          <div>
            <h3 className="font-bold text-lg">Nguyễn Văn A</h3>
            <p className="text-gray-600">
              Đây là đoạn mô tả. Trên điện thoại bạn sẽ không thấy cái cục tròn
              (Avatar) bên cạnh đâu. Vì đất chật người đông mà! Nhưng mở to màn
              hình ra là nó xuất hiện liền.
            </p>
          </div>
        </div>
      </div>

      {/* BÀI 4: CHỮ CO GIÃN */}
      <div className="space-y-4 border-t pt-4">
        <h2 className="text-xl font-bold">Bài 4: Chữ to chữ nhỏ</h2>
        
        <div className="bg-slate-100 p-6 rounded-xl">
          <h1 className="font-extrabold text-blue-600 
            text-2xl        
            md:text-4xl     
            lg:text-6xl     
          ">
            Responsive Text
          </h1>
          
          <p className="mt-2 text-slate-600
            text-sm         
            md:text-base    
            lg:text-lg      
          ">
            Dòng chữ này sẽ nhỏ xíu trên điện thoại để tiết kiệm chỗ, 
            nhưng sẽ to dần lên khi bạn mở bằng máy tính để dễ đọc hơn.
          </p>
        </div>
      </div>

      {/* BÀI 5: FLEX WRAP (TỰ XUỐNG DÒNG) */}
      <div className="space-y-4 border-t pt-4">
        <h2 className="text-xl font-bold">Bài 5: Flex Wrap cho Tags</h2>
        <p>Thử co nhỏ màn hình để xem các thẻ tự rớt xuống dòng nhé.</p>
        
        <div className="flex flex-wrap gap-2">
          {[
            "ReactJS", "Next.js", "Tailwind CSS", "TypeScript", 
            "Node.js", "Prisma", "PostgreSQL", "MongoDB",
            "Docker", "Kubernetes", "AWS", "Google Cloud"
          ].map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
