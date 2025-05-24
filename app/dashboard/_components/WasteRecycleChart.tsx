"use client";

import { waste_recycled } from "@/app/data/dashboard";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const WasteRecycleChart = () => {
  return (
    <section className="w-full pt-8 h-max">
      <div className="w-full bg-white rounded-lg p-4 h-max">
        <h1 className="font-clash_display_medium text-neutrals700 text-sm md:text-base">
          Total waste recycled
        </h1>
        <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl font-clash_display_semibold mt-3 text-neutrals900">
          3500kg
        </h2>

        <div className="w-full mt-7 font-clash_display text-neutrals500">
          <BarChart
            width={850}
            className="text-sm"
            height={280}
            data={waste_recycled}
          >
            <Bar
              dataKey="uv"
              fill="#DFF0D7"
              className="hover:fill-primary ease transition-all duration-300"
            />
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `${value}Kg`} />
            <Tooltip contentStyle={{ color: "#5EB237" }} />
          </BarChart>
        </div>
      </div>
    </section>
  );
};

export default WasteRecycleChart;
