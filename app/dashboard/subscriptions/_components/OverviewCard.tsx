import currency_primary from "../../../assets/images/incomes-card.png";
import currency_green from "../../../assets/images/currency-primary.png";
import currency_yellow from "../../../assets/images/expenses-card.png";
import currency_red from "../../../assets/images/curreny-red.png";
import Image from "next/image";

interface IOverviewCard {
  quantity: string;
  label: string;
  type: "1" | "2" | "3" | "4";
}

const OverviewCard = ({ quantity, label, type }: IOverviewCard) => {
  return (
    <div className="w-full bg-white rounded-xl px-4 py-7">
      <div className="flex justify-start items-start gap-2">
        <Image
          src={
            type === "1"
              ? currency_primary
              : type === "2"
              ? currency_green
              : type === "3"
              ? currency_yellow
              : type === "4"
              ? currency_red
              : currency_primary
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
