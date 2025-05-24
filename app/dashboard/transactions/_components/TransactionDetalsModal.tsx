"use client";

import Modal from "@/app/components/ui/Modal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { ITransaction } from "../type";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  details?: ITransaction;
}

const TransactionDetalsModal = ({ isOpen, setIsOpen, details }: IProps) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      withCloseButton
      title="Transaction details"
      isOpen={isOpen}
      onClose={handleCloseModal}
    >
      <div className="w-screen max-w-[600px] overflow-y-auto max-h-max h-[70vh] bg-white rounded-xl p-5 lg:p-8 flex flex-col mt-8 font-bricolage">
        <div className="p-4 rounded-xl border border-neutrals400 flex justify-between items-center gap-5 text-sm md:text-base text-neutrals700">
          <p>Plan payment</p>
          <p className="font-medium">+{details?.amount}</p>
        </div>

        {/* transaction details */}
        <div className="flex justify-between items-center gap-5 text-sm md:text-base text-neutrals700 mt-7 mb-4">
          <p>Details</p>

          <button className="flex justify-start items-center gap-2 text-primary">
            <BiDownload />
            <p>Download</p>
          </button>
        </div>

        <div className="rounded-xl border border-neutrals400 p-4 text-sm md:text-base space-y-4 w-full">
          <div className="flex justify-between items-center gap-5 text-neutrals700">
            <p className="text-neutrals500">Date</p>
            <p className="font-medium text-neutrals700">{details?.date}</p>
          </div>

          <div className="flex justify-between items-center gap-5">
            <p className="text-neutrals500">Time</p>
            <p className="font-medium text-neutrals700">{details?.time}</p>
          </div>

          <div className="flex justify-between items-center gap-5">
            <p className="text-neutrals500">Transaction type</p>
            <p className="font-medium text-neutrals700">{details?.type}</p>
          </div>

          <div className="flex justify-between items-center gap-5">
            <p className="text-neutrals500">Amount</p>
            <p className="font-medium text-neutrals700">{details?.amount}</p>
          </div>

          <div className="flex justify-between items-center gap-5">
            <p className="text-neutrals500">Status</p>
            <p
              className={`${
                details?.status === "Completed" ? "Active" : "pending"
              } font-medium text-neutrals700`}
            >
              {details?.status}
            </p>
          </div>
        </div>

        {/* user details */}

        <div className="flex justify-between items-center gap-5 text-sm md:text-base text-neutrals700 mt-7 mb-4">
          <p>User Details</p>
        </div>

        <div className="rounded-xl border border-neutrals400 p-4 text-sm md:text-base space-y-4 w-full">
          <div className="flex justify-between items-center gap-5 text-neutrals700">
            <p className="text-neutrals500">Customer name</p>
            <p className="font-medium text-neutrals700">{details?.name}</p>
          </div>

          <div className="flex justify-between items-center gap-5">
            <p className="text-neutrals500">Email</p>
            <p className="font-medium text-neutrals700">{details?.email}</p>
          </div>

          <div className="flex justify-between items-center gap-5">
            <p className="text-neutrals500">Address</p>
            <p className="font-medium text-neutrals700">123 ABC Rd, Onipanu</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionDetalsModal;
