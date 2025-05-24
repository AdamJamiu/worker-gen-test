import active_blll from "../../../assets/images/active-blll.png";
import total_blll from "../../../assets/images/total-bill.png";
import pending_blll from "../../../assets/images/pending-bill.png";
import Image from "next/image";

interface IOverviewCard {
  quantity: string;
  label: string;
  type: "1" | "2" | "3";
}

const OverviewCard = ({ quantity, label, type }: IOverviewCard) => {
  return (
    <div className="w-full bg-white rounded-xl px-4 py-7">
      <div className="flex justify-start items-start gap-2">
        <Image
          src={
            type === "1"
              ? total_blll
              : type === "2"
              ? active_blll
              : pending_blll
          }
          alt="bill note"
          width={60}
          height={100}
        />
        <div className="w-full text-left">
          <h1 className="text-neutrals900 font-semibold text-xl sm:text-2xl clash-display-semibold">
            {quantity}
          </h1>

          <p className="font-bricolage text-sm md:text-base text-neutrals500">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
