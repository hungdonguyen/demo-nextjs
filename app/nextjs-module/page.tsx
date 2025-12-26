import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function Page() {
  const moduleInfo = [
    {
      id: 1,
      title: "Module trong Next.js là gì?",
      desc: "Là tư duy 'đóng gói' tính năng. Một module chứa trọn vẹn Giao diện (UI), Logic và API của tính năng đó. Nó giống như một Class trong OOP: che giấu sự phức tạp bên trong và chỉ mở ra những gì cần thiết để bên ngoài sử dụng.",
    },
    {
      id: 2,
      title: "Cấu trúc thư mục Feature",
      desc: "Code chính nằm trong `src/features/`. Mỗi tính năng (ví dụ: `auth`, `cart`) là một thư mục riêng chứa `components`, `hooks`, `types`. Thư mục `app/` chỉ đóng vai trò định tuyến (Routing) và gọi module ra hiển thị.",
    },
    {
      id: 3,
      title: "Quy trình kết hợp (Workflow)",
      desc: "Quy trình 3 bước chuẩn: (1) Viết logic trong `features/` -> (2) Export những thứ cần thiết qua file `index.ts` (Cổng giao tiếp) -> (3) Import gọn gàng vào `app/page.tsx`. Giúp code sạch, dễ tìm và dễ bảo trì.",
    },
  ];
  return (
    
    <div className="min-h-screen p-8 max-w-7xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Kiến trúc Module (Feature-First)
        </h1>
      <p className="text-gray-500 dark:text-gray-400">
          Tư duy tổ chức code hiện đại cho dự án Next.js
        </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {moduleInfo.map((info) => (
          <Card key={info.id} className="hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <CardTitle className="mb-3 text-primary text-xl">{info.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{info.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
