import { FaUser } from "react-icons/fa6";
import { HiOutlineDatabase } from "react-icons/hi";
import { FaRecycle } from "react-icons/fa6";
import MiniChart from "./MiniChart";
import { TiArrowSortedUp } from "react-icons/ti";

interface IDashOverviewCardProps {
  label: string;
  total?: any;
  percentage: string;
}

const DashOverviewCard = ({
  percentage,
  label,
  total,
}: IDashOverviewCardProps) => {
  return (
    <div className="rounded-xl bg-white w-full px-4 py-5 font-bricolage">
      <div className="w-full">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="font-medium w-full">
            <p className="text-neutrals700">{label}</p>
            <p className="text-xl md:text-2xl text-neutrals900 clash-display-semibold mt-2">
              {total}
            </p>
          </div>

          <MiniChart />
        </div>

        <div className="flex justify-between items-center mt-5 w-full text-sm">
          {/* {completed && ( */}
          <p className="text-neutrals500 font-medium">Since last month</p>

          <div
            className={`${
              +percentage > 14 ? "text-green200" : "text-error200"
            } flex justify-start items-center gap-1 font-semibold`}
          >
            <p className="">{percentage}%</p>
            <TiArrowSortedUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashOverviewCard;
