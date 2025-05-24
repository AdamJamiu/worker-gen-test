"use client";

import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
import AddUserModal from "./_components/AddUserModal";
import Table from "./_components/Table";
import { useState } from "react";
import RolesTable from "./_components/RolesTable";
import AddRoleModal from "./_components/AddRoleModal";

export default function IndividualUsers() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <AdminAuthWrapper>
      <div className="w-full">
        <h1 className="font-clash_display_semibold text-neutral-700 text-base md:text-lg xl:text-xl md:mt-0 mt-7">
          Admin management
        </h1>

        <div className="w-full flex justify-start items-center bg-white p-3 md:p-4 mt-4 rounded-lg font-clash_display_medium">
          <button
            onClick={() => setActive(1)}
            className={`${
              active === 1 ? "bg-primary100 text-primary" : "text-[#B5B3B3]"
            } h-12 rounded-lg px-5 py-1.5 ease transition-all duration-200 font-medium`}
          >
            Users
          </button>
          <button
            onClick={() => setActive(2)}
            className={`${
              active === 2 ? "bg-primary100 text-primary" : "text-[#B5B3B3]"
            } h-12 rounded-lg px-5 py-1.5 ease transition-all duration-200 font-medium`}
          >
            Roles
          </button>
        </div>

        {active === 1 ? (
          <Table onOpenModal={() => setIsOpen(true)} data={[]} />
        ) : null}
        {active === 2 ? (
          <RolesTable onOpenModal={() => setIsRoleModalOpen(true)} />
        ) : null}
      </div>

      <AddUserModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <AddRoleModal isOpen={isRoleModalOpen} setIsOpen={setIsRoleModalOpen} />
    </AdminAuthWrapper>
  );
}
