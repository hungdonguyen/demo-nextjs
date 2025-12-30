"use client";
import { motion } from "framer-motion";
import { 
  Home, Blocks, Smartphone, Moon, Sun, Globe, LogIn, Menu 
} from "lucide-react"; // Đừng quên import icon Menu
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";

type MenuItem =
  | {
      type: "link";
      href: string;
      label: string;
      icon: React.ElementType;
      className: string;
    }
  | {
      type: "button";
      label: string;
      icon: React.ElementType;
      onClick: () => void;
      className: string;
    };

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [openMenu, setOpenMenu] = useState(false); 
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted)
    return (
      <aside className="w-64 h-full bg-white dark:bg-[#0F172A] p-6 flex flex-col border-r border-gray-200 dark:border-transparent">
        {/* 1. Phần Header Skeleton (Chữ Next.js Demo) */}
        <div className="mb-8 mt-2">
          <Skeleton className="h-8 w-40 rounded-lg" />
        </div>

        {/* 2. Phần Menu Items Skeleton (Icon + Chữ) */}
        <div className="space-y-3">
          {/* Lặp 6 lần tương ứng với 6 menu item của bạn */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-3 p-3">
              <Skeleton className="h-5 w-5 rounded-md" /> {/* Giả lập Icon */}
              <Skeleton className="h-4 w-32 rounded-md" /> {/* Giả lập Label */}
            </div>
          ))}
        </div>
      </aside>
    );

  const menuItems: MenuItem[] = [
    {
      type: "link",
      href: "/",
      label: "What is Next.js?",
      icon: Home,
      className:
        pathname === "/"
          ? "bg-blue-50 text-blue-700 dark:bg-[#1E293B] dark:text-[#94A3B8] shadow-sm dark:shadow-blue-500/10"
          : "text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-[#1E293B] dark:text-[#94A3B8] hover:shadow-sm dark:hover:shadow-blue-500/10",
    },
    {
      type: "link",
      href: "/nextjs-module",
      label: "NextJs + module",
      icon: Blocks,
      className:
        pathname === "/nextjs-module"
          ? "bg-blue-50 text-blue-700 dark:bg-[#1E293B] dark:text-[#94A3B8] shadow-sm dark:shadow-blue-500/10"
          : "text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-[#1E293B] dark:text-[#94A3B8] hover:shadow-sm dark:hover:shadow-blue-500/10",
    },
    {
      type: "link",
      href: "/responsive",
      label: "Responsive",
      icon: Smartphone,
      className:
        pathname === "/responsive"
          ? "bg-blue-50 text-blue-700 dark:bg-[#1E293B] dark:text-[#94A3B8] shadow-sm dark:shadow-blue-500/10"
          : "text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-[#1E293B] dark:text-[#94A3B8] hover:shadow-sm dark:hover:shadow-blue-500/10",
    },
    {
      type: "button",
      label: theme === "light" ? "Dark Theme" : "Light Theme",
      icon: theme === "light" ? Moon : Sun,
      onClick: () => setTheme(theme === "light" ? "dark" : "light"),
      className:
        "text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-[#1E293B] dark:text-[#94A3B8] hover:shadow-sm dark:hover:shadow-blue-500/10",
    },
    {
      type: "link",
      href: "/language",
      label: "Change Language",
      icon: Globe,
      className:
        pathname === "/language"
          ? "bg-blue-50 text-blue-700 dark:bg-[#1E293B] dark:text-[#94A3B8] shadow-sm dark:shadow-blue-500/10"
          : "text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-[#1E293B] dark:text-[#94A3B8] hover:shadow-sm dark:hover:shadow-blue-500/10",
    },
    {
      type: "link",
      href: "/login",
      label: "Login Page",
      icon: LogIn,
      className:
        pathname === "/login"
          ? "bg-blue-50 text-blue-700 dark:bg-[#1E293B] dark:text-[#94A3B8] shadow-sm dark:shadow-blue-500/10"
          : "text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-[#1E293B] dark:text-[#94A3B8] hover:shadow-sm dark:hover:shadow-blue-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.aside
      className="w-64 h-full bg-white dark:from-[#0F172A] dark:to-[#0F172A] dark:bg-gradient-to-b text-gray-800 dark:text-white p-6 flex flex-col shadow-2xl border-r border-gray-200 dark:border-transparent"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Next.js Demo
          </span>
        </h2>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          {menuItems.map((item, index) => (
            <motion.li key={index} variants={itemVariants} className="group">
              {item.type === "link" ? (
                <Link
                  href={item.href}
                  className={`block p-3 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${item.className}`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      size={20}
                      strokeWidth={2}
                      className={
                        pathname === item.href
                          ? "text-blue-600 dark:text-white"
                          : "text-gray-500 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-white transition-colors"
                      }
                    />
                    <span className="font-medium">{item.label}</span>
                  </div>
                </Link>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={item.onClick}
                  className={`block w-full text-left p-3 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${item.className}`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      size={20}
                      strokeWidth={2}
                      className="text-gray-500 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-white transition-colors"
                    />
                    <span className="font-medium">{item.label}</span>
                  </div>
                </motion.button>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.aside>
  );
}
