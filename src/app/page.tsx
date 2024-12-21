"use client";

import useApp from "@/hooks/useApp";
import TopBar from "./components/TopBar";
import LeadsTable from "./components/LeadsTable";

export default function Home() {
  const { isSidebar } = useApp();

  return (
    <section
      className={`${
        !isSidebar
          ? "w-screen"
          : "ml-52 xl:w-[84vw] lg:w-[70vw] md:w-[79vw] w-screen"
      } bg-gray-100 p-3 min-h-screen font-segoe`}
    >
      <TopBar />
      <LeadsTable />
    </section>
  );
}
