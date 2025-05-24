"use client";

import { useQuery } from "@tanstack/react-query";
import CollectionTrend from "./_components/CollectionTrend";
import FirstCard from "./_components/FirstCard";
import RecentActivity from "./_components/RecentActivity";
import RecentSchedule from "./_components/RecentSchedule";
import WasteRecycleChart from "./_components/WasteRecycleChart";
import { adminCaller } from "../interceptors";
import AdminAuthWrapper from "../components/auth/AdminAuth";

export default function Page() {
  const { data } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () =>
      adminCaller.get("v1/dashboard").then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  console.log(data);
  return (
    <AdminAuthWrapper>
      {/* <section className="relative bg-neutralBase min-h-screen py-10 p-4 sm:p-10 md:py-28 lg:py-32 md:pl-10 md:pr-8 lg:px-4 lg:pl-16 2xl:pl-20 lg:ml-[200px]"> */}
      <div className="mt-10 sm:mt-0">
        <h1 className="font-clash_display_semibold text-lg md:text-xl lg:text-2xl text-neutral-900">
          Welcome, Admin
        </h1>
        <h2 className="text-neutrals700 text-sm md:text-base font-clash_display">
          Here’s an overview of your Dashboard{" "}
        </h2>
      </div>

      {/* <div className="grid md:grid-cols-1 xl:grid-cols-4 gap-7 w-full h-full mt-12">
        <div className="w-full sm:col-span-2 md:col-span-3">
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            <FirstCard
              individuals="1000"
              total={data?.userCount}
              vendors={data?.userCount}
              organizations="2000"
              theme="green"
              label="Total users"
            />
            <FirstCard
              total={data?.productCount || "0"}
              individuals="1000"
              organizations="2000"
              vendors="2000"
              theme="blue"
              label="Total Products"
            />
            <FirstCard
              total={0}
              pending="100"
              completed="2000"
              theme="yellow"
              label="Recycle requests"
            />
          </div>

          <div className="w-full overflow-x-auto">
            <WasteRecycleChart />
          </div>
          <RecentSchedule />
        </div>

        <div className="w-full flex flex-col md:flex-row lg:flex-col sm:gap-7 md:gap-10 lg:gap-7 justify-start items-start h-full">
          <RecentActivity />
          <CollectionTrend />
        </div>
      </div> */}
      {/* </section> */}
    </AdminAuthWrapper>
  );
}
