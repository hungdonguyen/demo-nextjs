"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { motion } from "framer-motion";

export default function ComparisonTable() {
  // Data array cho các rows
  const firstrows = [
    {
      value: "Tiêu chí",
      className:
        "px-6 py-4 text-sm font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
    },
    {
      value: "React (Library)",
      className:
        "px-6 py-4 text-sm font-extrabold text-primary uppercase tracking-wider",
    },
    {
      value: "Next.js (Framework)",
      className:
        "px-6 py-4 text-sm font-extrabold text-chart-3 uppercase tracking-wider",
    },
  ];

  const rows = [
    {
      criteria: "Bản chất",
      react: "Là thư viện UI (Chỉ lo phần Giao diện)",
      reactStyle: "text-sm",
      nextjs: "Là Framework (Giao diện + Routing + Backend)",
      nextjsStyle: "text-sm font-medium",
    },
    {
      criteria: "Rendering",
      react: "Client-side (Render tại trình duyệt)",
      reactStyle: "text-sm",
      nextjs: "Server-side (Render tại máy chủ)",
      nextjsStyle: "text-sm font-medium",
    },
    {
      criteria: "SEO (Google)",
      react: "Thấp (Khó SEO)",
      reactStyle: "text-sm text-destructive",
      nextjs: "Rất tốt (Tối ưu sẵn)",
      nextjsStyle: "text-sm text-chart-2 font-bold",
    },
    {
      criteria: "Routing",
      react: "Cài thêm thư viện ngoài (React Router)",
      reactStyle: "text-sm",
      nextjs: "File-system (Tự động theo thư mục)",
      nextjsStyle: "text-sm font-medium",
    },
  ];

  return (
    <motion.div
      className="overflow-x-auto rounded-xl border shadow-lg mt-10 m-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Table>
        <TableHeader className="bg-muted/50">
          <motion.tr
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {firstrows.map((firstrow, index) => (
              <TableHead key={index} className={firstrow.className}>
                {firstrow.value}
              </TableHead>
            ))}
          </motion.tr>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <motion.tr
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.02)",
                scale: 1.01,
                transition: { duration: 0.2 },
              }}
            >
              <TableCell className="px-6 py-4 text-sm font-medium">
                {row.criteria}
              </TableCell>
              <TableCell className={`px-6 py-4 ${row.reactStyle}`}>
                {row.react}
              </TableCell>
              <TableCell className={`px-6 py-4 ${row.nextjsStyle}`}>
                {row.nextjs}
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
