"use client";

// import { individual_customers } from "@/app/data/customers";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { LuChevronsUpDown } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
// import { GoDownload } from "react-icons/go";
import Menu from "@/app/components/ui/Menu";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { adminCaller } from "@/app/interceptors";
import LoadingSkeleton from "@/app/components/ui/LoadingSkeleton";
import { useRouter } from "next/navigation";
import { drivers } from "@/app/data/dashboard";

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
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const navigate = useRouter();

  const { data: individual_customers = [], isLoading } = useQuery<
    IUsersListResponse[]
  >({
    queryKey: ["uers-list"],
    queryFn: async () => adminCaller.get("users").then((res) => res.data?.data),
    refetchOnWindowFocus: false,
  });

  const [filteredUsers, setFilteredUsers] = useState<
    IUsersListResponse[] | any[]
  >([]);
  const totalPages = Math.ceil(individual_customers?.length / itemsPerPage);

  // console.log("data", individual_customers);

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
  const currentItems = individual_customers?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleViewCustomer = (id: string) => {
    navigate.push(`/dashboard/user-management/${id}`);
    setOpenMenuId(null);
  };

  useEffect(() => {
    const search = searchQuery.toLowerCase();

    if (currentItems?.length > 0) {
      if (searchQuery?.length > 0) {
        const data = currentItems.filter(
          (item) =>
            item.firstName?.toLowerCase().includes(search) ||
            item.lastName?.toLowerCase()?.includes(search)
        );

        setFilteredUsers(data || []);
      } else {
        setFilteredUsers(individual_customers);
      }
    }
  }, [searchQuery, currentItems?.length]);

  return (
    <div className="py-7 w-full font-clash_display">
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
                className="rounded-lg text-sm md:text-base font-clash_display_medium bg-neutralBase w-full h-full pl-11"
              />
            </div>

            <button className="flex justify-start items-center gap-3 text-primary bg-primary100 h-12 px-4 rounded-lg ease transition-all duration-200 hover:bg-primary200">
              <p className="font-clash_display_medium text-sm md:text-base">
                Filter
              </p>
              <FaFilter />
            </button>
          </div>

          <div className="flex justify-start items-center gap-2">
            <button
              onClick={onOpenModal}
              className="text-sm md:text-base flex justify-start items-center gap-2 bg-primary text-white h-12 px-4 rounded-lg ease transition-all duration-200 hover:opacity-55"
            >
              <GoPlus />
              <p className="font-clash_display">Add user</p>
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-max whitespace-nowrap overflow-hidden px-4 md:px-5 py-4 bg-white rounded-lg">
            <thead className="text-neutrals500 text-xs sm:text-sm md:text-base font-clash_display border-b border-neutrals100 rounded-t-lg">
              <tr className="w-full">
                <th className="p-3 rounded-tl-xl font-normal">
                  <div
                    title="Sort by Customer ID"
                    className="flex justify-start items-center gap-2"
                  >
                    <input className="h-4 w-4 rounded-lg bg-transparent border" />
                    <p>Username</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-3">
                  <div
                    title="Sort by customer"
                    className="flex justify-start items-center gap-2 font-normal"
                  >
                    <p>User type</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-3 font-normal">
                  <div
                    title="Sort by type"
                    className="flex justify-start items-center gap-2"
                  >
                    <p>Phone number</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-3 font-normal">
                  <div
                    title="Sort by address"
                    className="flex justify-start items-center gap-2"
                  >
                    <p>Home address</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-3"></th>
                <th className="px-4 py-2 rounded-tr-xl"></th>
              </tr>
            </thead>
            <tbody>
              {drivers?.map((item, index) => (
                <tr
                  key={index}
                  className="w-full border-b border-neutrals100 font-clash_display_medium text-neutrals500 text-xs md:text-sm ease transition-all duration-300 hover:bg-gray-100"
                >
                  <td className="px-2 py-4">
                    <div className="flex justify-start items-center gap-2 flex-nowrap">
                      {/* {item?.imageUrl ? (
                        <img
                          src={item?.imageUrl}
                          alt={item?.fullName}
                          className="rounded-full"
                        />
                      ) : null} */}
                      <div>
                        <p>{item?.name}</p>
                        <p className="font-clash_display">{item.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-4">{item?.type || "N/A"}</td>
                  <td className="px-2 py-4">{"N/A"}</td>
                  <td className="px-2 py-4">{"N/A"}</td>

                  <td className="py-2 px-4">
                    <Menu
                      isOpen={openMenuId === index}
                      setIsOpen={(state) => setOpenMenuId(state ? index : null)}
                      MenuIcon={
                        <button className="rounded-full hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-50 ease transition-all duration-300 p-2">
                          <BsThreeDots color="black" size={23} />
                        </button>
                      }
                      Content={
                        <div className="w-full font-clash_display flex flex-col">
                          <button
                            onClick={() => handleViewCustomer(item?.id)}
                            className="text-neutrals900 hover:bg-gray-100 flex justify-start items-center gap-2 text-sm md:text-base p-2 w-full rounded-md"
                          >
                            <FaRegEye />
                            <p>View customer</p>
                          </button>
                          <button
                            // onClick={() => handleViewCustomer()}
                            className="text-neutrals900 hover:bg-gray-100 flex justify-start items-center gap-2 text-sm md:text-base p-2 w-full rounded-md"
                          >
                            <MdOutlineEdit />
                            <p>Edit customer</p>
                          </button>
                        </div>
                      }
                    />
                  </td>
                </tr>
              ))}

              {isLoading ? <LoadingSkeleton length={5} /> : null}

              {(currentItems.length < 1 || !currentItems) && !isLoading ? (
                <tr className="w-full text-center border-b border-neutrals100 font-clash_display_medium text-neutrals500">
                  <td
                    className="p-4 text-center text-lg"
                    colSpan={5}
                    rowSpan={5}
                  >
                    No users found
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>

          {currentItems.length > 1 && !isLoading ? (
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
    </div>
  );
};

export default Table;
