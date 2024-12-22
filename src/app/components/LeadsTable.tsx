"use client";

import { CgChevronDown } from "react-icons/cg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { leads_table } from "@/data/table";

enum ESortName {
  Default = "",
  NAME = "Name",
  Topic = "Topic",
  Status = "Status",
  Created_at = "Created_at",
}

const LeadsTable = () => {
  const [sortName, setSortName] = useState<ESortName>(ESortName.Default);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(leads_table);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  useEffect(() => {
    const value = searchTerm?.toLowerCase();
    if (searchTerm.length) {
      const data = leads_table.filter((item) =>
        value.length > 0
          ? item.Name.toLowerCase().includes(value) ||
            item.Topic.toLowerCase().includes(value) ||
            item.CreatedOn.toLowerCase().includes(value)
          : item
      );
      setFilteredData(data);
    } else {
      setFilteredData(leads_table);
    }
  }, [searchTerm]);

  return (
    <div className="w-full shadow-lg mt-10 bg-white py-4 h-full font-segoe rounded">
      <div className="relative md:w-96 w-72 pl-4">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Microsoft_365_Copilot_Icon.svg/72px-Microsoft_365_Copilot_Icon.svg.png"
          width={20}
          height={20}
          className="absolute top-1 right-3"
          alt="copilot svg"
        />
        <div className="rounded-md bg-gradient-to-r from-purple-900 via-purple-500 to-blue-500 p-[1.2px]">
          {/* Inner background and the input field */}
          <div className="w-full h-full bg-white rounded-md">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              placeholder="Search, filter and search with copilot"
              className="w-full h-full px-2 py-1.5 bg-transparent focus:outline-none rounded-lg text-sm"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto w-full mt-4">
        <table className="min-w-max w-full">
          <tr className="w-full text-xs md:text-sm">
            <th></th>
            <th className="pb-4 pt-2 text-left text-xs 3xl:text-sm">
              <button
                onClick={() => setSortName(ESortName.NAME)}
                className="flex justify-center items-center gap-1 text-left text-gray-600 pl-3"
              >
                <p>Name</p>
                <CgChevronDown
                  size={19}
                  className={`${
                    sortName === ESortName.NAME ? "rotate-180" : ""
                  } ease transition-all duration-200`}
                />
              </button>
            </th>
            <th className="pb-4 pt-2 pl-4 text-left text-xs xl:text-sm">
              <button
                onClick={() => setSortName(ESortName.Topic)}
                className="flex justify-center items-center gap-1  text-left text-gray-600"
              >
                <p>Topic</p>
                <CgChevronDown
                  className={`${
                    sortName === ESortName.Topic ? "rotate-180" : ""
                  } ease transition-all duration-200`}
                  size={19}
                />
              </button>
            </th>
            <th className="pb-4 pt-2 pl-4  text-left text-xs xl:text-sm">
              <button
                onClick={() => setSortName(ESortName.Status)}
                className="flex justify-center items-center gap-1  text-left text-gray-600"
              >
                <p>Status reason</p>
                <CgChevronDown
                  className={`${
                    sortName === ESortName.Status ? "rotate-180" : ""
                  } ease transition-all duration-200`}
                  size={19}
                />
              </button>
            </th>
            <th className="pb-4 pt-2 pl-4  text-left text-xs xl:text-sm">
              <button
                onClick={() => setSortName(ESortName.Created_at)}
                className="flex justify-center items-center gap-1  text-left text-gray-600"
              >
                <p>Created on</p>
                <BsArrowDown />
                <CgChevronDown
                  className={`${
                    sortName === ESortName.Created_at ? "rotate-180" : ""
                  } ease transition-all duration-200`}
                  size={19}
                />
              </button>
            </th>
          </tr>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData
                .sort((a, b) => {
                  if (sortName !== ESortName.Default) {
                    const valueA = a[sortName as keyof typeof a];
                    const valueB = b[sortName as keyof typeof b];

                    // Ensure both values are strings for localeCompare
                    const strA = valueA != null ? String(valueA) : "";
                    const strB = valueB != null ? String(valueB) : "";

                    return strA.localeCompare(strB);
                  }
                  return 0;
                })
                ?.map((item, index) => (
                  <tr
                    onClick={() =>
                      setSelectedRows((prev) => {
                        if (selectedRows.includes(item.id)) {
                          const rows = selectedRows.filter((itm) => !itm);
                          return rows;
                        } else {
                          return [...prev, item.id];
                        }
                      })
                    }
                    key={index}
                    className={` ${
                      selectedRows.includes(item.id) ? "bg-gray-100" : ""
                    }
                        w-full border-t hover:bg-gray-100`}
                  >
                    <td className="pl-4 py-2">
                      <input
                        checked={selectedRows.includes(item.id)}
                        type="checkbox"
                        className="w-4 h-4"
                      />
                    </td>
                    <td className="py-2 text-blue-600 font-medium text-xs lg:text-sm">
                      {item.Name}
                    </td>
                    <td className="pl-4 py-2 text-gray-600 font-medium text-xs lg:text-sm">
                      {item.Topic}
                    </td>
                    <td className="pl-4 py-2 text-gray-600 font-medium text-xs lg:text-sm">
                      {item.Reason}
                    </td>
                    <td className="pl-4 py-2 text-gray-600 font-medium text-xs lg:text-sm">
                      {item.CreatedOn}
                    </td>
                  </tr>
                ))
            ) : (
              <tr className="w-full border-t hover:bg-gray-100">
                <td colSpan={5} rowSpan={5} className="w-full text-center p-5">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;
