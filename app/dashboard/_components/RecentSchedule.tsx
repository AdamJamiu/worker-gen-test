"use client";

import { schedule } from "@/app/data/dashboard";
import { useState } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const RecentSchedule = () => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(schedule.length / itemsPerPage);
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
  const currentItems = schedule.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="py-7 w-full font-clash_display">
      <div className="bg-white rounded-md px-4 md:px-7 py-8">
        <h2 className="font-clash_display_medium text-neutral-700 text-sm sm:text-base md:text-lg xl:text-xl">
          Recent schedule
        </h2>

        <div className="w-full overflow-x-auto">
          <table className="w-full mt-5 min-w-max">
            <thead className="text-neutrals500 text-xs sm:text-sm md:text-base font-clash_display_medium bg-neutralBase rounded-t-lg">
              <td className="p-2 rounded-tl-xl">Schedule ID</td>
              <td className="p-2">Customer</td>
              <td className="p-2">Type</td>
              <td className="p-2">Address</td>
              <td className="p-2 rounded-tr-xl">Status</td>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr
                  key={index}
                  className="w-full font-medium text-neutrals500 text-xs md:text-sm"
                >
                  <td className="px-2 py-4">{item.schedule_id}</td>
                  <td className="px-2 py-4">
                    <div className="flex justify-start items-center gap-2 flex-nowrap">
                      <img
                        src={item.avatar}
                        alt={item.customer_name}
                        className="rounded-full"
                      />
                      <p>{item.customer_name}</p>
                    </div>
                  </td>
                  <td className="px-2 py-4">{item.type}</td>
                  <td className="px-2 py-4">{item.address}</td>
                  <td className=" py-4">
                    <div className="rounded-full p-1 bg-warning100 font-medium capitalize border-2 border-warning text-center text-warning">
                      {item.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </div>
  );
};

export default RecentSchedule;
