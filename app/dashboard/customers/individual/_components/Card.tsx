import { FaUser } from "react-icons/fa6";
import { HiOutlineDatabase } from "react-icons/hi";
import { FaRecycle } from "react-icons/fa6";

interface ICardProps {
  theme: "green" | "blue" | "yellow";
  organizations?: string;
  vendors?: string;
  individuals?: string;
  pending?: string;
  completed?: string;
  label: string;
}

const Card = ({
  theme,
  individuals,
  vendors,
  organizations,
  pending,
  completed,
  label,
}: ICardProps) => {
  return (
    <div className="rounded-lg bg-white w-full px-4 py-5 font-clash_display">
      <div className="w-full">
        <div className="flex justify-start items-center gap-2">
          <div
            className={`${
              theme === "green"
                ? "bg-primary100"
                : theme === "blue"
                ? "bg-secondary200"
                : "bg-warning100"
            } px-3 py-4 rounded-sm`}
          >
            {theme === "green" ? (
              <FaUser className="text-primary" size={30} />
            ) : theme === "blue" ? (
              <HiOutlineDatabase className="text-secondary" size={30} />
            ) : theme === "yellow" ? (
              <FaRecycle className="text-warning" size={30} />
            ) : (
              <FaUser size={30} />
            )}
          </div>
          <div>
            <p className="font-clash_display_semibold text-xl md:text-2xl text-neutral-700">
              2000
            </p>
            <p className="text-neutrals500 text-xs sm:text-sm">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
