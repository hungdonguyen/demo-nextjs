"use client";

import { Home, Blocks, Smartphone, Moon, Sun, Globe, LogIn } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    {
      title: "What is Next.js?",
      href: "/",
      icon: Home,
    },
    {
      title: "NextJs + module",
      href: "/nextjs-module",
      icon: Blocks,
    },
    {
      title: "Responsive",
      href: "/responsive",
      icon: Smartphone,
    },
    {
      title: "Change Language",
      href: "/language",
      icon: Globe,
    },
    {
      title: "Login Page",
      href: "/login",
      icon: LogIn,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="px-2 py-2">
          <h2 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Next.js Demo
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem
                  key={item.href}
                  className="py-3 px-4 my-2 rounded-md"
                >
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                      <span className="truncate text-base">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              {/* Dark Mode Toggle Button */}
              <SidebarMenuItem className="py-3 px-4 my-2 rounded-md">
                <SidebarMenuButton
                  className="flex items-center gap-3"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {mounted ? (
                    theme === "light" ? (
                      <Moon className="h-5 w-5 md:h-6 md:w-6" />
                    ) : (
                      <Sun className="h-5 w-5 md:h-6 md:w-6" />
                    )
                  ) : (
                    <Moon className="h-5 w-5 md:h-6 md:w-6" />
                  )}
                  <span suppressHydrationWarning className="truncate text-base">
                    {mounted
                      ? theme === "light"
                        ? "Dark Theme"
                        : "Light Theme"
                      : "Dark Theme"}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
