"use client";
import { useState } from "react"; // Thêm useState để lưu trạng thái loading
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios"; // Nhớ cài axios: npm install axios
import { useRouter } from "next/navigation"; // Để chuyển trang sau khi login

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
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false); // Trạng thái loading

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true); // Bắt đầu loading
    try {
      const response = await axios.post("/api/login", values);
      if (response.data.success) {
        console.log("Login successful:", response.data.user);
        alert("Đăng nhập thành công! Chào " + response.data.user.name);
        router.push("/"); // Chuyển đến trang chủ sau khi đăng nhập thành công
      } else {
        console.error("Login failed:", response.data.error);
        alert("Đăng nhập thất bại: " + response.data.error);
      }
    } catch (error: any) {
      console.error("Login error:", error);

      // Hiển thị thông báo lỗi chi tiết
      if (error.response) {
        // Server đã phản hồi với status code khác 2xx
        const errorMessage = error.response.data?.error || "Đăng nhập thất bại";
        if (error.response.status === 401) {
          alert(
            "⚠️ Email hoặc mật khẩu không đúng!\n\nVui lòng kiểm tra lại thông tin đăng nhập."
          );
        } else if (error.response.status === 500) {
          alert(
            "❌ Lỗi server: " +
              errorMessage +
              "\n\nVui lòng thử lại sau hoặc liên hệ admin."
          );
        } else {
          alert("❌ " + errorMessage);
        }
      } else if (error.request) {
        // Request đã được gửi nhưng không nhận được response
        alert(
          "❌ Không thể kết nối đến server.\n\nVui lòng kiểm tra kết nối mạng."
        );
      } else {
        // Lỗi khác
        alert("❌ Đã xảy ra lỗi: " + error.message);
      }
    } finally {
      setLoading(false); // Kết thúc loading
    }
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
          <CardTitle className="text-2xl text-center">Đăng Nhập</CardTitle>
          <CardDescription className="text-center text-gray-500">
            Vui lòng nhập thông tin tài khoản của bạn
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
                    <FormLabel>Email</FormLabel>
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
                    <FormLabel>Mật Khẩu</FormLabel>
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
                {loading ? "Đang đăng nhập..." : "Đăng Nhập"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
