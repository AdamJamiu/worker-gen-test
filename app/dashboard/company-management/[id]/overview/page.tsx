"use client";

import { useParams } from "next/navigation";
import CompanyDetailsWrapper from "../../CompanyDetailsWrapper";
import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
import { companies } from "@/app/data/dashboard";
import fast_track_logistic from "../../../../assets/images/fast-track-logistic.png";
import Image from "next/image";
import Select from "@/app/components/ui/Select";
import { useState } from "react";
import ActionModal from "@/app/components/modals/ActionModal";

const status_arr = ["Active", "Inctive"];

const Page = () => {
  const params = useParams();
  const details = companies.find((item) => item.id === params?.id || 1);
  const [selectedStatus, setSelectedStatus] = useState({
    value: "",
    label: "",
  });

  const [isDeactiveModal, setIsDeactiveModal] = useState(false);

  return (
    <AdminAuthWrapper>
      <CompanyDetailsWrapper page="Company Overview">
        <main className="w-full bg-white rounded-xl p-4 sm:p-5 md:p-6 font-bricolage">
          <h1 className="text-neutrals900 font-semibold text-lg lg:text-[20px] mb-5">
            Overview
          </h1>

          <div className="flex justify-between flex-wrap md:flex-nowrap gap-10 md:gap-5 items-center w-full md:border rounded-xl md:p-3 lg:p-4">
            <div className="flex justify-start items-center md:items-start w-full gap-3 flex-nowrap">
              <Image
                src={fast_track_logistic}
                alt="fast_track_logistic"
                width={70}
                height={70}
                className="w-[50px] h-[65px] md:h-[70px] md:w-[80px] object-contain"
              />
              <div className="">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-neutrals900">
                  {details?.name}
                </p>
                <p className="text-sm md:text-base text-neutrals500">
                  {details?.email}
                </p>
              </div>

              <div className={`${details?.status} font-medium`}>
                {details?.status}
              </div>
            </div>

            <div className="flex justify-start items-center gap-3">
              <div className="min-w-max">
                <Select
                  selected={selectedStatus}
                  onChange={(e) =>
                    setSelectedStatus({ label: e.label, value: e.value })
                  }
                  placeholder="Change status"
                  options={status_arr.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                />
              </div>

              <button
                onClick={() => setIsDeactiveModal(true)}
                className="px-4 py-2.5 rounded-lg bg-error200 hover:bg-error900 text-white text-sm md:text-base"
              >
                Deactivate
              </button>
            </div>
          </div>

          <h1 className="text-neutrals900 font-semibold text-lg lg:text-[20px] my-5">
            Company details
          </h1>

          <div className="flex justify-between flex-col gap-5 items-start w-full md:border rounded-xl md:p-3 lg:p-4">
            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">Company name</p>
              <p className="w-full col-span-1 text-neutrals900">
                {details?.name}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                Company email
              </p>
              <p className="w-full col-span-1 text-neutrals900">
                {details?.email}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                Contact person
              </p>
              <p className="w-full col-span-1 text-neutrals900">
                {details?.contact_person}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                Vehicles onboarded
              </p>
              <p className="w-full col-span-1 text-neutrals900">
                {details?.vehicles}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                No of drivers
              </p>
              <p className="w-full col-span-1 text-neutrals900">60</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                No of partners
              </p>
              <p className="w-full col-span-1 text-neutrals900">
                {details?.partners}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full font-medium text-sm md:text-base">
              <p className="w-full col-span-1 text-neutrals500">
                Subscription plan
              </p>
              <p className="w-full col-span-1 text-neutrals900 capitalize">
                {details?.subscription}
              </p>
            </div>
          </div>
        </main>

        <ActionModal
          setIsOpen={setIsDeactiveModal}
          isOpen={isDeactiveModal}
          customActionText="Yes, Deactivate"
          confirmActionFnc={async () => console.log("")}
        />
      </CompanyDetailsWrapper>
    </AdminAuthWrapper>
  );
};

export default Page;
