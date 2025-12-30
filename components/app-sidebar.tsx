"use client";

import { Home, Blocks, Smartphone, Moon, Sun, Globe, LogIn } from "lucide-react";
import { useTheme } from "next-themes";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
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
import { LocaleSwitcher } from "./LocaleSwitcher";

export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('sidebar');

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    {
      title: t('menu.home'),
      href: "/",
      icon: Home,
    },
    {
      title: t('menu.module'),
      href: "/nextjs-module",
      icon: Blocks,
    },
    {
      title: t('menu.responsive'),
      href: "/responsive",
      icon: Smartphone,
    },
    {
      title: t('menu.login'),
      href: "/login",
      icon: LogIn,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="px-2 py-2">
          <h2 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            {t('title')}
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
                      <span className="text-base p-2">{item.title}</span>
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
                  <span suppressHydrationWarning className="text-base p-2">
                    {mounted
                      ? theme === "light"
                        ? t('theme.dark')
                        : t('theme.light')
                      : t('theme.dark')}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

            {/* Language Switcher */}
            <LocaleSwitcher />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
