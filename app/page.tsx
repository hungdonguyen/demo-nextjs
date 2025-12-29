import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import ComparisonTable from "@/components/ComparisionTable";


export default function Home() {
  const topics = [
    {
      title: "Next.js là gì?",
      description:
        "Next.js là một Framework React được Vercel phát triển. Nó cung cấp các công cụ cần thiết để xây dựng một ứng dụng web hoàn chỉnh (Full-stack) mà React thuần không có sẵn.",
      imageUrl: "/next.svg",
    },
    {
      title: "Lợi ích của Next.js?",
      description:
        "Hỗ trợ SEO tuyệt đối nhờ Server-Side Rendering (SSR). Tốc độ tải trang cực nhanh nhờ tối ưu hóa hình ảnh, font chữ và code splitting tự động.",
      imageUrl:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    },
  ];
  return (
    <nav>
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {topics.map((topic) => (
          <Card key={topic.title} className="group relative flex flex-col h-full rounded-[2rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            {topic.imageUrl && (
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={topic.imageUrl}
                  alt={topic.title}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
            )}
            <CardContent className="flex flex-col flex-grow p-8">
              <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">
                {topic.title}
              </CardTitle>
              <CardDescription className="text-base leading-relaxed flex-grow">
                {topic.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <ComparisonTable />
    </nav>
  );
}
