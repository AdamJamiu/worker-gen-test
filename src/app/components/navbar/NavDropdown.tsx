"use client";

import { TNavDropdown } from "@/types/nav.types";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const NavDropdown = ({ title, data }: TNavDropdown) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative font-satoshi">
      <button
        className={`${
          open
            ? "text-primary_success border-b-gray-800"
            : "text-black border-transparent"
        } border-b pb-2 flex items-center gap-2 text-sm`}
        onClick={() => setOpen(true)}
      >
        {title}
        <BiChevronDown />
      </button>

      {/* dropdown content */}
      <div
        ref={dropdownRef}
        className={`${
          open ? "grid" : "hidden"
        } w-[450px] max-w-max bg-white rounded-lg shadow-lg p-4 md:p-5 grid-cols-1 sm:grid-cols-2 gap-7 absolute top-12 -left-16`}
      >
        {data.map((item, index) => (
          <Link
            href="/"
            key={index}
            className="flex items-center space-x-2 w-full"
          >
            <div
              className={`${
                index === 0
                  ? "bg-success_opacity text-primary_success"
                  : index === 1
                  ? "bg-yellow_opacity text-primary_yellow"
                  : ""
              } rounded-full p-2 text-xl md:text-2xl`}
            >
              {item.icon}
            </div>
            <p className="text-sm w-full">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
