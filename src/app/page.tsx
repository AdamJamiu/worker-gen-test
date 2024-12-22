"use client";

import useApp from "@/hooks/useApp";
import TopBar from "./components/TopBar";
import LeadsTable from "./components/LeadsTable";
import Image from "next/image";
import LeadsCard from "./components/LeadsCard";
import Leads from "./components/Leads";

export default function Home() {
  const { isSidebar } = useApp();

  return (
    <section
      className={`${
        !isSidebar
          ? "w-screen"
          : "ml-52 xl:w-[83vw] lg:w-[70vw] md:w-[79vw] w-screen"
      } bg-gray-100 p-2 md:p-4 min-h-screen h-full font-segoe relative overflow-y-auto`}
    >
      <TopBar />

      <div className="rounded-md bg-gradient-to-r from-purple-900 via-purple-500 to-blue-500 p-[1.2px] mt-5 ">
        <div className="p-4 bg-white w-full rounded-md">
          <div className="flex justify-start items-center gap-2 w-full">
            <div className="w-full flex justify-start items-center gap-1">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Microsoft_365_Copilot_Icon.svg/72px-Microsoft_365_Copilot_Icon.svg.png"
                alt="copilot svg"
                width={20}
                height={20}
              />
              <h2 className="font-bold text-xs md:text-sm text-gray-800">
                Hi Mona, <span className="text-blue-600">68%</span> of goal
                achieved and rest can be achieved by focusing on 20 top leads.
              </h2>
            </div>
          </div>

          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 overflow-x-hidden">
            <div className="w-full col-span-2">
              <p className="text-gray-500 text-xs font-medium w-full">
                Copilot has pinpointed 20 key leads that show strong purchase
                internet and are actively engaging. These leads need your focus.
              </p>

              <div className="w-full mt-5">
                <Leads />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LeadsTable />
    </section>
  );
}
