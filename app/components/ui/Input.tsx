"use client";

import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export type TAppInput = {
  value: string | any;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  label: string;
  type?:
    | "text"
    | "datepicker"
    | "button"
    | "color"
    | "date"
    | "email"
    | "password"
    | "search"
    | "tel";
  className?: string;
};

const AppInput = ({ value, onChange, type, label, className }: TAppInput) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState(true);

  return (
    <div
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`${
        isFocused ? "ring-gray-500" : "ring-transparent"
      } relative ring-2 border border-gray-300 rounded-xl h-[58px] duration-200 ease-linear flex justify-start items-center pt-2 ${className}`}
    >
      <p
        className={`${
          isFocused || value
            ? "top-1 text-neutrals900"
            : "top-4 text-neutrals300"
        } font-clash_display_medium text-sm absolute left-3 ease-linear duration-150 transition-all`}
      >
        {label}
      </p>
      <input
        type={type === "password" && !isPassword ? "text" : type}
        className="bg-transparent py-2 pl-4 h-full w-full outline-none"
        value={value}
        onChange={(e) => onChange(e)}
      />

      {type === "password" ? (
        <div className="absolute right-3 top-3">
          <button
            onClick={() => setIsPassword((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 active:bg-gray-200 ease transition-all duration-200"
          >
            {!isPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export const AppTextArea = ({
  value,
  onChange,
  type,
  label,
  className,
}: TAppInput) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState(true);

  return (
    <div
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`${
        isFocused ? "ring-gray-500" : "ring-transparent"
      } relative ring-2 border border-gray-300 rounded-xl h-[58px] duration-200 ease-linear flex justify-start items-center pt-2 ${className}`}
    >
      <p
        className={`${
          isFocused || value ? "top-1" : "top-4"
        } font-satoshi_Variable text-sm absolute left-3 ease-linear duration-150 transition-all`}
      >
        {label}
      </p>
      <textarea
        className="bg-transparent py-2 pl-4 h-full w-full outline-none"
        value={value}
        rows={2}
        onChange={(e: any) => onChange(e)}
      />

      {type === "password" ? (
        <div className="absolute right-3 top-3">
          <button
            onClick={() => setIsPassword((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 active:bg-gray-200 ease transition-all duration-200"
          >
            {!isPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default AppInput;
