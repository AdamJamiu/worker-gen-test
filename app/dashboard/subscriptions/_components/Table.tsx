"use client";

// import { individual_customers } from "@/app/data/customers";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { LuChevronsUpDown } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import Menu from "@/app/components/ui/Menu";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { adminCaller } from "@/app/interceptors";
import LoadingSkeleton from "@/app/components/ui/LoadingSkeleton";
import { useRouter } from "next/navigation";
import FilterButton from "@/app/components/ui/buttons/FilterButton";
import { subscrptions } from "@/app/data/dashboard";
import { formatCurrency } from "@/app/utils/utils";
import { BiTrash } from "react-icons/bi";
import AddPlanModal from "../plan/_components/AddPlanModal";
import { IPlanDetails } from "../plan/type";
import ActionModal from "@/app/components/modals/ActionModal";

const Table = () => {
  const itemsPerPage = 8;
  const [isAddPlanModal, setIsAddPlanModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState<number>(1);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [planDetails, setPlanDetails] = useState<IPlanDetails | null>(null);
  const [deleteId, setDeleteId] = useState<string>("");
  const [isActionModal, setIsActionModal] = useState(false);
  const navigate = useRouter();

  // const { data: individual_customers = [], isLoading } = useQuery<
  //   IUsersListResponse[]
  // >({
  //   queryKey: ["uers-list"],
  //   queryFn: async () => adminCaller.get("users").then((res) => res.data?.data),
  //   refetchOnWindowFocus: false,
  // });

  const [filteredPlan, setFilteredPlan] = useState<any>([]);
  const totalPages = Math.ceil(subscrptions?.length / itemsPerPage);

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
  const currentItems = subscrptions?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleEditPlan = (item: IPlanDetails) => {
    setIsAddPlanModal(true);
    setPlanDetails(item);
    setOpenMenuId(null);
  };

  const handleOpenDeleteModal = (id: string) => {
    setIsActionModal(true);
    setDeleteId(id);
    setOpenMenuId(null);
  };

  useEffect(() => {
    const search = searchQuery.toLowerCase();

    if (currentItems?.length > 0) {
      if (searchQuery?.length > 0) {
        const data = subscrptions.filter(
          (item) =>
            item.name?.toLowerCase().includes(search) ||
            item.email?.toLowerCase()?.includes(search)
        );

        setFilteredPlan(data || []);
      } else {
        setFilteredPlan(subscrptions);
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
                placeholder="Search plans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-lg text-sm md:text-base _medium bg-neutralBase w-full h-full pl-11"
              />
            </div>

            <FilterButton />
          </div>

          <div className="flex justify-start items-center gap-4 font-bricolage">
            <button
              onClick={() => setIsAddPlanModal(true)}
              className="text-xs sm:text-sm md:text-base flex justify-start items-center gap-1 bg-primary text-white h-12 px-4 rounded-lg ease transition-all duration-200 hover:opacity-55"
            >
              <GoPlus />
              <p className="">New plan</p>
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-max whitespace-nowrap overflow-hidden px-4 md:px-5 py-4 bg-white rounded-lg">
            <thead className="text-neutrals800 text-xs sm:text-sm md:text-base  border-b border-neutrals100 rounded-t-lg">
              <tr className="w-full">
                <th className="p-4 rounded-tl-xl font-normal">
                  <div
                    title="Sort by Customer ID"
                    className="flex justify-start items-center gap-2"
                  >
                    <input className="h-4 w-4 rounded-lg bg-transparent border" />
                    <p>Plans</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-4">
                  <div
                    title="Sort by customer"
                    className="flex justify-start items-center gap-2 font-normal"
                  >
                    <p>Plan duration </p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-4 font-normal">
                  <div
                    title="Sort by type"
                    className="flex justify-start items-center gap-2"
                  >
                    <p>Price</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-4 font-normal">
                  <div
                    title="Sort by address"
                    className="flex justify-start items-center gap-2"
                  >
                    <p>Max vehicles</p>
                    <LuChevronsUpDown role="button" />
                  </div>
                </th>
                <th className="p-4 font-normal text-left">Max drivers</th>
                <th className="p-4 font-normal">Key features</th>
                <th className="p-4 rounded-tr-xl font-normal">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscrptions?.map((item, index) => (
                <tr
                  key={index}
                  className="w-full border-b border-neutrals100  text-[#726C6C] text-sm lg:text-base ease transition-all duration-300 hover:bg-gray-100"
                >
                  <td className="p-4">{item?.plan}</td>
                  <td className="p-4">{item?.plan || "N/A"}</td>
                  <td className="p-4">${formatCurrency(item.id) || "N/A"}</td>
                  <td className="p-4">Unlimited</td>
                  <td className="p-4">Unlimited</td>
                  <td className="p-4 text-center">All features</td>

                  <td className="p-4 text-center flex justify-center">
                    <Menu
                      isOpen={openMenuId === index}
                      setIsOpen={(state) => setOpenMenuId(state ? index : null)}
                      MenuIcon={
                        <button className="rounded-full hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-50 ease transition-all duration-300 p-2">
                          <BsThreeDots color="black" size={23} />
                        </button>
                      }
                      Content={
                        <div className="w-full  flex flex-col">
                          <button
                            onClick={() => handleEditPlan(item)}
                            className="text-neutrals900 hover:bg-gray-100 flex justify-start items-center gap-2 text-sm md:text-base p-2 w-full rounded-md"
                          >
                            <MdOutlineEdit />
                            <p>Edit plan</p>
                          </button>
                          <button
                            onClick={() => handleOpenDeleteModal(item?.id)}
                            className="text-error200 hover:bg-gray-100 flex justify-start items-center gap-2 text-sm md:text-base p-2 w-full rounded-md"
                          >
                            <BiTrash />
                            <p>Delete plan</p>
                          </button>
                        </div>
                      }
                    />
                  </td>
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
                    No plans found
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

      <AddPlanModal
        isOpen={isAddPlanModal}
        setIsOpen={setIsAddPlanModal}
        details={planDetails as IPlanDetails}
      />

      <ActionModal
        isOpen={isActionModal}
        customActionText="Delete"
        setIsOpen={setIsActionModal}
        confirmActionFnc={async () => console.log("")}
      />
    </div>
  );
};

export default Table;
