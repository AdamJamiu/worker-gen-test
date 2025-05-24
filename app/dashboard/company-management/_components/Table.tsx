"use client";

import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { LuChevronsUpDown } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import Menu from "@/app/components/ui/Menu";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { adminCaller } from "@/app/interceptors";
import LoadingSkeleton from "@/app/components/ui/LoadingSkeleton";
import { useRouter } from "next/navigation";
import FilterButton from "@/app/components/ui/buttons/FilterButton";
import ExportCsvButton from "@/app/components/ui/buttons/ExportCsvButton";
import ActionModal from "@/app/components/modals/ActionModal";
import { companies } from "@/app/data/dashboard";

interface ITable {
  onOpenModal: () => void;
  data: any[];
}

interface IUsersListResponse {
  id: string;
  userName: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  role: null;
  userType: string;
  firstName: string;
  lastName: string;
  staffCode: string;
  email: string;
  isActive: boolean;
  imageUrl: string;
  nearestBusStop: string;
  lga: string;
  referralCount: number;
}

const Table = ({ onOpenModal }: ITable) => {
  const itemsPerPage = 8;
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeactiveModal, setIsDeactiveModal] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const navigate = useRouter();

  // const { data: companies = [], isLoading } = useQuery<IUsersListResponse[]>({
  //   queryKey: ["companies-list"],
  //   queryFn: async () =>
  //     adminCaller.get("Companiess").then((res) => res.data?.data),
  //   refetchOnWindowFocus: false,
  //   enabled: false,
  // });

  const [filteredCompaniess, setFilteredCompaniess] = useState<
    IUsersListResponse[] | any[]
  >([]);

  const totalPages = Math.ceil(companies?.length / itemsPerPage);

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
  const currentItems = companies?.slice(startIndex, startIndex + itemsPerPage);

  const handleViewCompany = (id: string) => {
    navigate.push(`/dashboard/company-management/${id}/overview`);
    setOpenMenuId(null);
  };

  useEffect(() => {
    const search = searchQuery.toLowerCase();

    if (currentItems?.length > 0) {
      if (searchQuery?.length > 0) {
        const data = currentItems.filter(
          (item) =>
            item.name?.toLowerCase().includes(search) ||
            item.contact_person?.toLowerCase()?.includes(search)
        );

        setFilteredCompaniess(data || []);
      } else {
        setFilteredCompaniess(companies);
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
                placeholder="Search Companies"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-lg text-sm md:text-base font-bricolage_medium bg-neutralBase w-full h-full pl-11"
              />
            </div>

            <FilterButton />
          </div>

          {/* <div className="flex justify-start items-center gap-2">
            <button
              onClick={onOpenModal}
              className="text-sm md:text-base flex justify-start items-center gap-2 border border-primary text-primary h-12 px-4 rounded-lg ease transition-all duration-200 hover:opacity-55"
            >
              <GoDownload />
              <p className="font-bricolage">Export CSV</p>
            </button>
          </div> */}

          <ExportCsvButton />
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-max whitespace-nowrap overflow-hidden px-4 md:px-5 py-4 bg-white rounded-lg">
            <thead className="text-neutrals500 text-xs sm:text-sm md:text-base font-bricolage border-b border-neutrals100 rounded-t-lg">
              <tr className="w-full">
                <th className="p-3 rounded-tl-xl ">
                  <div
                    title="Comapny name"
                    className="flex justify-start items-center gap-2"
                  >
                    <input className="h-4 w-4 rounded-lg bg-transparent border" />
                    <p>Company name</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-3">
                  <div
                    title="Sort by Contact person"
                    className="flex justify-start items-center gap-2"
                  >
                    <p>Contact person</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-3 ">
                  <div
                    title="Vehicles"
                    className="flex justify-start items-center gap-2"
                  >
                    <p>Vehicles</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-3 ">Drivers</th>
                <th className="p-3">Partners</th>
                <th className="px-4 py-2 rounded-tr-xl">Subscription</th>
                <th className="px-4 py-2 rounded-tr-xl">Status</th>
                <th className="px-4 py-2 rounded-tr-xl"></th>
              </tr>
            </thead>
            <tbody>
              {filteredCompaniess?.map((item, index) => (
                <tr
                  key={index}
                  className="w-full border-b border-neutrals100 font-bricolage text-neutrals600 text-sm hover:bg-gray-100"
                >
                  <td className="p-4 text-center">
                    <div className="flex justify-start items-center gap-2 flex-nowrap">
                      {/* {item?.imageUrl ? (
                        <img
                          src={item?.imageUrl}
                          alt={item?.fullName}
                          className="rounded-full"
                        />
                      ) : null} */}
                      <div>
                        <p className="font-semibold">{item?.name}</p>
                        <p className="font-bricolage">{item.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{item?.contact_person || "N/A"}</td>
                  <td className="p-4">{item.vehicles || "N/A"}</td>
                  <td className="p-4">{item?.drivers || "N/A"}</td>
                  <td className="p-4">{item?.partners || "N/A"}</td>
                  <td className="p-4">{item?.subscriptions || "N/A"}</td>
                  <td className="p-4 capitalize font-medium">
                    <p className={`${item.status}`}>{item?.status || "N/A"}</p>
                  </td>

                  <td className="p-4">
                    <Menu
                      isOpen={openMenuId === index}
                      setIsOpen={(state) => setOpenMenuId(state ? index : null)}
                      MenuIcon={
                        <button className="rounded-full hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-50 ease transition-all duration-300 p-2">
                          <BsThreeDots color="black" size={23} />
                        </button>
                      }
                      Content={
                        <div className="w-full font-bricolage flex flex-col">
                          <button
                            onClick={() => handleViewCompany(item?.id)}
                            className="text-neutrals900 hover:bg-gray-100 flex justify-start items-center gap-2 text-sm md:text-base p-2 w-full rounded-md"
                          >
                            <FaRegEye />
                            <p>View Company</p>
                          </button>
                          <button
                            // onClick={() => handleViewCompany()}
                            className="text-neutrals900 hover:bg-gray-100 flex justify-start items-center gap-2 text-sm md:text-base p-2 w-full rounded-md"
                          >
                            <MdOutlineEdit />
                            <p>Edit Company</p>
                          </button>
                        </div>
                      }
                    />
                  </td>
                </tr>
              ))}

              {isLoading ? <LoadingSkeleton length={7} /> : null}

              {currentItems.length < 1 || !currentItems ? (
                <tr className="w-full border-b border-neutrals100 font-bricolage_medium text-neutrals500 text-xs md:text-sm ease transition-all duration-300">
                  <td
                    className="p-4 text-center text-lg"
                    colSpan={7}
                    rowSpan={7}
                  >
                    No Companiess found
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

      <ActionModal
        setIsOpen={setIsDeactiveModal}
        isOpen={isDeactiveModal}
        customActionText="Yes, deactivate"
        confirmActionFnc={async () => console.log("")}
      />
    </div>
  );
};

export default Table;
