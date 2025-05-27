"use client";

import { Dispatch, SetStateAction } from "react";

interface ISwitchProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Switch = ({ isOpen, setIsOpen }: ISwitchProps) => {
  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className={`${
        isOpen ? "bg-primary" : "bg-neutrals300"
      } rounded-full p-0.5 ease transition-all duration-200 w-11 h-6`}
    >
      <div
        className={`${
          isOpen ? "translate-x-full" : "translate-x-0"
        } rounded-full w-5 h-5 ease transition-all duration-300 bg-white`}
      ></div>
    </button>
  );
};

export default Switch;
