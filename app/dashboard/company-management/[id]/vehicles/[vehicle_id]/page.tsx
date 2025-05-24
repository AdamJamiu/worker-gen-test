"use client";

import { useParams } from "next/navigation";
import CompanyDetailsWrapper from "../../../CompanyDetailsWrapper";
import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
import { vehicles } from "@/app/data/dashboard";
import toyota_corolla from "../../../../../assets/images/toyota_corrola.png";
import Image from "next/image";
import { useState } from "react";
import ActionModal from "@/app/components/modals/ActionModal";
import OverviewCard from "./_components/OverviewCard";

const Page = () => {
  const params = useParams();
  const details = vehicles.find((item) => item.id === params?.vehicle_id || 1);

  const [isDeleteModal, setIsDeleteModal] = useState(false);

  return (
    <AdminAuthWrapper>
      <CompanyDetailsWrapper
        page="Vehicle Overview"
        second_page="Vehicle details"
      >
        <main className="w-full bg-white rounded-xl p-4 sm:p-5 md:p-6 font-bricolage">
          <div className="flex justify-between flex-wrap md:flex-nowrap gap-10 md:gap-5 items-center w-full md:border border-neutrals400 rounded-xl sm:py-2 sm:px-4 md:px-5">
            <div className="flex justify-start items-center w-full gap-1 sm:gap-3 flex-nowrap">
              <Image
                src={toyota_corolla}
                alt="toyota_corolla"
                width={100}
                height={120}
                className="w-[90px] h-[100px] md:w-[110px] md:h-[150px] object-cover"
              />
              <div className="">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-neutrals900">
                  {details?.name}{" "}
                  <span className={`${details?.status} font-medium`}>
                    {" "}
                    {details?.status}
                  </span>
                </p>
                <p className="text-sm md:text-base text-neutrals500">
                  {details?.email}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsDeleteModal(true)}
              className="px-4 py-2.5 rounded-lg bg-error200 hover:bg-error900 text-white text-sm md:text-base"
            >
              Delete
            </button>
          </div>

          <h1 className="text-neutrals900 font-semibold text-lg lg:text-[20px] mb-5 mt-10">
            Vehicle statistics
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 md:gap-4 w-full">
            <OverviewCard label="Total profit" quantity="$250" type="1" />
            <OverviewCard label="Expenses" quantity="$100" type="2" />
            <OverviewCard label="Incomes" quantity="$700" type="3" />
            <OverviewCard label="Total trips" quantity="$700" type="4" />
            <OverviewCard label="Fuel consumed" quantity="$700" type="5" />
          </div>

          <h1 className="text-neutrals900 font-semibold text-lg lg:text-[20px] mb-5 mt-10">
            Vehicle details
          </h1>

          <div className="flex justify-between flex-col gap-5 items-start w-full md:border border-neutrals400 rounded-xl md:p-3 lg:p-4">
            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                Vehicle name/model
              </p>
              <p className="w-full col-span-1 text-neutrals900">
                {details?.name}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">Vehicle type</p>
              <p className="w-full col-span-1 text-neutrals900">
                {details?.type}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                Assigned driver
              </p>
              <p className="w-full col-span-1 text-neutrals900">
                {details?.assigned_driver}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                Registration no
              </p>
              <p className="w-full col-span-1 text-neutrals900">70</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                License plate
              </p>
              <p className="w-full col-span-1 text-neutrals900">60</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                Vehicle status
              </p>

              <p className={`${details?.status} !px-3 !py-0.5 font-medium`}>
                {details?.status}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                Health status
              </p>
              <p className={`${details?.status} !px-3 !py-0.5 !font-medium`}>
                {details?.status}
              </p>
            </div>
          </div>
        </main>

        <ActionModal
          setIsOpen={setIsDeleteModal}
          isOpen={isDeleteModal}
          customActionText="Yes, Delete"
          confirmActionFnc={async () => console.log("")}
        />
      </CompanyDetailsWrapper>
    </AdminAuthWrapper>
  );
};

export default Page;
