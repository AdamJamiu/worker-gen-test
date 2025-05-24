"use client";

import useApp from "@/app/hooks/useApp";
import React, { useCallback, useState } from "react";
import { BiMessage, BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxExit } from "react-icons/rx";
import { LuFolderOpen } from "react-icons/lu";
import Menu from "../ui/Menu";
import { useRouter } from "next/navigation";
import { FaRegEnvelope } from "react-icons/fa6";

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useApp();
  const [isNotificationMenu, setIsNotificationMenu] = useState(false);
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const navigate = useRouter();

  const handleLogOut = () => {
    sessionStorage.clear();
    setIsSidebarOpen(false);
    navigate.push("/");
  };

  const handleToggleSidebar = useCallback(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, []);

  return (
    <nav className="fixed left-0 xl:left-[250px] right-0 top-0 z-50 bg-white py-1">
      <div className="flex justify-between items-center px-6 py-3 md:py-5 md:px-8 lg:px-8">
        <h1 className="text-neutrals900 font-bricolage text-lg md:text-xl font-semibold">
          Dashboard
        </h1>

        <div className="flex justify-start gap-3">
          <div className="relative w-64 sm:w-72 h-10 sm:block hidden font-clash_display">
            <BiSearch
              className="text-neutrals500 absolute left-4 top-[10px]"
              size={20}
            />
            <input
              placeholder="Search anything"
              className="focus:border-neutral-200 ease transition-all border-transparent border-2 rounded-lg bg-neutrals100 text-neutrals500 h-full w-full outline-none pl-11 font-dmSans"
            />
          </div>

          <Menu
            isOpen={isNotificationMenu}
            setIsOpen={setIsNotificationMenu}
            MenuIcon={
              <button className="p-2 relative rounded-full hover:bg-neutral-100 active:bg-neutral-200 focus:bg-neutral-100 ease transition-all">
                <BsBell size={24} className="text-neutrals900" />
              </button>
            }
            className="w-[400px] pb-7 pt-0"
            Content={
              <div className="flex flex-col justify-start items-start w-full max-h-96 h-max overflow-y-auto">
                <h2 className="text-base lg:text-lg font-clash_display_semibold font-medium mt-4 text-[#2A2B2B]">
                  Notifications
                </h2>
                <div className="w-full space-y-3 mt-4">
                  <div className="w-full">
                    <div className="w-full gap-3 flex justify-start items-center">
                      <div className="p-2 rounded-full bg-primary100 text-primary">
                        <LuFolderOpen className="" size={20} />
                      </div>
                      <p className="font-clash_display_medium text-[#2A2B2B] text-xs md:text-sm">
                        Confirm point award
                      </p>
                    </div>

                    <div className="w-full flex justify-between items-center gap-5 text-xs md:text-sm mt-1">
                      <p className="text-[#6A6B6B] font-clash_display">
                        Confirm points awarded to Johnbosco davies
                      </p>
                      <button className="font-clash_display_medium text-primary p-2 rounded-md hover:bg-primary100 ease transition">
                        View
                      </button>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full gap-3 flex justify-start items-center">
                      <div className="p-2 rounded-full bg-primary100 text-primary">
                        <LuFolderOpen className="" size={20} />
                      </div>
                      <p className="font-clash_display_medium text-[#2A2B2B] text-xs md:text-sm">
                        Confirm point award
                      </p>
                    </div>

                    <div className="w-full flex justify-between items-center gap-5 text-xs md:text-sm mt-1">
                      <p className="text-[#6A6B6B] font-clash_display">
                        Confirm points awarded to Johnbosco davies
                      </p>
                      <button className="font-clash_display_medium text-primary p-2 rounded-md hover:bg-primary100 ease transition">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          <Menu
            isOpen={isProfileMenu}
            setIsOpen={setIsProfileMenu}
            MenuIcon={
              <button className="p-2 relative rounded-full hover:bg-neutral-100 active:bg-neutral-200 focus:bg-neutral-100 ease transition-all">
                <FaRegEnvelope size={22} />
              </button>
            }
            className="w-[300px] pb-7"
            Content={
              <div className="flex flex-col justify-center items-center w-full">
                <img
                  src="/user.svg"
                  alt="avatar"
                  className="h-12 w-12 md:w-14 md:h-14"
                />
                <h2 className="text-sm lg:text-base font-clash_display font-medium mt-4 text-neutral-950">
                  Group Admin
                </h2>
                <p className="text-xs md:text-sm font-clash_display text-neutrals500">
                  fleetpro@admin.mail
                </p>

                <button
                  onClick={handleLogOut}
                  className="hover:opacity-80 ease transition-all px-4 py-2 rounded-md bg-error100 flex justify-center items-center gap-2.5 text-error900 mt-5 font-inter"
                >
                  <RxExit />
                  <p className="text-xs md:text-sm">Log out</p>
                </button>
              </div>
            }
          />

          <button
            onClick={handleToggleSidebar}
            // onClick={() => setIsSidebarOpen(true)}
            className="p-2 relative rounded-full hover:bg-neutral-100 active:bg-neutral-200 focus:bg-neutral-100 ease transition-all block lg:hidden"
          >
            <GiHamburgerMenu className="text-neutrals900" size={20} />
          </button>
        </div>
        {/* Logo */}
        {/* <Link href="/">
          <Image
            src="/logo.svg"
            alt="Lamb logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
