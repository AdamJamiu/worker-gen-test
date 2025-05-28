"use client";

import { sidebarItems } from "@/app/data/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import useApp from "@/app/hooks/useApp";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { IconType } from "react-icons";

interface ISidebarItem {
  item: {
    name: string;
    href: string;
    icon: IconType;
    label: string;
  };
  index: number;
}

const Sidebar = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = sessionStorage.getItem("green-loop-admin");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  return (
    <aside className="fixed left-0 top-0 bottom-0 bg-white  border-r border-neutrals400 pb-10 pt-6 w-[220px] z-20 xl:block hidden h-screen">
      <div className="w-full">
        <div className="px-4">
          <Image
            src={logo}
            height={80}
            width={140}
            alt="fleetpro logo"
            className="mx-auto mb-7"
          />
        </div>

        <div className="px-4">
          <div className="flex justify-start items-center gap-3 w-full bg-primary100 p-3 rounded-lg mb-5 font-bricolage">
            {/* <Image
              quality={100}
              width={30}
              height={30}
              src={white_user}
              alt="johnsonD"
            /> */}
            <BiUser size={30} />
            <div className="w-full">
              <p className="text-sm font-bold text-neutrals900">
                {user?.userDetails?.fullName || "Fleetpro Admin"}
              </p>
              <p className="text-sm text-neutrals700">
                {user?.userDetails?.email || "Fleetpro@mail.com"}
              </p>
            </div>
          </div>
        </div>

        <div className="h-[70vh] overflow-y-auto sidebar-scroll">
          <div className="flex flex-col justify-start items-start gap-1 px-4">
            {sidebarItems.map((item, index) => (
              <SidebarItem index={index} item={item} key={index} />
            ))}
            <div className="mt-16 w-full">
              <SidebarItem
                index={sidebarItems.length - 1 + 1}
                item={{
                  href: "/dashboard/settings",
                  icon: IoSettingsOutline,
                  label: "Profile Settings",
                  name: "settings",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export const MobileSidebar = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useApp();
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`${
        isSidebarOpen ? "z-[999]" : "invisible opacity-0 -z-[999]"
      }`}
    >
      <div className="fixed inset-0 z-[99] ease transition-all duration-200 bg-black opacity-55"></div>

      <aside
        ref={contentRef}
        className={`${
          isSidebarOpen
            ? "z-[9999]"
            : "-translate-x-[10000px] opacity-0 -z-[999]"
        } ease transition-all duration-300 fixed left-0 top-0 bottom-0 bg-white py-10 px-4 w-[300px] sm:w-[250px]`}
      >
        <div className="w-full">
          <img src={logo as any} alt="fleetpro logo" className="mx-auto mb-7" />

          <div className="flex flex-col justify-start items-start">
            {sidebarItems.map((item, index) => (
              <SidebarItem index={index} item={item} key={index} />
            ))}
            <div className="mt-5 w-full">
              <SidebarItem
                index={sidebarItems.length - 1 + 1}
                item={{
                  href: "/dashboard/settings",
                  icon: CiSettings,
                  label: "Profile Settings",
                  name: "settings",
                }}
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export const SidebarItem = ({ item, index }: ISidebarItem) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [subItemHeight, setSubItemHeight] = useState(0);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const handleToggle = (index: number | null, href?: string) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (activeIndex === index && ref.current) {
      setSubItemHeight(ref.current.clientHeight);
    } else {
      setSubItemHeight(0);
    }
  }, [activeIndex]);

  console.log("pathname", pathname);

  return (
    <div key={item.href} className="relative w-full min-h-max font-bricolage">
      <Link
        onClick={() => handleToggle(index)}
        href={item.href}
        className={`${
          pathname === item.href ? " bg-primary100" : ""
        } flex items-center font-medium justify-between gap-3 w-full text-neutrals700 hover:bg-primary100 ease transition-all px-2 py-3 rounded-md`}
      >
        <div className="flex justify-start items-center gap-3">
          <item.icon size={24} />
          <p className="font-medium font-bricolage text-sm">{item.label}</p>
        </div>
      </Link>
    </div>
  );
};
export default Sidebar;
