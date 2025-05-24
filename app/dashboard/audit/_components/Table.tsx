"use client";

import { useEffect, useState } from "react";
import { BsEye, BsThreeDots } from "react-icons/bs";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { LuChevronsUpDown } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import Menu from "@/app/components/ui/Menu";
import { useRouter } from "next/navigation";
import FilterButton from "@/app/components/ui/buttons/FilterButton";
import { audit, transactions } from "@/app/data/dashboard";
import { formatCurrency } from "@/app/utils/utils";
import ExportCsvButton from "@/app/components/ui/buttons/ExportCsvButton";
import TransactionDetalsModal from "./TransactionDetalsModal";
import { ITransaction } from "../type";

const Table = () => {
  const itemsPerPage = 8;
  const [isTransDetailsModal, setIsTransDetailsModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState<number>(1);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [transDetails, setTransDetails] = useState<ITransaction | null>(null);
  const navigate = useRouter();

  const [filteredAudit, setFilteredAudit] = useState<any>([]);
  const totalPages = Math.ceil(transactions?.length / itemsPerPage);

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
  const currentItems = transactions?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleOpenTransDetailsModal = (item: any) => {
    setIsTransDetailsModal(true);
    setTransDetails(item);
    setOpenMenuId(null);
  };

  useEffect(() => {
    const search = searchQuery.toLowerCase();

    if (currentItems?.length > 0) {
      if (searchQuery?.length > 0) {
        const data = transactions.filter(
          (item) =>
            item.name?.toLowerCase().includes(search) ||
            item.email?.toLowerCase()?.includes(search)
        );

        setFilteredAudit(data || []);
      } else {
        setFilteredAudit(transactions);
      }
    }
  }, [searchQuery, currentItems?.length]);

  return (
    <div className="py-7 w-full font-bricolage">
      <div className="rounded-lg">
        <div className="mb-7 w-full py-3 rounded-lg flex justify-between items-center gap-4 bg-white px-4 md:flex-nowrap flex-wrap">
          <div className="flex justify-start items-center gap-4">
            <div className="relative w-full sm:w-64 h-12">
              <FiSearch
                className="absolute top-3 left-3 text-neutrals200"
                size={22}
              />
              <input
                placeholder="Search user"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-lg text-sm md:text-base _medium bg-neutralBase w-full h-full pl-11"
              />
            </div>

            <FilterButton />
          </div>

          <div>
            <ExportCsvButton />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-max whitespace-nowrap overflow-hidden px-4 md:px-5 py-4 bg-white rounded-lg">
            <thead className="text-neutrals800 text-xs sm:text-sm md:text-base  border-b border-neutrals100 rounded-t-lg">
              <tr className="w-full">
                <th
                  title="Sort by customer name"
                  className="p-4 rounded-tl-xl font-normal text-left"
                >
                  <p>User</p>
                </th>
                <th className="p-4">
                  <div
                    title="Sort by customer"
                    className="flex justify-start items-center gap-2 font-normal"
                  >
                    <p>Model</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-4 font-normal">
                  <div
                    title="Sort by customer"
                    className="flex justify-start items-center gap-2 font-normal"
                  >
                    <p>Action</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-4 font-normal">
                  <div
                    title="Sort by address"
                    className="flex justify-start items-center gap-2"
                  >
                    <p>Timestamp</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-4 font-normal text-left">IP address</th>
              </tr>
            </thead>
            <tbody>
              {audit?.map((item, index) => (
                <tr
                  key={index}
                  className="w-full border-b border-neutrals100  text-[#726C6C] text-sm lg:text-base ease transition-all duration-300 hover:bg-gray-100"
                >
                  <td className="p-4">{item?.name || "N/A"}</td>
                  <td className="p-4">Companies</td>
                  <td className="p-4">{item.action}</td>
                  <td className="p-4">{item?.date}</td>
                  <td className="p-4">{item.ip_address}</td>
                </tr>
              ))}

              {/* {isLoading ? <LoadingSkeleton length={5} /> : null} */}

              {currentItems.length < 1 || !currentItems ? (
                <tr className="w-full text-center border-b border-neutrals100 _medium text-neutrals500">
                  <td
                    className="p-4 text-center text-lg"
                    colSpan={5}
                    rowSpan={5}
                  >
                    No Transaction found
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>

          {currentItems.length > 1 ? (
            <div className="w-full flex justify-end items-center gap-3 mt-5 bg-white rounded-lg p-4">
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
          ) : null}
        </div>
      </div>

      <TransactionDetalsModal
        isOpen={isTransDetailsModal}
        setIsOpen={setIsTransDetailsModal}
        details={transDetails as any}
      />
    </div>
  );
};

export default Table;
