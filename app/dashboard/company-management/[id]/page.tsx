import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
import CompanyDetailsWrapper from "../CompanyDetailsWrapper";

const Page = () => {
  return (
    <AdminAuthWrapper>
      <CompanyDetailsWrapper page="Overview">
        <div className="w-full bg-white rounded-xl p-4">
          <h1 className="text-[#0C0C0C] font-semibold font-bricolage text-xl md:text-xl">
            All companies
          </h1>
        </div>
      </CompanyDetailsWrapper>
    </AdminAuthWrapper>
  );
};

export default Page;
