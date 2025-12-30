"use client";
import { useState } from "react"; // Thêm useState để lưu trạng thái loading
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation"; // Để chuyển trang sau khi login
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Vui lòng nhập email") // Không được để trống
    .email("Email không hợp lệ"), // Phải có @ và đuôi tên miền
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"), // Độ dài tối thiểu
});

export default function LoginPage() {
  const t = useTranslations('login');
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false); // Trạng thái loading

  // Mock users data - no database needed
  const mockUsers = [
    { email: "test@example.com", password: "password123", name: "Test User" },
    { email: "admin@example.com", password: "admin123", name: "Admin User" }
  ];

  function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true);
    
    // Simulate loading time
    setTimeout(() => {
      const user = mockUsers.find(u => u.email === values.email && u.password === values.password);
      
      if (user) {
        console.log("Login successful:", user);
        alert("Đăng nhập thành công! Chào " + user.name);
        router.push("/");
      } else {
        alert("⚠️ Email hoặc mật khẩu không đúng!\n\nThử: test@example.com / password123");
      }
      
      setLoading(false);
    }, 1000);
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{t('title')}</CardTitle>
          <CardDescription className="text-center text-gray-500">
            {t('description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('form.email')}</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('form.password')}</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={loading} // Vô hiệu hóa nút khi đang loading
              >
                {loading ? t('form.loading') : t('form.submit')}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
