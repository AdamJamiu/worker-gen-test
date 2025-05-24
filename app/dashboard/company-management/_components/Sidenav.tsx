"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { CiMoneyBill } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { PiVanLight } from "react-icons/pi";
import { TbUsersGroup } from "react-icons/tb";

const Sidenav = () => {
  const pathname = usePathname();
  const params = useParams();

  return (
    <aside className="py-4 px-4 md:pl-7 lg:pr-14 lg:h-full z-20 fixed lg:sticky lg:top-24 bottom-0 right-0 left-0 flex lg:flex-col justify-between md:justify-start gap-3 sm:gap-6 md:rounded-xl bg-white min-w-max text-sm sm:text-base lg:text-lg font-bricolage shadow-md md:shadow-none">
      <Link
        href={`/dashboard/company-management/${params?.id}/overview`}
        className={`${
          pathname.includes("overview")
            ? "text-primary font-medium"
            : "text-neutrals500 hover:text-primary"
        } ease transition-all duration-200 w-full flex justify-start items-center gap-3`}
      >
        <FaRegCircleUser className="md:block hidden" />
        <p>Overview</p>
      </Link>

      <Link
        href={`/dashboard/company-management/${params?.id}/vehicles`}
        className={`${
          pathname.includes("vehicles")
            ? "text-primary font-medium"
            : "text-neutrals500 hover:text-primary"
        } ease transition-all duration-200 w-full flex justify-start items-center gap-3`}
      >
        <PiVanLight className="md:block hidden" size={20} />
        <p>Vehicles</p>
      </Link>

      <Link
        href={`/dashboard/company-management/${params?.id}/drivers`}
        className={`${
          pathname.includes("drivers")
            ? "text-primary font-medium"
            : "text-neutrals500 hover:text-primary"
        } ease transition-all duration-200 w-full flex justify-start items-center gap-3`}
      >
        <HiOutlineUsers className="md:block hidden" size={20} />
        <p>Drivers</p>
      </Link>

      <Link
        href={`/dashboard/company-management/${params?.id}/partners`}
        className={`${
          pathname.includes("partners")
            ? "text-primary font-medium"
            : "text-neutrals500 hover:text-primary"
        } ease transition-all duration-200 w-full flex justify-start items-center gap-3`}
      >
        <TbUsersGroup className="md:block hidden" size={20} />
        <p>Partners</p>
      </Link>

      <Link
        href={`/dashboard/company-management/${params?.id}/finances`}
        className={`${
          pathname.includes("finances")
            ? "text-primary font-medium"
            : "text-neutrals500 hover:text-primary"
        } ease transition-all duration-200 w-full flex justify-start items-center gap-3`}
      >
        <CiMoneyBill className="md:block hidden" size={20} />
        <p>Finances</p>
      </Link>
    </aside>
  );
};

export default Sidenav;
