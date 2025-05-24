"use client";

import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
// import CollectionTrend from "./_components/CollectionTrend";
import Table from "./_components/Table";
import { useState } from "react";
// import WasteRecycleChart from "../_components/WasteRecycleChart";
import AddWasteModal from "./_components/AddWasteModal";
import OverviewCard from "./_components/OverviewCard";

const Page = () => {
  const [isAddWasteModal, setIsAddWasteModal] = useState(false);

  const handleOpenAddWasteModal = () => {
    setIsAddWasteModal(true);
  };
  return (
    <AdminAuthWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-start items-center gap-7 w-full">
        <OverviewCard label="Total companies" quantity="250" type="1" />
        <OverviewCard label="Active companies" quantity="250" type="2" />
        <OverviewCard label="Inactive companies" quantity="250" type="3" />
      </div>

      <div className="mt-10 w-full">
        <h1 className="text-[#0C0C0C] font-semibold font-bricolage text-xl md:text-xl">
          All companies
        </h1>
        <Table onOpenModal={handleOpenAddWasteModal} data={[]} />
      </div>

      <AddWasteModal isOpen={isAddWasteModal} setIsOpen={setIsAddWasteModal} />
    </AdminAuthWrapper>
  );
};

export default Page;
