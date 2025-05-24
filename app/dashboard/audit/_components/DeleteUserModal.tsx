"use client";

import Modal from "@/app/components/ui/Modal";
import { adminCaller } from "@/app/interceptors";
import { useParams, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DeleteUserModal = ({ isOpen, setIsOpen }: IProps) => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useRouter();

  const onClose = () => setIsOpen(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await adminCaller.delete(
        `users/${params?.id}/delete-user`
      );

      if (response.data && response.data?.data) {
        onClose();
        toast.success("User deleted successfully");

        setTimeout(() => navigate.back(), 1500);
      } else {
        toast.error(response?.data?.data?.message || "Error deleting user");
      }
      setLoading(false);
      console.log("response", response);
    } catch (err: any) {
      setLoading(false);

      toast.error(err?.response?.data?.message || "Error deleting user");
    }
  };

  return (
    <Modal title="Delete user" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="w-screen max-w-[450px] overflow-y-auto h-max mx-h-[70vh] bg-white rounded-lg p-5 flex flex-col mt-8">
        <p className="text-sm text-[#1C1C1C]">
          Are you sure you want to delete this user?
        </p>

        <div className="w-full gap-4 flex items-center justify-start font-clash_display_medium mt-7">
          <button
            onClick={handleDelete}
            disabled={loading}
            className="hover:opacity-80 ease transition-all px-4 py-2 rounded-lg bg-error100 flex justify-center items-center gap-2.5 text-error900"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
          <button
            onClick={onClose}
            disabled={loading}
            className="disabled:opacity-55 sm:text-base text-sm rounded-lg bg-neutral-100 text-[#939393] hover:opacity-80 ease transition-all px-4 py-2 ease"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteUserModal;
