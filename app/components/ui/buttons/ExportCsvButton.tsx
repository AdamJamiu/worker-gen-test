import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { GoDownload } from "react-icons/go";

const ExportCsvButton = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      {...props}
      className="text-sm md:text-base flex justify-start items-center gap-2 border border-primary text-primary h-12 px-4 rounded-lg ease transition-all duration-200 hover:opacity-55"
    >
      <GoDownload />
      <p className="font-bricolage">Export CSV</p>
    </button>
  );
};

export default ExportCsvButton;
