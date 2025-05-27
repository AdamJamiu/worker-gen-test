"use client";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function MiniChart({
  data,
  color = "#5eb237",
}: {
  data?: any;
  color?: string;
}) {
  const chartData = [
    { value: 2000 },
    { value: 3000 },
    { value: 2500 },
    { value: 2800 },
    { value: 3200 },
    { value: 4000 },
    { value: 4200 },
  ];
  return (
    <div className="w-28 h-10">
      {/* Adjust width/height as needed */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color} // Tailwind green-400
            fill="white" // Tailwind green-100
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
