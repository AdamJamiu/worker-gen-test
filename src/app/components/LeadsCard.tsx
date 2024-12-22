"use client";

import { TLeads } from "@/types/lead";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { TbMessageUser } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import useApp from "@/hooks/useApp";

const LeadsCard = ({
  avatar,
  comment,
  company,
  messageType,
  name,
  position,
  type,
  about,
}: TLeads) => {
  const { setIsEngageDetailsOpen, setEngageDetails } = useApp();

  const handleOpenModal = () => {
    setIsEngageDetailsOpen(true);
    setEngageDetails({
      avatar,
      comment,
      company,
      messageType,
      name,
      position,
      type,
      about,
    });
  };

  return (
    <div
      onClick={handleOpenModal}
      role="button"
      className="rounded-2xl border w-full p-3 md:p-4 bg-white"
    >
      <div className="flex justify-start items-center gap-2 w-full">
        <div className="rounded-full">
          <Image
            src={avatar}
            alt={name}
            height={25}
            width={25}
            loading="lazy"
            className="rounded-full w-[40px] h-[40px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <p className="font-semibold text-xs lg:text-sm">{name}</p>
          <div className="flex justify-start items-center w-full text-gray-500 text-[10px] lg:text-xs">
            <span className="flex-auto">{position}</span>
            <BsDot />
            <span className="flex-auto">{company}</span>
          </div>
        </div>
      </div>
      <div className="p-2 md:p-3 bg-[#F7F6FF] relative rounded-xl text-xs 2xl:text-sm mt-4 text-gray-700">
        <div className="flex justify-start items-center w-full gap-2">
          <TbMessageUser />
          <p className="font-bold capitalize">
            {type === "engage"
              ? `engage with  ${name}`
              : `prepring meeting with  ${name.split(" ")[0]}`}
          </p>
        </div>
        <p className="">{comment}</p>
        <div className="absolute -top-1 -right-1 p-2 bg-white text-purple-600 z-40 w-fit rounded-xl">
          <BsStars />
        </div>
      </div>

      <p className="mt-3 w-full text-gray-500 text-xs">{messageType}</p>
    </div>
  );
};

export default LeadsCard;
