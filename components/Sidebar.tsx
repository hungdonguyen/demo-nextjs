"use client";
import { motion } from "framer-motion";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted)
    return (
      <aside className="w-64 h-full bg-gray-100 dark:bg-gray-900">
        Loading...
      </aside>
    );

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
      className="w-64 h-full bg-gradient-to-b from-yellow-500 to-yellow-800 dark:from-gray-800 dark:to-gray-900 text-white p-6 flex flex-col shadow-2xl"
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
          <motion.li variants={itemVariants} className="group">
            <Link
              href="/"
              className="block p-3 bg-red-600 dark:bg-gray-700 rounded-lg cursor-pointer shadow-md transform transition-all duration-200 hover:scale-105 hover:bg-red-600 dark:hover:bg-gray-600"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">What is Next.js?</span>
              </div>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className="group">
            <Link
              href="/nextjs-module"
              className="block p-3 hover:bg-red-600 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">NextJs + module</span>
              </div>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className="group">
            <Link
              href="/responsive"
              className="block p-3 hover:bg-red-600 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">Responsive</span>
              </div>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className="group">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="block w-full text-left p-3 hover:bg-red-600 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">
                  {theme === "light" ? "🌙 Dark Theme" : "☀️ Light Theme"}
                </span>
              </div>
            </motion.button>
          </motion.li>
          <motion.li variants={itemVariants} className="group">
            <Link
              href="/language"
              className="block p-3 hover:bg-red-600 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">Change Language</span>
              </div>
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.aside>
  );
}
