"use client";

import { sidebar } from "@/data/sidebar";
import useApp from "@/hooks/useApp";
import useScreenWidth from "@/hooks/useScreenWidth";
import { useEffect, useRef } from "react";
import { CgChevronDown } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const { isSidebar, setIsSidebar } = useApp();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const screenWidth = useScreenWidth();

  const handleClickOutside = (e: any) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      if (screenWidth < 768) {
        setIsSidebar(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        className={`${
          !isSidebar ? "hidden -z-[999]" : "md:hidden block z-[90]"
        } absolute inset-0 bg-black opacity-20 z-0 font-segoe`}
      ></div>
      <aside
        ref={sidebarRef}
        className={`${
          isSidebar ? "translate-x-0" : "-translate-x-[1000px]"
        } ease-linear duration-200 transition-all md:fixed absolute left-0 top-0 bottom-0 bg-[#EFEFEF] w-[74vw] sm:w-[50vw] md:w-[210px] border-r-2 border-gray-300 overflow-y-auto z-[999] sidebar-scroll`}
      >
        <div className="p-2" onClick={() => setIsSidebar((prev) => !prev)}>
          <RxHamburgerMenu className="ml-1" />
        </div>

        <div className="mt-3 mb-4 w-full">
          <h2 className="text-xs md:text-sm">{sidebar[0].title}</h2>
          {sidebar[0].items.map((item, index) => (
            <button
              className="w-full py-1.5 pr-3 pl-4 flex justify-between hover:bg-white ease transition-all text-xs md:text-sm  font-medium text-gray-600"
              key={index}
            >
              <div className="flex justify-start items-center gap-3">
                <item.icon size={18} />
                <p>{item.label}</p>
              </div>
              {item.withArrow ? <CgChevronDown size={18} color="#888" /> : null}
            </button>
          ))}
        </div>

        <div className="mb-4 w-full">
          <h2 className="text-xs md:text-sm font-bold pr-3 pl-4 pb-1 text-gray-600 mb-1">
            {sidebar[1].title}
          </h2>
          {sidebar[1].items.map((item, index) => (
            <button
              className="w-full py-1.5 pr-3 pl-4 flex justify-between hover:bg-white ease transition-all text-xs md:text-sm  font-medium text-gray-600"
              key={index}
            >
              <div className="flex justify-start items-center gap-3">
                <item.icon size={18} />
                <p>{item.label}</p>
              </div>
              {item.withArrow ? <CgChevronDown size={18} color="#888" /> : null}
            </button>
          ))}
        </div>

        <div className="mb-4 w-full">
          <h2 className="text-xs md:text-sm font-bold pr-3 pl-4 pb-1 text-gray-600 mb-1">
            {sidebar[2].title}
          </h2>
          {sidebar[2].items.map((item, index) => (
            <button
              className="w-full py-1.5 pr-3 pl-4 flex justify-between hover:bg-white ease transition-all text-xs md:text-sm  font-medium text-gray-600"
              key={index}
            >
              <div className="flex justify-start items-center gap-3">
                <item.icon size={18} />
                <p>{item.label}</p>
              </div>
              {item.withArrow ? <CgChevronDown size={18} color="#888" /> : null}
            </button>
          ))}
        </div>

        <div className="mt-1 mb-4 w-full">
          <h2 className="text-xs md:text-sm font-bold pr-3 pl-4 pb-1 text-gray-600 mb-1">
            {sidebar[3].title}
          </h2>
          {sidebar[3].items.map((item, index) => (
            <button
              className="w-full py-1.5 pr-3 pl-4 flex justify-between hover:bg-white ease transition-all text-xs md:text-sm  font-medium text-gray-600"
              key={index}
            >
              <div className="flex justify-start items-center gap-3">
                <item.icon size={18} />
                <p>{item.label}</p>
              </div>
              {item.withArrow ? <CgChevronDown size={18} color="#888" /> : null}
            </button>
          ))}
        </div>

        <div className="mt-1 mb-4 w-full">
          <h2 className="text-xs md:text-sm font-bold pr-3 pl-4 pb-1 text-gray-600 mb-1">
            {sidebar[4].title}
          </h2>
          {sidebar[4].items.map((item, index) => (
            <button
              className="w-full py-1.5 pr-3 pl-4 flex justify-between hover:bg-white ease transition-all text-xs md:text-sm  font-medium text-gray-600"
              key={index}
            >
              <div className="flex justify-start items-center gap-3">
                <item.icon size={18} />
                <p>{item.label}</p>
              </div>
              {item.withArrow ? <CgChevronDown size={18} color="#888" /> : null}
            </button>
          ))}
        </div>

        <div className="mt-1 mb-4 w-full">
          <h2 className="text-xs md:text-sm font-bold pr-3 pl-4 pb-1 text-gray-600 mb-1">
            {sidebar[5].title}
          </h2>
          {sidebar[5].items.map((item, index) => (
            <button
              className="w-full py-1.5 pr-3 pl-4 flex justify-between hover:bg-white ease transition-all text-xs md:text-sm  font-medium text-gray-600"
              key={index}
            >
              <div className="flex justify-start items-center gap-3">
                <item.icon size={18} />
                <p>{item.label}</p>
              </div>
              {item.withArrow ? <CgChevronDown size={18} color="#888" /> : null}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
