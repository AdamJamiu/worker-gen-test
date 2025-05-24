import { FaUser } from "react-icons/fa6";
import { HiOutlineDatabase } from "react-icons/hi";
import { FaRecycle } from "react-icons/fa6";

interface IFirstCardProps {
  theme: "green" | "blue" | "yellow";
  organizations?: string;
  vendors?: string;
  individuals?: string;
  pending?: string;
  completed?: string;
  label: string;
  total?: any;
}

const FirstCard = ({
  theme,
  individuals,
  vendors,
  organizations,
  pending,
  completed,
  label,
  total,
}: IFirstCardProps) => {
  return (
    <div className="rounded-lg bg-white w-full px-4 py-5 font-clash_display">
      <div className="sm:w-max w-full">
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
              {total}
            </p>
            <p className="text-neutrals500 text-xs sm:text-sm">{label}</p>
          </div>
        </div>

        <div className="flex justify-start items-center mt-5 divide-x-[1px]">
          {individuals && (
            <div className="px-2">
              <p className="text-neutral-900 font-semibold text-xs sm:text-sm md:text-base tracking-wider">
                {individuals}
              </p>
              <p className="text-neutrals500 text-xs sm:text-sm">Individuals</p>
            </div>
          )}
          {vendors && (
            <div className="px-2">
              <p className="text-neutral-900 font-semibold text-xs sm:text-sm md:text-base tracking-wider">
                {vendors}
              </p>
              <p className="text-neutrals500 text-xs sm:text-sm">Vendors</p>
            </div>
          )}

          {organizations && (
            <div className="px-2">
              <p className="text-neutral-900 font-semibold text-xs sm:text-sm md:text-base tracking-wider">
                {organizations}
              </p>
              <p className="text-neutrals500 text-xs sm:text-sm">
                Organizations
              </p>
            </div>
          )}
          {pending && (
            <div className="px-2">
              <p className="text-neutral-900 font-semibold text-xs sm:text-sm md:text-base tracking-wider">
                {pending}
              </p>
              <p className="text-neutrals500 text-xs sm:text-sm">Pending</p>
            </div>
          )}
          {completed && (
            <div className="px-2">
              <p className="text-neutral-900 font-semibold text-xs sm:text-sm md:text-base tracking-wider">
                {completed}
              </p>
              <p className="text-neutrals500 text-xs sm:text-sm">
                Completed order
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
