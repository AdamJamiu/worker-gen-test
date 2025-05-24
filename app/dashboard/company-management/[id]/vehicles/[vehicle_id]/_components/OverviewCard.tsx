import income_Card from "../../../../../../assets/images/incomes-card.png";
import expneses_Card from "../../../../../../assets/images/expenses-card.png";
import profit_Card from "../../../../../../assets/images/profil-card.png";
import trips_Card from "../../../../../../assets/images/trips-card.png";
import fuel_Card from "../../../../../../assets/images/fuel-card.png";
import Image from "next/image";

interface IOverviewCard {
  quantity: string;
  label: string;
  type: "1" | "2" | "3" | "4" | "5";
}

const OverviewCard = ({ quantity, label, type }: IOverviewCard) => {
  return (
    <div className="w-full border rounded-xl px-4 py-7">
      <div className="flex justify-start items-start gap-3">
        <Image
          src={
            type === "1"
              ? profit_Card
              : type === "2"
              ? expneses_Card
              : type === "3"
              ? income_Card
              : type === "4"
              ? trips_Card
              : type === "5"
              ? fuel_Card
              : income_Card
          }
          alt="truck"
          width={70}
          height={100}
        />
        <div className="w-full text-left">
          <h1 className="text-neutrals900 font-semibold text-xl clash-display-semibold">
            {quantity}
          </h1>

          <p className="font-bricolage text-sm text-neutrals500">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
