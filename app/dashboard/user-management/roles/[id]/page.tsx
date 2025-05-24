"use client";

import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
import { adminCaller } from "@/app/interceptors";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import DeleRoleModal from "../../_components/DeleRoleModal";

export default function Page() {
  const params = useParams();
  const [isDeleteRoleModal, setIsDeleteRoleModal] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["user-id"],
    queryFn: async () =>
      await adminCaller
        .get(`users/${params?.id}`)
        .then((res) => res.data?.data),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
    enabled: !!params?.id,
  });

  const handleOpenDeleteModal = () => {
    setIsDeleteRoleModal(true);
  };

  console.log("data by id", data);

  return (
    <AdminAuthWrapper>
      <div className="w-full">
        <div className="w-full flex justify-between items-center bg-white p-3 md:p-4 mt-4 rounded-lg font-clash_display_medium">
          <div className="flex justify-start items-center gap-2 flex-nowrap">
            {/* {item?.imageUrl ? (
                        <img
                          src={item?.imageUrl}
                          alt={item?.fullName}
                          className="rounded-full"
                        />
                      ) : null} */}
            <div className="font-medium">
              <p className="text-base sm:text-lg md:text-xl text-neutral-900">
                {data?.fullName}
              </p>
              <p className="font-clash_display text-neutral-600 text-sm md:text-base">
                {data?.userType}
              </p>
            </div>
          </div>

          <button
            onClick={handleOpenDeleteModal}
            className="hover:opacity-80 ease transition-all px-4 py-2 rounded-md bg-error100 flex justify-center items-center gap-2.5 text-error900 mt-5 font-inter"
          >
            <BiTrash />
            <p className="text-xs md:text-sm">Delete</p>
          </button>
        </div>
      </div>

      <div className="w-full bg-white p-3 md:p-4 mt-10 rounded-lg font-clash_display_medium">
        <div className="font-clash_display_semibold text-lg sm:text-xl text-[24px] text-neutral-900 py-3 px-5 border-b border-neutral-100">
          Profile details
        </div>

        <div className="w-full space-y-4 p-5">
          <div className="grid lg:grid-cols-3 justify-start items-center gap-8 sm:gap-10 lg:gap-20 font-medium w-full">
            <p className="text-sm md:text-base lg:text-lg text-neutral-500 col-span-1">
              Name
            </p>
            <p className="text-sm md:text-base lg:text-lg text-[#222222] col-span-1 lg:col-span-2">
              {data?.fullName || "N/A"}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 justify-start items-center gap-8 sm:gap-10 lg:gap-20 font-medium w-full">
            <p className="text-sm md:text-base lg:text-lg text-neutral-500">
              Email address
            </p>
            <p className="text-sm md:text-base lg:text-lg text-[#222222] col-span-1 lg:col-span-2">
              {data?.email || "N/A"}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 justify-start items-center gap-8 sm:gap-10 lg:gap-20 font-medium w-full">
            <p className="text-sm md:text-base lg:text-lg text-neutral-500">
              Home address
            </p>
            <p className="text-sm md:text-base lg:text-lg text-[#222222] col-span-1 lg:col-span-2">
              {data?.address || "N/A"}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 justify-start items-center gap-8 sm:gap-10 lg:gap-20 font-medium w-full">
            <p className="text-sm md:text-base lg:text-lg text-neutral-500">
              Phone Number
            </p>
            <p className="text-sm md:text-base lg:text-lg text-[#222222] col-span-1 lg:col-span-2">
              {data?.phoneNumber || "N/A"}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 justify-start items-center gap-8 sm:gap-10 lg:gap-20 font-medium w-full">
            <p className="text-sm md:text-base lg:text-lg text-neutral-500">
              User type
            </p>
            <p className="text-sm md:text-base lg:text-lg text-[#222222] col-span-1 lg:col-span-2">
              {data?.userType}
            </p>
          </div>
        </div>
      </div>

      {/* <AddUserModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <DeleRoleModal
        isOpen={isDeleteRoleModal}
        setIsOpen={setIsDeleteRoleModal}
      />
    </AdminAuthWrapper>
  );
}
