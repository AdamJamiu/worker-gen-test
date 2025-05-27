"use client";

import Switch from "@/app/components/ui/Switch";
import { sub_revenue } from "@/app/data/dashboard";
import { formatNumberShort } from "@/app/utils/utils";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export type PlanType = "monthly" | "quarterly" | "yearly" | "halfyear";

const SubRevenueChart = () => {
  const [isShowPlanBreak, setIsShowPlanBreak] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState<
    "3-months" | "6-months" | "1-year"
  >("3-months");

  const planColors: Record<PlanType, string> = {
    monthly: "#CFE4EB",
    quarterly: "#AFD3DD",
    yearly: "#BDCC87",
    halfyear: "#D3DDAF",
  };

  return (
    <section className="w-full h-">
      <div className="w-full bg-white rounded-lg px-4 py-6">
        <div className="w-full flex justify-between items-start gap-5 sm:flex-nowrap flex-wrap">
          <div>
            <h1 className="font-bricolage text-neutrals700 lg:text-lg font-medium">
              Subscription revenue
            </h1>
            <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl font-bold clash-display-semibold mt-3 text-neutrals900">
              $24500
            </h2>
          </div>

          <div className="flex justify-start items-center gap-2">
            <p className="font-medium text-neutrals700 text-sm">
              Show plan breakdown
            </p>
            <Switch setIsOpen={setIsShowPlanBreak} isOpen={isShowPlanBreak} />
          </div>
        </div>

        <div className="flex justify-between items-center w-full mt-4">
          <div></div>
          <div className="flex justify-start items-center gap-3 font-bricolage font-medium text-sm">
            <button
              onClick={() => setSelectedDuration("3-months")}
              className={`${
                selectedDuration === "3-months"
                  ? "text-primary bg-primary100 border-primary"
                  : "text-[#B3B3B3] border-neutrals400"
              } px-2 py-1 rounded-md border-[1.5px] ease transition-all duration-200`}
            >
              3 months
            </button>

            <button
              onClick={() => setSelectedDuration("6-months")}
              className={`${
                selectedDuration === "6-months"
                  ? "text-primary bg-primary100 border-primary"
                  : "text-[#B3B3B3] border-neutrals400"
              } px-2 py-1 rounded-md border-[1.5px] ease transition-all duration-200`}
            >
              6 months
            </button>

            <button
              onClick={() => setSelectedDuration("1-year")}
              className={`${
                selectedDuration === "1-year"
                  ? "text-primary bg-primary100 border-primary"
                  : "text-[#B3B3B3] border-neutrals400"
              } px-2 py-1 rounded-md border-[1.5px] ease transition-all duration-200`}
            >
              1 year
            </button>
          </div>
        </div>

        <div className="w-full mt-10 font-bricolage text-neutrals500 overflow-x-auto">
          <BarChart
            width={850}
            className="text-sm"
            height={280}
            data={sub_revenue}
          >
            <Bar
              dataKey="uv"
              fill="#DFF0D7"
              className="hover:fill-primary ease transition-all duration-300"
            >
              {sub_revenue.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={planColors[entry.plan]} />
              ))}
            </Bar>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${formatNumberShort(value)}`} />
            <Tooltip contentStyle={{ color: "#5EB237" }} />
          </BarChart>

          <div className="mt-4 w-full flex justify-center sm:flex-nowrap flex-wrap items-center gap-4 font-medium text-neutrals700 text-sm sticky bottom-2 right-0 left-0">
            <div className="flex justify-start items-center gap-2">
              <p className="p-1.5 rounded bg-[#AFD3DD]"></p>
              <p className="">Quarterly plan</p>
            </div>

            <div className="flex justify-start items-center gap-2">
              <p className="p-1.5 rounded bg-[#CFE4EB]"></p>
              <p className="">Monthly plan</p>
            </div>

            <div className="flex justify-start items-center gap-2">
              <p className="p-1.5 rounded bg-[#BDCC87]"></p>
              <p className="">Yearly plan</p>
            </div>

            <div className="flex justify-start items-center gap-2">
              <p className="p-1.5 rounded bg-[#D3DDAF]"></p>
              <p className="">Half a year plan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubRevenueChart;
