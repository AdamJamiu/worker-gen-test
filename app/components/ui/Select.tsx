"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoChevronDown } from "react-icons/io5";

export interface IOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: IOption[];
  selected: IOption | null;
  onChange: (option: IOption) => void;
  placeholder?: string;
}

const Select = ({
  options = [],
  selected,
  onChange,
  placeholder,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStyles, setDropdownStyles] = useState({});
  const selectRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      setDropdownStyles({
        position: "absolute",
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        width: `${rect.width}px`,
        zIndex: 1000,
      });
    }
  }, [isOpen]);

  const dropdown = (
    <ul
      ref={dropdownRef}
      style={dropdownStyles as React.CSSProperties}
      className="bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto"
    >
      {options.map((option) => (
        <li
          key={option.value}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100 capitalize"
          onClick={() => {
            onChange(option);
            setIsOpen(false);
          }}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div ref={selectRef} className="relative min-w-max w-full">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex gap-4 xl:gap-7 items-center justify-between w-full p-3 bg-white border border-gray-300 rounded-lg cursor-pointer shadow-sm hover:border-gray-400"
        >
          <span
            className={`${
              selected?.value ? "text-neutrals700" : "text-neutrals500"
            } text-sm 2xl:text-base capitalize`}
          >
            {selected?.label || placeholder || "Select an option"}
          </span>
          <IoChevronDown
            className={`text-neutrals500 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {isOpen &&
        typeof window !== "undefined" &&
        createPortal(dropdown, document.body)}
    </>
  );
};

export default Select;
