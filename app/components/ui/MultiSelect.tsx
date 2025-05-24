"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import clearIcon from "../../assets/images/clearIcon.svg";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

interface IMultiSelectProps {
  label: string;
  selectedValues: string[];
  setSelectedValues: Dispatch<SetStateAction<string[]>>;
}

const MultiSelect = ({
  label,
  selectedValues,
  setSelectedValues,
}: IMultiSelectProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  //   const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleAddValue = () => {
    if (inputValue.trim() && !selectedValues.includes(inputValue.trim())) {
      setSelectedValues([...selectedValues, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveValue = (value: string) => {
    setSelectedValues(selectedValues.filter((item) => item !== value));
  };

  return (
    <div className="border-2 p-3.5 rounded-lg border-dashed">
      <label className="text-[#222222] font-clash_display_medium">
        {label}
      </label>

      <div className="flex flex-wrap gap-2 my-3">
        {selectedValues.map((value, index) => (
          <div
            key={index}
            className="flex items-center px-2 py-0.5 bg-[#ddd] rounded-full gap-1"
          >
            <p>{value}</p>
            <button onClick={() => handleRemoveValue(value)}>
              <Image src={clearIcon} alt="clear icon" width={15} height={15} />
            </button>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-start items-center gap-2">
        <input
          title="Type and add waste subcategory"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type and add"
          className="outline-none rounded-lg border border-[#E0E0E0] p-2 w-full"
          // style={{ width: "calc(100% - 60px)" }}
        />
        <button
          disabled={!inputValue}
          onClick={handleAddValue}
          className="ml-1.5 p-1.5 border-primary border rounded-lg text-primary ease transition-all duration-200 hover:bg-primary100 disabled:opacity-55 disabled:cursor-not-allowed flex justify-start items-center gap-1"
        >
          <FaPlus />
          <p>Add</p>
        </button>
      </div>
    </div>
  );
};

export default MultiSelect;
