"use client";

import { Dispatch, SetStateAction } from "react";

interface ISettingsNav {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const SettingsNav = ({ active, setActive }: ISettingsNav) => {
  return (
    <div className="w-full p-4 md:p-5 rounded-xl bg-white flex justify-between sm:justify-start items-center md:gap-3 mt-10 font-bricolage font-medium text-xs sm:text-sm md:text-base">
      <button
        onClick={() => setActive(1)}
        className={`${
          active === 1 ? "bg-primary100 text-primary" : "text-neutrals500"
        } px-2 sm:px-3 md:px-4 py-2 rounded-lg whitespace-nowrap ease transition-all duration-300`}
      >
        Profile
      </button>

      <button
        onClick={() => setActive(2)}
        className={`${
          active === 2 ? "bg-primary100 text-primary" : "text-neutrals500"
        } px-2 sm:px-3 md:px-4 py-2 rounded-lg whitespace-nowrap ease transition-all duration-300`}
      >
        General settings
      </button>

      <button
        onClick={() => setActive(3)}
        className={`${
          active === 3 ? "bg-primary100 text-primary" : "text-neutrals500"
        } px-2 sm:px-3 md:px-4 py-2 rounded-lg whitespace-nowrap ease transition-all duration-300`}
      >
        Other settings
      </button>
    </div>
  );
};

export default SettingsNav;
