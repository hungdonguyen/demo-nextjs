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
import { useTranslations } from "next-intl";

export default function ComparisonTable() {
  const t = useTranslations('comparison');

  // Data array cho các rows
  const firstrows = [
    {
      value: t('headers.criteria'),
      className:
        "px-6 py-4 text-sm font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
    },
    {
      value: t('headers.react'),
      className:
        "px-6 py-4 text-sm font-extrabold text-primary uppercase tracking-wider",
    },
    {
      value: t('headers.nextjs'),
      className:
        "px-6 py-4 text-sm font-extrabold text-chart-3 uppercase tracking-wider",
    },
  ];

  const rows = [
    {
      criteria: t('rows.nature.criteria'),
      react: t('rows.nature.react'),
      reactStyle: "text-sm",
      nextjs: t('rows.nature.nextjs'),
      nextjsStyle: "text-sm font-medium",
    },
    {
      criteria: t('rows.rendering.criteria'),
      react: t('rows.rendering.react'),
      reactStyle: "text-sm",
      nextjs: t('rows.rendering.nextjs'),
      nextjsStyle: "text-sm font-medium",
    },
    {
      criteria: t('rows.seo.criteria'),
      react: t('rows.seo.react'),
      reactStyle: "text-sm text-destructive",
      nextjs: t('rows.seo.nextjs'),
      nextjsStyle: "text-sm text-chart-2 font-bold",
    },
    {
      criteria: t('rows.routing.criteria'),
      react: t('rows.routing.react'),
      reactStyle: "text-sm",
      nextjs: t('rows.routing.nextjs'),
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
