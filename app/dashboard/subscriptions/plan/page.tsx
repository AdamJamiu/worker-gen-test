import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
import Table from "../_components/Table";

export default function Page() {
  return (
    <AdminAuthWrapper>
      <div className="w-full">
        <h1 className="font-semibold font-bricolage text-neutrals900 text-base md:text-lg xl:text-xl md:mt-0 mt-7">
          All Plans
        </h1>

        <Table />
      </div>
    </AdminAuthWrapper>
  );
}
