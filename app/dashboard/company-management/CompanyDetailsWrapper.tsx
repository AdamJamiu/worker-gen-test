import { ReactNode } from "react";
import Sidenav from "./_components/Sidenav";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

const CompanyDetailsWrapper = ({
  children,
  page,
  second_page,
}: {
  children: ReactNode;
  page: string;
  second_page?: string;
}) => {
  return (
    <div className="w-full relative">
      <div className="w-full bg-white py-3 px-1.5 sm:px-3 md:px-5 flex justify-start items-center gap-2 sm:gap-4 text-neutrals500 font-bricolage md:-mt-7 mb-10 rounded-lg sticky top-0 left-0 right-0">
        <Link
          href="/dashboard/company-management"
          className="text-sm md:text-lg hover:text-primary"
        >
          Companies
        </Link>
        <BiChevronRight size={25} />
        <p
          className={`${second_page ? "" : "font-semibold"} text-sm md:text-lg`}
        >
          {page}
        </p>
        {second_page && (
          <>
            <BiChevronRight size={25} />
            <p className="text-sm md:text-lg font-semibold">{second_page}</p>
          </>
        )}
      </div>

      <main className="w-full flex justify-stretch items-stretch gap-5 relative h-full">
        <Sidenav />
        {children}
      </main>
    </div>
  );
};

export default CompanyDetailsWrapper;
