import { BiChevronDown } from "react-icons/bi";

import { BsMinecartLoaded } from "react-icons/bs";
import { GoListUnordered } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { IoRefresh } from "react-icons/io5";
import { BsMicrosoftTeams } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { TbClockPause } from "react-icons/tb";
import { RiFilter3Line } from "react-icons/ri";
import { TfiLayoutColumn4 } from "react-icons/tfi";
import { FaRegShareFromSquare } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="w-full bg-white shadow-md rounded p-3 flex justify-between items-center flex-wrap gap-4">
      <button className="flex justify-start items-center gap-1 font-medium text-gray-600">
        <p className="text-sm">My open leads</p>
        <BiChevronDown />
      </button>

      <div className="flex justify-start items-center gap-3 sm:gap-4 flex-wrap">
        <button className="flex justify-start items-center gap-1 font-medium">
          <BsMinecartLoaded className="text-green-600" />
          <p className="text-gray-500 text-xs xl:text-sm hidden md:block">
            Show cart
          </p>
        </button>

        <button className="flex justify-start items-center gap-1 font-medium">
          <GoListUnordered className="text-blue-500" />
          <p className="text-gray-500 text-xs xl:text-sm hidden md:block">
            Show cart
          </p>
        </button>

        <button className="flex justify-start items-center gap-1 font-medium">
          <IoMdAdd className="text-blue-500" />
          <p className="text-gray-500 text-xs xl:text-sm hidden md:block">
            New
          </p>
        </button>

        <button className="flex justify-start items-center gap-1 font-medium">
          <IoRefresh className="text-gray-700" />
          <p className="text-gray-500 text-xs xl:text-sm hidden md:block">
            Refresh
          </p>
        </button>
        <button className="flex justify-start items-center gap-1 font-medium">
          <BsMicrosoftTeams className="text-blue-700" />
          <p className="text-gray-500 text-xs xl:text-sm hidden md:block">
            Collaborate
          </p>
        </button>
        <button className="flex justify-start items-center gap-1 font-medium">
          <RiDeleteBin6Line className="text-gray-700" />
          <p className="text-gray-500 text-xs xl:text-sm hidden md:block">
            Delete
          </p>
          <BiChevronDown className="pl-1 border-l-2" />
          <PiDotsThreeVerticalBold />
        </button>
        <button className="flex justify-start items-center gap-1 font-medium border p-1 rounded">
          <TbClockPause className="text-gray-700" />
          <p className="text-gray-500 text-xs xl:text-sm hidden md:block">
            Smart data
          </p>
        </button>
        <button className="flex justify-start items-center gap-1 font-medium border p-1 rounded">
          <RiFilter3Line className="text-gray-700" />
          <p className="text-gray-500 text-xs xl:text-sm hidden md:block">
            Edit filters
          </p>
        </button>
        <button className="flex justify-start items-center gap-1 font-medium border p-1 rounded">
          <TfiLayoutColumn4 className="text-gray-700" />
          <p className="text-gray-500 text-xs xl:text-sm hidden md:block">
            Edit columns
          </p>
        </button>
        <button className="flex justify-start items-center gap-2 px-3 py-1 rounded text-white bg-blue-700 hover:opacity-80">
          <FaRegShareFromSquare size={14} />
          <BiChevronDown size={20} className="border-l" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
