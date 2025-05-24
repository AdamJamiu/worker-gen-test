"use client";

import Modal from "@/app/components/ui/Modal";
// import { adminCaller } from "@/app/interceptors";
import Image from "next/image";
// import { useParams, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
// import { toast } from "react-toastify";
import info_circle from "../../assets/images/info-circle.png";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  confirmActionFnc: () => Promise<void>;
  customActionText?: string;
}

const ActionModal = ({
  isOpen,
  setIsOpen,
  customActionText,
  confirmActionFnc,
}: IProps) => {
  const [loading, setLoading] = useState(false);

  const onClose = () => setIsOpen(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await confirmActionFnc();
      setIsOpen(false); // Optionally close modal on success
    } catch (error) {
      console.error("Action failed", error);
      // You can also show a toast here
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal title="" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="w-screen max-w-[450px] overflow-y-auto h-max mx-h-[70vh] bg-white rounded-lg p-5 flex flex-col font-bricolage mt-3">
        <Image
          src={info_circle}
          alt="info-circle"
          width={200}
          height={220}
          className="text-center mx-auto"
        />

        <p className="text-sm sm:text-base text-neutrals700 font-medium my-6 w-full text-center">
          Are you sure you want to take this action?
        </p>

        <div className="w-full gap-4 flex items-center justify-center mt-2">
          <button
            onClick={handleConfirm}
            disabled={loading}
            className="hover:opacity-80 ease transition-all px-4 py-2 rounded-lg bg-error200  text-white"
          >
            {loading ? "Please wait..." : customActionText || "Yes"}
          </button>
          <button
            onClick={onClose}
            disabled={loading}
            className="disabled:opacity-55 sm:text-base text-sm rounded-lg bg-neutrals100 text-primary hover:opacity-80 ease transition-all px-6 py-2 ease"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ActionModal;
