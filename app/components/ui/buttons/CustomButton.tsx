import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { IconType } from "react-icons";

// Extend native button props
interface ICustomButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  RightIcon?: IconType;
  LeftIcon?: IconType;
  color?: "primary" | "secondary" | "danger" | "gray";
  label: string;
}

const CustomButton = ({
  RightIcon,
  LeftIcon,
  color = "primary",
  label,
  className,
  ...rest // the rest includes all other button native props
}: ICustomButton) => {
  return (
    <button
      {...rest}
      className={`${
        color === "primary"
          ? "bg-primary text-white"
          : color === "secondary"
          ? "bg-secondary text-white"
          : color === "danger"
          ? "bg-error100 text-error200"
          : " text-neutrals700 bg-[#F7F7F7]"
      } focus:opacity-80 active:opacity-90 font-medium text-sm md:text-base flex justify-start items-center gap-2 h-12 px-4 rounded-lg ease transition-all duration-200 hover:opacity-55 ${
        className || ""
      }`}
    >
      {LeftIcon && <LeftIcon />}
      <p className="font-bricolage">{label}</p>
      {RightIcon && <RightIcon />}
    </button>
  );
};

export default CustomButton;
