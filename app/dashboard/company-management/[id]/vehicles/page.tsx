"use client";

import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
import { useState } from "react";
import CompanyDetailsWrapper from "../../CompanyDetailsWrapper";
import VehicleOverviewCard from "./_components/VehicleOverviewCard";
import VehiclesTable from "./_components/VehiclesTable";

const Page = () => {
  return (
    <AdminAuthWrapper>
      <CompanyDetailsWrapper page="Company vehicles">
        <section className="w-full bg-white rounded-xl p-4">
          <h1 className="text-neutrals900 font-semibold font-bricolage text-xl md:text-xl mb-4">
            Vehicle statistics
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-4 w-full">
            <VehicleOverviewCard
              label="Total vehicles"
              quantity="250"
              type="1"
            />
            <VehicleOverviewCard
              label="Active vehicles"
              quantity="250"
              type="2"
            />
            <VehicleOverviewCard
              label="Inactive vehicles"
              quantity="250"
              type="3"
            />
          </div>

          <div className="w-full mt-10">
            <h1 className="text-neutrals900 font-semibold font-bricolage text-xl md:text-xl">
              All vehicles
            </h1>
            <VehiclesTable onOpenModal={() => console.log("")} data={[]} />
          </div>
        </section>
      </CompanyDetailsWrapper>
    </AdminAuthWrapper>
  );
};

export default Page;
