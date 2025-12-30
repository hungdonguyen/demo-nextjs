"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SkillChart from "@/components/SkillChart";

export default function Page() {
  const t = useTranslations('module');

  const moduleInfo = [
    {
      id: 1,
      title: t('modules.what_is_module.title'),
      desc: t('modules.what_is_module.description'),
    },
    {
      id: 2,
      title: t('modules.folder_structure.title'),
      desc: t('modules.folder_structure.description'),
    },
    {
      id: 3,
      title: t('modules.workflow.title'),
      desc: t('modules.workflow.description'),
    },
  ];
  return (
    <motion.div className="min-h-screen p-8 max-w-7xl mx-auto space-y-6">
      <motion.h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {t('title')}
      </motion.h1>
      <motion.p className="text-gray-500 dark:text-gray-400">
        {t('subtitle')}
      </motion.p>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {moduleInfo.map((info) => (
          <Card key={info.id} className="hover:shadow-xl transition-shadow">
            <CardContent className="pt-1">
              <CardTitle className="mb-3 text-primary text-xl">
                {info.title}
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {info.desc}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </motion.div>
      <div className="mt-10 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border">
        <SkillChart />
      </div>
    </motion.div>
  );
}
