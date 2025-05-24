"use client";

import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Menu from "@/app/components/ui/Menu";
import { FaRegEye } from "react-icons/fa6";
import LoadingSkeleton from "@/app/components/ui/LoadingSkeleton";
import { useRouter } from "next/navigation";
import { drivers } from "@/app/data/dashboard";
import Select from "@/app/components/ui/Select";

interface IPartnersTable {
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

const driver_type = ["Type 1", "Type 2"];

const PartnersTable = ({ onOpenModal }: IPartnersTable) => {
  const itemsPerPage = 8;
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const navigate = useRouter();
  const [driverType, setDriverType] = useState({ label: "", value: "" });

  // const { data: Partners = [], isLoading } = useQuery<IUsersListResponse[]>({
  //   queryKey: ["Partners-list"],
  //   queryFn: async () =>
  //     adminCaller.get("Partners").then((res) => res.data?.data),
  //   refetchOnWindowFocus: false,
  //   enabled: false,
  // });

  const [filteredPartners, setFilteredPartners] = useState<
    IUsersListResponse[] | any[]
  >([]);

  const totalPages = Math.ceil(drivers?.length / itemsPerPage);

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
  const currentItems = drivers?.slice(startIndex, startIndex + itemsPerPage);

  const handleViewDriver = (id: string) => {
    navigate.push(`/dashboard/company-management/${id}/partners/${id}`);
    setOpenMenuId(null);
  };

  useEffect(() => {
    const search = searchQuery.toLowerCase();

    if (currentItems?.length > 0) {
      if (searchQuery?.length > 0) {
        const data = currentItems.filter(
          (item) =>
            item.name?.toLowerCase().includes(search) ||
            item.type?.toLowerCase()?.includes(search)
        );

        setFilteredPartners(data || []);
      } else {
        setFilteredPartners(drivers);
      }
    }
  }, [searchQuery, currentItems?.length]);

  return (
    <div className="mt-5 w-full font-bricolage">
      <div className="rounded-lg">
        <div className="mb-7 w-full py-3 rounded-lg flex justify-between items-center gap-4 bg-white md:px-4 md:flex-nowrap flex-wrap">
          <div className="flex justify-start items-center gap-4 flex-wrap md:flex-nowrap">
            <div className="relative w-full md:w-64 min-w-max h-12">
              <FiSearch
                className="absolute top-3 left-3 text-neutrals200"
                size={22}
              />
              <input
                placeholder="Search Partners"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-2xl text-sm md:text-base font-bricolage_medium bg-neutralBase w-full h-full pl-11"
              />
            </div>

            <div className="w-full flex justify-start items-start gap-7 sm:gap-3 flex-wrap">
              <div className="w-[40%] sm:w-[50%] flex-1">
                <Select
                  selected={driverType}
                  onChange={(e) =>
                    setDriverType({ label: e.label, value: e.value })
                  }
                  placeholder="Change status"
                  options={driver_type.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                />
              </div>

              <div className="w-[40%] sm:w-[50%] flex-1">
                <Select
                  selected={driverType}
                  onChange={(e) =>
                    setDriverType({ label: e.label, value: e.value })
                  }
                  placeholder="Change status"
                  options={driver_type.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                />
              </div>

              <div className="w-full sm:w-[50%] flex-1">
                <Select
                  selected={driverType}
                  onChange={(e) =>
                    setDriverType({ label: e.label, value: e.value })
                  }
                  placeholder="Change status"
                  options={driver_type.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-auto border rounded-xl">
          <table className="w-full min-w-max whitespace-nowrap overflow-hidden px-4 md:px-5 py-4 bg-white rounded-lg">
            <thead className="text-neutrals800 text-xs sm:text-sm md:text-base font-bricolage border-b border-neutrals100 rounded-t-lg">
              <tr className="w-full bg-primary100">
                <th className="p-3 rounded-tl-xl font-medium text-left">
                  Driver name
                </th>
                <th className="p-3 font-medium">
                  <div
                    title="Sort by Contact person"
                    className="flex justify-start items-center gap-2"
                  >
                    <p>Assigned Driver</p>
                  </div>
                </th>
                <th className="p-3 font-medium">
                  <div
                    title="Partners"
                    className="flex justify-start items-center gap-2"
                  >
                    <p>Vehicle type</p>
                  </div>
                </th>
                <th className="p-3 font-medium">Distance covered</th>
                <th className="p-3 font-medium">Driver status</th>
                <th className="px-4 py-2 rounded-tr-xl font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPartners?.map((item, index) => (
                <tr
                  key={index}
                  className="w-full border-b border-neutrals100 font-bricolage text-neutrals700 text-sm hover:bg-gray-100"
                >
                  <td className="p-4 text-center">
                    <div className="flex justify-start items-center gap-2 flex-nowrap">
                      <div>
                        <p className="font-semibold">{item?.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{item?.assigned_driver || "N/A"}</td>
                  <td className="p-4">{item.type || "N/A"}</td>
                  <td className="p-4 text-center">
                    {item?.distance_covered || "N/A"}
                  </td>
                  <td className="p-4 capitalize font-medium text-center">
                    <p
                      className={`${
                        item.status === "Under repair" ? "pending" : ""
                      } ${item.status}`}
                    >
                      {item?.status || "N/A"}
                    </p>
                  </td>

                  <td className="p-4 text-center">
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
                            onClick={() => handleViewDriver(item?.id)}
                            className="text-neutrals900 hover:bg-gray-100 flex justify-start items-center gap-2 text-sm md:text-base p-2 w-full rounded-md"
                          >
                            <FaRegEye />
                            <p>View Driver</p>
                          </button>
                          {/* <button
                            // onClick={() => handleViewDriver()}
                            className="text-neutrals900 hover:bg-gray-100 flex justify-start items-center gap-2 text-sm md:text-base p-2 w-full rounded-md"
                          >
                            <MdOutlineEdit />
                            <p>Edit Driver</p>
                          </button> */}
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
                    No Partners found
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

      {/* <ActionModal
        setIsOpen={setIsDeactiveModal}
        isOpen={isDeactiveModal}
        customActionText="Yes, deactivate"
        confirmActionFnc={async () => console.log("")}
      /> */}
    </div>
  );
};

export default PartnersTable;
