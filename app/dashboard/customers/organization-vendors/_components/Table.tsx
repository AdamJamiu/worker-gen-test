"use client";

import { individual_customers } from "@/app/data/customers";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { LuChevronsUpDown } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { GoDownload } from "react-icons/go";

const Table = () => {
  const itemsPerPage = 8;
  const totalPages = Math.ceil(individual_customers.length / itemsPerPage);
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
  const currentItems = individual_customers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="py-7 w-full font-clash_display">
      <div className="rounded-lg">
        <div className="mb-7 w-full py-3 rounded-lg flex justify-between items-center gap-4 bg-white px-4">
          <div className="flex justify-start items-center gap-4">
            <div className="relative w-64 h-12">
              <FiSearch
                className="absolute top-3 left-3 text-neutrals200"
                size={22}
              />
              <input
                placeholder="Search user"
                className="rounded-lg font-clash_display_medium bg-neutralBase w-full h-full pl-11"
              />
            </div>

            <button className="flex justify-start items-center gap-3 text-primary bg-primary100 h-12 px-4 rounded-lg ease transition-all duration-200 hover:bg-primary200">
              <p className="font-clash_display_medium">Filter</p>
              <FaFilter />
            </button>
          </div>

          <div className="flex justify-start items-center gap-2">
            <button className="flex justify-start items-center gap-2 text-primary border-primary border h-12 px-4 rounded-lg ease transition-all duration-200 hover:bg-primary hover:text-white">
              <GoDownload />
              <p className="font-clash_display_medium">Export csv</p>
            </button>

            <button className="font-clash_display flex justify-start items-center gap-2 bg-primary text-white h-12 px-4 rounded-lg ease transition-all duration-200 hover:opacity-55">
              <GoPlus />
              <p className="">Add vendor</p>
            </button>

            <button className="flex justify-start items-center gap-2 bg-primary text-white h-12 px-4 rounded-lg ease transition-all duration-200 hover:opacity-55">
              <GoPlus />
              <p className="font-clash_display">Add organization</p>
            </button>
          </div>
        </div>

        <div className="px-4 md:px-5 py-4 bg-white rounded-lg">
          <table className="w-full whitespace-nowrap">
            <thead className="text-neutrals500 text-xs sm:text-sm md:text-base font-clash_display border-b border-neutrals100 rounded-t-lg">
              <td className="p-3 rounded-tl-xl">
                <div className="flex justify-start items-center gap-2">
                  <input className="h-4 w-4 rounded-lg bg-transparent border" />
                  <p>Customer ID</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </td>
              <td className="p-3">
                <div className="flex justify-start items-center gap-2">
                  <p>Customer</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </td>
              <td className="p-3">
                <div className="flex justify-start items-center gap-2">
                  <p>Type</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </td>
              <td className="p-3">
                <div className="flex justify-start items-center gap-2">
                  <p>Address</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </td>
              <td className="p-3">
                <div className="flex justify-start items-center gap-2">
                  <p>Phone number</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </td>
              <td className="p-3 rounded-tr-xl">
                <div className="flex justify-start items-center gap-2">
                  <p>Status</p>
                  <LuChevronsUpDown role="button" />
                </div>
              </td>
              <td className="px-4 py-2 rounded-tr-xl"></td>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr
                  key={index}
                  className="w-full border-b border-neutrals100 font-clash_display_medium text-neutrals500 text-xs md:text-sm ease transition-all duration-300 hover:bg-gray-100"
                >
                  <td className="px-2 py-4">{item.customer_id}</td>
                  <td className="px-2 py-4">
                    <div className="flex justify-start items-center gap-2 flex-nowrap">
                      <img
                        src={item.avatar}
                        alt={item.customer_name}
                        className="rounded-full"
                      />
                      <div>
                        <p>{item.customer_name}</p>
                        <p className="font-clash_display">{item.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-4">{item.type}</td>
                  <td className="px-2 py-4">{item.address}</td>
                  <td className="px-2 py-4">{item.phone}</td>
                  <td className=" py-4">
                    <div className="rounded-full p-1 bg-warning100 font-medium capitalize border-2 border-warning text-center text-warning">
                      {item.status}
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <button className="rounded-full hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-50 ease transition-all duration-300 p-2 relative z-10">
                      <BsThreeDots color="black" size={23} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="w-full flex justify-end items-center gap-3 mt-5">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="p-1 rounded-lg border border-neutrals100 transition-all duration-200 hover:bg-neutralBase active:bg-neutralBase focus:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MdOutlineChevronLeft size={20} className="text-neutrals200" />
            </button>
            <span className="text-sm text-neutrals700">
              {page} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="p-1 rounded-lg border border-neutrals100 transition-all duration-200 hover:bg-neutralBase active:bg-neutralBase focus:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MdOutlineChevronRight size={20} className="text-neutrals200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
