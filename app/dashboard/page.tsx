import DashOverviewCard from "./_components/DashOverviewCard";
import AdminAuthWrapper from "../components/auth/AdminAuth";
import SubRevenueChart from "./_components/SubRevenueChart";
import CompanyRegistrationChart from "./_components/CompanyRegistrationChart";
import RecentCompany from "./_components/RecentCompany";
import CompanyStatusOverview from "./_components/CompanyStatusOverview";

export default function Page() {
  return (
    <AdminAuthWrapper>
      <section className="">
        <div className="w-full h-full">
          <div className="w-full">
            <div className="w-full col-span-1 2xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
              <DashOverviewCard
                total={250}
                percentage="68.46"
                label="Total company"
              />

              <DashOverviewCard
                percentage="14.76"
                total="3500"
                label="All company drivers"
              />

              <DashOverviewCard
                label="All company vehicles"
                total="3500"
                percentage="3480"
              />

              <DashOverviewCard
                total="$24500"
                label="Total revenue"
                percentage="68.46"
              />
            </div>

            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6 h-full">
              <SubRevenueChart />
              <CompanyRegistrationChart />
            </div>

            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6 h-full">
              <RecentCompany />
              <CompanyStatusOverview />
            </div>
          </div>
        </div>
      </section>
    </AdminAuthWrapper>
  );
}
