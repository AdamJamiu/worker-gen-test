"use client";

import { activity } from "@/app/data/dashboard";
import { useState } from "react";
import { MdOutlineChevronRight, MdOutlineChevronLeft } from "react-icons/md";

type TColor = "blue" | "yellow" | "green";

const RecentActivity = () => {
  const colors: TColor[] = ["blue", "yellow", "green"];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(activity.length / itemsPerPage);
  const [page, setPage] = useState<number>(1);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = activity.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pb-4 p-4 w-full font-clash_display bg-white rounded-lg">
      <div className="bg-white rounded-md">
        <h2 className="font-clash_display_medium text-neutral-700 text-sm sm:text-base md:text-lg xl:text-xl w-full text-left">
          Recent Activity
        </h2>
      </div>

      <div className="mt-5 w-full flex flex-col gap-4">
        {currentItems.map((item, index) => {
          const theme: TColor = colors[(startIndex + index) % colors.length];
          return (
            <div
              key={startIndex + index}
              className={`${
                theme === "blue"
                  ? "bg-secondary200"
                  : theme === "yellow"
                  ? "bg-warning100"
                  : "bg-primary100"
              } w-full py-3 pr-3 pl-4 rounded-sm relative overflow-hidden`}
            >
              <div
                className={`absolute top-0 bottom-0 w-1 -left-0 ${
                  theme === "yellow"
                    ? "bg-warning"
                    : theme === "green"
                    ? "bg-primary"
                    : "bg-secondary"
                }`}
              ></div>
              <p className="font-clash_display_medium text-neutrals700">
                {item.title}
              </p>
              <p className="font-clash_display font-normal text-neutrals500 mt-2 text-xs md:text-sm">
                {item.message}
              </p>
              <p className="font-clash_display font-normal text-neutrals500 mt-2 text-xs md:text-sm">
                {item.time}
              </p>
            </div>
          );
        })}
      </div>

      <div className="w-full flex justify-end items-center gap-3 mt-5">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="p-1 rounded-md border border-neutrals100 transition-all duration-200 hover:bg-neutralBase active:bg-neutralBase focus:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MdOutlineChevronLeft size={20} className="text-neutrals200" />
        </button>
        <span className="text-sm text-neutrals700">
          {page} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="p-1 rounded-md border border-neutrals100 transition-all duration-200 hover:bg-neutralBase active:bg-neutralBase focus:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MdOutlineChevronRight size={20} className="text-neutrals200" />
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;
