import truck_primary from "../../../../../assets/images/truck-primary.png";
import truck_grey from "../../../../../assets/images/truck-grey.png";
import truck_green from "../../../../../assets/images/truck-green.png";
import Image from "next/image";

interface IVehicleOverviewCard {
  quantity: string;
  label: string;
  type: "1" | "2" | "3";
}

const VehicleOverviewCard = ({
  quantity,
  label,
  type,
}: IVehicleOverviewCard) => {
  return (
    <div className="w-full border border-neutrals400 rounded-xl px-4 py-7">
      <div className="flex justify-start items-start gap-3">
        <Image
          src={
            type === "1"
              ? truck_primary
              : type === "2"
              ? truck_green
              : truck_grey
          }
          alt="truck"
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

export default VehicleOverviewCard;
