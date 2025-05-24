import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { IoFilterOutline } from "react-icons/io5";

const FilterButton = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      {...props}
      className="flex justify-start items-center gap-3 border border-neutrals200 text-neutrals500 h-12 px-4 rounded-lg ease transition-all duration-200 hover:bg-neutral-50"
    >
      <IoFilterOutline />
      <p className="font-bricolage text-sm md:text-base">Filter</p>
    </button>
  );
};

export default FilterButton;
