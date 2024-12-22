"use client";

import useApp from "@/hooks/useApp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsStars } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { RiMailFill } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { LuSendHorizontal } from "react-icons/lu";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const EngageDetails = () => {
  const {
    engageDetails,
    setEngageDetails,
    engageDetailsOpen,
    setIsEngageDetailsOpen,
  } = useApp();
  const [isAboutExpanded, setIsAboutExpanded] = useState<boolean>(true);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const accordionRef = useRef<HTMLDivElement | null>(null);
  const [accordionHeight, setAccordionHeight] = useState<string>("45px");

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsEngageDetailsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (accordionRef.current) {
      setAccordionHeight(
        isAboutExpanded ? `${accordionRef.current.scrollHeight}px` : "45px"
      );
    }
  }, [isAboutExpanded, engageDetails?.about]);

  return (
    <div
      className={`${
        engageDetailsOpen ? "visible z-[9999] fixed" : "invisible -z-[9999]"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-25 z-[90]"></div>
      <div
        ref={modalRef}
        className={`${
          engageDetailsOpen
            ? "-translate-y-[50%] opacity-100 scale-100"
            : "translate-y-[50%] opacity-0 scale-95"
        } ease-linear transition-all duration-100 w-screen max-w-[900px] fixed top-[50%] left-[50%] -translate-x-[50%] rounded-xl bg-gradient-to-r from-purple-900 via-purple-500 to-blue-500 p-[1.7px] z-[99909]`}
      >
        <div className="px-4 lg:px-7 pt-7 pb-4 bg-gray-50 h-[85vh] rounded-xl w-full relative">
          <div className="flex justify-between items-center gap-3">
            <div className="flex justify-start items-center gap-1 w-full">
              <RiMailFill size={21} className="text-blue-600" />
              <p className="font-semibold xl:text-base lg:text-sm text-xs">
                Engage with {engageDetails?.name}
              </p>
            </div>

            <CgClose
              color="#666"
              onClick={() => setIsEngageDetailsOpen(false)}
            />
          </div>

          <div className="w-full flex justify-start items-center gap-1 mt-4 bg-white shadow-md rounded-lg p-2">
            <Image
              loading="lazy"
              src={engageDetails?.avatar || ""}
              alt={engageDetails?.name || "avatar"}
              height={25}
              width={25}
              className="rounded-full w-[45px] h-[45px] object-fill"
            />

            <div className="">
              <p className="text-xs lg:text-sm font-semibold">
                {engageDetails?.name}
              </p>
              <p className="text-gray-500 font-medium text-xs">
                {engageDetails?.position}, {engageDetails?.company}
              </p>
            </div>
          </div>

          <div className="p-2 bg-white shadow-md rounded-lg mt-5">
            <div className="w-full flex justify-between items-center gap-3 flex-wrap bg-[#F7F6FF] p-2 md:p-3">
              <div className="rounded-xl text-gray-700 flex justify-start items-center gap-1">
                <BsStars className="text-purple-600 text-md" />
                <p className="text-blue-600 text-xs">
                  {engageDetails?.comment}
                </p>
              </div>

              <div className="flex justify-start items-center gap-2">
                <button className="flex justify-start items-center gap-1 border rounded bg-white text-xs font-medium py-1 px-2.5">
                  <FiEdit2 />
                  <p>Edit</p>
                </button>
                <button className="flex justify-start items-center gap-1 rounded bg-gradient-to-r from-purple-900 via-purple-500 to-blue-500 text-white text-xs font-medium py-1 px-2.5">
                  <LuSendHorizontal />
                  <p>Approve and send</p>
                </button>
              </div>
            </div>
          </div>

          {/* Tab */}
          <div className="pt-4 px-4 flex justify-start items-center gap-3 w-full bg-white rounded-lg shadow-md border-b text-xs font-medium text-gray-700 my-3">
            <button className="pb-2">Engage</button>
            <button className="pb-2 border-b-2 border-blue-600">
              Research
            </button>
          </div>

          <div
            ref={accordionRef}
            style={{
              maxHeight: accordionHeight,
            }}
            className="p-4 rounded-xl shadow-md w-full mt-4 border bg-white ease transition-all duration-200 overflow-hidden z-20"
          >
            <div className="w-ful flex justify-between items-center gap-3">
              <p className="text-xs font-medium">
                About {engageDetails?.name.split(" ")[0]}
              </p>

              <button onClick={() => setIsAboutExpanded((prev) => !prev)}>
                <BiChevronDown
                  size={20}
                  className={`${
                    isAboutExpanded ? "rotate-180" : ""
                  } ease transition-all duration-200`}
                />
              </button>
            </div>

            <p className="text-xs mt-2 text-gray-700">
              {engageDetails?.name} {engageDetails?.about}
            </p>
          </div>

          <button className="absolute top-[50%] -right-4 z-20 p-1 rounded-full border bg-white shadow-md">
            <BiChevronRight size={28} className="text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EngageDetails;
