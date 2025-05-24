"use client";

import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
import AddUserModal from "./_components/AddUserModal";
import Table from "./_components/Table";
import { useState } from "react";
import AddRoleModal from "./_components/AddRoleModal";
import OverviewCard from "./_components/OverviewCard";

export default function IndividualUsers() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  return (
    <AdminAuthWrapper>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-8 gap-7 lg:gap-5">
          <OverviewCard label="Total subscriptions" quantity="250" type="1" />
          <OverviewCard label="Active subscriptions" quantity="250" type="2" />
          <OverviewCard label="Inctive subscriptions" quantity="100" type="3" />
          <OverviewCard label="Expired subscriptions" quantity="20" type="4" />
        </div>
        <h1 className="font-semibold font-bricolage text-neutrals900 text-base md:text-lg xl:text-xl md:mt-0 mt-7">
          All subscription
        </h1>

        <Table />
      </div>

      <AddUserModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <AddRoleModal isOpen={isRoleModalOpen} setIsOpen={setIsRoleModalOpen} />
    </AdminAuthWrapper>
  );
}
