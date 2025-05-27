"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Active companies", value: 188 },
  { name: "Inactive companies", value: 62 },
];

const COLORS = ["#0E7A99", "#DFEDF2"]; // Active = green, Inactive = grey

const CompanyStatusOverview = () => {
  return (
    <div className="px-5 py-6 bg-white rounded-xl h-full">
      <h2 className="text-neutrals900 text-sm sm:text-base md:text-lg xl:text-xl font-semibold">
        Companies status overview
      </h2>

      <div className="w-full flex justify-center items-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default CompanyStatusOverview;
