"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
export default function SkillChart() {
  const data = [
    { skill: "JavaScript", percent: 1.3,  target: 2},
    { skill: "TypeScript", percent: 88.6, target: 95},
    { skill: "CSS", percent: 10.1, target: 3},
  ];
  return (
    <motion.div
      className="h-[300px] w-full"
      initial={{ opacity: 0, y: 50 }} // Ban đầu: Mờ và nằm thấp hơn 50px
      animate={{ opacity: 1, y: 0 }} // Lúc sau: Hiện rõ và trồi lên vị trí chuẩn
      transition={{ duration: 0.8 }} // Hiệu ứng diễn ra trong 0.8 giây
    >
      <h3>Language Charts</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout="vertical" //bỏ nếu muốn cột dọc
          barGap={2}
        >

          <XAxis type="number" domain={[0, 100]}  />
          <YAxis dataKey="skill" type="category" width={80} />
          {/* <XAxis dataKey="skill" type="category" width={80} />
          <YAxis type="number" domain={[0, 100]} /> */}
          <Tooltip cursor={{ fill: "transparent" }} />
          <Legend verticalAlign="top" height={36}/>
          <Bar
            dataKey="percent"
            radius={[0, 4, 4, 0]} // Bo tròn góc cột
            barSize={30}
            label={{ position: "right", fill: "#666" }} // Hiện số % bên cạnh
            fill="#ff1d1dff" // Màu cột
            isAnimationActive={true} // Bật animation (mặc định là true)
            animationDuration={1500} // Thời gian cột mọc lên (1.5 giây)
            animationEasing="ease-out" // Kiểu chạy: Nhanh đoạn đầu, chậm dần đoạn cuối (mượt hơn)
            animationBegin={200} // Chờ 200ms rồi mới bắt đầu chạy (để người dùng kịp nhìn thấy)
          />
          <Bar
            dataKey="target"
            radius={[0, 4, 4, 0]} // Bo tròn góc cột
            barSize={30}
            label={{ position: "right", fill: "#666" }} // Hiện số % bên cạnh
            fill="#09ff00ff"
            isAnimationActive={true} // Bật animation (mặc định là true)
            animationDuration={1500} // Thời gian cột mọc lên (1.5 giây)
            animationEasing="ease-out" // Kiểu chạy: Nhanh đoạn đầu, chậm dần đoạn cuối (mượt hơn)
            animationBegin={200} // Chờ 200ms rồi mới bắt đầu chạy (để người dùng kịp nhìn thấy)
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
