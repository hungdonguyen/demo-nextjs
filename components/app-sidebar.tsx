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
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              {/* Dark Mode Toggle Button */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {mounted ? (
                    theme === "light" ? <Moon /> : <Sun />
                  ) : (
                    <Moon />
                  )}
                  <span suppressHydrationWarning>
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
