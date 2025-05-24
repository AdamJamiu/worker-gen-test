"use client";

import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
import CompanyDetailsWrapper from "../../CompanyDetailsWrapper";
import DriverOverviewCard from "./_components/VehicleOverviewCard";
import PartnersTable from "./_components/PartnersTable";

const Page = () => {
  return (
    <AdminAuthWrapper>
      <CompanyDetailsWrapper page="Company partners">
        <section className="w-full bg-white rounded-xl p-4">
          <h1 className="text-neutrals900 font-semibold font-bricolage text-xl md:text-xl mb-4">
            Partners statistics
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-4 w-full">
            <DriverOverviewCard label="Total partners" quantity="60" type="1" />
            <DriverOverviewCard
              label="Active partners"
              quantity="55"
              type="2"
            />
            <DriverOverviewCard
              label="Inactive drivers"
              quantity="5"
              type="3"
            />
          </div>

          <div className="w-full mt-10">
            <h1 className="text-neutrals900 font-semibold font-bricolage text-xl md:text-xl">
              All partners
            </h1>
            <PartnersTable onOpenModal={() => console.log("")} data={[]} />
          </div>
        </section>
      </CompanyDetailsWrapper>
    </AdminAuthWrapper>
  );
};

export default Page;
